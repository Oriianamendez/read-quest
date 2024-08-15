export function Checkbox() {
  return (
    <div className="form-control align-bottom pt-2">
      <label className="cursor-pointer label">
        <span className="label-text pr-2 text-lg text-slate-600">Approval</span>
        <input
          type="checkbox"
          className="checkbox checkbox-warning bg-yellow-100"
        />
      </label>
    </div>
  );
}
