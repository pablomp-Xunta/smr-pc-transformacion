// ============================================================
// PÁGINA: Glosario de términos técnicos
// Tema: Terminal Educativo — SMR 1º CFGM
// ============================================================

const terms = [
  {
    term: "Hipervisor",
    definition:
      "Software que permite ejecutar múltiples sistemas operativos (máquinas virtuales) sobre un mismo hardware físico. Tipo 1 (bare-metal, como Proxmox) se instala directamente en el hardware. Tipo 2 (hosted, como VirtualBox) se instala sobre un SO existente.",
    category: "Virtualización",
  },
  {
    term: "NAS",
    definition:
      "Network Attached Storage. Dispositivo o sistema de almacenamiento conectado a la red que permite compartir ficheros entre múltiples usuarios y dispositivos. TrueNAS es un ejemplo de SO para NAS.",
    category: "Almacenamiento",
  },
  {
    term: "ZFS",
    definition:
      "Sistema de ficheros avanzado desarrollado por Sun Microsystems. Ofrece protección contra corrupción de datos (checksums), RAID por software (RAIDZ), snapshots, compresión y deduplicación. Usado en FreeBSD, TrueNAS y Proxmox.",
    category: "Almacenamiento",
  },
  {
    term: "KVM",
    definition:
      "Kernel-based Virtual Machine. Módulo del kernel Linux que permite la virtualización completa de hardware. Proxmox usa KVM para crear máquinas virtuales completas con aislamiento total.",
    category: "Virtualización",
  },
  {
    term: "LXC",
    definition:
      "Linux Containers. Tecnología de virtualización a nivel de sistema operativo (contenedores) que permite ejecutar múltiples instancias Linux aisladas en el mismo kernel. Más ligero que KVM.",
    category: "Virtualización",
  },
  {
    term: "Firewall",
    definition:
      "Sistema de seguridad que monitoriza y controla el tráfico de red entrante y saliente según reglas de seguridad predefinidas. OPNsense es un ejemplo de SO firewall.",
    category: "Redes",
  },
  {
    term: "NAT",
    definition:
      "Network Address Translation. Técnica que permite que múltiples dispositivos de una red privada compartan una única dirección IP pública para acceder a internet.",
    category: "Redes",
  },
  {
    term: "VLAN",
    definition:
      "Virtual Local Area Network. Segmentación lógica de una red física en múltiples redes virtuales independientes. Permite aislar tráfico sin necesidad de hardware separado.",
    category: "Redes",
  },
  {
    term: "VPN",
    definition:
      "Virtual Private Network. Tecnología que crea un túnel cifrado sobre internet para conectar de forma segura redes o usuarios remotos. OPNsense y MikroTik soportan OpenVPN y WireGuard.",
    category: "Seguridad",
  },
  {
    term: "IDS/IPS",
    definition:
      "Intrusion Detection/Prevention System. Sistema que monitoriza el tráfico de red en busca de actividad maliciosa (IDS) y puede bloquearla automáticamente (IPS). OPNsense incluye Suricata.",
    category: "Seguridad",
  },
  {
    term: "LAMP",
    definition:
      "Acrónimo de Linux + Apache + MySQL/MariaDB + PHP. Stack tecnológico clásico para servidores web. XAMPP implementa este stack en Windows/Linux/macOS para desarrollo local.",
    category: "Web",
  },
  {
    term: "CMS",
    definition:
      "Content Management System. Sistema de gestión de contenidos que permite crear y administrar sitios web sin conocimientos de programación avanzados. WordPress es el CMS más popular.",
    category: "Web",
  },
  {
    term: "BSD",
    definition:
      "Berkeley Software Distribution. Familia de sistemas operativos Unix derivados del trabajo de la Universidad de California en Berkeley. FreeBSD, TrueNAS y OPNsense son ejemplos.",
    category: "Sistemas",
  },
  {
    term: "RAIDZ",
    definition:
      "Implementación de RAID en ZFS. RAIDZ1 tolera el fallo de 1 disco (mínimo 3 discos), RAIDZ2 tolera 2 fallos (mínimo 4 discos), RAIDZ3 tolera 3 fallos (mínimo 5 discos).",
    category: "Almacenamiento",
  },
  {
    term: "BGP",
    definition:
      "Border Gateway Protocol. Protocolo de enrutamiento dinámico usado en internet para intercambiar información de rutas entre sistemas autónomos. MikroTik RouterOS lo soporta completamente.",
    category: "Redes",
  },
  {
    term: "SMB/CIFS",
    definition:
      "Server Message Block. Protocolo de red para compartir ficheros, impresoras y otros recursos. Es el protocolo nativo de Windows para compartir ficheros. TrueNAS lo implementa mediante Samba.",
    category: "Redes",
  },
];

const categories = Array.from(new Set(terms.map((t) => t.category)));

export default function GlossaryPage() {
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
            <span style={{ color: "#ff9800" }}>&gt;</span> Glosario técnico
          </h1>
          <p
            className="text-sm"
            style={{
              fontFamily: "Verdana, Geneva, sans-serif",
              color: "#424242",
            }}
          >
            Términos clave del módulo de Montaje y Mantenimiento de Equipos Informáticos.
          </p>
        </div>

        {categories.map((cat) => (
          <div key={cat} className="mb-8">
            <h2
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{
                fontFamily: "Verdana, Geneva, sans-serif",
                color: "#3f51b5",
              }}
            >
              # {cat}
            </h2>
            <div className="space-y-3">
              {terms
                .filter((t) => t.category === cat)
                .map((term) => (
                  <div
                    key={term.term}
                    className="p-4 rounded-lg"
                    style={{
                      background: "#f5f5f5",
                      border: "1px solid oklch(0.24 0.01 240)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="text-sm font-bold font-mono flex-shrink-0 w-36"
                        style={{ color: "#212121" }}
                      >
                        {term.term}
                      </span>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          fontFamily: "Verdana, Geneva, sans-serif",
                          color: "#424242",
                        }}
                      >
                        {term.definition}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
