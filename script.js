function checkStrength(){
    let pwd =document.getElementById("password").value;
    let output = document.getElementById("output");
    let strength = 0;
    if (pwd.length >=9) strength++;
    if (/[A-Z]/.test(pwd)) strength++;
    if (/[a-z]/.test(pwd)) strength++;
    if (/[@#$%^&*]/.test(pwd)) strength++;
    if (strength<= 3){
        output.innerHTML = "weak password";
        output.style.color ="red" ;
    }
    else if (strength <=5){
        ooutput.innerHTML ="Medium password";
        output.style.color ="purple";
    }
    else{
        output.innerHTmL ="strong Password";
        output.style.colorm = "blue";
    }
}