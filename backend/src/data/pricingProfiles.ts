export interface PricingProfileItem {
  productId: string
  basePrice: number
  adjustedPrice: number
}

export interface PricingProfile {
  id: string
  name: string
  customerId: string
  adjustmentType: "fixed" | "percentage"
  adjustmentDirection: "increase" | "decrease"
  adjustmentValue: number
  items: PricingProfileItem[]
  createdAt: string
}

// In-memory store
export const pricingProfiles: PricingProfile[] = []
