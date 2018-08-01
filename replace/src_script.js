(function () {
	var script = document.createElement('script');
	var url = 'http://rawgit.com/AdamSpannbauer/bookmarklet_101/master/replace/yeet_replace.js';
	script.src = url + '?' + new Date().getTime();
    document.body.appendChild(script);
})();
