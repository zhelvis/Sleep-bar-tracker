
// Remove and edit icons in SVG format
var editSVG = '<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M28.608 5.56899L26.631 7.54499C26.4 7.77799 26.022 7.77799 25.789 7.54499L22.443 4.19899C22.21 3.96599 22.21 3.58799 22.443 3.35399L24.421 1.37699C24.943 0.852994 25.792 0.852994 26.317 1.37699L28.609 3.67099C29.131 4.19499 29.131 5.04299 28.608 5.56899ZM25.073 8.94399L14.131 19.893C13.901 20.285 13.523 20.285 13.29 20.054L9.944 16.707C9.711 16.473 9.711 16.095 9.944 15.862L20.886 4.91399C21.119 4.68199 21.494 4.68199 21.728 4.91399L25.074 8.26099C25.306 8.49499 25.306 8.87299 25.073 8.94399ZM12.274 21.44L7.527 23.066L7.439 23.097C7.294 23.13 7.135 23.089 7.022 22.977C6.909 22.864 6.87 22.706 6.904 22.56L6.933 22.474L8.559 17.724L8.589 17.635C8.609 17.589 8.641 17.544 8.677 17.506C8.852 17.332 9.136 17.332 9.31 17.506L12.489 20.687C12.663 20.863 12.663 21.145 12.489 21.319C12.45 21.359 12.408 21.388 12.361 21.409L12.274 21.44ZM15.5 5.99999H3V27H24V14.5C24 13.671 24.671 13 25.5 13C26.328 13 27 13.671 27 14.5V28.5C27 28.707 26.958 28.905 26.882 29.084C26.654 29.622 26.121 30 25.5 30H1.5C0.671 30 0 29.328 0 28.5V4.49999C0 3.67199 0.671 2.99999 1.5 2.99999H15.5C16.329 2.99999 17 3.67099 17 4.49999C17 5.32799 16.328 5.99999 15.5 5.99999Z" fill="#22C064"/>';
var removeSVG = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.51 20.917L21.296 23.023L11.554 13.881L2.139 23.022L0 20.916L9.687 11.511L0 2.106L2.139 0L11.555 9.141L21.297 0.001L23.511 2.107L13.488 11.512L23.51 20.917Z" fill="#22C064"/>';

// On #addRecord click, if there is any text inside input field,
// adds list item to the records list
document.getElementById('addRecord').addEventListener('click', () => {
    var value = document.getElementById('typeRecord').value;
    if (value) {
        addRecord(value);
    };
});

// Creates a new item to the records list from scratch
function addRecord(inputValue) {
    
    var item = document.createElement('li');
    item.innerText = inputValue;

    
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerHTML = editSVG;
    
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;
    // Deletes related record on #remove button click
    remove.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
    });





    buttons.appendChild(edit);
    buttons.appendChild(remove);
    item.appendChild(buttons);

    var list = document.getElementsByClassName('sleeps')[0];
    list.appendChild(item);
};

document.getElementById('test').addEventListener('click', function () {
    const yandexKey = '9aa5ebc7-818b-443c-a827-b5f829bb6412';
    const origin = 'https://api.weather.yandex.ru/v1/forecast?lat=55.75396&lon=37.620393&extra=false';

    fetch('https://api.weather.yandex.ru/v1/forecast?lat=55.75396&lon=37.620393&extra=false',{
        headers: {
            'X-Yandex-API-Key': yandexKey,
            'Access-Control-Allow-Origin': origin,
        }
    }).then(function(response) {
        return response.json();
    }).then(function (yandex) {
        console.log(JSON.stringify(yandex));
    });
});


