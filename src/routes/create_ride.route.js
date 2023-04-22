const express = require("express");
const db = require("../db");
const RidesModel = require("../Models/RidesModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to my web application yep!" });
});

router
  .route("/RidesModel")
  .get((req, res) => {
    RidesModel.find()
      .then((ridemodels) => {
        res.json(ridemodels);
      })
      .catch((err) => {
        res.send(err);
      });
  })
  .post((req, res) => {
    const ridemodels = new RidesModel();
    mymodel.user = req.body.user;
    mymodel.destination = req.body.destination;
    mymodel
      .save()
      .then(() => {
        res.json({ message: "RideModels created!" });
      })
      .catch((err) => {
        res.send(err);
      });
  });

module.exports = router;
