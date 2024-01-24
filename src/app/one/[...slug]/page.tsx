export function generateStaticParams() {
  return [{ slug: ["two"] }];
}

export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>{params.slug.join("/")}</h1>
      <p>(app router)</p>
    </div>
  );
}
