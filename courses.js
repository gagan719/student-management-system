
/* =========================================================
   STUDENT MANAGEMENT SYSTEM
   COURSE MANAGEMENT JAVASCRIPT
========================================================= */


/* =========================================================
   DEFAULT COURSE DATA
========================================================= */

const defaultCourses = [
    {
        id: 1,
        name: "Web Development",
        code: "CS101",
        department: "Computer Science",
        credits: 4,
        duration: "1 Year",
        faculty: "Dr. Arun Kumar",
        students: 45,
        status: "Active"
    },

    {
        id: 2,
        name: "Artificial Intelligence",
        code: "AI201",
        department: "Artificial Intelligence",
        credits: 5,
        duration: "1 Year",
        faculty: "Dr. Priya Sharma",
        students: 38,
        status: "Active"
    },

    {
        id: 3,
        name: "Database Management",
        code: "CS202",
        department: "Computer Science",
        credits: 4,
        duration: "6 Months",
        faculty: "Mr. Rajesh Kumar",
        students: 52,
        status: "Active"
    },

    {
        id: 4,
        name: "Data Analytics",
        code: "AI301",
        department: "Artificial Intelligence",
        credits: 4,
        duration: "1 Year",
        faculty: "Ms. Divya",
        students: 31,
        status: "Active"
    },

    {
        id: 5,
        name: "Information Technology",
        code: "IT101",
        department: "Information Technology",
        credits: 3,
        duration: "1 Year",
        faculty: "Mr. Karthik",
        students: 27,
        status: "Inactive"
    }
];


/* =========================================================
   GET COURSES FROM LOCAL STORAGE
========================================================= */

let courses = JSON.parse(
    localStorage.getItem("studentManagementCourses")
);


/* =========================================================
   INITIALIZE DEFAULT DATA
========================================================= */

if (!Array.isArray(courses)) {

    courses = defaultCourses;

    saveCourses();
}


/* =========================================================
   HTML ELEMENTS
========================================================= */

const courseTableBody =
    document.getElementById("courseTableBody");

const emptyState =
    document.getElementById("emptyState");

const totalCourses =
    document.getElementById("totalCourses");

const activeCourses =
    document.getElementById("activeCourses");

const departmentCount =
    document.getElementById("departmentCount");

const totalEnrolled =
    document.getElementById("totalEnrolled");

const showingText =
    document.getElementById("showingText");

const courseModal =
    document.getElementById("courseModal");

const addCourseButton =
    document.getElementById("addCourseButton");

const closeModal =
    document.getElementById("closeModal");

const cancelModal =
    document.getElementById("cancelModal");

const courseForm =
    document.getElementById("courseForm");

const headerSearch =
    document.getElementById("headerSearch");

const departmentFilter =
    document.getElementById("departmentFilter");

const statusFilter =
    document.getElementById("statusFilter");

const themeButton =
    document.getElementById("themeButton");

const menuButton =
    document.getElementById("menuButton");

const sidebar =
    document.getElementById("sidebar");


/* =========================================================
   FORM ELEMENTS
========================================================= */

const courseName =
    document.getElementById("courseName");

const courseId =
    document.getElementById("courseId");

const courseDepartment =
    document.getElementById("courseDepartment");

const courseCredits =
    document.getElementById("courseCredits");

const courseDuration =
    document.getElementById("courseDuration");

const courseFaculty =
    document.getElementById("courseFaculty");

const maxStudents =
    document.getElementById("maxStudents");

const courseStatus =
    document.getElementById("courseStatus");


/* =========================================================
   EDIT COURSE ID
========================================================= */

let editingCourseId = null;


/* =========================================================
   SAVE COURSES
========================================================= */

function saveCourses() {

    localStorage.setItem(
        "studentManagementCourses",
        JSON.stringify(courses)
    );
}


/* =========================================================
   DISPLAY COURSES
========================================================= */

