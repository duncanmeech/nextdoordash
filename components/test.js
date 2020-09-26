(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [1],
  {
    /***/ "./components/item-modal.js":
      /*!**********************************!*\
  !*** ./components/item-modal.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return ItemModal;
          }
        );
        /* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"
        );
        /* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js"
        );
        /* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js"
        );
        /* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"
        );
        /* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"
        );
        /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"
        );
        /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./utils/image */ "./components/utils/image.js"
        );

        var _jsxFileName =
          "/Users/duncan.meech/Projects/nextdoordash/components/item-modal.js";

        var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = Object(
                _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              )(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = Object(
                _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ]
              )(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return Object(
              _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ]
            )(this, result);
          };
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        var optimalImageUrl = function optimalImageUrl(imageUrl) {
          var source = Object(
            _utils_image__WEBPACK_IMPORTED_MODULE_7__["getCannonicalURI"]
          )(imageUrl);
          return "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto/".concat(
            source
          );
        };

        var ItemModal = /*#__PURE__*/ (function (_React$PureComponent) {
          Object(
            _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[
              "default"
            ]
          )(ItemModal, _React$PureComponent);

          var _super = _createSuper(ItemModal);

          function ItemModal() {
            Object(
              _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(this, ItemModal);

            return _super.apply(this, arguments);
          }

          Object(
            _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
              "default"
            ]
          )(ItemModal, [
            {
              key: "render",
              value: function render() {
                var _this$props = this.props,
                  menuItem = _this$props.menuItem,
                  closed = _this$props.closed;
                var imageUrl = menuItem.imageUrl;
                return __jsx(
                  "div",
                  {
                    className: "jsx-686400034" + " " + "modal-overlay",
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 14,
                      columnNumber: 7,
                    },
                  },
                  __jsx(
                    "div",
                    {
                      className: "jsx-686400034" + " " + "modal",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                        columnNumber: 9,
                      },
                    },
                    __jsx("img", {
                      src: optimalImageUrl(imageUrl),
                      className: "jsx-686400034" + " " + "image",
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16,
                        columnNumber: 11,
                      },
                    }),
                    __jsx(
                      "button",
                      {
                        onClick: closed,
                        className: "jsx-686400034" + " " + "button",
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                          columnNumber: 11,
                        },
                      },
                      "Close"
                    )
                  ),
                  __jsx(
                    styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a,
                    {
                      id: "686400034",
                      __self: this,
                    },
                    ".modal-overlay.jsx-686400034{position:fixed;left:0;top:0;width:100vw;height:100vh;background-color:rgba(0,0,0,0.25);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.modal.jsx-686400034{width:50vw;height:50vh;padding:16px;max-width:600px;min-width:300px;border-radius:9px;background-color:white;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.image.jsx-686400034{width:100%;overflow:hidden;object-fit:cover;}.button.jsx-686400034{color:white;background-color:rgb(235,23,0);font-size:14px;font-family:TTNorms-Bold;line-height:24px;border-radius:1000px;padding:4px 12px;outline:none;box-sizing:content-box;border:4px solid transparent;min-width:200px;max-width:30vw;}.button.jsx-686400034:focus{border:4px solid rgba(0,0,255,0.4);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdW5jYW4ubWVlY2gvUHJvamVjdHMvbmV4dGRvb3JkYXNoL2NvbXBvbmVudHMvaXRlbS1tb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQm9CLEFBRzRCLEFBWUosQUFlQSxBQUtDLEFBYzBCLFdBakMxQixBQWVJLENBS2lCLEdBaEMxQixPQUNELENBWU8sSUFlSSxDQTFCTCxPQTRDZCxDQWhDa0IsSUFYSCxHQThCRSxDQUpqQixRQWRrQixDQVhxQixLQThCWixVQWxCUCxlQW1CRCxHQWxCTSxDQVhWLGFBOEJRLFNBbEJMLFlBbUJDLElBakJKLGFBa0JBLGFBQ1UsVUFoQ0osYUFpQ1UseUJBbkJQLElBb0JOLGdCQUNELGVBQ2pCLG9CQW5DeUIsdUJBY08sNEVBYmhDLHVDQWNxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2R1bmNhbi5tZWVjaC9Qcm9qZWN0cy9uZXh0ZG9vcmRhc2gvY29tcG9uZW50cy9pdGVtLW1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q2Fubm9uaWNhbFVSSSB9IGZyb20gXCIuL3V0aWxzL2ltYWdlXCI7XG5cbmNvbnN0IG9wdGltYWxJbWFnZVVybCA9IChpbWFnZVVybCkgPT4ge1xuICBjb25zdCBzb3VyY2UgPSBnZXRDYW5ub25pY2FsVVJJKGltYWdlVXJsKTtcbiAgcmV0dXJuIGBodHRwczovL2ltZy5jZG40ZGQuY29tL2Nkbi1jZ2kvaW1hZ2UvZml0PWNvbnRhaW4sd2lkdGg9NjAwLGZvcm1hdD1hdXRvLyR7c291cmNlfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtTW9kYWwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbWVudUl0ZW0sIGNsb3NlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGltYWdlVXJsIH0gPSBtZW51SXRlbTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e29wdGltYWxJbWFnZVVybChpbWFnZVVybCl9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZWR9PlxuICAgICAgICAgICAgQ2xvc2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubW9kYWwtb3ZlcmxheSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICAgIGhlaWdodDogNTB2aDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjMsIDApO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFRUTm9ybXMtQm9sZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5idXR0b246Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSgwLCAwLCAyNTUsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/duncan.meech/Projects/nextdoordash/components/item-modal.js */"
                  )
                );
              },
            },
          ]);

          return ItemModal;
        })(react__WEBPACK_IMPORTED_MODULE_6___default.a.PureComponent);

        /***/
      },
  },
]);
//# sourceMappingURL=1.js.map
