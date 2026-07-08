export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-stone-950 dark:text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-650 dark:text-stone-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
