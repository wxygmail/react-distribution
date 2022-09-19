const babelConfig = {
  presets: [
    ["@babel/preset-env", {
      useBuiltIns: "entry",
      corejs: 2
    }], "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-syntax-dynamic-import", ["@babel/plugin-transform-runtime"]]   //就是在此处添加了两个@babel/runtime中的插件
};
module.exports = babelConfig;
