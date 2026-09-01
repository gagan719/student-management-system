
// =========================================================
// ADD STUDENT
// STUDENT MANAGEMENT SYSTEM
// =========================================================


// =========================================================
// GET ELEMENTS
// =========================================================

const studentForm =
    document.getElementById("studentForm");

const firstName =
    document.getElementById("firstName");

const lastName =
    document.getElementById("lastName");

const email =
    document.getElementById("email");

const phone =
    document.getElementById("phone");

const dob =
    document.getElementById("dob");

const gender =
    document.getElementById("gender");

const studentId =
    document.getElementById("studentId");

const department =
    document.getElementById("department");

const course =
    document.getElementById("course");

const year =
    document.getElementById("year");

const admissionDate =
    document.getElementById("admissionDate");

const status =
    document.getElementById("status");

const address =
    document.getElementById("address");

const city =
    document.getElementById("city");

const state =
    document.getElementById("state");

const pincode =
    document.getElementById("pincode");

const password =
    document.getElementById("password");

const confirmPassword =
    document.getElementById("confirmPassword");

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");

const themeButton =
    document.getElementById("themeButton");


// =========================================================
// ERROR FUNCTION
// =========================================================

function showError(input, message) {

    const group =
        input.closest(".form-group");

    const error =
        group.querySelector("small");

    group.classList.add("error");

    error.textContent = message;

}


// =========================================================
// CLEAR ERROR
// =========================================================

function clearError(input) {

    const group =
        input.closest(".form-group");

    const error =
        group.querySelector("small");

    group.classList.remove("error");

    error.textContent = "";

}


// =========================================================
// VALIDATE EMAIL
// =========================================================

function validateEmail(value) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(value);

}


// =========================================================
// VALIDATE PHONE
// =========================================================

function validatePhone(value) {

    const pattern =
        /^[6-9]\d{9}$/;

    return pattern.test(value);

}


// =========================================================
// VALIDATE PINCODE
// =========================================================

function validatePincode(value) {

    const pattern =
        /^\d{6}$/;

    return pattern.test(value);

}


// =========================================================
// PASSWORD STRENGTH
// =========================================================

function validatePassword(value) {

    return value.length >= 6;

}


// =========================================================
// FORM SUBMIT
// =========================================================

studentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        let valid = true;


        // -------------------------------------------------
        // GET VALUES
        // -------------------------------------------------

        const first =
            firstName.value.trim();

        const last =
            lastName.value.trim();

        const emailValue =
            email.value.trim();

        const phoneValue =
            phone.value.trim();

        const studentIdValue =
            studentId.value.trim();

        const addressValue =
            address.value.trim();

        const cityValue =
            city.value.trim();

        const stateValue =
            state.value.trim();

        const pincodeValue =
            pincode.value.trim();


        // -------------------------------------------------
        // FIRST NAME
        // -------------------------------------------------

        if (first === "") {

            showError(
                firstName,
                "First name is required."
            );

            valid = false;

        } else {

            clearError(firstName);

        }


        // -------------------------------------------------
        // LAST NAME
        // -------------------------------------------------

        if (last === "") {

            showError(
                lastName,
                "Last name is required."
            );

            valid = false;

        } else {

            clearError(lastName);

        }


        // -------------------------------------------------
        // EMAIL
        // -------------------------------------------------

        if (emailValue === "") {

            showError(
                email,
                "Email address is required."
            );

            valid = false;

        } else if (
            !validateEmail(emailValue)
        ) {

            showError(
                email,
                "Enter a valid email address."
            );

            valid = false;

        } else {

            clearError(email);

        }


        // -------------------------------------------------
        // PHONE
        // -------------------------------------------------

        if (phoneValue === "") {

            showError(
                phone,
                "Phone number is required."
            );

            valid = false;

        } else if (
            !validatePhone(phoneValue)
        ) {

            showError(
                phone,
                "Enter a valid 10-digit Indian phone number."
            );

            valid = false;

        } else {

            clearError(phone);

        }


        // -------------------------------------------------
        // DATE OF BIRTH
        // -------------------------------------------------

        if (dob.value === "") {

            showError(
                dob,
                "Date of birth is required."
            );

            valid = false;

        } else {

            clearError(dob);

        }


        // -------------------------------------------------
        // GENDER
        // -------------------------------------------------

        if (gender.value === "") {

            showError(
                gender,
                "Please select gender."
            );

            valid = false;

        } else {

            clearError(gender);

        }


        // -------------------------------------------------
        // STUDENT ID
        // -------------------------------------------------

        if (studentIdValue === "") {

            showError(
                studentId,
                "Student ID is required."
            );

            valid = false;

        } else {

            clearError(studentId);

        }


        // -------------------------------------------------
        // DEPARTMENT
        // -------------------------------------------------

        if (department.value === "") {

            showError(
                department,
                "Please select department."
            );

            valid = false;

        } else {

            clearError(department);

        }


        // -------------------------------------------------
        // COURSE
        // -------------------------------------------------

        if (course.value === "") {

            showError(
                course,
                "Please select course."
            );

            valid = false;

        } else {

            clearError(course);

        }


        // -------------------------------------------------
        // YEAR
        // -------------------------------------------------

        if (year.value === "") {

            showError(
                year,
                "Please select year."
            );

            valid = false;

        } else {

            clearError(year);

        }


        // -------------------------------------------------
        // ADMISSION DATE
        // -------------------------------------------------

        if (
            admissionDate.value === ""
        ) {

            showError(
                admissionDate,
                "Admission date is required."
            );

            valid = false;

        } else {

            clearError(admissionDate);

        }


        // -------------------------------------------------
        // ADDRESS
        // -------------------------------------------------

        if (addressValue === "") {

            showError(
                address,
                "Address is required."
            );

            valid = false;

        } else {

            clearError(address);

        }


        // -------------------------------------------------
        // CITY
        // -------------------------------------------------

        if (cityValue === "") {

            showError(
                city,
                "City is required."
            );

            valid = false;

        } else {

            clearError(city);

        }


        // -------------------------------------------------
        // STATE
        // -------------------------------------------------

        if (stateValue === "") {

            showError(
                state,
                "State is required."
            );

            valid = false;

        } else {

            clearError(state);

        }


        // -------------------------------------------------
        // PINCODE
        // -------------------------------------------------

        if (pincodeValue === "") {

            showError(
                pincode,
                "Pincode is required."
            );

            valid = false;

        } else if (
            !validatePincode(pincodeValue)
        ) {

            showError(
                pincode,
                "Enter a valid 6-digit pincode."
            );

            valid = false;

        } else {

            clearError(pincode);

        }


        // -------------------------------------------------
        // PASSWORD
        // -------------------------------------------------

        if (password.value === "") {

            showError(
                password,
                "Password is required."
            );

            valid = false;

        } else if (
            !validatePassword(
                password.value
            )
        ) {

            showError(
                password,
                "Password must contain at least 6 characters."
            );

            valid = false;

        } else {

            clearError(password);

        }


        // -------------------------------------------------
        // CONFIRM PASSWORD
        // -------------------------------------------------

        if (
            confirmPassword.value === ""
        ) {

            showError(
                confirmPassword,
                "Please confirm your password."
            );

            valid = false;

        } else if (
            confirmPassword.value !==
            password.value
        ) {

            showError(
                confirmPassword,
                "Passwords do not match."
            );

            valid = false;

        } else {

            clearError(confirmPassword);

        }


        // =================================================
        // STOP IF INVALID
        // =================================================

        if (!valid) {

            const firstError =
                document.querySelector(
                    ".form-group.error input, .form-group.error select, .form-group.error textarea"
                );

            if (firstError) {

                firstError.focus();

            }

            return;

        }


        // =================================================
        // CREATE STUDENT OBJECT
        // =================================================

        const student = {

            id: studentIdValue,

            firstName: first,

            lastName: last,

            fullName:
                first + " " + last,

            email:
                emailValue,

            phone:
                phoneValue,

            dob:
                dob.value,

            gender:
                gender.value,

            department:
                department.value,

            course:
                course.value,

            year:
                year.value,

            admissionDate:
                admissionDate.value,

            status:
                status.value,

            address:
                addressValue,

            city:
                cityValue,

            state:
                stateValue,

            pincode:
                pincodeValue

        };


        // =================================================
        // GET EXISTING STUDENTS
        // =================================================

        let students =
            JSON.parse(
                localStorage.getItem(
                    "students"
                )
            ) || [];


        // =================================================
        // CHECK DUPLICATE STUDENT ID
        // =================================================

        const duplicateID =
            students.some(
                function (item) {

                    return item.id
                        .toLowerCase() ===
                        student.id
                            .toLowerCase();

                }
            );


        if (duplicateID) {

            showError(
                studentId,
                "This Student ID already exists."
            );

            studentId.focus();

            return;

        }


        // =================================================
        // CHECK DUPLICATE EMAIL
        // =================================================

        const duplicateEmail =
            students.some(
                function (item) {

                    return item.email
                        .toLowerCase() ===
                        student.email
                            .toLowerCase();

                }
            );


        if (duplicateEmail) {

            showError(
                email,
                "This email is already registered."
            );

            email.focus();

            return;

        }


        // =================================================
        // SAVE STUDENT
        // =================================================

        students.push(student);


        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );


        // =================================================
        // SUCCESS MESSAGE
        // =================================================

        showSuccessMessage(
            "Student added successfully!"
        );


        // =================================================
        // RESET FORM
        // =================================================

        studentForm.reset();


        // =================================================
        // REDIRECT
        // =================================================

        setTimeout(
            function () {

                window.location.href =
                    "students.html";

            },
            1500
        );

    }
);


