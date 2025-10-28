"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/constants/api.ts":
/*!******************************!*\
  !*** ./src/constants/api.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOKEN_KEY: function() { return /* binding */ TOKEN_KEY; }
/* harmony export */ });
/* unused harmony exports BASE_URL, API, TIMEOUT, PAGE_SIZE */
/**
 * API 地址配置
 */

// API 基础地址
var BASE_URL =  false ? 0 : 'https://api-dev.naixue.com';

// API 端点
var API = {
  // 用户相关
  LOGIN: '/api/user/login',
  // 登录
  REGISTER: '/api/user/register',
  // 注册
  GET_USER_INFO: '/api/user/info',
  // 获取用户信息
  UPDATE_USER_INFO: '/api/user/update',
  // 更新用户信息
  GET_ADDRESSES: '/api/user/addresses',
  // 获取地址列表
  ADD_ADDRESS: '/api/user/address/add',
  // 添加地址
  UPDATE_ADDRESS: '/api/user/address/update',
  // 更新地址
  DELETE_ADDRESS: '/api/user/address/delete',
  // 删除地址
  GET_COUPONS: '/api/user/coupons',
  // 获取优惠券列表
  GET_POINTS: '/api/user/points',
  // 获取积分记录

  // 商品相关
  GET_BANNERS: '/api/product/banners',
  // 获取轮播图
  GET_CATEGORIES: '/api/product/categories',
  // 获取分类列表
  GET_PRODUCTS: '/api/product/list',
  // 获取商品列表
  GET_PRODUCT_DETAIL: '/api/product/detail',
  // 获取商品详情
  SEARCH_PRODUCTS: '/api/product/search',
  // 搜索商品
  GET_RECOMMENDED: '/api/product/recommended',
  // 获取推荐商品

  // 购物车相关
  GET_CART: '/api/cart/list',
  // 获取购物车
  ADD_TO_CART: '/api/cart/add',
  // 加入购物车
  UPDATE_CART: '/api/cart/update',
  // 更新购物车
  DELETE_CART: '/api/cart/delete',
  // 删除购物车商品
  CLEAR_CART: '/api/cart/clear',
  // 清空购物车

  // 订单相关
  CREATE_ORDER: '/api/order/create',
  // 创建订单
  GET_ORDERS: '/api/order/list',
  // 获取订单列表
  GET_ORDER_DETAIL: '/api/order/detail',
  // 获取订单详情
  CANCEL_ORDER: '/api/order/cancel',
  // 取消订单
  GET_ORDER_STATS: '/api/order/stats',
  // 获取订单统计

  // 支付相关
  CREATE_PAYMENT: '/api/payment/create',
  // 创建支付
  QUERY_PAYMENT: '/api/payment/query',
  // 查询支付状态

  // 文件上传
  UPLOAD: '/api/upload'
};

// 请求超时时间（毫秒）
var TIMEOUT = 10000;

// TOKEN 存储 key
var TOKEN_KEY = 'naixue_token';

// 分页默认配置
var PAGE_SIZE = 20;

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: function() { return /* binding */ store; },
/* harmony export */   useAppSelector: function() { return /* binding */ useAppSelector; }
/* harmony export */ });
/* unused harmony export useAppDispatch */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/container/remote/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/container/remote/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/userSlice */ "./src/store/slices/userSlice.ts");
/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/cartSlice */ "./src/store/slices/cartSlice.ts");
/**
 * Redux Store 配置
 */





var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    user: _slices_userSlice__WEBPACK_IMPORTED_MODULE_2__["default"],
    cart: _slices_cartSlice__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: false
    });
  }
});

// 导出类型

// 导出 hooks
var useAppDispatch = function useAppDispatch() {
  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
};
var useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector;

/***/ }),

/***/ "./src/store/slices/cartSlice.ts":
/*!***************************************!*\
  !*** ./src/store/slices/cartSlice.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports addToCart, updateQuantity, removeFromCart, toggleChecked, toggleCheckAll, clearCart, removeCheckedItems, setCartItems */
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/container/remote/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);

/**
 * 购物车状态管理
 */


var initialState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
  checkedAll: false
};

