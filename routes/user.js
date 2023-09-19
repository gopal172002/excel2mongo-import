const express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: true }));

// Set up Multerr
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
console.log(__dirname)
var upload = multer({ storage: storage });


// Import userController
const userController = require('../controller/userController');

// Define a POST route for importing users
router.post('/importUser', upload.single('file'), userController.importUser);


router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;

  