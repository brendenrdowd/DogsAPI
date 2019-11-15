const searchUrl = "https://dog.ceo/api/breeds/image/random/"

function getDogs(limit = 3) {
    const url = searchUrl + limit
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log('ok')
                return response.json();
            }
            throw new Error(response.statusText);
        })
        .then(responseJson => displayResults(responseJson))
        .catch(err => {
            $('#js-error-message').text(`Something went wrong: ${err.message}`);
        });
}

function displayResults(responseJson) {
    const res = responseJson.message
    $('#results-list').empty();
    for (let i = 0; i < res.length; i++) {
        $('#results-list').append(
            `<li>
            <img src="${res[i]}" alt="random dog image">
        </li>`
        )
    };
    $('#results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const limit = $('#js-limit').val();
        getDogs(limit)
    })
}

$(watchForm)