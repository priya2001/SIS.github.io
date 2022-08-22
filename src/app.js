const express = require("express");
const app = express();
const hbs = require("hbs");
const bodyParser = require("body-parser")
const async = require("hbs/lib/async");
const path = require("path")
const cors = require("cors")
require("../src/db/conn")

const port = process.env.PORT || 3000;


const admincredential = require("../src/models/adminlogin");
const Credential = require("../src/models/loginDetail");
const Information = require("../src/models/studentDetail");



const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(static_path))
app.set("view engine", "hbs");
app.set("views", template_path)
hbs.registerPartials(partial_path);

app.use(express.json())
app.use(cors());




app.get("/", (req, res) => {
    res.render("index")
});

//Student Login
app.get("/login", (req, res) => {
    res.render("login")
});

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const usermail = await Information.findOne({ email: email })

        if (usermail.DateofBirth === password) {
            res.status(200).render("detail")
        }
        else {
            res.send("Wrong Password")
        }

    } catch (error) {
        res.status(400).send("Wrong Email")
    }
})



app.get("/api/info", async (req, res) => {
    try {
        // const email = req.params.email;
        const studentData = await Information.find()
        res.send(studentData)
        console.log(studentData);
    }
    catch (err) {
        console.log(err);
    }
})


// admin table api
app.get("/api/:registrationNumber", async (req, res) => {
        try {
            const registrationNumber= req.params.registrationNumber

            const allStudentTable = await Information.find({registrationNumber})

            res.send(allStudentTable)
            // console.log();
        }
        // res.send(studentData);
        // console.log(studentData);
        catch (err) {
            console.log(err);
        }
    })



app.get("/detail", (req, res) => {
    res.render("detail")
});

// app.get("/admin", (req, res) => {
//     res.render("admin")
// });

app.get("/adminlogin", (req, res) => {
    res.render("adminlogin")
});
app.post("/adminlogin", async (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password
        const usermail = await admincredential.findOne({ username })

        if (usermail.password === password) {
            res.status(200).render("admin")
        }
        else {
            res.send("Wrong Password")
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Wrong username")
    }
});

app.get("/newStudent", (req, res) => {
    res.render("newStudent")
});

app.post("/newStudent", async (req, res) => {
    try {
        const registerStudent = new Information({

            registrationNumber: req.body.registrationNum,
            year: req.body.year,
            firstName: req.body.fName,
            lastName: req.body.lname,
            FatherName: req.body.father,
            MotherName: req.body.mother,
            DateofBirth: req.body.dateofBirth,
            Category: req.body.category,
            MobileNumber: req.body.mobile,
            email: req.body.email,
            course: req.body.course,
            highSchoolRollNum: req.body.highSchoolRollNum,
            highSchoolPassing: req.body.highPassingYear,
            highSchoolPercent: req.body.highPercentage,
            interRollnum: req.body.interRollNum,
            interPassingyear: req.body.interPassingYear,
            interPercent: req.body.interPercentage,
            currentcourse: req.body.currentCourse,
            currentRollnum: req.body.currentRollnum,
            department: req.body.deptname,
            overallPercent: req.body.currentPercentage,
            firstSemPercent: req.body.firstsem,
            secondSemPercent: req.body.secondsem,
            thirdSemPercent: req.body.thirdsem,
            primaryMobile: req.body.pmobile,
            altMobile: req.body.altmobile,
            primaryEmail: req.body.pemail,
            altemail: req.body.altemail,
            currentHouseNum: req.body.cHouseNum,
            currentLocality: req.body.clocality,
            currentDistrict: req.body.cdistrict,
            currentState: req.body.cstate,
            currentPincode: req.body.cpincode,
            permanentHouseNum: req.body.phousenum,
            permanentLocality: req.body.plocality,
            permanentDistrict: req.body.pdistrict,
            permanentState: req.body.pstate,
            permanentPincode: req.body.ppincode,
            sportsAchievement: req.body.sports,
            volunteered: req.body.volunteer,
            seminar: req.body.seminar
        })
        const newStudent = await registerStudent.save();
        res.status(200).redirect("adminlogin");
        console.log(newStudent);

    } catch (error) {
        res.status(400).send("error")
        console.log(error);
    }
})

app.get("/allStudents", (req, res) => {
    res.render("allStudents")
})


app.get("/performance", (req, res) => {
    res.render("performance")
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
