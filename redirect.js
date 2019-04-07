// Chrome
if (typeof browser == "undefined" && chrome) {
    var browser = chrome;
};

// store all patterns and redirected Urls
// the n-th pattern is corresponded with n-th redirected Url
var patternArray = [];
var redirectUrlArray = [];

// help add rules
function addRule(pattern, redirectUrl) {
    patternArray.push(pattern);
    redirectUrlArray.push(redirectUrl);
};

// match pattern for the URLs to redirect
addRule("https://www.google.com/recaptcha/api.js*", "https://recaptcha.net/recaptcha/api.js");
//addRule("http://*", "https://*");

// redirect function
// returns an object with a property `redirectURL`
// set to the new URL
function redirect(requestDetails) {
    console.log("Redirecting: " + requestDetails.url);

    var index = -1;
    for (var i = 0; i < patternArray.length; i++) {
        if ( - 1 != requestDetails.url.search(patternArray[i])) {
            index = i;
            break;
        };
    };

    return {
        redirectUrl: -1 == index ? requestDetails.url: redirectUrlArray[index]
    }
};

// add the listener,
// passing the filter argument and "blocking"
browser.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls: patternArray},
    ["blocking"]
);