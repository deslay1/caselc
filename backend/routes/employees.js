const router = require("express").Router();
let Employee = require("../models/employee.model");

router.route("/").get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const ide = Number(req.body.ide);
  const name = req.body.name;

  const newEmployee = new Employee({
    ide,
    name
  });

  newEmployee
    .save()
    .then(() => res.json("Employee added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
