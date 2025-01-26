import { useGlobalContext } from "../provider/global";
import { VOUCHER_FAILED } from "./voucher-error";
import { VOUCHER_EXPIRED } from "./voucher-expired";
import { VOUCHER_SUCCESS } from "./voucher-success";

export default function SetResult() {
    const global = useGlobalContext();

    const onChange = (e) => {
        global.setState((prev) => ({...prev, result: e.target.value }));
    };

    return (
        <div className="border border-solid border-gray-300 rounded p-4 flex flex-col gap-2">
            <p className="text-xl font-semibold">For testing purpose</p>
            <select value={global.state?.result} name="result" onChange={onChange} >
                <option value={VOUCHER_FAILED}>Failed</option>
                <option value={VOUCHER_SUCCESS}>Success</option>
                <option value={VOUCHER_EXPIRED}>Expired</option>
            </select>
        </div>
    )
}