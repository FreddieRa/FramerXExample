(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ScrollBarExample.tsx": "./code/ScrollBarExample.tsx",
	"./UseRelative.tsx": "./code/UseRelative.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/ScrollBarExample.tsx":
/*!***********************************!*\
  !*** ./code/ScrollBarExample.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsQmFyRXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU2Nyb2xsQmFyRXhhbXBsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE4QjtBQUM5QixtQ0FRZTtBQUNmLGlDQUF1RDtBQUV2RCxTQUFnQixTQUFTLENBQUMsS0FBSzs7SUFDM0IsTUFBTSxFQUNGLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxLQUVYLEtBQUssRUFETCx1R0FDSyxDQUFBO0lBQ1QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQTtJQUUxQixTQUFTO0lBRVQsTUFBTSxPQUFPLEdBQUcsdUJBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVqQyxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUV4RCxVQUFVO0lBRVYsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRWxELE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7SUFFaEUsT0FBTztJQUVQLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FDMUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLEVBQzNCLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFOztRQUMxQixPQUFPLFlBQVksR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFBO0tBQ3hDLENBQ0osQ0FBQTtJQUVELFlBQVk7SUFFWixNQUFNLFNBQVMsR0FBRyxTQUFTLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQTtJQUU3QyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQzFCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxFQUN6QixDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFBRTs7UUFDeEIsT0FBTyxVQUFVLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQTtLQUN0QyxDQUNKLENBQUE7SUFFRCxPQUFPO0lBRVAsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUMxQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLEVBQ3pDLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsRUFBRTs7UUFDeEMsT0FBTyxVQUFVLEdBQUcsQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUE7S0FDckQsQ0FDSixDQUFBO0lBRUQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUNyQixDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFDOUQsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUU7O1FBQzdELE9BQU8sQ0FDSCxDQUFDLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3RDLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQyxDQUNqQyxDQUFBO0tBQ0osQ0FDSixDQUFBO0lBRUQsU0FBUztJQUVULFNBQVMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJOztRQUM5QixPQUFPLENBQUMsR0FBRyxDQUNQLElBQUksQ0FBQyxHQUFHLENBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUM3QyxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUM5QyxDQUNKLENBQUE7S0FDSjtJQUVELE9BQU8sQ0FDSCxvQkFBQyxjQUFLLG9CQUFLLElBQUksSUFBRSxVQUFVLEVBQUMsTUFBTTtRQUM5QixvQkFBQyxlQUFNLElBQ0gsS0FBSyxFQUFDLE1BQU0sRUFDWixPQUFPLEVBQUUsQ0FBQyxFQUNWLGNBQWMsRUFBRSxPQUFPLEVBQ3ZCLE1BQU0sRUFBRSxZQUFZLElBRW5CLE9BQU87WUFDSixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLGFBQWE7YUFDeEIsQ0FBQyxDQUNEO1FBQ1Qsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxNQUFNLEVBQ1gsTUFBTSxFQUFFLEdBQUcsRUFDWCxLQUFLLEVBQUUsV0FBVyxFQUNsQixLQUFLLEVBQUUsU0FBUyxFQUNoQixNQUFNLEVBQUUsVUFBVSxFQUNsQixZQUFZLEVBQUUsU0FBUyxHQUFHLENBQUMsRUFDM0IsVUFBVSxFQUFFLFNBQVM7WUFFckIsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxVQUFVLEVBQ2YsTUFBTSxRQUNOLEtBQUssRUFBRSxTQUFTLEVBQ2hCLE1BQU0sRUFBRSxVQUFVLEVBQ2xCLFlBQVksRUFBRSxTQUFTLEdBQUcsQ0FBQyxFQUMzQixRQUFRLEVBQUMsUUFBUSxFQUNqQixVQUFVLEVBQUUsTUFBTTtnQkFFbEIsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxNQUFNLEVBQ1gsQ0FBQyxFQUFFLEtBQUssRUFDUixNQUFNLEVBQUUsR0FBRyxFQUNYLEtBQUssRUFBRSxNQUFNLEVBQ2IsTUFBTSxFQUFFLFVBQVUsRUFDbEIsWUFBWSxFQUFFLFNBQVMsR0FBRyxDQUFDLEVBQzNCLFVBQVUsRUFBRSxTQUFTLEVBQ3JCLE9BQU8sRUFBRSxDQUFDLEVBQ1YsS0FBSyxFQUFFLGFBQWEsR0FDdEIsQ0FDRSxDQUNKLENBQ0osQ0FDWCxDQUFBO0NBQ0o7QUF6SEQsOEJBeUhDO0FBRUQsU0FBUyxDQUFDLFlBQVksR0FBRztJQUNyQixTQUFTLEVBQUUsRUFBRTtJQUNiLFdBQVcsRUFBRSxFQUFFO0lBQ2YsU0FBUyxFQUFFLE1BQU07SUFDakIsU0FBUyxFQUFFLE1BQU07SUFDakIsV0FBVyxFQUFFLENBQUM7Q0FDakIsQ0FBQTtBQUVELDRCQUFtQixDQUFDLFNBQVMsRUFBRTtJQUMzQixTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLEVBQUU7UUFDUCxZQUFZLEVBQUUsRUFBRTtLQUNuQjtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsRUFBRTtRQUNQLFlBQVksRUFBRSxFQUFFO0tBQ25CO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtJQUNELFdBQVcsRUFBRTtRQUNULElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07UUFDeEIsR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDO0tBQ2xCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSztRQUN2QixZQUFZLEVBQUUsTUFBTTtLQUN2QjtDQUNKLENBQUMsQ0FBQTtBQUVGLGNBQWM7QUFFRCxRQUFBLGFBQWEsR0FBRyxDQUFDLEtBQVUsRUFBd0IsRUFBRTs7SUFDOUQsT0FBTyxLQUFLLFlBQVksb0JBQVcsQ0FBQTtDQUN0QyxDQUFBO0FBRUQsTUFBTSxPQUFPLEdBQW9DLENBQUMsQ0FBQyxFQUFFLENBQ2pELHFCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRWxDLFNBQWdCLFdBQVcsQ0FDdkIsTUFBOEIsRUFDOUIsUUFBK0I7O0lBRS9CLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0Msd0JBQXdCO0lBQ3hCLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQVcsQ0FDaEMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3hELENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUNyQixDQUFBO0lBRUQsOERBQThEO0lBQzlELE1BQU0sYUFBYSxHQUFHLHVCQUFjLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUU5RCwwREFBMEQ7SUFDMUQsaUJBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ1gsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBRXRFLDJDQUEyQztRQUMzQyxZQUFZLEVBQUUsQ0FBQTtRQUVkLCtEQUErRDtRQUMvRCxpQ0FBaUM7UUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTTthQUNsQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxxQkFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDdEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFtQixDQUFBO1FBRXJDLG1DQUFtQztRQUNuQyxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0tBQzVDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBRVosT0FBTyxhQUFhLENBQUE7Q0FDdkI7QUFqQ0Qsa0NBaUNDIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const react_1 = __webpack_require__(/*! react */ "react");
