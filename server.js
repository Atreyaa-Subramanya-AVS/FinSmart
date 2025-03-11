require("dotenv").config();
const express = require("express");
// const passport = require("passport"); // Duplicate declaration removed
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
<<<<<<< Updated upstream
const GitHubStrategy = require("passport-github2").Strategy;
=======
const session = require("express-session");
const passport = require("passport");

>>>>>>> Stashed changes
require("./config/passport");



const app = express();

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET || "mysecret",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// ✅ Connect MongoDB (LOCALHOST)
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/finsmartDB";  // Default to localhost
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ User Schema & Model
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
<<<<<<< Updated upstream
    password: { type: String }
=======
    password: { type: String, required: true },
>>>>>>> Stashed changes
});

const User = mongoose.model("User", UserSchema);

// ✅ JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// ✅ Middleware to Verify JWT Token
const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

// ✅ Register User
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Login User
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ message: "Login successful", token });
});

// ✅ Delete User Account
app.delete("/delete", authenticateUser, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user._id);
        res.json({ message: "Account deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting account" });
    }
});

// ✅ Google OAuth Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }),
    (req, res) => {
        res.redirect("http://localhost:3000/dashboard");
    }
);

app.get("/auth/user", (req, res) => {
    res.json(req.user || null);
});

app.get("/auth/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect("http://localhost:5173");
    });
});

<<<<<<< Updated upstream
// ✅ GitHub OAuth Configuration
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/github/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ username: profile.username });
                if (!user) {
                    user = new User({ username: profile.username, password: null });
                    await user.save();
                }
                return done(null, user);
            } catch (err) {
                return done(err, null);
            }
        }
    )
);

// ✅ GitHub OAuth Routes
app.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));

app.get(
    "/auth/github/callback",
    passport.authenticate("github", { failureRedirect: "http://localhost:3000/login" }),
    (req, res) => {
        res.redirect("http://localhost:3000/dashboard");
    }
);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
// ✅ Start Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
>>>>>>> Stashed changes
