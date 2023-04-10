export const convertCentsToDollar = (cents: number, currencyCode: string = "USD") => 
    (cents / 100).toLocaleString("en-US", {style:"currency", currency:currencyCode})

