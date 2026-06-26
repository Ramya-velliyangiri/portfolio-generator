const generateBtn = document.getElementById('generateBtn');

if (generateBtn) {
    generateBtn.addEventListener('click', function() {
    
        localStorage.setItem('pName', document.getElementById('name').value);
        localStorage.setItem('pRole', document.getElementById('role').value);
        localStorage.setItem('pAbout', document.getElementById('about').value);
        localStorage.setItem('pSkills', document.getElementById('skills').value);
        localStorage.setItem('pProjects', document.getElementById('projects').value);
        localStorage.setItem('pEducation', document.getElementById('education').value);
        localStorage.setItem('pContacts', document.getElementById('contacts').value);
        localStorage.setItem('pGithub', document.getElementById('github').value);
        localStorage.setItem('pCertificate', document.getElementById('certificate').value);

        const photoInput = document.getElementById('photo');
        if (photoInput && photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                localStorage.setItem('pPhoto', e.target.result);
                window.location.href = 'Portfolio.html'; 
            };
            reader.readAsDataURL(photoInput.files[0]);
        } else {
            window.location.href = 'Portfolio.html';
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const outName = document.getElementById('output-name');
    const outRole = document.getElementById('output-role');
    const outAbout = document.getElementById('output-about');
    const outSkills = document.getElementById('output-skills');
    const outProjects = document.getElementById('output-projects');
    const outEducation = document.getElementById('output-education');
    const outContacts = document.getElementById('output-contacts');
    const outGithub = document.getElementById('output-github');
    const outCertificate = document.getElementById('output-certificate');
    const outPhoto = document.getElementById('output-photo');

    // Displaying values from memory bounds
    if (outName) outName.innerText = localStorage.getItem('pName') || 'Kyrie Petrakis';
    if (outRole) outRole.innerText = localStorage.getItem('pRole') || 'DESIGN PHILOSOPHY';
    if (outAbout) outAbout.innerText = localStorage.getItem('pAbout') || 'Lorem ipsum dolor sit amet...';
    if (outSkills) outSkills.innerText = localStorage.getItem('pSkills') || 'Your Skills';
    if (outProjects) outProjects.innerText = localStorage.getItem('pProjects') || 'Your Projects Details';
    if (outEducation) outEducation.innerText = localStorage.getItem('pEducation') || 'Education Details';
    if (outContacts) outContacts.innerText = localStorage.getItem('pContacts') || 'Contact Info';
    if (outGithub) outGithub.innerText = localStorage.getItem('pGithub') || 'GitHub Link';
    if (outCertificate) outCertificate.innerText = localStorage.getItem('pCertificate') || 'Certificates';
    
    if (outPhoto && localStorage.getItem('pPhoto')) {
        outPhoto.src = localStorage.getItem('pPhoto');
    }
});