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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_templating__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_matchesSelector__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_createEvent__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_templating__["a"]; });
/* unused harmony reexport matchesSelector */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_querySelectorSlot__["a"]; });
/* unused harmony reexport createEvent */
/**
 * Created by ThatJoeMoore on 2/14/17
 */










/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchesSelector;
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */


function matchesSelector(el, selector) {
    let proto = Element.prototype;
    let actual =
        proto.matches ||
        proto.matchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        proto.webkitMatchesSelector ||
        function (s) {
            let doc = this.document || this.ownerDocument;
            return doc.querySelectorAll(s).indexOf(this) !== -1;
        };

    return actual.call(el, selector);
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_news_html__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_news_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_news_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/






const ATTR_CATEGORIES = 'categories';
const ATTR_TAGS = 'tags';
const ATTR_MIN_DATE = 'min-date';
const ATTR_MAX_DATE = 'max-date';
const ATTR_STORY_LIMIT = 'story-limit';
const ATTR_SHOW_CATEGORY = 'show-category';
const ATTR_SHOW_DATE = 'show-date';

const DEFAULT_CATEGORIES = 'all';
const DEFAULT_TAGS = 'all';
const DEFAULT_STORY_LIMIT = '-1'; // -1 for infinite

const ENDPOINT = 'https://news.byu.edu/api/';

class ByuNews extends HTMLElement {
  constructor() {
    super();
    this._initialized = false;
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    // This will stamp our template for us, then let us perform actions on the stamped DOM.
    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-news', __WEBPACK_IMPORTED_MODULE_0__byu_news_html___default.a, () => {
      this._initialized = true;
      applyNews(this);

      setupSlotListeners(this);
    });
  }

  disconnectedCallback() {
    // Just in case we need to cleanup
  }

  static get observedAttributes() {
    return [ATTR_CATEGORIES, ATTR_TAGS, ATTR_MIN_DATE, ATTR_MAX_DATE, ATTR_STORY_LIMIT, ATTR_SHOW_CATEGORY, ATTR_SHOW_DATE];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch(attr) {
      case ATTR_CATEGORIES:
      case ATTR_TAGS:
      case ATTR_MIN_DATE:
      case ATTR_MAX_DATE:
      case ATTR_STORY_LIMIT:
      case ATTR_SHOW_CATEGORY:
      case ATTR_SHOW_DATE:
        applyNews(this);
        break;
    }
  }

  // ATTRIBUTES

  set categories(value) {
    this.setAttribute(ATTR_CATEGORIES, value);
  }

  get categories() {
    if (this.hasAttribute(ATTR_CATEGORIES)) {
      return this.getAttribute(ATTR_CATEGORIES);
    }
    return DEFAULT_CATEGORIES;
  }

  set tags(value) {
    this.setAttribute(ATTR_TAGS, value);
  }

  get tags() {
    if (this.hasAttribute(ATTR_TAGS)) {
      return this.getAttribute(ATTR_TAGS);
    }
    return DEFAULT_TAGS;
  }

  set minDate(value) {
    this.setAttribute(ATTR_MIN_DATE, value);
  }

  get minDate() {
    if (this.hasAttribute(ATTR_MIN_DATE)) {
      return this.getAttribute(ATTR_MIN_DATE);
    }
  }

  set maxDate(value) {
    this.setAttribute(ATTR_MAX_DATE, value);
  }

  get maxDate() {
    if (this.hasAttribute(ATTR_MAX_DATE)) {
      return this.getAttribute(ATTR_MAX_DATE);
    }
  }

  set storyLimit(value) {
    this.setAttribute(ATTR_STORY_LIMIT, value);
  }

  get storyLimit() {
    if (this.hasAttribute(ATTR_STORY_LIMIT)) {
      return this.getAttribute(ATTR_STORY_LIMIT);
    }
    return DEFAULT_STORY_LIMIT;
  }

  set showCategory(value) {
    this.setAttribute(ATTR_SHOW_CATEGORY, '');
  }

  get showCategory() {
    if (this.hasAttribute(ATTR_SHOW_CATEGORY)) {
      return this.getAttribute(ATTR_SHOW_CATEGORY);
    }
  }

  set showDate(value) {
    this.setAttribute(ATTR_SHOW_DATE, '');
  }

  get showDate() {
    if (this.hasAttribute(ATTR_SHOW_DATE)) {
      return this.getAttribute(ATTR_SHOW_DATE);
    }
  }

  // END ATTRIBUTES

}

window.customElements.define('byu-news', ByuNews);
window.ByuNews = ByuNews;

