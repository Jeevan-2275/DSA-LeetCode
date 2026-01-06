// Form Validation

// Email & password validation
// Show inline error messages


import { useState } from "react";

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            setEmail("");
            setPassword("");
            setErrors({});
        }
    };

    return (
        <div>
            <h3>Form Validation</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <span style={{ color: "red" }}>{errors.password}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;