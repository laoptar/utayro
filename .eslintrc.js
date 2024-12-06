module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    // https://eslint.vuejs.org/rules/
    // https://eslint.org/docs/latest/
    // 要改变规则的设置，你必须把规则 ID 设置为这些值之一：
    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 启用并视作警告（不影响退出）
    // "error" 或 2 - 启用并视作错误（触发时退出代码为 1）
    // 禁止使用console
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 禁止使用debugger
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // html自闭合标签的规则
    "vue/html-self-closing": [
      "warn",
      {
        "html": {
          "void": "never", // 禁止使用单标签
          "normal": "always", // 禁止没有内容的自我闭合
          "component": "always"
        },
        // "normal": "any" // 不强制要求
        "svg": "always",
        "math": "always"
      }
    ],
    // 用于限制HTML元素中每行最多允许的属性数量
    "vue/max-attributes-per-line": [
      "warn",
      {
        // 元素一行书写时，最多可有的属性参数
        "singleline": {
          "max": 5,
        },
        // 元素多行书写时，最多可有的属性参数
        "multiline": {
          "max": 1,
        },
      },
    ],
    // Vue文件中属性（attributes）的顺序
    "vue/attributes-order": [
      "error",
      {
        "order": [
        "DEFINITION", // e.g. 'is', 'v-is'
        "LIST_RENDERING", // e.g. 'v-for item in items'
        "CONDITIONALS", // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        "RENDER_MODIFIERS", // e.g. 'v-once', 'v-pre'
        "GLOBAL", // e.g. 'id'
        ["UNIQUE", "SLOT"], // e.g. 'ref', 'key' | e.g. 'v-slot', 'slot'
        "TWO_WAY_BINDING", // e.g. 'v-model'
        "OTHER_DIRECTIVES", // e.g. 'v-custom-directive'
        "OTHER_ATTR", // e.g. 'v-bind:prop="foo"', ':prop="foo"' | e.g. 'prop="foo"', 'custom-prop="foo"' |  e.g. 'boolean-prop'
        "EVENTS", // e.g. '@click="functionCall"', 'v-on="event"'
        "CONTENT" // e.g. 'v-text', 'v-html'
        ]
      }
    ],
    // Vue文档的缩进
    "vue/html-indent": [
      "warn",
      2,
      {
        "attribute": 1, // 属性
        "baseIndent": 1,
        "closeBracket": 1,
        "alignAttributesVertically": true,
        "ignores": []
      }
    ],
    // HTML元素的闭合括号应该在新的一行
    "vue/html-closing-bracket-newline": [
      "warn",
      {
        "singleline": "never",
        "multiline": "always",
      }
    ],
    // 单行 HTML 元素内容的新行要求
    "vue/singleline-html-element-content-newline": "warn",
    // 多行 HTML 元素内容的新行要求
    "vue/multiline-html-element-content-newline": "warn",
    // Vue 组件的选项中检测是否有重复的键
    "vue/no-dupe-keys": "error",
    // Vue 验证 v-model 绑定的参数
    "vue/valid-v-model": "warn",
    // Vue 组件禁止使用 v-html 属性
    "vue/no-v-html": "warn",
    // 禁止出现语法错误
    "vue/no-parsing-error": "error",
    // Vue 组件内的配置(el/name/prop)项排序
    "vue/order-in-components": "error",
    // Vue 组件禁止在同一元素上同时使用`v-if`和`v-for`
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        "allowUsingIterationVar": false
      }
    ],
    // Vue 组件name强制使用驼峰命名
    "vue/name-property-casing": ["error", "PascalCase"],
    // 在对象中使用getter/setter
    "accessor-pairs": "error",
    // 强制在括号内前后使用空格
    "array-bracket-spacing": ["error", "never"],
    // 要求箭头函数的箭头之前或之后有空格
    "arrow-spacing": "error",
    // 禁止使用数组构造器
    "no-array-constructor": "error",
    // 禁止使用 arguments.caller 或 arguments.callee
    "no-caller": "error",
    // 不允许修改类声明的变量
    "no-class-assign": "error",
    // 禁止条件语句中出现赋值语句
    "no-cond-assign": "error",
    // 不允许改变用const声明的变量
    "no-const-assign": "error",
    // 在 ASCII 中，0-31 范围内的控制字符是特殊的、不可见的字符。这些字符很少被用在 JavaScript 字符串中，所以一个正则表达式如果包含这些字符的，很有可能一个错误。
    "no-control-regex": "error",
    // 禁止对 var 声明的变量使用 delete 操作符
    "no-delete-var": "error",
    // 禁止在函数定义或表达中出现重名参数
    "no-dupe-args": "error",
    // 不允许类成员中有重复的名称
    "no-dupe-class-members": "error",
    // 禁止在对象字面量中出现重复的键 {a:1,a:1}
    "no-dupe-keys": "error",
    // 禁止 switch 中重复的 case 标签
    "no-duplicate-case": "error",
    // 禁止空块语句
    "no-empty": "error",
    // 禁止在正则表达式中出现空字符集 | 正则表达式中的[]内容不能为空
    "no-empty-character-class": "error",
    // 禁止使用空解构模式
    "no-empty-pattern": "error",
    // 禁止使用 eval()
    "no-eval": "error",
    // 禁止对 catch 子句中的异常重新赋值。因为catch出来的都是错误信息，不需要重新赋值
    "no-ex-assign": "error",
    // 禁止扩展native对象
    "no-extend-native": "error",
    // 禁止不必要的函数绑定
    "no-extra-bind": "error",
    // 禁止不必要的布尔类型转换，如 !!true
    "no-extra-boolean-cast": "error",
    // 禁止非必要的括号
    "no-extra-parens": ["error", "functions"],
    // 禁止 case 语句落空 | 禁止switch穿透
    "no-fallthrough": "error",
    // 禁止省略浮点数中的0 .5 3.
    "no-floating-decimal": "error",
    // 禁止重复的函数声明
    "no-func-assign": "error",
    // 禁止使用隐式eval
    "no-implied-eval": "error",
    // 禁止在嵌套的语句块中出现变量 | 禁止在块语句中使用声明（变量或函数）
    "no-inner-declarations": ["error", "functions"],
    // 禁止无效的正则表达式
    "no-invalid-regexp": "error",
    // 不能有不规则的空格
    "no-irregular-whitespace": "error",
    // 禁用迭代器 | 禁止使用__iterator__ 属性
    "no-iterator": "error",
    // label名不能与var声明的变量名相同
    "no-label-var": "error",
    // 禁用标签语句 | 禁止标签声明
    "no-labels": [
      "error",
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    // 禁用不必要的嵌套块 | 禁止不必要的嵌套块
    "no-lone-blocks": "error",
    // 禁止使用 空格 和 tab 混合缩进
    "no-mixed-spaces-and-tabs": "error",
    // 禁止出现多个空格 | 不能用多余的空格
    "no-multi-spaces": "error",
    // 禁止多行字符串
    "no-multi-str": "error",
    // 不允许多个空行 | 空行最多不能超过 max 行
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    // 禁止覆盖原生对象 | 不能重写native对象
    "no-native-reassign": "error",
    // in 操作符的左边不能有 !
    "no-negated-in-lhs": "error",
    // 禁止使用new Object() | 禁止使用 Object 构造函数
    "no-new-object": "error",
    // 禁止使用new require
    "no-new-require": "error",
    // 禁止使用 new Symbol() 初始化
    "no-new-symbol": "error",
    // 禁止原始包装实例 | 禁止使用new创建包装实例，new String new Boolean new Number
    "no-new-wrappers": "error",
    // 禁止将全局对象当作函数进行调用 | 不能调用内置的全局对象，比如Math() JSON()
    "no-obj-calls": "error",
    // 禁止使用八进制数字
    "no-octal": "error",
    // 禁止使用八进制转义序列
    "no-octal-escape": "error",
    // node中不能使用__dirname或__filename做路径拼接
    "no-path-concat": "off",
    // 禁止重复声明变量
    "no-redeclare": "error",
    // 禁止正则表达式字面量中出现多个空格
    "no-regex-spaces": "error",
    // 禁止在返回语句中赋值
    "no-return-assign": ["error", "except-parens"],
    // 禁止自身赋值
    "no-self-assign": "error",
    // 不能比较自身
    "no-self-compare": "error",
    // 禁止使用逗号运算符
    "no-sequences": "error",
    // 关键字不能被遮蔽 | 严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-shadow-restricted-names": "error",
    // 函数调用时 函数名与()之间不能有空格
    "no-spaced-func": "error",
    // 禁止稀疏数组， [1,,2]
    "no-sparse-arrays": "error",
    // 一行结束后面不要有空格
    "no-trailing-spaces": "error",
    // 在调用 super() 之前不能使用 this 或 super
    "no-this-before-super": "error",
    // 禁止抛出字面量错误 throw "error"
    "no-throw-literal": "error",
    // 禁用未声明的变量
    "no-undef": "error",
    // 禁止变量初始化赋值为 undefined
    "no-undef-init": "error",
    // 避免多行表达式 | 禁止使用令人困惑的多行表达式
    "no-unexpected-multiline": "error",
    // 禁用一成不变的循环条件
    "no-unmodified-loop-condition": "error",
    // 禁止可以表达为更简单结构的三元操作符, var isYes = answer === 1 ? true : false
    "no-unneeded-ternary": [
      "error",
      {
        "defaultAssignment": false
      }
    ],
    // 不能有无法执行的代码 | 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    "no-unreachable": "error",
    // 防止在finally块中使用return、throw、break和continue等控制流语句，因为这些操作会导致try和catch块中的控制流语句被暂停执行，
    // 直到finally块执行完毕‌。这种行为被认为是意外的，可能会导致程序的行为不符合预期‌
    "no-unsafe-finally": "error",
    // 禁止未使用过的变量
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "none"
      }
    ],
    // 禁止不必要的call和apply
    "no-useless-call": "error",
    // 禁止在对象中使用不必要的计算属性
    "no-useless-computed-key": "error",
    // 禁用不必要的构造函数
    "no-useless-constructor": "error",
    // 禁用不必要的转义
    "no-useless-escape": "error",
    // 禁止属性前有空格
    "no-whitespace-before-property": "error",
    // 禁用 with 语句
    "no-with": "error",
    // 强制在代码块中开括号前和闭括号后有空格
    "block-spacing": ["error", "always"],
    // 大括号风格要求
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    // 要求使用驼峰拼写法 | 强制驼峰法命名
    "camelcase": "error",
    // 避免多次调用回调什么的
    "callback-return": "error",
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": ["off", "never"],
    // 强制在逗号前后使用空格
    "comma-spacing": [
      "error",
      {
        "before":false,
        "after":true
      }
    ],
    // 逗号风格，换行时在行首还是行尾
    "comma-style": ["error", "last"],
    // this 别名
    "consistent-this": ["error", "that"],
    // 非派生类不能调用super，派生类必须调用super
    "constructor-super": "off",
    // 必须使用 if(){} 中的{}
    "curly": "error",
    // 强制在点号之前换行 | 对象访问符的位置，换行的时候在行首还是行尾
    "dot-location": ["error", "property"],
    // 避免不必要的方括号 | 点号和字面量，优先使用点号
    "dot-notation": [
      "off",
      {
        "allowKeywords": true
      }
    ],
    // 始终使用 === 替代 ==。和 !== 。obj == null 可以用来检查 null || undefined。
    "eqeqeq": ["error", "always"],
    // 文件以单一的换行符结束 | 强制在点号之前换行
    "eol-last": "error",
    // 强制 generator 函数中 * 号周围有空格
    "generator-star-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    // nodejs 处理错误
    "handle-callback-err": ["error", "^(err|error)$"],
    // 缩进风格
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": ["error", "prefer-single"],
    // 对象字面量中冒号的前后空格 | 强制在对象字面量的键和值之间使用一致的空格
    "key-spacing": [
      "error",
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    // 关键字后边加空格 | 关键字周围空格的一致性
    "keyword-spacing": [
      "error",
      {
        "before": true
      }
    ],
    // 要求构造函数首字母大写 | 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-cap": [
      "error",
      {
        "newIsCap": true,
        "capIsNew": false
      }
    ],
    // 要求调用无参构造函数时带括号 | new 时必须加小括号
    "new-parens": "error",
    // 禁用__proto__，改用 getPrototypeOf 方法替代 __proto__
    "no-proto": "error",
    // 强制在花括号中使用一致的空格 | 大括号内是否允许不必要的空格
    "object-curly-spacing": [
      "error",
      "always",
      {
        "arraysInObjects": false
      }
    ],
    // 强制函数中的变量在一起声明或分开声明
    "one-var": [
      "error",
      {
        "initialized": "never"
      }
    ],
    // 强制操作符使用一致的换行符风格 | 换行时运算符在行尾还是行首
    "operator-linebreak": [
      "error",
      "after",
      {
        "overrides": { "?": "before", ":": "before" }
      }
    ],
    // 块语句内行首行尾是否要空行
    "padded-blocks": ["error", "never"],
    // 建议使用 const
    "prefer-const": "error",
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    "prefer-promise-reject-errors": [
      "error",
      {
        "allowEmptyReject": true
      }
    ],
    // 强制使用一致的单引号
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true,
      }
    ],
    // 禁止或强制圆括号内的空格 | 小括号里面要不要有空格
    "space-in-parens": ["error", "never"],
    // 要求中缀操作符周围有空格
    "space-infix-ops": "error",
    // 强制是否使用分号
    "semi": ["off", "never"],
    // 遇到分号时空格要后留前不留 | 强制分号前后有空格
    "semi-spacing": "warn",
    // 强制代码块之前的空格一致性
    "space-before-blocks": ["warn", "always"],
    // 函数声明时括号与函数名间加空格 | 禁止函数圆括号之前有一个空格
    "space-before-function-paren": "error",
    // 禁止在一元操作符之前或之后存在空格 | 一元运算符的前、后要不要加空格
    "space-unary-ops": [
      "error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    // 要求在注释前有空白
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","]
      }
    ],
    // callback传值不规范问题
    "standard/no-callback-literal": "off",
    // 强制模板字符串中空格的使用
    "template-curly-spacing": ["error", "never"],
    // 要求调用 isNaN()检查 NaN | 禁止比较时使用NaN，只能用isNaN()
    "use-isnan": "error",
    // 强制 typeof 表达式与有效的字符串进行比较 | 必须使用合法的typeof的值
    "valid-typeof": "error",
    // 需要把立即执行的函数包裹起来 | 立即执行函数表达式的小括号风格
    "wrap-iife": ["error", "inside"],
    // 强制在 表达式中 周围使用空格,强制在yield*表达式中*左右使用空格
    "yield-star-spacing": ["error", "both"],
    // 禁止尤达条件
    "yoda": ["error", "never"],
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
