(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["GeneralStore"] = factory();
	else
		root["GeneralStore"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _storeStoreSingletonJs = __webpack_require__(15);

  var _storeStoreSingletonJs2 = _interopRequireDefault(_storeStoreSingletonJs);

  var _storeStoreFactory = __webpack_require__(7);

  var _storeStoreFactory2 = _interopRequireDefault(_storeStoreFactory);

  var _dispatcherDispatcherInstanceJs = __webpack_require__(6);

  var _dispatcherDispatcherInstanceJs2 = _interopRequireDefault(_dispatcherDispatcherInstanceJs);

  var _mixinStoreDependencyMixinJs = __webpack_require__(10);

  var _mixinStoreDependencyMixinJs2 = _interopRequireDefault(_mixinStoreDependencyMixinJs);

  function define() {
    return new _storeStoreSingletonJs2['default']();
  }

  function defineFactory() {
    return new _storeStoreFactory2['default']({});
  }

  exports['default'] = {
    define: define,
    defineFactory: defineFactory,
    DispatcherInstance: _dispatcherDispatcherInstanceJs2['default'],
    StoreDependencyMixin: _mixinStoreDependencyMixinJs2['default']
  };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

  /* eslint max-len:0 */

  /**
   * BSD License
   *
   * For Flux software
   *
   * Copyright (c) 2014, Facebook, Inc. All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without modification,
   * are permitted provided that the following conditions are met:
   *
   *  * Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   *
   *  * Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the
   *    documentation and/or other materials provided with the distribution.
   *
   *  * Neither the name Facebook nor the names of its contributors may be used to
   *    endorse or promote products derived from this software without specific
   *    prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
   * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
   * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
   * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
   * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * 
   */

  'use strict';

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = invariant;

  function invariant(condition, format, a, b, c, d, e, f) {
    if (true) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error = undefined;
      if (true) {
        (function () {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
        })();
      } else {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      }
      throw error;
    }
  }

  module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.dependencies = dependencies;
  exports.handlers = handlers;
  exports.queue = queue;
  exports.stores = stores;
  exports.storeFields = storeFields;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _eventEventHandlerJs = __webpack_require__(5);

  var _eventEventHandlerJs2 = _interopRequireDefault(_eventEventHandlerJs);

  var _storeStoreJs = __webpack_require__(3);

  var _storeStoreJs2 = _interopRequireDefault(_storeStoreJs);

  var DEPENDENCIES_KEY = '__StoreDependencyMixin-dependencies';
  var HANDLERS_KEY = '__StoreDependencyMixin-eventHandlers';
  var QUEUE_KEY = '__StoreDependencyMixin-queue';
  var STORES_KEY = '__StoreDependencyMixin-stores';
  var STORE_FIELDS_KEY = '__StoreDependencyMixin-storeFields';

  function getKey(key, identity, component) {
    if (!component.hasOwnProperty(key)) {
      component[key] = identity;
    }
    return component[key];
  }

  function dependencies(component) {
    return getKey(DEPENDENCIES_KEY, {}, component);
  }

  function handlers(component) {
    return getKey(HANDLERS_KEY, [], component);
  }

  function queue(component) {
    return getKey(QUEUE_KEY, {}, component);
  }

  function stores(component) {
    return getKey(STORES_KEY, [], component);
  }

  function storeFields(component) {
    return getKey(STORE_FIELDS_KEY, {}, component);
  }

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /* eslint no-console:0 */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _dispatcherDispatcherInterfaceJs = __webpack_require__(4);

  var _eventEventJs = __webpack_require__(9);

  var _eventEventJs2 = _interopRequireDefault(_eventEventJs);

  var _eventEventHandlerJs = __webpack_require__(5);

  var _eventEventHandlerJs2 = _interopRequireDefault(_eventEventHandlerJs);

  var _invariantJs = __webpack_require__(1);

  var _invariantJs2 = _interopRequireDefault(_invariantJs);

  var _uniqueidUniqueIDJs = __webpack_require__(8);

  var _uniqueidUniqueIDJs2 = _interopRequireDefault(_uniqueidUniqueIDJs);

  var HINT_LINK = 'Learn more about using the Store API:' + ' https://github.com/HubSpot/general-store#using-the-store-api';

  function getNull() {
    return null;
  }

  var Store = (function () {
    function Store(_ref) {
      var dispatcher = _ref.dispatcher;
      var factory = _ref.factory;
      var getter = _ref.getter;
      var initialState = _ref.initialState;
      var responses = _ref.responses;

      _classCallCheck(this, Store);

      this._dispatcher = dispatcher;
      this._factory = factory;
      this._getter = getter;
      this._state = initialState;
      this._responses = responses;
      this._event = new _eventEventJs2['default']();
      this._uid = (0, _uniqueidUniqueIDJs2['default'])();

      this._dispatchToken = this._dispatcher.register(this._handleDispatch.bind(this));
    }

    /**
     * Subscribe to changes on this store.
     *
     * @param  callback  will run every time the store responds to a dispatcher
     * @return this
     */

    _createClass(Store, [{
      key: 'addOnChange',
      value: function addOnChange(callback) {
        (0, _invariantJs2['default'])(typeof callback === 'function', 'Store.addOnChange: expected callback to be a function' + ' but got "%s" instead. %s', callback, HINT_LINK);
        return this._event.addHandler(callback);
      }

      /**
       * Returns the store's referenced value
       *
       * @param  ...  accepts any number of params
       * @return any
       */
    }, {
      key: 'get',
      value: function get() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this._getter.apply(this, [this._state].concat(args));
      }

      /**
       * Exposes the store's dispatcher instance.
       *
       * @return Dispatcher
       */
    }, {
      key: 'getDispatcher',
      value: function getDispatcher() {
        return this._dispatcher;
      }

      /**
       * Exposes the token assigned to the store by the dispatcher
       *
       * @return number
       */
    }, {
      key: 'getDispatchToken',
      value: function getDispatchToken() {
        return this._dispatchToken;
      }
    }, {
      key: 'getFactory',
      value: function getFactory() {
        return this._factory;
      }
    }, {
      key: 'getID',
      value: function getID() {
        return this._uid;
      }

      /**
       * @protected
       * Responds to incoming messages from the Dispatcher
       */
    }, {
      key: '_handleDispatch',
      value: function _handleDispatch(payload) {
        if (true) {
          (0, _invariantJs2['default'])((0, _dispatcherDispatcherInterfaceJs.isPayload)(payload), 'Store: expected dispatched payload to be an object with a' + ' property "actionType" containing a string and an optional property' + ' "data" containing any value but got "%s" instead. Learn more about' + ' the dispatcher interface:' + ' https://github.com/HubSpot/general-store#dispatcher-interface');
        }
        if (!this._responses.hasOwnProperty(payload.actionType)) {
          return;
        }
        this._state = this._responses[payload.actionType](this._state, payload.data, payload.actionType, payload);
        this.triggerChange();
      }

      /**
       * Destroys this instance of the store.
       * Dispatch callback is unregistered. Subscriptions are removed.
       */
    }, {
      key: 'remove',
      value: function remove() {
        this._dispatcher.unregister(this.getDispatchToken());
        this._event.remove();
        this._getter = getNull;
        this._responses = {};
      }

      /**
       * Runs all of the store's subscription callbacks
       *
       * @return this
       */
    }, {
      key: 'triggerChange',
      value: function triggerChange() {
        if (true) {
          if (!this._dispatcher.isDispatching()) {
            console.warn('Store: you called store.triggerChange() outside of a' + ' dispatch loop. Send an action trough the dispatcher to' + ' avoid potentailly confusing behavior.');
          }
        }
        this._event.runHandlers();
        return this;
      }
    }]);

    return Store;
  })();

  exports['default'] = Store;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.isDispatcher = isDispatcher;
  exports.isPayload = isPayload;

  function isDispatcher(dispatcher) {
    return typeof dispatcher === 'object' && typeof dispatcher.register === 'function' && typeof dispatcher.unregister === 'function';
  }

  function isPayload(payload) {
    return payload !== null && typeof payload === 'object' && typeof payload.actionType === 'string';
  }

