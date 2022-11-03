import { Router } from "express";
import albumsRoutes from "./albums.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/albums", albumsRoutes);

export default router;