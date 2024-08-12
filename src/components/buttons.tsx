export function CTAButton({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) {
  return (
    <button
      className="btn bg-yellow-300 hover:bg-yellow-200 border-yellow-300 mt-2 font-medium text-lg"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export function DeleteButton() {
  return <button className="btn btn-error">Delete</button>;
}
