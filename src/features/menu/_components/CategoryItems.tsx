export default async function CategoryItems({ id }: { id: string }) {
  return (
    <div>
      <p className="py-8 text-center text-slate-500">
        No items in this category yet. {id}
      </p>
    </div>
  );
}
