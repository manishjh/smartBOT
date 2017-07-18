var submitbtn = document.querySelector('#botsubmit');
var inputstr = document.querySelector('#inputbox');
var list = document.querySelector('#list')

submitbtn.addEventListener('click', abc);

function abc() {
    var http = new XMLHttpRequest();
    var url = 'http://localhost:57929/api/smartbot/GetStringfromBot?inputstring=' + inputstr.value;
    var method = 'POST';
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
