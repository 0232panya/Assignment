
// function validationForm (){
//     const name = document.getElementById("online-id");
//     const password = document.getElementById("password");
//     const button = document.getElementById('submitbutton');

//     if(name.length === 0 && password.length === 0){
//         alert("please Fill the form");
//     }else{
//         button.classList.add('active')
//     }

// }

document.addEventListener('input', function() {
    const input1 = document.getElementById('online-id').value;
    const input2 = document.getElementById('password').value;
    const button = document.getElementById('submitbutton');

    if (input1 && input2) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

document.getElementById('submitButton').addEventListener('click', function() {
    const button = this;
    button.disabled = true;
    button.innerHTML = '<div class="spinner"></div>';

});

