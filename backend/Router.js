const router = require("express").Router();
const startspam = require("./startspam.js");
router.post('/send' , startspam.first);

module.exports = router;