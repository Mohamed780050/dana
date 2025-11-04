import { Skeleton } from "@/components/ui/skeleton";

export default function OverViewSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {Array.from({ length: 2 }, (_, index) => (
        <Skeleton key={index} className="w-full h-[267px]" />
      ))}
    </div>
  );
}
