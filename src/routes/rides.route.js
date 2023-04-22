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

/*
 * @Params:
 *      tripId: Unique String ID that identifies the ride
 * @Returns:
 *      Returns ride object if found, 404 if object not found, 500 if there is a server error.
 */
router.get("/get_ride/:ride_id", async (req, res) => {
  const ride_id = req.params.ride_id;
  try {
    const ride = await RidesModel.findOne({ ride_id: ride_id });
    if (!ride) {
        return res.status(404).json({ message: "Trip not found" });
    }
    res.json(ride);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
