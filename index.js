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
  // allows you to have to load browserify file in your views
  csp: {
    styleSrc: ["'unsafe-inline'"]
  }
};

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

module.exports = hof(settings);
