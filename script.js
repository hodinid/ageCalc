const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function myAge() {
    ageCalculate(`myBirth`)
}
function until() {
    ageCalculate(`untilDown`)
    console.log('hello');
}
function ageCalculate(me) {
    let today = new Date();
    if (me == `untilDown`) {
        untilDate = Date.parse(`2023-08-31`);
        todayDate = Date.parse(today);
        untilDays = Math.ceil((untilDate-todayDate)/1000/60/60/24);
        if (untilDays > 0){
            document.querySelector('.untilDays').textContent = untilDays;
        } else {
            document.querySelector('.untilDays').textContent = 0;
        }
    } else {
        let inputDate = new Date(document.getElementById('input-date').value);
        if (me == `myBirth`) {
            document.getElementById('input-date').value = '2005-01-24';
            inputDate = new Date('2005-01-24');
        }
        let birthMonth, birthDate, birthYear;

        let birthDetails = {
            date: inputDate.getDate(),
            month: inputDate.getMonth() + 1,
            year: inputDate.getFullYear()
        }
        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth() + 1;
        let currentDate = today.getDate();

        leapChecker(currentYear);

        birthYear = currentYear - birthDetails.year;
        if (currentMonth >= birthDetails.month) {
            birthMonth = currentMonth - birthDetails.month;
        } else {
            birthYear--;
            birthMonth = 12 + currentMonth - birthDetails.month;
        }
        if (currentDate >= birthDetails.date) {
            birthDate = currentDate - birthDetails.date;
        } else {
            birthMonth--;
            let days = months[currentMonth - 2];
            birthDate = days + currentDate - birthDetails.date;
            if (birthMonth < 0) {
                birthMonth = 11;
                birthYear--;
            }
        }
        displayResult(birthDate, birthMonth, birthYear);
    }
}

function leapChecker(year) {
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    }
};

function displayResult(bDate, bMonth, bYear) {
    document.querySelector("#years").textContent = bYear;
    document.querySelector("#months").textContent = bMonth;
    document.querySelector("#days").textContent = bDate;
}