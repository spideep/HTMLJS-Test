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

let person = {
	firstname: 'Jessica',
	lastname: 'Parker',
	address: 'Newport Beach, CA',
	phonenumber: '(949) 325-68594',
	website: 'www.seller.com'
}

let ready = (fn) => {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

let submitForm = (form) => {
	/* TODO: Update info using AJAX.
	let data = new FormData(form);
	let request = new XMLHttpRequest();
	request.open('POST', '/my/url', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(data);
	*/

	// Update labels.
	// Alternative: could be filled with AJAX given data.
	let form__inputs = form.querySelectorAll('.form__input');
	Array.prototype.forEach.call(form__inputs, (e, i) => {
		let target_id = '#' + e.id + '-label';
		if (document.querySelector(target_id)) {
			document.querySelector(target_id).innerHTML = e.value;
		}
	})
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
			if (form.querySelector(field_id).parentNode.querySelector('.form__text')) {
				form.querySelector(field_id).parentNode.querySelector('.form__text').innerHTML = field_value;
			}
		});

		closepopup(popup);
		submitForm(form);
	});

	cancel_btn.addEventListener('click', (e, i) => {
		closepopup(popup);
	});

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

let prefill = (person) => {
	document.querySelector('#firstname-label').innerHTML = person.firstname;
	document.querySelector('#firstname').value = person.firstname;
	document.querySelector('#firstname').parentNode.querySelector('.form__text').innerHTML = person.firstname;

	document.querySelector('#lastname-label').innerHTML = person.lastname;
	document.querySelector('#lastname').value = person.lastname;
	document.querySelector('#lastname').parentNode.querySelector('.form__text').innerHTML = person.lastname;

	document.querySelector('#phonenumber-label').innerHTML = person.phonenumber;
	document.querySelector('#phonenumber').value = person.phonenumber;
	document.querySelector('#phonenumber').parentNode.querySelector('.form__text').innerHTML = person.phonenumber;

	document.querySelector('#citystate-zip-label').innerHTML = person.address;
	document.querySelector('#citystate-zip').value = person.address;
	document.querySelector('#citystate-zip').parentNode.querySelector('.form__text').innerHTML = person.address;

	document.querySelector('#website').value = person.website;
	document.querySelector('#website').parentNode.querySelector('.form__text').innerHTML = person.website;
}

