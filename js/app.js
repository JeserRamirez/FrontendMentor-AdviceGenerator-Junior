let loadApp = () => {
    getAdvice();
}

let getAdvice = () => {
    const timestamp = new Date().getTime(); // Genera un timestamp único
    const apiUrl = `https://api.adviceslip.com/advice?timestamp=${timestamp}`;
    
    const adviceID = document.getElementById('advice')
    const adviceText = document.getElementsByClassName('advice')

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            adviceID.innerHTML = data.slip.id;
            adviceText[0].innerHTML = data.slip.advice;
        })
        .catch(error => console.error('Error al recuperar el consejo:', error));
}

let addAdvice = () => {
    getAdvice();
}