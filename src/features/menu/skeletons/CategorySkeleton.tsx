import { Skeleton } from "@/components/ui/skeleton";

export default function CategorySkeleton() {
  return (
    <ul className="space-y-6">
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index}  className="w-full h-52"/>
      ))}
    </ul>
  );
}
