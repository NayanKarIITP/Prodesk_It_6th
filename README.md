# ShopZone 
# Live URL: https://prodesk-it-6th.vercel.app/
# Screenshots:<img width="1919" height="933" alt="image" src="https://github.com/user-attachments/assets/7f7385d9-5486-43a5-8d5b-f288a8592868" />
<img width="1919" height="921" alt="image" src="https://github.com/user-attachments/assets/8de42bbb-1ece-40af-81fc-2904ed21384e" />
<img width="1919" height="890" alt="image" src="https://github.com/user-attachments/assets/e6994e89-422a-42dc-baf6-5f6f59b72078" />

An interactive, multi-page E-Commerce Single Page Application (SPA) built with React. This project demonstrates advanced client-side routing, global state management, and data persistence without relying on page reloads.

Developed by Nayan Kar as part of Mission 6.

## Features

This project was built to satisfy three distinct difficulty tiers of modern frontend architecture:

### Level 1: Navigation Structure
* **React Router Integration:** Utilizes `react-router-dom` (v6) for seamless client-side routing.
* **Dynamic Routing:** Individual product pages are generated dynamically (`/product/:id`) using the `useParams` hook.
* **REST API Integration:** Fetches real-time product data from the `dummyjson.com` API.

### Level 2: Global State Management
* **Context API:** Eliminates "prop drilling" by utilizing a globally accessible `CartContext`.
* **Dynamic Cart Badge:** The Navbar features a notification badge that instantly updates as items are added to the cart from any page.
* **Cart Logic:** Users can add items, remove items, and adjust quantities, with the total price calculating automatically.

### Level 3: Authentication & Persistence
* **Protected Routes:** Implements an `AuthContext` with a higher-order `<ProtectedRoute>` component. Unauthenticated users attempting to access the `/checkout` page are automatically redirected to `/login`.
* **Smart Redirects:** After logging in, users are intelligently routed back to the page they originally tried to visit using `useLocation`.
* **Local Storage Persistence:** The shopping cart and user authentication status are synced with the browser's `localStorage`, ensuring data survives page refreshes.

## Tech Stack
* **Core:** React 18 (Vite)
* **Routing:** React Router v6
* **State Management:** React Context API
* **Styling:** Tailwind CSS
* **Data Source:** [DummyJSON Products API](https://dummyjson.com/docs/products)

## Installation & Setup

1. **Clone the repository** (or download the source code).
2. **Navigate to the project directory:**
   ```bash
   cd shopzone
