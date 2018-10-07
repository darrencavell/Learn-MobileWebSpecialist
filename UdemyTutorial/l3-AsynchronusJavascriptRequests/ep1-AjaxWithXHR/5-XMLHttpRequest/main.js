function handleSuccess() { 
    const data = JSON.parse(this.responseText);
    console.log(data); 
}
function handleError() { console.log('Gagal'); }

const xhr = new XMLHttpRequest();
xhr.open('GET', 'name.json');
xhr.onload = handleSuccess;
xhr.onerror = handleError;
xhr.send();


console.log(xhr);