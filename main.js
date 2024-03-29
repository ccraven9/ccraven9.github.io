const nCirlce = document.querySelector('.neumo-circle');
const githubBtn = document.getElementById('github');
const resumeBtn = document.getElementById('resume');
const linkedBtn = document.getElementById('linkedIn');
const resumeURL = "resume/resume.html";
const githubURL = "https://github.com/ccraven9";
const linkedInURL = "https://www.linkedin.com/in/carter-craven-75a029107";

function navigate(url) {
    window.location.assign(url);
}

nCirlce.addEventListener('click',
    function () {
        navigate(resumeURL);
    });

githubBtn.addEventListener('click',
    function () {
        navigate(githubURL);
    });

resumeBtn.addEventListener('click',
    function () {
        navigate(resumeURL);
    });

linkedBtn.addEventListener('click',
    function () {
        navigate(linkedInURL);
    });