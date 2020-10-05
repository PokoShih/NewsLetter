const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");

router.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    // console.log(res);
    console.log("response?")
    res.json({
        email: req.user.email,
        id: req.user.id
    });
});


router.post("/api/signup", (req, res) => {

    db.adminData.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(() => {
            res.json("Success");
        })
        .catch(err => {
            res.status(401).json(err);
        });
});

router.post("/api/admincontent", (req, res) => {

    db.adminData.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(() => {
            res.json("Success");
        })
        .catch(err => {
            res.status(401).json(err);
        });
});



module.exports = router;
