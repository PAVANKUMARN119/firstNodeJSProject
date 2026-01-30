const authHandler = (req, res, next) => {
  const token = "xyz";
  isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("not authorised user");
  } else next();
};

module.exports = {
  authHandler,
};
