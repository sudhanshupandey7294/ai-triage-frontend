// // frontend/src/components/SymptomForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// function SymptomForm({ onResult }) {
//   const [formData, setFormData] = useState({
//     name: '', age: '', gender: '',
//     symptoms: '', temperature: '',
//     heartRate: '', bp: ''
//   });

//   const handleChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const payload = {
//       name: formData.name,
//       age: Number(formData.age),
//       gender: formData.gender,
//       symptoms: formData.symptoms.split(','),
//       vitals: {
//         temperature: Number(formData.temperature),
//         heartRate: Number(formData.heartRate),
//         bp: formData.bp
//       }
//     };
//     const res = await axios.post('http://localhost:5000/api/triage', payload);
//     onResult(res.data);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2">
//       {['name', 'age', 'gender', 'symptoms', 'temperature', 'heartRate', 'bp'].map((field) => (
//         <input
//           key={field}
//           name={field}
//           placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//           className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//           onChange={handleChange}
//           required
//         />
//       ))}
//       <button
//         type="submit"
//         className="col-span-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//       >
//         Analyze Patient
//       </button>
//     </form>
//   );
// }

// export default SymptomForm;
import React, { useState } from 'react';
import axios from 'axios';

function SymptomForm({ onResult }) {
  const [formData, setFormData] = useState({
    name: '', age: '', gender: '',
    symptoms: '', temperature: '',
    heartRate: '', bp: ''
  });

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      age: Number(formData.age),
      gender: formData.gender,
      symptoms: formData.symptoms.split(',').map(s => s.trim()),
      vitals: {
        temperature: Number(formData.temperature),
        heartRate: Number(formData.heartRate),
        bp: formData.bp
      }
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE}/api/triage`, payload);
      onResult(res.data);
    } catch (err) {
      console.error("❌ Triage request failed:", err.message);
      alert("Triage failed. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-1 md:grid-cols-2">
      {['name', 'age', 'gender', 'symptoms', 'temperature', 'heartRate', 'bp'].map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          required
        />
      ))}
      <button
        type="submit"
        className="col-span-full mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Analyze Patient
      </button>
    </form>
  );
}

export default SymptomForm;