function displayCourses(courseList = courses) {

    courseTableBody.innerHTML = "";


    /* No courses */
    if (courseList.length === 0) {

        emptyState.style.display = "block";

        showingText.textContent =
            "Showing 0 courses";

        return;
    }


    emptyState.style.display = "none";


    courseList.forEach(course => {

        const row =
            document.createElement("tr");


        /* Course icon */
        const firstLetter =
            course.name.charAt(0).toUpperCase();


        row.innerHTML = `

            <td>

                <div class="course-info">

                    <div class="course-avatar">
                        ${firstLetter}
                    </div>

                    <div class="course-name">

                        <strong>
                            ${escapeHTML(course.name)}
                        </strong>

                        <span>
                            ${escapeHTML(course.faculty)}
                        </span>

                    </div>

                </div>

            </td>


            <td>
                <strong>
                    ${escapeHTML(course.code)}
                </strong>
            </td>


            <td>
                ${escapeHTML(course.department)}
            </td>


            <td>
                ${course.credits}
            </td>


            <td>
                ${escapeHTML(course.duration)}
            </td>


            <td>
                ${course.students}
            </td>


            <td>

                <span class="status ${course.status.toLowerCase()}">

                    ${course.status}

                </span>

            </td>


            <td>

                <div class="action-group">

                    <button
                        class="action-btn"
                        onclick="editCourse(${course.id})"
                        title="Edit Course"
                        type="button"
                    >

                        <i class="fa-solid fa-pen"></i>

                    </button>


                    <button
                        class="action-btn delete"
                        onclick="deleteCourse(${course.id})"
                        title="Delete Course"
                        type="button"
                    >

                        <i class="fa-solid fa-trash"></i>

                    </button>

                </div>

            </td>
        `;


        courseTableBody.appendChild(row);

    });


    showingText.textContent =
        `Showing ${courseList.length} course${courseList.length !== 1 ? "s" : ""}`;
}


/* =========================================================
   UPDATE STATISTICS
========================================================= */

function updateStatistics() {

    /* Total courses */
    totalCourses.textContent =
        courses.length;


    /* Active courses */
    const active =
        courses.filter(
            course => course.status === "Active"
        ).length;

    activeCourses.textContent =
        active;


    /* Departments */
    const departments =
        new Set(
            courses.map(course => course.department)
        );

    departmentCount.textContent =
        departments.size;


    /* Total enrolled */
    const enrolled =
        courses.reduce(
            (total, course) =>
                total + Number(course.students || 0),
            0
        );

    totalEnrolled.textContent =
        enrolled;
}


/* =========================================================
   OPEN ADD COURSE MODAL
========================================================= */

function openAddModal() {

    editingCourseId = null;

    courseForm.reset();


    /* Change modal text */
    const title =
        document.querySelector(".modal-header h2");

    const saveButton =
        document.querySelector(".save-button");


    title.textContent =
        "Add New Course";


    saveButton.innerHTML =
        `<i class="fa-solid fa-check"></i> Add Course`;


    courseModal.classList.add("show");


    setTimeout(() => {

        courseName.focus();

    }, 200);
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeCourseModal() {

    courseModal.classList.remove("show");

    courseForm.reset();

    editingCourseId = null;
}


/* =========================================================
   ADD / UPDATE COURSE
========================================================= */

courseForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        /* Get values */
        const name =
            courseName.value.trim();

        const code =
            courseId.value.trim().toUpperCase();

        const department =
            courseDepartment.value;

        const credits =
            Number(courseCredits.value);

        const duration =
            courseDuration.value;

        const faculty =
            courseFaculty.value.trim();

        const students =
            Number(maxStudents.value);

        const status =
            courseStatus.value;


        /* Validation */
        if (
            name === "" ||
            code === "" ||
            department === "" ||
            credits <= 0 ||
            duration === "" ||
            faculty === "" ||
            students <= 0
        ) {

            alert(
                "Please fill in all course details correctly."
            );

            return;
        }


        /* Check duplicate Course ID */
        const duplicate =
            courses.find(
                course =>
                    course.code.toLowerCase() ===
                    code.toLowerCase() &&
                    course.id !== editingCourseId
            );


        if (duplicate) {

            alert(
                "Course ID already exists."
            );

            courseId.focus();

            return;
        }


        /* UPDATE */
        if (editingCourseId !== null) {

            const course =
                courses.find(
                    course =>
                        course.id === editingCourseId
                );


            if (course) {

                course.name = name;

                course.code = code;

                course.department =
                    department;

                course.credits =
                    credits;

                course.duration =
                    duration;

                course.faculty =
                    faculty;

                course.students =
                    students;

                course.status =
                    status;
            }


            alert(
                "Course updated successfully!"
            );

        }


        /* ADD */
        else {

            const newCourse = {

                id:
                    Date.now(),

                name:
                    name,

                code:
                    code,

                department:
                    department,

                credits:
                    credits,

                duration:
                    duration,

                faculty:
                    faculty,

                students:
                    students,

                status:
                    status
            };


            courses.push(newCourse);


            alert(
                "Course added successfully!"
            );
        }


        /* Save */
        saveCourses();


        /* Refresh */
        displayCourses();

        updateStatistics();

        closeCourseModal();

    }
);


/* =========================================================
   EDIT COURSE
========================================================= */

