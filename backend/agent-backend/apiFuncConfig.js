// config.js
module.exports = async ({ options, resolveVariable }) => {
  // We can resolve other variables via `resolveVariable`
  // const stage = await resolveVariable('sls:stage');
  // const region = await resolveVariable('opt:region, self:provider.region, "us-east-1"');
  const frontendUrl = await resolveVariable('param:frontendUrl');

  //console.log("stage", stage);
  //console.log("region", region);

  //const isOffline = !["prod", "test", "pre"].includes(options.stage);
  const isOffline = process.env?.npm_lifecycle_script?.includes(" offline") || false;

  //console.log("isOffline", options);

  //Resolver may return any JSON value (null, boolean, string, number, array or plain object)
  return {
    handler: "src/index.handler",
    timeout: 120,
    url: {
      cors: {
        allowedOrigins: [frontendUrl],
        allowedHeaders: ["*"],
        allowedMethods: ["*"],
      },
      authorizer: 'aws_iam'
    },
    ...(isOffline && {
      events: [
        {
          httpApi: "*"
        }
      ]
    })
  };
};
