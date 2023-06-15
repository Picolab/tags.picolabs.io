const express = require('express');
const app = express();

const DOMAIN = "picolabs";
const PICO_ENGINE_HOST = "https://manifold.picolabs.io:9090";
const REGISTRY_PICO_ECI = "CEmo7mURALxUzEVLkN2Fwc";
const REDIRECT_URL = "https://manifold.picolabs.io/#/picolabs/tag";

app.get('/picolabs/:tagID', function (req, res) {
  const tagID = req.params.tagID;
  if(!tagID) {
      res.redirect(REDIRECT_URL);
    }
  else {
    res.redirect(`${PICO_ENGINE_HOST}/sky/event/${REGISTRY_PICO_ECI}/none/safeandmine/redirect?tagID=${tagID}&domain=${DOMAIN}`);
  }
});

app.get('/sqtg/:tagID', function (req, res) {
  const tagID = req.params.tagID;
  if(!tagID) {
      res.status(400).send("Missing tagID!");
    }
  else {
    res.redirect(`${PICO_ENGINE_HOST}/sky/event/${REGISTRY_PICO_ECI}/none/safeandmine/redirect?tagID=${tagID}&domain=sqtg`);
  }
});

app.get('/picolabs/', function (req, res) {
  res.redirect(REDIRECT_URL);
});

app.listen(process.env.PORT || 3001);
