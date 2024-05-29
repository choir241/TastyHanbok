import { GrGroup } from "react-icons/gr";

interface ReservationTypeProps {
    onChange: (e: string) => void;
}

export default function ReservationType({
    onChange,
}: ReservationTypeProps) {
    return (
        <fieldset>
            <select name="" id="" onChange={(e) => onChange(e.target.value)} >
                <option value="in-person"></option>
                <option value="take-out"></option>
            </select>
            <GrGroup />
        </fieldset>
    );
}