const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "gqancliani",
        mongodb_password: "8vmi5jtoCluoGJpw",
        mongodb_clustername: "kantslo-next-blog",
        mongodb_database: "my-blog-app-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "gqancliani",
      mongodb_password: "8vmi5jtoCluoGJpw",
      mongodb_clustername: "kantslo-next-blog",
      mongodb_database: "my-blog-app",
    },
  };
};
