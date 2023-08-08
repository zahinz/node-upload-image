import multer from "multer";
import path from "path";

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/upload/image");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const image = multer({ storage: imageStorage });

const upload = { image };

export default upload;
