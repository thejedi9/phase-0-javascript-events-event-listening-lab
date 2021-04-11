console.log("Jede's JS console check!")
function addingEventListener() {

const input = document.getElementById('input');
    function clickAlert() {
        alert('I was clicked!');
    } 
input.addEventListener('click', clickAlert);

console.log(this.input)
  
}
addingEventListener()



    
    

 


    
