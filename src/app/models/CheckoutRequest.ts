export interface CheckoutRequest {
    packageIds: string [],
    cardHolderName: string,
    cardNumber: number,
    expireDate: string
    cvv: string
    totalAmount: number,
    currency: 'BMD',
}
