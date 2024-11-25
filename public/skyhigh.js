document.addEventListener('DOMContentLoaded', function () {
    const buyBtn = document.getElementById('buy-btn')
    const sellBtn = document.getElementById('sell-btn')
    const rentalBtn = document.getElementById('rental-btn')

    const buyDetails = document.getElementById('buy-details')
    const sellDetails = document.getElementById('sell-details')
    const rentalDetails = document.getElementById('rental-details')

    function hideAllDetails() {
        buyDetails.style.display = 'none'
        sellDetails.style.display = 'none'
        rentalDetails.style.display = 'none'
    }
    function resetButtonColors() {
        buyBtn.classList.remove('sbr')
        sellBtn.classList.remove('sbr')
        rentalBtn.classList.remove('sbr')
    }

    buyBtn.addEventListener('click', function () {
        hideAllDetails()
        buyDetails.style.display = 'block'
        resetButtonColors()
        buyBtn.classList.add('sbr')
    })
    sellBtn.addEventListener('click', function () {
        hideAllDetails()
        sellDetails.style.display = 'block'
        resetButtonColors()
        sellBtn.classList.add('sbr')
    })
    rentalBtn.addEventListener('click', function () {
        hideAllDetails()
        rentalDetails.style.display = 'block'
        resetButtonColors()
        rentalBtn.classList.add('sbr')
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const sellBtn1 = document.getElementById('sell-btn1')
    const rentalBtn1 = document.getElementById('rental-btn1')
    function resetButtonColors() {
        sellBtn1.style.backgroundColor = 'white'
        rentalBtn1.style.backgroundColor = 'white'
    }
    sellBtn1.addEventListener('click', function () {
        resetButtonColors()
        sellBtn1.style.backgroundColor = '#0A5FAE'
    })
    rentalBtn1.addEventListener('click', function () {
        resetButtonColors()
        rentalBtn1.style.backgroundColor = '#0A5FAE'
    })
})

function validateName() {
    let nameField = document.getElementById('name-input')
    nameField.value = nameField.value.replace(/[^a-zA-Z]/g, "")
}
function validatePhone() {
    let phoneField = document.getElementById('phone-input')
    phoneField.value = phoneField.value.replace(/[^0-9]/g, "")
}

function requestCall() {
    let name = document.getElementById('name-input').value.trim()
    let phone = document.getElementById('phone-input').value.trim()
    if (name.length !== 5 || phone.length !== 5) {
        alert('Please Fill the Details!')
    } else {
        console.log('Name:', name)
        console.log('Phone:', phone)
        alert('Call Connected')
    }
}

document.querySelector('.image-container1').addEventListener('mousehover', function () {
    console.log('Hovered image')
})

const sellBtn1 = document.getElementById('sell-btn1')
const rentalBtn1 = document.getElementById('rental-btn-1')

submitBtn.addEventListener('click', function () {
    if (!sellBtn1.checked && !rentalBtn1.checked) {
        alert('Please choose category')
        return
    }
})
function toggleBtn(button) {
    button.classList.toggle('clicked')
}
function startPosting() {
    const postingname = document.getElementById('postingName').value
    const postingphone = document.getElementById('postingPhone').value
    if (postingname === "" || postingphone === "") {
        alert('Please fill name and phone field')
        return
    }
    alert('posting successfully')
    document.getElementById('postingName').value = ""
    document.getElementById('postingPhone').value = ""
    document.getElementById('startPosting').classList.add('clicked')
}

// function toggleAnswer(){
//     alert('Quality of life is better in a high-rise apartment. There will be better ventilation, better quality air, excellent views, zero noise, and superior privacy in an apartment which is on the higher floor.')
// }
function allReviews(){
    window.location.assign('https://www.google.com/search?client=firefox-b-d&q=flat+sale+reviews')
}
function FAQ(){
    window.location.assign('https://www.saanvinirman.com/real-estate-faq')
}
function tandc(){
    window.location.assign('https://www.investopedia.com/financial-edge/0810/7-must-have-real-estate-contract-conditions.aspx')
}

