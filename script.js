document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Resume");
    var showForm = document.getElementById("show-resume");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var names = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var education = document.getElementById("education").value;
        var workExperience = document.getElementById("work-experience").value;
        var skills = document.getElementById("skills").value;
        // Generating the resume HTML
        var resume = "\n            <h2><b>Resume</b></h2>\n            <h4>Personal Information</h4>\n            <p>Name: ".concat(names, "</p>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h4>Educational Information</h4>\n            <p>").concat(education, "</p>\n            <h4>Work Experience</h4>\n            <p>").concat(workExperience, "</p>\n            <h4>Skills</h4>\n            <p>").concat(skills, "</p>\n        ");
        // Displaying the resume and making it visible
        if (showForm) {
            showForm.innerHTML = resume;
            showForm.style.display = "block"; // Make it visible
        }
        else {
            console.log("The Resume is not working..... why?");
        }
    });
});
