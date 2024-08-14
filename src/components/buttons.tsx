export function CTAButton({
  name,
  onClick,
}: {
  name: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="submit"
      className="btn bg-yellow-300 hover:bg-yellow-200 border-yellow-300 font-medium text-lg"
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export function DeleteButton() {
  return <button className="btn btn-error font-medium text-lg">Delete</button>;
}

export function CloseButton() {
  return <button className="btn btn-error font-medium text-lg">Close</button>;
}
