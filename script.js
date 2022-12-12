
function fNname() {
    let fname = document.getElementById("fName")
    let fnField = document.getElementById("firstName")

    const fnameCheck = /^[a-zA-z]{2,9}$/;
    
    if (fnField.value === "") {
        fname.classList.remove('success')
        fname.classList.add('error')
        return false;
    } else {
        if(fnameCheck.test(fnField.value)) {
            fname.classList.remove('error')
            fname.classList.add('success')
            return true;
        }
        fname.classList.remove('success')
        fname.classList.add('error')
        return false;
    }
}
    


function lname() {
    let lname = document.getElementById("lName")
    let lnField = document.getElementById("lastName")


    if (lnField.value === "") {
        lname.classList.remove('success')
        lname.classList.add('error')
        return false;
    } else {
        lname.classList.remove('error')
        lname.classList.add('success')
        return true;
    }
      
}

function userEmail() {
    let email = document.getElementById("email")
    let emailField = document.getElementById("emailDiv")

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (email.value === "") {
        emailField.classList.remove('success')
        emailField.classList.add('error')
        return false;
    } else {
        if (re.test(email.value)) {
            emailField.classList.remove('error')
            emailField.classList.add('success')
            return true;
        } else {
            emailField.classList.remove('success')
            emailField.classList.add('error')
            return false;
        }
    }
    
}

function phoneLine() {
    let telephone = document.getElementById("telephoneDiv")
    let telephoneField = document.getElementById("telephone")

    const telephoneCheck = /^[0-91-9]{2,11}$/;
    
    if (telephoneField.value === "") {
        telephone.classList.remove('success')
        telephone.classList.add('error')
        return false;
    } else {
        if(telephoneCheck.test(telephoneField.value)) {
            telephone.classList.remove('error')
            telephone.classList.add('success')
            return true;
        }
        telephone.classList.remove('success')
        telephone.classList.add('error')
        return false;
    }
}




function lname() {
    let lname = document.getElementById("lName")
    let lnField = document.getElementById("lastName")


    if (lnField.value === "") {
        lname.classList.remove('success')
        lname.classList.add('error')
        return false;
    } else {
        lname.classList.remove('error')
        lname.classList.add('success')
        return true;
    }
      
}    

document.getElementById('submitForm').addEventListener('click',function (e) {
    e.preventDefault();
    const gender = document.getElementsByName('gender')
    let genderValue;
    gender.forEach(i => {
        if(i.checked){
            genderValue = i.value
        }
    });
    alert(genderValue)

    const firstNameField = fNname();
    const lastNameFIeld = lname();
    const emailAddressField = userEmail();
    const telephoneField = phoneLine();

    if(document.getElementsByName('gender')) {   
        var selectedValue = document.getElementById('gender').value;  
        alert("Selected Radio Button is: " + selectedValue);    
    }
        
    if (firstNameField && lastNameFIeld && emailAddressField && telephoneField) {
        alert('success');
    } else {
        alert('rejected')
    }
})
