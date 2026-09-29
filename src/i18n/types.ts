/**
 * Shared content types for the i18n dictionaries.
 *
 * Most UI copy is plain strings. Two kinds of content need light structure so
 * translations keep inline formatting without hand-writing JSX per locale:
 *  - `RichText`: a paragraph that mixes plain text, bold, and links.
 *  - `LegalDoc`: the long Privacy / Terms documents, as an ordered list of
 *    blocks a small renderer walks (see src/components/legal-doc.tsx).
 */

/** An inline run inside a rich paragraph. */
export type RichSpan =
  | string
  | { b: string } // bold
  | { link: string; to: string } // internal route (locale-prefixed at render)
  | { link: string; href: string }; // external / mailto (used verbatim)

export type RichText = RichSpan[];

/** One block in a legal document. */
export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: RichText }
  | { type: "ul"; items: RichText[] }
  | { type: "ol"; items: RichText[] };

export type LegalDoc = LegalBlock[];
