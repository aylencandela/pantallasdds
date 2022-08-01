//Form Steps
const step0 = document.getElementById('form-step-0')
const step1 = document.getElementById('form-step-1')
const step2 = document.getElementById('vehiculo-particular')
const ecologico = document.getElementById('transporte-ecologico')

step1.classList.add('d-none')
step2.classList.add('d-none')
ecologico.classList.add('d-none')


const toStep1 = document.getElementById('js-next-step')
const toStep2 = document.getElementById('go-step-2')
const toStep0 = document.getElementById('go-step-0')


toStep1.addEventListener('click', function (event) {
    event.preventDefault()
    goToStep(step0, step1)
}, false)

toStep2.addEventListener('click', function (event) {
    event.preventDefault()
    goToStep(step1, step2)
}, false)

toStep0.addEventListener('click', function (event) {
    event.preventDefault()
    goToStep(step1, step0)
}, false)

function goToStep (removeStep, revealStep) {
    removeStep.classList.add('d-none')
    revealStep.classList.remove('d-none')
}

$("#transporte").on("change", function() {
    console.log((this).value)
    $("#" + $(this).value).show().siblings().hide();
});

// function changeForm(form) {
//     for (var i=0; i<form.length; i++){
//       var form_op = form.options[i].value;
//       if (form_op == form.value) {
//         document.getElementsByName(form_op)[0].style.display = "block";
//       }
//       else {
//         document.getElementsByName(form_op)[0].style.display = "none";
//       }
//      }
// }