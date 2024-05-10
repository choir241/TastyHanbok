interface ButtonProps {
    classNames: string;
    text: string;
    onClick: () => void;
}

const Button = ({classNames, text, onClick}: ButtonProps) => {
    return <button className={classNames} onClick={() => onClick()}>
                {text}
           </button>
}; 