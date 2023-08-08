import File from "../../database/model/File";

async function profilePicture(req, res) {
  File.create({
    ...req.file,
    path: req.file.path.replace("public/", ""),
    created_by: 1,
  })
    .then(function (data) {
      res.status(200).json({ message: "profile picture", data });
    })
    .catch(function (error) {
      res.status(500).json({ message: "server error", error });
    });
}

const uploadController = { profilePicture };

export default uploadController;
