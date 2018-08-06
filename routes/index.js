const path = require("path");
const router = require("express").Router();
const blogRoutes = require("./blog/blogRoutes");
const apiRoutes = require("./api/apiRoutes");
const projectRoutes = require("./project/projectRoutes");

router.use("/blog", blogRoutes);
router.use("/project", projectRoutes);
router.use("/get", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
