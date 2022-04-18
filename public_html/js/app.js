/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/js/menu.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  /**\n   * Initialize aria visibility toggles.\n   *\n   * Usage:\n   *    <button aria-expanded=\"false\" aria-controls=\"myDropdown\">Toggle</button>\n   *    <div id=\"myDropdown\" aria-hidden=\"true\">Dropdown</div>\n   */\n  document.querySelectorAll('[aria-controls]').forEach(function (el) {\n    el.addEventListener('click', function (e) {\n      var id = el.getAttribute('aria-controls');\n      var controlled = document.getElementById(id);\n      var open = controlled.getAttribute('aria-hidden') !== 'false';\n      controlled.setAttribute('aria-hidden', open ? 'false' : 'true');\n      document.querySelectorAll(\"[aria-controls=\\\"\".concat(id, \"\\\"]\")).forEach(function (el) {\n        el.setAttribute('aria-expanded', open ? 'true' : 'false');\n      });\n      e.preventDefault();\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFFbEQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUQsRUFBQUEsUUFBUSxDQUFDRSxnQkFBVCxDQUEwQixpQkFBMUIsRUFBNkNDLE9BQTdDLENBQXFELFVBQUFDLEVBQUUsRUFBSTtBQUN6REEsSUFBQUEsRUFBRSxDQUFDSCxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFBSSxDQUFDLEVBQUk7QUFDaEMsVUFBTUMsRUFBRSxHQUFHRixFQUFFLENBQUNHLFlBQUgsQ0FBZ0IsZUFBaEIsQ0FBWDtBQUNBLFVBQU1DLFVBQVUsR0FBR1IsUUFBUSxDQUFDUyxjQUFULENBQXdCSCxFQUF4QixDQUFuQjtBQUNBLFVBQU1JLElBQUksR0FBR0YsVUFBVSxDQUFDRCxZQUFYLENBQXdCLGFBQXhCLE1BQTJDLE9BQXhEO0FBRUFDLE1BQUFBLFVBQVUsQ0FBQ0csWUFBWCxDQUF3QixhQUF4QixFQUF1Q0QsSUFBSSxHQUFHLE9BQUgsR0FBYSxNQUF4RDtBQUVBVixNQUFBQSxRQUFRLENBQUNFLGdCQUFULDRCQUE2Q0ksRUFBN0MsVUFBcURILE9BQXJELENBQTZELFVBQUFDLEVBQUUsRUFBSTtBQUNqRUEsUUFBQUEsRUFBRSxDQUFDTyxZQUFILENBQWdCLGVBQWhCLEVBQWlDRCxJQUFJLEdBQUcsTUFBSCxHQUFZLE9BQWpEO0FBQ0QsT0FGRDtBQUlBTCxNQUFBQSxDQUFDLENBQUNPLGNBQUY7QUFDRCxLQVpEO0FBYUQsR0FkRDtBQWdCRCxDQXpCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanM/Y2QxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vbWVudSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYXJpYSB2aXNpYmlsaXR5IHRvZ2dsZXMuXG4gICAqXG4gICAqIFVzYWdlOlxuICAgKiAgICA8YnV0dG9uIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtY29udHJvbHM9XCJteURyb3Bkb3duXCI+VG9nZ2xlPC9idXR0b24+XG4gICAqICAgIDxkaXYgaWQ9XCJteURyb3Bkb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+RHJvcGRvd248L2Rpdj5cbiAgICovXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1thcmlhLWNvbnRyb2xzXScpLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xuICAgICAgY29uc3QgY29udHJvbGxlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgIGNvbnN0IG9wZW4gPSBjb250cm9sbGVkLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSAhPT0gJ2ZhbHNlJztcblxuICAgICAgY29udHJvbGxlZC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgb3BlbiA/ICdmYWxzZScgOiAndHJ1ZScpO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbYXJpYS1jb250cm9scz1cIiR7aWR9XCJdYCkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIG9wZW4gPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICAgIH0pO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gIH0pO1xuXG59KTtcbiJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiZSIsImlkIiwiZ2V0QXR0cmlidXRlIiwiY29udHJvbGxlZCIsImdldEVsZW1lbnRCeUlkIiwib3BlbiIsInNldEF0dHJpYnV0ZSIsInByZXZlbnREZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var menu = document.getElementById('menu');\n  var menuButton = document.querySelector('[aria-controls=menu]'); // Hide menu when pressing escape key\n\n  document.addEventListener('keydown', function (e) {\n    if (menuButton.getAttribute('aria-expanded') === 'true' && e.key === 'Escape') {\n      menuButton.click();\n    }\n  }); // Hide menu when clicking overlay background\n\n  menu.addEventListener('click', function (e) {\n    if (e.target === menu) {\n      menuButton.click();\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWVudS5qcz9jYzFjIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnUiLCJnZXRFbGVtZW50QnlJZCIsIm1lbnVCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiZSIsImdldEF0dHJpYnV0ZSIsImtleSIsImNsaWNrIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsc0JBQXZCLENBQW5CLENBRmtELENBSWxEOztBQUNBTCxFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLFVBQUFLLENBQUMsRUFBSTtBQUN4QyxRQUFJRixVQUFVLENBQUNHLFlBQVgsQ0FBd0IsZUFBeEIsTUFBNkMsTUFBN0MsSUFBdURELENBQUMsQ0FBQ0UsR0FBRixLQUFVLFFBQXJFLEVBQStFO0FBQzdFSixNQUFBQSxVQUFVLENBQUNLLEtBQVg7QUFDRDtBQUNGLEdBSkQsRUFMa0QsQ0FXbEQ7O0FBQ0FQLEVBQUFBLElBQUksQ0FBQ0QsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBQUssQ0FBQyxFQUFJO0FBQ2xDLFFBQUlBLENBQUMsQ0FBQ0ksTUFBRixLQUFhUixJQUFqQixFQUF1QjtBQUNyQkUsTUFBQUEsVUFBVSxDQUFDSyxLQUFYO0FBQ0Q7QUFDRixHQUpEO0FBS0QsQ0FqQkQiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1thcmlhLWNvbnRyb2xzPW1lbnVdJyk7XG5cbiAgLy8gSGlkZSBtZW51IHdoZW4gcHJlc3NpbmcgZXNjYXBlIGtleVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKG1lbnVCdXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJyAmJiBlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIG1lbnVCdXR0b24uY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEhpZGUgbWVudSB3aGVuIGNsaWNraW5nIG92ZXJsYXkgYmFja2dyb3VuZFxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtZW51KSB7XG4gICAgICBtZW51QnV0dG9uLmNsaWNrKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuIl0sImZpbGUiOiIuL3NyYy9qcy9tZW51LmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/menu.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9hcHAuc2Nzcz84ZTc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app"], () => (__webpack_exec__("./src/js/app.js"), __webpack_exec__("./src/scss/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);