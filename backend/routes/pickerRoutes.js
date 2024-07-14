const express = require("express");
const router = express.Router();
const pickerController = require("../controllers/pickerController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, pickerController.registerPicker);
router.get("/", pickerController.getPickers);

module.exports = router;
