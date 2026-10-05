export function SectionHeading({ title }: { title: string }) {
  return (
    <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
      {title}
    </h3>
  );
}
