var submitbtn = document.querySelector('#botsubmit');
var inputstr = document.querySelector('#inputbox');
var list = document.querySelector('#list')

submitbtn.addEventListener('click', abc);

function abc() {
    var http = new XMLHttpRequest();
    var url = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/1eb87c6b-34ec-4634-8ebd-1f9025d341f4?subscription-key=fa7de06304bc4f258dd87d323d6963f0&verbose=true&timezoneOffset=0&q='
        + inputstr.value;
    var method = 'GET';
    http.open(method, url);
    var listItemQuestion = document.createElement('li');
    listItemQuestion.textContent = inputstr.value;
    list.appendChild(listItemQuestion);
    inputstr.value = "";
    var listItemAnswer = document.createElement('li');
    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200){
            listItemAnswer.textContent = http.response;
            list.appendChild(listItemAnswer);
           
        }
        else if (http.readyState === XMLHttpRequest.UNSENT && http.status !== 200) {
            listItemAnswer.textContent = "Sorry try again";
            list.appendChild(listItemAnswer);
        }
        //this is working code
    }
    console.log(http);
    http.send();
}
