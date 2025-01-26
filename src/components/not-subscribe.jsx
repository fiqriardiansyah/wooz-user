import Woozimg from '../assets/wooz.png';
import React from 'react';

import Dizzyimg from '../assets/dizzy.png';
import { useGlobalContext } from '../provider/global';
import { LOGIN } from './login';
import { VOUCHER } from './voucher';

export const NOT_SUBSCRIBE = 'not-subscribe';

export default function NotSubscribe() {

        const global = useGlobalContext();
    
        const onLogout = (e) => {
            global.setState((prev) => ({...prev, state: LOGIN }));
        };

        const onStarted = () => {
            global.setState((prev) => ({...prev, state: VOUCHER }));
        }

    return (
        <div className="flex flex-col items-center">
            <img src={Woozimg} className='ml-4' alt="" />
            <p className='text-sm'>Hi, 081519999082            </p>
            <p className='text-sm'>Kamu belum berlangganan paket apapun             </p>
            <img src={Dizzyimg} className='h-[200px] my-5' alt="" />
            <p className='text-sm'>Mau menikmati jaringan unlimited cepat dan stabil ?            </p>
            <button onClick={onStarted} className='bg-blue-900 text-white my-5 rounded-lg p-3 px-10 cursor-pointer'>
                Get Started
            </button>
            <div className='w-full h-[1px] bg-gray-200' />
            <button onClick={onLogout} className='bg-gray-200 text-gray-700 my-5 rounded-lg p-3 px-10 cursor-pointer'>
                Logout
            </button>
        </div>
    )
}