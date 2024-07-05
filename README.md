# Weather App

Welcome to the Weather App! This application allows you to check the current weather conditions for any city. Simply enter the city name, and you'll get information such as temperature, humidity, and wind speed. If the city name entered is incorrect, the app will display an error message saying "City not found."

## Features

- City-Based Weather Search: Enter any city name to get the current weather conditions.
- Temperature: Get the current temperature of the city.
- Humidity: See the current humidity level.
- Wind Speed: View the current wind speed.
- Error Handling: Displays "City not found" if the entered city name is invalid.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Weather API: Fetches real-time weather data.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

## Usage

1. Enter the name of the city in the input field.
2. Click on the "Get Weather" button.
3. View the weather details including temperature, humidity, and wind speed.
4. If the entered city name is incorrect, an error message "City not found" will be displayed.

## API Integration

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch real-time weather data. To use this API, you need an API key. Follow these steps to set up your API key:

1. Sign up at [OpenWeatherMap](https://openweathermap.org/).
2. Go to the API section and generate your API key.
3. Go to SearchBox.jsx file and write your Api key in the API_KEY variable.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API.

---

Thank you for using the Weather App! If you have any questions or feedback, feel free to open an issue or contact us.

---

Happy Coding!