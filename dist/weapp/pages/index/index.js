"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.1.7_webpack@5.102.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.1.7_webpack@5.102.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.1.7_@tarojs+service@4.1.7_@tarojs+shared@4.1.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./src/store/index.ts");
/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/format */ "./src/utils/format.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);



/**
 * 首页
 * 功能：轮播图、推荐商品、分类入口
 */








// Mock 数据（实际项目中从 API 获取）

var mockBanners = [{
  id: '1',
  image: 'https://via.placeholder.com/750x400/FF6A3C/FFFFFF?text=Banner+1',
  title: '新品推荐',
  link: '',
  type: 1,
  sort: 1
}, {
  id: '2',
  image: 'https://via.placeholder.com/750x400/1677FF/FFFFFF?text=Banner+2',
  title: '限时优惠',
  link: '',
  type: 2,
  sort: 2
}, {
  id: '3',
  image: 'https://via.placeholder.com/750x400/52C41A/FFFFFF?text=Banner+3',
  title: '会员专享',
  link: '',
  type: 3,
  sort: 3
}];
var mockCategories = [{
  id: '1',
  name: '奶茶',
  icon: '🧋'
}, {
  id: '2',
  name: '咖啡',
  icon: '☕'
}, {
  id: '3',
  name: '果茶',
  icon: '🍵'
}, {
  id: '4',
  name: '甜品',
  icon: '🍰'
}, {
  id: '5',
  name: '面包',
  icon: '🍞'
}];
var mockProducts = [{
  id: '1',
  name: '霸气芝士草莓',
  subtitle: '新鲜草莓+醇厚芝士',
  coverImage: 'https://via.placeholder.com/300x300/FF6A3C/FFFFFF?text=Product+1',
  images: [],
  categoryId: '1',
  categoryName: '奶茶',
  price: 2800,
  originalPrice: 3200,
  sales: 999,
  stock: 100,
  specs: [],
  description: '精选新鲜草莓，搭配醇厚芝士，口感丰富',
  tags: ['新品', '推荐'],
  status: 1
}, {
  id: '2',
  name: '霸气杨梅',
  subtitle: '清爽杨梅+Q弹果肉',
  coverImage: 'https://via.placeholder.com/300x300/1677FF/FFFFFF?text=Product+2',
  images: [],
  categoryId: '1',
  categoryName: '奶茶',
  price: 2600,
  originalPrice: 2600,
  sales: 888,
  stock: 100,
  specs: [],
  description: '清爽杨梅，酸甜可口',
  tags: ['热销'],
  status: 1
}, {
  id: '3',
  name: '生椰拿铁',
  subtitle: '椰香浓郁+咖啡醇香',
  coverImage: 'https://via.placeholder.com/300x300/52C41A/FFFFFF?text=Product+3',
  images: [],
  categoryId: '2',
  categoryName: '咖啡',
  price: 2400,
  originalPrice: 2400,
  sales: 666,
  stock: 100,
  specs: [],
  description: '椰香与咖啡的完美结合',
  tags: ['推荐'],
  status: 1
}, {
  id: '4',
  name: '芋泥啵啵奶茶',
  subtitle: '香浓芋泥+珍珠',
  coverImage: 'https://via.placeholder.com/300x300/FAAD14/FFFFFF?text=Product+4',
  images: [],
  categoryId: '1',
  categoryName: '奶茶',
  price: 2200,
  originalPrice: 2200,
  sales: 555,
  stock: 100,
  specs: [],
  description: '香浓芋泥，Q弹珍珠',
  tags: ['热销'],
  status: 1
}];
function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    banners = _useState2[0],
    setBanners = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState4 = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    categories = _useState4[0],
    setCategories = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState6 = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    products = _useState6[0],
    setProducts = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState8 = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var cartCount = (0,_store__WEBPACK_IMPORTED_MODULE_6__.useAppSelector)(function (state) {
    return state.cart.totalCount;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    loadData();
  }, []);

  // 加载数据
  var loadData = /*#__PURE__*/function () {
    var _ref = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee() {
      var _t;
      return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_pnpm_babel_runtime_7_28_4_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            // TODO: 实际项目中调用 API
            // const res = await Promise.all([
            //   getBanners(),
            //   getCategories(),
            //   getRecommendedProducts()
            // ])

            // 模拟延迟
            _context.n = 1;
            return new Promise(function (resolve) {
              return setTimeout(resolve, 500);
            });
          case 1:
            setBanners(mockBanners);
            setCategories(mockCategories);
            setProducts(mockProducts);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().showToast({
              title: '加载失败',
              icon: 'none'
            });
          case 3:
            _context.p = 3;
            setLoading(false);
            return _context.f(3);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2, 3, 4]]);
    }));
    return function loadData() {
      return _ref.apply(this, arguments);
    };
  }();

  // 跳转到商品详情
  var goToProductDetail = function goToProductDetail(id) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().navigateTo({
      url: "/pages/product-detail/index?id=".concat(id)
    });
  };

  // 跳转到分类页
  var goToCategory = function goToCategory(categoryId) {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().switchTab({
      url: "/pages/category/index?id=".concat(categoryId)
    });
  };

  // 跳转到购物车
  var goToCart = function goToCart() {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_5___default().switchTab({
      url: '/pages/cart/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "home-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.ScrollView, {
      scrollY: true,
      className: "home-scroll",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "banner-section",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
          className: "banner-swiper",
          indicatorDots: true,
          autoplay: true,
          interval: 3000,
          circular: true,
          children: banners.map(function (banner) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.SwiperItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
                src: banner.image,
                className: "banner-image",
                mode: "aspectFill"
              })
            }, banner.id);
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "category-section",
        children: categories.map(function (category) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "category-item",
            onClick: function onClick() {
              return goToCategory(category.id);
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
              className: "category-icon",
              children: category.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "category-name",
              children: category.name
            })]
          }, category.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "product-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "section-header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "section-title",
            children: "\u4E3A\u4F60\u63A8\u8350"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "product-list",
          children: products.map(function (product) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
              className: "product-card",
              onClick: function onClick() {
                return goToProductDetail(product.id);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
                src: product.coverImage,
                className: "product-image",
                mode: "aspectFill"
              }), product.tags && product.tags.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
                className: "product-tags",
                children: product.tags.map(function (tag, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
                    className: "product-tag",
                    children: tag
                  }, index);
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
                className: "product-info",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                  className: "product-name",
                  numberOfLines: 2,
                  children: product.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                  className: "product-subtitle",
                  numberOfLines: 1,
                  children: product.subtitle
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
                  className: "product-footer",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
                    className: "product-price",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                      className: "price-current",
                      children: ["\xA5", (0,_utils_format__WEBPACK_IMPORTED_MODULE_7__.formatMoney)(product.price)]
                    }), product.originalPrice > product.price && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                      className: "price-original",
                      children: ["\xA5", (0,_utils_format__WEBPACK_IMPORTED_MODULE_7__.formatMoney)(product.originalPrice)]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
                    className: "product-sales",
                    children: ["\u5DF2\u552E", product.sales]
                  })]
                })]
              })]
            }, product.id);
          })
        })]
      })]
    }), cartCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "cart-float-btn",
      onClick: goToCart,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "cart-icon",
        children: "\uD83D\uDED2"
      }), cartCount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "cart-badge",
        children: cartCount
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_1_7_webpack_5_102_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@4.1.7_webpack@5.102.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.1.7_webpack@5.102.1_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/index/index!./src/pages/index/index.tsx");


