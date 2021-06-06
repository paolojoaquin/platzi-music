module.exports = {
  root: true,
  env: {
    node: true,
  },
<<<<<<< HEAD
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
=======
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
>>>>>>> 16939a196b01c99f20db3bbb8245095d91034aba
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
