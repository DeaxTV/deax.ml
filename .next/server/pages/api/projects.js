"use strict";
(() => {
var exports = {};
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 6346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const data = [
        {
            id: 1,
            image: "https://cdn.discordapp.com/attachments/923237135996297218/985893855868100668/7ea019acc46c0115c420d5a7bc3a6291.png?size=4096",
            name: "TopBots",
            description: "Do you want to expand and improve your Discord bot? Here TopBots are here for you!",
            link: "https://topbots.ga",
            language: "Next.js",
            languageIcon: "./static/techs/nextjs.svg"
        },
        {
            id: 2,
            image: "https://cdn.discordapp.com/attachments/923237135996297218/985893856128143440/indir_1.png?size=4096",
            name: "Award",
            description: "AwardBot is an advanced giveaway bot. Written in Discord.js. You can set conditions for the giveaways, automatically deliver the prizes, and lock the giveaways.",
            link: "https://awardbot.tk",
            language: "Next.js",
            languageIcon: "./static/techs/nextjs.svg"
        }
    ];
    res.status(200).json(data);
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6346));
module.exports = __webpack_exports__;

})();