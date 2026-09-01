
// =========================================================
// FACULTY MANAGEMENT SYSTEM
// faculty.js
// =========================================================


// =========================================================
// FACULTY DATA
// =========================================================

let facultyList = JSON.parse(
    localStorage.getItem("facultyList")
) || [

    {
        id: "FAC001",
        name: "Dr. Arun Kumar",
        email: "arun@edumanage.com",
        phone: "9876543210",
        department: "Computer Science",
        designation: "Professor",
        status: "Active"
    },

    {
        id: "FAC002",
        name: "Dr. Priya Sharma",
        email: "priya@edumanage.com",
        phone: "9876543211",
        department: "Artificial Intelligence",
        designation: "Associate Professor",
        status: "Active"
    },

    {
        id: "FAC003",
        name: "Mr. Ravi Kumar",
        email: "ravi@edumanage.com",
        phone: "9876543212",
        department: "Commerce",
        designation: "Assistant Professor",
        status: "Active"
    },

    {
        id: "FAC004",
        name: "Ms. Divya Raj",
        email: "divya@edumanage.com",
        phone: "9876543213",
        department: "Management",
        designation: "Lecturer",
        status: "Inactive"
    }

];


// =========================================================
// GET HTML ELEMENTS
// =========================================================

const facultyTableBody =
    document.getElementById("facultyTableBody");

const emptyState =
    document.getElementById("emptyState");

const totalFaculty =
    document.getElementById("totalFaculty");

const activeFaculty =
    document.getElementById("activeFaculty");

const departmentCount =
    document.getElementById("departmentCount");

const newFaculty =
    document.getElementById("newFaculty");

const searchFaculty =
    document.getElementById("searchFaculty");

const departmentFilter =
    document.getElementById("departmentFilter");

const showingText =
    document.getElementById("showingText");


// =========================================================
// MODAL ELEMENTS
// =========================================================

const facultyModal =
    document.getElementById("facultyModal");

const addFacultyButton =
    document.getElementById("addFacultyButton");

const closeModal =
    document.getElementById("closeModal");

const cancelModal =
    document.getElementById("cancelModal");

const facultyForm =
    document.getElementById("facultyForm");


// =========================================================
// FORM INPUTS
// =========================================================

const facultyName =
    document.getElementById("facultyName");

const facultyId =
    document.getElementById("facultyId");

const facultyEmail =
    document.getElementById("facultyEmail");

const facultyPhone =
    document.getElementById("facultyPhone");

const facultyDepartment =
    document.getElementById("facultyDepartment");

const facultyDesignation =
    document.getElementById("facultyDesignation");


// =========================================================
// EDITING VARIABLE
// =========================================================

let editIndex = -1;


// =========================================================
// SAVE DATA TO LOCAL STORAGE
// =========================================================

function saveFacultyData() {

    localStorage.setItem(
        "facultyList",
        JSON.stringify(facultyList)
    );

}


// =========================================================
// GET INITIALS
// =========================================================

function getInitials(name) {

    const words = name.trim().split(" ");

    if (words.length === 1) {

        return words[0]
            .substring(0, 2)
            .toUpperCase();

    }

    return (
        words[0][0] +
        words[words.length - 1][0]
    ).toUpperCase();

}


// =========================================================
// DISPLAY FACULTY
// =========================================================

