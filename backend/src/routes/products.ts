import { Router } from "express"
import type { Request, Response } from "express"
import { products } from "../data/products.js"

const router = Router()

router.get("/", (req: Request, res: Response) => {
  const { search, sku, subCategory, segment, brand } = req.query as Record<string, string>

  let results = [...products]

  if (search) {
    const q = search.toLowerCase()
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q)
    )
  }

  if (sku) {
    results = results.filter((p) =>
      p.sku.toLowerCase().includes(sku.toLowerCase())
    )
  }

  if (subCategory) {
    results = results.filter(
      (p) => p.subCategory.toLowerCase() === subCategory.toLowerCase()
    )
  }

  if (segment) {
    results = results.filter(
      (p) => p.segment.toLowerCase() === segment.toLowerCase()
    )
  }

  if (brand) {
    results = results.filter(
      (p) => p.brand.toLowerCase() === brand.toLowerCase()
    )
  }

  res.json(results)
})

export default router