// 计算总数和总价
var calculateTotal = function calculateTotal(items) {
  var checkedItems = items.filter(function (item) {
    return item.checked;
  });
  var totalCount = checkedItems.reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);
  var totalPrice = checkedItems.reduce(function (sum, item) {
    var specsPrice = item.specs.reduce(function (s, spec) {
      return s + spec.price;
    }, 0);
    return sum + (item.price + specsPrice) * item.quantity;
  }, 0);
  return {
    totalCount: totalCount,
    totalPrice: totalPrice
  };
};
var cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {
    // 添加到购物车
    addToCart: function addToCart(state, action) {
      var _action$payload = action.payload,
        productId = _action$payload.productId,
        specs = _action$payload.specs;

      // 检查是否已存在相同商品和规格
      var existingIndex = state.items.findIndex(function (item) {
        if (item.productId !== productId) return false;
        if (item.specs.length !== specs.length) return false;
        return item.specs.every(function (spec, index) {
          return spec.optionId === specs[index].optionId;
        });
      });
      if (existingIndex !== -1) {
        // 已存在，数量+1
        state.items[existingIndex].quantity += 1;
      } else {
        // 不存在，添加新项
        state.items.push((0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: "".concat(productId, "_").concat(Date.now())
        }, action.payload), {}, {
          quantity: 1,
          checked: true
        }));
      }
      var _calculateTotal = calculateTotal(state.items),
        totalCount = _calculateTotal.totalCount,
        totalPrice = _calculateTotal.totalPrice;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
      state.checkedAll = state.items.every(function (item) {
        return item.checked;
      });
    },
    // 更新数量
    updateQuantity: function updateQuantity(state, action) {
      var item = state.items.find(function (i) {
        return i.id === action.payload.id;
      });
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
      var _calculateTotal2 = calculateTotal(state.items),
        totalCount = _calculateTotal2.totalCount,
        totalPrice = _calculateTotal2.totalPrice;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
    },
    // 删除商品
    removeFromCart: function removeFromCart(state, action) {
      state.items = state.items.filter(function (item) {
        return item.id !== action.payload;
      });
      var _calculateTotal3 = calculateTotal(state.items),
        totalCount = _calculateTotal3.totalCount,
        totalPrice = _calculateTotal3.totalPrice;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
      state.checkedAll = state.items.length > 0 && state.items.every(function (item) {
        return item.checked;
      });
    },
    // 切换选中状态
    toggleChecked: function toggleChecked(state, action) {
      var item = state.items.find(function (i) {
        return i.id === action.payload;
      });
      if (item) {
        item.checked = !item.checked;
      }
      var _calculateTotal4 = calculateTotal(state.items),
        totalCount = _calculateTotal4.totalCount,
        totalPrice = _calculateTotal4.totalPrice;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
      state.checkedAll = state.items.every(function (item) {
        return item.checked;
      });
    },
    // 全选/取消全选
    toggleCheckAll: function toggleCheckAll(state) {
      state.checkedAll = !state.checkedAll;
      state.items.forEach(function (item) {
        item.checked = state.checkedAll;
      });
      var _calculateTotal5 = calculateTotal(state.items),
        totalCount = _calculateTotal5.totalCount,
        totalPrice = _calculateTotal5.totalPrice;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
    },
    // 清空购物车
    clearCart: function clearCart(state) {
      state.items = [];
      state.totalCount = 0;
      state.totalPrice = 0;
      state.checkedAll = false;
    },
    // 删除已选商品
    removeCheckedItems: function removeCheckedItems(state) {
      state.items = state.items.filter(function (item) {
        return !item.checked;
      });
      state.totalCount = 0;
      state.totalPrice = 0;
      state.checkedAll = false;
    },
    // 设置购物车数据（从服务器同步）
    setCartItems: function setCartItems(state, action) {
      state.items = action.payload;
      var _calculateTotal6 = calculateTotal(state.items),
        totalCount = _calculateTotal6.totalCount,
        totalPrice = _calculateTotal6.totalPrice;
      state.totalCount = totalCount;
      state.totalPrice = totalPrice;
      state.checkedAll = state.items.length > 0 && state.items.every(function (item) {
        return item.checked;
      });
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
  addToCart = _cartSlice$actions.addToCart,
  updateQuantity = _cartSlice$actions.updateQuantity,
  removeFromCart = _cartSlice$actions.removeFromCart,
  toggleChecked = _cartSlice$actions.toggleChecked,
  toggleCheckAll = _cartSlice$actions.toggleCheckAll,
  clearCart = _cartSlice$actions.clearCart,
  removeCheckedItems = _cartSlice$actions.removeCheckedItems,
  setCartItems = _cartSlice$actions.setCartItems;

/* harmony default export */ __webpack_exports__["default"] = (cartSlice.reducer);

/***/ }),

