/**
 * Renders a JSON-LD block. Server component — the markup is in the initial
 * HTML, which is what crawlers read.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
