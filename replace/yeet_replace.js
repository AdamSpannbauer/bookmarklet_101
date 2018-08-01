(function() {
  var paragraphs = document.getElementsByTagName('p');
  for (var i = 0; i < paragraphs.length; i++) {
  	// console.log(paragraphs[i].innerHTML);
  	// count words in p tag
  	var pWordCount = paragraphs[i].innerHTML.split(' ').length;
  	console.log('word count ' + pWordCount);
  	// replace each word with YEET
  	if (pWordCount > 0) {
  		paragraphs[i].innerHTML = 'YEET '.repeat(pWordCount);
  	}
  }
})();
