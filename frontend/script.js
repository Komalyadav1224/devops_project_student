document.getElementById("studentForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value,
        semester: document.getElementById("semester").value,
        amount: Number(document.getElementById("amount").value),
        paymentMethod: document.getElementById("paymentMethod").value
    };

    const result = document.getElementById("result");
    result.innerHTML = "Processing...";

    try {
        const response = await fetch("http://localhost:5001/students", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        });

        const data = await response.json();

        if (!response.ok) {
            result.innerHTML = "❌ " + data.message;
            return;
        }

        result.innerHTML = `
            <h3>Registration Successful ✅</h3>
            <p>Student ID: ${data.studentId}</p>
            <p>Payment ID: ${data.payment.paymentId}</p>
            <p>${data.payment.status}</p>
        `;
    } catch (error) {
        console.error(error);
        result.innerHTML = "❌ Services are not reachable.";
    }
});
