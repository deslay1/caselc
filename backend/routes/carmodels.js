const router = require("express").Router();
let Carmodel = require("../models/carmodel.model");

router.route("/").get((req, res) => {
  Carmodel.find()
    .then(carmodels => res.json(carmodels))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const ide = Number(req.body.ide);
  const brand = req.body.brand;
  const model = req.body.model;
  const price = Number(req.body.price);

  const newCarmodel = new Carmodel({
    ide,
    brand,
    model,
    price
  });

  newCarmodel
    .save()
    .then(() => res.json("Carmodel added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

/* router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err));
}); */

router.route("/:id").delete((req, res) => {
  Carmodel.findByIdAndDelete(req.params.id)
    .then(() => res.json("Carmodel deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

/* router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
}); */

module.exports = router;
