var mymap = L.map('mapid').setView([-6.240397, 106.629341], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGFycmVuY2F2ZWxsIiwiYSI6ImNqbWVpZGR0cjB5MzEza28xNjczMTR0bncifQ.DRJCOQd_26eExVw4mEsFJA'
}).addTo(mymap);

var arr_marker = [
    [
        [-6.257153, 106.616516],
        "<h2>Summarecon Digital Center</h2><hr><img class='thumbnail' src='../images/sdc.jpg'><br><b>Address:</b> Jalan Scientia Boulevard, Curug Sangereng, Kelapa Dua, Curug Sangereng, Klp. Dua, Tangerang, Banten 15810<br><b>Phone:</b> (021) 29171222"
    ],
    [
        [-6.243570, 106.628239], 
        "<h2>Paramount Serpong</h2><hr><img class='thumbnail' src='../images/paramount.jpg'><br><b>Address:</b> Jalan Scientia Boulevard, Curug Sangereng, Kelapa Dua, Curug Sangereng, Klp. Dua, Tangerang, Banten 15810<br><b>Phone:</b> (021) 54200999"
    ],
    [
        [-6.243821, 106.629079], 
        "<h2>Plaza Summarecon</h2><hr><img class='thumbnail' src='../images/plazasummarecon.jpg'><br><b>Address:</b> Jl. Gading Serpong Boulevard, Pakulonan Bar., Klp. Dua, Tangerang, Banten 15810<br><b>Phone:</b> (021) 54210008"
    ],
    [
        [-6.234563, 106.626719], 
        "<h2>Penabur Gading Serpong</h2><hr><img class='thumbnail' src='../images/penabur.jpg'><br><b>Address:</b> Jl. Klp. Gading Bar., Pakulonan Bar., Klp. Dua, Tangerang, Banten 15113<br><b>Phone:</b> (021) 54200377"
    ],
    [
        [-6.236952, 106.636310], 
        "<h2>Sekolah Terpadu Pahoa</h2><hr><img class='thumbnail' src='../images/pahoa.jpg'><br><b>Address:</b> Summarecon Serpong, Jl. Ki Hajar Dewantara No.1, Pakulonan Bar., Klp. Dua, Tangerang, Banten 15810<br><b>Phone:</b> (021) 54203355"
    ],
];
for (m of arr_marker) {
    L.marker(m[0]).addTo(mymap).bindPopup(m[1]);
}