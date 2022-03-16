module.exports = (app) => {
  app
    .route("/api/v1/prices")
    .get((req, res) => res.status(200).json({ message: "Hello World!" }));
};
