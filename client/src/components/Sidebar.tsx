// ============================================================
// COMPONENTE: Sidebar — Navegación lateral fija
// Tema: Material Design + Accesibilidad WCAG
// Paleta: Indigo + Amber
// ============================================================

import { useState } from "react";
import { systems } from "@/data/systems";

const extraPages = [
  { id: "glossary", label: "Glosario", icon: "📚", subtitle: "Términos técnicos" },
  { id: "resources", label: "Recursos", icon: "🔗", subtitle: "Enlaces y docs" },
];

interface SidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  onCollapse?: (collapsed: boolean) => void;
}

const categoryIcons: Record<string, string> = {
  os: "🖥",
  virtualization: "⬡",
  nas: "💾",
  router: "🔒",
  switch: "🌐",
  web: "📝",
  devserver: "⚙️",
};

export default function Sidebar({ activeId, onSelect, onCollapse }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-40 flex flex-col transition-all duration-300 ease-out ${
        collapsed ? "w-16" : "w-64"
      } md:w-64 md:relative md:z-auto`}
      style={{
        width: collapsed ? '64px' : '256px',
        background: "#303f9f",
        borderRight: "1px solid #bdbdbd",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-5"
        style={{ borderBottom: "1px solid #bdbdbd" }}
      >
        {!collapsed && (
          <div className="flex flex-col">
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#ffc107", fontFamily: "Verdana, Geneva, sans-serif" }}
            >
              SMR 1º CFGM
            </span>
            <span className="text-xs mt-0.5" style={{ color: "#c5cae9", fontFamily: "Verdana, Geneva, sans-serif" }}>
              Transformación de PC
            </span>
          </div>
        )}
        <button
          onClick={() => { const next = !collapsed; setCollapsed(next); onCollapse?.(next); }}
          className="p-1.5 rounded transition-colors hover:opacity-80"
          style={{ color: "#c5cae9" }}
          aria-label="Colapsar menú"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Home link */}
      <button
        onClick={() => onSelect("home")}
        className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-150 ${
          activeId === "home" ? "nav-link-active" : "hover:opacity-80"
        }`}
        style={{
          color: activeId === "home" ? "#ffc107" : "#c5cae9",
          fontFamily: "Verdana, Geneva, sans-serif",
          fontWeight: activeId === "home" ? "bold" : "normal",
        }}
      >
        <span className="text-base flex-shrink-0">🏠</span>
        {!collapsed && <span className="text-xs">Inicio</span>}
      </button>

      {/* Divider */}
      {!collapsed && (
        <div className="px-4 py-2">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#c5cae9", fontFamily: "Verdana, Geneva, sans-serif", fontSize: "0.7rem" }}
          >
            Sistemas
          </span>
        </div>
      )}

      {/* System links */}
      <nav className="flex-1 overflow-y-auto py-1">
        {systems.map((sys) => {
          const isActive = activeId === sys.id;
          return (
            <button
              key={sys.id}
              onClick={() => onSelect(sys.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 ${
                isActive ? "nav-link-active" : "hover:opacity-80"
              }`}
              style={{
                color: isActive ? "#ffc107" : "#c5cae9",
                fontFamily: "Verdana, Geneva, sans-serif",
                fontWeight: isActive ? "bold" : "normal",
              }}
              title={collapsed ? sys.name : undefined}
            >
              <span className="text-base flex-shrink-0">
                {categoryIcons[sys.category] || "📦"}
              </span>
              {!collapsed && (
                <div className="flex flex-col items-start min-w-0">
                  <span
                    className="text-xs font-medium truncate w-full"
                    style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                  >
                    {sys.name}
                  </span>
                  <span className="text-xs truncate w-full" style={{ color: "#c5cae9", fontSize: "0.65rem", fontFamily: "Verdana, Geneva, sans-serif" }}>
                    {sys.categoryLabel}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </nav>

      {/* Extra pages */}
      {!collapsed && (
        <div className="px-4 py-2">
          <span
            className="text-xs uppercase tracking-widest"
            style={{ color: "#c5cae9", fontFamily: "Verdana, Geneva, sans-serif", fontSize: "0.7rem" }}
          >
            Recursos
          </span>
        </div>
      )}
      {extraPages.map((page) => {
        const isActive = activeId === page.id;
        return (
          <button
            key={page.id}
            onClick={() => onSelect(page.id)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-150 ${
              isActive ? "nav-link-active" : "hover:opacity-80"
            }`}
            style={{
              color: isActive ? "#ffc107" : "#c5cae9",
              fontFamily: "Verdana, Geneva, sans-serif",
              fontWeight: isActive ? "bold" : "normal",
            }}
            title={collapsed ? page.label : undefined}
          >
            <span className="text-base flex-shrink-0">{page.icon}</span>
            {!collapsed && (
              <div className="flex flex-col items-start min-w-0">
                <span
                  className="text-xs font-medium truncate w-full"
                  style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                >
                  {page.label}
                </span>
                <span className="text-xs truncate w-full" style={{ color: "#c5cae9", fontSize: "0.65rem", fontFamily: "Verdana, Geneva, sans-serif" }}>
                  {page.subtitle}
                </span>
              </div>
            )}
          </button>
        );
      })}

      {/* Footer */}
      {!collapsed && (
        <div
          className="px-4 py-4"
          style={{ borderTop: "1px solid #bdbdbd" }}
        >
          <p className="text-xs" style={{ color: "#c5cae9", fontFamily: "Verdana, Geneva, sans-serif" }}>
            v1.0 · 2024/25
          </p>
          <p className="text-xs mt-0.5" style={{ color: "#c5cae9", fontSize: "0.65rem", fontFamily: "Verdana, Geneva, sans-serif" }}>
            Módulo: Montaje y Mantenimiento
          </p>
        </div>
      )}
    </aside>
  );
}
