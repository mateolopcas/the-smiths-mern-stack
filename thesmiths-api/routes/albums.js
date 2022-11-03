import { Router } from "express";
import * as controllers from "../controllers/albums.js";

const router = Router();

router.get("/", controllers.getAlbums);
router.get("/:id", controllers.getAlbum);
router.get("/title/:title", controllers.getAlbumByTitle);
router.post("/", controllers.createAlbum);
router.put("/:id", controllers.updateAlbum);
router.delete("/:id", controllers.deleteAlbum);

export default router;