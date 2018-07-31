const path = require("path");
const router = require("express").Router();
const blogRoutes = require("./blog/blogRoutes");
const apiRoutes = require("./api/apiRoutes");

router.use("/blog", blogRoutes);
router.use("/get", apiRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
