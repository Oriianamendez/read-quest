import Image from "next/image";

export function BookCards() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <Image width={80} height={80} src="" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn bg-yellow-300 hover:bg-yellow-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
