const express = require('express');
const app = express();

const DOMAIN = "picolabs";
const PICO_ENGINE_HOST = "http://localhost:8080";
const REGISTRY_PICO_ECI = "EH3vvJjseo2BDoVayYA1MF";

app.get('/:tagID', function (req, res) {
  const tagID = req.params.tagID;
  if(!tagID) {
      res.status(400).send("Missing tagID!");
    }
  else {
    res.redirect(`${PICO_ENGINE_HOST}/sky/event/${REGISTRY_PICO_ECI}/none/safeandmine/redirect?tagID=${tagID}&domain=${DOMAIN}`);
  }
});

app.listen(process.env.PORT || 3001);
