import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Album = new Schema({
  title: { type: String },
  yearRecorded: { type: String },
  releaseDate: { type: String },
  releaseYear: { type: Number },
  lengthSeconds: { type: Number },
  lengthMinutes: { type: String },
  genre: { type: String },
  albumType: { type: String },
  label: { type: String },
  ukChartPosition: { type: Number },
  ukGold: { type: Boolean },
  ukPlatinum: { type: Boolean },
  usGold: { type: Boolean },
  songs: [{ type: String }],
  review: { type: String },
  img: { type: String },
  spotifyLink: { type: String },
  appleMusicLink: { type: String}
});

export default mongoose.model("albums", Album);