var config = {"navigationBarTitleText":"奈雪的茶","navigationBarBackgroundColor":"#FF6A3C","navigationBarTextStyle":"white","enablePullDownRefresh":true,"backgroundColor":"#F7F8FA"};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_1_7_webpack_5_102_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index', {root:{cn:[]}}, config || {})
if (_node_modules_pnpm_tarojs_taro_loader_4_1_7_webpack_5_102_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"] && _node_modules_pnpm_tarojs_taro_loader_4_1_7_webpack_5_102_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_pnpm_tarojs_taro_loader_4_1_7_webpack_5_102_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_1_7_webpack_5_102_1_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_index_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/utils/format.ts":
/*!*****************************!*\
  !*** ./src/utils/format.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatMoney: function() { return /* binding */ formatMoney; }
/* harmony export */ });
/* unused harmony exports formatMoneyWithComma, formatDateTime, formatDate, formatTime, formatRelativeTime, formatPhone, formatAddress, formatNumber, formatFileSize, formatPercent, truncate, formatOrderNo, formatIdCard, formatBankCard, hideBankCard */
/**
 * 格式化工具函数
 */

/**
 * 格式化金额（分转元，保留两位小数）
 */
var formatMoney = function formatMoney(amount) {
  return (amount / 100).toFixed(2);
};

