const characterArr = ["Roland","Eddie","Jake","Susannah","Oy"]

export const getCharacter = (req, res) => {
  res.status(200).send({
    message: "Here is the Ka-tet of 19 and 99",
    characters: characterArr
  })
}

export const characterID = (req, res) => {
  const id = parseInt(req.params.id)
  res.status(200).send({
    character: characterArr[id] || "Character not found, D'ya ken?"
  })
}

export const addCharacter =(req, res) => {
  characterArr.push(req.body.student)
  res.status(201).send({
    message: "All things serve the Beam"
  })
}