function displayFaculty() {

    const searchValue =
        searchFaculty.value
            .toLowerCase()
            .trim();

    const departmentValue =
        departmentFilter.value;


    facultyTableBody.innerHTML = "";


    // FILTER FACULTY

    const filteredFaculty =
        facultyList.filter(function (faculty) {

            const matchesSearch =
                faculty.name
                    .toLowerCase()
                    .includes(searchValue) ||

                faculty.id
                    .toLowerCase()
                    .includes(searchValue) ||

                faculty.email
                    .toLowerCase()
                    .includes(searchValue) ||

                faculty.department
                    .toLowerCase()
                    .includes(searchValue);


            const matchesDepartment =
                departmentValue === "" ||
                faculty.department === departmentValue;


            return (
                matchesSearch &&
                matchesDepartment
            );

        });


    // EMPTY STATE

    if (filteredFaculty.length === 0) {

        emptyState.style.display = "block";

        showingText.textContent =
            "Showing 0 faculty";

        return;

    }


    emptyState.style.display = "none";


    // CREATE TABLE ROWS

    filteredFaculty.forEach(function (faculty) {

        const originalIndex =
            facultyList.indexOf(faculty);


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>

                <div class="faculty-info">

                    <div class="faculty-avatar">
                        ${getInitials(faculty.name)}
                    </div>

                    <div class="faculty-name">

                        <strong>
                            ${escapeHTML(faculty.name)}
                        </strong>

                        <span>
                            ${escapeHTML(faculty.phone)}
                        </span>

                    </div>

                </div>

            </td>


            <td>
                ${escapeHTML(faculty.id)}
            </td>


            <td>
                ${escapeHTML(faculty.department)}
            </td>


            <td>
                ${escapeHTML(faculty.designation)}
            </td>


            <td>
                ${escapeHTML(faculty.email)}
            </td>


            <td>

                <span class="status ${
                    faculty.status.toLowerCase()
                }">

                    ${faculty.status}

                </span>

            </td>


            <td>

                <div class="action-group">

                    <button
                        class="action-btn"
                        title="Edit Faculty"
                        onclick="editFaculty(${originalIndex})">

                        <i class="fa-solid fa-pen"></i>

                    </button>


                    <button
                        class="action-btn delete"
                        title="Delete Faculty"
                        onclick="deleteFaculty(${originalIndex})">

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </td>

        `;


        facultyTableBody.appendChild(row);

    });


    showingText.textContent =
        `Showing ${filteredFaculty.length} faculty`;

}


// =========================================================
// HTML SECURITY FUNCTION
// =========================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =========================================================
// UPDATE STATISTICS
// =========================================================

function updateStatistics() {

    totalFaculty.textContent =
        facultyList.length;


    const activeCount =
        facultyList.filter(function (faculty) {

            return faculty.status === "Active";

        }).length;


    activeFaculty.textContent =
        activeCount;


    const departments =
        new Set(
            facultyList.map(function (faculty) {

                return faculty.department;

            })
        );


    departmentCount.textContent =
        departments.size;


    // For this frontend version,
    // show maximum 3 as recently added.

    newFaculty.textContent =
        Math.min(facultyList.length, 3);

}


// =========================================================
// OPEN ADD FACULTY MODAL
// =========================================================

addFacultyButton.addEventListener(
    "click",
    function () {

        editIndex = -1;

        facultyForm.reset();

        document.querySelector(
            ".modal-header h2"
        ).textContent =
            "Add New Faculty";


        document.querySelector(
            ".save-button"
        ).innerHTML =
            '<i class="fa-solid fa-check"></i> Add Faculty';


        facultyModal.classList.add("show");

        facultyName.focus();

    }
);


// =========================================================
// CLOSE MODAL
// =========================================================

function closeFacultyModal() {

    facultyModal.classList.remove("show");

    facultyForm.reset();

    editIndex = -1;

}


closeModal.addEventListener(
    "click",
    closeFacultyModal
);


cancelModal.addEventListener(
    "click",
    closeFacultyModal
);


// =========================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =========================================================

facultyModal.addEventListener(
    "click",
    function (event) {

        if (event.target === facultyModal) {

            closeFacultyModal();

        }

    }
);


// =========================================================
// ADD / UPDATE FACULTY
// =========================================================

facultyForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            facultyName.value.trim();

        const id =
            facultyId.value.trim();

        const email =
            facultyEmail.value.trim();

        const phone =
            facultyPhone.value.trim();

        const department =
            facultyDepartment.value;

        const designation =
            facultyDesignation.value;


        // =====================================
        // VALIDATION
        // =====================================

        if (name.length < 3) {

            alert(
                "Please enter a valid faculty name."
            );

            facultyName.focus();

            return;

        }


        if (!/^FAC\d+$/i.test(id)) {

            alert(
                "Faculty ID must be like FAC001."
            );

            facultyId.focus();

            return;

        }


        if (!validateEmail(email)) {

            alert(
                "Please enter a valid email address."
            );

            facultyEmail.focus();

            return;

        }


        if (!/^[0-9]{10}$/.test(phone)) {

            alert(
                "Please enter a valid 10-digit phone number."
            );

            facultyPhone.focus();

            return;

        }


        if (department === "") {

            alert(
                "Please select a department."
            );

            facultyDepartment.focus();

            return;

        }


        if (designation === "") {

            alert(
                "Please select a designation."
            );

            facultyDesignation.focus();

            return;

        }


        // =====================================
        // CHECK DUPLICATE ID
        // =====================================

        const duplicate =
            facultyList.some(
                function (faculty, index) {

                    return (
                        faculty.id.toLowerCase() ===
                        id.toLowerCase() &&
                        index !== editIndex
                    );

                }
            );


        if (duplicate) {

            alert(
                "This Faculty ID already exists."
            );

            facultyId.focus();

            return;

        }


        // =====================================
        // CREATE OBJECT
        // =====================================

        const facultyData = {

            id: id.toUpperCase(),

            name: name,

            email: email,

            phone: phone,

            department: department,

            designation: designation,

            status:
                editIndex === -1
                    ? "Active"
                    : facultyList[editIndex].status

        };


        // =====================================
        // ADD
        // =====================================

        if (editIndex === -1) {

            facultyList.push(
                facultyData
            );


            alert(
                "Faculty added successfully!"
            );

        }


        // =====================================
        // UPDATE
        // =====================================

        else {

            facultyList[editIndex] =
                facultyData;


            alert(
                "Faculty details updated successfully!"
            );

        }


        // =====================================
        // SAVE
        // =====================================

        saveFacultyData();

        displayFaculty();

        updateStatistics();

        closeFacultyModal();

    }
);


// =========================================================
// EMAIL VALIDATION
// =========================================================

function validateEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


// =========================================================
// EDIT FACULTY
// =========================================================

function editFaculty(index) {

    const faculty =
        facultyList[index];


    if (!faculty) {
        return;
    }


    editIndex = index;


    facultyName.value =
        faculty.name;

    facultyId.value =
        faculty.id;

    facultyEmail.value =
        faculty.email;

    facultyPhone.value =
        faculty.phone;

    facultyDepartment.value =
        faculty.department;

    facultyDesignation.value =
        faculty.designation;


    document.querySelector(
        ".modal-header h2"
    ).textContent =
        "Edit Faculty";


    document.querySelector(
        ".save-button"
    ).innerHTML = `

        <i class="fa-solid fa-floppy-disk"></i>

        Update Faculty

    `;


    facultyModal.classList.add("show");

}


// =========================================================
// DELETE FACULTY
// =========================================================

function deleteFaculty(index) {

    const faculty =
        facultyList[index];


    if (!faculty) {
        return;
    }


    const confirmation =
        confirm(
            `Are you sure you want to delete ${faculty.name}?`
        );


    if (!confirmation) {
        return;
    }


    facultyList.splice(index, 1);


    saveFacultyData();

    displayFaculty();

    updateStatistics();


    alert(
        "Faculty deleted successfully!"
    );

}


// =========================================================
// SEARCH
// =========================================================

searchFaculty.addEventListener(
    "input",
    function () {

        displayFaculty();

    }
);


// =========================================================
// DEPARTMENT FILTER
// =========================================================

departmentFilter.addEventListener(
    "change",
    function () {

        displayFaculty();

    }
);


// =========================================================
// FILTER BUTTON
// =========================================================

const filterButton =
    document.getElementById("filterButton");


if (filterButton) {

    filterButton.addEventListener(
        "click",
        function () {

            displayFaculty();

        }
    );

}


// =========================================================
// DARK MODE
// =========================================================

const themeButton =
    document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const icon =
                themeButton.querySelector("i");


            if (
                document.body.classList.contains(
                    "dark"
                )
            ) {

                icon.className =
                    "fa-solid fa-sun";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            }

            else {

                icon.className =
                    "fa-solid fa-moon";

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

if (
    localStorage.getItem("theme") ===
    "dark"
) {

    document.body.classList.add("dark");


    if (themeButton) {

        themeButton.querySelector("i")
            .className =
            "fa-solid fa-sun";

    }

}


// =========================================================
// MOBILE SIDEBAR
// =========================================================

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");


if (menuButton && sidebar) {

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
// CLOSE SIDEBAR AFTER NAVIGATION
// =========================================================

document.querySelectorAll(
    ".nav-link"
).forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (window.innerWidth <= 1000) {

                sidebar.classList.remove(
                    "show"
                );

            }

        }
    );

});


// =========================================================
// ESCAPE KEY
// CLOSE MODAL
// =========================================================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            if (
                facultyModal.classList.contains(
                    "show"
                )
            ) {

                closeFacultyModal();

            }

        }

    }
);


// =========================================================
// INITIAL LOAD
// =========================================================

displayFaculty();

updateStatistics();


// =========================================================
// CONSOLE MESSAGE
// =========================================================

console.log(
    "Faculty Management System loaded successfully."
);

