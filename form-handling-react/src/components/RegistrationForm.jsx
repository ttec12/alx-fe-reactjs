import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username)|| 
    if (!email) || 
    if (!password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("User registered:", result);
      alert("Registration successful!");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Controlled Form</h2>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}   // ✅ uses formData, not plain username
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}   // ✅ uses formData, not plain email
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}   // ✅ uses formData, not plain password
        onChange={handleChange}
        className="border p-2 w-full rounded"
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}



