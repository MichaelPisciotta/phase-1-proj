let button = document.getElementById('get-quote').addEventListener('click', () => fetchJoke())

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

function displayQuote(postedQuote){
    const p = document.createElement('p')
    p.textContent = postedQuote
    let btn = document.createElement('button')   
    btn.addEventListener('click', addToSaved) //when you click on the '+' button, call addToSaved()
    btn.textContent = '+'
    p.appendChild(btn)
    document.getElementById('quote-print-div').appendChild(p)

}

function addToSaved(e){
document.getElementById('save-quote-list').appendChild(e.target.parentNode) //e=click, tgt='+'btn, parent=quote
// const deleteButton = document.createElement('button') 
// deleteButton.textContent = '-'
// e.target.parentNode.appendChild(deleteButton)
// deleteButton.addEventListener('click', deleteButton)
}


// function deleteButton(e){
// e.target.parentNode.remove(e)
// }




//figure out how to make it so only one quote shows at a time 
//add button to printed items that allows you to click and add them to favorite list 
//add button to items in favorite list to remove from the list 




//practice using console and debugger to try things 
//practice DOM manipulation 
//make sure declaring variable with const or let
//practice using iterator methods and be aware of what im calling them on 

