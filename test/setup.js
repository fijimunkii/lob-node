'use strict'

var Chai = require('chai');

var API_KEY = process.env.LOB_API_KEY;

global.expect = Chai.expect;
global.API_KEY = API_KEY;
global.Lob = require('../lib/index.js')(API_KEY);
