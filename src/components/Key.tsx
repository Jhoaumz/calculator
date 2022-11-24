type KeyValues = {
  value: string | number;
  classname?: string;
  handleClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Key(props: KeyValues) {
  return (
    <button
      className={`key ${props.classname}`}
      onClick={props.handleClick}
      style={{
        fontSize: "20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "200ms",
      }}
    >
      {props.value}
    </button>
  );
}
