/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./resources/scss/style.scss":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./resources/scss/style.scss ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = {};

function modulesToDom(moduleId, list, options) {
  for (var i = 0; i < list.length; i++) {
    var part = {
      css: list[i][1],
      media: list[i][2],
      sourceMap: list[i][3]
    };

    if (stylesInDom[moduleId][i]) {
      stylesInDom[moduleId][i](part);
    } else {
      stylesInDom[moduleId].push(addStyle(part, options));
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (moduleId, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  moduleId = options.base ? moduleId + options.base : moduleId;
  list = list || [];

  if (!stylesInDom[moduleId]) {
    stylesInDom[moduleId] = [];
  }

  modulesToDom(moduleId, list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    if (!stylesInDom[moduleId]) {
      stylesInDom[moduleId] = [];
    }

    modulesToDom(moduleId, newList, options);

    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {
      stylesInDom[moduleId][j]();
    }

    stylesInDom[moduleId].length = newList.length;

    if (stylesInDom[moduleId].length === 0) {
      delete stylesInDom[moduleId];
    }
  };
};

/***/ }),

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

let ready = (fn) => {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

let submitForm = (form) => {
	let data = new FormData(form);
	let request = new XMLHttpRequest();
	request.open('POST', '/my/url', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(data);
}

let closepopup = (popup) => {
	popup.querySelector('.popup__content').innerHTML = "";
	popup.classList.remove('popup--active');
}

let popup = (link, formid) => {
	let bc = link.getBoundingClientRect();
	let fakecontrol = link.parentNode.cloneNode(true);

	let popup = document.getElementById('popup');
	while (popup.querySelector('.popup__content').firstChild)
		popup.querySelector('.popup__content').removeChild(popup.querySelector('.popup__content').firstChild);

	popup.classList.toggle('popup--editfield');
	popup.querySelector('.popup__content').appendChild(fakecontrol);

	// Styling.
	popup.style.left = bc.x + bc.width + 'px';
	popup.classList.add('popup--active');
	popup.style.top = (bc.y - 10) + 'px';

	/* Set behaviors */
	let form = document.getElementById(formid);

	// Popup buttons.
	let save_btn = popup.querySelector('.button--save');
	let cancel_btn = popup.querySelector('.button--cancel');

	save_btn.addEventListener('click', (e, i) => {
		let field_ids = popup.querySelectorAll('.popup__content .form__input');
		Array.prototype.forEach.call(field_ids, (el, i) => {
			let field_id = '#' + el.id;
			let field_value = popup.querySelector(field_id).value;
			form.querySelector(field_id).value = field_value;
			if (form.querySelector(field_id).parentNode.querySelector('.form__text'))
				form.querySelector(field_id).parentNode.querySelector('.form__text').innerHTML = field_value;
		});

		closepopup(popup);
		// submitForm(form);
	});

	cancel_btn.addEventListener('click', (e, i) => {
		closepopup(popup);
	});

}

let editfield = (field) => {
	// openPopup();
}


let activateTab = (e) => {
	// TODO: Add an effect transition here. Let's make this pretty. 😉

	if (e.classList.contains('horizontal-menu__link--active'))
		return;

	let hm = e.parentNode.parentNode;

	// Deactivate active items.
	let activeitems = hm.querySelectorAll('.horizontal-menu__link--active');
	Array.prototype.forEach.call(activeitems, (el, i) => {
		el.parentNode.classList.remove('horizontal-menu__item--active');
		el.classList.remove('horizontal-menu__link--active');
	});

	// Activate clicked item and its parent.
	e.classList.add('horizontal-menu__link--active');
	e.parentNode.classList.add('horizontal-menu__item--active');

	// Make infocards visible.
	let eid = e.parentNode.id;
	let infocards = hm.nextElementSibling.querySelectorAll('.infocard');
	Array.prototype.forEach.call(infocards, (el, i) => {
		if (!el.classList.contains(eid)) {
			el.classList.remove('infocard--active');
		} else {
			el.classList.add('infocard--active');
		}
	});
}

ready(() => {
	// Resizing input inline text controls.
	let elements = document.querySelectorAll('.form-row--inline input.form__input[type="text"]');
	Array.prototype.forEach.call(elements, function (el, i) {
		el.parentNode.querySelector('.form__text').innerHTML = el.value;
	});

	// Form edit button.
	let editlinks = document.querySelectorAll('.infocard__link');
	Array.prototype.forEach.call(editlinks, (el, i) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			el.parentNode.classList.toggle('form--noedit');
		})
	});

	// Form cancel button.
	let cancelbuttons = document.querySelectorAll('.form .form__actions .form__cancel');
	Array.prototype.forEach.call(cancelbuttons, (el, i) => {
		el.addEventListener('click', (e) => {
			el.parentNode.parentNode.classList.toggle('form--noedit');
		})
	})

	// Form save button.
	let savebuttons = document.querySelectorAll('.form .form__actions .form__save');
	Array.prototype.forEach.call(savebuttons, (el, i) => {
		el.addEventListener('click', (e) => {
			let form = el.parentNode.parentNode;
			el.parentNode.parentNode.classList.toggle('form--noedit');
			submitForm(form)
		})
	})

	// Field edit links.
	let forms = document.querySelectorAll('.form');
	Array.prototype.forEach.call(forms, (el, i) => {
		let form = el;
		let editlinks = el.querySelectorAll('.form-control__edit');
		Array.prototype.forEach.call(editlinks, (el, i) => {
			let field__value = el.parentNode.querySelector('.form__input').value;
			el.parentNode.querySelector('.form__text').innerHTML = field__value;

			el.addEventListener('click', (e) => {
				popup(el, form.id);
			});
		})
	});

	// Horizontal menu behavior.
	let hormenus = document.querySelectorAll('.horizontal-menu');
	Array.prototype.forEach.call(hormenus, (el, i) => {
		let links = el.querySelectorAll('.horizontal-menu__link');
		Array.prototype.forEach.call(links, (el, i) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				activateTab(e.target);
			});
		})
	});
})