function editCourse(id) {

    const course =
        courses.find(
            course => course.id === id
        );


    if (!course) {
        return;
    }


    editingCourseId = id;


    /* Fill form */
    courseName.value =
        course.name;

    courseId.value =
        course.code;

    courseDepartment.value =
        course.department;

    courseCredits.value =
        course.credits;

    courseDuration.value =
        course.duration;

    courseFaculty.value =
        course.faculty;

    maxStudents.value =
        course.students;

    courseStatus.value =
        course.status;


    /* Change modal heading */
    document.querySelector(
        ".modal-header h2"
    ).textContent =
        "Edit Course";


    document.querySelector(
        ".save-button"
    ).innerHTML =
        `<i class="fa-solid fa-floppy-disk"></i> Update Course`;


    courseModal.classList.add("show");

    courseName.focus();
}


/* =========================================================
   DELETE COURSE
========================================================= */

function deleteCourse(id) {

    const course =
        courses.find(
            course => course.id === id
        );


    if (!course) {
        return;
    }


    const confirmDelete =
        confirm(
            `Are you sure you want to delete "${course.name}"?`
        );


    if (!confirmDelete) {
        return;
    }


    courses =
        courses.filter(
            course => course.id !== id
        );


    saveCourses();

    displayCourses();

    updateStatistics();


    alert(
        "Course deleted successfully!"
    );
}


/* =========================================================
   SEARCH COURSES
========================================================= */

function searchCourses() {

    const searchValue =
        headerSearch.value
            .trim()
            .toLowerCase();


    const department =
        departmentFilter.value;


    const status =
        statusFilter.value;


    const filteredCourses =
        courses.filter(course => {

            const matchesSearch =
                course.name
                    .toLowerCase()
                    .includes(searchValue) ||

                course.code
                    .toLowerCase()
                    .includes(searchValue) ||

                course.department
                    .toLowerCase()
                    .includes(searchValue) ||

                course.faculty
                    .toLowerCase()
                    .includes(searchValue);


            const matchesDepartment =
                department === "" ||
                course.department === department;


            const matchesStatus =
                status === "" ||
                course.status === status;


            return (
                matchesSearch &&
                matchesDepartment &&
                matchesStatus
            );

        });


    displayCourses(filteredCourses);
}


/* =========================================================
   SEARCH EVENT
========================================================= */

headerSearch.addEventListener(
    "input",
    searchCourses
);


/* =========================================================
   DEPARTMENT FILTER
========================================================= */

departmentFilter.addEventListener(
    "change",
    searchCourses
);


/* =========================================================
   STATUS FILTER
========================================================= */

statusFilter.addEventListener(
    "change",
    searchCourses
);


/* =========================================================
   FILTER BUTTON
========================================================= */

const filterButton =
    document.getElementById("filterButton");


filterButton.addEventListener(
    "click",
    function () {

        searchCourses();

    }
);


/* =========================================================
   ADD COURSE BUTTON
========================================================= */

addCourseButton.addEventListener(
    "click",
    openAddModal
);


/* =========================================================
   CLOSE MODAL BUTTON
========================================================= */

closeModal.addEventListener(
    "click",
    closeCourseModal
);


/* =========================================================
   CANCEL BUTTON
========================================================= */

cancelModal.addEventListener(
    "click",
    closeCourseModal
);


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

courseModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === courseModal
        ) {

            closeCourseModal();

        }

    }
);


/* =========================================================
   ESCAPE KEY CLOSE MODAL
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            courseModal.classList.contains("show")
        ) {

            closeCourseModal();

        }

    }
);


/* =========================================================
   DARK MODE
========================================================= */

function updateThemeIcon() {

    const icon =
        themeButton.querySelector("i");


    if (
        document.body.classList.contains("dark")
    ) {

        icon.className =
            "fa-solid fa-sun";

    } else {

        icon.className =
            "fa-solid fa-moon";
    }
}


themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "courseTheme",
            isDark
                ? "dark"
                : "light"
        );


        updateThemeIcon();

    }
);


/* =========================================================
   LOAD SAVED THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "courseTheme"
    );


if (savedTheme === "dark") {

    document.body.classList.add("dark");

}


updateThemeIcon();


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

menuButton.addEventListener(
    "click",
    function () {

        sidebar.classList.toggle(
            "show"
        );

    }
);


/* =========================================================
   CLOSE SIDEBAR WHEN CLICKING LINK
========================================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                sidebar.classList.remove(
                    "show"
                );

            }
        );

    });


/* =========================================================
   ESCAPE HTML
   Prevents HTML injection when displaying user data.
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   INITIAL PAGE LOAD
========================================================= */

displayCourses();

updateStatistics();


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "Course Management System loaded successfully."
);

