export default function ItemDetails({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) {
  return (
    <div>
      <h4 className="font-semibold text-slate-900">{name}</h4>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
      <p className="mt-2 text-lg font-bold text-emerald-600">
        ${Number(price).toFixed(2)}
      </p>
    </div>
  );
}
