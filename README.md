# FoodWagen

A simple, modern Next.js app to search, add, edit, and organize meals. It showcases client-side data fetching with React Query, optimistic UI via cache invalidation, form validation with Zod + React Hook Form, global state with Zustand, and a responsive UI styled with Tailwind v4 and shadcn-inspired components.

## Overview

- **Browse featured meals** fetched from a public MockAPI.
- **Search/filter meals** by name with smooth scrolling to results.
- **Add, edit, and delete** meals through accessible dialogs and drawers.
- **Responsive UI** with animated sections and image handling via `next/image`.

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **State/Data**: @tanstack/react-query, Zustand
- **Forms/Validation**: React Hook Form, Zod
- **UI/Styling**: Tailwind CSS v4, Radix UI primitives, shadcn-inspired components, lucide-react icons, framer-motion
- **HTTP**: Axios

## Project Structure

- `app/`
  - `layout.tsx`: Root layout with `QueryProvider` and global `Toaster`.
  - `page.tsx`: Home page, renders `Navbar`, `Hero`, and `FeaturedMeals`.
- `components/`
  - `Meal/`: Meal UI and dialogs
    - `FeaturedMeals.tsx`: Grid of meals with loading/error/empty states
    - `MealCard.tsx`: Card displaying meal image, price, rating, status
    - `AddMealDialog.tsx`, `EditMealDialog.tsx`, `DeleteMealDialog.tsx`
  - `sections/`: `Navbar`, `Hero`, `Footer`
  - `ui/`: Reusable UI primitives (button, card, dialog, drawer, form, input, select, tabs, etc.)
  - `QueryProvider.tsx`: React Query provider + devtools
- `hooks/`
  - `useFeaturedMeals.ts`: Fetches meals via React Query
- `stores/`
  - `useFilterStore.tsx`: Global filter text and filtered results via Zustand
- `schema/`
  - `add-meal.ts`: Zod schema for meal create/update forms
- `types/`
  - `featured-meals.ts`: `FeaturedMealType` definition
- `lib/utils.ts`: Small helpers (e.g., `cn`)
- `public/`: Static assets (logo, hero image, fonts)

## Data Flow

- Meals are fetched from MockAPI using React Query (`useFeaturedMeals`).
- Search uses `useFilterStore` to debounce user input and then queries MockAPI with `?name=...`.
- Create/Update/Delete use Axios to POST/PUT/DELETE and then invalidate the `featured-meals` query to refresh UI.

### External API

- Base: `https://6852821e0594059b23cdd834.mockapi.io/Food`
  - `GET /Food` → list featured meals
  - `GET /Food?name={query}` → filter meals by name
  - `POST /Food` → create meal
  - `PUT /Food/{id}` → update meal
  - `DELETE /Food/{id}` → delete meal

No environment variables are required; endpoints are defined inline in the components/hooks.

## Images

`next.config.ts` allows loading images from any HTTPS host via `images.remotePatterns`. Meal images and restaurant logos referenced by URL will load without additional configuration.

## Getting Started

Prerequisites:

- Node.js 18+ recommended
- Package manager: pnpm, npm, yarn, or bun

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn
# or
bun install
```

Run the development server:

```bash
pnpm dev
# or: npm run dev / yarn dev / bun dev
```

Open <http://localhost:3000> to view the app.

Build and start production server:

```bash
pnpm build
pnpm start
```

## Scripts

- `dev`: Start dev server
- `build`: Production build
- `start`: Start built app
- `lint`: Run ESLint (Next.js config with Core Web Vitals)

## UI/UX Notes

- Toasts via `sonner` for success/error feedback.
- Animated sections/cards via `motion`.
- Accessible dialogs/drawers built on Radix UI.
- Local fonts loaded via `next/font/local` (Source Sans Pro).

## Deployment

- Works out-of-the-box on Vercel or any Node host.
- Ensure `next build` completes and that external image domains are permitted (already configured).

## Troubleshooting

- API errors: The public MockAPI can be rate-limited or transient. Retry or switch to your own MockAPI instance if needed.
- Image load issues: Verify the image URL is HTTPS and publicly reachable.
- Types/strictness: Project uses TypeScript in `strict` mode.
