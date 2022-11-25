var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/isImg.ts
var isImg_exports = {};
__export(isImg_exports, {
  bufferIsImg: () => bufferIsImg
});
module.exports = __toCommonJS(isImg_exports);
var import_chalk = require("chalk");
var bufferIsImg = (fileBuffer) => {
  try {
    if (!fileBuffer || typeof fileBuffer !== "object" || !Buffer.isBuffer(fileBuffer)) {
      throw new Error("\u53C2\u6570\u4E0D\u662F 'buffer' \u7C7B\u578B");
    }
    const imageBufferHeaders = [
      { bufBegin: [255, 216], bufEnd: [255, 217], suffix: ".jpg" },
      { bufBegin: [0, 0, 2, 0, 0], suffix: ".tga" },
      { bufBegin: [0, 0, 16, 0, 0], suffix: ".rle" },
      {
        bufBegin: [137, 80, 78, 71, 13, 10, 26, 10],
        suffix: ".png"
      },
      { bufBegin: [71, 73, 70, 56, 57, 97], suffix: ".gif" },
      { bufBegin: [71, 73, 70, 56, 55, 97], suffix: ".gif" },
      { bufBegin: [66, 77], suffix: ".bmp" },
      { bufBegin: [10], suffix: ".pcx" },
      { bufBegin: [73, 73], suffix: ".tif" },
      { bufBegin: [77, 77], suffix: ".tif" },
      {
        bufBegin: [0, 0, 1, 0, 1, 0, 32, 32],
        suffix: ".ico"
      },
      {
        bufBegin: [0, 0, 2, 0, 1, 0, 32, 32],
        suffix: ".cur"
      },
      { bufBegin: [70, 79, 82, 77], suffix: ".iff" },
      { bufBegin: [82, 73, 70, 70], suffix: ".ani" }
    ];
    for (const imageBufferHeader of imageBufferHeaders) {
      let isEqual;
      if (imageBufferHeader.bufBegin) {
        const buf = Buffer.from(imageBufferHeader.bufBegin);
        isEqual = buf.equals(
          fileBuffer.slice(0, imageBufferHeader.bufBegin.length)
        );
      }
      if (isEqual && imageBufferHeader.bufEnd) {
        const buf = Buffer.from(imageBufferHeader.bufEnd);
        isEqual = buf.equals(
          fileBuffer.slice(-imageBufferHeader.bufEnd.length)
        );
      }
      if (isEqual) {
        return imageBufferHeader.suffix;
      }
    }
    return "";
  } catch (error) {
    console.log((0, import_chalk.red)(`\u2718 ${error.message}`));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  bufferIsImg
});
//# sourceMappingURL=isImg.js.map
