import { useState } from "react";
import { useNavigate } from "react-router";
import supabase from "../config/supabaseClient";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [smoothies, setSmoothies] = useState("");
  const [ratings, setRatings] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !smoothies || !ratings) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("smoothies")
      .insert([{ title, smoothies, ratings }]) 
      .select()
    if (error) {
      console.error(error);
      setFormError("Please fill in all the fields correctly.");
    } else if (data) {
      console.log(data);
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-blue-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-purple-600">
          Create Smoothie
        </h2>

        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Enter smoothie title"
          />
        </div>

        {/* Smoothies Field */}
        <div>
          <label
            htmlFor="smoothies"
            className="block text-lg font-medium text-gray-700"
          >
            Smoothies:
          </label>
          <textarea
            id="smoothies"
            value={smoothies}
            onChange={(e) => setSmoothies(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            rows="4"
            placeholder="Describe the smoothie"
          />
        </div>

        {/* Ratings Field */}
        <div>
          <label
            htmlFor="ratings"
            className="block text-lg font-medium text-gray-700"
          >
            Ratings:
          </label>
          <input
            type="number"
            id="ratings"
            value={ratings}
            onChange={(e) => setRatings(e.target.value)}
            className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Give a rating (1-10)"
            min="1"
            max="10"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-xl text-lg font-semibold transition-all duration-200"
        >
          Create Smoothie Recipe
        </button>

        {/* Error Message */}
        {formError && (
          <p className="text-center text-red-500 font-medium text-lg">
            {formError}
          </p>
        )}
      </form>
    </div>
  );
};

export default Create;
