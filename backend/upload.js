const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Répertoire où les fichiers seront stockés
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nom unique du fichier
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
