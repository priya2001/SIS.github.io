
const doct = document.getElementById('loggerName')

fetch('http://localhost:3000/api/info')
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            const auth = ` <h3 class="text-center mt-2">Welcome Back, ${element.firstName}</h3>`
            doct.innerHTML = auth
        })

    })
    .catch(err => console.log(err))



const displaydata = document.getElementById('personalDetails')

fetch("http://localhost:3000/api/info")
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        data.forEach(element => {
            // const fName = `<span>Regitration Number ` + element.registrationNumber + `</span>`
            const fName = `
            <div class="container mt-5">
            <div class="row ">
                <div class="col-1">

                </div>
                <div class="col-10 shadow rounded bg-light">
                    <h3 class="pt-3 text-center">Personal Details</h3>
                    <div class="row m-3 p-3">
                        <div class="col-1">

                        </div>
                        <div class="col-8">
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Registration Number : ${element.registrationNumber}</span>
                                </div>
                            </div>

                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Year/Semester : ${element.year}</span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Student Name : ${element.firstName + ` ` + element.lastName}</span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Father's Name : ${element.FatherName} </span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Mother's Name : ${element.MotherName} </span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Date of Birth : ${element.DateofBirth} </span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Category : ${element.Category} </span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Mobile Number : ${element.MobileNumber} </span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Email : ${element.email} </span>
                                </div>
                            </div>
                            <div class="row pt-1 pb-1 m-2">
                                <div class="col">
                                    <span>Course : ${element.course} </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            
                        </div>
                    </div>
                </div>
                <div class="col-1">

                </div>
            </div>
        </div>


        <div class=" container mt-5" id="scrollspyHeading1">
            <div class="row">
                <div class="col-1">

                </div>
                <div class="col-10  shadow rounded bg-light">
                    <h3 class="pb-3 text-center">Qualifications</h3>
                    <div class="row mx-3 mb-3 mt-1 p-3">
                        <div class="col">
                            <h4 class="text-center pt-1">Previous Qualification</h4>
                            <div class="row mx-4 p-3">
                                <h5 class="text-center pt-3">High School</h5>
                                <div class="m-1 pt-2">Roll Number : ${element.highSchoolRollNum} </div>
                                <div class="m-1 pt-2">Passing Year : ${element.highSchoolPassing} </div>
                                <div class="m-1 pt-2">Percentage : ${element.highSchoolPercent} </div>
                                <h5 class="text-center pt-3">Intermediate/Diploma</h5>
                                <div class="m-1 pt-2">Roll Number : ${element.interRollNum} </div>
                                <div class="m-1 pt-2">Passing Year : ${element.interPassingyear} </div>
                                <div class="m-1 pt-2">Percentage : ${element.interPercent} </div>
                            </div>
                        </div>
                        <div class="col">
                            <h4 class="text-center pt-1">Current Qualification</h4>
                            <div class="row mx-4 p-3">
                                <div class="m-1 pt-2">Course : ${element.currentCourse} </div>
                                <div class="m-1 pt-2">Roll Number : ${element.currentRollNum} </div>
                                <div class="m-1 pt-2">Department : ${element.department} </div>
                                <div class="m-1 pt-2">Overall Percentage : ${element.overallPercent} </div>
                                <h5 class="text-center pt-3">Semesters Percentage</h5>
                                <div class="m-1 pt-2">First Semester : ${element.firstSemPercent} </div>
                                <div class="m-1 pt-2">Second Semester : ${element.secondSemPercent} </div>
                                <div class="m-1 pt-2">Third Semester : ${element.thirdSemPercent} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1">

                </div>

            </div>
        </div>

        <div class=" container mt-5" id="scrollspyHeading2">
            <div class="row">
                <div class="col-1">

                </div>
                <div class="col-10 shadow rounded bg-light">
                    <div class="row">
                        <h3 class="pt-3 text-center">Contacts</h3>
                    </div>
                    <div class="row mx-3 mb-3 mt-1 p-3 pt-1">
                        <div class="col-1">
                            
                        </div>
                        <div class="col">
                            <div class="row mx-3 p-3 pt-1">Alternate Mobile Number : ${element.altMobile} </div>
                            <div class="row mx-3 p-3 pt-1">Alternate Email Address : ${element.altemail} </div>
                        </div>
                        <div class="col-3">
                            
                        </div>
                    </div>
                    <div class="row mx-3 mb-3 mt-1 p-3 pt-1">
                        <div class="col-1">
                            
                        </div>
                        <div class="col">
                            <h5 class="pt-3 text-center">Current Address</h5>
                            <div class="mb-3">Village/House No. : ${element.currentHouseNum} </div>
                            <div class="mb-3">Locality : ${element.currentLocality} </div>
                            <div class="mb-3">District : ${element.currentDistrict} </div>
                            <div class="mb-3">State : ${element.currentState} </div>
                            <div class="mb-3">Pincode : ${element.currentPincode} </div>
                        </div>
                        <div class="col-2">
                            
                        </div>
                        <div class="col">
                            <h5 class="pt-3 text-center">Permanent Address</h5>
                            <div class="mb-3">Village/House No. : ${element.permanentHouseNum} </div>
                            <div class="mb-3">Locality : ${element.permanentLocality} </div>
                            <div class="mb-3">District : ${element.permanentDistrict} </div>
                            <div class="mb-3">State : ${element.permanentState} </div>
                            <div class="mb-3">Pincode : ${element.permanentPincode} </div>
                        </div>
                        <div class="col-1">
                            
                        </div>
                    </div>
                </div>
                <div class="col-1">

                </div>
            </div>


        </div>
        <div class=" container mt-5" id="scrollspyHeading3">
            <div class="row">
                <div class="col-1">

                </div>
                <div class="col-10 shadow rounded bg-light">
                    <div class="row mx-3 mb-3 mt-1 p-3 pt-1">
                        <div class="col-1">
                            
                        </div>
                        <div class="col">
                            <div class="row">
                                <h3 class="pt-3 text-center">Curricular Activites</h3>
                            </div>
                            <div class="row">
                                <div class="mb-3">Sports Achievement : ${element.sports}</div>
                            </div>
                            <div class="row">
                                <div class="mb-3">Volunteered : ${element.volunteered} </div>
                            </div>
                            <div class="row">
                                <div class="mb-3">Seminars : ${element.seminar}</div>
                            </div>
                            <div class="row">
                                <div class="mb-3">Seminars</div>
                            </div>
                            <div class="row">
                                <div class="mb-3">Webinar</div>
                            </div>
                            <div class="row">
                                <div class="mb-3">College Club</div>
                            </div>
                        </div>
                        <div class="col-1">
                            
                        </div>
                    </div>
                </div>
                <div class="col-1">

                </div>
            </div>

        </div>
        <div class=" container mt-5" id="scrollspyHeading4">
            <div class="row">
                <div class="col-1">

                </div>

                <div class="col-10 shadow rounded bg-light">
                    <div class="row mx-3 mb-3 mt-1 p-3 pt-1">
                        <div class="col-1">
                            
                        </div>

                        <div class="col">
                            <div class="row">
                                <h3 class="mt-3 text-center">Performance & Attendance</h3>

                                <div class="col mt-4">
                                    <h3>Performance in Subjects</h3>
                                    <div class="progress">
                                        <div class="progress-bar bg-success " role="progressbar" style="width: 25%"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">java </div>
                                    </div>
                                    <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-info" role="progressbar" style="width: 20%"
                                            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">c++ </div>
                                    </div>
                                    <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 75%"
                                            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">c </div>
                                    </div>
                                    <br>
                                    <div class="progress">
                                        <div class="progress-bar bg-danger" role="progressbar" style="width: 85%"
                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">python</div>
                                    </div>
                                    <br>
                                    <h3>Attendance Record</h3>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: 75%;"
                                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>


                                </div>
                                <div class="col-1">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
            displaydata.innerHTML = fName
        });
    })
    .catch(err => console.log(err))


