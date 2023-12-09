const express = require("express");
const app = express();
const multer = require("multer");
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect("mongodb://localhost/contentList")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log("couldn't connect to mongodb", error);
  });

const contentListchema = new mongoose.Schema({
  title: String,
  release_year: String, 
  genre: String,
  img: String,
  _id: mongoose.SchemaTypes.ObjectId,
});

const content = mongoose.model("content", contentListchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/contentList", (req, res) => {
  getcontentList(res);
});

const getcontentList = async (res) => {
  const contentList = await content.find();
  res.send(contentList);
};

app.get("/api/contentList/:id", (req, res) => {
  getcontent(req.params.id, res);
});

const getcontent = async (id, res) => {
  const content = await content.findOne({ _id: id });
  res.send(content);
};

app.post("/api/contentList", upload.single("img"), (req, res) => {
  const result = validatecontent(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const content = new content({
    title: req.body.title,
    release_year: req.body.release_year,
    genre: req.body.genre
  });

  if (req.file) {
    content.img = "images/" + req.file.filename;
  }

  createcontent(content, res);
});

const createcontent = async (content, res) => {
  const result = await content.save();
  res.send(content);
};

app.put("/api/contentList/:id", upload.single("img"), (req, res) => {
  const result = validatecontent(req.body);
  console.log(result);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  updatecontent(req, res);
});

const updatecontent = async (req, res) => {
  let fieldsToUpdate = {
    title: req.body.title,
    release_year: req.body.release_year,
    genre: req.body.genre
  };

  if (req.file) {
    fieldsToUpdate.img = "images/" + req.file.filename;
  }

  const result = await content.updateOne({ _id: req.params.id }, fieldsToUpdate);

  res.send(result);
};

app.delete("/api/contentList/:id", (req, res) => {
  removecontent(res, req.params.id);
});

const removecontent = async (res, id) => {
  const content = await content.findByIdAndDelete(id);
  res.send(content);
};

function validatecontent(content) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    release_year: Joi.string().min(3).required(),
    genre: Joi.string().min(3).required(),
    _id: Joi.allow(""),
  });

  return schema.validate(content);
}

app.listen(3000, () => {
  console.log("I'm listening");
});