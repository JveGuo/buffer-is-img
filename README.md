# @jve/isImg

[![NPM version](https://img.shields.io/npm/v/@jveguo16/buffer-is-img.svg?style=flat)](https://npmjs.org/package/@jveguo16/buffer-is-img)
[![NPM downloads](http://img.shields.io/npm/dm/@jveguo16/buffer-is-img.svg?style=flat)](https://npmjs.org/package/@jveguo16/buffer-is-img)

根据 `Buffer` 判断当前是否为图片格式 并 返回图片的类型

不是图片类型返回 空

```javascript
const { bufferIsImg } = require("@jveguo16/is-img");

const type = bufferIsImg(file);
```

## LICENSE

MIT