ready(() => {

	prefill(person);

	// Form edit button.
	let editlinks = document.querySelectorAll('.infocard__link');
	Array.prototype.forEach.call(editlinks, (el, i) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			el.parentNode.classList.toggle('form--noedit');
		})
	});

	let forms = document.querySelectorAll('.form');
	Array.prototype.forEach.call(forms, (el, i) => {
		let form = el;

		// Field edit links.
		let editlinks = form.querySelectorAll('.form-control__edit');
		Array.prototype.forEach.call(editlinks, (el, i) => {
			let field__value = el.parentNode.querySelector('.form__input').value;
			el.parentNode.querySelector('.form__text').innerHTML = field__value;
			el.addEventListener('click', (e) => popup(el, form.id));
		});

		// Form save button.
		let savebuttons = form.querySelectorAll('.form__actions .form__save');
		Array.prototype.forEach.call(savebuttons, (el, i) => {
			el.addEventListener('click', (e) => {
				let form = el.parentNode.parentNode;

				let fn_value = form.querySelector('#firstname').value;
				form.querySelector('#firstname').parentNode.querySelector('.form__text').innerHTML = fn_value;

				let ln_value = form.querySelector('#lastname').value;
				form.querySelector('#lastname').parentNode.querySelector('.form__text').innerHTML = ln_value;


				let fields = form.querySelectorAll('.form__input');
				Array.prototype.forEach.call(fields, (e, i) => {
					e.parentNode.querySelector('.form__text').innerHTML = e.value;
				})

				form.classList.toggle('form--noedit');
				submitForm(form)
			});
		});

		// Form cancel button.
		let cancelbuttons = form.querySelectorAll('.form__actions .form__cancel');
		Array.prototype.forEach.call(cancelbuttons, (el, i) => {
			el.addEventListener('click', (e) => el.parentNode.parentNode.classList.toggle('form--noedit'));
		});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc2Nzcy9zdHlsZS5zY3NzPzliNmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0NBQWtDOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7O0FDN09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTtBQUNGLENBQUMsQzs7Ozs7Ozs7Ozs7QUMzTUQsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywrVUFBeUs7O0FBRTNNOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsUUFBUzs7QUFFMUI7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDTiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGNzczogbGlzdFtpXVsxXSxcbiAgICAgIG1lZGlhOiBsaXN0W2ldWzJdLFxuICAgICAgc291cmNlTWFwOiBsaXN0W2ldWzNdXG4gICAgfTtcblxuICAgIGlmIChzdHlsZXNJbkRvbVttb2R1bGVJZF1baV0pIHtcbiAgICAgIHN0eWxlc0luRG9tW21vZHVsZUlkXVtpXShwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLnB1c2goYWRkU3R5bGUocGFydCwgb3B0aW9ucykpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1vZHVsZUlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIG1vZHVsZUlkID0gb3B0aW9ucy5iYXNlID8gbW9kdWxlSWQgKyBvcHRpb25zLmJhc2UgOiBtb2R1bGVJZDtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG5cbiAgaWYgKCFzdHlsZXNJbkRvbVttb2R1bGVJZF0pIHtcbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgfVxuXG4gIG1vZHVsZXNUb0RvbShtb2R1bGVJZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3R5bGVzSW5Eb21bbW9kdWxlSWRdKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0gPSBbXTtcbiAgICB9XG5cbiAgICBtb2R1bGVzVG9Eb20obW9kdWxlSWQsIG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgaiA9IG5ld0xpc3QubGVuZ3RoOyBqIDwgc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aDsgaisrKSB7XG4gICAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF1bal0oKTtcbiAgICB9XG5cbiAgICBzdHlsZXNJbkRvbVttb2R1bGVJZF0ubGVuZ3RoID0gbmV3TGlzdC5sZW5ndGg7XG5cbiAgICBpZiAoc3R5bGVzSW5Eb21bbW9kdWxlSWRdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIHN0eWxlc0luRG9tW21vZHVsZUlkXTtcbiAgICB9XG4gIH07XG59OyIsImxldCBwZXJzb24gPSB7XHJcblx0Zmlyc3RuYW1lOiAnSmVzc2ljYScsXHJcblx0bGFzdG5hbWU6ICdQYXJrZXInLFxyXG5cdGFkZHJlc3M6ICdOZXdwb3J0IEJlYWNoLCBDQScsXHJcblx0cGhvbmVudW1iZXI6ICcoOTQ5KSAzMjUtNjg1OTQnLFxyXG5cdHdlYnNpdGU6ICd3d3cuc2VsbGVyLmNvbSdcclxufVxyXG5cclxubGV0IHJlYWR5ID0gKGZuKSA9PiB7XHJcblx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gJ2xvYWRpbmcnKSB7XHJcblx0XHRmbigpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xyXG5cdH1cclxufVxyXG5cclxubGV0IHN1Ym1pdEZvcm0gPSAoZm9ybSkgPT4ge1xyXG5cdC8qIFRPRE86IFVwZGF0ZSBpbmZvIHVzaW5nIEFKQVguXHJcblx0bGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XHJcblx0bGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRyZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnL215L3VybCcsIHRydWUpO1xyXG5cdHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpO1xyXG5cdHJlcXVlc3Quc2VuZChkYXRhKTtcclxuXHQqL1xyXG5cclxuXHQvLyBVcGRhdGUgbGFiZWxzLlxyXG5cdC8vIEFsdGVybmF0aXZlOiBjb3VsZCBiZSBmaWxsZWQgd2l0aCBBSkFYIGdpdmVuIGRhdGEuXHJcblx0bGV0IGZvcm1fX2lucHV0cyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1fX2lucHV0Jyk7XHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtX19pbnB1dHMsIChlLCBpKSA9PiB7XHJcblx0XHRsZXQgdGFyZ2V0X2lkID0gJyMnICsgZS5pZCArICctbGFiZWwnO1xyXG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0X2lkKSkge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldF9pZCkuaW5uZXJIVE1MID0gZS52YWx1ZTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5sZXQgY2xvc2Vwb3B1cCA9IChwb3B1cCkgPT4ge1xyXG5cdHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGVudCcpLmlubmVySFRNTCA9IFwiXCI7XHJcblx0cG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtLWFjdGl2ZScpO1xyXG59XHJcblxyXG5sZXQgcG9wdXAgPSAobGluaywgZm9ybWlkKSA9PiB7XHJcblx0bGV0IGJjID0gbGluay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRsZXQgZmFrZWNvbnRyb2wgPSBsaW5rLnBhcmVudE5vZGUuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuXHRsZXQgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcclxuXHR3aGlsZSAocG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250ZW50JykuZmlyc3RDaGlsZClcclxuXHRcdHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGVudCcpLnJlbW92ZUNoaWxkKHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY29udGVudCcpLmZpcnN0Q2hpbGQpO1xyXG5cclxuXHRwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdwb3B1cC0tZWRpdGZpZWxkJyk7XHJcblx0cG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19jb250ZW50JykuYXBwZW5kQ2hpbGQoZmFrZWNvbnRyb2wpO1xyXG5cclxuXHQvLyBTdHlsaW5nLlxyXG5cdHBvcHVwLnN0eWxlLmxlZnQgPSBiYy54ICsgYmMud2lkdGggKyAncHgnO1xyXG5cdHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLS1hY3RpdmUnKTtcclxuXHRwb3B1cC5zdHlsZS50b3AgPSAoYmMueSAtIDEwKSArICdweCc7XHJcblxyXG5cdC8qIFNldCBiZWhhdmlvcnMgKi9cclxuXHRsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvcm1pZCk7XHJcblxyXG5cdC8vIFBvcHVwIGJ1dHRvbnMuXHJcblx0bGV0IHNhdmVfYnRuID0gcG9wdXAucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0tc2F2ZScpO1xyXG5cdGxldCBjYW5jZWxfYnRuID0gcG9wdXAucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0tY2FuY2VsJyk7XHJcblxyXG5cdHNhdmVfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUsIGkpID0+IHtcclxuXHRcdGxldCBmaWVsZF9pZHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2NvbnRlbnQgLmZvcm1fX2lucHV0Jyk7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZpZWxkX2lkcywgKGVsLCBpKSA9PiB7XHJcblx0XHRcdGxldCBmaWVsZF9pZCA9ICcjJyArIGVsLmlkO1xyXG5cdFx0XHRsZXQgZmllbGRfdmFsdWUgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKGZpZWxkX2lkKS52YWx1ZTtcclxuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKGZpZWxkX2lkKS52YWx1ZSA9IGZpZWxkX3ZhbHVlO1xyXG5cdFx0XHRpZiAoZm9ybS5xdWVyeVNlbGVjdG9yKGZpZWxkX2lkKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX190ZXh0JykpIHtcclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoZmllbGRfaWQpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHQnKS5pbm5lckhUTUwgPSBmaWVsZF92YWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y2xvc2Vwb3B1cChwb3B1cCk7XHJcblx0XHRzdWJtaXRGb3JtKGZvcm0pO1xyXG5cdH0pO1xyXG5cclxuXHRjYW5jZWxfYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUsIGkpID0+IHtcclxuXHRcdGNsb3NlcG9wdXAocG9wdXApO1xyXG5cdH0pO1xyXG5cclxufVxyXG5cclxubGV0IGFjdGl2YXRlVGFiID0gKGUpID0+IHtcclxuXHQvLyBUT0RPOiBBZGQgYW4gZWZmZWN0IHRyYW5zaXRpb24gaGVyZS4gTGV0J3MgbWFrZSB0aGlzIHByZXR0eS4g8J+YiVxyXG5cclxuXHRpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hvcml6b250YWwtbWVudV9fbGluay0tYWN0aXZlJykpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGxldCBobSA9IGUucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuXHQvLyBEZWFjdGl2YXRlIGFjdGl2ZSBpdGVtcy5cclxuXHRsZXQgYWN0aXZlaXRlbXMgPSBobS5xdWVyeVNlbGVjdG9yQWxsKCcuaG9yaXpvbnRhbC1tZW51X19saW5rLS1hY3RpdmUnKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFjdGl2ZWl0ZW1zLCAoZWwsIGkpID0+IHtcclxuXHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaG9yaXpvbnRhbC1tZW51X19pdGVtLS1hY3RpdmUnKTtcclxuXHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hvcml6b250YWwtbWVudV9fbGluay0tYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cdC8vIEFjdGl2YXRlIGNsaWNrZWQgaXRlbSBhbmQgaXRzIHBhcmVudC5cclxuXHRlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtbWVudV9fbGluay0tYWN0aXZlJyk7XHJcblx0ZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2hvcml6b250YWwtbWVudV9faXRlbS0tYWN0aXZlJyk7XHJcblxyXG5cdC8vIE1ha2UgaW5mb2NhcmRzIHZpc2libGUuXHJcblx0bGV0IGVpZCA9IGUucGFyZW50Tm9kZS5pZDtcclxuXHRsZXQgaW5mb2NhcmRzID0gaG0ubmV4dEVsZW1lbnRTaWJsaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmZvY2FyZCcpO1xyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaW5mb2NhcmRzLCAoZWwsIGkpID0+IHtcclxuXHRcdGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGVpZCkpIHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaW5mb2NhcmQtLWFjdGl2ZScpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaW5mb2NhcmQtLWFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5sZXQgcHJlZmlsbCA9IChwZXJzb24pID0+IHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lLWxhYmVsJykuaW5uZXJIVE1MID0gcGVyc29uLmZpcnN0bmFtZTtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RuYW1lJykudmFsdWUgPSBwZXJzb24uZmlyc3RuYW1lO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdG5hbWUnKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX190ZXh0JykuaW5uZXJIVE1MID0gcGVyc29uLmZpcnN0bmFtZTtcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xhc3RuYW1lLWxhYmVsJykuaW5uZXJIVE1MID0gcGVyc29uLmxhc3RuYW1lO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpLnZhbHVlID0gcGVyc29uLmxhc3RuYW1lO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYXN0bmFtZScpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHQnKS5pbm5lckhUTUwgPSBwZXJzb24ubGFzdG5hbWU7XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZW51bWJlci1sYWJlbCcpLmlubmVySFRNTCA9IHBlcnNvbi5waG9uZW51bWJlcjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmVudW1iZXInKS52YWx1ZSA9IHBlcnNvbi5waG9uZW51bWJlcjtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGhvbmVudW1iZXInKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX190ZXh0JykuaW5uZXJIVE1MID0gcGVyc29uLnBob25lbnVtYmVyO1xyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eXN0YXRlLXppcC1sYWJlbCcpLmlubmVySFRNTCA9IHBlcnNvbi5hZGRyZXNzO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5c3RhdGUtemlwJykudmFsdWUgPSBwZXJzb24uYWRkcmVzcztcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eXN0YXRlLXppcCcpLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLmZvcm1fX3RleHQnKS5pbm5lckhUTUwgPSBwZXJzb24uYWRkcmVzcztcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYnNpdGUnKS52YWx1ZSA9IHBlcnNvbi53ZWJzaXRlO1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWJzaXRlJykucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dCcpLmlubmVySFRNTCA9IHBlcnNvbi53ZWJzaXRlO1xyXG59XHJcblxyXG5yZWFkeSgoKSA9PiB7XHJcblxyXG5cdHByZWZpbGwocGVyc29uKTtcclxuXHJcblx0Ly8gRm9ybSBlZGl0IGJ1dHRvbi5cclxuXHRsZXQgZWRpdGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZm9jYXJkX19saW5rJyk7XHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlZGl0bGlua3MsIChlbCwgaSkgPT4ge1xyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnZm9ybS0tbm9lZGl0Jyk7XHJcblx0XHR9KVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybScpO1xyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZm9ybXMsIChlbCwgaSkgPT4ge1xyXG5cdFx0bGV0IGZvcm0gPSBlbDtcclxuXHJcblx0XHQvLyBGaWVsZCBlZGl0IGxpbmtzLlxyXG5cdFx0bGV0IGVkaXRsaW5rcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0tY29udHJvbF9fZWRpdCcpO1xyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlZGl0bGlua3MsIChlbCwgaSkgPT4ge1xyXG5cdFx0XHRsZXQgZmllbGRfX3ZhbHVlID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9faW5wdXQnKS52YWx1ZTtcclxuXHRcdFx0ZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dCcpLmlubmVySFRNTCA9IGZpZWxkX192YWx1ZTtcclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcG9wdXAoZWwsIGZvcm0uaWQpKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIEZvcm0gc2F2ZSBidXR0b24uXHJcblx0XHRsZXQgc2F2ZWJ1dHRvbnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19hY3Rpb25zIC5mb3JtX19zYXZlJyk7XHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNhdmVidXR0b25zLCAoZWwsIGkpID0+IHtcclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGxldCBmb3JtID0gZWwucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG5cclxuXHRcdFx0XHRsZXQgZm5fdmFsdWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdG5hbWUnKS52YWx1ZTtcclxuXHRcdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdG5hbWUnKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX190ZXh0JykuaW5uZXJIVE1MID0gZm5fdmFsdWU7XHJcblxyXG5cdFx0XHRcdGxldCBsbl92YWx1ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2xhc3RuYW1lJykudmFsdWU7XHJcblx0XHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCcjbGFzdG5hbWUnKS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX190ZXh0JykuaW5uZXJIVE1MID0gbG5fdmFsdWU7XHJcblxyXG5cclxuXHRcdFx0XHRsZXQgZmllbGRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybV9faW5wdXQnKTtcclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZpZWxkcywgKGUsIGkpID0+IHtcclxuXHRcdFx0XHRcdGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dCcpLmlubmVySFRNTCA9IGUudmFsdWU7XHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0Zm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLS1ub2VkaXQnKTtcclxuXHRcdFx0XHRzdWJtaXRGb3JtKGZvcm0pXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gRm9ybSBjYW5jZWwgYnV0dG9uLlxyXG5cdFx0bGV0IGNhbmNlbGJ1dHRvbnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19hY3Rpb25zIC5mb3JtX19jYW5jZWwnKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY2FuY2VsYnV0dG9ucywgKGVsLCBpKSA9PiB7XHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGVsLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCdmb3JtLS1ub2VkaXQnKSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcblx0Ly8gSG9yaXpvbnRhbCBtZW51IGJlaGF2aW9yLlxyXG5cdGxldCBob3JtZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Jpem9udGFsLW1lbnUnKTtcclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGhvcm1lbnVzLCAoZWwsIGkpID0+IHtcclxuXHRcdGxldCBsaW5rcyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3Jpem9udGFsLW1lbnVfX2xpbmsnKTtcclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGlua3MsIChlbCwgaSkgPT4ge1xyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGFjdGl2YXRlVGFiKGUudGFyZ2V0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KVxyXG5cdH0pO1xyXG59KSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKG1vZHVsZS5pZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0ICcuLi9yZXNvdXJjZXMvc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi4vcmVzb3VyY2VzL2pzL3NjcmlwdCc7XG4iXSwic291cmNlUm9vdCI6IiJ9