function ScrollBar(props) {
    window["__checkBudget__"]();
    const { children, railColor, railPadding, railWidth, knobColor, knobPadding } = props, rest = __rest(props, ["children", "railColor", "railPadding", "railWidth", "knobColor", "knobPadding"]);
    const [content] = children;
    // SCROLL
    const scrollY = framer_1.useMotionValue(0);
    const scrollHeight = useRelative([props.height], v => v);
    // CONTENT
    const cHeight = content ? content.props.height : 0;
    const contentHeight = useRelative([cHeight], cHeight => cHeight);
    // RAIL
    const railHeight = useRelative([railPadding, scrollHeight], (railPadding, scrollHeight) => {
        window["__checkBudget__"]();
        return scrollHeight - railPadding * 2;
    });
    // KNOB MASK
    const maskWidth = railWidth - knobPadding * 2;
    const maskHeight = useRelative([railHeight, knobPadding], (railHeight, knobPadding) => {
        window["__checkBudget__"]();
        return railHeight - knobPadding * 2;
    });
    // KNOB
    const knobHeight = useRelative([scrollHeight, contentHeight, maskHeight], (scrollHeight, contentHeight, maskHeight) => {
        window["__checkBudget__"]();
        return maskHeight * (scrollHeight / contentHeight);
    });
    const knobY = useRelative([scrollY, contentHeight, scrollHeight, maskHeight, knobHeight], (scrollY, contentHeight, scrollHeight, maskHeight, knobHeight) => {
        window["__checkBudget__"]();
        return (((maskHeight - knobHeight) * -scrollY) /
            (contentHeight - scrollHeight));
    });
    // EVENTS
    function handleKnobPan(event, info) {
        window["__checkBudget__"]();
        scrollY.set(Math.max(Math.min(scrollY.get() - info.delta.y * 2, 0), -(contentHeight.get() - scrollHeight.get())));
    }
    return (React.createElement(framer_1.Frame, Object.assign({}, rest, { background: "none" }),
        React.createElement(framer_1.Scroll, { width: "100%", opacity: 1, contentOffsetY: scrollY, height: scrollHeight }, content &&
            React.cloneElement(content, {
                width: "100%",
                height: contentHeight,
            })),
        React.createElement(framer_1.Frame, { name: "rail", center: "y", right: railPadding, width: railWidth, height: railHeight, borderRadius: railWidth / 2, background: railColor },
            React.createElement(framer_1.Frame, { name: "knobMask", center: true, width: maskWidth, height: maskHeight, borderRadius: maskWidth / 2, overflow: "hidden", background: "none" },
                React.createElement(framer_1.Frame, { name: "knob", y: knobY, center: "x", width: "100%", height: knobHeight, borderRadius: maskWidth / 2, background: knobColor, opacity: 1, onPan: handleKnobPan })))));
}
exports.ScrollBar = ScrollBar;
ScrollBar.defaultProps = {
    railWidth: 12,
    railPadding: 12,
    railColor: "#555",
    knobColor: "#FFF",
    knobPadding: 2,
};
framer_1.addPropertyControls(ScrollBar, {
    railWidth: {
        type: framer_1.ControlType.Number,
        min: 1,
        max: 24,
        defaultValue: 12,
    },
    railPadding: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 24,
        defaultValue: 12,
    },
    railColor: {
        type: framer_1.ControlType.Color,
        defaultValue: "#555",
    },
    knobPadding: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 8,
        defaultValue: 2,
    },
    knobColor: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFF",
    },
});
// CUSTOM HOOK
exports.isMotionValue = (value) => {
    window["__checkBudget__"]();
    return value instanceof framer_1.MotionValue;
};
const toValue = v => exports.isMotionValue(v) ? v.get() : v;
function useRelative(values, callback) {
    window["__checkBudget__"]();
    // Compute the motion values's value by running
    // current values of its related values through
    // the callback function
    const getComputedValue = react_1.useCallback(currentValues => callback(...currentValues.map(toValue)), [callback, values]);
    // Create new motion value and initialize with computed values
    const computedValue = framer_1.useMotionValue(getComputedValue(values));
    // When values change, compute and update change listeners
    react_1.useEffect(() => {
        window["__checkBudget__"]();
        const computeValue = () => computedValue.set(getComputedValue(values));
        // Compute motion value based on new values
        computeValue();
        // Add change events to each motion value, to compute the value
        // when that motion value changes
        const removers = values
            .map(v => exports.isMotionValue(v) && v.onChange(computeValue))
            .filter(v => v);
        // Return removes for change events
        return () => removers.forEach(fn => fn());
    }, [values]);
    return computedValue;
}
exports.useRelative = useRelative;
exports.__info__ = [{ "name": "ScrollBar", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/UseRelative.tsx":
/*!******************************!*\
  !*** ./code/UseRelative.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlUmVsYXRpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1VzZVJlbGF0aXZlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUF1QztBQUN2QyxtQ0FBb0Q7QUFFcEQ7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxTQUFnQixXQUFXLENBQ3ZCLE9BQStCLEVBQy9CLFNBQWlDOztJQUVqQyxNQUFNLGdCQUFnQixHQUFHLHVCQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFM0UsdUJBQWUsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUN0QixnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFNUQsWUFBWSxFQUFFLENBQUE7UUFFZCxNQUFNLFFBQVEsR0FBRyxPQUFPO2FBQ25CLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLHFCQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN0RCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQW1CLENBQUE7UUFFckMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtLQUM1QyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFFeEIsT0FBTyxnQkFBZ0IsQ0FBQTtDQUMxQjtBQXBCRCxrQ0FvQkM7QUFFRCxVQUFVO0FBRUcsUUFBQSxhQUFhLEdBQUcsQ0FBQyxLQUFVLEVBQXdCLEVBQUU7O0lBQzlELE9BQU8sS0FBSyxZQUFZLG9CQUFXLENBQUE7Q0FDdEMsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFvQyxDQUFDLENBQUMsRUFBRSxDQUNqRCxxQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * UseRelative
 * @description Declare a motion value with a value dependent on multiple other values.
 * @param parents An array of motion values or values.
 * @param transform A function that receives the current values and returns a computed value.
 * @example
 * ```jsx
 * const knobHeight = useRelative(
 *  [scrollHeight, contentHeight, maskHeight],
 *  (scrollHeight, contentHeight, maskHeight) => {
 *    return maskHeight * (scrollHeight / contentHeight)
 *  }
 *)
 *```
 */
function useRelative(parents, transform) {
    window["__checkBudget__"]();
    const transformedValue = framer_1.useMotionValue(transform(...parents.map(toValue)));
    react_1.useLayoutEffect(() => {
        window["__checkBudget__"]();
        const computeValue = () => transformedValue.set(transform(...parents.map(toValue)));
        computeValue();
        const removers = parents
            .map(v => exports.isMotionValue(v) && v.onChange(computeValue))
            .filter(v => v);
        return () => removers.forEach(fn => fn());
    }, [parents, transform]);
    return transformedValue;
}
exports.useRelative = useRelative;
// HELPERS
exports.isMotionValue = (value) => {
    window["__checkBudget__"]();
    return value instanceof framer_1.MotionValue;
};
const toValue = v => exports.isMotionValue(v) ? v.get() : v;
exports.__info__ = [];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    var designJson
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                        
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.1.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"useOpenURL","type":"action"},{"name":"useLog","type":"action"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    package.__framer__.packageJson.design = designJson
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"2901bb57-aadc-4ecc-8040-f507fdac3fc7\",\"displayName\":\"ScrollBar\"},\"author\":\"Steve Ruiz\",\"name\":\"@framer/steveruizok.scroll-bar\",\"version\":\"1.4.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});