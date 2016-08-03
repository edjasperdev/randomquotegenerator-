// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

var quotes = [{	quote: "Those shoes are definitely bi-curious.",
				source: "Jack Donaghy", 
				citation: "Season 1", 
				year: "2013",
				tags: ["humor","avaiation"]
			},{	quote: "You know there are 17 million rats per person in Manhattan. You eat a pound of rat crap every year without even knowing it, huh?",
				source: "Dennis", 
				citation: "Season 1", 
				year: "2010",
				tags: ["glamour","humor"]
			},{ quote: "I don't have any money if that's what you're after. And I'm not one of those girls that does weird stuff in bed because they think they have to. If you're a gay guy looking for a beard, I don't do that anymore. And if you're trying to harvest my organs and sell them, I have an uncle who's a cop so don't even try it.",
				source: "Liz Lemon", 
				citation: "Season 1", 
				year: "",
				tags: ["education","poetry"]
			},{ quote: "From now on you write and shoot the whole season in two weeks, like Wheel of Fortune or Fox News.",
				source: "Jack Donaghy", 
				citation: "Season 6", 
				year: "",
				tags: [""]
			},{ quote: "I got rid of all my Colin Firth movies in case they consider it erotica.",
				source: "Liz Lemon", 
				citation: "Season 3", 
				year: "",
				tags: [""]
			},{ quote: "You look like that flashcard they told me means sadness.",
				source: "Jenna", 
				citation: "Season 7", 
				year: "",
				tags: [""]
			},{ quote: "Why are my arms so weak? It's like I did that pushup last year for nothing!",
				source: "Jenna", 
				citation: "Season 7", 
				year: "",
				tags: [""]
			},{ quote: "I assumed it was the bottle of wine with the card reading 'Dear Doritos, what about just selling bags full of your dust? I could put it on chicken or fish...'",
				source: "Jack Donaghy", 
				citation: "Season 7", 
				year: "",
				tags: [""]
			},{ quote: "My heart's pounding like I'm watching Oprah's farewell season.",
				source: "Liz Lemon", 
				citation: "Season 5", 
				year: "",
				tags: [""]
			},{ quote: "I can talk to animals. Well not talk to 'em. I can take commands from them.",
				source: "Liz Lemon", 
				citation: "Season 5", 
				year: "",
				tags: [""]
			}]


var getRandomQuote = function(){
	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}

var printQuote = function(){
	var thisQuote = getRandomQuote();
	console.log(thisQuote)
	var myString = '<p class="quote">'+thisQuote.quote+'</p><p class="source">'+thisQuote.source+'</p>'
      if(thisQuote.citation.length>0){
      	myString +='<span class="citation">'+thisQuote.citation+'</span>';
      }
      if(thisQuote.year.length>0){
      	myString +='<span class="year">'+thisQuote.year+'</span>';
      }

    document.getElementById('quote-box').innerHTML = myString;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



