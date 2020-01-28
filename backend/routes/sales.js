const router = require("express").Router();
let Sale = require("../models/sale.model");

router.route("/").get((req, res) => {
  Sale.find()
    .then(sales => res.json(sales))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const ide = Number(req.body.ide);
  const employee_id = req.body.employee_id;
  const carmodel_id = req.body.carmodel_id;

  const newSale = new Sale({
    ide,
    employee_id,
    carmodel_id
  });

  newSale
    .save()
    .then(() => res.json("A new sale has been added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
