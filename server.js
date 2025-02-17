require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("./config/passport");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
    (req, res) => {
        res.redirect("http://localhost:5173/dashboard");
    }
);

require("./config/passport");

app.get("/auth/user", (req, res) => {
    res.json(req.user || null);
});

app.get("/auth/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect("http://localhost:5173");
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));