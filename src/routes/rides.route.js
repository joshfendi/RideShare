const express = require("express");
const db = require("../db");
const RidesModel = require("../Models/RidesModel");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "rides API yep" });
});

/*
 * @Params:
 *      None
 * @Returns:
 *      All rides currently in table
 */
router.route("/get_rides").get((req, res) => {
  RidesModel.find()
    .then((ridemodels) => {
      res.json(ridemodels);
    })
    .catch((err) => {
      res.send(err);
    });
});

/*
 * @Params:
 *      Ride object: See doc for schema
 * @Returns:
 *      Success or Fail code
 */
router.post("/add_ride", (req, res) => {
  const ridemodels = new RidesModel();
  ridemodels.user = req.body.user;
  ridemodels.date = req.body.date;
  ridemodels.origin = req.body.origin;
  ridemodels.destination = req.body.destination;
  ridemodels.uber = req.body.uber;
  ridemodels.price = req.body.price;
  ridemodels.payment_type = req.body.payment_type;
  ridemodels
    .save()
    .then(() => {
      res.json({ message: "RideModel Created!" });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
