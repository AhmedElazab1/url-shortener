const Url = require("../models/Url");
const { nanoid } = require("nanoid");

const getAllUrls = async () => {
  return await Url.find();
};

const getUrlByAlias = async (alias) => {
  return await Url.findOne({ alias });
};

const createShortUrl = async (urlInput, aliasInput) => {
  if (!aliasInput) {
    aliasInput = nanoid(6);
  }

  const existingAlias = await Url.findOne({ alias: aliasInput });
  if (existingAlias) {
    throw new Error("Alias already exists");
  }

  const newUrl = new Url({
    originalUrl: urlInput,
    alias: aliasInput,
  });

  return await newUrl.save();
};

module.exports = {
  getAllUrls,
  getUrlByAlias,
  createShortUrl,
};
