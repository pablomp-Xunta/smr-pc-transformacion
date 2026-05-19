// ============================================================
// PÁGINA: Detalle de Sistema
// Tema: Terminal Educativo — SMR 1º CFGM
// ============================================================

import { useState } from "react";
import { System, difficultyConfig } from "@/data/systems";

interface SystemPageProps {
  system: System;
  onBack: () => void;
}

export default function SystemPage({ system, onBack }: SystemPageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "steps" | "hardware" | "pros">(
    "overview"
  );
  const diff = difficultyConfig[system.difficulty];

  const tabs = [
    { id: "overview", label: "Descripción" },
    { id: "steps", label: "Instalación" },
    { id: "hardware", label: "Hardware" },
    { id: "pros", label: "Ventajas/Desventajas" },
  ] as const;

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.11 0.008 240)" }}>
      {/* ── HEADER ── */}
      <div
        className="sticky top-0 z-30"
        style={{
          background: "oklch(0.13 0.008 240 / 0.95)",
          borderBottom: "1px solid oklch(0.22 0.01 240)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container py-3 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-white"
            style={{ color: "oklch(0.55 0.01 240)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 11L5 7L9 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Volver
          </button>
          <span style={{ color: "oklch(0.28 0.01 240)" }}>/</span>
          <span
            className="text-xs font-mono"
            style={{ color: "oklch(0.75 0.18 155)" }}
          >
            {system.name}
          </span>
        </div>
      </div>

      {/* ── HERO DEL SISTEMA ── */}
      <div
        className="py-10 lg:py-14"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.15 0.008 240) 0%, oklch(0.11 0.008 240) 100%)",
          borderBottom: "1px solid oklch(0.20 0.01 240)",
        }}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex items-start gap-5">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{
                  background: "oklch(0.18 0.008 240)",
                  border: "1px solid oklch(0.28 0.01 240)",
                }}
              >
                {system.logoEmoji}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.95 0.005 240)",
                    }}
                  >
                    {system.name}
                  </h1>
                  <span className={`text-xs px-2 py-0.5 rounded font-mono ${diff.class}`}>
                    {diff.label}
                  </span>
                </div>
                <p
                  className="text-base mb-3"
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    color: "oklch(0.60 0.01 240)",
                  }}
                >
                  {system.subtitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {system.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded font-mono"
                      style={{
                        background: "oklch(0.20 0.008 240)",
                        color: "oklch(0.55 0.01 240)",
                        border: "1px solid oklch(0.25 0.01 240)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Official link */}
            <a
              href={system.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-mono transition-all hover:opacity-80 flex-shrink-0"
              style={{
                background: "oklch(0.75 0.18 155 / 0.12)",
                color: "oklch(0.75 0.18 155)",
                border: "1px solid oklch(0.75 0.18 155 / 0.3)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M5.5 2.5H2.5C1.948 2.5 1.5 2.948 1.5 3.5V11.5C1.5 12.052 1.948 12.5 2.5 12.5H10.5C11.052 12.5 11.5 12.052 11.5 11.5V8.5M8.5 1.5H12.5M12.5 1.5V5.5M12.5 1.5L6 8"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Sitio oficial
            </a>
          </div>
        </div>
      </div>

      {/* ── TABS ── */}
      <div
        className="sticky z-20"
        style={{
          top: "48px",
          background: "oklch(0.13 0.008 240 / 0.95)",
          borderBottom: "1px solid oklch(0.22 0.01 240)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="container">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-3 text-sm font-mono transition-all relative"
                style={{
                  color:
                    activeTab === tab.id
                      ? "oklch(0.75 0.18 155)"
                      : "oklch(0.52 0.01 240)",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid oklch(0.75 0.18 155)"
                      : "2px solid transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <div className="container py-8">
        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="max-w-3xl animate-fade-in-up">
            <h2
              className="text-lg font-bold mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.005 240)",
              }}
            >
              <span style={{ color: "oklch(0.75 0.18 155)" }}>//</span> ¿Qué es {system.name}?
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                color: "oklch(0.70 0.01 240)",
                lineHeight: "1.8",
              }}
            >
              {system.longDescription}
            </p>

            <h3
              className="text-base font-bold mb-4"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.85 0.005 240)",
              }}
            >
              <span style={{ color: "oklch(0.68 0.15 240)" }}>#</span> Casos de uso principales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {system.useCases.map((uc, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded"
                  style={{
                    background: "oklch(0.16 0.008 240)",
                    border: "1px solid oklch(0.24 0.01 240)",
                  }}
                >
                  <span
                    className="text-xs font-mono mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(0.75 0.18 155)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.72 0.01 240)",
                    }}
                  >
                    {uc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEPS */}
        {activeTab === "steps" && (
          <div className="max-w-3xl animate-fade-in-up">
            <h2
              className="text-lg font-bold mb-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.005 240)",
              }}
            >
              <span style={{ color: "oklch(0.75 0.18 155)" }}>//</span> Guía de instalación
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: "oklch(0.25 0.01 240)" }}
              />

              <div className="space-y-6">
                {system.steps.map((step, i) => (
                  <div key={i} className="relative flex gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                    {/* Step number */}
                    <div
                      className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0"
                      style={{
                        background: "oklch(0.16 0.008 240)",
                        border: "2px solid oklch(0.75 0.18 155 / 0.5)",
                        color: "oklch(0.75 0.18 155)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Step content */}
                    <div
                      className="flex-1 p-5 rounded-lg"
                      style={{
                        background: "oklch(0.16 0.008 240)",
                        border: "1px solid oklch(0.24 0.01 240)",
                      }}
                    >
                      <h3
                        className="text-sm font-bold mb-2"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          color: "oklch(0.88 0.005 240)",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-3"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.65 0.01 240)",
                        }}
                      >
                        {step.description}
                      </p>
                      {step.command && (
                        <div className="code-block">
                          <div className="flex items-center gap-2 mb-2 pb-2" style={{ borderBottom: "1px solid oklch(0.22 0.01 240)" }}>
                            <div className="flex gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.65 0.22 25)" }} />
                              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.82 0.16 95)" }} />
                              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(0.75 0.18 155)" }} />
                            </div>
                            <span className="text-xs" style={{ color: "oklch(0.40 0.01 240)" }}>
                              terminal
                            </span>
                          </div>
                          <pre className="whitespace-pre-wrap text-xs leading-relaxed" style={{ color: "oklch(0.75 0.18 155)" }}>
                            <span style={{ color: "oklch(0.55 0.01 240)" }}>$ </span>
                            {step.command}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* HARDWARE */}
        {activeTab === "hardware" && (
          <div className="max-w-3xl animate-fade-in-up">
            <h2
              className="text-lg font-bold mb-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.005 240)",
              }}
            >
              <span style={{ color: "oklch(0.75 0.18 155)" }}>//</span> Requisitos de hardware
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "⚡", label: "Procesador", value: system.hardware.cpu },
                { icon: "🧠", label: "Memoria RAM", value: system.hardware.ram },
                { icon: "💽", label: "Almacenamiento", value: system.hardware.storage },
                { icon: "🔌", label: "Red", value: system.hardware.network },
                ...(system.hardware.extra
                  ? [{ icon: "ℹ️", label: "Notas adicionales", value: system.hardware.extra }]
                  : []),
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-lg"
                  style={{
                    background: "oklch(0.16 0.008 240)",
                    border: "1px solid oklch(0.24 0.01 240)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{item.icon}</span>
                    <span
                      className="text-xs uppercase tracking-wider font-mono"
                      style={{ color: "oklch(0.48 0.01 240)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.78 0.01 240)",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Hardware tip */}
            <div
              className="p-5 rounded-lg"
              style={{
                background: "oklch(0.68 0.15 240 / 0.08)",
                border: "1px solid oklch(0.68 0.15 240 / 0.25)",
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">💡</span>
                <div>
                  <h3
                    className="text-sm font-bold mb-1"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "oklch(0.68 0.15 240)",
                    }}
                  >
                    Consejo para el laboratorio
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "'Source Sans 3', sans-serif",
                      color: "oklch(0.65 0.01 240)",
                      lineHeight: "1.7",
                    }}
                  >
                    Para prácticas en clase, puedes usar hardware reciclado o PCs de segunda mano. La mayoría de estos sistemas funcionan perfectamente en equipos con 5-10 años de antigüedad. También puedes instalarlos en una máquina virtual usando Proxmox o VirtualBox para practicar sin riesgo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PROS/CONS */}
        {activeTab === "pros" && (
          <div className="max-w-3xl animate-fade-in-up">
            <h2
              className="text-lg font-bold mb-6"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "oklch(0.90 0.005 240)",
              }}
            >
              <span style={{ color: "oklch(0.75 0.18 155)" }}>//</span> Ventajas e inconvenientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pros */}
              <div
                className="p-5 rounded-lg"
                style={{
                  background: "oklch(0.75 0.18 155 / 0.06)",
                  border: "1px solid oklch(0.75 0.18 155 / 0.2)",
                }}
              >
                <h3
                  className="text-sm font-bold mb-4 flex items-center gap-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.75 0.18 155)",
                  }}
                >
                  <span>✓</span> Ventajas
                </h3>
                <ul className="space-y-3">
                  {system.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="text-xs font-mono mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.75 0.18 155)" }}
                      >
                        +
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.70 0.01 240)",
                        }}
                      >
                        {pro}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div
                className="p-5 rounded-lg"
                style={{
                  background: "oklch(0.65 0.22 25 / 0.06)",
                  border: "1px solid oklch(0.65 0.22 25 / 0.2)",
                }}
              >
                <h3
                  className="text-sm font-bold mb-4 flex items-center gap-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "oklch(0.65 0.22 25)",
                  }}
                >
                  <span>✗</span> Inconvenientes
                </h3>
                <ul className="space-y-3">
                  {system.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="text-xs font-mono mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.65 0.22 25)" }}
                      >
                        -
                      </span>
                      <span
                        className="text-sm"
                        style={{
                          fontFamily: "'Source Sans 3', sans-serif",
                          color: "oklch(0.70 0.01 240)",
                        }}
                      >
                        {con}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Summary verdict */}
            <div
              className="mt-6 p-5 rounded-lg"
              style={{
                background: "oklch(0.16 0.008 240)",
                border: "1px solid oklch(0.24 0.01 240)",
              }}
            >
              <h3
                className="text-sm font-bold mb-2"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "oklch(0.85 0.005 240)",
                }}
              >
                <span style={{ color: "oklch(0.82 0.16 95)" }}>⚡</span> ¿Cuándo elegir {system.name}?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  color: "oklch(0.65 0.01 240)",
                  lineHeight: "1.7",
                }}
              >
                {system.id === "freebsd" &&
                  "Elige FreeBSD cuando necesites un servidor de producción estable con ZFS, o cuando quieras aprender Unix de verdad. No es la mejor opción para escritorio o si necesitas soporte de hardware moderno de consumo."}
                {system.id === "proxmox" &&
                  "Proxmox VE es ideal para laboratorios de prácticas y consolidación de servidores. Si tienes un PC potente y quieres ejecutar múltiples sistemas operativos simultáneamente, es la mejor opción gratuita."}
                {system.id === "truenas" &&
                  "TrueNAS CORE es la elección perfecta si tienes varios discos duros y quieres un servidor de ficheros robusto con protección de datos ZFS. Imprescindible para backups centralizados."}
                {system.id === "opnsense" &&
                  "OPNsense es la mejor opción si quieres control total sobre tu red, VPN, y seguridad. Requiere un PC con dos NICs pero ofrece capacidades de firewall empresarial de forma gratuita."}
                {system.id === "mikrotik" &&
                  "RouterOS es ideal si necesitas enrutamiento dinámico avanzado (BGP, OSPF) o quieres prepararte para certificaciones MikroTik (MTCNA). Para uso doméstico, OPNsense puede ser más accesible."}
                {system.id === "wordpress" &&
                  "WordPress es la opción perfecta para aprender administración web real. Si necesitas crear un sitio web funcional rápidamente con muchas funcionalidades, es la elección más práctica."}
                {system.id === "xampp" &&
                  "XAMPP es ideal para el aula y el desarrollo local. Si quieres probar aplicaciones PHP o instalar WordPress en tu PC sin complicaciones, XAMPP es la forma más rápida de empezar."}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
