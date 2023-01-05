import Router from "express";

import { addCharacter, characterID, getCharacter } from "./controllers/characterController.js";

const router = Router();

router.get("/", (req, res) => {
  getCharacter(req,res)
})

router.get("/:id", (req, res) => {
  characterID(req, res)
})

router.post("/", (req, res) => {
  addCharacter(req,res)
})





export default router;