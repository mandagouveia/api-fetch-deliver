function fetchAPIData() {
    fetch("https://api.kanye.rest/")
        .then(response => response.json())
        .then(data => {
            const quote = document.querySelector("#keyne")
            quote.innerHTML = ""
            quote.append(data.quote)
        })
}