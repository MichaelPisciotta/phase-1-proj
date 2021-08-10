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
    document.getElementById('quote-print-div').appendChild(p)


}




//figure out how to make it so only one quote shows at a time 
//add button to printed items that allows you to click and add them to favorite list 
//add button to items in favorite list to remove from the list 




//practice using console and debugger to try things 
//practice DOM manipulation 
//make sure declaring variable with const or let
//practice using iterator methods and be aware of what im calling them on 

