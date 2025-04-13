ctx.prototype.__forEachKey = function (object, callback) {
  const keys = Object.keys(object);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    callback(key);
  }
};

ctx.prototype.__applyStyleState = function (styleState) {
  this.__forEachKey(styleState, (key) => {
    this[key] = styleState[key];
  });
};

ctx.prototype.__setDefaultStyles = function () {
  this.__forEachKey(STYLES, (key) => {
    this[key] = STYLES[key].canvas;
  });
};

ctx.prototype.__getStyleState = function () {
  const styleState = {};

  this.__forEachKey(STYLES, (key) => {
    styleState[key] = this[key];
  });

  return styleState;
};
