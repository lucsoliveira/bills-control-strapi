async function getRole({ strapiInstance, roleName, populate }) {
  const result = await strapiInstance.entityService.findMany("admin::role", {
    fields: ["name", "code", "description"],
    filters: { name: roleName },
    populate: populate,
  });
  return result.length > 0 ? result[0] : null;
}

async function buildInitialRoles(strapiInstance, roles) {
  for (const role of roles) {
    const roleIsCreated = await getRole({
      strapiInstance,
      roleName: role.name,
      populate: ["permissions"],
    });

    if (!roleIsCreated) {
      console.log("Nao encontramos a role:" + role.name);
      console.log("vai iniciar a criacao");
    } else {
      console.log("Ja existe a role: " + role.name);

      console.log({ roleIsCreated: JSON.stringify(roleIsCreated) });
    }
  }
}

module.exports = {
  buildInitialRoles,
};
