import { useState } from 'react';

export default function Appointment() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})}
        /><br/><br/>

        <input
          placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})}
        /><br/><br/>

        <input
          type="date"
          onChange={e => setForm({...form, date: e.target.value})}
        /><br/><br/>

        <textarea
          placeholder="Message"
          onChange={e => setForm({...form, message: e.target.value})}
        /><br/><br/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}