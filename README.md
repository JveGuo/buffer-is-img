# @jve/isImg

[![NPM version](https://img.shields.io/npm/v/@jve/buffer-is-img.svg?style=flat)](https://npmjs.org/package/@jve/buffer-is-img)
[![NPM downloads](http://img.shields.io/npm/dm/@jve/buffer-is-img.svg?style=flat)](https://npmjs.org/package/@jve/buffer-is-img)

根据 `Buffer` 判断当前是否为图片格式 并 返回图片的类型

不是图片类型返回 空

```javascript
const { bufferIsImg } = require("@jve/is-img");

const type = bufferIsImg(file);
```

## LICENSE

MIT
