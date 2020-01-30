const aboutRoutes = require("./about");
const storyRoutes = require("./story");
const eduRoutes = require("./education");

const constructorMethod = app => {
  app.use("/about", aboutRoutes);
  app.use("/story", storyRoutes);
  app.use("/education", eduRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;