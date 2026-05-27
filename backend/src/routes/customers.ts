import { Router } from "express"
import type { Request, Response } from "express"
import { customers } from "../data/customers.js"

const router = Router()

router.get("/", (_req: Request, res: Response) => {
  res.json(customers)
})

export default router
