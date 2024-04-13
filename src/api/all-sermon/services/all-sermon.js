'use strict';

/**
 * all-sermon service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-sermon.all-sermon');
