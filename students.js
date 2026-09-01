
// =========================================================
// STUDENT MANAGEMENT SYSTEM
// STUDENTS PAGE JAVASCRIPT
// =========================================================


// =========================================================
// GET HTML ELEMENTS
// =========================================================

const studentSearch =
    document.getElementById("studentSearch");

const headerSearch =
    document.getElementById("headerSearch");

const departmentFilter =
    document.getElementById("departmentFilter");

const statusFilter =
    document.getElementById("statusFilter");

const filterButton =
    document.getElementById("filterButton");

const selectAll =
    document.getElementById("selectAll");

const studentTable =
    document.getElementById("studentTable");

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");

const themeButton =
    document.getElementById("themeButton");


// =========================================================
// GET TABLE ROWS
// =========================================================

function getStudentRows() {

    return document.querySelectorAll(
        "#studentTable tbody tr"
    );

}


// =========================================================
// SEARCH STUDENTS
// =========================================================

function searchStudents() {

    const searchValue =
        studentSearch.value
            .toLowerCase()
            .trim();

    const rows = getStudentRows();

    rows.forEach(function (row) {

        const rowText =
            row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

    updateSelectAll();

}


// =========================================================
// HEADER SEARCH
// =========================================================

if (headerSearch) {

    headerSearch.addEventListener(
        "input",
        function () {

            studentSearch.value =
                headerSearch.value;

            searchStudents();

        }
    );

}


// =========================================================
// STUDENT SEARCH EVENT
// =========================================================

if (studentSearch) {

    studentSearch.addEventListener(
        "input",
        function () {

            searchStudents();

        }
    );

}


// =========================================================
// FILTER STUDENTS
// =========================================================

function filterStudents() {

    const department =
        departmentFilter.value;

    const status =
        statusFilter.value;

    const rows = getStudentRows();

    rows.forEach(function (row) {

        const rowText =
            row.textContent;

        let departmentMatch = true;
        let statusMatch = true;


        // -------------------------------------------------
        // DEPARTMENT FILTER
        // -------------------------------------------------

        if (department !== "all") {

            departmentMatch =
                rowText.includes(department);

        }


        // -------------------------------------------------
        // STATUS FILTER
        // -------------------------------------------------

        if (status !== "all") {

            statusMatch =
                rowText.includes(status);

        }


        // -------------------------------------------------
        // SHOW / HIDE ROW
        // -------------------------------------------------

        if (
            departmentMatch &&
            statusMatch
        ) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });


    updateSelectAll();

}


// =========================================================
// FILTER BUTTON
// =========================================================

if (filterButton) {

    filterButton.addEventListener(
        "click",
        function () {

            filterStudents();

        }
    );

}


// =========================================================
// AUTOMATIC FILTER WHEN SELECT CHANGES
// =========================================================

if (departmentFilter) {

    departmentFilter.addEventListener(
        "change",
        filterStudents
    );

}


if (statusFilter) {

    statusFilter.addEventListener(
        "change",
        filterStudents
    );

}


// =========================================================
// SELECT ALL STUDENTS
// =========================================================

if (selectAll) {

    selectAll.addEventListener(
        "change",
        function () {

            const checkboxes =
                document.querySelectorAll(
                    ".student-check"
                );

            checkboxes.forEach(
                function (checkbox) {

                    const row =
                        checkbox.closest("tr");

                    if (
                        row &&
                        row.style.display !== "none"
                    ) {

                        checkbox.checked =
                            selectAll.checked;

                    }

                }
            );

        }
    );

}


// =========================================================
// INDIVIDUAL CHECKBOX
// =========================================================

document.addEventListener(
    "change",
    function (event) {

        if (
            event.target.classList.contains(
                "student-check"
            )
        ) {

            updateSelectAll();

        }

    }
);


// =========================================================
// UPDATE SELECT ALL
// =========================================================

function updateSelectAll() {

    const visibleCheckboxes =
        Array.from(
            document.querySelectorAll(
                ".student-check"
            )
        )
        .filter(function (checkbox) {

            const row =
                checkbox.closest("tr");

            return (
                row &&
                row.style.display !== "none"
            );

        });


    if (visibleCheckboxes.length === 0) {

        selectAll.checked = false;

        selectAll.indeterminate = false;

        return;

    }


    const checkedCount =
        visibleCheckboxes.filter(
            function (checkbox) {

                return checkbox.checked;

            }
        ).length;


    selectAll.checked =
        checkedCount ===
        visibleCheckboxes.length;


    selectAll.indeterminate =
        checkedCount > 0 &&
        checkedCount <
        visibleCheckboxes.length;

}


// =========================================================
// TABLE ACTION BUTTONS
// =========================================================

document.addEventListener(
    "click",
    function (event) {


        // -------------------------------------------------
        // FIND BUTTON
        // -------------------------------------------------

        const button =
            event.target.closest(
                ".action-btn"
            );


        if (!button) {

            return;

        }


        const row =
            button.closest("tr");


        if (!row) {

            return;

        }


        // -------------------------------------------------
        // GET STUDENT INFORMATION
        // -------------------------------------------------

        const studentName =
            row.querySelector(
                ".student strong"
            )?.textContent.trim();


        const studentID =
            row.children[2]
                ?.textContent.trim();


        const email =
            row.children[4]
                ?.textContent.trim();


        // -------------------------------------------------
        // VIEW BUTTON
        // -------------------------------------------------

        if (
            button.classList.contains(
                "view"
            )
        ) {

            alert(
                "Student Details\n\n" +
                "Name: " +
                studentName +
                "\nStudent ID: " +
                studentID +
                "\nEmail: " +
                email
            );

        }


        // -------------------------------------------------
        // EDIT BUTTON
        // -------------------------------------------------

        if (
            button.classList.contains(
                "edit"
            )
        ) {

            const confirmEdit =
                confirm(
                    "Do you want to edit " +
                    studentName +
                    "?"
                );


            if (confirmEdit) {

                // If you create an edit page,
                // change this URL.

                window.location.href =
                    "add-student.html";

            }

        }


        // -------------------------------------------------
        // DELETE BUTTON
        // -------------------------------------------------

        if (
            button.classList.contains(
                "delete"
            )
        ) {

            const confirmDelete =
                confirm(
                    "Are you sure you want to delete " +
                    studentName +
                    "?"
                );


            if (confirmDelete) {

                row.remove();

                updateSelectAll();

                alert(
                    studentName +
                    " has been deleted successfully."
                );

            }

        }

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
// CLOSE SIDEBAR WHEN CLICKING OUTSIDE
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

    themeButton.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

    localStorage.setItem(
        "theme",
        "dark"
    );

}


function disableDarkMode() {

    document.body.classList.remove(
        "dark"
    );

    themeButton.innerHTML =
        '<i class="fa-solid fa-moon"></i>';

    localStorage.setItem(
        "theme",
        "light"
    );

}


// =========================================================
// THEME BUTTON
// =========================================================

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

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    enableDarkMode();

}


// =========================================================
// PAGINATION
// =========================================================

const pageButtons =
    document.querySelectorAll(
        ".page-btn"
    );


pageButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                // Ignore disabled button

                if (
                    button.classList.contains(
                        "disabled"
                    )
                ) {

                    return;

                }


                // Ignore arrow buttons

                const buttonText =
                    button.textContent.trim();


                if (
                    buttonText === ""
                ) {

                    return;

                }


                // Remove active class

                pageButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                // Add active class

                button.classList.add(
                    "active"
                );


                console.log(
                    "Selected page:",
                    buttonText
                );

            }
        );

    }
);


// =========================================================
// ESCAPE KEY
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            if (
                sidebar &&
                sidebar.classList.contains(
                    "show"
                )
            ) {

                sidebar.classList.remove(
                    "show"
                );

            }

        }

    }
);


// =========================================================
// INITIALIZATION
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateSelectAll();

        console.log(
            "Student Management System loaded successfully."
        );

    }
);

