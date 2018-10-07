var responseContainer = document.getElementById('response-container');
var searchedForText = 'asdasd';

fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID 3c6b8b5e16f7821124a15926e5bfad696056a7fad9ca5c53c7b07461141d0416'
    }
}).then(response => response.json())
.then(addImage)
.catch(e => requestError(e, 'image'));

function addImage(data){
    console.log(data);
    let htmlContent = '';
    const firstImage = data.results[0];

    if(firstImage){
        htmlContent += `<figure>
            <img src="${firstImage.urls.small}" alt="${searchedForText}">
            <figcaption>${searchedForText}</figcaption>
        </figure>`;
    }else{
        htmlContent = 'Unfortunately, no image was returned!'
    }
    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}

function requestError(e, part){
    console.log(e);
    responseContainer.insertAdjacentHTML('beforeend', `<p>Oh no! There was an error making a request for the ${part}</p>`);
}