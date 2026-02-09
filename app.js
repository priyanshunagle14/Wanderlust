if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const flash = require("connect-flash");
const passport = require("passport");
const User = require("./models/user.js");

// Routes
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// =====================
// DATABASE URL
// =====================
const dbUrl = process.env.ATLASDB_URL;

// =====================
// DATABASE CONNECTION
// =====================
main()
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

// =====================
// VIEW ENGINE
// =====================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// =====================
// MIDDLEWARE
// =====================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// =====================
// SESSION STORE (connect-mongo v5)
// =====================
const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret:process.env.SECRET,
  },
  touchAfter: 24 * 3600, // 1 day
});

store.on("error", (err) => {
  console.log("❌ ERROR IN MONGO SESSION STORE", err);
});

// =====================
// SESSION CONFIG
// =====================
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
};

app.use(session(sessionOptions));
app.use(flash());

// =====================
// PASSPORT CONFIG
// =====================
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =====================
// FLASH MESSAGES
// =====================
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// =====================
// ROUTES
// =====================
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

// =====================
// 404 HANDLER
// =====================
app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

// =====================
// ERROR HANDLER
// =====================
app.use((err, req, res, next) => {
  let { statusCode = 500 } = err;
  if (!err.message) err.message = "Something went wrong!";
  res.status(statusCode).render("error.ejs", { err });
});

// =====================
// SERVER
// =====================
app.listen(8080, () => {
  console.log(" Server running on port 8080");
});
