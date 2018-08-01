(function() {
  var paragraphs = document.getElementsByTagName('p');
  for (var i = 0; i < paragraphs.length; i++) {
  	// count words in p tag
  	pWordCount = paragraphs[i].innerHTML.split(' ').length;
  	// replace each word with YEET
  	if (pWordCount > 0) {
  		paragraphs[i].innerHTML = 'YEET'.repeat(pWordCount);
  	}
  }
})();
