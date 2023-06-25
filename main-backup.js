let username = document.getElementById("username");
 
 let email = document.getElementById("email");
 let password = document.getElementById("password");

 let loginForm = document.getElementById("formL");

 let errorMsg = document.getElementsByClassName("error");
 let errorMsg1 = document.getElementById("usererror");


 let successIcon = document.getElementsByClassName("pass");
 let failureIcon = document.getElementsByClassName("failure");



 loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

     console.log("form submitted");

     if (username.value == ""){
           console.log("it is empty");
         errorMsg1.innerHTML = "username cannot be blank";
         failureIcon.style.opacity = "1";
        

     } 
    // else{
    //     errorMsg1[0].innerHTML = "";
    //     successIcon[0].style.opacity = "1";
        
    })
    

    
    
    


//});


 
// let id = (id) => document.getElementById(id); 

// let classes = (classes) => document.getElementsByClassName(classes);


// let username = id("username"),
// email = id ("email"),
// password = id ("password"),
// form = id ("form"),
// errorMsg = document.classes("error"),
// successIcon = document.classes("pass"),
// failureIcon = document.classes("failure");


// form.addEventListener("submit" , (e) => {
//     e.preventDefault();

//     errorMsg[2].innerHTML = "HEOOEEJFAAJC";
//     }))
