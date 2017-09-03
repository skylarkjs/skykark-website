define([], function() {
    var config = {
        "name": "Skylark Home Page",
        "title": "Skylark.js - Official Site",
        "baseUrl": "",
        "homePath": "/",
        "page": {
            "routeViewer": "#pageContainer"
        },
        "plugins": {
            "navbar": {
                hookers: ["starting"],
                controller: {
                    type: "scripts/plugins/navbar/NavbarController"
                }
            },
            // "search": {
            //     hookers: ["starting"],
            //     controller: {
            //         type: "scripts/plugins/search/SearchController"
            //     }
            // }
        },
        "routes": {
            "home": {
                pathto: "/",
                data: {
                    name: 'home',
                    navName: "Home"
                },
                controller: {
                    type: "scripts/routes/home/HomeController"
                }
            },
            "guide": {
                pathto: "/guide",
                data: {
                    name: 'guide',
                    navName: "Guide",
                    search: {
                        container: ".entities"
                    }
                },
                controller: {
                    type: "scripts/routes/guide/GuideController"
                }
            },
            "api": {
                pathto: "/api",
                data: {
                    name: 'api',
                    navName: "API",
                    search: {
                        container: ".entities"
                    }
                },
                controller: {
                    type: "scripts/routes/api/ApiController"
                }
            },
            "examples": {
                pathto: "/examples",
                data: {
                    name: 'examples',
                    navName: "Examples",
                    search: {
                        container: ".entities"
                    }
                },
                lazy: true,
                controller: {
                    type: "scripts/routes/examples/ExamplesController"
                }
            }
        }
    };
    return config;
});
