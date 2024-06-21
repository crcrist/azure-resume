window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCounter();
})

const localAPI = 'http://localhost:7071/api/GetResumeCounter'
const functionAPI = 'https://getresumecountcc.azurewebsites.net/api/GetResumeCounter?code=fnTt2jrxlQjDmzjKjvIZT2jBwEOKM2vVfH9JMCIfq7v_AzFu8kLK1g%3D%3D';

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