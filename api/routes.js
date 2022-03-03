const router = require('express').Router();
const upload = require('../Middleware/upload');
const { insertData, getAllData, getDataByID, updateData, deleteByID } = require('./controller');

router.post("/", upload.single('img'),insertData)
router.get("/", getAllData)
router.get("/:id", getDataByID)
router.patch("/:id", upload.single('img'),updateData)
router.delete("/:id", deleteByID)

module.exports = router;