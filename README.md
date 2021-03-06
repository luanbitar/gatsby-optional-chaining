[![Version](https://img.shields.io/npm/v/gatsby-optional-chaining.svg)](https://www.npmjs.com/package/gatsby-optional-chaining)
[![Downloads Total](https://img.shields.io/npm/dt/gatsby-optional-chaining.svg)](https://www.npmjs.com/package/gatsby-optional-chaining)

# gatsby-optional-chaining

```js
const obj = {
  foo: {
    bar: {
      baz: 42,
    },
  },
};

const baz = obj?.foo?.bar?.baz; // 42

const safe = obj?.qux?.baz; // undefined
```

Provide the [optional-chaining babel plugin](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) in gatsby, just install and put in gatsby-config.

## Install

`$ npm i gatsby-optional-chaining`

or

`$ yarn add gatsby-optional-chaining`

## How to use

Add the plugin to your `gatsby-config.js`.

```js
module.exports = {
  plugins: [
    `gatsby-optional-chaining`,
  ]
}
```
