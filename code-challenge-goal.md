Customer specific food and beverage supplier

## the brief
As a supplies I wan tto offer bespoke product prices to specific customer, so I can tailor my offer and protect margin.

Build a React frontend talking to a Node.js backend. The supplier should be able to: 
1. Search and filter products by title, SKU, sub-category, segment, and brand
2. Select products into a pricing profile, including select-all
3. Apply a fixed ($) or dynamic (%) adjustment, increase or decrease
4. Preview the new prices before saving
5. Save the profile via an API

Fixed: New = Base [+/-]

AdjustmentDynamic: New = Base [+/-] (Adjustment% × Base)

NOTE: New price must never be negative

## Backend
In-memory store is fine. Types and validation somewhere sensib
le. CRUD endpoints for pricing
profiles. Expose via Swagger or OpenAPI.

## Overlapping profiles

In real F&B wholesale, suppliers run multiple profiles at once and customers sit in more than one. This is where it gets spicy.

Scenario

• Profile A: 10% off all Wine, applied to the "Independent Retailers" customer group

• Profile B: $15 off all Sparkling Wine, applied to the "VIP" customer group

• Profile C: Custom price of $95 on Koyama Methode Brut Nature NV, applied to a single customer "Bondi Cellars"

Bondi Cellars is in both groups. They order Koyama Methode Brut Nature NV. Three profiles match. What do they pay?

## What we want

• A precedence rule, in plain English in your README. Specific enough that another engineer could implement it without asking you questions.

• A resolver in your backend that takes customer + product and returns the price, the source profile, and why.

• An endpoint that exposes it. Show it working in the UI or via README examples, your call.

There's no single correct answer. AI will hand you a generic one. Your rationale is what we're scoring.

## What we're assessing

Working code is the floor. We're looking at

• Your precedence rule. Whether it's implementable without ambiguity, whether the rationale connects to commercial reality, whether your code matches what you wrote.

• How you direct AI. Where you pushed back, what you owned, whether the code reads coherent or stitched together.

• Judgement on the small stuff. Rounding, negative prices, what "All Products" means over time, deleted products. Pick what to handle and be deliberate.

• Code basics. Sensible types, component boundaries, error handling, an API you wouldn't be embarrassed to review.