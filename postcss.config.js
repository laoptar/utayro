// postcss.config.js
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      // rem 相对于 px 转换的基准值
      rootValue: 16,
      // 转换后的小数位数
      unitPrecision: 5,
      // 需要转换的 CSS 属性，* 表示全部
      propList: ["*"],
      // （数组）：要忽略并保留为像素（px）的选择器
      selectorBlackList: [],
      // 替换包含 rem 的规则而不是添加回退。
      replace: true,
      // 允许在媒体查询中转换像素（px）。
      mediaQuery: false,
      // 设置要替换的最小像素值。
      minPixelValue: 0,
      // 字符串、正则表达式、函数）：要忽略并保留为像素（px）的文件路径。
      exclude: (e) => {
        console.log(e);
      },
    },
  },
};
