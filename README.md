# Weather Report Web App

## Overview

This web application provides weather reports for cities across the globe. Built with React, it fetches real-time weather data and displays it in an easy-to-understand format. Users can search for any city to get up-to-date information on temperature, humidity, wind speed, and weather conditions.

## Features

- **Global City Search:** Enter the name of any city in the world to get its current weather report.
- **Real-Time Data:** The app fetches the latest weather information using a reliable weather API.
- **Detailed Weather Information:** Displays temperature, humidity, wind speed, and general weather conditions.
- **Responsive Design:** Optimized for use on both desktop and mobile devices.
- **User-Friendly Interface:** Simple and intuitive design for easy navigation.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/weather-report-app.git
   cd weather
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Add your API key:**
   - Obtain an API key from a weather service provider (e.g., OpenWeatherMap).
   - Create a `.env` file in the root directory and add your API key:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Start the application:**
   ```
   npm start
   ```

   The app should now be running on `http://localhost:5173`.

## Usage

1. Open the app in your web browser.
2. Enter the name of a city in the search bar.
3. Click the search button or press Enter.
4. View the weather report for the specified city, including temperature, humidity, wind speed, and weather conditions.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **CSS:** For styling the application.
- **Environment Variables:** For securely managing the API key.

## File Structure

```
weather-report-app/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├──
│   ├── SearchBox.jsx
│   ├── Display.jsx
│   ├── Body.jsx
│   ├── App.jsx
│   ├── main.jsx
|   ├──error.js
│   ├── App.css
│   ├── body.css
|   ├──Display.css
|   ├──index.css
|   ├──SearchBox.css
│
├── .env
├── package.json
├── README.md
├──vite.config.js
└── index.html
```

- **public/**: Contains the HTML template and static assets.
- **src/**: Contains the main application code.
  - **components/**: Contains reusable React components like `SearchBar` and `WeatherDisplay`.
  - **App.js**: Main app component.
  - **index.js**: Entry point of the application.
  - **App.css**: Global styles for the application.
- **.env**: Environment variables file for storing the API key.
- **package.json**: Lists dependencies and scripts for the application.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them.
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push your changes to your fork.
   ```bash
   git push origin feature-name
   ```
5. Create a pull request with a description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the Weather Report Web App! If you have any questions or feedback, please feel free to reach out.