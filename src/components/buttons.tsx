export function CTAButton({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="btn bg-yellow-300 hover:bg-yellow-200 mt-2"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export function DeleteButton() {
  return <button className="btn btn-error">Delete</button>;
}
