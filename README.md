# Binance Crypto Dashboard

A professional cryptocurrency trading dashboard that integrates with the Binance API to provide real-time market data, order book visualization, and interactive price charts.

![Binance Crypto Dashboard]([hps://api.placeholder.com/800/400](https://api.binance.com/api/v3/klines))

## Features

- **Real-time Trading Pairs**: View and search through all available trading pairs from Binance with current prices and 24-hour price changes
- **Live Order Book**: Monitor the top buy and sell orders for any selected trading pair with automatic 5-second refresh
- **Interactive Price Charts**: Analyze market trends with candlestick charts for multiple time intervals (1m, 5m, 15m, 1h, 4h, 1d)
- **Market Statistics**: Access key market metrics including 24h volume, price change, high, and low values
- **Responsive Design**: Optimized for both desktop and mobile viewing

## Tech Stack

- **Frontend**: React with TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Data Visualization**: Recharts
- **API Integration**: Custom API client for Binance
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 16.x or higher
- npm 8.x or higher
- A modern web browser (Chrome, Firefox, Safari, Edge)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kenny555max/oyedepo-kehinde-rave-project
   cd oyedepo-kehinde-rave-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   REACT_APP_API_BASE_URL=https://api.binance.com/api/v3/klines
   ```

## Running the Application

### Development mode

To run the application in development mode with hot-reload:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000` (default Vite port).

### Production build

To create a production build:

```bash
npm run build
```

The output will be generated in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for deployment on Vercel using the included `vercel.json` configuration file.

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
oyedepo-kehinde-rave-project/
├── public/            # Static assets
├── src/
|       assets
│   ├── components/    # React components
        |-- atoms
         |-- molecules
         | -- organisms
         |-- templates
          |-- ErrorBoundary
         |--Layout
          |-- Loading Spinner 
│   ├── services/      # API services and utilities
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript type definitions
│   ├── pages/         # Pages
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── .eslintrc.js       # ESLint configuration
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
├── vercel.json        # Vercel deployment configuration
└── README.md          # Project documentation
```

## API Usage

The application uses the public Binance API which does not require authentication for the implemented features. However, be aware of the following rate limits:

- 1200 weight per minute for IP addresses
- Additional endpoints may have specific rate limits

For more information, refer to the [Binance API Documentation]([(https://api.binance.com/api/v3/klines)).

## Customization

### Adding New Features

To add new trading features or indicators:

1. Extend the Binance API service in `src/services/api.ts`
2. Create new UI components in the `src/components/` directory
3. Update the main dashboard component to incorporate the new features

### Styling

The project uses Tailwind CSS for styling. To customize the appearance:

1. Modify the `tailwind.config.js` file to add custom themes, colors, or breakpoints
2. Use Tailwind utility classes directly in your components

## Troubleshooting

### Common Issues

- **API Rate Limit Exceeded**: If you experience issues with data loading, you may have exceeded the Binance API rate limits. Implement appropriate caching or reduce refresh frequencies.
- **Chart Rendering Issues**: If charts fail to render, check console for errors and ensure data is being properly formatted for Recharts components.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Binance API](https://binance-docs.github.io/apidocs/spot/en/) for providing market data
- [Recharts](https://recharts.org/) for the charting library
- [Tailwind CSS](https://tailwindcss.com/) for styling utilities
- [Vite](https://vitejs.dev/) for the frontend build tool
