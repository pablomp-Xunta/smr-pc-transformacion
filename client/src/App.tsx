// ============================================================
// APP — Layout principal con sidebar y navegación
// Tema: Material Design + Accesibilidad WCAG
// Responsive: Mobile-first design
// ============================================================

import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import SystemPage from "./pages/SystemPage";
import GlossaryPage from "./pages/GlossaryPage";
import ResourcesPage from "./pages/ResourcesPage";
import { systems } from "./data/systems";

function MainApp() {
  const [activeId, setActiveId] = useState<string>("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const activeSystem = systems.find((s) => s.id === activeId);

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // En móvil, colapsar sidebar automáticamente
      if (mobile && !sidebarCollapsed) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarCollapsed]);

  const handleSelect = (id: string) => {
    setActiveId(id);
    // En móvil, cerrar sidebar al navegar
    if (isMobile) {
      setSidebarCollapsed(true);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calcular margen del contenido principal
  const mainMarginLeft = isMobile ? "0" : (sidebarCollapsed ? "64px" : "256px");

  return (
    <div className="flex min-h-screen" style={{ background: "#ffffff" }}>
      {/* Sidebar */}
      <Sidebar activeId={activeId} onSelect={handleSelect} onCollapse={setSidebarCollapsed} />

      {/* Main content — offset for sidebar */}
      <main
        className="flex-1 transition-all duration-300 overflow-x-hidden"
        style={{ marginLeft: mainMarginLeft, background: "#ffffff" }}
      >
        {activeId === "home" ? (
          <HomePage onSelect={handleSelect} />
        ) : activeId === "glossary" ? (
          <GlossaryPage />
        ) : activeId === "resources" ? (
          <ResourcesPage />
        ) : activeSystem ? (
          <SystemPage system={activeSystem} onBack={() => handleSelect("home")} />
        ) : (
          <HomePage onSelect={handleSelect} />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <MainApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
