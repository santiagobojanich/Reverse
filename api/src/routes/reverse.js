const Router = require("express");
const router = Router();

router.get("/", function (req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).send({ error: "No Text" });
  }

  let reversed = text.split("").reverse().join("");

  if (text.toLowerCase() === reversed.toLowerCase()) {
    return res.status(200).send({ text: reversed, palindrome: true });
  } else {
    return res.status(200).send({ text: reversed });
  }
});

module.exports = router;
