# Camp Gear Frontend

Welcome to the frontend repository of the **Camp Gear** project! This React-based web application is designed to provide a seamless and engaging shopping experience for camping enthusiasts. It offers a responsive, user-friendly interface that allows customers to browse products, manage their carts, and complete purchases effortlessly.

## Features

- **Homepage:** Showcases featured products, best-sellers, and categories with an intuitive and attractive layout.
- **Product Listings:** Displays products with filtering and sorting options, allowing users to find exactly what they need.
- **Product Details:** Provides detailed information about each product, including images, descriptions, ratings, and availability.
- **Shopping Cart:** Users can add items to their cart, adjust quantities, and proceed to checkout with ease.
- **Checkout:** Secure checkout process with support for multiple payment methods (e.g., Cash on Delivery, Stripe).
- **Responsive Design:** Optimized for viewing on desktops, tablets, and smartphones.
- **State Management:** Utilizes Redux for managing the application state, ensuring a consistent user experience.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Redux:** State management for predictable and efficient state updates.
- **React Router:** Handles navigation between pages.
- **Axios:** For making HTTP requests to the backend API.
- **Styled Components:** For styling components with a modular and reusable approach.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mahmudulturan/camp-gear-frontend
   cd camp-gear-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
    ```

3. Set up environment variables:
    - Create a .env file in the root directory and define the following variables:
   ```bash
   VITE_SERVER_BASE_URL=http://exampleurl/api
   VITE_IMGBBAPIKEY=*************************
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any changes you'd like to make.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request
