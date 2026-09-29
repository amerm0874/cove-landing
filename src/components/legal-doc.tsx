import { Link } from "@tanstack/react-router";

import { useLocale } from "@/i18n";
import { localizedPath } from "@/i18n/config";
import type { LegalBlock, LegalDoc, RichSpan, RichText } from "@/i18n/types";

/**
 * Renders a translated legal document (Privacy / Terms) from its block model.
 * Keeps the exact typography of the original hand-written JSX pages.
 */
function Spans({ text }: { text: RichText }) {
  const locale = useLocale();
  return (
    <>
      {text.map((span: RichSpan, i) => {
        if (typeof span === "string") return <span key={i}>{span}</span>;
        if ("b" in span) return <strong key={i}>{span.b}</strong>;
        if ("to" in span) {
          return (
            <Link key={i} to={localizedPath(span.to, locale)} className="text-rose hover:underline">
              {span.link}
            </Link>
          );
        }
        return (
          <a key={i} href={span.href} className="text-rose hover:underline">
            {span.link}
          </a>
        );
      })}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-12 font-display text-2xl font-semibold text-plum sm:text-3xl">{block.text}</h2>;
    case "h3":
      return <h3 className="mt-6 font-display text-lg font-semibold text-plum">{block.text}</h3>;
    case "p":
      return (
        <p className="mt-3 leading-relaxed text-plum/85">
          <Spans text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul className="mt-3 list-disc space-y-2 ps-5 text-plum/85">
          {block.items.map((item, i) => (
            <li key={i}>
              <Spans text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-3 list-decimal space-y-2 ps-5 text-plum/85">
          {block.items.map((item, i) => (
            <li key={i}>
              <Spans text={item} />
            </li>
          ))}
        </ol>
      );
  }
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <>
      {doc.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
