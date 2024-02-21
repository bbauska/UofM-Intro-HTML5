function highlightWord(element, searchFor, classWrapper){

// Gets the text from within the selected element
// Could also be written as $(element).text() for text only
// Define blank array for word variations (uppercase, lowercase ect)

var textString = $(element).html(),
    wordArray = [];

// Add the search word as it's written
wordArray.push(searchFor);
// Add the search word with a capital letter
wordArray.push(searchFor.substr(0,1).toUpperCase() + searchFor.substr(1, searchFor.length - 1));
// Add a fully uppercase version
wordArray.push(searchFor.toUpperCase());
// Add a fully lowercase version
wordArray.push(searchFor.toLowerCase());


// Loop through all the searchFor variations
for (var i = 0; i < wordArray.length; i++) {

// If text within the string equals a search word, add a span element around it
// Update the text string for the next sequence in the loop
if (textString.indexOf(wordArray[i]) >= 0){ 
var findAll = new RegExp(wordArray[i], 'g');
textString = textString.replace(findAll, '<span class="' + classWrapper + '">' + wordArray[i] + '</span>');
}

}

// Replace the original string with the new highlighted version
$(element).html(textString);

}

// Selector element containing string
// Word to search for
// Class to give span element added to matches
highlightWord('.accesskey', 'accesskey', 'highlight');
