export function Label({
  information,
  placeholder,
  name,
}: {
  information: string;
  placeholder: string;
  name: string;
}) {
  return (
    <section className="form-control w-full max-w-xs pb-6">
      <label className="label">
        <span className="label-text text-lg">{information}</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-bordered w-full max-w-xs"
        name={name}
      />
    </section>
  );
}
