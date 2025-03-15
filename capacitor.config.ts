
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d64a7337b642413194638ae0af5cd6be',
  appName: 'sos-guardian-network',
  webDir: 'dist',
  server: {
    url: 'https://d64a7337-b642-4131-9463-8ae0af5cd6be.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: "#121212",
      showSpinner: true,
      spinnerColor: "#11ca47"
    }
  }
};

export default config;
