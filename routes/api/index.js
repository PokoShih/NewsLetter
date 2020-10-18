const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");

router.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    // console.log(res);
    console.log(req.user);
    db.adminData.findOne({ email: req.user.email })
        .then((user) => {
            res.json(
                // {
                user
                // email: req.user.email,
                // id: req.user.id,
                // admin: req.user.admin,
                // }
            );
        })
});

router.post("/api/signup", (req, res) => {
    db.adminData.create({
        email: req.body.email,
        password: req.body.password,
    })
        .then(() => {
            res.json("Success");
        })
        .catch(err => {
            res.status(401).json(err);
        });
});

router.post("/api/admincontent", (req, res) => {
    console.log(req.body)
    db.adminContent.findByIdAndUpdate("5f8a5cd86beb4b9bd9e2808e",
        {
            adminSales: req.body.adminSales,
            adminPromotions: req.body.adminPromotions,
            adminNews: req.body.adminNews,
            adminSafety: req.body.adminSafety,
            adminAchievements: req.body.adminAchievements,
            adminBirthdays: req.body.adminBirthdays,
        }, { upsert: true })
        .then(() => {
            res.json("Success");
        })
        .catch(err => {
            res.status(401).json(err);
        });
});

router.get("/api/admincontent", (req, res) => {
    db.adminContent.find({
    })
        .then((data) => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            res.status(401).json(err);
        });
})

module.exports = router;
