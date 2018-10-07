var searchedForText = 'pooh';
var imageContainer = document.getElementById('image-container');
var articleContainer = document.getElementById('article-container');

// UNSPLASH

function addImage(data){
    console.log(data);
    const firstImage = data.results[0];

    imageContainer.insertAdjacentHTML('afterbegin', `<figure>
        <img src="${firstImage.urls.small}" alt="${searchedForText}"></img>
        <figcaption>${firstImage.slug}</figcaption>
    </figure>`)
}

$.ajax({
    url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
    headers: {
        Authorization: 'Client-ID 3c6b8b5e16f7821124a15926e5bfad696056a7fad9ca5c53c7b07461141d0416'
    }
}).done(addImage);

// NYTIMES

function addArticle(data){
    console.log(data);
    const firstArticle = data.response.docs[0];
    console.log(firstArticle);

    articleContainer.insertAdjacentHTML('afterbegin', `<div>
        <a href="${firstArticle.web_url}">${firstArticle.snippet}</a>
        <h2>${firstArticle.headline.main}</h2>
    </div>`);
}

$.ajax({
    url: `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=6a7af101015d4418a55dc4f79cdbf336`
}).done(addArticle);