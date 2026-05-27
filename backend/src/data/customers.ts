export interface Customer {
  id: string
  name: string
  groups: string[]
}

export const customers: Customer[] = [
  { id: "cust_001", name: "The Cellar Door", groups: ["Independent Retailers"] },
  { id: "cust_002", name: "Harbour View Restaurant", groups: [] },
  { id: "cust_003", name: "Blue Mountains Bistro", groups: ["Independent Retailers"] },
  { id: "cust_004", name: "Fitzroy Food & Wine", groups: ["VIP"] },
  { id: "cust_005", name: "Manly Beach Bar", groups: ["VIP"] },
  { id: "cust_006", name: "Bondi Cellars", groups: ["Independent Retailers", "VIP"] },
]
