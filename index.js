'use strict';

const hof = require('hof');

const settings = {
  theme: 'govuk',
  routes: [
    './apps/digital-inclusion'
  ],
  session: {
    name: 'digital-inclusion.hof.sid'
  },
  csp: {
    styleSrc: ["'unsafe-inline'"]
  }
};

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

module.exports = hof(settings);
