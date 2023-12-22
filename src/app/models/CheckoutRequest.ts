export interface CheckoutRequest {
    packageIds: number [],
    cardHolderName: string,
    cardNumber: number,
    expireDate: string
    cvv: string
    totalAmount: number,
    currency: 'BMD',
}
