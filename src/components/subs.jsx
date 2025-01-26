import { useGlobalContext } from "../provider/global";
import { DETAIL } from "./detail";
import { NOT_SUBSCRIBE } from "./not-subscribe";

export default function Subscription() {
    const global = useGlobalContext();

    const onChange = (e) => {
        global.setState((prev) => ({...prev, state: e.target.value }));
    };

    return (
        <div className="border border-solid border-gray-300 rounded p-4 flex flex-col gap-2">
            <p className="text-xl font-semibold">For testing purpose</p>
            <select value={global.state?.state} name="result" onChange={onChange} >
                <option value={DETAIL}>Subscribe</option>
                <option value={NOT_SUBSCRIBE}>Not Subscibe</option>
            </select>
        </div>
    )
}