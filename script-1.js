var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/submit', true);
xhr.setRequestHeader('Content-Type', 'application/json');

var data = {
    key1: 'value1',
    key2: 'value2'
};

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            var response = xhr.responseText;
            console.log(response);
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    }
};

xhr.send(JSON.stringify(data));
