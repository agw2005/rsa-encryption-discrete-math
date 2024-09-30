interface userProps {
  image: string;
  altText: string;
  value: string;
}

const User = (props: userProps) => {
  return (
    <div className={`min-w-64 max-w-64 px-4`}>
      <img className={`p-4`} src={props.image} alt={props.altText} />
      <strong>
        <p className="text-center">{props.value}</p>
      </strong>
    </div>
  );
};

export default User;
