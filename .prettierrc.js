// @ts-nocheck

/** @type {import("prettier").Config} */
export default {
  jsxBracketSameLine: false, // JSX闭合标签换行显示(<div></div>)
  bracketSpacing: true, // 对象中的空格，例如：{ foo：bar }（默认：true）
  singleQuote: true, // 使用单引号
  useTabs: false, // 不使用tab缩进（默认：false）
  semi: false, // 不使用分号
  printWidth: 100, // 超出字符换行（默认：80）
  arrowParens: "avoid",
  proseWrap: "preserve", // 超出字符换行方式，按原样显示（默认）
  quoteProps: "as-needed", // 对象中的引号(仅在需要时在对象属性周围添加引号)
  endOfLine: "auto", // 换行符使用，保持现有的行尾设置（默认：auto）
  trailingComma: "none" // 不使用行尾逗号
}
