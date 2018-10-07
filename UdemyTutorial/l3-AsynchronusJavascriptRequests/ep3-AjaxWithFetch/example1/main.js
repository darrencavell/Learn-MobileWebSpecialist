var searchedForText = 'panda';

fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`, {
    headers: {
        Authorization: 'Client-ID 3c6b8b5e16f7821124a15926e5bfad696056a7fad9ca5c53c7b07461141d0416'
    }
}).then(function (response) {
    return response.json();
}).then(addImage);

function addImage(data){
    debugger;
}