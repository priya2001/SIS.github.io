const displayTableData = document.getElementById('tBody')

fetch('http://localhost:3000/api/1')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const tableData = `
            <th>${element.registrationNumber}</th>
            <th> ${element.firstName + ` ` + element.lastName}</th>
            <td> ${element.FatherName}</td>
            <td> ${element.course} </td>
            <td>${element.MobileNumber} </td>
        `
            displayTableData.innerHTML = tableData;
            console.log(tableData);
        })
        
    })
    .catch((err) => {
        console.log(err);
    })



    const displayTableRow = document.getElementById('tBody2')
fetch('http://localhost:3000/api/2')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const tableData2 = `
        
            <th>${element.registrationNumber}</th>
            <th> ${element.firstName + ` ` + element.lastName}</th>
            <td> ${element.FatherName}</td>
            <td> ${element.course} </td>
            <td>${element.MobileNumber} </td>
        `
            displayTableRow.innerHTML = tableData2;
            console.log(tableData2);
        })
        
    })
    .catch((err) => {
        console.log(err);
    })
    const displayTableRow3 = document.getElementById('tBody3')
fetch('http://localhost:3000/api/3')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const tableData3 = `
        
            <th>${element.registrationNumber}</th>
            <th> ${element.firstName + ` ` + element.lastName}</th>
            <td> ${element.FatherName}</td>
            <td> ${element.course} </td>
            <td>${element.MobileNumber} </td>
        `
            displayTableRow3.innerHTML = tableData3;
            console.log(tableData3);
        })
        
    })
    .catch((err) => {
        console.log(err);
    })
fetch('http://localhost:3000/api/4')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const tableData3 = `
        
            <th>${element.registrationNumber}</th>
            <th> ${element.firstName + ` ` + element.lastName}</th>
            <td> ${element.FatherName}</td>
            <td> ${element.course} </td>
            <td>${element.MobileNumber} </td>
        `
            displayTableRow3.innerHTML = tableData3;
            console.log(tableData3);
        })
        
    })
    .catch((err) => {
        console.log(err);
    })