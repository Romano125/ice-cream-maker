module.exports = {
  ICE_CREAMS: "/ice-creams",
  ICE_CREAMS_CREATE: "/ice-creams/create",

  build: (path, ...params) =>
    path.replace(/(:\w+)/g, () => params.shift() || ""),
};