/***/ "./src/store/slices/userSlice.ts":
/*!***************************************!*\
  !*** ./src/store/slices/userSlice.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setToken: function() { return /* binding */ setToken; }
/* harmony export */ });
/* unused harmony exports login, getUserInfo, setUserInfo, logout, setAddresses, addAddress, updateAddress, deleteAddress, setDefaultAddress, setCoupons, updatePoints */
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/container/remote/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/storage */ "./src/utils/storage.ts");
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/api */ "./src/constants/api.ts");


/**
 * 用户状态管理
 */




var initialState = {
  token: null,
  // RN 不支持同步读取，需要在 app 启动时异步加载
  userInfo: null,
  isLogin: false,
  addresses: [],
  coupons: [],
  loading: false
};

// 异步 actions
var login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('user/login', /*#__PURE__*/function () {
  var _ref = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(params) {
    var response;
    return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify(params)
          });
        case 1:
          response = _context.v;
          return _context.a(2, response.json());
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var getUserInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)('user/getUserInfo', /*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee2() {
  var response;
  return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
    while (1) switch (_context2.n) {
      case 0:
        _context2.n = 1;
        return fetch('/api/user/info');
      case 1:
        response = _context2.v;
        return _context2.a(2, response.json());
    }
  }, _callee2);
})));
var userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {
    // 设置 token
    setToken: function setToken(state, action) {
      state.token = action.payload;
      state.isLogin = !!action.payload;
      _utils_storage__WEBPACK_IMPORTED_MODULE_3__["default"].set(_constants_api__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY, action.payload);
    },
    // 设置用户信息
    setUserInfo: function setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    // 退出登录
    logout: function logout(state) {
      state.token = null;
      state.userInfo = null;
      state.isLogin = false;
      state.addresses = [];
      state.coupons = [];
      _utils_storage__WEBPACK_IMPORTED_MODULE_3__["default"].remove(_constants_api__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY);
    },
    // 设置地址列表
    setAddresses: function setAddresses(state, action) {
      state.addresses = action.payload;
    },
    // 添加地址
    addAddress: function addAddress(state, action) {
      state.addresses.push(action.payload);
    },
    // 更新地址
    updateAddress: function updateAddress(state, action) {
      var index = state.addresses.findIndex(function (addr) {
        return addr.id === action.payload.id;
      });
      if (index !== -1) {
        state.addresses[index] = action.payload;
      }
    },
    // 删除地址
    deleteAddress: function deleteAddress(state, action) {
      state.addresses = state.addresses.filter(function (addr) {
        return addr.id !== action.payload;
      });
    },
    // 设置默认地址
    setDefaultAddress: function setDefaultAddress(state, action) {
      state.addresses.forEach(function (addr) {
        addr.isDefault = addr.id === action.payload;
      });
    },
    // 设置优惠券列表
    setCoupons: function setCoupons(state, action) {
      state.coupons = action.payload;
    },
    // 更新用户积分
    updatePoints: function updatePoints(state, action) {
      if (state.userInfo) {
        state.userInfo.points = action.payload;
      }
    }
  },
  extraReducers: function extraReducers(builder) {
    // 登录
    builder.addCase(login.pending, function (state) {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, function (state, action) {
      state.loading = false;
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
      state.isLogin = true;
      _utils_storage__WEBPACK_IMPORTED_MODULE_3__["default"].set(_constants_api__WEBPACK_IMPORTED_MODULE_4__.TOKEN_KEY, action.payload.token);
    });
    builder.addCase(login.rejected, function (state) {
      state.loading = false;
    });

    // 获取用户信息
    builder.addCase(getUserInfo.pending, function (state) {
      state.loading = true;
    });
    builder.addCase(getUserInfo.fulfilled, function (state, action) {
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(getUserInfo.rejected, function (state) {
      state.loading = false;
    });
  }
});
var _userSlice$actions = userSlice.actions,
  setToken = _userSlice$actions.setToken,
  setUserInfo = _userSlice$actions.setUserInfo,
  logout = _userSlice$actions.logout,
  setAddresses = _userSlice$actions.setAddresses,
  addAddress = _userSlice$actions.addAddress,
  updateAddress = _userSlice$actions.updateAddress,
  deleteAddress = _userSlice$actions.deleteAddress,
  setDefaultAddress = _userSlice$actions.setDefaultAddress,
  setCoupons = _userSlice$actions.setCoupons,
  updatePoints = _userSlice$actions.updatePoints;

/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./src/utils/storage.ts":
/*!******************************!*\
  !*** ./src/utils/storage.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regenerator.js */ "./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);




/**
 * 本地存储工具
 */


var Storage = /*#__PURE__*/function () {
  function Storage() {
    (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Storage);
  }
  return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Storage, [{
    key: "set",
    value:
    /**
     * 存储数据
     */
    function set(key, data) {
      try {
        var value = JSON.stringify(data);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().setStorageSync(key, value);
      } catch (error) {
        console.error('存储数据失败', key, error);
      }
    }

    /**
     * 获取数据
     */
  }, {
    key: "get",
    value: function get(key) {
      try {
        var value = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageSync(key);
        return value ? JSON.parse(value) : null;
      } catch (error) {
        console.error('获取数据失败', key, error);
        return null;
      }
    }

    /**
     * 删除数据
     */
  }, {
    key: "remove",
    value: function remove(key) {
      try {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().removeStorageSync(key);
      } catch (error) {
        console.error('删除数据失败', key, error);
      }
    }

    /**
     * 清空所有数据
     */
  }, {
    key: "clear",
    value: function clear() {
      try {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().clearStorageSync();
      } catch (error) {
        console.error('清空存储失败', error);
      }
    }

    /**
     * 异步存储数据
     */
  }, {
    key: "setAsync",
    value: (function () {
      var _setAsync = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(key, data) {
        var value, _t;
        return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              value = JSON.stringify(data);
              _context.n = 1;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().setStorage({
                key: key,
                data: value
              });
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('异步存储数据失败', key, _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function setAsync(_x, _x2) {
        return _setAsync.apply(this, arguments);
      }
      return setAsync;
    }()
    /**
     * 异步获取数据
     */
    )
  }, {
    key: "getAsync",
    value: (function () {
      var _getAsync = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee2(key) {
        var res, _t2;
        return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorage({
                key: key
              });
            case 1:
              res = _context2.v;
              return _context2.a(2, res.data ? JSON.parse(res.data) : null);
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              return _context2.a(2, null);
          }
        }, _callee2, null, [[0, 2]]);
      }));
      function getAsync(_x3) {
        return _getAsync.apply(this, arguments);
      }
      return getAsync;
    }()
    /**
     * 异步删除数据
     */
    )
  }, {
    key: "removeAsync",
    value: (function () {
      var _removeAsync = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee3(key) {
        var _t3;
        return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().removeStorage({
                key: key
              });
            case 1:
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error('异步删除数据失败', key, _t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }));
      function removeAsync(_x4) {
        return _removeAsync.apply(this, arguments);
      }
      return removeAsync;
    }()
    /**
     * 异步清空所有数据
     */
    )
  }, {
    key: "clearAsync",
    value: (function () {
      var _clearAsync = (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee4() {
        var _t4;
        return (0,_Applications_XAMPP_xamppfiles_htdocs_taro_naixue_test_node_modules_babel_runtime_helpers_esm_regenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().clearStorage();
            case 1:
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error('异步清空存储失败', _t4);
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }));
      function clearAsync() {
        return _clearAsync.apply(this, arguments);
      }
      return clearAsync;
    }()
    /**
     * 获取所有 key
     */
    )
  }, {
    key: "getKeys",
    value: function getKeys() {
      try {
        var res = _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageInfoSync();
        return res.keys || [];
      } catch (error) {
        console.error('获取keys失败', error);
        return [];
      }
    }

    /**
     * 获取存储信息
     */
  }, {
    key: "getInfo",
    value: function getInfo() {
      try {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default().getStorageInfoSync();
      } catch (error) {
        console.error('获取存储信息失败', error);
        return null;
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (new Storage());

/***/ })

}]);
//# sourceMappingURL=common.js.map