interface snooperProps {
  image: string;
  altText: string;
  value: string;
}

const Snooper = (props: snooperProps) => {
  return (
    <div className={`min-w-64 max-w-64 text-center`}>
      <img
        className={`min-h-64 max-h-64 mx-auto`}
        src={props.image}
        alt={props.altText}
      />
      <strong>
        <p>{props.value}</p>
      </strong>
    </div>
  );
};

export default Snooper;
