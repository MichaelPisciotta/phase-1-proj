let button = document.getElementById('get-quote').addEventListener('click', () => fetchJoke())
//grabs button from html and adds event listener 

function fetchJoke(){
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data =>{
        // debugger
        const postedQuote = data.quote
        displayQuote(postedQuote)
    }
    )
}
//calls info from kanye tweets API and returns usable JSON data
//quote is extracted from data and set to variable to be used in displayQuote 

function displayQuote(postedQuote){
    const p = document.createElement('p')
    p.textContent = postedQuote
    let btn = document.createElement('button')   
    btn.addEventListener('click', addToSaved) //when you click on the '+' button, call addToSaved()
    btn.textContent = '+'
    p.appendChild(btn)
    document.getElementById('quote-print-div').appendChild(p)

}
//creates a p tag and sets its value to whatever postedQuote is
//then creates button and adds eventlistener: when click run function addToSaved
//the button is then given the value of '+' and appended to the paragraph tag 
//finally I grab the div where i want quotes to print into and append the p tag which nows also has the button

function addToSaved(e){
document.getElementById('save-quote-list').appendChild(e.target.parentNode) //grab savequotes div and append quote being passed in -- e=click, tgt='+'btn, parent=quote
const deleteButton = document.createElement('button') 
deleteButton.textContent = '-'
debugger
e.target.parentNode.appendChild(deleteButton) //trying to add the - button
deleteButton.addEventListener('click', deleteButton) //trying to add EL to - button
}

function deleteButton(e){
    debugger
e.target.parentNode.remove() 
}
//tried creating function that, when called, would remove the entire quote line

//PROBLEM: 
//1. cant figure out how to replace + with a - and create a button to delete items from saved list
//2. cant figure out how to make quotes print one at a time, the new one replacing the old












//practice using console and debugger to try things 
//practice DOM manipulation 
//make sure declaring variable with const or let
//practice using iterator methods and be aware of what im calling them on 

