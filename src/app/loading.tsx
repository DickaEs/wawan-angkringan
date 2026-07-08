export default function Loading() {
  return (
    <div className="min-h-screen bg-cream-50 p-6 dark:bg-stone-950">
      <div className="mx-auto max-w-7xl space-y-5">
        <div className="h-12 w-56 animate-pulse rounded-full bg-amber-100 dark:bg-stone-800" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="h-10 w-3/4 animate-pulse rounded bg-amber-100 dark:bg-stone-800" />
            <div className="h-4 w-full animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-stone-200 dark:bg-stone-800" />
          </div>
          <div className="min-h-[320px] animate-pulse rounded-3xl bg-amber-100 dark:bg-stone-800" />
        </div>
      </div>
    </div>
  );
}
