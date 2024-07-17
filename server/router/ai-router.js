const express = require('express');
const router = express.Router();
const aiForm = require("../controllers/ai-controller");

router.route("/ai").post(aiForm); 

module.exports = router;
