const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
  const recipes = [
    {
      title: "Ciambellone classico",
      content: "...",
      img: "imgs/ciambellone.jpeg",
      tags: ["ciambellone", "ricetta", "dolce"],
    },
    {
      title: "Cracker di barbabietola",
      content: "...",
      img: "imgs/cracker_barbabietola.jpeg",
      tags: ["cracker", "barbabietola", "fit", "healthy"],
    },
    {
      title: "Pane fritto dolce",
      content: "...",
      img: "imgs/pane_fritto_dolce.jpeg",
      tags: ["pane", "fritto", "dolce", "frittura"],
    },
    {
      title: "Pasta con barbabietole",
      content: "...",
      img: "imgs/pasta_barbabietola.jpeg",
      tags: ["pasta", "barbabietola", "health"],
    },
    {
      title: "Torta Paesana",
      content: "...",
      img: "imgs/torta_paesana.jpeg",
      tags: ["torta", "paesana", "tradizione", "dolce"],
    },
  ];

  const responseData = {
    message: "Index of all posts",
    result: recipes,
    success: true,
  };

  res.json(responseData);
});

// Show
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    message: `Post ${postId} detail content`,
    success: true,
  };

  res.json(responseData);
});

module.exports = router;
