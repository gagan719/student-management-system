
// =========================================================
// VIEW STUDENT JAVASCRIPT
// Student Management System
// =========================================================


// =========================================================
// GET STUDENT ID FROM URL
// Example:
// view-student.html?id=STU001
// =========================================================

const urlParams = new URLSearchParams(window.location.search);

const studentIdFromURL = urlParams.get("id");


// =========================================================
// GET STUDENTS FROM LOCAL STORAGE
// =========================================================

let students = JSON.parse(
    localStorage.getItem("students")
) || [];


// =========================================================
// FIND STUDENT
// =========================================================

let student = students.find(function (item) {

    return String(
        item.studentId ||
        item.id ||
        item.StudentID ||
        ""
    ).toLowerCase()
    ===
    String(studentIdFromURL || "").toLowerCase();

});


// =========================================================
// HELPER FUNCTION
// =========================================================

function getValue(value) {

    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {

        return "-";

    }

    return value;

}


// =========================================================
// SET TEXT SAFELY
// =========================================================

function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {

        element.textContent = getValue(value);

    }

}


// =========================================================
// DISPLAY STUDENT
// =========================================================

function displayStudent() {

    // ---------------------------------------------
    // Student not found
    // ---------------------------------------------

    if (!student) {

        alert(
            "Student not found!"
        );

        window.location.href =
            "students.html";

        return;

    }


    // =====================================================
    // BASIC STUDENT INFORMATION
    // =====================================================

    const name =
        student.fullName ||
        student.name ||
        student.FullName ||
        "Student";


    const studentId =
        student.studentId ||
        student.id ||
        student.StudentID ||
        "-";


    const email =
        student.email ||
        student.Email ||
        "-";


    const department =
        student.department ||
        student.Department ||
        "-";


    const course =
        student.course ||
        student.Course ||
        department;


    const phone =
        student.phone ||
        student.phoneNumber ||
        student.Phone ||
        "-";


    const dob =
        student.dob ||
        student.dateOfBirth ||
        student.DOB ||
        "-";


    const gender =
        student.gender ||
        student.Gender ||
        "-";


    const year =
        student.year ||
        student.studyYear ||
        student.Year ||
        "-";


    const admissionDate =
        student.admissionDate ||
        student.joinDate ||
        student.date ||
        student.AdmissionDate ||
        "-";


    const address =
        student.address ||
        student.Address ||
        "-";


    const city =
        student.city ||
        student.City ||
        "-";


    const state =
        student.state ||
        student.State ||
        "-";


    const pincode =
        student.pincode ||
        student.zipcode ||
        student.postalCode ||
        student.Pincode ||
        "-";


    const status =
        student.status ||
        student.Status ||
        "Active";


    // =====================================================
    // PROFILE INFORMATION
    // =====================================================

    setText(
        "studentName",
        name
    );


    setText(
        "studentCourse",
        course
    );


    setText(
        "studentId",
        studentId
    );


    setText(
        "admissionDate",
        admissionDate
    );


    // =====================================================
    // AVATAR
    // =====================================================

    const avatar =
        document.getElementById(
            "studentAvatar"
        );


    if (avatar) {

        avatar.textContent =
            name
                .trim()
                .charAt(0)
                .toUpperCase();

    }


    // =====================================================
    // PERSONAL INFORMATION
    // =====================================================

    setText(
        "detailName",
        name
    );


    setText(
        "detailEmail",
        email
    );


    setText(
        "detailPhone",
        phone
    );


    setText(
        "detailDob",
        dob
    );


    setText(
        "detailGender",
        gender
    );


    // =====================================================
    // ACADEMIC INFORMATION
    // =====================================================

    setText(
        "detailStudentId",
        studentId
    );


    setText(
        "detailDepartment",
        department
    );


    setText(
        "detailCourse",
        course
    );


    setText(
        "detailYear",
        year
    );


    setText(
        "detailAdmission",
        admissionDate
    );


    // =====================================================
    // ADDRESS INFORMATION
    // =====================================================

    setText(
        "detailAddress",
        address
    );


    setText(
        "detailCity",
        city
    );


    setText(
        "detailState",
        state
    );


    setText(
        "detailPincode",
        pincode
    );


    // =====================================================
    // ACCOUNT STATUS
    // =====================================================

    setText(
        "accountStatus",
        status
    );


    const statusElement =
        document.getElementById(
            "studentStatus"
        );


    if (statusElement) {

        statusElement.textContent =
            status;


        // Remove previous classes

        statusElement.classList.remove(
            "active"
        );


        // Add class depending on status

        if (
            String(status).toLowerCase()
            ===
            "active"
        ) {

            statusElement.classList.add(
                "active"
            );

        }

    }


    // =====================================================
    // PAGE TITLE
    // =====================================================

    document.title =
        name +
        " | Student Management System";

}


