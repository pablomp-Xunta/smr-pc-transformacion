// ============================================================
// PÁGINA: Recursos y enlaces externos
// Tema: Terminal Educativo — SMR 1º CFGM
// ============================================================

const resources = [
  {
    category: "FreeBSD",
    color: "#d32f2f",
    items: [
      {
        title: "FreeBSD Handbook (Español)",
        url: "https://docs.freebsd.org/es/books/handbook/",
        description: "Documentación oficial completa de FreeBSD en español. Desde instalación hasta administración avanzada.",
        type: "Documentación oficial",
      },
      {
        title: "FreeBSD Forums",
        url: "https://forums.freebsd.org/",
        description: "Foro oficial de la comunidad FreeBSD para resolver dudas y compartir experiencias.",
        type: "Comunidad",
      },
    ],
  },
  {
    category: "Proxmox VE",
    color: "#d32f2f",
    items: [
      {
        title: "Proxmox VE Wiki",
        url: "https://pve.proxmox.com/wiki/Main_Page",
        description: "Wiki oficial con guías de instalación, configuración de VMs, LXC, clustering y backup.",
        type: "Documentación oficial",
      },
      {
        title: "Proxmox VE Forum",
        url: "https://forum.proxmox.com/",
        description: "Foro oficial con miles de hilos de ayuda y tutoriales de la comunidad.",
        type: "Comunidad",
      },
    ],
  },
  {
    category: "TrueNAS",
    color: "#3f51b5",
    items: [
      {
        title: "TrueNAS Documentation",
        url: "https://www.truenas.com/docs/",
        description: "Documentación oficial de TrueNAS CORE y TrueNAS SCALE con guías paso a paso.",
        type: "Documentación oficial",
      },
      {
        title: "TrueNAS Community Forums",
        url: "https://forums.truenas.com/",
        description: "Foro de la comunidad TrueNAS para soporte y compartir configuraciones.",
        type: "Comunidad",
      },
    ],
  },
  {
    category: "OPNsense",
    color: "#d32f2f",
    items: [
      {
        title: "OPNsense Documentation",
        url: "https://docs.opnsense.org/",
        description: "Documentación oficial con guías de instalación, configuración de firewall, VPN y plugins.",
        type: "Documentación oficial",
      },
      {
        title: "OPNsense Forum",
        url: "https://forum.opnsense.org/",
        description: "Foro oficial para soporte técnico y discusión de configuraciones.",
        type: "Comunidad",
      },
    ],
  },
  {
    category: "MikroTik RouterOS",
    color: "#ff9800",
    items: [
      {
        title: "MikroTik Wiki",
        url: "https://wiki.mikrotik.com/",
        description: "Wiki oficial con documentación exhaustiva de RouterOS, comandos y ejemplos de configuración.",
        type: "Documentación oficial",
      },
      {
        title: "MikroTik Forum",
        url: "https://forum.mikrotik.com/",
        description: "Foro oficial con soporte técnico y ejemplos de configuración avanzada.",
        type: "Comunidad",
      },
    ],
  },
  {
    category: "WordPress",
    color: "#3f51b5",
    items: [
      {
        title: "WordPress.org (Español)",
        url: "https://es.wordpress.org/support/",
        description: "Documentación oficial de WordPress en español con guías de instalación y administración.",
        type: "Documentación oficial",
      },
      {
        title: "WordPress Codex",
        url: "https://codex.wordpress.org/",
        description: "Referencia técnica completa de WordPress para desarrolladores y administradores.",
        type: "Referencia técnica",
      },
    ],
  },
  {
    category: "XAMPP",
    color: "#d32f2f",
    items: [
      {
        title: "Apache Friends",
        url: "https://www.apachefriends.org/",
        description: "Sitio oficial de XAMPP con descargas, documentación y foro de soporte.",
        type: "Documentación oficial",
      },
      {
        title: "XAMPP FAQ",
        url: "https://www.apachefriends.org/faq_linux.html",
        description: "Preguntas frecuentes sobre instalación y configuración de XAMPP.",
        type: "FAQ",
      },
    ],
  },
  {
    category: "Herramientas generales",
    color: "#ff9800",
    items: [
      {
        title: "Rufus — Crear USB bootable",
        url: "https://rufus.ie/",
        description: "Herramienta gratuita para Windows que crea medios USB de arranque desde imágenes ISO.",
        type: "Herramienta",
      },
      {
        title: "Ventoy — Multi-boot USB",
        url: "https://www.ventoy.net/",
        description: "Permite tener múltiples ISOs en un solo USB. Ideal para laboratorios de prácticas.",
        type: "Herramienta",
      },
      {
        title: "VirtualBox — Virtualización local",
        url: "https://www.virtualbox.org/",
        description: "Hipervisor tipo 2 gratuito para practicar instalaciones sin riesgo en tu PC.",
        type: "Herramienta",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen" style={{ background: "#ffffff" }}>
      <div className="container py-10">
        <div className="mb-8">
          <h1
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "Verdana, Geneva, sans-serif",
              color: "#212121",
            }}
          >
            <span style={{ color: "#ff9800" }}>&gt;</span> Recursos y enlaces
          </h1>
          <p
            className="text-sm"
            style={{
              fontFamily: "Verdana, Geneva, sans-serif",
              color: "#424242",
            }}
          >
            Documentación oficial, comunidades y herramientas para cada sistema.
          </p>
        </div>

        <div className="space-y-8">
          {resources.map((section) => (
            <div key={section.category}>
              <h2
                className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2"
                style={{
                  fontFamily: "Verdana, Geneva, sans-serif",
                  color: section.color,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: section.color }}
                />
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg transition-all hover:border-opacity-60"
                    style={{
                      background: "#f5f5f5",
                      border: "1px solid oklch(0.24 0.01 240)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${section.color}`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${section.color}20`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "oklch(0.24 0.01 240)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="text-sm font-semibold"
                        style={{
                          fontFamily: "Verdana, Geneva, sans-serif",
                          color: "#212121",
                        }}
                      >
                        {item.title}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded font-mono flex-shrink-0"
                        style={{
                          background: "#f5f5f5",
                          color: "#424242",
                          border: "1px solid #bdbdbd",
                        }}
                      >
                        {item.type}
                      </span>
                    </div>
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        fontFamily: "Verdana, Geneva, sans-serif",
                        color: "#424242",
                      }}
                    >
                      {item.description}
                    </p>
                    <div
                      className="flex items-center gap-1 mt-3 text-xs font-mono"
                      style={{ color: section.color, opacity: 0.8 }}
                    >
                      <span>{item.url.replace("https://", "").split("/")[0]}</span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M3.5 1.5H1.5C0.948 1.5 0.5 1.948 0.5 2.5V8.5C0.5 9.052 0.948 9.5 1.5 9.5H7.5C8.052 9.5 8.5 9.052 8.5 8.5V6.5M5.5 0.5H9.5M9.5 0.5V4.5M9.5 0.5L4 6"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
