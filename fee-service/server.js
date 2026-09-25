const express = require("express");

const app = express();
app.use(express.json());

const PORT = 5002;

app.get("/", (req, res) => {
    res.json({
        service: "Fee Payment Service",
        status: "running"
    });
});

app.post("/payments", (req, res) => {
    const { studentId, name, amount, paymentMethod } = req.body;

    if (!studentId || !name || !amount || !paymentMethod) {
        return res.status(400).json({
            message: "Payment details are incomplete."
        });
    }

    console.log("Payment request:", {
        studentId,
        name,
        amount,
        paymentMethod
    });

    res.json({
        paymentId: "PAY-" + Math.floor(Math.random() * 100000),
        status: "Fee Payment Successful",
        amount,
        method: paymentMethod
    });
});

app.listen(PORT, () => {
    console.log(`Fee Service running on port ${PORT}`);
});
