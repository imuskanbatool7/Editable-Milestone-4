var resume = document.getElementById('resume-form');
var resumeElement = document.getElementById('resume-form');
resume.addEventListener('submit', function (event) {
    event.preventDefault();
    //INPUT VALUES
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //GENERATING FORM
    var resumeHTML = "\n    <u><h2><b>Editable Resume</b></h2></u>\n    <h3>Your Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n     <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n      <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n      <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    //DISPLAY
    if (resumeElement) {
        resumeElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume show element is missing');
    }
});
