import React from 'react';
import Woozimg from '../assets/wooz.png';

import Successimg from '../assets/success.png';
import { useGlobalContext } from '../provider/global';
import { LOGIN } from './login';

export const VOUCHER_SUCCESS = 'voucher-success';

export default function VoucherSuccess() {
    const global = useGlobalContext();

    const onClick = () => {
        global.setState((prev) => ({...prev, state: LOGIN }));
    }

    return (
        <div className="flex flex-col items-center">
            <img src={Woozimg} className='ml-4 h-[100px]' alt="" />
            <p className='text-2xl font-bold mb-10'>Yeay! Voucher mu berhasil di redeem</p>
            <img src={Successimg} className='h-[200px]' alt="" />
            <p className='text-sm my-5'>Mau cek paket aktif mu?</p>
            <button onClick={onClick} className='bg-blue-900 text-white rounded-lg p-3 px-10 cursor-pointer'>
                Login
            </button>
        </div>
    )
}