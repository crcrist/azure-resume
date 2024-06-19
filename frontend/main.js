window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCounter();
})


const functionAPI = 'https://getresumecountcc.azurewebsites.net/api/GetResumeCounter?code=0RyyG7B-HKA14TtLkpgnReEh-wSMvrWdm8nzoscHZmrOAzFu5fDWyA%3D%3D';

const getVisitCounter = () => {
    let count = 30;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}