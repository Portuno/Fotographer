
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sinopsis from "./pages/Sinopsis";
import Personajes from "./pages/Personajes";
import Manifiesto from "./pages/Manifiesto";
import Trailer from "./pages/Trailer";
import Galeria from "./pages/Galeria";
import Equipo from "./pages/Equipo";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sinopsis" element={<Sinopsis />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
