import React from 'react';
import Woozimg from '../assets/wooz.png';
import { useGlobalContext } from '../provider/global';
import { DETAIL } from './detail';

export const LOGIN = 'login';

export default function Login() {
    const global = useGlobalContext();

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [error, setError] = React.useState('');
      

    const handleKeyDown = (e) => {
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];
        if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
          e.preventDefault(); // Block non-numeric keys
        }
      };

    const handleChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const onClick = () => {
      global.setState((prev) => ({...prev, phoneNumber, state: DETAIL }));
    }


    return (
        <div className="flex flex-col items-center">
            <img src={Woozimg} className='ml-4' alt="" />
            <p className='text-center'>Internet Unlimited Cepat dan Stabil</p>
            <div className="bg-gray-200 rounded-2xl p-8 flex flex-col gap-4 items-center mt-5">
                <p className='text-sm'>LOGIN / DAFTAR</p>
                <div className="w-full">
                <p className='text-sm text-start'>Nomor Handphone</p>
                </div>
                <input type="text" onKeyDown={handleKeyDown} onChange={handleChange} placeholder="Cth: 0812423445356" className={`bg-white rounded-lg p-3 px-20 text-center text-gray-400 ${error ? 'border border-red-400 border-solid' : ""}`} />
                <button onClick={onClick} className='bg-blue-900 text-white rounded-lg p-3 w-[300px] cursor-pointer'>
                Kirim kode OTP via SMS
                </button>
                <button onClick={onClick} className='bg-green-600 text-white rounded-lg p-3 w-[300px] cursor-pointer'>
                Kirim kode OTP ke Whatsapp
                </button>
            </div>
        </div>
    )
}