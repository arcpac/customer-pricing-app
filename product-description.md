# Product Description — Customer-Specific Pricing Tool

## Project Context

Build a customer-specific pricing profile tool for a food and beverage supplier.

The supplier needs a way to offer bespoke product prices to specific customers so they can tailor commercial offers while still protecting margin.

The app should allow a supplier to:

1. Search and filter products by title, SKU, sub-category, segment, and brand.
2. Select products into a pricing profile, including select-all.
3. Apply a fixed dollar or percentage-based adjustment.
4. Choose whether the adjustment increases or decreases the base price.
5. Preview the adjusted prices before saving.
6. Save the pricing profile through an API.
7. Save the profile against a specific customer.

## Tech Stack

- React frontend
- Node.js backend
- TypeScript
- Mock in-memory data
- Per-customer pricing profiles
- Tailwind CSS
- shadcn/ui

## Core Product Concept

A pricing profile is a named set of product price adjustments saved against a specific customer.

Example:

> “Bondi Cellars — Summer Wine Discount”

The supplier can choose products, apply pricing adjustments, preview the result, and save the profile for that customer.

## Pricing Rules

The app supports two pricing adjustment modes.

### Fixed Adjustment

```txt
New Price = Base Price +/- Adjustment Amount
```

Example:

```txt
Base Price: $100
Adjustment: $15 decrease
New Price: $85
```

### Dynamic / Percentage Adjustment

```txt
New Price = Base Price +/- (Adjustment Percentage × Base Price)
```

Example:

```txt
Base Price: $100
Adjustment: 10% decrease
New Price: $90
```

### Important Pricing Constraint

The new price must never be negative.

If an adjustment would result in a negative price, the app should prevent saving and show a clear warning/error state.

For preview purposes, a price that reaches `$0.00` should show a warning badge.

## Product Requirements

### Product Search and Filtering

The supplier should be able to search and filter products by:

- Product title
- SKU
- Sub-category
- Segment
- Brand

Filtering should be handled server-side.

### Product Selection

The supplier should be able to:

- Select individual products.
- Select all visible/filtered products.
- See partial selection state through an indeterminate checkbox.

Important rule:

> Select-all should apply only to the currently filtered rows, not the entire product dataset.

### Adjustment Flow

The supplier should be able to:

- Choose fixed dollar adjustment or percentage adjustment.
- Choose increase or decrease.
- Enter the adjustment value.
- Preview the adjusted price before saving.

### Preview Flow

When preview mode is active:

- The product table should show a `New Price` column.
- Only selected products should be included in the preview/save flow.
- Rows with a new price of `$0.00` should show a warning badge.
- Saving should be disabled if any adjusted price is invalid or negative.

### Save Flow

The supplier should be able to save the pricing profile with:

- Required profile name.
- Selected customer.
- Selected products.
- Adjustment type.
- Adjustment direction.
- Adjustment value.
- Computed preview prices.

On successful save:

- Close the save dialog.
- Show a success toast.
- Clear selected products.

## Current Phase Status

The project is not fully finished yet.

### Phase 1 — Backend Foundation

Mostly complete, but not fully verified.

Completed:

- `backend/src/data/products.ts` — 12 seeded products.
- `backend/src/data/customers.ts` — 5 mock customers.
- `backend/src/data/pricingProfiles.ts` — in-memory store.
- `backend/src/utils/pricing.ts` — `computeAdjustedPrice`.
- `backend/src/routes/products.ts` — GET with server-side filtering by search, SKU, sub-category, segment, and brand.
- `backend/src/routes/customers.ts` — GET customers.
- `backend/src/routes/pricingProfiles.ts` — GET list, GET by ID, and POST.
- `backend/src/server.ts` — mounted routers.
- ESM config fixed using `package.json` `type: module` and `verbatimModuleSyntax` imports.
- TypeScript type-check passes with `tsc --noEmit`.

Still required:

- Smoke-test all backend endpoints live.

### Phase 2 — Frontend Setup

Not finished.

Required:

