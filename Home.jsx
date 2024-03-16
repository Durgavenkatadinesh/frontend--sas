import React from 'react';
import Attandance from '../Attandance';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="text-center text-3xl font-bold w-1/2">SMART ATTENDANCE MONITORING</div>
      <div className='w-1/2'><Attandance/></div>
    </div>
  );
}
