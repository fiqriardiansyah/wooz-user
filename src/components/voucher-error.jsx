import Woozimg from '../assets/wooz.png';
import React from 'react';

import Errorimg from '../assets/error.png';
import { useGlobalContext } from '../provider/global';

export const VOUCHER_FAILED = 'voucher-failed';

export default function VoucherError() {

    const global = useGlobalContext();

    const [error, setError] = React.useState('');
        
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const voucher = formData.get('voucher');
        
        if(!voucher.length) {
            setError('Voucher required!');
          } else {
            setError('');
            global.setState((prev) => ({...prev, voucher, state: prev.result }));
          }
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col items-center">
            <img src={Woozimg} className='ml-4 h-[100px]' alt="" />
            <p className='text-2xl font-bold mb-10'>Oops! Voucher gagal di redeem</p>
            <img src={Errorimg} className='h-[200px]' alt="" />
            <p className='text-sm'>Cek dan pastikan kembali kode voucher mu sesuai            </p>
            <input type="text" name='voucher' className={`bg-gray-200 my-4 rounded-lg p-3 lg:px-20 px-10 text-center text-gray-700 ${error ? 'border border-red-400 border-solid' : ""}`} placeholder='INPUT ULANG' />
            <p className='mt-3 text-center text-sm'>
                Belum punya  voucher? <br />
                Beli di counter Woozz terdekat atau <a href="#" className='font-semibold'>hubungi admin</a></p>
        </form>
    )
}