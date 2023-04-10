export const convertCentsToDollar = (cents: number, currencyCode = 'USD') =>
    (cents / 100).toLocaleString('en-US', {
        currency: currencyCode,
        style: 'currency',
    });
