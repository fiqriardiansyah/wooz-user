import React from 'react';
import Woozimg from '../assets/wooz.png';
import { useGlobalContext } from '../provider/global';
import { OTP } from './otp';

export const PHONE_NUMBER = 'phone-number';

export default function PhoneNumber() {
    const global = useGlobalContext();

    const [error, setError] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState();

    const handleKeyDown = (e) => {
        const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];
        if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
          e.preventDefault(); // Block non-numeric keys
        }
      };

    const handleChange = (e) => {
      setPhoneNumber(e.target.value);
    };

    const onSend = () => {
      if(!phoneNumber.length) {
        setError('Phone number required!');
      } else {
        setError('');
        global.setState((prev) => ({...prev, phoneNumber, state: OTP }));
      }
    }

    return (
        <div className="flex flex-col items-center">
            <div className='flex items-center font-bold text-2xl'>Selamat Datang Di <img src={Woozimg} className='ml-4 h-[100px]' alt="" /> </div>
            <p className='text-center'>Internet Unlimited Cepat dan Stabil</p>
            <div className="bg-gray-200 rounded-2xl p-8 flex flex-col gap-4 items-center mt-5">
                <p className='text-sm'>Untuk mengakses jaringan kami membutuhkan verifikasi                </p>
                <p className='text-lg'>Masukkan No.HP mu :                </p>
                <input 
                  type="text" onKeyDown={handleKeyDown} onChange={handleChange} placeholder="Cth: 0812423445356" 
                  className={`bg-white rounded-lg p-3 lg:px-20 px-10 text-center text-gray-400 ${error ? 'border border-red-400 border-solid' : ""}`} />
                {error && <p className='text-red-400'>{error}</p>}
                <button onClick={onSend} className='bg-blue-900 text-white rounded-lg p-3 w-[200px] lg:w-[300px] cursor-pointer'>
                Kirim kode OTP via SMS
                </button>
                <button onClick={onSend} className='bg-green-600 text-white rounded-lg p-3 w-[200px] lg:w-[300px] cursor-pointer'>
                Kirim kode OTP ke Whatsapp
                </button>
            </div>
        </div>
    )
}