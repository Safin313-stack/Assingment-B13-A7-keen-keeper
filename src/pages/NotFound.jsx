import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-7xl font-bold text-gray-200 mb-4">404</p>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">
        Page not found
      </h2>
      <p className="text-sm text-gray-400 mb-6">
        This page doesn't exist. Maybe the link is wrong?
      </p>
      <button className="green-btn" onClick={() => navigate("/")}>
        Go back home
      </button>
    </div>
  );
}

