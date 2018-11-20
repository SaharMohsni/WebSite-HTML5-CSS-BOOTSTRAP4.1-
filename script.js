
/************************* Animation ***********************/
const textFields= document.querySelectorAll('.textAria')
document.querySelector('.navbutton').addEventListener('click',function(){
  document.querySelector('.nav').classList.toggle('nav--show')
})

/********************************* getElements ****************************/
const text=document.getElementById("msgValidation")
const starsBtns=document.querySelectorAll('#stars')
const textArias=document.querySelectorAll('.inputtxt')


/********************** eventListner *********************************/
document.getElementById('newsletterBtn').addEventListener("click",function(event){isnewsemailValid(event)})

document.querySelector(".confirmFeedback").addEventListener("click", function(event){
    verify(event)
  })


/********************************* functions ******************************/

/* newsletter */

function isnewsemailValid() {
    const regex=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    event.preventDefault()
   if (regex.test(document.querySelector('#email').value)!==true)
   {
       text.innerHTML="Not a valid mail"
       return false
   }
   text.innerHTML = "great"
   return true

}

/* feedback */
  function verify(event) {
    event.preventDefault()
    if (isEmpty() &&  isMailValid()) {
      alert("Thank you for you attention to our services");
      
    }
    return false;
    
  }
  
  function isEmpty() {
    for (let text of textArias) {
      if (text.value.trim() === "") {
        alert("Please Fill All Required Fields");
        return false;
      }
    }
   
    return true;
  }
  
  
  function isMailValid() {
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (reg.test(document.querySelector(".feedbackEmail").value) !==true) {
      alert("Not a valid mail");
      return false;
    }
    return true
  }
  /* /feedback */
  /* stars */
for (let btn of starsBtns){
btn.onclick = function(event) {
  if (event.target.style.color = "red") {
    event.target.style.color ="yellow";
  } else {
    event.target.style.color ="red";
  }
}
}

/* /stars */