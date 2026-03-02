const express = require("express");
const router = express.Router();
const recipes = require("../data/recipes");

// Index
router.get("/", (req, res) => {
  const responseData = {
    message: "Index of all posts",
    result: recipes,
    success: true,
  };

  res.json(responseData);
});

// Show
router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const recipe = recipes.find((recipe) => recipe.id === postId);

  if (!recipe) {
    const responseData = {
      message: `Recipe ${postId} not found`,
      success: false,
    };

    res.status(404).json(responseData);
  }

  const responseData = {
    message: `Post ${postId} detail content`,
    result: recipe,
    success: true,
  };

  res.json(responseData);
});

// Store
router.post("/", (req, res) => {
  const responseData = {
    result: `Post Creation`,
    success: true,
  };

  res.json(responseData);
});

// Update
router.put("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} Update`,
    success: true,
  };

  res.json(responseData);
});

// Modify
router.patch("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} partial update`,
    success: true,
  };

  res.json(responseData);
});

// Destroy
router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  const responseData = {
    result: `Post ${postId} delete`,
    success: true,
  };

  res.json(responseData);
});

module.exports = router;
