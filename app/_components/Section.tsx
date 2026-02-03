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
    <section id={id} className="mb-24 scroll-mt-24">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}
