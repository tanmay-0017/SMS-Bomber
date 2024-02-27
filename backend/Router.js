const router = require("express").Router();
const startspam = require("./startspam");
router.post('/send' , startspam.first);

module.exports = router;