import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import 'leaflet/dist/leaflet.css';
import '@mantine/charts/styles.css';
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Notifications } from '@mantine/notifications';
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import DashboardLayout from "./pages/DashboardLayout";
import { SamplesPage } from "./pages/SamplesPage";
import { FilteredPage } from "./pages/FilteredPage";
import Fase3Dashboard from "./pages/Fase3Dashboard";
import Fase4Riesgo from "./pages/Fase4Riesgo";
import DashboardAdmin from "./pages/MainDashboard";
import FilteredTable from "./pages/FilteredTable";
import Fase3Table from "./pages/Fase3Table";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="" element={<DashboardAdmin />} />
            <Route path="samples" element={<SamplesPage />} />
            <Route path="filtered" element={<FilteredTable/>} />
            <Route path="/dashboard/filtered/:id" element={<FilteredPage />} />
            <Route path="fase3" element={<Fase3Table/>} />
            <Route path="/dashboard/fase3/:id" element={<Fase3Dashboard />} />
            <Route path="fase4" element={<Fase4Riesgo/>} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App