export function SkeletonCard() {
  return (
    <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="h-20 w-20 animate-pulse rounded-full bg-gray-200" />

      <div className="mt-4 h-4 w-32 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-3 w-40 animate-pulse rounded bg-gray-200" />
      <div className="mt-2 h-3 w-24 animate-pulse rounded bg-gray-200" />

      <div className="mt-3 h-5 w-16 animate-pulse rounded-full bg-gray-200" />

      <div className="mt-5 h-9 w-full animate-pulse rounded-xl bg-gray-200" />
    </div>
  );
}