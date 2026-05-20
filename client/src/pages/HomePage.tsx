// ============================================================
// PÁGINA: Inicio — Hero + Grid de sistemas
// Tema: Terminal Educativo — SMR 1º CFGM
// ============================================================

import { systems, difficultyConfig } from "@/data/systems";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675906224/MxKSkjaNnV6sJbAWDTDPNj/hero-pc-transform-VTvpatqp9UHDJsBVZN4Z6X.webp";
const BG_CIRCUIT =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663675906224/MxKSkjaNnV6sJbAWDTDPNj/bg-circuit-jexfP28TwaMhZh5VozjYZh.webp";

interface HomePageProps {
  onSelect: (id: string) => void;
}

export default function HomePage({ onSelect }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* ── HERO SECTION ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#ffffff",
          minHeight: "520px",
        }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 40%, rgba(63, 81, 181, 0.1) 70%, transparent 100%)",
          }}
        />

        <div className="relative container py-20 lg:py-28">
          <div className="max-w-2xl">
            {/* Module badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="px-3 py-1 rounded text-xs font-mono uppercase tracking-widest"
                style={{
                  background: "#fff3e0",
                  color: "#ff9800",
                  border: "1px solid #ffb74d",
                }}
              >
                1º CFGM · SMR
              </span>
              <span
                className="px-3 py-1 rounded text-xs font-mono uppercase tracking-widest"
                style={{
                  background: "#e8eaf6",
                  color: "#3f51b5",
                  border: "1px solid #c5cae9",
                }}
              >
                Montaje y Mantenimiento
              </span>
            </div>

            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#212121",
              }}
            >
              Tu PC,{" "}
              <span style={{ color: "#ff9800" }}>Mil</span>{" "}
              Posibilidades
            </h1>

            <p
              className="text-lg leading-relaxed mb-8"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#212121",
                maxWidth: "520px",
              }}
            >
              Aprende a transformar un ordenador convencional en un servidor, hipervisor, NAS, router, firewall o servidor web usando sistemas operativos y herramientas de código abierto.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "7", label: "Sistemas" },
                { value: "3", label: "Niveles" },
                { value: "35+", label: "Pasos guiados" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily: "Verdana, Geneva, sans-serif",
                      color: "#ff9800",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "#424242" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section
        className="py-12"
        style={{
          backgroundImage: `url(${BG_CIRCUIT})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            className="rounded-lg p-6 lg:p-8"
            style={{
              background: "#f5f5f5",
              border: "1px solid #bdbdbd",
            }}
          >
            <h2
              className="text-xl font-bold mb-4"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#212121",
              }}
            >
              <span style={{ color: "#ff9800" }}>//</span> ¿Qué aprenderás?
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#424242",
              }}
            >
              En este módulo exploraremos cómo un PC estándar puede convertirse en una herramienta especializada instalando sistemas operativos y software diseñados para tareas concretas. Más allá de Windows y las distribuciones Linux convencionales, existe un ecosistema rico de soluciones de código abierto que transforman el hardware en servidores, routers, sistemas de almacenamiento o entornos de virtualización.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: "🎯",
                  title: "Objetivo",
                  text: "Conocer alternativas reales a Windows/Linux para uso en producción y laboratorio.",
                },
                {
                  icon: "🔧",
                  title: "Práctica",
                  text: "Guías paso a paso con comandos reales para instalar y configurar cada sistema.",
                },
                {
                  icon: "📋",
                  title: "Evaluación",
                  text: "Requisitos de hardware, casos de uso, ventajas e inconvenientes de cada opción.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded"
                  style={{
                    background: "#3f51b5",
                    border: "1px solid #3f51b5",
                  }}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{
                      fontFamily: "Verdana, Geneva, sans-serif",
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      fontFamily: "Verdana, Geneva, sans-serif",
                      color: "#e8eaf6",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SYSTEMS GRID ── */}
      <section className="py-12" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="mb-8">
            <h2
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#212121",
              }}
            >
              <span style={{ color: "#ff9800" }}>&gt;</span> Sistemas disponibles
            </h2>
            <p
              className="text-sm"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#424242",
              }}
            >
              Selecciona un sistema para ver la guía completa de instalación y configuración.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {systems.map((sys, idx) => {
              const diff = difficultyConfig[sys.difficulty];
              return (
                <button
                  key={sys.id}
                  onClick={() => onSelect(sys.id)}
                  className="terminal-card text-left p-5 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sys.logoEmoji}</span>
                      <div>
                        <h3
                          className="text-sm font-bold"
                          style={{
                            fontFamily: "Verdana, Geneva, sans-serif",
                            color: "#212121",
                          }}
                        >
                          {sys.name}
                        </h3>
                        <span
                          className="text-xs"
                          style={{ color: "#424242" }}
                        >
                          {sys.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded font-mono ${diff.class}`}>
                      {diff.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{
                      fontFamily: "Verdana, Geneva, sans-serif",
                      color: "#424242",
                    }}
                  >
                    {sys.description.slice(0, 120)}...
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sys.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{
                          background: "#f5f5f5",
                          color: "#424242",
                          border: "1px solid #bdbdbd",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-1.5 text-xs font-mono"
                    style={{ color: "#ff9800" }}
                  >
                    <span>Ver guía completa</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6H10M7 3L10 6L7 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ACTIVIDADES PRÁCTICAS ── */}
      <section
        className="py-12"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <h2
            className="text-2xl font-bold mb-6"
            style={{
              fontFamily: "Verdana, Geneva, sans-serif",
              color: "#212121",
            }}
          >
            <span style={{ color: "#ff9800" }}>⚡</span> Actividades prácticas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: "P01",
                title: "Instalar Proxmox en PC de laboratorio",
                desc: "Instala Proxmox VE en un PC físico del laboratorio y crea una máquina virtual con Debian. Documenta el proceso con capturas de pantalla.",
                diff: "Intermedio",
                time: "2h",
              },
              {
                num: "P02",
                title: "Configurar TrueNAS como NAS de clase",
                desc: "Instala TrueNAS CORE, crea un pool ZFS con los discos disponibles y configura un share SMB accesible desde los PCs de Windows del aula.",
                diff: "Intermedio",
                time: "3h",
              },
              {
                num: "P03",
                title: "Montar un servidor web con XAMPP",
                desc: "Instala XAMPP en tu PC, configura un virtual host y despliega una instalación de WordPress. Crea una página de inicio personalizada.",
                diff: "Fácil",
                time: "1.5h",
              },
              {
                num: "P04",
                title: "Configurar OPNsense como router de aula",
                desc: "Instala OPNsense en un PC con dos NICs. Configura WAN, LAN, NAT y reglas básicas de firewall. Verifica conectividad desde la red LAN.",
                diff: "Avanzado",
                time: "4h",
              },
            ].map((act) => (
              <div
                key={act.num}
                className="p-5 rounded-lg"
                style={{
                  background: "#ffffff",
                  border: "1px solid #bdbdbd",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{
                      background: "#fff3e0",
                      color: "#ff9800",
                      border: "1px solid #ffb74d",
                    }}
                  >
                    {act.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded font-mono ${
                        act.diff === "Fácil"
                          ? "badge-easy"
                          : act.diff === "Intermedio"
                          ? "badge-medium"
                          : "badge-hard"
                      }`}
                    >
                      {act.diff}
                    </span>
                    <span
                      className="text-xs font-mono"
                      style={{ color: "#424242" }}
                    >
                      ⏱ {act.time}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    color: "#212121",
                  }}
                >
                  {act.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "Verdana, Geneva, sans-serif",
                    color: "#424242",
                  }}
                >
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section
        className="py-12"
        style={{ background: "#303f9f" }}
      >
        <div className="container">
          <h2
            className="text-2xl font-bold mb-6"
            style={{
              fontFamily: "Verdana, Geneva, sans-serif",
              color: "#212121",
            }}
          >
            <span style={{ color: "#3f51b5" }}>#</span> Comparativa rápida
          </h2>
          <div className="overflow-x-auto">
            <table
              className="w-full text-sm"
              style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid #bdbdbd" }}>
                  {["Sistema", "Tipo", "Dificultad", "RAM mínima", "Licencia"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 px-4 text-xs uppercase tracking-wider"
                      style={{
                        color: "#424242",
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "FreeBSD", type: "Sistema Operativo", diff: "Avanzado", ram: "512 MB", license: "BSD (libre)" },
                  { name: "Proxmox VE", type: "Hipervisor", diff: "Intermedio", ram: "2 GB", license: "AGPL (libre)" },
                  { name: "TrueNAS CORE", type: "NAS", diff: "Intermedio", ram: "4 GB", license: "BSD (libre)" },
                  { name: "OPNsense", type: "Router/Firewall", diff: "Avanzado", ram: "2 GB", license: "BSD (libre)" },
                  { name: "MikroTik RouterOS", type: "Router/Switch", diff: "Avanzado", ram: "64 MB", license: "Comercial" },
                  { name: "WordPress", type: "CMS Web", diff: "Fácil", ram: "512 MB", license: "GPL (libre)" },
                  { name: "XAMPP", type: "Dev Server", diff: "Fácil", ram: "512 MB", license: "GPL (libre)" },
                ].map((row, i) => (
                  <tr
                    key={row.name}
                    style={{
                      borderBottom: "1px solid #bdbdbd",
                      background: i % 2 === 0 ? "#ffffff" : "#f5f5f5",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-medium"
                      style={{
                        color: "#212121",
                        fontFamily: "Verdana, Geneva, sans-serif",
                        fontSize: "0.8rem",
                      }}
                    >
                      {row.name}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#424242" }}>
                      {row.type}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`text-xs px-2 py-0.5 rounded font-mono ${
                          row.diff === "Fácil"
                            ? "badge-easy"
                            : row.diff === "Intermedio"
                            ? "badge-medium"
                            : "badge-hard"
                        }`}
                      >
                        {row.diff}
                      </span>
                    </td>
                    <td
                      className="py-3 px-4 font-mono text-xs"
                      style={{ color: "#424242" }}
                    >
                      {row.ram}
                    </td>
                    <td className="py-3 px-4" style={{ color: row.license === "Comercial" ? "#d32f2f" : "#ff9800", fontSize: "0.8rem" }}>
                      {row.license}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* ── FOOTER ── */}
      <footer
        className="py-8"
        style={{
          background: "#f5f5f5",
          borderTop: "1px solid #bdbdbd",
        }}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p
                className="text-sm font-mono"
                style={{ color: "#424242" }}
              >
                <span style={{ color: "#ff9800" }}>SMR 1º CFGM</span> · Módulo: Montaje y Mantenimiento de Equipos Informáticos
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "#424242", fontFamily: "Verdana, Geneva, sans-serif" }}
              >
                Sistemas Microinformáticos y Redes · Ciclo Formativo de Grado Medio
              </p>
            </div>
            <p
              className="text-xs font-mono"
              style={{ color: "#424242" }}
            >
              Contenido educativo de libre uso · 2025/26
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
