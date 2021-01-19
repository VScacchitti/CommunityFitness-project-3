const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../../middleware/auth");
const User = require("../../../models/user/user");
const userController = require("../../../controllers/userController");

// Register
router.post("/register", async (req, res) => {
    try { 
    let {email, password, passwordConfirm, name} = req.body;

    // Validate
    if (!email || !password || !passwordConfirm || !name)
        return res
            .status(400)
            .json({msg: "Not all fields have been entered." });
    if (password.length < 5)
        return res
            .status(400)
            .json({ msg: "The password needs to be at least six characters long." });
    if (password !== passwordConfirm)
        return res
            .status(400)
            .json({ msg: "Enter the same password twice for verification." });

    // Check for existing user
    const existingUser = await User.findOne({email: email})
    if (existingUser)
        return res
            .status(400)
            .json({ msg: "An account with this email already exists." });
    
    // Hashing
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Save User
    const newUser = new User({
        email,
        password: passwordHash,
        name
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate
        if (!email || !password)
            return res.status(400).json({ msg: "Not all fields have been entered." });

        const user = await User.findOne({ email: email });
        if (!user)
        return res
            .status(400)
            .json({ msg: "No account with this email has been registered"});

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
        return res
            .status(400)
            .json({ msg: "Invalid credentials." });
        
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

// Delete user
router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

// Token validation
router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.JWT_TOKEN);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

// Get user information
router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        name: user.name,
        id: user.id,
    });
});

module.exports = router;