// -------------------- Helper Functions --------------------

function applyNews(component) {
  if (!component._initialized) return;

  let output = component.shadowRoot.querySelector('.output');

  let count = Number(component.storyLimit);

  if (count === 0) return;

  //Remove all current children (if there are any)
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }

  let slot = component.shadowRoot.querySelector('#story-template');
  let template = __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["b" /* querySelectorSlot */](slot, 'template');

  if (!template) {
    throw new Error('No template was specified!');
  }

  let data = {
    title: component.title,
    categories: component.categories,
    tags: component.tags,
    minDate: component.minDate,
    maxDate: component.maxDate,
    showCategory: component.showCategory,
    showDate: component.showDate
  };

  let url = ENDPOINT + 'Stories?_format=json&categories=' + data.categories + '&tags=' + data.tags + '&';
  if (data['minDate']) {
    url += 'published[min]=' + data.minDate + '&';
  }
  if (data['maxDate']) {
    url += 'published[max]=' + data.maxDate;
  }

  fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not OK.')
  }).then(stories => {
    if(stories === -1) {
      count = stories.length;
    }
    for (let i = 0; i < count; ++i) {
      let element = document.importNode(template.content, true);
      let byuStoryRoot = element.querySelector('.news-child');

      if (data.showCategory == '') {
        element.querySelector('.story-category')
          .innerHTML = stories[i].Categories;
      }
      if (data.showDate == '') {
        let date = stories[i].DatePublished;
        date = date.replace('-', '. ');
        date = date.replace('-', ', ');
        element.querySelector('.story-date')
          .innerHTML = date;
      }

      byuStoryRoot.setAttribute('story-id', stories[i].StoryId);
      element.querySelector('.story-image')
        .setAttribute('src', stories[i].FeaturedImgUrl);
      element.querySelector('.story-title')
        .innerHTML = stories[i].Title;

      let summary = convert(stories[i].Summary);
      if (summary !== '') {
        element.querySelector('.story-teaser')
          .innerHTML = summary;
      } else {
        let summary = convert(stories[i].SummaryDeprecated);
        element.querySelector('.story-teaser')
          .innerHTML = summary;
      }
      output.appendChild(element);
    }
  }).catch(error => {
    console.error('There was a problem: ' + error.message);
  });
}

function setupSlotListeners(component) {
  let slot = component.shadowRoot.querySelector('#story-template');

  //this will listen to changes to the contents of our <slot>, so we can take appropriate action
  slot.addEventListener('slotchange', () => {
    applyNews(component);
  }, false);
}

function convert(string) {
  let multiple = {
    '&amp;' : '&',
    '&lt;' : '<',
    '&gt;' : '>',
    '&quot;' : '"',
    '&apos;' : '`'
  };
  for(let char in multiple) {
    let before = char;
    let after= multiple[char];
    let pattern = new RegExp(before, 'g');
    string = string.replace(pattern,after);
  }
  return string;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_story_html__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_story_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__byu_story_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__ = __webpack_require__(0);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/





const ATTR_STORY_ID = 'story-id';
const ATTR_TEASER = 'teaser';
const ATTR_SHOW_CATEGORY = 'show-category';
const ATTR_SHOW_DATE = 'show-date';

const NEWS_SITE = 'https://news.byu.edu/node/';
const ENDPOINT = 'https://news.byu.edu/api/';

class ByuStory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    //This will stamp our template for us, then let us perform actions on the stamped DOM.
    __WEBPACK_IMPORTED_MODULE_1_byu_web_component_utils__["a" /* applyTemplate */](this, 'byu-story', __WEBPACK_IMPORTED_MODULE_0__byu_story_html___default.a, () => {
      getStoryData(this);
      setupSlotListeners(this);
    });
  }

  static get observedAttribute() {
    return [ATTR_STORY_ID, ATTR_TEASER, ATTR_SHOW_CATEGORY, ATTR_SHOW_DATE];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    switch (attr) {
      case ATTR_SHOW_CATEGORY:
      case ATTR_SHOW_DATE:
      case ATTR_STORY_ID:
      case ATTR_TEASER:
        getStoryData(this);
        break;
    }
  }

  get storyId() {
    if (this.hasAttribute(ATTR_STORY_ID)) {
      return this.getAttribute(ATTR_STORY_ID);
    }
  }

  set storyId(value) {
    this.setAttribute(ATTR_STORY_ID, value);
  }

  get teaser() {
    return this.hasAttribute(ATTR_TEASER);
  }

  set showCategory(value) {
    this.setAttribute(ATTR_SHOW_CATEGORY, '');
  }

  get showCategory() {
    if (this.hasAttribute(ATTR_SHOW_CATEGORY)) {
      return this.getAttribute(ATTR_SHOW_CATEGORY);
    }
  }

  set showDate(value) {
    this.setAttribute(ATTR_SHOW_DATE, '');
  }

  get showDate() {
    if (this.hasAttribute(ATTR_SHOW_DATE)) {
      return this.getAttribute(ATTR_SHOW_DATE);
    }
  }
}

