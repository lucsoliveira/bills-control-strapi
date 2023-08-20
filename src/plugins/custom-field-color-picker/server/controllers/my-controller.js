'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom-field-color-picker')
      .service('myService')
      .getWelcomeMessage();
  },
});
