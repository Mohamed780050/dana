import { Skeleton } from "@/components/ui/skeleton";

export default function StatusCardSkeleton() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }, (_, index) => (
        <Skeleton key={index} className="w-full h-[118px]"/>
      ))}
    </ul>
  );
}
