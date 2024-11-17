console.log("script.js loaded successfully");

// Function to generate resume
function generateResume() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const education = document.getElementById('education').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();

    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields before generating your resume!");
        return;
    }

    const resumeContent = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    document.getElementById('resumeContent').innerHTML = resumeContent;
    document.getElementById('resume').style.display = 'block';
    document.getElementById('resumeForm').style.display = 'none';
}

// Function to download resume as PDF
function downloadPDF() {
    console.log("Download button clicked");
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const content = document.getElementById('resumeContent').innerHTML;
    
    // Ensure the content is sanitized for security (no HTML injections)
    const sanitizedContent = DOMPurify.sanitize(content);

    doc.html(sanitizedContent, {
        callback: function (doc) {
            console.log("PDF generated successfully");
            doc.save('My_Resume.pdf');
        },
        x: 10,
        y: 10,
        width: 190,
    });
}
