'use strict';

/**
 * scan-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scan-website.scan-website');
