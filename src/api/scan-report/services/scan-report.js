'use strict';

/**
 * scan-report service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scan-report.scan-report');
