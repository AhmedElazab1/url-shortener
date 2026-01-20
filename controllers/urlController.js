const urlService = require("../services/urlService");

const shortenUrl = async (req, res) => {
  try {
    const { urlInput, aliasInput } = req.body;

    await urlService.createShortUrl(urlInput, aliasInput);

    res.redirect("/");
  } catch (error) {
    console.log(error);
    if (error.message === "Alias already exists") {
      return res.status(400).send("Alias already exists");
    }
    res.status(500).send("Internal server error");
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { alias } = req.params;
    const url = await urlService.getUrlByAlias(alias);

    if (!url) {
      return res.status(404).send("URL not found");
    }
    res.redirect(url.originalUrl);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  shortenUrl,
  redirectUrl,
};
