const { iceCreams } = require("../controllers");
const { paths } = require("../constants");

module.exports = (router) => {
  router.get(paths.ICE_CREAMS, iceCreams.get);
  router.post(paths.ICE_CREAMS, iceCreams.create);
  router.get(paths.ICE_CREAMS_CREATE, (req, res) =>
    res.render("createIceCream.njk")
  );
};