window.customElements.define('byu-story', ByuStory);
window.ByuStory = ByuStory;

// -------------------- Helper Functions --------------------

function setupSlotListeners(component) {
  // Saving just in case
}

function getStoryData(component) {
  if (component.classList.contains('news-child')) {
    let links = component.shadowRoot.querySelectorAll('.story-link');
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('href', NEWS_SITE + component.storyId);
    }
  }
  else {
    let url = ENDPOINT + 'Story?_format=json&id=' + component.storyId;
    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not OK.')
    }).then(story => {
      let storyLinks = component.shadowRoot.querySelectorAll('.story-link');
      storyLinks[0].setAttribute('href', NEWS_SITE + story[0].storyId);
      storyLinks[1].setAttribute('href', NEWS_SITE + story[0].storyId);

      let storyImage = document.createElement("img");
      let replaceSlot = storyLinks[0].firstChild;
      storyImage.setAttribute('src', story[0].FeaturedImgUrl);
      storyImage.setAttribute('class', 'story-image');
      storyImage.setAttribute('alt', 'Story Image');
      storyLinks[0].replaceChild(storyImage, replaceSlot);

      let storyTitle = document.createElement("h3");
      replaceSlot = storyLinks[1].firstChild;
      storyTitle.setAttribute('class', 'story-title');
      storyTitle.innerHTML = story[0].Title;
      storyLinks[1].replaceChild(storyTitle, replaceSlot);

      if (component.showCategory == '') {
        let categoryWrapper = component.shadowRoot.querySelector('#category-slot-wrapper');

        let storyCategory = document.createElement("span");
        replaceSlot = categoryWrapper.firstChild;
        storyCategory.setAttribute('class', 'story-category');
        storyCategory.innerHTML = story[0].Category;
        categoryWrapper.replaceChild(storyCategory, replaceSlot);
      }

      if (component.showDate == '') {
        let dateWrapper = component.shadowRoot.querySelector('#date-slot-wrapper');
        let date = story[0].datePublished;
        date = date.replace('-', '. ');
        date = date.replace('-', ', ');

        let storyDate = document.createElement("span");
        replaceSlot = dateWrapper.firstChild;
        storyDate.setAttribute('class', 'story-date');
        storyDate.innerHTML = date;
        dateWrapper.replaceChild(storyDate, replaceSlot);
      }

      if (component.teaser) {
        let teaser = story[0].Body;
        // Preemptively shorten teaser (This is to decrease the time it takes to shorten the teaser by word)
        if (teaser.length > 300) {
          teaser = teaser.substring(0, 300);
        }

        // Make sure teaser doesn't end in whitespace
        teaser = teaser.trim();

        // Continue to shorten teaser by word (This ensures the ellipses doesn't start in the middle of a word or white space)
        while (teaser.length > 250) {
          teaser = teaser.replace(/\W*\s(\S)*$/, '...');
        }

        let descriptionWrapper = component.shadowRoot.querySelector('#description-slot-wrapper');

        let storyDescription = document.createElement("p");
        replaceSlot = descriptionWrapper.firstChild;

        storyDescription.setAttribute('class', 'story-teaser');
        storyDescription.innerHTML = teaser;
        descriptionWrapper.replaceChild(storyDescription, replaceSlot);
      }
      else {
        let body = story[0].Body;
        let descriptionWrapper = component.shadowRoot.querySelector('#description-slot-wrapper');

        let storyDescription = document.createElement("p");
        replaceSlot = descriptionWrapper.firstChild;

        storyDescription.setAttribute('class', 'story-body');
        storyDescription.innerHTML = body;
        descriptionWrapper.replaceChild(storyDescription, replaceSlot);
      }
    }).catch(error => {
      console.error('There was a problem: ' + error.message);
    });
  }
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__byu_news_byu_news_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__byu_story_byu_story_js__ = __webpack_require__(4);
/**
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/






/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */


