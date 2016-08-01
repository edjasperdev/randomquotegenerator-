// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [{	quote: "We produce more failed pilots than the French air force.",
				source: "Jack Donague", 
				citation: "30 Rock", 
				year: "2013"
			},{	quote: "Listen up, Fives. A Ten is speaking.",
				source: "Janna Maroney", 
				citation: "30 Rock", 
				year: "2010"
			},{
				quote: "Lemon, I would like to teach you something. I would like to be Michelle Pfeiffer to your angry black kid who learns that poetry is just another way to rap.",
				source: "Jack Donague", 
				citation: "", 
				year: ""
			}]


var getRandomQuote = function(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}

var printQuote = function(){
	var thisQuote = getRandomQuote();
	var myString = '<p class="quote">'+thisQuote.quote+'</p><p class="source">'+thisQuote.source+'</p>'
      if(thisQuote.citation.length>0){
      	myString +='<span class="citation">'+citation+'</span>';
      }
      if(thisQuote.year.length>0){
      	myString +='<span class="year">'+year+'</span>';
      }
    document.getElementById('quote-box').innerHTML("hi")
}



