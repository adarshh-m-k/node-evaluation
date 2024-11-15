let express = require('express')

let router = express.Router()

let { createData, readData, updateData, deleteData } = require('../controller/dataController')

router.post('/create-data', createData)
router.get('/read-data', readData)
router.put('/update-data/:id', updateData)
router.delete('/delete-data/:id', deleteData)

module.exports = router;