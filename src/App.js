// // frontend/src/App.js
// import {  Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup"; // <-- Add Signup page
// import ProtectedRoute from "./components/ProtectedRoute";
// import TriageDashboard from "./pages/TriageDashboard"; // Dashboard after login

// function App() {
//   return (
//     <AuthProvider>
      
//         <Routes>
//           {/* Public routes */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />

//           {/* Protected route */}
//           <Route
//             path="/dashboard"
//             element={
//               <ProtectedRoute>
//                 <TriageDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Fallback route */}
//           <Route path="*" element={<Login />} />
//         </Routes>
      
//     </AuthProvider>
//   );
// }

// export default App;
// frontend/src/App.js
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home"; // ✅ Import Home
import ProtectedRoute from "./components/ProtectedRoute";
import TriageDashboard from "./pages/TriageDashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />         {/* ✅ Home route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <TriageDashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback: redirect unknown paths to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
