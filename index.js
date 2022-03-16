const express = require("express");

const PORT = process.env.PORT || 5000;

const apiApp = express();

require("api/v1/prices.js")(apiApp);

apiApp.listen(PORT, () => console.log(`Listening on ${PORT}`));
