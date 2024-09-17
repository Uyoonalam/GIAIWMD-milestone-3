document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("Resume") as HTMLFormElement;
    let showForm = document.getElementById("show-resume") as HTMLDivElement;

    form.addEventListener("submit", function (event: Event) {
        event.preventDefault();

        const names = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const workExperience = (document.getElementById("work-experience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        let resume = `
            <h2><b>Resume</b></h2>
            <h4>Personal Information</h4>
            <p>Name: ${names}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h4>Educational Information</h4>
            <p>${education}</p>
            <h4>Work Experience</h4>
            <p>${workExperience}</p>
            <h4>Skills</h4>
            <p>${skills}</p>
        `;

        if (showForm) {
            showForm.innerHTML = resume;
            showForm.style.display = "block"; // Make it visible
        } else {
            console.log("The Resume is not working..... why?");
        }
    });
});
