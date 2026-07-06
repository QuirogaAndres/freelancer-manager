import React from 'react';
import { StatusBar } from 'expo-status-bar';
import PortfolioScreen from './src/screens/PortfolioScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#0D0D14" />
      <PortfolioScreen />
    </>
  );
}
