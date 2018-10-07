const responseContainer = document.getElementById('responses');

const searchedForText = 'hippos';

//////////////
// UNSPLASH //
//////////////

function addImage() { 
    let htmlContent = '';
    const data = JSON.parse(this.responseText);

    for (m in data.results) {
        htmlContent += `
            <figure>
                <img class="thumbnail" src="${data.results[m].urls.regular}" alt="${searchedForText}">
                <figcaption>${searchedForText} by ${data.results[m].user.name}</figcaption>
            </figure>
        `;
    }

    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
 }
const unsplashRequest = new XMLHttpRequest();
unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
unsplashRequest.onload = addImage;
unsplashRequest.onerror = function(err){
    requestError(err, 'image');
}
unsplashRequest.setRequestHeader('Authorization', 'Client-ID 3c6b8b5e16f7821124a15926e5bfad696056a7fad9ca5c53c7b07461141d0416');
unsplashRequest.send();

/////////////
// NYTimes //
/////////////

function addArticles() {
    let htmlContent = '';
    const data = JSON.parse(this.responseText);

    for (m in data.response.docs) {
        htmlContent += `
            <ul>
                <li><a href="${data.response.docs[m].web_url}">${data.response.docs[m].headline.main}</a></li>
            </ul>
        `;
    }

    responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
}
const articleRequest = new XMLHttpRequest();
articleRequest.onload = addArticles;
articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6a7af101015d4418a55dc4f79cdbf336`);
articleRequest.send();