import Woozimg from '../assets/wooz.png';
import React from 'react';
import { useGlobalContext } from '../provider/global';

export const VOUCHER = "voucher";

export default function Voucher() {
    const global = useGlobalContext();

        const [error, setError] = React.useState('');
    
        const onSubmit = (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const voucher = formData.get('voucher');

          if(!voucher.length) {
            setError('voucher required!');
          } else {
            setError('');
            global.setState((prev) => ({...prev, voucher, state: prev.result }));
          }
        }
    
    return (
        <div className="flex flex-col items-center">
            <img src={Woozimg} className='ml-4 h-[100px]' alt="" />
            <p className='text-2xl font-bold mb-10'>Masukkan kode voucher</p>
            <form onSubmit={onSubmit} className="bg-gray-200 rounded-2xl p-8 flex flex-col gap-4 items-center mt-5">
                <p className='text-sm'>Masukkan kode voucher paket woozz yang kamu miliki                </p>
                <input type="text" name='voucher' className={`bg-white rounded-lg p-3 px-20 text-center text-gray-400 ${error ? 'border border-red-400 border-solid' : ""}`} />
                <button type='submit' className='bg-blue-900 text-white rounded-lg p-3 w-[200px] lg:w-[300px] cursor-pointer'>
                    Submit
                </button>
                <p className='mt-3 text-center text-sm'>
                Belum punya  voucher? <br />
                Beli di counter Woozz terdekat atau <a href="#" className='font-semibold'>hubungi admin</a></p>
            </form>
        </div>
    )
}