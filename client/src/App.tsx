// ============================================================
// APP — Layout principal con sidebar y navegación
// Tema: Terminal Educativo — SMR 1º CFGM
// ============================================================

import { useState } from "react";
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

  const activeSystem = systems.find((s) => s.id === activeId);

  const handleSelect = (id: string) => {
    setActiveId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen" style={{ background: "oklch(0.11 0.008 240)" }}>
      {/* Sidebar */}
      <Sidebar activeId={activeId} onSelect={handleSelect} onCollapse={setSidebarCollapsed} />

      {/* Main content — offset for sidebar */}
      <main
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? "64px" : "256px" }}
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
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <MainApp />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
