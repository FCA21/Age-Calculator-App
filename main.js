const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('monthIn');
const yearIn = document.getElementById('yearIn');
const dayOut = document.getElementById('dayOut');
const monthOut = document.getElementById('monthOut');
const yearOut = document.getElementById('yearOut');
const btn = document.getElementById('btn');
const errorStyle = '0.5px solid var (--Light-red)';

document.addEventListener('DOMContentLoaded', () => {
    


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const day = dayIn.value;
    const month = monthIn.value;
    const year = yearIn.value;
    const birthday = `${year}-${month}-${day}`;
    
    if (validateDay() && validateMonth() && validateYear()) {
        console.log('Valid');
    } else {
        return;
    }

    let years = new Date().getFullYear() - new Date(birthday).getFullYear();
    let months = new Date().getMonth() - new Date(birthday).getMonth();
    let days = new Date().getDate() - Number(day);
    if (months < 0) {
        years--;
        months = 12 + months;
    }

    if(days < 0) {
        days += getNoOfDays(year, month);
    }

    dayOut.innerText = days;
    monthOut.innerText = months;
    yearOut.innerText = years;
});


function getNoOfDays(year, month) {
    return new Date(year, month, 0).getDate();
}

dayIn.addEventListener('blur', () => {
    validateDay();
});

const validateDay = () => {
    if (dayIn.value < 1 || dayIn.value > 31) {
        showError(dayIn, 'Must be between 1 and 31', errorStyle);
        return false;
    }  
    else {
       // hideError(dayIn);
        return true;
    }
};

monthIn.addEventListener('blur', () => {
    validateMonth();
});

const validateMonth = () => {
    if (monthIn.value < 1 || monthIn.value > 12) {
        showError(monthIn, 'Must be between 1 and 12', errorStyle);
        return false;
    } else {
        //hideError(monthIn);
        return true;
    }
};

yearIn.addEventListener('blur', () => {
    validateYear();
});

const validateYear = () => {
    if (yearIn.value < 1900 || yearIn.value > new Date().getFullYear()) {
        showerror (yearIn, 'Must be between 1900 and the current year', errorStyle);
        return false;
    } else if (yearIn =='') {
        showMessage(yearIn, 'This field is required', errorStyle);
        return false;
    } else {
        yearIn.style.border = 'none';
        return true;
    }
};

//validamos el día

function validDay(year, month, day) {
    if (day < 1 || day > getNoOfDays(year, month)) return false;
    return true;
    }

    //validamos mes

    function validMonth(month) {
        if (month < 1 || month > 12) return false;
        return true;
    }


    //validamos año

    function validYear(year, month, day) {
        const secondDate = new Date();
        const firstDate = new Date(`${year}-${month}-${day}`);
        if (firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0)) return true;
        return false;
    }

    //mensaje

    function showError(input, message) {
        input.style.border = errorStyle;
        input.nextElementSibling.innerText = message;
        input.nextElementSibling.style.color = 'red';
    }

});