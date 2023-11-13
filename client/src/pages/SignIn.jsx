import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData(
      (value) => (value = { ...formData, [e.target.id]: e.target.value })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // console.log(data);
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }

      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-70 text-lg font-medium"
          type="submit"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don&apos;t have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700">{error && "Something went wrong..."}</p>
    </div>
  );
}
