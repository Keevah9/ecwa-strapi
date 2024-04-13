'use strict';

/**
 * global-gallery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-gallery.global-gallery');
