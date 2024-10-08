'use strict';

var React = require('react');

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

// src/use-promise.tsx
function usePromise(fn) {
  const [isLoading, setLoading] = React__namespace.useState(false);
  const [isResolved, setResolved] = React__namespace.useState(false);
  const [isRejected, setRejected] = React__namespace.useState(false);
  const [error, setError] = React__namespace.useState(null);
  const [data, setData] = React__namespace.useState(null);
  const call = (...params) => {
    setLoading(true);
    return fn(...params).then((data2) => {
      setData(data2);
      setResolved(true);
      setLoading(false);
      return data2;
    }).catch((err) => {
      setError(err);
      setRejected(true);
      setLoading(false);
      throw err;
    });
  };
  return [{ error, data, isLoading, isResolved, isRejected }, call];
}
var isBrowser = typeof window !== "undefined";
function setItem(key, value) {
  if (isBrowser && "localStorage" in window) {
    return value === void 0 ? localStorage.removeItem(key) : localStorage.setItem(key, value);
  }
}
function getItem(key) {
  if (isBrowser && "localStorage" in window) {
    return localStorage.getItem(key);
  }
}
var serializeJSON = (value) => {
  try {
    return JSON.stringify(value);
  } catch (e) {
    throw new Error("useLocalStorage: failed to serialize the value to JSON");
  }
};
var deserializeJSON = (value) => {
  try {
    return value && JSON.parse(value);
  } catch (e) {
    return value;
  }
};
var triggerCustomEvent = (detail) => {
  const event = new CustomEvent("use-local-storage", {
    detail
  });
  window.dispatchEvent(event);
};
var useLocalStorage = (key, defaultValue, options = {}) => {
  const { serialize = serializeJSON, deserialize = deserializeJSON } = options;
  const initRef = React__namespace.default.useRef(false);
  const [value, setValue] = React.useState(() => {
    var _a;
    return isBrowser ? deserialize((_a = getItem(key)) != null ? _a : void 0) : defaultValue;
  });
  React.useEffect(() => {
    const handler = (event) => {
      const isCustom = event instanceof CustomEvent;
      const eventKey = isCustom ? event.detail.key : event.key;
      const newValue = isCustom ? event.detail.newValue : event.newValue;
      if ((isCustom || event.storageArea === window.localStorage) && eventKey === key) {
        setValue(deserialize(newValue != null ? newValue : void 0));
      }
    };
    if (isBrowser) {
      window.addEventListener("storage", handler);
      window.addEventListener("use-local-storage", handler);
    }
    return () => {
      if (isBrowser) {
        window.removeEventListener("storage", handler);
        window.removeEventListener("use-local-storage", handler);
      }
    };
  }, []);
  React.useEffect(() => {
    if (!initRef.current) {
      initRef.current = true;
      return;
    }
    const serializedValue = serialize(value);
    if (getItem(key) !== serializedValue) {
      setItem(key, serializedValue);
      triggerCustomEvent({ key, newValue: serializedValue });
    }
  }, [value]);
  return [value === void 0 ? defaultValue : value, setValue];
};
var FIRST_STEP = 0;
var useSteps = ({
  steps,
  initialStep = FIRST_STEP
}) => {
  const [completed, setCompleted] = React.useState([]);
  const [index, setIndex] = React.useState(initialStep);
  const step = steps[index];
  const inRange = (index2) => {
    if (typeof index2 === "number") {
      if (index2 < FIRST_STEP) return FIRST_STEP;
      if (index2 >= steps.length) return steps.length - 1;
      return index2;
    }
    return steps.findIndex((step2) => step2.id === index2) || FIRST_STEP;
  };
  const go = (nextStep) => setIndex(inRange(nextStep));
  const next = () => go(index + 1);
  const prev = () => go(index - 1);
  const setComplete = (completeStep = index) => {
    const completeStepIndex = inRange(completeStep);
    const id = steps[completeStepIndex].id;
    setCompleted([.../* @__PURE__ */ new Set([...completed, id])]);
  };
  const setUncomplete = (uncompleteStep = index) => {
    const uncompleteStepIndex = inRange(uncompleteStep);
    const stepId = steps[uncompleteStepIndex].id;
    setCompleted(completed.filter((id) => id !== stepId));
  };
  const reset = (resetStep = initialStep) => {
    setIndex(resetStep);
    setCompleted([]);
  };
  return {
    setComplete,
    completed,
    index,
    isLast: index === steps.length - 1,
    navigation: { next, prev, go },
    step,
    setUncomplete,
    reset
  };
};
var useScript = (src) => {
  const [status, setStatus] = React.useState(src ? "loading" : "idle");
  React.useEffect(
    () => {
      if (!src) {
        setStatus("idle");
        return;
      }
      let script = document.querySelector(`script[src="${src}"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        document.body.appendChild(script);
        const setAttributeFromEvent = (event) => {
          script == null ? void 0 : script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };
        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        setStatus(script.getAttribute("data-status"));
      }
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src]
    // Only re-run effect if script src changes
  );
  return status;
};

exports.useLocalStorage = useLocalStorage;
exports.usePromise = usePromise;
exports.useScript = useScript;
exports.useSteps = useSteps;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map