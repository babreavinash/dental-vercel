import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dental Clinic</h1>
      <p>Welcome to our professional dental care website</p>

      <Link href="/appointment">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>
          Book Appointment
        </button>
      </Link>
    </div>
  );
}