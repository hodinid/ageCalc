const months = [ 31,28,31,30,31,30,31,31,30,31,30,31 ];
function myAge(){
    ageCalculate(true)
}
function ageCalculate(me){
    let today = new Date();
    let inputDate = new Date(document.getElementById('input-date').value);
    if (me){
        document.getElementById('input-date').value = '2005-01-24';
        inputDate = new Date('2005-01-24');
    }
    let birthMonth, birthDate, birthYear;

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth()+1,
        year: inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);

    birthYear =  currentYear-birthDetails.year;
    if (currentMonth>=birthDetails.month){
        birthMonth = currentMonth-birthDetails.month;
    } else {
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }
    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    } else {
        birthMonth--;
        let days = months[currentMonth-2];
        birthDate = days + currentDate - birthDetails.date;
        if (birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate, birthMonth, birthYear);
}

function leapChecker(year){
    if (year%4==0 || (year%100 == 0 && year%400==0)){
        months[1]=29;
    }
};

function displayResult(bDate, bMonth, bYear){
    document.querySelector("#years").textContent = bYear;
    document.querySelector("#months").textContent = bMonth;
    document.querySelector("#days").textContent = bDate;
}