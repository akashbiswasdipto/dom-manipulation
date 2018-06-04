/* Task 1 */
var heading = document.getElementById('heading')
console.log(heading.innerText)
/* Task 2 */
//task2a
var textBtn= document.getElementById('TextBtn2')
textBtn.addEventListener('click',function(){
    var task2 = document.getElementById('task2a')
    var paragraph = document.createElement('p')
    paragraph.innerText="Hello World"
    task2.appendChild(paragraph)
    
})

//task2b
function changeBGcolor(event){
    var body= document.getElementsByTagName('body')[0]
    if(event.target.innerText=="red"){
        body.style.backgroundColor='red'
    }
    if(event.target.innerText=="green"){
        body.style.backgroundColor='green'
    }
}

//task2c

function redirectToGoogle(){
    window.location.assign('http://google.com')
}
/* Task 4 using jQuery */
