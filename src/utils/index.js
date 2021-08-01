export const formatterCurrency = (locales, currency, amount) =>
  new Intl.NumberFormat(`${locales}`, {
    style: "currency",
    currency: `${currency}`,
    minimumFractionDigits: 2,
  }).format(amount);