/**
 * 格式化金额（元，添加千分位）
 */
var formatMoneyWithComma = function formatMoneyWithComma(amount) {
  var yuan = formatMoney(amount);
  var parts = yuan.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

/**
 * 格式化日期时间
 */
var formatDateTime = function formatDateTime(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
  var d = typeof date === 'string' ? new Date(date) : date;
  var year = d.getFullYear();
  var month = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  var hour = String(d.getHours()).padStart(2, '0');
  var minute = String(d.getMinutes()).padStart(2, '0');
  var second = String(d.getSeconds()).padStart(2, '0');
  return format.replace('YYYY', String(year)).replace('MM', month).replace('DD', day).replace('HH', hour).replace('mm', minute).replace('ss', second);
};

/**
 * 格式化日期（YYYY-MM-DD）
 */
var formatDate = function formatDate(date) {
  return formatDateTime(date, 'YYYY-MM-DD');
};

/**
 * 格式化时间（HH:mm:ss）
 */
var formatTime = function formatTime(date) {
  return formatDateTime(date, 'HH:mm:ss');
};

/**
 * 格式化相对时间
 */
var formatRelativeTime = function formatRelativeTime(date) {
  var d = typeof date === 'string' ? new Date(date) : date;
  var now = new Date();
  var diff = now.getTime() - d.getTime();
  var minute = 60 * 1000;
  var hour = 60 * minute;
  var day = 24 * hour;
  var month = 30 * day;
  var year = 12 * month;
  if (diff < minute) return '刚刚';
  if (diff < hour) return "".concat(Math.floor(diff / minute), "\u5206\u949F\u524D");
  if (diff < day) return "".concat(Math.floor(diff / hour), "\u5C0F\u65F6\u524D");
  if (diff < day * 2) return '昨天';
  if (diff < day * 3) return '前天';
  if (diff < month) return "".concat(Math.floor(diff / day), "\u5929\u524D");
  if (diff < year) return "".concat(Math.floor(diff / month), "\u4E2A\u6708\u524D");
  return "".concat(Math.floor(diff / year), "\u5E74\u524D");
};

/**
 * 格式化手机号（隐藏中间4位）
 */
var formatPhone = function formatPhone(phone) {
  if (!phone || phone.length !== 11) return phone;
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};

/**
 * 格式化地址
 */
var formatAddress = function formatAddress(province, city, district, detail) {
  return "".concat(province).concat(city).concat(district).concat(detail);
};

/**
 * 格式化数字（添加千分位）
 */
var formatNumber = function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 格式化文件大小
 */
var formatFileSize = function formatFileSize(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024;
  var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  var i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * 格式化百分比
 */
var formatPercent = function formatPercent(value, total) {
  var decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  if (total === 0) return '0%';
  return (value / total * 100).toFixed(decimals) + '%';
};

/**
 * 截断文本
 */
var truncate = function truncate(text, length) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
  if (text.length <= length) return text;
  return text.substring(0, length) + suffix;
};

/**
 * 格式化订单号（添加空格）
 */
var formatOrderNo = function formatOrderNo(orderNo) {
  return orderNo.replace(/(.{4})/g, '$1 ').trim();
};

/**
 * 脱敏身份证号
 */
var formatIdCard = function formatIdCard(idCard) {
  if (!idCard || idCard.length < 18) return idCard;
  return idCard.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
};

/**
 * 格式化银行卡号
 */
var formatBankCard = function formatBankCard(cardNo) {
  if (!cardNo) return cardNo;
  // 每4位添加一个空格
  return cardNo.replace(/(.{4})/g, '$1 ').trim();
};

/**
 * 隐藏银行卡号中间部分
 */
var hideBankCard = function hideBankCard(cardNo) {
  if (!cardNo || cardNo.length < 16) return cardNo;
  return cardNo.replace(/(\d{4})\d+(\d{4})/, '$1 **** **** $2');
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/index/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map