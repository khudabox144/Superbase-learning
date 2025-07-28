import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    smoothies: "",
    ratings: "",
  });
  const [loading, setLoading] = useState(true);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        setFormError("Could not fetch smoothie data");
        navigate("/", { replace: true });
      } else {
        setFormData({
          title: data.title,
          smoothies: data.smoothies,
          ratings: data.ratings,
        });
        setLoading(false);
      }
    };

    fetchSmoothie();
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.title || !formData.smoothies || !formData.ratings) {
      setFormError("Please fill in all fields");
      return;
    }

    const { error } = await supabase
      .from("smoothies")
      .update(formData)
      .eq("id", id);

    if (error) {
      setFormError("Failed to update smoothie");
      console.error(error);
    } else {
      navigate("/");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Update Smoothie</h2>
            <p className="mt-2 text-sm text-gray-600">
              Edit your delicious smoothie recipe
            </p>
          </div>

          {formError && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Smoothie name"
              />
            </div>

            <div>
              <label
                htmlFor="smoothies"
                className="block text-sm font-medium text-gray-700"
              >
                Ingredients
              </label>
              <textarea
                id="smoothies"
                rows={4}
                value={formData.smoothies}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="List your ingredients..."
              />
            </div>

            <div>
              <label
                htmlFor="ratings"
                className="block text-sm font-medium text-gray-700"
              >
                Rating (1-10)
              </label>
              <input
                id="ratings"
                type="number"
                min="1"
                max="10"
                value={formData.ratings}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your rating"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-4 cursor-pointer py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" cursor-pointer px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Update Smoothie
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;