/***/ }),

/***/ "./resources/scss/style.scss":
/*!***********************************!*\
  !*** ./resources/scss/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./style.scss */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./resources/scss/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(module.i, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/scss/style.scss */ "./resources/scss/style.scss");
/* harmony import */ var _resources_scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_resources_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resources_js_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/js/script */ "./resources/js/script.js");
/* harmony import */ var _resources_js_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_resources_js_script__WEBPACK_IMPORTED_MODULE_1__);




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9zdHlsZS5zY3NzPzliNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDN09BO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQyxDOzs7Ozs7Ozs7OztBQ2hLRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLCtVQUF5Szs7QUFFM007O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixRQUFTOztBQUUxQjs7OztBQUlBLDBCOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNOIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBsaXN0W2ldWzFdLFxuICAgICAgbWVkaWE6IGxpc3RbaV1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGxpc3RbaV1bM11cbiAgICB9O1xuXG4gICAgaWYgKHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXSkge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdW2ldKHBhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ucHVzaChhZGRTdHlsZShwYXJ0LCBvcHRpb25zKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbW9kdWxlSWQgPSBvcHRpb25zLmJhc2UgPyBtb2R1bGVJZCArIG9wdGlvbnMuYmFzZSA6IG1vZHVsZUlkO1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcblxuICBpZiAoIXN0eWxlc0luRG9tW21vZHVsZUlkXSkge1xuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICB9XG5cbiAgbW9kdWxlc1RvRG9tKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXSA9IFtdO1xuICAgIH1cblxuICAgIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBqID0gbmV3TGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtqXSgpO1xuICAgIH1cblxuICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXS5sZW5ndGggPSBuZXdMaXN0Lmxlbmd0aDtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgc3R5bGVzSW5Eb21bbW9kdWxlSWRdO1xuICAgIH1cbiAgfTtcbn07IiwibGV0IHJlYWR5ID0gKGZuKSA9PiB7XHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2xvYWRpbmcnKSB7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHN1Ym1pdEZvcm0gPSAoZm9ybSkgPT4ge1xyXG5cdGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xyXG5cdGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0cmVxdWVzdC5vcGVuKCdQT1NUJywgJy9teS91cmwnLCB0cnVlKTtcclxuXHRyZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnKTtcclxuXHRyZXF1ZXN0LnNlbmQoZGF0YSk7XHJcbn1cclxuXHJcbmxldCBjbG9zZXBvcHVwID0gKHBvcHVwKSA9PiB7XHJcblx0cG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250ZW50JykuaW5uZXJIVE1MID0gXCJcIjtcclxuXHRwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cC0tYWN0aXZlJyk7XHJcbn1cclxuXHJcbmxldCBwb3B1cCA9IChsaW5rLCBmb3JtaWQpID0+IHtcclxuXHRsZXQgYmMgPSBsaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdGxldCBmYWtlY29udHJvbCA9IGxpbmsucGFyZW50Tm9kZS5jbG9uZU5vZGUodHJ1ZSk7XHJcblxyXG5cdGxldCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cCcpO1xyXG5cdHdoaWxlIChwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbnRlbnQnKS5maXJzdENoaWxkKVxyXG5cdFx0cG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250ZW50JykucmVtb3ZlQ2hpbGQocG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250ZW50JykuZmlyc3RDaGlsZCk7XHJcblxyXG5cdHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3BvcHVwLS1lZGl0ZmllbGQnKTtcclxuXHRwb3B1cC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2NvbnRlbnQnKS5hcHBlbmRDaGlsZChmYWtlY29udHJvbCk7XHJcblxyXG5cdC8vIFN0eWxpbmcuXHJcblx0cG9wdXAuc3R5bGUubGVmdCA9IGJjLnggKyBiYy53aWR0aCArICdweCc7XHJcblx0cG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXAtLWFjdGl2ZScpO1xyXG5cdHBvcHVwLnN0eWxlLnRvcCA9IChiYy55IC0gMTApICsgJ3B4JztcclxuXHJcblx0LyogU2V0IGJlaGF2aW9ycyAqL1xyXG5cdGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybWlkKTtcclxuXHJcblx0Ly8gUG9wdXAgYnV0dG9ucy5cclxuXHRsZXQgc2F2ZV9idG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLS1zYXZlJyk7XHJcblx0bGV0IGNhbmNlbF9idG4gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLS1jYW5jZWwnKTtcclxuXHJcblx0c2F2ZV9idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSwgaSkgPT4ge1xyXG5cdFx0bGV0IGZpZWxkX2lkcyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9fY29udGVudCAuZm9ybV9faW5wdXQnKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZmllbGRfaWRzLCAoZWwsIGkpID0+IHtcclxuXHRcdFx0bGV0IGZpZWxkX2lkID0gJyMnICsgZWwuaWQ7XHJcblx0XHRcdGxldCBmaWVsZF92YWx1ZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoZmllbGRfaWQpLnZhbHVlO1xyXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoZmllbGRfaWQpLnZhbHVlID0gZmllbGRfdmFsdWU7XHJcblx0XHRcdGlmIChmb3JtLnF1ZXJ5U2VsZWN0b3IoZmllbGRfaWQpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHQnKSlcclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoZmllbGRfaWQpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHQnKS5pbm5lckhUTUwgPSBmaWVsZF92YWx1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGNsb3NlcG9wdXAocG9wdXApO1xyXG5cdFx0Ly8gc3VibWl0Rm9ybShmb3JtKTtcclxuXHR9KTtcclxuXHJcblx0Y2FuY2VsX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlLCBpKSA9PiB7XHJcblx0XHRjbG9zZXBvcHVwKHBvcHVwKTtcclxuXHR9KTtcclxuXHJcbn1cclxuXHJcbmxldCBlZGl0ZmllbGQgPSAoZmllbGQpID0+IHtcclxuXHQvLyBvcGVuUG9wdXAoKTtcclxufVxyXG5cclxuXHJcbmxldCBhY3RpdmF0ZVRhYiA9IChlKSA9PiB7XHJcblx0Ly8gVE9ETzogQWRkIGFuIGVmZmVjdCB0cmFuc2l0aW9uIGhlcmUuIExldCdzIG1ha2UgdGhpcyBwcmV0dHkuIPCfmIlcclxuXHJcblx0aWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdob3Jpem9udGFsLW1lbnVfX2xpbmstLWFjdGl2ZScpKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRsZXQgaG0gPSBlLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHJcblx0Ly8gRGVhY3RpdmF0ZSBhY3RpdmUgaXRlbXMuXHJcblx0bGV0IGFjdGl2ZWl0ZW1zID0gaG0ucXVlcnlTZWxlY3RvckFsbCgnLmhvcml6b250YWwtbWVudV9fbGluay0tYWN0aXZlJyk7XHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhY3RpdmVpdGVtcywgKGVsLCBpKSA9PiB7XHJcblx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwtbWVudV9faXRlbS0tYWN0aXZlJyk7XHJcblx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKCdob3Jpem9udGFsLW1lbnVfX2xpbmstLWFjdGl2ZScpO1xyXG5cdH0pO1xyXG5cclxuXHQvLyBBY3RpdmF0ZSBjbGlja2VkIGl0ZW0gYW5kIGl0cyBwYXJlbnQuXHJcblx0ZS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsLW1lbnVfX2xpbmstLWFjdGl2ZScpO1xyXG5cdGUucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdob3Jpem9udGFsLW1lbnVfX2l0ZW0tLWFjdGl2ZScpO1xyXG5cclxuXHQvLyBNYWtlIGluZm9jYXJkcyB2aXNpYmxlLlxyXG5cdGxldCBlaWQgPSBlLnBhcmVudE5vZGUuaWQ7XHJcblx0bGV0IGluZm9jYXJkcyA9IGhtLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yQWxsKCcuaW5mb2NhcmQnKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGluZm9jYXJkcywgKGVsLCBpKSA9PiB7XHJcblx0XHRpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhlaWQpKSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2luZm9jYXJkLS1hY3RpdmUnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2luZm9jYXJkLS1hY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5cclxucmVhZHkoKCkgPT4ge1xyXG5cdC8vIFJlc2l6aW5nIGlucHV0IGlubGluZSB0ZXh0IGNvbnRyb2xzLlxyXG5cdGxldCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtLXJvdy0taW5saW5lIGlucHV0LmZvcm1fX2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsLCBpKSB7XHJcblx0XHRlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX190ZXh0JykuaW5uZXJIVE1MID0gZWwudmFsdWU7XHJcblx0fSk7XHJcblxyXG5cdC8vIEZvcm0gZWRpdCBidXR0b24uXHJcblx0bGV0IGVkaXRsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvY2FyZF9fbGluaycpO1xyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWRpdGxpbmtzLCAoZWwsIGkpID0+IHtcclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0tLW5vZWRpdCcpO1xyXG5cdFx0fSlcclxuXHR9KTtcclxuXHJcblx0Ly8gRm9ybSBjYW5jZWwgYnV0dG9uLlxyXG5cdGxldCBjYW5jZWxidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0gLmZvcm1fX2FjdGlvbnMgLmZvcm1fX2NhbmNlbCcpO1xyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY2FuY2VsYnV0dG9ucywgKGVsLCBpKSA9PiB7XHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLS1ub2VkaXQnKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0Ly8gRm9ybSBzYXZlIGJ1dHRvbi5cclxuXHRsZXQgc2F2ZWJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybSAuZm9ybV9fYWN0aW9ucyAuZm9ybV9fc2F2ZScpO1xyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc2F2ZWJ1dHRvbnMsIChlbCwgaSkgPT4ge1xyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRsZXQgZm9ybSA9IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuXHRcdFx0ZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0tLW5vZWRpdCcpO1xyXG5cdFx0XHRzdWJtaXRGb3JtKGZvcm0pXHJcblx0XHR9KVxyXG5cdH0pXHJcblxyXG5cdC8vIEZpZWxkIGVkaXQgbGlua3MuXHJcblx0bGV0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0nKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm1zLCAoZWwsIGkpID0+IHtcclxuXHRcdGxldCBmb3JtID0gZWw7XHJcblx0XHRsZXQgZWRpdGxpbmtzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbF9fZWRpdCcpO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlZGl0bGlua3MsIChlbCwgaSkgPT4ge1xyXG5cdFx0XHRsZXQgZmllbGRfX3ZhbHVlID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQnKS52YWx1ZTtcclxuXHRcdFx0ZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dCcpLmlubmVySFRNTCA9IGZpZWxkX192YWx1ZTtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRwb3B1cChlbCwgZm9ybS5pZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHR9KTtcclxuXHJcblx0Ly8gSG9yaXpvbnRhbCBtZW51IGJlaGF2aW9yLlxyXG5cdGxldCBob3JtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Jpem9udGFsLW1lbnUnKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGhvcm1lbnVzLCAoZWwsIGkpID0+IHtcclxuXHRcdGxldCBsaW5rcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Jpem9udGFsLW1lbnVfX2xpbmsnKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGlua3MsIChlbCwgaSkgPT4ge1xyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGFjdGl2YXRlVGFiKGUudGFyZ2V0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KVxyXG5cdH0pO1xyXG59KSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuLi9yZXNvdXJjZXMvc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vcmVzb3VyY2VzL2pzL3NjcmlwdCc7XG4iXSwic291cmNlUm9vdCI6IiJ9