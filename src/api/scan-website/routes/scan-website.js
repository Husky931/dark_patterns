'use strict';

/**
 * scan-website router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::scan-website.scan-website');
