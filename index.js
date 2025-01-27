const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });


function loginUser(e){
    e.preventDefault();
    const formLogin = document.getElementById("formLogin");
    const email = formLogin.email?.value;
    const password = formLogin.password?.value;
    const currLocal = JSON.parse(localStorage.getItem("user")) || [];
    let exist = false;
    currLocal.forEach(el=>{
        if(el.email===email && el.password===password){
            exist = true;
        }
    })
    if(exist){
        window.location.href = "calender.html";
    }
    else{
        alert("Invalid email and password");
    }
}

function signupUser(e){
    e.preventDefault();
    console.log("entered");
    const formSignup = document.getElementById("formSignup");
    const name = formSignup.regname?.value;
    const email = formSignup.regemail?.value;
    const password = formSignup.regpassword?.value;
    let currLocal = JSON.parse(localStorage.getItem("user")) || [];
    const payload = {name, email, password};
    currLocal.push(payload);
    localStorage.setItem("user", JSON.stringify(currLocal));
    alert("User registered successfully");
    window.location.reload();
}
    
   