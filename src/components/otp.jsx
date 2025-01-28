import OtpInput from 'react-otp-input';
import Countdown from 'react-countdown';

import Woozimg from '../assets/wooz.png';
import React from 'react';
import { useGlobalContext } from '../provider/global';
import { VOUCHER } from './voucher';

export const OTP = 'otp';

export default function Otp() {
    const [randomId, setRandomId] = React.useState(1);
    const [maxOtp, setMaxOtp] = React.useState(3);
    const global = useGlobalContext();
    const [error, setError] = React.useState('');
    const [otp, setOtp] = React.useState('');

    const onSend = () => {
        if(!otp.length) {
            setError('OTP required!');
        } else {
            setError('');
            global.setState((prev) => ({...prev, otp, state: VOUCHER }));
        }
    }

    const onResend = () => {
        if(maxOtp === 0) {
            return;
        }
        setRandomId(Math.random());
        setMaxOtp(maxOtp - 1);
    }

    const CountdownMemo = React.useMemo(() => (
        <Countdown 
            key={randomId}
            date={Date.now() + 1000 * 60} renderer={(props) => {
                if(maxOtp === 0) return <p className='text-red-400 italic text-sm ml-3'>OTP reach max</p>
                if(props?.completed) {
                    return (
                        <a href="#" onClick={onResend} className='font-semibold flex items-center gap-4 ml-3'>
                            Kirim Ulang
                        </a>
                    )
                }
                return <span className='ml-3'>({props?.seconds || ""})</span>
            }}
                />
    ), [randomId, maxOtp])
    
    return (
        <div className="flex flex-col items-center">
           <img src={Woozimg} className='ml-4' alt="" />
           <p className='text-2xl font-bold mb-10'>Input Kode OTP</p>
           <OtpInput
                shouldAutoFocus
                value={otp}
                onChange={setOtp}
                numInputs={5}
                renderSeparator={<div className='w-3' />}
                renderInput={(props) => <input {...props}  className={` ${error ? 'border border-red-400 border-solid' : ""} bg-gray-200 rounded-lg !w-14 h-18 text-lg font-semibold text-center` }/>}
                />
            <p className='my-5 text-sm'>Masukkan 5 digit kode OTP yang kami kirimkan ke Handphone mu.            </p>
            <div className='w-full h-[1px] bg-gray-100' />
            <button onClick={onSend} className='bg-blue-900 text-white rounded-lg p-3 w-[200px] lg:w-[300px] cursor-pointer'>
                Input Kode
            </button>
            <p className='mt-3 flex items-center'>Tidak dapat kode? {CountdownMemo}</p>
        </div>
    )
}