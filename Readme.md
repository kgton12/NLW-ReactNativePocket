
# Nearby

**Nearby** is a mobile application that allows users to find partner establishments nearby and activate coupons by scanning QR codes. Discover places around you, get special offers, and enjoy benefits at your favorite establishments.

---

## Features
- **Find Nearby Establishments**: Locate partner establishments in categories like Food, Shopping, Accommodation, Cinema, and Bakery.
- **Activate Coupons**: Scan QR codes at establishments to activate special coupons and offers.
- **View Details**: Get information about establishments, including descriptions, addresses, contact information, and available coupons.
- **User-Friendly Interface**: Easy navigation through categories and places with an intuitive design.

---

## Installation

### Prerequisites
- **Node.js** and **npm**
- **Expo CLI** for running the mobile app
- **Prisma CLI** for database management

### Setting Up the API
1. Navigate to the `api` directory:
   ```bash
   cd api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   - Create a `.env` file in the `api` directory with your database connection string.
   - Example `.env` content:
     ```
     DATABASE_URL="your-database-connection-string"
     ```

4. Run migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Seed the database:
   ```bash
   npx prisma db seed
   ```

6. Start the API server:
   ```bash
   npm start
   ```

### Setting Up the Mobile App
1. Navigate to the `mobile` directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo server:
   ```bash
   npm start
   ```

4. Run the app:
   - Use the **Expo Go** app on your mobile device to scan the QR code.
   - Or run the app on an emulator using:
     ```bash
     npm run android
     ```
     or
     ```bash
     npm run ios
     ```

---

## Usage
1. **Explore Places**: Browse through different categories and find establishments near you.
2. **Activate Coupons**: Visit a partner establishment and scan the QR code to activate a coupon.
3. **Enjoy Benefits**: Redeem your coupons and enjoy exclusive offers.

---

## Project Structure
- **api/**: Contains the backend API built with Express and Prisma.
  - **package.json**: Contains API project dependencies and scripts.
  - **prisma/**: Database schema and seed data.
    - **schema.prisma**: Defines the database schema.
    - **seed.ts**: Seeds the database with initial data.
  - **src/**: API source code.
    - **server.ts**: Entry point of the API server.
- **mobile/**: Contains the mobile application built with React Native and Expo.
  - **app.json**: Configuration file for the Expo app.
  - **package.json**: Contains mobile app dependencies and scripts.
  - **src/**: Mobile app source code.
    - **components/**: Reusable components.
      - **Place**: Displays place information.
      - **Steps**: Shows steps to use the app.
    - **app/**: Application screens.
      - **home.tsx**: Home screen displaying categories and places.
      - **market/[id].tsx**: Details of a selected market.

---

## Technologies Used
- **Backend**: Node.js, Express, Prisma, TypeScript
- **Database**: SQLite (can be configured to use other databases)
- **Mobile App**: React Native, Expo, TypeScript
- **API Communication**: Axios
- **Navigation**: React Navigation

---

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

---

## License
This project is licensed under the [MIT License](LICENSE).
