import { GoPerson } from "react-icons/go";

interface ReservationNameInputProps {
  onChange: (e: string) => void;
}

export default function ReservationNameInput({
  onChange,
}: ReservationNameInputProps) {
  return (
    <fieldset>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
      <GoPerson />
    </fieldset>
  );
}
