# Prompts

This document outlines the prompt engineering and collaborative workflow used to build the ShopZone SPA. The development followed a hybrid approach: I manually wrote the base components, UI layouts, and core logic, while utilizing AI to inject advanced React hooks, optimize state management, and debug configuration issues.

### Phase 1: Base Implementation & Routing Setup
**Technique:** Foundational Code Generation

* **Human Input (My Contribution):** I manually created the file structure, wrote the base JSX for the static pages (`Home.jsx`, `Shop.jsx`, `Contact.jsx`), and styled the initial grid layouts using custom CSS. 
* **The Prompt:** > "I have built the basic UI components for my e-commerce site. Here is my code for the Home and Shop pages. Help me connect them using `react-router-dom` v6 so users can navigate without the page reloading."
* **AI Execution (The AI Assist):** The AI provided the `App.jsx` configuration, wrapping my existing components in `BrowserRouter`, `Routes`, and `Route`, and replaced my standard HTML `<a>` tags with React Router `<Link>` components to enable SPA navigation.


### Phase 2: State Management Integration (Context API)
**Technique:** Refactoring & State Injection

* **Human Input (My Contribution):** I wrote the data-fetching logic (`useEffect` with `fetch`) inside `Shop.jsx` and `Product.jsx` to pull from the DummyJSON API. However, I needed to pass cart data between routes without prop-drilling.
* **The Prompt:** > "My product fetching logic is working, but I need to implement a global cart. Generate the boilerplate for a `CartContext` that can store an array of objects. Then, show me exactly how to import and consume this context inside my existing `Product.jsx` file so my 'Add to Cart' button works globally."
* **AI Execution (The AI Assist):** The AI generated the `CartProvider` wrapper and the `useContext` hooks. It successfully refactored my 'Add to Cart' button to push data into the global state, and provided the logic for the Navbar badge to calculate the total items array.


### Phase 3: Level 3 Features (Persistence & Auth)
**Technique:** Syntax Generation for Advanced Hooks

* **Human Input (My Contribution):** I mapped out the logic for the Level 3 requirements: the cart needed to survive a page refresh, and the `/checkout` route needed a bouncer to redirect unauthenticated users to a login page. 
* **The Prompt:** > "I need to add `localStorage` persistence to my CartContext, and I need a Protected Route component that checks if a user is logged in before letting them see the Checkout component. Write the `useEffect` hook for the storage, and the `<Navigate>` wrapper for the router."
* **AI Execution (The AI Assist):** The AI injected the `useEffect` and `localStorage.setItem` methods into my existing Context file safely. It also wrote the `<ProtectedRoute>` higher-order component, utilizing the `useLocation` hook to smartly redirect users back to their intended destination after logging in.


### Phase 4: CSS Migration & Debugging
**Technique:** Contextual Error Tracing

* **Human Input (My Contribution):** I decided to migrate my custom CSS (`style.css`) to Tailwind CSS for a more modern, responsive UI, but encountered a build error where the classes weren't compiling.
* **The Prompt:** > "I installed Tailwind, but my app looks completely unstyled. The terminal threw: `npm error could not determine executable to run` when running `npx tailwindcss init`. Also, the generated `tailwind.config.js` file has an empty `content: []` array. Diagnose this."
* **AI Execution (The AI Assist):** The AI identified a versioning conflict (Tailwind v4 vs v3). It provided the exact override installation command (`npm install -D tailwindcss@3`) and the correct file path strings for the `content` array, successfully fixing the compiler pipeline so my classes would render.
