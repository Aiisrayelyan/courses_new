"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/add/page",{

/***/ "(app-pages-browser)/./src/app/courses/add/page.tsx":
/*!**************************************!*\
  !*** ./src/app/courses/add/page.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/actions/course-actions */ \"(app-pages-browser)/./src/app/lib/actions/course-actions.ts\");\n/* harmony import */ var _app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/components/image-picker */ \"(app-pages-browser)/./src/app/lib/components/image-picker.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const [state, handleAddAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useActionState)(_app_lib_actions_course_actions__WEBPACK_IMPORTED_MODULE_1__.handleAdd, {\n        message: \"\"\n    });\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: '',\n        price: '',\n        duration: '',\n        cover: null\n    });\n    const handleChange = (e)=>{\n        const { name, value, files } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: files ? files[0] : value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const data = new FormData();\n        Object.keys(formData).forEach((key)=>{\n            const value = formData[key];\n            if (value) {\n                data.append(key, value);\n            }\n        });\n        const result = await handleAddAction(data);\n        if (result === null || result === void 0 ? void 0 : result.message) {\n            setFormData((prev)=>({\n                    ...prev,\n                    ...result.values\n                }));\n        } else {\n        // Handle successful submission\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"is-size-5\",\n                children: \"Add Course\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"columns\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"column is-two-fifths my-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"box\",\n                        onSubmit: handleSubmit,\n                        children: [\n                            (state === null || state === void 0 ? void 0 : state.message) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: 'red'\n                                },\n                                children: state === null || state === void 0 ? void 0 : state.message\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 44\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-primary\",\n                                    name: \"name\",\n                                    value: formData.name,\n                                    onChange: handleChange,\n                                    placeholder: \"Enter a name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-primary\",\n                                    name: \"price\",\n                                    value: formData.price,\n                                    onChange: handleChange,\n                                    placeholder: \"Enter a price\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"input is-primary\",\n                                    name: \"duration\",\n                                    value: formData.duration,\n                                    onChange: handleChange,\n                                    placeholder: \"Enter a duration\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_lib_components_image_picker__WEBPACK_IMPORTED_MODULE_2__.ImagePicker, {\n                                    onChange: (file)=>setFormData((prev)=>({\n                                                ...prev,\n                                                cover: file\n                                            }))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"field my-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"button is-danger\",\n                                    type: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\picsart academy1\\\\FrontEnd\\\\homeworks\\\\hw_18\\\\src\\\\app\\\\courses\\\\add\\\\page.tsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s(Page, \"jFJsTmUIh7ers4J6YkG3g3wy5D4=\", false, function() {\n    return [\n        react__WEBPACK_IMPORTED_MODULE_3__.useActionState\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9hZGQvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNkQ7QUFDRztBQUN6QjtBQUNrQjtBQVMxQyxTQUFTSTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxnQkFBZ0IsR0FBR0oscURBQWNBLENBQUNGLHNFQUFTQSxFQUFFO1FBQUVPLFNBQVM7SUFBRztJQUN6RSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWdCO1FBQ3BETyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxPQUFPO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRUwsSUFBSSxFQUFFTSxLQUFLLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ3ZDVCxZQUFZLENBQUNVLE9BQVU7Z0JBQ25CLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ1QsS0FBSyxFQUFFTyxRQUFRQSxLQUFLLENBQUMsRUFBRSxHQUFHRDtZQUMvQjtJQUNKO0lBRUEsTUFBTUksZUFBZSxPQUFPTDtRQUN4QkEsRUFBRU0sY0FBYztRQUVoQixNQUFNQyxPQUFPLElBQUlDO1FBQ2pCQyxPQUFPQyxJQUFJLENBQUNqQixVQUFVa0IsT0FBTyxDQUFDLENBQUNDO1lBQzNCLE1BQU1YLFFBQVFSLFFBQVEsQ0FBQ21CLElBQTJCO1lBQ2xELElBQUlYLE9BQU87Z0JBQ1BNLEtBQUtNLE1BQU0sQ0FBQ0QsS0FBS1g7WUFDckI7UUFDSjtRQUVBLE1BQU1hLFNBQVMsTUFBTXZCLGdCQUFnQmdCO1FBRXJDLElBQUlPLG1CQUFBQSw2QkFBQUEsT0FBUXRCLE9BQU8sRUFBRTtZQUNqQkUsWUFBWSxDQUFDVSxPQUFVO29CQUNuQixHQUFHQSxJQUFJO29CQUNQLEdBQUdVLE9BQU9DLE1BQU07Z0JBQ3BCO1FBQ0osT0FBTztRQUNILCtCQUErQjtRQUNuQztJQUNKO0lBRUEscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQVk7Ozs7OzswQkFDMUIsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNYLDRFQUFDRjtvQkFBSUUsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUtELFdBQVU7d0JBQU1FLFVBQVVmOzs0QkFDM0JmLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT0UsT0FBTyxtQkFBSSw4REFBQzZCO2dDQUFFQyxPQUFPO29DQUFFQyxPQUFPO2dDQUFNOzBDQUFJakMsa0JBQUFBLDRCQUFBQSxNQUFPRSxPQUFPOzs7Ozs7MENBQzlELDhEQUFDd0I7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNNO29DQUNHQyxNQUFLO29DQUNMUCxXQUFVO29DQUNWdkIsTUFBSztvQ0FDTE0sT0FBT1IsU0FBU0UsSUFBSTtvQ0FDcEIrQixVQUFVM0I7b0NBQ1Y0QixhQUFZOzs7Ozs7Ozs7OzswQ0FHcEIsOERBQUNYO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDTTtvQ0FDR0MsTUFBSztvQ0FDTFAsV0FBVTtvQ0FDVnZCLE1BQUs7b0NBQ0xNLE9BQU9SLFNBQVNHLEtBQUs7b0NBQ3JCOEIsVUFBVTNCO29DQUNWNEIsYUFBWTs7Ozs7Ozs7Ozs7MENBR3BCLDhEQUFDWDtnQ0FBSUUsV0FBVTswQ0FDWCw0RUFBQ007b0NBQ0dDLE1BQUs7b0NBQ0xQLFdBQVU7b0NBQ1Z2QixNQUFLO29DQUNMTSxPQUFPUixTQUFTSSxRQUFRO29DQUN4QjZCLFVBQVUzQjtvQ0FDVjRCLGFBQVk7Ozs7Ozs7Ozs7OzBDQUdwQiw4REFBQ1g7Z0NBQUlFLFdBQVU7MENBQ1gsNEVBQUNoQyx5RUFBV0E7b0NBQUN3QyxVQUFVLENBQUNFLE9BQWVsQyxZQUFZLENBQUNVLE9BQVU7Z0RBQUUsR0FBR0EsSUFBSTtnREFBRU4sT0FBTzhCOzRDQUFLOzs7Ozs7Ozs7OzswQ0FFekYsOERBQUNaO2dDQUFJRSxXQUFVOzBDQUNYLDRFQUFDVztvQ0FBT1gsV0FBVTtvQ0FBbUJPLE1BQUs7OENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8vRTtHQXhGd0JwQzs7UUFDYUYsaURBQWNBOzs7S0FEM0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY291cnNlcy9hZGQvcGFnZS50c3g/MzJiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgaGFuZGxlQWRkIH0gZnJvbSBcIkAvYXBwL2xpYi9hY3Rpb25zL2NvdXJzZS1hY3Rpb25zXCI7XG5pbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gXCJAL2FwcC9saWIvY29tcG9uZW50cy9pbWFnZS1waWNrZXJcIjtcbmltcG9ydCB7IHVzZUFjdGlvblN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRm9ybURhdGFTdGF0ZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHByaWNlOiBzdHJpbmc7XG4gICAgZHVyYXRpb246IHN0cmluZztcbiAgICBjb3ZlcjogRmlsZSB8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgW3N0YXRlLCBoYW5kbGVBZGRBY3Rpb25dID0gdXNlQWN0aW9uU3RhdGUoaGFuZGxlQWRkLCB7IG1lc3NhZ2U6IFwiXCIgfSk7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZTxGb3JtRGF0YVN0YXRlPih7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBwcmljZTogJycsXG4gICAgICAgIGR1cmF0aW9uOiAnJyxcbiAgICAgICAgY292ZXI6IG51bGwsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICBbbmFtZV06IGZpbGVzID8gZmlsZXNbMF0gOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtRGF0YVtrZXkgYXMga2V5b2YgRm9ybURhdGFTdGF0ZV07XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgaGFuZGxlQWRkQWN0aW9uKGRhdGEpO1xuXG4gICAgICAgIGlmIChyZXN1bHQ/Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LnZhbHVlcyxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIHN1Ym1pc3Npb25cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImlzLXNpemUtNVwiPkFkZCBDb3Vyc2U8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtdHdvLWZpZnRocyBteS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImJveFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlPy5tZXNzYWdlICYmIDxwIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT57c3RhdGU/Lm1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCBteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIHByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImR1cmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmR1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgZHVyYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVBpY2tlciBvbkNoYW5nZT17KGZpbGU6IEZpbGUpID0+IHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBjb3ZlcjogZmlsZSB9KSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIGlzLWRhbmdlclwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJoYW5kbGVBZGQiLCJJbWFnZVBpY2tlciIsInVzZUFjdGlvblN0YXRlIiwidXNlU3RhdGUiLCJQYWdlIiwic3RhdGUiLCJoYW5kbGVBZGRBY3Rpb24iLCJtZXNzYWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsIm5hbWUiLCJwcmljZSIsImR1cmF0aW9uIiwiY292ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsdWUiLCJmaWxlcyIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJGb3JtRGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiYXBwZW5kIiwicmVzdWx0IiwidmFsdWVzIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJwIiwic3R5bGUiLCJjb2xvciIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJmaWxlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/add/page.tsx\n"));

/***/ })

});