'use client';

import { useEffect, useState } from 'react';

type Patient = {
  id: number;
  name: string;
  dob: string;
  email?: string;
};

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/patients')
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error('Failed to fetch patients:', err));
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Patients</h1>
      {patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <ul className="space-y-4">
          {patients.map((p) => (
            <li key={p.id} className="border p-4 rounded shadow-sm">
              <div><strong>Name:</strong> {p.name}</div>
              <div><strong>DOB:</strong> {p.dob}</div>
              <div><strong>Email:</strong> {p.email || 'N/A'}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