function createEvent(name, detail) {
    if (typeof window.CustomEvent === 'function') {
        return new CustomEvent(name, {detail, cancelable: true, bubbles: true})
    }
    let evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, true, true, detail);
    return evt;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = querySelectorSlot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__ = __webpack_require__(1);
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */




function querySelectorSlot(slot, selector) {
    let roots = slot.assignedNodes({flatten: true})
        .filter(n => n.nodeType === Node.ELEMENT_NODE);

    for (let i = 0, len = roots.length; i < len; i++) {
        let each = roots[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__matchesSelector_js__["a" /* default */])(each, selector)) {
            return each;
        }
        let child = each.querySelector(selector);
        if (child) {
            return child;
        }
    }
    return null;
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyTemplate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hash_sum___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hash_sum__);
/*
 *  @license
 *    Copyright 2017 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */




const TEMPLATE_RENDERED_CLASS = 'byu-component-rendered';

function applyTemplate(element, elementName, template, callback) {
    let sum = __WEBPACK_IMPORTED_MODULE_0_hash_sum___default()(template);

    let elSettings = element.__byu_webCommunity_components = element.__byu_webCommunity_components || {};
    if (elSettings.templateHash === sum) {
        //Nothing has changed in the element.  Don't replace the DOM, don't fire the callback.
        return;
    }
    elSettings.templateHash = sum;

    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
        applyTemplateShady(element, elementName, template, callback, sum);
    } else {
        applyTemplateNative(element, template, callback);
    }
}

function applyTemplateShady(element, elementName, template, callback, sum) {
    let templateId = '__byu-custom-element-template_' + elementName + '_' + sum;
    let templateElement = document.head.querySelector('template#' + templateId);
    if (!templateElement) {
        templateElement = document.createElement('template');
        templateElement.id = templateId;
        templateElement.innerHTML = template;
        document.head.appendChild(templateElement);
        ShadyCSS.prepareTemplate(templateElement, elementName);
    }
    if (ShadyCSS.styleElement) {
        ShadyCSS.styleElement(element);
    } else if (ShadyCSS.applyStyle) {
        ShadyCSS.applyStyle(element);
    } else {
        throw new Error('ShadyCSS is not properly defined: no styleElement or applyStyle!');
    }
    let imported = document.importNode(templateElement.content, true);
    let shadow = element.shadowRoot;
    //It'd be nice if we could just diff the DOM and replace what changed between templates, but that might lead to
    // event listeners getting applied twice.  Easier to just clear out the shadow DOM and replace it.
    while (shadow.firstChild) {
        shadow.removeChild(shadow.firstChild);
    }
    shadow.appendChild(imported);
    setTimeout(function() {
        runAfterStamping(element, callback);
    });
}

function applyTemplateNative(element, template, callback) {
    element.shadowRoot.innerHTML = template;
    runAfterStamping(element, callback);
}

function runAfterStamping(element, callback) {
    element.classList.add(TEMPLATE_RENDERED_CLASS);
    if (callback) {
        callback();
    }
}



