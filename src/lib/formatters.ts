import { siteConfig } from '@/config/site';

/**
 * Formats a numeric price into a currency string based on site configuration.
 */
export function formatCurrency(
  amount: number,
  currencyCode: string = siteConfig.currency.code,
  locale: string = siteConfig.currency.locale
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${siteConfig.currency.symbol}${amount.toFixed(2)}`;
  }
}

/**
 * Formats a date string or timestamp into a readable date.
 */
export function formatDate(dateString: string, locale: string = 'en-US'): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
}

/**
 * Calculates discount percentage if not explicitly provided.
 */
export function calculateDiscount(price: number, originalPrice?: number): number {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
