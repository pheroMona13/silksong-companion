import "./Button.scss";

export type ButtonProps = {
  children: string;
  onClick?: () => void;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front text">{children}</span>
    </button>
  );
}

export default Button;
