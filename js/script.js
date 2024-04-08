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


  function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
  }
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
