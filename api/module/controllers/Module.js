'use strict';

/**
 * Module.js controller
 *
 * @description: A set of functions called "actions" for managing `Module`.
 */

module.exports = {

  /**
   * Retrieve module records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.module.search(ctx.query);
    } else {
      return strapi.services.module.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a module record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.module.fetch(ctx.params);
  },

  /**
   * Count module records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.module.count(ctx.query);
  },

  /**
   * Create a/an module record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.module.add(ctx.request.body);
  },

  /**
   * Update a/an module record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.module.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an module record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.module.remove(ctx.params);
  }
};
