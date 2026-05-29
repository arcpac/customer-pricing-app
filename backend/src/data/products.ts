export interface Product {
  id: string;
  title: string;
  sku: string;
  subCategory: string;
  segment: string;
  brand: string;
  basePrice: number;
}
export const products: Product[] = [
  {
    id: "prod_1",
    title: "High Garden Pinot Noir 2021",
    sku: "HGVPIN216",
    subCategory: "Wine",
    segment: "Red",
    brand: "High Garden",
    basePrice: 279.06,
  },
  {
    id: "prod_2",
    title: "Koyama Methode Brut Nature NV",
    sku: "KOYBRUNV6",
    subCategory: "Wine",
    segment: "Sparkling",
    brand: "Koyama Wines",
    basePrice: 120.0,
  },
  {
    id: "prod_3",
    title: "Koyama Riesling 2018",
    sku: "KOYNR1837",
    subCategory: "Wine",
    segment: "Port/Dessert",
    brand: "Koyama Wines",
    basePrice: 215.04,
  },
  {
    id: "prod_4",
    title: "Koyama Tussock Riesling 2019",
    sku: "KOYRIE19",
    subCategory: "Wine",
    segment: "White",
    brand: "Koyama Wines",
    basePrice: 215.04,
  },
  {
    id: "prod_5",
    title: "Lacourte-Godbillon Brut Cru NV",
    sku: "LACBNATNV6",
    subCategory: "Wine",
    segment: "Sparkling",
    brand: "Lacourte-Godbillon",
    basePrice: 409.32,
  },
];
