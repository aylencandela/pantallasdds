//Forms
const step0 = document.getElementById('form-step-0')
const step1 = document.getElementById('form-step-1')
const step3 = document.getElementById('form-step-3')
const step4 = document.getElementById('form-step-4')
const step5 = document.getElementById('form-step-5')


const particular = document.getElementById('vehiculo-particular')
const contratado = document.getElementById('servicio-contratado')
const publico = document.getElementById('transporte-publico')
const ecologico = document.getElementById('transporte-ecologico')

//Hiding forms
step1.classList.add('d-none')
step3.classList.add('d-none')
step4.classList.add('d-none')
step5.classList.add('d-none')
particular.classList.add('d-none')
contratado.classList.add('d-none')
publico.classList.add('d-none')
ecologico.classList.add('d-none')

//Navigation
const buttonToStep0 = Array.from(document.getElementsByClassName('go-step-0'))
const buttonToStep1 = Array.from(document.getElementsByClassName('go-step-1'))
const buttonToStep2 = Array.from(document.getElementsByClassName('go-step-2'))
const buttonToStep3 = Array.from(document.getElementsByClassName('go-step-3'))
const buttonToStep4 = Array.from(document.getElementsByClassName('go-step-4'))
const buttonToStep5 = Array.from(document.getElementsByClassName('go-step-5'))


function goToStep (step) {
    let otherForms = Array.from(document.getElementsByClassName('form-step'))
    otherForms.forEach(f => {
        f.classList.add('d-none')
    });
    step.classList.remove('d-none')
}

buttonToStep0.forEach(b => {
    b.addEventListener('click', function (event) {
        event.preventDefault()
        goToStep(step0)
    }, false)
}) 

buttonToStep1.forEach(b => {
    b.addEventListener('click', function (event) {
        event.preventDefault()
        goToStep(step1)
    }, false)
})

//este varia segun el valor seleccionado
buttonToStep2.forEach(b => {
    b.addEventListener('click', function (event) {
        event.preventDefault()
        let select = document.getElementById('transporte').value
        let selected = document.getElementById(select)
        goToStep(selected)
    }, false)
})

buttonToStep3.forEach(b => {
    b.addEventListener('click', function (event) {
        event.preventDefault()
        goToStep(step3)
    }, false)
})

buttonToStep4.forEach(b => {
    b.addEventListener('click', function (event) {
        event.preventDefault()
        goToStep(step4)
    }, false)
})

buttonToStep5.forEach(b => {
    b.addEventListener('click', function (event) {
        event.preventDefault()
        goToStep(step5)
    }, false)
})

// $("#transporte").on("change", function() {
//      $("#" + $(this).value).show().siblings().hide();
// });
