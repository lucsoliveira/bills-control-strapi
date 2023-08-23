module.exports = {
  async up(knex) {
    //delete all admin permissions roles links
    await knex("admin_permissions_role_links")
      .where("permission_order", ">", 0)
      .del();
    //delete all admin permissions
    await knex("admin_permissions").where("action", ">", 0).del();
    //create all admin permissions
    //create all admin permissions roles links
    // await knex("admin_roles").insert({
    //   id: 4,
    //   name: "USER_CAMIC",
    //   code: "user-camic-llmy0ray",
    // });
  },
};
