'use strict';

var React = require('react');
var react = require('@chakra-ui/react');
var utils = require('@chakra-ui/utils');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

// src/get-child-of-type.ts
function getChildOfType(children, type) {
  return React__namespace.Children.toArray(children).find(
    (item) => item.type === type
  );
}
function getChildrenOfType(children, type) {
  return React__namespace.Children.toArray(children).filter(
    (item) => Array.isArray(type) ? type.some((component) => component === item.type) : item.type === type
  );
}
var normalize = (variant, toArray) => {
  if (Array.isArray(variant))
    return variant;
  else if (typeof variant === "object")
    return toArray == null ? void 0 : toArray(variant);
  if (variant != null)
    return [variant];
  return [];
};
var useResponsiveValue = (value, options) => {
  var _a;
  const theme = react.useTheme();
  const normalized = normalize(value, (_a = theme.__breakpoints) == null ? void 0 : _a.toArrayValue);
  return react.useBreakpointValue(normalized, options);
};

exports.getChildOfType = getChildOfType;
exports.getChildrenOfType = getChildrenOfType;
exports.useResponsiveValue = useResponsiveValue;
Object.keys(utils).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return utils[k]; }
  });
});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map