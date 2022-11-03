import db from "../db/connection.js";
import Album from "../models/Album.js";
import albums from "./albums.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert data
  await Album.create(albums);

  // close db connection
  await db.close();
};

insertData();