// =========================================================
// SUCCESS MESSAGE
// =========================================================

function showSuccessMessage(text) {

    const message =
        document.createElement("div");

    message.className =
        "success-message";

    message.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> ' +
        text;

    document.body.appendChild(
        message
    );


    setTimeout(
        function () {

            message.remove();

        },
        1400
    );

}


// =========================================================
// PASSWORD SHOW / HIDE
// =========================================================

const passwordButtons =
    document.querySelectorAll(
        ".password-toggle"
    );


passwordButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const targetID =
                    button.dataset.target;

                const input =
                    document.getElementById(
                        targetID
                    );

                const icon =
                    button.querySelector(
                        "i"
                    );


                if (
                    input.type ===
                    "password"
                ) {

                    input.type = "text";

                    icon.classList.remove(
                        "fa-eye"
                    );

                    icon.classList.add(
                        "fa-eye-slash"
                    );

                } else {

                    input.type = "password";

                    icon.classList.remove(
                        "fa-eye-slash"
                    );

                    icon.classList.add(
                        "fa-eye"
                    );

                }

            }
        );

    }
);


// =========================================================
// REAL-TIME ERROR CLEAR
// =========================================================

document.querySelectorAll(
    "input, select, textarea"
).forEach(
    function (input) {

        input.addEventListener(
            "input",
            function () {

                if (
                    input.value.trim() !== ""
                ) {

                    clearError(input);

                }

            }
        );


        input.addEventListener(
            "change",
            function () {

                if (
                    input.value !== ""
                ) {

                    clearError(input);

                }

            }
        );

    }
);


// =========================================================
// MOBILE SIDEBAR
// =========================================================

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            sidebar.classList.toggle(
                "show"
            );

        }
    );

}


// =========================================================
// CLOSE SIDEBAR OUTSIDE
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            window.innerWidth <= 1000 &&
            sidebar.classList.contains("show") &&
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            sidebar.classList.remove(
                "show"
            );

        }

    }
);


// =========================================================
// DARK MODE
// =========================================================

function enableDarkMode() {

    document.body.classList.add(
        "dark"
    );

    if (themeButton) {

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    localStorage.setItem(
        "theme",
        "dark"
    );

}


function disableDarkMode() {

    document.body.classList.remove(
        "dark"
    );

    if (themeButton) {

        themeButton.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

    localStorage.setItem(
        "theme",
        "light"
    );

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            if (
                document.body.classList.contains(
                    "dark"
                )
            ) {

                disableDarkMode();

            } else {

                enableDarkMode();

            }

        }
    );

}


// =========================================================
// LOAD SAVED THEME
// =========================================================

if (
    localStorage.getItem("theme") ===
    "dark"
) {

    enableDarkMode();

}


// =========================================================
// CANCEL BUTTON
// =========================================================

const cancelButton =
    document.querySelector(
        ".cancel-button"
    );


if (cancelButton) {

    cancelButton.addEventListener(
        "click",
        function () {

            const confirmCancel =
                confirm(
                    "Are you sure you want to cancel? All entered information will be lost."
                );


            if (!confirmCancel) {

                event.preventDefault();

            }

        }
    );

}


// =========================================================
// CONSOLE MESSAGE
// =========================================================

console.log(
    "Add Student page loaded successfully."
);

