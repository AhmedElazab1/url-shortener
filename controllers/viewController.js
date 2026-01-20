const urlService = require("../services/urlService");

const renderHomePage = async (req, res) => {
  try {
    const urls = await urlService.getAllUrls();
    res.render("index", {
      title: "Express",
      urls,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  renderHomePage,
};
