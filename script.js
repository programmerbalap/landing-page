// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    const data = {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status
    };
    return data;
}

function isNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
            return false;
        }
    }
    return true;
}

function checkboxIsChecked() {
    const statusCheckbox = document.getElementById("status");
    return statusCheckbox.checked;
}

function validateFormData(data) {
    if (data.name == null || data.city == null || data.email == null || data.zipCode == null || !checkboxIsChecked() || !isNumber(data.zipCode)) return false;
    return true;
};



function submit(event) {
    event.preventDefault();
    const warning = document.getElementById("warning");

    console.log(handleGetFormData());
    if (!validateFormData(handleGetFormData())) {
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else {
        warning.innerHTML = "";
    }
}

const kirim = document.getElementById("submit-form");
kirim.addEventListener("click", submit);