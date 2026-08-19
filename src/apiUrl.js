const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.MODE === 'production' 
    ? `https://eventify-backend-ten.vercel.app` 
    : `http://localhost:9000`);

export default API_BASE_URL;
