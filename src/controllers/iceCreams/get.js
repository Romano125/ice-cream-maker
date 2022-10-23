const { db } = require("../../db");
const { paths } = require("../../constants");

module.exports = async (req, res, next) => {
  try {
    const iceCreams = await db.iceCream.findMany();
    return res.status(200).render("iceCreams.njk", {
      iceCreams,
      createIceCreamPath: paths.ICE_CREAMS_CREATE,
    });
  } catch (error) {
    return next(error);
  }
};
