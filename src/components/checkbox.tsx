export function Checkbox() {
  return (
    <div className="form-control align-bottom">
      <label className="cursor-pointer label">
        <span className="label-text pr-2">Waiting</span>
        <input
          type="checkbox"
          className="checkbox checkbox-warning bg-yellow-100"
        />
      </label>
    </div>
  );
}