/***/ },
/* 5 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var EventHandler = (function () {
    function EventHandler(instance, key) {
      _classCallCheck(this, EventHandler);

      this._key = key;
      this._instance = instance;
    }

    _createClass(EventHandler, [{
      key: 'remove',
      value: function remove() {
        if (this._instance === null || this._instance === undefined) {
          return;
        }
        this._instance.removeHandler(this._key);
        this._instance = null;
      }
    }]);

    return EventHandler;
  })();

  exports['default'] = EventHandler;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * I'm not sure if it's possible to express the runtime enforcement
   * of a dispatcher instance, so I'll use weak mode for now.
   * 
   **/

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _DispatcherInterfaceJs = __webpack_require__(4);

  var _invariantJs = __webpack_require__(1);

  var _invariantJs2 = _interopRequireDefault(_invariantJs);

  var instance = null;

  exports['default'] = {
    get: function get() {
      return instance;
    },

    set: function set(dispatcher) {
      (0, _invariantJs2['default'])((0, _DispatcherInterfaceJs.isDispatcher)(dispatcher), 'DispatcherInstance.set: Expected dispatcher to be an object' + ' with a register method, and an unregister method but got "%s".' + ' Learn more about the dispatcher interface:' + ' https://github.com/HubSpot/general-store#dispatcher-interface', dispatcher);
      instance = dispatcher;
    }
  };
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _dispatcherDispatcherInstance = __webpack_require__(6);

  var _dispatcherDispatcherInstance2 = _interopRequireDefault(_dispatcherDispatcherInstance);

  var _dispatcherDispatcherInterfaceJs = __webpack_require__(4);

  var _invariant = __webpack_require__(1);

  var _invariant2 = _interopRequireDefault(_invariant);

  var _Store = __webpack_require__(3);

  var _Store2 = _interopRequireDefault(_Store);

  var HINT_LINK = 'Learn more about defining stores:' + ' https://github.com/HubSpot/general-store#create-a-store';

  function enforceResponse(existingResponses, actionType, response) {
    (0, _invariant2['default'])(typeof actionType === 'string', 'StoreFactory.defineResponses: expected actionType to be a string' + ' but got "%s" instead. %s', actionType, HINT_LINK);
    (0, _invariant2['default'])(!existingResponses.hasOwnProperty(actionType), 'StoreFactory.defineResponses: conflicting resposes for actionType' + ' "%s". Only one response can be defined per actionType per Store. %s', actionType, HINT_LINK);
    (0, _invariant2['default'])(typeof response === 'function', 'StoreFactory.defineResponses: expected response to be a function' + ' but got "%s" instead. %s', response);
  }

  function defaultGetInitialState() {
    return undefined;
  }

  function defaultGetter(state) {
    return state;
  }

  var StoreFactory = (function () {
    function StoreFactory(_ref) {
      var getter = _ref.getter;
      var getInitialState = _ref.getInitialState;
      var responses = _ref.responses;

      _classCallCheck(this, StoreFactory);

      this._definition = {
        getter: getter || defaultGetter,
        getInitialState: getInitialState || defaultGetInitialState,
        responses: responses || {}
      };
    }

    _createClass(StoreFactory, [{
      key: 'defineGet',
      value: function defineGet(getter) {
        (0, _invariant2['default'])(this._definition.getter === defaultGetter, 'StoreFactory.defineGet: a getter is already defined.');
        return new StoreFactory(_extends({}, this._definition, {
          getter: getter
        }));
      }
    }, {
      key: 'defineGetInitialState',
      value: function defineGetInitialState(getInitialState) {
        (0, _invariant2['default'])(typeof getInitialState === 'function', 'StoreFactory.defineGetInitialState: getInitialState must be a function.');
        (0, _invariant2['default'])(this._definition.getInitialState === defaultGetInitialState, 'StoreFactory.defineGetInitialState: getInitialState is already defined.');
        return new StoreFactory(_extends({}, this._definition, {
          getInitialState: getInitialState
        }));
      }
    }, {
      key: 'defineResponses',
      value: function defineResponses(newResponses) {
        var responses = this._definition.responses;

        (0, _invariant2['default'])(newResponses && typeof newResponses === 'object', 'StoreFactory.defineResponses: newResponses must be an object');
        Object.keys(newResponses).forEach(function (actionType) {
          return enforceResponse(responses, actionType, newResponses[actionType]);
        });
        return new StoreFactory(_extends({}, this._definition, {
          responses: _extends({}, responses, newResponses)
        }));
      }
    }, {
      key: 'defineResponseTo',
      value: function defineResponseTo(actionTypes, response) {
        return this.defineResponses([].concat(actionTypes).reduce(function (responses, actionType) {
          responses[actionType] = response;
          return responses;
        }, {}));
      }
    }, {
      key: 'getDefinition',
      value: function getDefinition() {
        return this._definition;
      }
    }, {
      key: 'register',
      value: function register(dispatcher) {
        dispatcher = dispatcher || _dispatcherDispatcherInstance2['default'].get();
        (0, _invariant2['default'])(dispatcher !== null && typeof dispatcher === 'object', 'StoreFactory.register: you haven\'t provided a dispatcher instance.' + ' You can pass an instance to' + ' GeneralStore.define().register(dispatcher) or use' + ' GeneralStore.DispatcherInstance.set(dispatcher) to set a global' + ' instance.' + ' https://github.com/HubSpot/general-store#default-dispatcher-instance');
        (0, _invariant2['default'])((0, _dispatcherDispatcherInterfaceJs.isDispatcher)(dispatcher), 'StoreFactory.register: Expected dispatcher to be an object' + ' with a register method, and an unregister method but got "%s".' + ' Learn more about the dispatcher interface:' + ' https://github.com/HubSpot/general-store#dispatcher-interface', dispatcher);
        var _definition = this._definition;
        var getter = _definition.getter;
        var getInitialState = _definition.getInitialState;
        var responses = _definition.responses;

        return new _Store2['default']({
          dispatcher: dispatcher,
          factory: this,
          getter: getter,
          initialState: getInitialState(),
          responses: responses
        });
      }
    }]);

    return StoreFactory;
  })();

  exports['default'] = StoreFactory;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = uid;

  var PREFIX = 'uid_';

  var nextUid = 0;

  function uid() {
    return PREFIX + nextUid++;
  }

  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _EventHandlerJs = __webpack_require__(5);

  var _EventHandlerJs2 = _interopRequireDefault(_EventHandlerJs);

  var _uniqueidUniqueIDJs = __webpack_require__(8);

  var _uniqueidUniqueIDJs2 = _interopRequireDefault(_uniqueidUniqueIDJs);

  var Event = (function () {
    function Event() {
      _classCallCheck(this, Event);

      this._handlers = {};
    }

    /**
     * Add a subscription to this event
     *
     * @param  callback  run when the event is triggered.
     * @return this
     */

    _createClass(Event, [{
      key: 'addHandler',
      value: function addHandler(callback) {
        var key = (0, _uniqueidUniqueIDJs2['default'])();
        this._handlers[key] = callback;
        return new _EventHandlerJs2['default'](this, key);
      }

      /**
       * Destroys this event. Removes all handlers.
       *
       * @return this
       */
    }, {
      key: 'remove',
      value: function remove() {
        this._handlers = {};
        return this;
      }

      /**
       * Removes a subscription by key.
       *
       * @param  key   id of the subscription to remove
       * @return this
       */
    }, {
      key: 'removeHandler',
      value: function removeHandler(key) {
        delete this._handlers[key];
        return this;
      }

      /**
       * @protected
       * Run a handler by key if it exists
       *
       * @param  key  id of the handler to run
       */
    }, {
      key: '_runHandler',
      value: function _runHandler(key) {
        if (this._handlers.hasOwnProperty(key)) {
          this._handlers[key].call();
        }
      }

      /**
       * Run all subscribed handlers.
       *
       * @return this
       */
    }, {
      key: 'runHandlers',
      value: function runHandlers() {
        Object.keys(this._handlers).forEach(this._runHandler.bind(this));
        return this;
      }

      /**
       * Convenience method for running multiple events.
       *
       * @param  events  a list of events to run.
       */
    }], [{
      key: 'runMultiple',
      value: function runMultiple(events) {
        events.forEach(function (evt) {
          return evt.runHandlers();
        });
      }
    }]);

    return Event;
  })();

  exports['default'] = Event;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = StoreDependencyMixin;

  var _StoreDependencyMixinFieldsJs = __webpack_require__(2);

  var _StoreDependencyMixinHandlersJs = __webpack_require__(11);

  var _StoreDependencyMixinInitializeJs = __webpack_require__(12);

  var _StoreDependencyMixinStateJs = __webpack_require__(13);

  var _StoreDependencyMixinTransitionsJs = __webpack_require__(14);

  function getPropTypes(dependencyMap) {
    return Object.keys(dependencyMap).reduce(function (types, dependencyName) {
      var propTypes = dependencyMap[dependencyName].propTypes;

      if (propTypes && typeof propTypes === 'object') {
        Object.keys(propTypes).forEach(function (propName) {
          types[propName] = propTypes[propName];
        });
      }
      return types;
    }, {});
  }

  function StoreDependencyMixin(dependencyMap) {
    var isFirstMixin = false;

    var mixin = {
      propTypes: {},

      componentWillMount: function componentWillMount() {
        if (!isFirstMixin) {
          return;
        }
        (0, _StoreDependencyMixinHandlersJs.setupHandlers)(this);
      },

      componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        if (!isFirstMixin || !(0, _StoreDependencyMixinTransitionsJs.hasPropsChanged)(this.props, nextProps)) {
          return;
        }
        this.setState((0, _StoreDependencyMixinStateJs.getDependencyState)(this, nextProps, this.state, null));
      },

      componentWillUnmount: function componentWillUnmount() {
        if (!isFirstMixin) {
          return;
        }
        (0, _StoreDependencyMixinHandlersJs.cleanupHandlers)(this);
      },

      componentDidUpdate: function componentDidUpdate(oldProps, oldState) {
        if (!isFirstMixin || !(0, _StoreDependencyMixinTransitionsJs.hasStateChanged)((0, _StoreDependencyMixinFieldsJs.dependencies)(this), oldState, this.state)) {
          return;
        }
        this.setState((0, _StoreDependencyMixinStateJs.getDependencyState)(this, this.props, this.state, null));
      },

      getInitialState: function getInitialState() {
        isFirstMixin = !(0, _StoreDependencyMixinFieldsJs.stores)(this).length;
        (0, _StoreDependencyMixinInitializeJs.applyDependencies)(this, dependencyMap);
        return (0, _StoreDependencyMixinStateJs.getDependencyState)(this, this.props, this.state, Object.keys(dependencyMap));
      }
    };

    if (true) {
      mixin.propTypes = getPropTypes(dependencyMap);
    }

    return mixin;
  }

  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.cleanupHandlers = cleanupHandlers;
  exports.setupHandlers = setupHandlers;

  var _StoreDependencyMixinFieldsJs = __webpack_require__(2);

  function flushQueue(component) {
    var componentDependencies = (0, _StoreDependencyMixinFieldsJs.dependencies)(component);
    var componentQueue = (0, _StoreDependencyMixinFieldsJs.queue)(component);
    var stateUpdate = {};
    Object.keys(componentQueue).forEach(function (field) {
      var fieldDef = componentDependencies[field];
      stateUpdate[field] = fieldDef.deref(component.props, component.state, fieldDef.stores);
      delete componentQueue[field];
    });
    component.setState(stateUpdate);
  }

  function waitForOtherStores(component, currentStoreId) {
    var componentStores = (0, _StoreDependencyMixinFieldsJs.stores)(component);
    componentStores.forEach(function (store) {
      var dispatcher = store.getDispatcher();
      if (store.getID() === currentStoreId || !dispatcher.isDispatching()) {
        return;
      }
      dispatcher.waitFor([store.getDispatchToken()]);
    });
  }

  function handleStoreChange(component, storeId) {
    var componentQueue = (0, _StoreDependencyMixinFieldsJs.queue)(component);
    var queueWasEmpty = Object.keys(componentQueue).length === 0;
    (0, _StoreDependencyMixinFieldsJs.storeFields)(component)[storeId].forEach(function (field) {
      if (componentQueue.hasOwnProperty(field)) {
        return;
      }
      componentQueue[field] = true;
    });
    // if there we already fields in the queue, this isn't the first store to
    // respond to the action so bail out
    if (!queueWasEmpty) {
      return;
    }
    // waitFor all other stores this component depends on to ensure we dont
    // run an extra setState if another store responds to the same action
    waitForOtherStores(component, storeId);
    flushQueue(component);
  }

  function cleanupHandlers(component) {
    var componentHandlers = (0, _StoreDependencyMixinFieldsJs.handlers)(component);
    while (componentHandlers.length) {
      componentHandlers.pop().remove();
    }
  }

  function setupHandlers(component) {
    var componentHandlers = (0, _StoreDependencyMixinFieldsJs.handlers)(component);
    var componentStores = (0, _StoreDependencyMixinFieldsJs.stores)(component);
    componentStores.forEach(function (store) {
      componentHandlers.push(store.addOnChange(handleStoreChange.bind(null, component, store.getID())));
    });
  }

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.applyDependencies = applyDependencies;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _invariantJs = __webpack_require__(1);

  var _invariantJs2 = _interopRequireDefault(_invariantJs);

  var _StoreDependencyMixinFieldsJs = __webpack_require__(2);

  var _storeStoreJs = __webpack_require__(3);

  var _storeStoreJs2 = _interopRequireDefault(_storeStoreJs);

  function defaultDeref(props, state, storeInstances) {
    return storeInstances[0].get();
  }

  function applyDependencies(component, dependencyMap) {
    var componentDependencies = (0, _StoreDependencyMixinFieldsJs.dependencies)(component);
    var componentStoreFields = (0, _StoreDependencyMixinFieldsJs.storeFields)(component);
    var componentStores = (0, _StoreDependencyMixinFieldsJs.stores)(component);
    Object.keys(dependencyMap).forEach(function (field) {
      var dependency = dependencyMap[field];
      var dependencyStores = undefined;
      if (dependency instanceof _storeStoreJs2['default']) {
        dependencyStores = [dependency];
        (0, _invariantJs2['default'])(!componentDependencies.hasOwnProperty(field), 'StoreDependencyMixin: field "%s" is already defined', field);
        componentDependencies[field] = {
          deref: defaultDeref,
          stores: dependencyStores
        };
      } else {
        dependencyStores = dependency.stores;
        componentDependencies[field] = dependency;
      }
      // update the store-to-field map
      dependencyStores.forEach(function (store) {
        var storeId = store.getID();
        if (!componentStoreFields.hasOwnProperty(storeId)) {
          componentStoreFields[storeId] = [];
          // if we haven't seen this store bind a change handler
          componentStores.push(store);
        }
        componentStoreFields[storeId].push(field);
      });
    });
  }

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.getDependencyState = getDependencyState;

  var _StoreDependencyMixinFieldsJs = __webpack_require__(2);

  function getDependencyState(component, props, state, fieldNames) {
    var componentDependencies = (0, _StoreDependencyMixinFieldsJs.dependencies)(component);
    fieldNames = fieldNames || Object.keys(componentDependencies);
    var dependencyState = {};
    fieldNames.forEach(function (field) {
      var _componentDependencies$field = componentDependencies[field];
      var deref = _componentDependencies$field.deref;
      var stores = _componentDependencies$field.stores;

      dependencyState[field] = deref(props, state, stores);
    });
    return dependencyState;
  }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.hasPropsChanged = hasPropsChanged;
  exports.hasStateChanged = hasStateChanged;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _immutableIs = __webpack_require__(16);

  var _immutableIs2 = _interopRequireDefault(_immutableIs);

  function compareKey(key, objA, objB) {
    return (0, _immutableIs2['default'])(objA[key], objB[key]);
  }

  function shallowEqual(is, objA, objB) {
    if (objA === objB) {
      return true;
    }
    var key = undefined;
    // Test for A's keys different from B.
    for (key in objA) {
      if (objA.hasOwnProperty(key) && (!objB.hasOwnProperty(key) || !is(key, objA, objB))) {
        return false;
      }
    }
    // Test for B's keys missing from A.
    for (key in objB) {
      if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  function hasPropsChanged(oldProps, nextProps) {
    return !shallowEqual(compareKey, oldProps, nextProps);
  }

  function hasStateChanged(stores, oldState, nextState) {
    return !shallowEqual(function (key, objA, objB) {
      return stores.hasOwnProperty(key) || // if the value is a store, ignore it
      (0, _immutableIs2['default'])(objA[key], objB[key]);
    }, oldState, nextState);
  }

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _invariant = __webpack_require__(1);

  var _invariant2 = _interopRequireDefault(_invariant);

  var _Store = __webpack_require__(3);

  var _Store2 = _interopRequireDefault(_Store);

  var _StoreFactory = __webpack_require__(7);

  var _StoreFactory2 = _interopRequireDefault(_StoreFactory);

  var HINT_LINK = 'Learn more about defining stores:' + ' https://github.com/HubSpot/general-store#create-a-store';

  function dropFirstArg(func) {
    return function (head) {
      for (var _len = arguments.length, tail = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        tail[_key - 1] = arguments[_key];
      }

      func.apply(undefined, tail);
    };
  }

  var StoreSingleton = (function () {
    function StoreSingleton() {
      var _this = this;

      _classCallCheck(this, StoreSingleton);

      this._facade = null;
      this._factory = new _StoreFactory2['default']({
        getter: function getter(state) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          if (typeof _this._getter === 'function') {
            return _this._getter.apply(_this, args);
          }
        }
      });
      this._getter = null;
    }

    _createClass(StoreSingleton, [{
      key: 'defineGet',
      value: function defineGet(getter) {
        (0, _invariant2['default'])(!this.isRegistered(), 'StoreSingleton.defineGet: this store definition cannot be modified' + ' because is has already been registered with a dispatcher. %s', HINT_LINK);
        (0, _invariant2['default'])(typeof getter === 'function', 'StoreSingleton.defineGet: expected getter to be a function but got' + ' "%s" instead. %s', getter, HINT_LINK);
        this._getter = getter;
        return this;
      }
    }, {
      key: 'defineResponseTo',
      value: function defineResponseTo(actionTypes, response) {
        (0, _invariant2['default'])(!this.isRegistered(), 'StoreSingleton.defineResponseTo: this store definition cannot be' + ' modified because is has already been registered with a dispatcher. %s', HINT_LINK);
        this._factory = this._factory.defineResponseTo(actionTypes, dropFirstArg(response));
        return this;
      }
    }, {
      key: 'isRegistered',
      value: function isRegistered() {
        return this._facade instanceof _Store2['default'];
      }
    }, {
      key: 'register',
      value: function register(dispatcher) {
        (0, _invariant2['default'])(typeof this._getter === 'function', 'StoreSingleton.register: a store cannot be registered without a' + ' getter. Use GeneralStore.define().defineGet(getter) to define a' + ' getter. %s', HINT_LINK);
        if (!this._facade) {
          this._facade = this._factory.register(dispatcher);
        }
        return this._facade;
      }
    }]);

    return StoreSingleton;
  })();

  exports['default'] = StoreSingleton;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

  /**
   *  Copyright (c) 2014-2015, Facebook, Inc.
   *  All rights reserved.
   *
   *  This source code is licensed under the BSD-style license found in the
   *  LICENSE file in the root directory of this source tree. An additional grant
   *  of patent rights can be found in the PATENTS file in the same directory.
   */

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = is;

  function is(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' && typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' && typeof valueB.equals === 'function' && valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  module.exports = exports['default'];


/***/ }
/******/ ])
});
;