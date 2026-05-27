export interface Product {
  id: string
  title: string
  sku: string
  subCategory: string
  segment: string
  brand: string
  basePrice: number
}

export const products: Product[] = [
  {
    id: "prod_001",
    title: "Koyama Methode Brut Nature NV",
    sku: "WINE-SPARK-001",
    subCategory: "Sparkling Wine",
    segment: "Wine",
    brand: "Koyama",
    basePrice: 120,
  },
  {
    id: "prod_002",
    title: "Yarra Valley Pinot Noir 2022",
    sku: "WINE-RED-002",
    subCategory: "Red Wine",
    segment: "Wine",
    brand: "Yarra Estate",
    basePrice: 48,
  },
  {
    id: "prod_003",
    title: "Margaret River Chardonnay 2023",
    sku: "WINE-WHITE-003",
    subCategory: "White Wine",
    segment: "Wine",
    brand: "Margaret River Co",
    basePrice: 42,
  },
  {
    id: "prod_004",
    title: "Hunter Valley Shiraz 2021",
    sku: "WINE-RED-004",
    subCategory: "Red Wine",
    segment: "Wine",
    brand: "Hunter & Co",
    basePrice: 55,
  },
  {
    id: "prod_005",
    title: "Premium Lager 24 Pack",
    sku: "BEER-LAGER-005",
    subCategory: "Lager",
    segment: "Beer",
    brand: "Northern Brew",
    basePrice: 64,
  },
  {
    id: "prod_006",
    title: "Craft Pale Ale 16 Pack",
    sku: "BEER-ALE-006",
    subCategory: "Pale Ale",
    segment: "Beer",
    brand: "Harbour Brewing",
    basePrice: 72,
  },
  {
    id: "prod_007",
    title: "Alcohol Free IPA 12 Pack",
    sku: "BEER-ZERO-007",
    subCategory: "Non-Alcoholic Beer",
    segment: "Beer",
    brand: "Zero North",
    basePrice: 38,
  },
  {
    id: "prod_008",
    title: "Sparkling Mineral Water 24 Pack",
    sku: "NA-WATER-008",
    subCategory: "Water",
    segment: "Non-Alcoholic",
    brand: "Blue Spring",
    basePrice: 28,
  },
  {
    id: "prod_009",
    title: "Cold Brew Coffee 12 Pack",
    sku: "NA-COFFEE-009",
    subCategory: "Coffee",
    segment: "Non-Alcoholic",
    brand: "Morning Grind",
    basePrice: 36,
  },
  {
    id: "prod_010",
    title: "Premium Tonic Water 24 Pack",
    sku: "NA-MIXER-010",
    subCategory: "Mixer",
    segment: "Non-Alcoholic",
    brand: "Botanic Mixers",
    basePrice: 32,
  },
  {
    id: "prod_011",
    title: "Extra Virgin Olive Oil 5L",
    sku: "FOOD-OIL-011",
    subCategory: "Cooking Oil",
    segment: "Food",
    brand: "Oliva Gold",
    basePrice: 58,
  },
  {
    id: "prod_012",
    title: "Artisan Pasta 10kg",
    sku: "FOOD-PASTA-012",
    subCategory: "Pasta",
    segment: "Food",
    brand: "Casa Roma",
    basePrice: 46,
  },
]
