"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 2575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method !== 'POST') return res.json({
        success: false,
        message: 'Invalid method.'
    });
    let { username , email , content  } = req.body;
    let _ = await fetch(process.env.CONTACT_HOOK, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'deax.ml | Contact Form',
            attachments: [],
            embeds: [
                {
                    title: 'Contact - ' + username,
                    type: "rich",
                    color: 5193214,
                    fields: [
                        {
                            name: 'Email',
                            value: email || 'N/A'
                        },
                        {
                            name: 'Username',
                            value: username || 'N/A'
                        },
                        {
                            name: 'Content',
                            value: content || 'N/A'
                        }
                    ]
                }
            ]
        })
    });
    try {
        res.send(_);
    } catch  {
        res.status(500);
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2575));
module.exports = __webpack_exports__;

})();