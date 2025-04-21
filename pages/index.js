import React from "react";

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>🏍️ Ducati Enthusiast Hub</h1>
      <div style={{ marginTop: '2rem' }}>
        <h2>Latest Ducati Models</h2>
        <ul>
          <li>Panigale V4 R</li>
          <li>Multistrada V4 S</li>
          <li>Monster SP</li>
        </ul>
        <h2 style={{ marginTop: '1.5rem' }}>Race Results</h2>
        <ul>
          <li>2025 MotoGP Round 3 – Ducati takes 1st & 2nd</li>
          <li>WorldSBK Imola – Ducati clinches the podium</li>
        </ul>
        <h2 style={{ marginTop: '1.5rem' }}>Parts & Accessories</h2>
        <ul>
          <li>Termignoni Exhaust Systems</li>
          <li>Ducati Performance Carbon Kits</li>
          <li>Adjustable Rearsets</li>
        </ul>
      </div>
    </div>
  );
}