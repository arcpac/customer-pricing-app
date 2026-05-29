# Pricing Rules

This document defines how product pricing adjustments and overlapping pricing profiles are resolved.

The goal is to make the pricing logic clear enough that another engineer can implement it without needing extra clarification.

---

## 1. Product Pricing Calculation Rule

A pricing profile changes a product price based on the selected product's base price.

The supplier does **not** manually type a random discount amount into an `Amount` or `Value` field.

Instead, the adjustment is derived from the selected product and the selected pricing rule.

For the current implementation, the supported pricing basis is:

- **Base Price**

This means the selected product's base price is used as the starting value for the calculation.

---

## 2. Why There Is No Amount / Value Field

There should be no generic `Amount` or `Value` input field in the Product Pricing UI.

The adjustment should not depend on the user manually typing a custom discount amount for each product.

Instead, the user configures:

1. Product scope
2. Selected products
3. Pricing basis
4. Adjustment type
5. Increase or decrease direction

The system then calculates the preview price automatically.

This avoids inconsistent pricing and makes the pricing rule easier to audit.

---

## 3. Product Scope

A pricing profile can apply to:

1. **One Product**
   - The rule applies to a single selected product.

2. **Multiple Products**
   - The rule applies to all selected products.

3. **All Products**
   - The rule applies to every product that exists in the catalogue at the time the profile is evaluated.

If `All Products` is selected, the rule should be treated as dynamic.  
That means newly added products may also match the profile unless the implementation explicitly snapshots the selected products.

For this challenge, `All Products` means:

> Apply the pricing rule to all products currently available in the product catalogue when the pricing resolver runs.

---

## 4. Based On: Base Price

The first supported pricing basis is:

```txt
Base Price
