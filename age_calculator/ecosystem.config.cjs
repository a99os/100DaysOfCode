module.exports = {
  apps: [
    {
      name: "age_calculator",
      port: "3002",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
