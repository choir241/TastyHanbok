interface ButtonProps {
  classNames: string;
  text: string;
  onClick: () => void;
}

export default function Button({ classNames, text, onClick }: ButtonProps) {
  return (
    <button className={classNames} onClick={() => onClick()}>
      {text}
    </button>
  );
}
