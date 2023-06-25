let inputFields = document.getElementsByTagName("input");

let loginForm = document.getElementById("formL");





loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

     //console.log("form submitted");

    document.querySelectorAll('input.inputfield').forEach(item => {
        if (item.value == ""){
            console.log("One or more fields are empty");
            let closestSibling = item.nextElementSibling;
            let errorSibling = closestSibling.nextElementSibling.nextElementSibling;

            errorSibling.innerHTML = "This field cannot be blank";
            closestSibling.style.opacity = "1";
        }
    })
})


document.querySelectorAll('input.inputfield').forEach(item => {
  item.addEventListener('input',() => {
      if (item.value == ""){
          console.log("One or more fields are empty");
          let closestSibling = item.nextElementSibling;
          let successSibling = closestSibling.nextElementSibling;
          let errorSibling = successSibling.nextElementSibling;
  
          errorSibling.innerHTML = "This field cannot be blank";
          successSibling.style.opacity = "0";
          closestSibling.style.opacity = "1";
      } else {
        let closestSibling = item.nextElementSibling;
        let successSibling = closestSibling.nextElementSibling;
        let errorSibling = successSibling.nextElementSibling;

        errorSibling.innerHTML = " ";
        successSibling.style.opacity = "1";
        closestSibling.style.opacity = "0";
    }
  })
  
})