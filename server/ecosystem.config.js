module.exports = {
  apps: [{
    name: "app1",
    script: "./index.js",
    instances: "max",
    exec_mode: "cluster",
    env: {
      NODE_ENV: "production"
    },
  }]
}
