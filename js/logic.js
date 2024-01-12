//DOM content load for loading elements from html
document.addEventListener('DOMContentLoaded', function () {

    //lets define our api url(like kotlin retrofit XD)
    const PREDICTOR_API_URL = "https://api.genderize.io/?name=";

    const userInputtedFormData = {
        name: "",
        gender: undefined,
    };
    
    // inputs values 
    const nameInput = document.querySelector("#name");
    const form = document.querySelector("#form");
    const savedAnswer = document.querySelector("#saved-answer");

    //buttons initializing
    const saveButton = document.querySelector("#save");
    const clearButton = document.querySelector("#clear");

    //results of api callings
    const genderHeader = document.querySelector("#gender-header");
    const genderPrediction = document.querySelector("#gender-prediction");

    let fullname ;

    //this event handler will help us to mange clear events
    clear.addEventListener("click", () => {

        if (localStorage.getItem(fullname)) {
          localStorage.removeItem(fullname);
          fullname = ""
          savedAnswer.innerHTML = "Saved Submits Area"
          alert("data is cleared");
        }else{
            alert("data is already cleared");
        }
    
      });
    
      //this event handler will help us to mange save events
      saveButton.addEventListener("click", () => {
        if (userInputtedFormData.gender !== undefined && userInputtedFormData.name !== '') {
            if(userInputtedFormData.name.length < 255){
                var english = /^[A-Za-z ]*$/;
                var isCorrect = true
                for (i=0;i<userInputtedFormData.name.length;i++) {
                    if (!english.test(userInputtedFormData.name[i]) ){
                        isCorrect = false
                        break; 
                    }
                }

                if(isCorrect){
                    localStorage.setItem(userInputtedFormData.name, userInputtedFormData.gender);
                }else{
                    alert("sorry our predictor wont other alphabet characters");
                }
        
            }else{
                alert("maximum limitation for inputted name is 255 character");
            }
          
        }else {
            alert("complete form");
        }
      });
    
    
    
});