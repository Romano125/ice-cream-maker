const express = require("express");

const iceCreams = require("./iceCreams");

const { paths } = require("../constants");

const router = express.Router();

module.exports = () => {
  iceCreams(router);

  router.use("/", (req, res) => res.redirect(paths.ICE_CREAMS));
  router.use("*", (req, res) => res.status(404).end());

  return router;
};
