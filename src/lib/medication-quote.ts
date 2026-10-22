export type QuoteInput = { packSize: string; price: string; fees: string };
export type QuoteResult = { packs: number; supplied: number; extra: number; subtotal: number; fees: number; total: number; perItem: number };

export function wholeCount(value: string): number | null {
  if (!/^\d+$/.test(value)) return null;
  const n = Number(value);
  return Number.isSafeInteger(n) && n >= 1 && n <= 10000 ? n : null;
}

/** Parse to integer minor units; blanks, exponents and extra decimals are rejected. */
export function moneyCents(value: string): number | null {
  if (!/^\d+(\.\d{1,2})?$/.test(value)) return null;
  const [whole, decimal = ""] = value.split(".");
  const cents = Number(whole) * 100 + Number(decimal.padEnd(2, "0"));
  return Number.isSafeInteger(cents) && cents <= 100000000 ? cents : null;
}

export function calculateQuote(required: string, input: QuoteInput): QuoteResult | null {
  const quantity = wholeCount(required);
  const packSize = wholeCount(input.packSize);
  const price = moneyCents(input.price);
  const fees = moneyCents(input.fees);
  if (quantity === null || packSize === null || price === null || fees === null) return null;
  const packs = Math.ceil(quantity / packSize);
  const subtotal = packs * price;
  return { packs, supplied: packs * packSize, extra: packs * packSize - quantity, subtotal, fees, total: subtotal + fees, perItem: price / packSize };
}
