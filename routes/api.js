const express = require('express');
const router = express.Router();

const {createbmwandlowerfive,createmaleandgreaterten,lastname,carbrand,avg} = require('../controllers/api');

router.get('/create-male',createmaleandgreaterten);
router.get('/create-bmw',createbmwandlowerfive);
router.get('/last-name',lastname);
router.get('/car-brand',carbrand);
router.get('/avg',avg);

module.exports  = router;