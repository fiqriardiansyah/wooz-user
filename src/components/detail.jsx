import Woozimg from '../assets/wooz.png';
import React from 'react';
import { useGlobalContext } from '../provider/global';
import { LOGIN } from './login';

export const DETAIL = 'detail';

export default function Detail() {

            const global = useGlobalContext();
        
            const onLogout = (e) => {
                global.setState((prev) => ({...prev, state: LOGIN }));
            };
    return (
        <div className="flex flex-col items-center">
            <img src={Woozimg} className='ml-4' alt="" />
            <p className='text-sm'>Hi, 081519999082            </p>
            <p className='text-sm my-5'>Paket mu saat ini :            </p>
            <div className="overflow-x-auto">
                <table border={10} className="table-auto w-full border-collapse border border-gray-400 text-sm bg-gray-100">
                    <tbody>
                    <tr className="border border-gray-300">
                        <td className="px-4 py-2 font-medium">Kuota</td>
                        <td className="px-4 py-2">Unlimited</td>
                    </tr>
                    <tr className="border border-gray-300">
                        <td className="px-4 py-2 font-medium">Masa Aktif</td>
                        <td className="px-4 py-2">30 hari</td>
                    </tr>
                    <tr className="border border-gray-300">
                        <td className="px-4 py-2 font-medium">Kecepatan</td>
                        <td className="px-4 py-2 flex justify-between items-center gap-2">
                        Up to 50mbps
                            <button
                                className="w-6 h-6 flex justify-center items-center cursor-pointer bg-blue-500 text-white rounded text-sm font-bold"
                            >
                                +
                            </button>
                        </td>
                    </tr>
                    <tr className='border border-gray-300'>
                        <td className="px-4 py-2 font-medium ">Aktif device</td>
                        <td className="px-4 py-2 flex justify-between items-center">
                        1
                            <button
                                className="w-6 h-6 flex justify-center items-center cursor-pointer bg-blue-500 text-white rounded text-sm font-bold"
                            >
                                +
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


            <p className='my-5 text-center text-sm'>
            Mau upgrade paket mu?            <br />
                Beli di counter Woozz terdekat atau <a href="#" className='font-semibold'>hubungi admin</a></p>


            <button onClick={onLogout} className='bg-gray-200 text-gray-700 my-5 rounded-lg p-3 px-10 cursor-pointer'>
                Logout
            </button>
        </div>
    )
}