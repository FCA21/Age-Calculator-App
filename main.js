const dayIn = document.getElementById('dayIn');
const monthIn = document.getElementById('monthIn');
const yearIn = document.getElementById('yearIn');
const dayout = document.getElementById('dayout');
const monthout = document.getElementById('monthout');
const yearout = document.getElementById('yearout');
const btn = document.getElementById('btn');
const errorStyle = '0.5px solid var (--Light-red)';
const day = dayIn.value;
const month = monthIn.value;
const year = yearIn.value;
const birthday = `${year}-${month}-${day}`;

btn.addEventListener('click', (e) => {
    e.preventDefault();

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
        days += getNoOfDays(year, month - 1);
    }

    dayout.innerText = days;
    monthout.innerText = months;
    yearout.innerText = years;
});


function getNoOfDays(year, month) {
    return new Date(year, month, 0).getDate();
}

dayIn.addEventListener('blur', () => {
    validateDay();
});

const validateDay = () => {
    if (dayIn.value < 1 || dayIn.value > 31) {
        dayIn.style.border = errorStyle;
        return false;
    } else {
        dayIn.style.border = 'none';
        return true;
    }
};

monthIn.addEventListener('blur', () => {
    validateMonth();
});

const validateMonth = () => {
    if (monthIn.value < 1 || monthIn.value > 12) {
        monthIn.style.border = errorStyle;
        return false;
    } else {
        monthIn.style.border = 'none';
        return true;
    }
};

yearIn.addEventListener('blur', () => {
    validateYear();
});

const validateYear = () => {
    if (yearIn.value < 1900 || yearIn.value > new Date().getFullYear()) {
        yearIn.style.border = errorStyle;
        return false;
    } else if (year =='') {
        showMessage(yearIn, 'This field is required', errorStyle);
        return false;
    } else {
        yearIn.style.border = 'none';
        return true;
    }
};
