interface userProps {
  image: string;
  altText: string;
  value: string;
}

const User = (props: userProps) => {

  return (
    <div className={`my-8 min-h-64 max-h-64 text-center`}>
      <img
        className={`min-h-64 max-h-64`}
        src={props.image}
        alt={props.altText}
      />
      <p>{props.value}</p>
    </div>
  );
};

export default User;