/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */@media screen and (max-width:768px){.output{border-bottom:1px solid #e5e5e5}}", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */\n/*!\n *  @license\n *    Copyright 2017 Brigham Young University\n *\n *    Licensed under the Apache License, Version 2.0 (the \"License\");\n *    you may not use this file except in compliance with the License.\n *    You may obtain a copy of the License at\n *\n *        http://www.apache.org/licenses/LICENSE-2.0\n *\n *    Unless required by applicable law or agreed to in writing, software\n *    distributed under the License is distributed on an \"AS IS\" BASIS,\n *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n *    See the License for the specific language governing permissions and\n *    limitations under the License.\n */.story-root{display:flex;margin:10px 0}.story-image,.story-link ::slotted(img){width:260px;height:160px;object-fit:cover;object-position:50% 50%}.story-title{margin-top:0!important;margin-bottom:0!important;line-height:23px;font-weight:500;font-size:20px}.region-right{margin:0 20px;padding:0;display:block}#title-slot-wrapper a{color:#002e5d;text-decoration:none}.story-link ::slotted(h3){margin-top:0!important;margin-bottom:0!important;line-height:23px;font-weight:500;font-size:20px}.story-body{white-space:pre-wrap}#title-slot-wrapper a:hover{color:#0057b8}#description-slot-wrapper,p{font-weight:400;font-size:16px}#category-slot-wrapper{font-size:16px;padding-bottom:8px}#category-slot-wrapper,#date-slot-wrapper{text-transform:uppercase;line-height:normal;display:block;font-family:HCo Ringside Narrow SSm,Arial Narrow,Arial,sans-serif;color:#141414;font-weight:200}#date-slot-wrapper{font-size:12px}@media screen and (max-width:768px) and (min-width:481px){.story-root{display:flex;padding:20px 0;margin:0;border-top:2px solid #e5e5e5}.story-link{max-width:150px}.story-image,.story-link ::slotted(img){width:150px;height:95px;margin:0}.region-right{margin:0 65px 0 20px;padding:0}.story-link ::slotted(h3){line-height:20px;font-size:17px;letter-spacing:-.2px;margin:0}#description-slot-wrapper ::slotted(.story-teaser),.story-teaser{display:none}#date-slot-wrapper{font-size:12px;text-transform:uppercase;line-height:normal;display:block;font-family:HCo Ringside Narrow SSm,Arial Narrow,Arial,sans-serif;color:#141414;font-weight:200;padding-top:4px}}@media screen and (max-width:480px){.story-root{display:flex;padding:26px 0;margin:0;border-top:1px solid #e5e5e5;max-height:110px}.story-link{max-width:130px}.story-image,.story-link ::slotted(img){width:92px;height:58px;margin-right:12px}.region-right{margin:0 20px 0 0;padding:0}.story-link .story-title,.story-link ::slotted(h3){line-height:17px;font-size:15px;letter-spacing:-.2px;margin:0}#description-slot-wrapper ::slotted(.story-teaser),.story-teaser{display:none}#date-slot-wrapper{font-size:12px;text-transform:uppercase;line-height:normal;display:block;font-family:HCo Ringside Narrow SSm,Arial Narrow,Arial,sans-serif;color:#141414;font-weight:200;padding-top:4px}}#title-slot-wrapper,#title-slot-wrapper h3{color:var(--story-title-color,#002e5d);font-family:var(--story-title-font-family,\"HCo Ringside Narrow SSm\",Arial Narrow,Arial,sans-serif)}#description-slot-wrapper,#description-slot-wrapper p{font-family:var(--story-teaser-font-family,\"HCo Ringside Narrow SSm\",Arial Narrow,Arial,sans-serif);color:var(--story-teaser-color,#002e5d)}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function pad (hash, len) {
  while (hash.length < len) {
    hash = '0' + hash;
  }
  return hash;
}

function fold (hash, text) {
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

function foldObject (hash, o, seen) {
  return Object.keys(o).sort().reduce(foldKey, hash);
  function foldKey (hash, key) {
    return foldValue(hash, o[key], key, seen);
  }
}

function foldValue (input, value, key, seen) {
  var hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) {
    return fold(hash, 'null');
  }
  if (value === undefined) {
    return fold(hash, 'undefined');
  }
  if (typeof value === 'object') {
    if (seen.indexOf(value) !== -1) {
      return fold(hash, '[Circular]' + key);
    }
    seen.push(value);
    return foldObject(hash, value, seen);
  }
  return fold(hash, value.toString());
}

function toString (o) {
  return Object.prototype.toString.call(o);
}

function sum (o) {
  return pad(foldValue(0, o, '', []).toString(16), 8);
}

module.exports = sum;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(9) + "</style> <div class=\"root\"> <div class=\"output\"></div> <div class=\"story-template-wrapper slot-container\"> <slot id=\"story-template\"> <template> <byu-story story-id=\"\" class=\"news-child\" teaser> <span slot=\"story-category\" class=\"story-category\"></span> <img src=\"xxxHTMLLINKxxx0.60673634622691110.3077628887164787xxx\" slot=\"story-image\" class=\"story-image\" alt=\"Story Image\"> <h3 slot=\"story-title\" class=\"story-title\"></h3> <p slot=\"story-teaser\" class=\"story-teaser\"></p> <span slot=\"story-date\" class=\"story-date\"></span> </byu-story> </template> </slot> </div> </div>";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<style>" + __webpack_require__(10) + "</style> <div class=\"root story-root\"> <div id=\"image-slot-wrapper\"> <a class=\"story-link\" href=\"\"> <slot name=\"story-image\"></slot> </a> </div> <div class=\"region-right\"> <div id=\"category-slot-wrapper\"> <slot name=\"story-category\"></slot> </div> <div id=\"title-slot-wrapper\"> <a class=\"story-link\" href=\"\"> <slot name=\"story-title\"></slot> </a> </div> <div id=\"description-slot-wrapper\"> <slot name=\"story-teaser\"></slot> </div> <div id=\"date-slot-wrapper\"> <slot name=\"story-date\"></slot> </div> </div> </div>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ })
/******/ ]);
//# sourceMappingURL=components.js.map