const express = require('express');
const router = express.Router();
const Details = require('../models/DetailsModel')


router.route("/create").post((req,res) => {
    const name = req.body.name;
    const Category = req.body.Category;
    const Type =  req.body.Type;
    const Spec1 = req.body.Spec1;
    const Spec2 = req.body.Spec2;
    const Spec3 = req.body.Spec3;
    const Spec4 = req.body.Spec4;

    const newDetails = new Details({
        name,
        Category,
        Type,
        Spec1,
        Spec2,
        Spec3,
        Spec4
    });
    newDetails.save();
});

module.exports = router;