(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7585:
/***/ ((module) => {

"use strict";

module.exports = {
    base: 'https://deax.ml',
    meta: {
        title: 'deax | Backend Developer',
        url: 'https://deax.ml',
        description: 'mhmm, what?',
        themeColor: '#4F3DFE',
        image: 'https://www.google.com/favicon.ico'
    },
    titleSuffix: 'deax.ml',
    titles: {
        '/': 'Home',
        '/projects': 'Projects',
        '/repositories': 'Repositories',
        '/contact': 'Contact'
    }
};


/***/ }),

/***/ 2735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2964);


const Footer = ({ better  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        /*#__PURE__*/ children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "bg-zinc-200/20 bg-opacity-95 dark:bg-opacity-95 w-full px-6 lg:px-12 py-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:flex justify-between w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "cursor-pointer flex items-center font-semibold text-2xl",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "bg-zinc-200 text-xs px-2 py-1 mr-2 rounded-lg",
                                    children: "v2.0"
                                }),
                                "deax",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {
                                        zIndex: 4
                                    },
                                    className: "relative text-cIndigo",
                                    children: "."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:flex space-x-6 items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-left mt-2 lg:mt-0 lg:text-right",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "deax.ml \xa9 2020 - ",
                                        new Date().getFullYear(),
                                        ", All rights reserved."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Developed with ❤️ by clqu & edited by deax"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 2410:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2964);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Header() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsOpen(isOpen);
    }, [
        isOpen
    ]);
    const Items = [
        {
            label: 'Home',
            redirect: '/',
            icons: {
                default: 'fal fa-home',
                active: 'fa fa-home'
            }
        },
        {
            label: 'Projects',
            redirect: '/projects',
            icons: {
                default: 'fal fa-compass',
                active: 'fa fa-compass'
            }
        },
        {
            label: 'Repositories',
            redirect: '/repositories',
            icons: {
                default: 'fal fa-compass',
                active: 'fa fa-compass'
            }
        },
        {
            label: 'Contact',
            redirect: '/contact',
            icons: {
                default: 'fal fa-phone-alt',
                active: 'fa fa-phone-alt'
            }
        }, 
    ];
    const { 0: scrolled , 1: setScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        currentScrollHeight: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        window.onscroll = ()=>{
            const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
            if (scrolled != newScrollHeight) {
                setScrolled({
                    currentScrollHeight: newScrollHeight
                });
            }
        };
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    zIndex: 99
                },
                id: "header-clqu",
                className: `${(scrolled === null || scrolled === void 0 ? void 0 : scrolled.currentScrollHeight) > 70 && '!py-4 shadow-xl bg-white'} fixed px-6 lg:px-36 py-12 w-full transition-all duration-200`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:grid lg:grid-cols-12 flex justify-between items-center w-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-3 w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "cursor-pointer font-semibold text-2xl",
                                    children: [
                                        "deax",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-cIndigo",
                                            children: "."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hidden col-span-6 gap-x-4 w-full lg:flex justify-center",
                            children: Items.map((i, _)=>{
                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: i === null || i === void 0 ? void 0 : i.redirect,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative flex flex-col h-full items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `cursor-pointer transition-all duration-200 ${router.asPath === i.redirect ? 'text-cIndigo font-semibold' : 'text-black/50 hover:text-black/100 font-normal'}`,
                                                children: i.label
                                            }),
                                            router.asPath === i.redirect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-cIndigo h-0.5 w-[110%] rounded-t-xl absolute -bottom-2"
                                            })
                                        ]
                                    })
                                }, _);
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-2 col-span-3 lg:w-full lg:flex justify-end",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        setIsOpen(!isOpen);
                                        if (isOpen) document.documentElement.classList.remove('overflow-hidden');
                                        if (!isOpen) document.documentElement.classList.add('overflow-hidden');
                                    },
                                    className: "lg:hidden text-center w-10 h-10 text-center flex items-center justify-center text-white cursor-pointer transition-all duration-200 bg-cIndigo hover:opacity-90 px-6 py-2 rounded-md",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa fa-bars"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: "/talk",
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-center w-48 text-white cursor-pointer transition-all duration-200 bg-cIndigo hover:opacity-90 px-6 py-2 rounded-md",
                                        children: "Let's Talk"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                as: react__WEBPACK_IMPORTED_MODULE_4__.Fragment,
                show: isOpen ? true : false,
                enter: "transform transition-all duration-200",
                enterFrom: "translate-x-full opacity-0",
                enterTo: "translate-x-0 opacity-100",
                leave: "transform transition-all duration-200",
                leaveTo: "translate-x-full opacity-0",
                leaveFrom: "translate-x-0 opacity-100",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        zIndex: 9999
                    },
                    className: "p-6 bg-zinc-100 h-full fixed w-full top-0 left-0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between w-full items-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "cursor-pointer font-semibold text-2xl",
                                    children: [
                                        "clqu",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-cIndigo",
                                            children: "."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    onClick: ()=>{
                                        setIsOpen(!isOpen);
                                        document.documentElement.classList.remove('overflow-hidden');
                                    },
                                    className: "cursor-pointer hover:bg-zinc-300 transition-all duration-200 w-12 h-12 flex justify-center items-center bg-zinc-200 rounded-xl",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fal fa-times text-xl"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "space-y-6 flex flex-col mt-6 w-full",
                            children: Items.map((i, _)=>{
                                /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    href: i === null || i === void 0 ? void 0 : i.redirect,
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "relative flex flex-col h-full items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: `cursor-pointer hover:bg-zinc-300  w-full h-full px-4 py-2 rounded-lg transition-all duration-200 ${router.asPath === i.redirect ? 'text-cIndigo font-semibold' : 'text-black/50 hover:text-black/100 font-normal'}`,
                                                children: i.label
                                            }),
                                            router.asPath === i.redirect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-cIndigo h-full w-1 rounded-xl absolute left-0"
                                            })
                                        ]
                                    })
                                }, _);
                            })
                        })
                    ]
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ progress)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./src/libraries/progress.jsx






