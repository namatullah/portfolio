export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mb-24 scroll-mt-28"
    >
      <h2 className="text-lg font-semibold mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
