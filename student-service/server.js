const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

app.get("/", (req, res) => {
    res.json({
        service: "Student Management Service",
        status: "running"
    });
});

app.post("/students", async (req, res) => {
    const { name, phone, course, semester, amount, paymentMethod } = req.body;

    if (!name || !phone || !course || !semester || !amount || !paymentMethod) {
        return res.status(400).json({
            message: "Please fill all fields."
        });
    }

    const studentId = "STU-" + Math.floor(Math.random() * 100000);

    try {
        const paymentResponse = await fetch("http://fee-service:5002/payments", { 
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                studentId,
                name,
                amount,
                paymentMethod
            })
        });

        const payment = await paymentResponse.json();

        res.json({
            message: "Student registered successfully",
            studentId,
            name,
            course,
            semester,
            payment
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Fee Payment Service is unavailable."
        });
    }
});

app.listen(PORT, () => {
    console.log(`Student Service running on port ${PORT}`);
});
