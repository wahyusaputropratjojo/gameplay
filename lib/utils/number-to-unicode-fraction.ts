export function numberToUnicodeFraction(number: number): string {
  const integer = Math.trunc(number);
  const decimal = Math.abs(number - integer);

  if (decimal === 0) {
    return String(integer);
  }

  const roundedDecimal = Number.parseFloat(decimal.toFixed(4));

  const unicodeFractionMap: { [key: number]: string } = {
    0.2: '⅕',
    0.4: '⅖',
    0.5: '½',
    0.6: '⅗',
    0.8: '⅘',
    0.25: '¼',
    0.75: '¾',
    0.125: '⅛',
    0.375: '⅜',
    0.625: '⅝',
    0.875: '⅞',
    0.1667: '⅙',
    0.3333: '⅓',
    0.6667: '⅔',
    0.8333: '⅚',
  };

  const fraction = unicodeFractionMap[roundedDecimal];

  if (!fraction) {
    return String(number);
  }

  if (integer === 0) {
    const sign = number < 0 ? '-' : '';
    return `${sign}${fraction}`;
  }

  return `${integer}${fraction}`;
}
