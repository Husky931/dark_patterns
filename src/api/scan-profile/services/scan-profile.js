'use strict';

/**
 * scan-profile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scan-profile.scan-profile');