// =========================================================
// EDIT STUDENT
// =========================================================

const editButton =
    document.getElementById(
        "editStudent"
    );


if (editButton) {

    editButton.addEventListener(
        "click",
        function () {

            if (!student) {

                return;

            }


            const studentId =
                student.studentId ||
                student.id ||
                "";


            window.location.href =
                "add-student.html?edit="
                +
                encodeURIComponent(
                    studentId
                );

        }
    );

}


// =========================================================
// DELETE STUDENT
// =========================================================

const deleteButton =
    document.getElementById(
        "deleteStudent"
    );


if (deleteButton) {

    deleteButton.addEventListener(
        "click",
        function () {

            if (!student) {

                return;

            }


            const studentName =
                student.fullName ||
                student.name ||
                "this student";


            const confirmDelete =
                confirm(
                    "Are you sure you want to delete "
                    +
                    studentName
                    +
                    "?"
                );


            if (!confirmDelete) {

                return;

            }


            // ---------------------------------------------
            // Get student ID
            // ---------------------------------------------

            const studentId =
                student.studentId ||
                student.id ||
                "";


            // ---------------------------------------------
            // Remove student
            // ---------------------------------------------

            students =
                students.filter(
                    function (item) {

                        const id =
                            item.studentId ||
                            item.id ||
                            "";

                        return String(id)
                            !==
                            String(studentId);

                    }
                );


            // ---------------------------------------------
            // Save updated students
            // ---------------------------------------------

            localStorage.setItem(
                "students",
                JSON.stringify(students)
            );


            alert(
                "Student deleted successfully!"
            );


            // ---------------------------------------------
            // Go back to students page
            // ---------------------------------------------

            window.location.href =
                "students.html";

        }
    );

}


// =========================================================
// SEARCH STUDENT
// =========================================================

const searchInput =
    document.getElementById(
        "searchInput"
    );


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                const searchValue =
                    searchInput.value.trim();


                if (
                    searchValue === ""
                ) {

                    return;

                }


                // Search by student ID

                const foundStudent =
                    students.find(
                        function (item) {

                            const id =
                                item.studentId ||
                                item.id ||
                                "";


                            const name =
                                item.fullName ||
                                item.name ||
                                "";


                            return (

                                String(id)
                                    .toLowerCase()
                                    .includes(
                                        searchValue
                                            .toLowerCase()
                                    )

                                ||

                                String(name)
                                    .toLowerCase()
                                    .includes(
                                        searchValue
                                            .toLowerCase()
                                    )

                            );

                        }
                    );


                if (foundStudent) {

                    const foundId =
                        foundStudent.studentId ||
                        foundStudent.id;


                    window.location.href =
                        "view-student.html?id="
                        +
                        encodeURIComponent(
                            foundId
                        );

                } else {

                    alert(
                        "Student not found!"
                    );

                }

            }

        }
    );

}


// =========================================================
// DARK MODE
// =========================================================

const themeButton =
    document.getElementById(
        "themeButton"
    );


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const icon =
                themeButton.querySelector(
                    "i"
                );


            if (
                document.body.classList.contains(
                    "dark"
                )
            ) {

                icon.classList.remove(
                    "fa-moon"
                );

                icon.classList.add(
                    "fa-sun"
                );


                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                icon.classList.remove(
                    "fa-sun"
                );

                icon.classList.add(
                    "fa-moon"
                );


                localStorage.setItem(
                    "theme",
                    "light"
                );

            }

        }
    );

}


// =========================================================
// LOAD SAVED THEME
// =========================================================

const savedTheme =
    localStorage.getItem(
        "theme"
    );


if (
    savedTheme === "dark"
) {

    document.body.classList.add(
        "dark"
    );


    const icon =
        themeButton?.querySelector(
            "i"
        );


    if (icon) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    }

}


// =========================================================
// MOBILE SIDEBAR
// =========================================================

const menuButton =
    document.getElementById(
        "menuButton"
    );


const sidebar =
    document.getElementById(
        "sidebar"
    );


if (
    menuButton &&
    sidebar
) {

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
// CLOSE SIDEBAR WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener(
    "click",
    function (event) {

        if (
            window.innerWidth <= 1000 &&
            sidebar &&
            sidebar.classList.contains(
                "show"
            )
        ) {

            if (
                !sidebar.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                sidebar.classList.remove(
                    "show"
                );

            }

        }

    }
);


// =========================================================
// INITIALIZE PAGE
// =========================================================

displayStudent();

