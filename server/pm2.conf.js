module.exports = {
  apps: [
    {
      name: "mda",
      script: "./index.js",
      watch: false,
      env: {
        "NODE_ENV": "production"
      }
    }
  ]
}
