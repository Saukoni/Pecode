let form = document.querySelectorAll('.form');

form.forEach((item) => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
    });
}); 



function initMap() {
    const map = document.querySelector('#map');
    let options = {
        zoom: 15,
        center: {
            lat: 49.8410063,
            lng: 24.0939604,
        },
    };
    let myMap = new google.maps.Map(map, options);

    const marker = new google.maps.Marker({
        position: {
            lat: 49.8410063,
            lng: 24.0939604,
        },
        map: myMap,
        icon: 'img/pin.png',
    });
}