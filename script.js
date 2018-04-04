const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const inputFields = document.querySelectorAll('input');
const saveBtn = document.querySelector('button');

table.style.display = 'none';

saveBtn.addEventListener('click', () => {
    table.style.display = 'table'
    const tr = document.createElement('tr');
    const inputArr = [];
    for (let input of inputFields) {
        if (input.value) {
            inputArr.push(input.value);
            input.value = '';
        }
    }
    if (inputArr.length === inputFields.length) {
        inputArr.forEach(val => {
            const td = document.createElement('td');
            td.textContent = val;
            if (val === 'true') {
                td.className = 'true';
            } else if (val === 'false') {
                td.className = 'false';
            }
            tr.append(td);
            tableBody.append(tr);
        });  
    } else {
        table.insertAdjacentHTML('afterend', `<div class="alert">Please make sure to enter all the fields! <span>&times</span></div>`)
        const closeBtn = document.querySelector('.alert > span');
        closeBtn.addEventListener('click', () => {
            const alertContainer = closeBtn.parentElement;
            alertContainer.style.opacity = '0';
            setTimeout(function() {
                alertContainer.style.display = 'none';            
            }, 600);
        });
    }
});
