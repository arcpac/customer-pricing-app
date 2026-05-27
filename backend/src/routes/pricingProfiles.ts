import { Router } from "express"
import type { Request, Response } from "express"
import { pricingProfiles } from "../data/pricingProfiles.js"
import type { PricingProfile } from "../data/pricingProfiles.js"
import { products } from "../data/products.js"
import { customers } from "../data/customers.js"
import { computeAdjustedPrice } from "../utils/pricing.js"
import { randomUUID } from "crypto"

const router = Router()

// List all profiles
router.get("/", (_req: Request, res: Response) => {
  res.json(pricingProfiles)
})

// Get single profile
router.get("/:id", (req: Request, res: Response) => {
  const profile = pricingProfiles.find((p) => p.id === req.params.id)
  if (!profile) {
    res.status(404).json({ error: "Profile not found" })
    return
  }
  res.json(profile)
})

// Save new profile
router.post("/", (req: Request, res: Response) => {
  const { name, customerId, adjustmentType, adjustmentDirection, adjustmentValue, productIds } = req.body

  // Validate required fields
  if (!name || typeof name !== "string" || name.trim() === "") {
    res.status(400).json({ error: "name is required" })
    return
  }
  if (!customerId) {
    res.status(400).json({ error: "customerId is required" })
    return
  }
  if (!["fixed", "percentage"].includes(adjustmentType)) {
    res.status(400).json({ error: "adjustmentType must be 'fixed' or 'percentage'" })
    return
  }
  if (!["increase", "decrease"].includes(adjustmentDirection)) {
    res.status(400).json({ error: "adjustmentDirection must be 'increase' or 'decrease'" })
    return
  }
  if (typeof adjustmentValue !== "number" || adjustmentValue < 0) {
    res.status(400).json({ error: "adjustmentValue must be a non-negative number" })
    return
  }
  if (!Array.isArray(productIds) || productIds.length === 0) {
    res.status(400).json({ error: "productIds must be a non-empty array" })
    return
  }

  const customerExists = customers.some((c) => c.id === customerId)
  if (!customerExists) {
    res.status(400).json({ error: "Customer not found" })
    return
  }

  // Build items — compute adjusted price server-side
  const items = productIds.map((productId: string) => {
    const product = products.find((p) => p.id === productId)
    if (!product) return null
    return {
      productId,
      basePrice: product.basePrice,
      adjustedPrice: computeAdjustedPrice(
        product.basePrice,
        adjustmentType,
        adjustmentDirection,
        adjustmentValue
      ),
    }
  }).filter(Boolean)

  if (items.length === 0) {
    res.status(400).json({ error: "No valid products found" })
    return
  }

  const profile: PricingProfile = {
    id: randomUUID(),
    name: name.trim(),
    customerId,
    adjustmentType,
    adjustmentDirection,
    adjustmentValue,
    items: items as PricingProfile["items"],
    createdAt: new Date().toISOString(),
  }

  pricingProfiles.push(profile)
  res.status(201).json(profile)
})

export default router
