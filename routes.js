import Router from "express";

import { addCharacter, characterID, deleteById, getCharacter } from "./controllers/characterController.js";

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

router.delete("/:id", (req, res) => {
  deleteById(req,res)
})

export default router;