import { Detail, Otp, PhoneNumber, SetResult, Voucher, VoucherError, VoucherExpired, VoucherSuccess } from './components';

import { DETAIL } from './components/detail';
import Login, { LOGIN } from './components/login';
import NotSubscribe, { NOT_SUBSCRIBE } from './components/not-subscribe';
import { OTP } from './components/otp';
import { PHONE_NUMBER } from './components/phone-number';
import Subscription from './components/subs';
import { VOUCHER } from './components/voucher';
import { VOUCHER_FAILED } from './components/voucher-error';
import { VOUCHER_EXPIRED } from './components/voucher-expired';
import { VOUCHER_SUCCESS } from './components/voucher-success';
import { useGlobalContext } from './provider/global';

export default function App() {
    const global = useGlobalContext();

    return (
        <div className="bg-white w-screen h-screen flex items-center justify-center relative">
            {global?.state?.state === PHONE_NUMBER && <PhoneNumber />}
            {global?.state?.state === OTP && <Otp />}
            {global?.state?.state === VOUCHER && <Voucher />}
            {global?.state?.state === VOUCHER_SUCCESS && <VoucherSuccess />}
            {global?.state?.state === VOUCHER_FAILED && <VoucherError />}
            {global?.state?.state === VOUCHER_EXPIRED && <VoucherExpired />}
            {global?.state?.state === DETAIL && <Detail />}
            {global?.state?.state === LOGIN && <Login />}
            {global?.state?.state === NOT_SUBSCRIBE && <NotSubscribe />}

            {(global?.state?.state === VOUCHER ||
            global?.state?.state === VOUCHER_EXPIRED ||
            global?.state?.state === VOUCHER_FAILED ) && (
                <div className="absolute bottom-3 right-3">
                    <SetResult />
                </div>
            )}

            {(global?.state?.state === DETAIL || global?.state?.state === NOT_SUBSCRIBE) && (
                <div className="absolute bottom-3 right-3">
                <Subscription />
                </div>
            )}
        </div>
    )
}