- Install Tailwind CSS and `@tailwindcss/vite`.
- Configure `vite.config.ts`.
- Initialize shadcn/ui.
- Add shadcn/ui components:
  - `button`
  - `input`
  - `select`
  - `checkbox`
  - `table`
  - `dialog`
  - `badge`
  - `label`
- Create `src/types/index.ts` and mirror backend types.
- Create `src/api/products.ts` with `getProducts(filters)`.
- Create `src/api/customers.ts` with `getCustomers()`.
- Create `src/api/pricingProfiles.ts` with `savePricingProfile(payload)`.
- Create `src/utils/pricing.ts` with client-side `computeAdjustedPrice` for instant preview.
- Strip `App.tsx` boilerplate.
- Add the main app skeleton layout.
- Verify the frontend loads at `localhost:5173` with no console errors.
- Verify Tailwind styles render correctly.

### Phase 3 — Product Search and Selection UI

Not finished.

Required components:

#### `ProductFilters.tsx`

Should include:

- Text search input.
- 300ms debounce.
- Sub-category dropdown.
- Segment dropdown.
- Brand dropdown.

Expected behavior:

- Search should re-fetch products from the backend.
- Filters should combine correctly.

#### `ProductTable.tsx`

Should include columns:

- Checkbox
- SKU
- Title
- Sub-category
- Segment
- Brand
- Base Price

Selection behavior:

- Header checkbox should select all filtered rows only.
- Header checkbox should show indeterminate state when only some filtered rows are selected.
- Selection should persist sensibly when filters change.

### Phase 4 — Adjustment, Preview and Save

Not finished.

Required components:

#### `AdjustmentPanel.tsx`

Should include:

- Fixed dollar / percentage toggle.
- Increase / decrease toggle.
- Adjustment value input.
- Preview button.

Expected behavior:

- Computes new prices for selected products.
- Supports fixed and percentage calculations.
- Prevents invalid negative prices.

#### `SaveProfileDialog.tsx`

Should include:

- Required profile name input.
- Customer select dropdown.
- Submit/save button.

Expected behavior:

- POST the pricing profile to the backend.
- Close dialog on success.
- Show success toast.
- Clear selected products after save.

#### `App.tsx` Wiring

Wire the full flow:

1. Fetch products and customers.
2. Apply filter debounce.
3. Select products.
4. Apply adjustment.
5. Preview adjusted prices.
6. Save profile against customer.
7. Reset UI state after success.

Also verify pricing edge cases:

- Fixed increase.
- Fixed decrease.
- Percentage increase.
- Percentage decrease.
- Zero price warning.
- Invalid negative price prevention.

## Existing Decisions

Use these decisions unless there is a strong reason to change them:

- Filtering is server-side.
- Pricing profile name is required.
- Pricing profile name does not need a uniqueness constraint for now.
- Select-all applies only to filtered results.
- Data can stay in-memory for this challenge.
- This app is customer-specific, not global-profile based.

## Out of Scope for Current Build

Do not implement these yet unless explicitly requested:

- Authentication.
- Real database persistence.
- Role-based access control.
- Complex overlapping profile resolution.
- Customer groups.
- Bulk import/export.
- Audit history.
- Production deployment.

## Future Consideration — Overlapping Profiles

In real food and beverage wholesale, suppliers may eventually run multiple pricing profiles at the same time, and customers may belong to more than one customer group.

Example scenario:

- Profile A: 10% off all Wine for the `Independent Retailers` customer group.
- Profile B: $15 off all Sparkling Wine for the `VIP` customer group.
- Profile C: Custom price of $95 on `Koyama Methode Brut Nature NV` for the specific customer `Bondi Cellars`.

If Bondi Cellars belongs to both groups and orders that product, multiple profiles match.

This raises the question:

> Which price should win?

For the current challenge, avoid implementing this complexity unless asked. If added later, define a precedence rule such as:

1. Customer-specific custom price wins.
2. Customer-specific product adjustment wins.
3. Customer group product/category rule wins.
4. Broad/global rule wins.
