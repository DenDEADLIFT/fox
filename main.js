(()=>{"use strict";function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,(void 0,o=function(n,t){if("object"!==e(n)||null===n)return n;var l=n[Symbol.toPrimitive];if(void 0!==l){var i=l.call(n,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(i.key),"symbol"===e(o)?o:String(o)),i)}var o}const t=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.sectionItem=n,this.sectionElements=t}var t,l;return t=e,(l=[{key:"_toggleHidden",value:function(){this.sectionElements.forEach((function(e){e.classList.contains("sections_hidden")||e.classList.toggle("sections_hidden")}))}},{key:"_handleClick",value:function(){this.sectionItem.classList.remove("sections_hidden")}}])&&n(t.prototype,l),Object.defineProperty(t,"prototype",{writable:!1}),e}();var l={mainMenu:document.querySelector(".main-menu"),mainMenuElements:document.querySelectorAll(".main-menu__element"),mainMenuElement:document.querySelector(".main-menu__element"),mainPageElement:document.querySelector("#main-page-element"),mainRefillElement:document.querySelector("#main-refill-element"),mainRepairElement:document.querySelector("#main-repair-element"),mainContactsElement:document.querySelector("#main-contacts-element"),mainCompanyElement:document.querySelector("#main-company-element"),sectionElement:document.querySelector(".section-element"),allSectionElements:document.querySelectorAll(".section-element"),mainSection:document.querySelector(".main-section"),refillSection:document.querySelector(".refill-section"),repairSection:document.querySelector(".repair-section"),contactSection:document.querySelector(".contact-section"),companySection:document.querySelector(".company-section"),sections:document.querySelector(".sections"),logo:document.querySelector(".header__logo")};const i={selectors:l,menuClasses:{MainMenuClass1:new t(l.mainSection,l.allSectionElements),MainMenuClass2:new t(l.refillSection,l.allSectionElements),MainMenuClass3:new t(l.repairSection,l.allSectionElements),MainMenuClass4:new t(l.contactSection,l.allSectionElements),MainMenuClass5:new t(l.companySection,l.allSectionElements)}};i.selectors.logo.addEventListener("click",(function(){i.menuClasses.MainMenuClass1._toggleHidden(),i.menuClasses.MainMenuClass1._handleClick()})),i.selectors.mainPageElement.addEventListener("click",(function(){i.menuClasses.MainMenuClass1._toggleHidden(),i.menuClasses.MainMenuClass1._handleClick()})),i.selectors.mainRefillElement.addEventListener("click",(function(){i.menuClasses.MainMenuClass2._toggleHidden(),i.menuClasses.MainMenuClass2._handleClick()})),i.selectors.mainRepairElement.addEventListener("click",(function(){i.menuClasses.MainMenuClass3._toggleHidden(),i.menuClasses.MainMenuClass3._handleClick()})),i.selectors.mainContactsElement.addEventListener("click",(function(){i.menuClasses.MainMenuClass4._toggleHidden(),i.menuClasses.MainMenuClass4._handleClick()})),i.selectors.mainCompanyElement.addEventListener("click",(function(){i.menuClasses.MainMenuClass5._toggleHidden(),i.menuClasses.MainMenuClass5._handleClick()}))})();