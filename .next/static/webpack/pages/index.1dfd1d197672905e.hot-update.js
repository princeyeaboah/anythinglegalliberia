"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Slider.js":
/*!******************************!*\
  !*** ./components/Slider.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keen-slider/react */ \"./node_modules/keen-slider/react.js\");\n/* harmony import */ var keen_slider_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keen_slider_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keen-slider/keen-slider.min.css */ \"./node_modules/keen-slider/keen-slider.min.css\");\n/* harmony import */ var keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keen_slider_keen_slider_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nfunction Slider(param) {\n    var sliderImages = param.sliderImages, bannerTexts = param.bannerTexts;\n    var _this = this;\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pause = ref[0], setPause = ref[1];\n    var timer = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    var ref1 = _slicedToArray((0,keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider)({\n        loop: true,\n        duration: 2000,\n        dragStart: function() {\n            setPause(true);\n        },\n        dragEnd: function() {\n            setPause(false);\n        }\n    }), 2), sliderRef = ref1[0], slider = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        sliderRef.current.addEventListener(\"mouseover\", function() {\n            setPause(true);\n        });\n        sliderRef.current.addEventListener(\"mouseout\", function() {\n            setPause(false);\n        });\n    }, [\n        sliderRef\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        timer.current = setInterval(function() {\n            if (!pause && slider) {\n                slider.next();\n            }\n        }, 4000);\n        return function() {\n            clearInterval(timer.current);\n        };\n    }, [\n        pause,\n        slider\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            position: \"relative\",\n            _hover: {\n                cursor: 'grabbing'\n            },\n            __source: {\n                fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    position: \"relative\",\n                    maxHeight: \"500px\",\n                    as: \"section\",\n                    \"arial-label\": \"image slider\",\n                    ref: sliderRef,\n                    className: \"keen-slider\",\n                    __source: {\n                        fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: sliderImages && sliderImages.map(function(img) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Image, {\n                            alt: \"\",\n                            src: \"\".concat(img.sliderImageFile.url),\n                            className: \"keen-slider__slide number-slide1 slide\",\n                            objectFit: \"cover\",\n                            __source: {\n                                fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                                lineNumber: 75,\n                                columnNumber: 20\n                            },\n                            __self: _this\n                        }, img.id));\n                    })\n                }),\n                sliderImages && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            position: \"absolute\",\n                            h: \"500px\",\n                            width: \"550px\",\n                            top: \"0\",\n                            bg: \"primary\",\n                            opacity: \".7\",\n                            transform: \"skew(-15deg)\",\n                            ml: \"-100px\",\n                            overflow: \"hidden\",\n                            display: {\n                                base: 'none',\n                                md: 'block'\n                            },\n                            borderRight: \"10px solid red\",\n                            __source: {\n                                fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            position: \"absolute\",\n                            top: \"10\",\n                            width: \"350px\",\n                            px: 10,\n                            fontSize: \"2.8em\",\n                            fontWeight: \"medium\",\n                            fontFamily: \"Banner\",\n                            letterSpacing: \"wider\",\n                            color: \"white\",\n                            display: {\n                                base: 'none',\n                                md: 'block'\n                            },\n                            __source: {\n                                fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                color: \"white\",\n                                __source: {\n                                    fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 13\n                                },\n                                __self: this,\n                                children: [\n                                    \"The Home of Legal \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        color: \"red.600\",\n                                        display: 'inline',\n                                        __source: {\n                                            fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 32\n                                        },\n                                        __self: this,\n                                        children: \"Analysis\"\n                                    }),\n                                    \" and \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        color: \"red.600\",\n                                        display: 'inline',\n                                        __source: {\n                                            fileName: \"/home/roman/Documents/Project/anythinglegalliberia/components/Slider.js\",\n                                            lineNumber: 113,\n                                            columnNumber: 93\n                                        },\n                                        __self: this,\n                                        children: \"Research\"\n                                    })\n                                ]\n                            })\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s1(Slider, \"83uCkLekNidEFw0pz3qde7Wwb2s=\", false, function() {\n    return [\n        keen_slider_react__WEBPACK_IMPORTED_MODULE_2__.useKeenSlider\n    ];\n});\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztRQUlBbEIsNERBQWE7OztLQUpuQmtCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIuanM/NzQ4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VLZWVuU2xpZGVyIH0gZnJvbSBcImtlZW4tc2xpZGVyL3JlYWN0XCJcbmltcG9ydCBcImtlZW4tc2xpZGVyL2tlZW4tc2xpZGVyLm1pbi5jc3NcIlxuaW1wb3J0IFRleHRMb29wIGZyb20gXCJyZWFjdC10ZXh0LWxvb3BcIjtcbmltcG9ydCB7XG4gIEhlYWRpbmcsXG4gIEJveCxcbiAgRmxleCxcbiAgSWNvbkJ1dHRvbixcbiAgSWNvbixcbiAgQnV0dG9uLFxuICBTdGFjayxcbiAgVGV4dCxcbiAgQ2VudGVyLFxuICBMaW5rLFxuICBJbWFnZSxcbiAgU3Bpbm5lcixcbiAgU2xpZGUsXG4gIFNsaWRlRmFkZSxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IE5leHRJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVyKHsgc2xpZGVySW1hZ2VzLCBiYW5uZXJUZXh0cyB9KSB7XG5cbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdGltZXIgPSBSZWFjdC51c2VSZWYoKVxuICBjb25zdCBbc2xpZGVyUmVmLCBzbGlkZXJdID0gdXNlS2VlblNsaWRlcih7XG4gICAgbG9vcDogdHJ1ZSxcbiAgICBkdXJhdGlvbjogMjAwMCxcbiAgICBkcmFnU3RhcnQ6ICgpID0+IHtcbiAgICAgIHNldFBhdXNlKHRydWUpXG4gICAgfSxcbiAgICBkcmFnRW5kOiAoKSA9PiB7XG4gICAgICBzZXRQYXVzZShmYWxzZSlcbiAgICB9LFxuICB9KVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2xpZGVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBzZXRQYXVzZSh0cnVlKVxuICAgIH0pXG4gICAgc2xpZGVyUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIHNldFBhdXNlKGZhbHNlKVxuICAgIH0pXG4gIH0sIFtzbGlkZXJSZWZdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZXIuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICghcGF1c2UgJiYgc2xpZGVyKSB7XG4gICAgICAgIHNsaWRlci5uZXh0KClcbiAgICAgIH1cbiAgICB9LCA0MDAwKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyLmN1cnJlbnQpXG4gICAgfVxuICB9LCBbcGF1c2UsIHNsaWRlcl0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIHNsaWRlIHdyYXBwZXIgY29udGFpbmVyIGVsZW1lbnQgKi99XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPSdyZWxhdGl2ZSdcbiAgICAgICAgX2hvdmVyPXt7IGN1cnNvcjogJ2dyYWJiaW5nJyB9fVxuICAgICAgPnsvKiBzbGlkZXIgaW1hZ2VzIHdyYXBwZXIgb3IgY29udGFpbmVyICovfVxuICAgICAgICA8Qm94XG4gICAgICAgICAgcG9zaXRpb249J3JlbGF0aXZlJ1xuICAgICAgICAgIG1heEhlaWdodD0nNTAwcHgnXG4gICAgICAgICAgYXM9J3NlY3Rpb24nXG4gICAgICAgICAgYXJpYWwtbGFiZWw9J2ltYWdlIHNsaWRlcidcbiAgICAgICAgICByZWY9e3NsaWRlclJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJrZWVuLXNsaWRlclwiXG4gICAgICAgID5cbiAgICAgICAgICB7c2xpZGVySW1hZ2VzICYmIHNsaWRlckltYWdlcy5tYXAoaW1nID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8SW1hZ2VcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAga2V5PXtpbWcuaWR9XG4gICAgICAgICAgICAgIHNyYz17YCR7aW1nLnNsaWRlckltYWdlRmlsZS51cmx9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2Vlbi1zbGlkZXJfX3NsaWRlIG51bWJlci1zbGlkZTEgc2xpZGVcIlxuICAgICAgICAgICAgICBvYmplY3RGaXQ9J2NvdmVyJyAvPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L0JveD5cbiAgICAgICAge3NsaWRlckltYWdlcyAmJiA8PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgaD1cIjUwMHB4XCJcbiAgICAgICAgICAgIHdpZHRoPVwiNTUwcHhcIlxuICAgICAgICAgICAgdG9wPVwiMFwiXG4gICAgICAgICAgICBiZz0ncHJpbWFyeSdcbiAgICAgICAgICAgIG9wYWNpdHk9Jy43J1xuICAgICAgICAgICAgdHJhbnNmb3JtPSdza2V3KC0xNWRlZyknXG4gICAgICAgICAgICBtbD0nLTEwMHB4J1xuICAgICAgICAgICAgb3ZlcmZsb3c9J2hpZGRlbidcbiAgICAgICAgICAgIGRpc3BsYXk9e3sgYmFzZTogJ25vbmUnLCBtZDogJ2Jsb2NrJyB9fVxuICAgICAgICAgICAgYm9yZGVyUmlnaHQ9JzEwcHggc29saWQgcmVkJ1xuICAgICAgICAgID5cblxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHBvc2l0aW9uPSdhYnNvbHV0ZSdcbiAgICAgICAgICAgIHRvcD0nMTAnXG4gICAgICAgICAgICB3aWR0aD1cIjM1MHB4XCJcbiAgICAgICAgICAgIHB4PXsxMH1cbiAgICAgICAgICAgIGZvbnRTaXplPScyLjhlbSdcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9J21lZGl1bSdcbiAgICAgICAgICAgIGZvbnRGYW1pbHk9J0Jhbm5lcidcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc9J3dpZGVyJ1xuICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnYmxvY2snIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgY29sb3I9J3doaXRlJ1xuICAgICAgICAgICAgPlRoZSBIb21lIG9mIExlZ2FsIDxUZXh0IGNvbG9yPSdyZWQuNjAwJyBkaXNwbGF5PXsnaW5saW5lJ30+QW5hbHlzaXM8L1RleHQ+IGFuZCA8VGV4dCBjb2xvcj0ncmVkLjYwMCcgZGlzcGxheT17J2lubGluZSd9PlJlc2VhcmNoPC9UZXh0PjwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgICAgIH1cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VLZWVuU2xpZGVyIiwiVGV4dExvb3AiLCJIZWFkaW5nIiwiQm94IiwiRmxleCIsIkljb25CdXR0b24iLCJJY29uIiwiQnV0dG9uIiwiU3RhY2siLCJUZXh0IiwiQ2VudGVyIiwiTGluayIsIkltYWdlIiwiU3Bpbm5lciIsIlNsaWRlIiwiU2xpZGVGYWRlIiwiTmV4dEltYWdlIiwiTmV4dExpbmsiLCJTbGlkZXIiLCJzbGlkZXJJbWFnZXMiLCJiYW5uZXJUZXh0cyIsInVzZVN0YXRlIiwicGF1c2UiLCJzZXRQYXVzZSIsInRpbWVyIiwidXNlUmVmIiwibG9vcCIsImR1cmF0aW9uIiwiZHJhZ1N0YXJ0IiwiZHJhZ0VuZCIsInNsaWRlclJlZiIsInNsaWRlciIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0SW50ZXJ2YWwiLCJuZXh0IiwiY2xlYXJJbnRlcnZhbCIsInBvc2l0aW9uIiwiX2hvdmVyIiwiY3Vyc29yIiwibWF4SGVpZ2h0IiwiYXMiLCJhcmlhbC1sYWJlbCIsInJlZiIsImNsYXNzTmFtZSIsIm1hcCIsImltZyIsImFsdCIsInNyYyIsInNsaWRlckltYWdlRmlsZSIsInVybCIsIm9iamVjdEZpdCIsImlkIiwiaCIsIndpZHRoIiwidG9wIiwiYmciLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwibWwiLCJvdmVyZmxvdyIsImRpc3BsYXkiLCJiYXNlIiwibWQiLCJib3JkZXJSaWdodCIsInB4IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImxldHRlclNwYWNpbmciLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider.js\n");

/***/ })

});