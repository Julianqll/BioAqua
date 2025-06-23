import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import DashboardLayout from "./pages/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<DashboardLayout />}>
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App