const form = document.getElementById("registrationForm");
const result = document.getElementById("result");
const askButton = document.getElementById("askButton");
const questionInput = document.getElementById("question");
const assistantResponse = document.getElementById("assistantResponse");


// Eligibility checker
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const branch = document.getElementById("branch").value;
    const semester = parseInt(document.getElementById("semester").value);
    const course = document.getElementById("course").value;

    let courseName = document.getElementById("course").options[
        document.getElementById("course").selectedIndex
    ].text;

    let eligible = false;
    let message = "";

    // Example eligibility rules
    if (course === "dsa" && semester >= 2) {
        eligible = true;
    } else if (course === "dbms" && semester >= 3) {
        eligible = true;
    } else if (course === "web" && semester >= 2) {
        eligible = true;
    } else if (course === "ai" && semester >= 4) {
        eligible = true;
    } else if (course === "ml" && semester >= 5) {
        eligible = true;
    }

    if (eligible) {
        message = `
            <h3>Eligibility Confirmed ✅</h3>
            <p>Hello <strong>${name}</strong>!</p>
            <p>You are eligible to register for
            <strong>${courseName}</strong>.</p>
            <p>You can proceed with the registration process.</p>
        `;
    } else {
        message = `
            <h3>Not Eligible Yet ❌</h3>
            <p>Hello <strong>${name}</strong>.</p>
            <p>You are currently not eligible for
            <strong>${courseName}</strong>.</p>
            <p>Please check the required semester or prerequisites.</p>
        `;
    }

    result.innerHTML = message;
});


// Registration assistant
askButton.addEventListener("click", function() {

    const question = questionInput.value.trim().toLowerCase();

    if (question === "") {
        assistantResponse.innerHTML =
            "<p>Please enter a question first.</p>";
        return;
    }

    let response = "";

    if (question.includes("eligible") || question.includes("eligibility")) {
        response = `
            <p><strong>Eligibility:</strong> Select your branch,
            semester and course above, then click
            "Check Eligibility" to see your result.</p>
        `;
    }

    else if (question.includes("register") ||
             question.includes("registration")) {
        response = `
            <p><strong>Registration Guide:</strong></p>
            <ol>
                <li>Enter your student details.</li>
                <li>Select your semester and course.</li>
                <li>Check your eligibility.</li>
                <li>If eligible, proceed with course registration.</li>
            </ol>
        `;
    }

    else if (question.includes("machine learning") ||
             question.includes("ml")) {
        response = `
            <p><strong>Machine Learning:</strong>
            This example system requires students to be in
            Semester 5 or above.</p>
        `;
    }

    else if (question.includes("artificial intelligence") ||
             question.includes("ai")) {
        response = `
            <p><strong>Artificial Intelligence:</strong>
            This example system requires students to be in
            Semester 4 or above.</p>
        `;
    }

    else if (question.includes("dsa") ||
             question.includes("data structure")) {
        response = `
            <p><strong>DSA:</strong>
            This example system allows registration from
            Semester 2 onwards.</p>
        `;
    }

    else if (question.includes("hello") ||
             question.includes("hi")) {
        response = `
            <p>Hello! 👋 I'm your Registration Assistant.
            Ask me about eligibility or registration.</p>
        `;
    }

    else {
        response = `
            <p>I can help you with:</p>
            <ul>
                <li>Course eligibility</li>
                <li>Registration steps</li>
                <li>Course requirements</li>
                <li>AI, ML and DSA registration guidance</li>
            </ul>
        `;
    }

    assistantResponse.innerHTML = response;
});
