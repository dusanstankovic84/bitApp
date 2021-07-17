var jokeTextElement = document.getElementById('joke-text');
var button = document.getElementById('btn-get-joke');
button.onclick = get_joke;

function get_joke() {
    //disable button so user cannot spam clicks and requests.
    button.disabled = true;
    jokeTextElement.innerHTML = 'Loading joke...';
    //get joke from api
    fetch('https://api.chucknorris.io/jokes/random') //get response from API
        .then((response) => response.json()) //convert ReadableStream to JSON object
        .then((joke) => {
            jokeTextElement.innerHTML = joke.value;
        }).catch((reason) => {
        jokeTextElement.innerHTML = `<span class="error">Error occurred: ${reason.message}`;
        console.error(reason.message);
    }).finally(() => {
        //"finally" always happens at the end, regardless of success or failure

        //enable button so user can click it again
        button.disabled = false;
    })
}
