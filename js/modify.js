<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/hint.css/2.4.1/hint.min.css">// 重定向浏览器地址
pjax.site_handleResponse = pjax.handleResponse;
pjax.handleResponse = function(responseText, request, href, options) {
    Object.defineProperty(request, 'responseURL', {
        value: href
    });
    pjax.site_handleResponse(responseText, request, href, options);
}