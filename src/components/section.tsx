export function Label({ information }: { information: string }) {
  return (
    <section className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text text-base">{information}</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
    </section>
  );
}
