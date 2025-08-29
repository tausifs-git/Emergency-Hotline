// -------------------- Shared Functions --------------------
function getInnerTextInInteger(id){
    item = parseInt(document.getElementById(id).innerText);
    return item;
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


// -------------------- Event Listeners on heart icons --------------------
const hearts = document.getElementsByClassName('heart');
for (const eachHeart of hearts) {
    eachHeart.addEventListener('click', function(){
        const add = getInnerTextInInteger('heart-count') + 1;
        setInnerText('heart-count', add);
        eachHeart.classList.remove('fa-regular');
        eachHeart.classList.add('fa-solid', 'text-red-500');
    });
}


// -------------------- Event Listeners on call buttons -----------------------
function calculateRemainingCoins(){
    const coin = getInnerTextInInteger('coin-count') - 20;
    if (coin < 0) {
        alert("You don't have sufficient coins to place a call!\n\nTerminating this call.");
        return false;
    } 
    else {
        setInnerText('coin-count', coin);
        return true;
    }
}

function alertMessage(serviceName, serviceNumber){
    alert("Calling " + serviceName + " : " + serviceNumber + "... \n\nPress OK to continue.");
}

document.getElementById('call-btn-1').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-1').innerText;
    const serviceNumber = document.getElementById('service-number-1').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-2').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-2').innerText;
    const serviceNumber = document.getElementById('service-number-2').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-3').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-3').innerText;
    const serviceNumber = document.getElementById('service-number-3').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-4').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-4').innerText;
    const serviceNumber = document.getElementById('service-number-4').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-5').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-5').innerText;
    const serviceNumber = document.getElementById('service-number-5').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-6').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-6').innerText;
    const serviceNumber = document.getElementById('service-number-6').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-7').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-7').innerText;
    const serviceNumber = document.getElementById('service-number-7').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-8').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-8').innerText;
    const serviceNumber = document.getElementById('service-number-8').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});

document.getElementById('call-btn-9').addEventListener('click', function(){
    const serviceName = document.getElementById('service-name-9').innerText;
    const serviceNumber = document.getElementById('service-number-9').innerText;
    if (calculateRemainingCoins() === true) {
        alertMessage(serviceName, serviceNumber);
    }
});


// -------------------- Copy Functionalities -----------------------
function copyAlert(serviceNumber){
    alert(serviceNumber + ' is copied');
}

function copy(serviceNumber) {
    navigator.clipboard.writeText(serviceNumber)
        .then(() => {
            copyAlert(serviceNumber);
        })
        .catch(err => {
            alert('Failed to copy the emergency number!');
        });
}

document.getElementById('copy-btn-1').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-1').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-2').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-2').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-3').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-3').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-4').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-4').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-5').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-5').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-6').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-6').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-7').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-7').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-8').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-8').innerText;
    copy(serviceNumber);
});

document.getElementById('copy-btn-9').addEventListener('click', function(){
    const count = getInnerTextInInteger('copy-count') + 1;
    setInnerText('copy-count', count);
    const serviceNumber = document.getElementById('service-number-9').innerText;
    copy(serviceNumber);
});

