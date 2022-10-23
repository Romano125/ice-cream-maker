const { db } = require("../../db");
const { paths } = require("../../constants");

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    await db.iceCream.create({ data: body });
    return res.status(200).redirect(paths.ICE_CREAMS);
  } catch (error) {
    return next(error);
  }
};
