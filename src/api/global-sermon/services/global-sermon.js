'use strict';

/**
 * global-sermon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-sermon.global-sermon');