class NextNProgress extends (external_react_default()).Component {
    static defaultProps = {
        color: '#29D',
        startPosition: 0.3,
        stopDelayMs: 200,
        height: 3,
        showOnShallow: true
    };
    timer = null;
    routeChangeStart = (_, { shallow  })=>{
        if (!shallow || this.props.showOnShallow) {
            external_nprogress_default().set(this.props.startPosition);
            external_nprogress_default().start();
        }
    };
    routeChangeEnd = (_, { shallow  })=>{
        if (!shallow || this.props.showOnShallow) {
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                external_nprogress_default().done(true);
            }, this.props.stopDelayMs);
        }
    };
    render() {
        const { color , height  } = this.props;
        return jsx_runtime_.jsx((style_default()), {
            id: "c378c7d95d6b5ea6",
            dynamic: [
                height
            ],
            children: `#nprogress .bar{background:#000;
position:fixed;
z-index:9999999;
top:0;
left:0;
width:100%;
height:${height}px}`
        });
    }
    componentDidMount() {
        const { options  } = this.props;
        if (options) {
            external_nprogress_default().configure(options);
        }
        router_default().events.on('routeChangeStart', this.routeChangeStart);
        router_default().events.on('routeChangeComplete', this.routeChangeEnd);
        router_default().events.on('routeChangeError', this.routeChangeEnd);
    }
    componentWillUnmount() {
        router_default().events.off('routeChangeStart', this.routeChangeStart);
        router_default().events.off('routeChangeComplete', this.routeChangeEnd);
        router_default().events.off('routeChangeError', this.routeChangeEnd);
    }
}
NextNProgress.propTypes = {
    color: (external_prop_types_default()).string,
    startPosition: (external_prop_types_default()).number,
    stopDelayMs: (external_prop_types_default()).number,
    height: (external_prop_types_default()).number,
    showOnShallow: (external_prop_types_default()).bool,
    options: (external_prop_types_default()).object
};
/* harmony default export */ const progress = (NextNProgress);


/***/ }),

/***/ 4845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Static_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2410);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8817);
/* harmony import */ var tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_animations_shift_away_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Static_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2735);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _libraries_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9047);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7585);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Static_Header__WEBPACK_IMPORTED_MODULE_1__]);
_components_Static_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function MyApp({ Component , pageProps  }) {
    const betters = [
        'design',
        'write',
        'develop',
        'moderate'
    ];
    let { 0: better , 1: setBetter  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(betters[Math.floor(Math.random() * betters.length)]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setBetter(better);
    }, [
        better
    ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: router.asPath ? ((_config__WEBPACK_IMPORTED_MODULE_8___default()) === null || (_config__WEBPACK_IMPORTED_MODULE_8___default()) === void 0 ? void 0 : (_config__WEBPACK_IMPORTED_MODULE_8___default().titles)[router === null || router === void 0 ? void 0 : router.asPath]) ? ((_config__WEBPACK_IMPORTED_MODULE_8___default()) === null || (_config__WEBPACK_IMPORTED_MODULE_8___default()) === void 0 ? void 0 : (_config__WEBPACK_IMPORTED_MODULE_8___default().titles)[router === null || router === void 0 ? void 0 : router.asPath]) + ' | ' + ((_config__WEBPACK_IMPORTED_MODULE_8___default()) === null || (_config__WEBPACK_IMPORTED_MODULE_8___default()) === void 0 ? void 0 : (_config__WEBPACK_IMPORTED_MODULE_8___default().titleSuffix)) : 'Blank | deax.ml' : 'Loading... | deax.ml'
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Static_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_libraries_progress__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                style: {
                    zIndex: 2
                },
                className: "pt-36 relative min-h-screen",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    better: better,
                    ...pageProps
                })
            }),
            router.asPath === '/' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            zIndex: 1
                        },
                        className: "hidden lg:block absolute layout-colored-background"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            zIndex: 1
                        },
                        className: "hidden lg:block bottom-0 rotate-[96deg] fixed layout-colored-background"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Static_Footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                better: better
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8817:
/***/ (() => {



/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [51,964], () => (__webpack_exec__(4845)));
module.exports = __webpack_exports__;

})();