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
//Microsoft Career
addRule("https://www.google.com/recaptcha/api.js*", "https://recaptcha.net/recaptcha/api.js");
// Coursera
addRule("https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js", "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.min.js");
//add into hosts:  52.84.246.72 d3c33hcgiwev3.cloudfront.net

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