// ============================================================
// DATOS EDUCATIVOS — Sistemas alternativos para PC
// Módulo: Montaje y Mantenimiento de Equipos Informáticos
// Nivel: 1º CFGM Sistemas Microinformáticos y Redes
// ============================================================

export interface HardwareReq {
  cpu: string;
  ram: string;
  storage: string;
  network: string;
  extra?: string;
}

export interface Step {
  title: string;
  description: string;
  command?: string;
}

export interface GettingStarted {
  quickStart: string[];
  firstTasks: { title: string; description: string; time: string }[];
  commonMistakes: { mistake: string; solution: string }[];
}

export interface System {
  id: string;
  name: string;
  subtitle: string;
  category: "os" | "virtualization" | "nas" | "router" | "switch" | "web" | "devserver";
  categoryLabel: string;
  difficulty: "facil" | "medio" | "avanzado";
  difficultyLabel: string;
  color: string;          // hex accent color
  accentClass: string;    // tailwind class
  description: string;
  longDescription: string;
  useCases: string[];
  hardware: HardwareReq;
  steps: Step[];
  pros: string[];
  cons: string[];
  officialUrl: string;
  logoEmoji: string;
  tags: string[];
  gettingStarted: GettingStarted;
}

export const systems: System[] = [
  {
    id: "freebsd",
    name: "FreeBSD",
    subtitle: "Sistema Operativo Unix de propósito general",
    category: "os",
    categoryLabel: "Sistema Operativo",
    difficulty: "avanzado",
    difficultyLabel: "Avanzado",
    color: "#ab2020",
    accentClass: "text-red-400",
    description:
      "FreeBSD es un sistema operativo de código abierto derivado directamente de Unix BSD. Destaca por su estabilidad, rendimiento en redes y el sistema de ficheros ZFS. Es la base sobre la que se construyen TrueNAS y partes de macOS.",
    longDescription:
      "FreeBSD no es una distribución de Linux, sino un sistema operativo completo (kernel + userland) derivado del Unix de Berkeley (BSD). Su arquitectura monolítica, el sistema de puertos para gestión de software y el sistema de ficheros ZFS lo convierten en una opción robusta para servidores de producción, firewalls y sistemas de almacenamiento. Empresas como Netflix lo usan para servir contenido a millones de usuarios.",
    useCases: [
      "Servidor de ficheros con ZFS",
      "Servidor web de alto rendimiento",
      "Firewall y gateway de red",
      "Plataforma de desarrollo Unix",
      "Base para sistemas embebidos",
    ],
    hardware: {
      cpu: "x86-64 (Intel/AMD) o ARM64",
      ram: "Mínimo 512 MB; recomendado 2 GB+",
      storage: "Mínimo 8 GB; recomendado 20 GB+",
      network: "1 NIC mínimo",
      extra: "Soporte VT-x/AMD-V para virtualización",
    },
    steps: [
      {
        title: "Descargar la imagen ISO",
        description:
          "Accede a freebsd.org y descarga la imagen de instalación para arquitectura amd64 (FreeBSD-14.x-RELEASE-amd64-dvd1.iso).",
      },
      {
        title: "Crear medio de instalación",
        description:
          "Graba la ISO en un USB con Rufus (Windows) o dd (Linux/macOS). Arranca desde el USB en el PC de destino.",
        command: "dd if=FreeBSD-14.x-amd64-dvd1.iso of=/dev/sdX bs=4M status=progress",
      },
      {
        title: "Instalar con bsdinstall",
        description:
          "El instalador bsdinstall guía el proceso: particionado, configuración de red, zona horaria y usuario root.",
      },
      {
        title: "Actualizar el sistema",
        description: "Tras el primer arranque, actualiza el sistema base y el árbol de puertos.",
        command: "freebsd-update fetch install && pkg update && pkg upgrade",
      },
      {
        title: "Instalar software adicional",
        description:
          "Usa el gestor de paquetes pkg o compila desde los Ports para instalar aplicaciones.",
        command: "pkg install nginx mariadb106-server php83",
      },
    ],
    pros: [
      "Estabilidad excepcional en producción",
      "ZFS integrado de serie",
      "Excelente documentación (Handbook oficial)",
      "Licencia BSD muy permisiva",
      "Rendimiento de red sobresaliente",
    ],
    cons: [
      "Menor soporte de hardware que Linux",
      "Curva de aprendizaje pronunciada",
      "Ecosistema de software más reducido",
      "Menos drivers para hardware de consumo",
    ],
    officialUrl: "https://www.freebsd.org",
    logoEmoji: "😈",
    tags: ["Unix", "BSD", "ZFS", "Servidor", "Open Source"],
    gettingStarted: {
      quickStart: [
        "Arranca desde el USB de instalación",
        "Selecciona 'Install' en el menú de bsdinstall",
        "Particiona el disco (recomendado: UFS2 o ZFS)",
        "Configura la red (DHCP o IP estática)",
        "Crea usuario root y usuario normal",
        "Reinicia y accede con tu usuario",
      ],
      firstTasks: [
        {
          title: "Actualizar el sistema",
          description: "Ejecuta 'freebsd-update fetch install' para aplicar parches de seguridad",
          time: "5-10 min",
        },
        {
          title: "Instalar un editor de texto",
          description: "Instala nano o vim: 'pkg install nano' para editar ficheros de configuración",
          time: "2 min",
        },
        {
          title: "Explorar el sistema de ficheros",
          description: "Navega por /usr/local, /etc, /var para entender la estructura de directorios BSD",
          time: "10 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "Instalar en los mismos discos que otros SOs sin particionar bien",
          solution: "Usa fdisk o gpart para crear particiones separadas. Siempre haz backup primero.",
        },
        {
          mistake: "Olvidar instalar 'sudo' y no poder ejecutar comandos con privilegios",
          solution: "Instala sudo: 'pkg install sudo' y añade tu usuario al grupo wheel",
        },
        {
          mistake: "No activar SSH en la instalación y quedarse sin acceso remoto",
          solution: "Edita /etc/rc.conf y añade 'sshd_enable=YES', luego 'service sshd start'",
        },
      ],
    },
  },
  {
    id: "proxmox",
    name: "Proxmox VE",
    subtitle: "Plataforma de virtualización empresarial",
    category: "virtualization",
    categoryLabel: "Hipervisor",
    difficulty: "medio",
    difficultyLabel: "Intermedio",
    color: "#e57000",
    accentClass: "text-orange-400",
    description:
      "Proxmox Virtual Environment (VE) es una plataforma de virtualización de código abierto basada en Debian que integra KVM para máquinas virtuales y LXC para contenedores, gestionables desde una interfaz web.",
    longDescription:
      "Proxmox VE convierte cualquier PC compatible en un hipervisor de tipo 1 (bare-metal). Permite crear y gestionar máquinas virtuales completas (KVM) y contenedores ligeros (LXC) desde un panel web intuitivo. Incluye funciones de alta disponibilidad, backup, clustering y almacenamiento distribuido (Ceph). Es la solución ideal para laboratorios de prácticas y entornos de desarrollo.",
    useCases: [
      "Laboratorio virtual de prácticas",
      "Servidor de máquinas virtuales para clase",
      "Entorno de pruebas de sistemas operativos",
      "Consolidación de servidores",
      "Plataforma de contenedores LXC",
    ],
    hardware: {
      cpu: "x86-64 con Intel VT-x o AMD-V habilitado en BIOS",
      ram: "Mínimo 2 GB; recomendado 8 GB+ (más RAM = más VMs)",
      storage: "Mínimo 32 GB SSD para el sistema; HDD/SSD adicional para VMs",
      network: "1 NIC mínimo; 2 NICs recomendado",
      extra: "IOMMU habilitado en BIOS para passthrough de hardware",
    },
    steps: [
      {
        title: "Descargar Proxmox VE ISO",
        description:
          "Descarga la ISO desde proxmox.com/downloads. Actualmente Proxmox VE 8.x basado en Debian 12.",
      },
      {
        title: "Grabar y arrancar desde USB",
        description:
          "Usa Rufus o Balena Etcher para grabar la ISO. Arranca el PC desde el USB y selecciona 'Install Proxmox VE'.",
      },
      {
        title: "Configurar la instalación",
        description:
          "Selecciona disco de destino, zona horaria, contraseña de root y configuración de red (IP estática recomendada).",
      },
      {
        title: "Acceder al panel web",
        description:
          "Tras reiniciar, accede desde otro PC al panel web en https://IP-del-servidor:8006 con usuario root.",
      },
      {
        title: "Crear primera VM",
        description:
          "Sube una ISO al almacenamiento local, crea una nueva VM asignando CPU, RAM y disco, e instala el SO.",
      },
    ],
    pros: [
      "Interfaz web muy completa e intuitiva",
      "KVM + LXC en una sola plataforma",
      "Backups y snapshots integrados",
      "Comunidad activa y documentación excelente",
      "Gratuito (con suscripción opcional para soporte)",
    ],
    cons: [
      "Requiere hardware con virtualización habilitada",
      "Consume recursos del host para el hipervisor",
      "Curva de aprendizaje para funciones avanzadas",
      "Actualizaciones de repositorio de empresa requieren suscripción",
    ],
    officialUrl: "https://www.proxmox.com",
    logoEmoji: "🖥️",
    tags: ["KVM", "LXC", "Virtualización", "Debian", "Hipervisor"],
    gettingStarted: {
      quickStart: [
        "Instala Proxmox VE desde ISO en el PC",
        "Accede a https://IP:8006 desde otro PC (usuario: root)",
        "Crea una máquina virtual: Datacenter > Create VM",
        "Carga una ISO (Debian, Ubuntu, etc.) en el almacenamiento",
        "Arranca la VM y completa la instalación del SO invitado",
        "Configura red y acceso remoto en la VM",
      ],
      firstTasks: [
        {
          title: "Crear tu primera máquina virtual",
          description: "Crea una VM pequeña con Debian para practicar. Asigna 2 GB RAM y 20 GB disco.",
          time: "15 min",
        },
        {
          title: "Hacer un snapshot",
          description: "Crea un punto de restauración: VM > Snapshots > Create. Útil para experimentar sin riesgo.",
          time: "5 min",
        },
        {
          title: "Crear un contenedor LXC",
          description: "Prueba un contenedor (más ligero que VM): Datacenter > Create CT. Elige una imagen de Ubuntu.",
          time: "10 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "No habilitar VT-x/AMD-V en BIOS y que la virtualización no funcione",
          solution: "Reinicia el PC, entra en BIOS (Del/F2/F12) y busca 'Virtualization' o 'VT-x'. Habilítalo.",
        },
        {
          mistake: "Asignar demasiada RAM a VMs y que el host se quede sin memoria",
          solution: "Monitoriza el uso en Proxmox > Nodes. Deja siempre 2-4 GB para el host.",
        },
        {
          mistake: "Perder acceso web porque olvidó la contraseña de root",
          solution: "Accede por consola física o SSH con root y ejecuta 'passwd' para cambiarla.",
        },
      ],
    },
  },
  {
    id: "truenas",
    name: "TrueNAS CORE",
    subtitle: "Sistema NAS de almacenamiento en red",
    category: "nas",
    categoryLabel: "NAS / Almacenamiento",
    difficulty: "medio",
    difficultyLabel: "Intermedio",
    color: "#0095d5",
    accentClass: "text-blue-400",
    description:
      "TrueNAS CORE (antes FreeNAS) es un sistema operativo basado en FreeBSD especializado en almacenamiento en red (NAS). Usa ZFS para protección de datos y ofrece SMB, NFS, iSCSI y más protocolos de red.",
    longDescription:
      "TrueNAS CORE transforma cualquier PC con discos duros en un servidor NAS profesional. Basado en FreeBSD y el sistema de ficheros ZFS, ofrece protección contra corrupción de datos, snapshots automáticos, replicación y RAID por software. Su interfaz web permite gestionar usuarios, permisos, cuotas y servicios de red como Samba (SMB) para compartir ficheros con Windows, NFS para Linux/Mac, y FTP.",
    useCases: [
      "Servidor de ficheros para red local",
      "Backup centralizado de equipos",
      "Almacenamiento para máquinas virtuales (iSCSI/NFS)",
      "Servidor multimedia doméstico (Plex, Jellyfin, Kodi)",
      "Archivo de datos con protección ZFS",
      "Servidor Plex con biblioteca multimedia centralizada",
    ],
    hardware: {
      cpu: "x86-64 moderno (64-bit obligatorio)",
      ram: "Mínimo 8 GB ECC recomendado; 4 GB funcional para pruebas",
      storage: "SSD/USB de 16 GB para el SO (separado de los datos); HDDs para almacenamiento",
      network: "1 NIC Gigabit mínimo",
      extra: "ECC RAM muy recomendada para ZFS en producción",
    },
    steps: [
      {
        title: "Descargar TrueNAS CORE",
        description:
          "Descarga la ISO desde truenas.com. TrueNAS CORE es la versión gratuita basada en FreeBSD.",
      },
      {
        title: "Instalar en USB o SSD dedicado",
        description:
          "TrueNAS se instala en un dispositivo separado de los discos de datos. Usa un USB de 16 GB o SSD pequeño.",
      },
      {
        title: "Configurar pools ZFS",
        description:
          "Desde la interfaz web, crea pools ZFS con los discos de datos. Elige RAIDZ1 (mínimo 3 discos) para redundancia.",
      },
      {
        title: "Configurar servicios de red",
        description:
          "Activa SMB para compartir con Windows, NFS para Linux. Crea datasets y configura permisos de usuario.",
      },
      {
        title: "Configurar tareas programadas",
        description:
          "Programa snapshots automáticos, scrubs de ZFS y tareas de replicación para proteger los datos.",
      },
      {
        title: "Instalar y configurar Plex (opcional)",
        description:
          "En TrueNAS SCALE, instala Plex desde Apps. Crea una carpeta para películas/series, configura la biblioteca y accede desde https://IP:32400/web en la red local.",
      },
    ],
    pros: [
      "ZFS ofrece protección de datos superior",
      "Interfaz web muy completa",
      "Aplicaciones integradas (Plex, Jellyfin, etc.) en SCALE",
      "Snapshots y replicación integrados",
      "Completamente gratuito",
      "Ideal para servidor multimedia con Plex",
    ],
    cons: [
      "Requiere bastante RAM (ZFS es intensivo en memoria)",
      "ECC RAM recomendada pero cara",
      "No instalar en los mismos discos que los datos",
      "Actualizaciones pueden ser complejas",
      "Plex requiere CPU potente para transcodificación",
    ],
    officialUrl: "https://www.truenas.com",
    logoEmoji: "💾",
    tags: ["NAS", "ZFS", "FreeBSD", "SMB", "Almacenamiento", "Plex"],
    gettingStarted: {
      quickStart: [
        "Instala TrueNAS CORE en USB/SSD separado de los datos",
        "Accede a http://IP desde otro PC (usuario: admin, contraseña: admin)",
        "Conecta los discos de datos al PC (mínimo 3 para RAIDZ1)",
        "Crea un pool ZFS: Storage > Create Pool",
        "Crea datasets para compartir: Storage > Datasets > Create Dataset",
        "Activa SMB: Services > SMB > Enable",
        "Crea usuarios y permisos: Accounts > Users",
      ],
      firstTasks: [
        {
          title: "Crear tu primer pool ZFS",
          description: "Crea un pool RAIDZ1 con 3 discos. Esto te protege contra fallo de 1 disco.",
          time: "10 min",
        },
        {
          title: "Compartir una carpeta por SMB",
          description: "Crea un dataset, luego un share SMB. Accede desde un PC Windows escribiendo \\\\IP\\nombre",
          time: "10 min",
        },
        {
          title: "Programar un snapshot automático",
          description: "Ve a Tasks > Periodic Snapshots. Programa snapshots diarios para protección contra borrados accidentales.",
          time: "5 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "Instalar TrueNAS en los mismos discos que los datos",
          solution: "Usa un USB o SSD separado SOLO para TrueNAS. Los otros discos son SOLO para datos.",
        },
        {
          mistake: "No tener suficiente RAM y que ZFS sea lentamente",
          solution: "Mínimo 8 GB RAM, mejor 16 GB. ZFS cachea datos en RAM para rendimiento.",
        },
        {
          mistake: "Olvidar cambiar la contraseña de admin por defecto",
          solution: "Primero que nada: Accounts > Users > admin > Edit > cambiar contraseña.",
        },
      ],
    },
  },
  {
    id: "opnsense",
    name: "OPNsense",
    subtitle: "Firewall y router de código abierto",
    category: "router",
    categoryLabel: "Router / Firewall",
    difficulty: "avanzado",
    difficultyLabel: "Avanzado",
    color: "#d94f00",
    accentClass: "text-orange-500",
    description:
      "OPNsense es un firewall/router de código abierto basado en FreeBSD (HardenedBSD). Ofrece filtrado de paquetes, VPN, IDS/IPS, proxy, y gestión de ancho de banda desde una interfaz web moderna.",
    longDescription:
      "OPNsense convierte un PC con dos o más tarjetas de red en un router/firewall profesional. Es un fork de pfSense con mejor interfaz y actualizaciones más frecuentes. Incluye Suricata (IDS/IPS), Unbound DNS, HAProxy, OpenVPN, WireGuard, y un sistema de plugins extensible. Se usa tanto en hogares avanzados como en empresas pequeñas y medianas.",
    useCases: [
      "Gateway de internet para red doméstica o empresarial",
      "Firewall con reglas avanzadas",
      "VPN corporativa (OpenVPN/WireGuard)",
      "Sistema de detección de intrusiones (IDS/IPS)",
      "Proxy transparente con filtrado de contenido",
    ],
    hardware: {
      cpu: "Dual-core 1 GHz mínimo; quad-core recomendado para IDS",
      ram: "Mínimo 2 GB; recomendado 4-8 GB para IDS/IPS",
      storage: "Mínimo 8 GB SSD; recomendado 16-32 GB",
      network: "Mínimo 2 NICs (WAN + LAN); Intel NICs muy recomendadas",
      extra: "AES-NI en CPU para VPN acelerada por hardware",
    },
    steps: [
      {
        title: "Preparar el hardware",
        description:
          "Necesitas un PC con al menos 2 NICs. Una será WAN (conectada al módem/ISP) y otra LAN (red interna).",
      },
      {
        title: "Descargar e instalar OPNsense",
        description:
          "Descarga la imagen desde opnsense.org. Instala en SSD o USB. El instalador es texto-basado y sencillo.",
      },
      {
        title: "Asignar interfaces WAN/LAN",
        description:
          "En el primer arranque, asigna qué NIC es WAN y cuál es LAN. Configura IP estática en LAN (ej: 192.168.1.1).",
      },
      {
        title: "Acceder al panel web",
        description:
          "Conecta un PC a la interfaz LAN y accede a https://192.168.1.1 con usuario admin / contraseña opnsense.",
      },
      {
        title: "Configurar reglas de firewall",
        description:
          "Crea reglas en Firewall > Rules para permitir/denegar tráfico. Activa NAT para que la LAN acceda a internet.",
      },
    ],
    pros: [
      "Actualizaciones semanales de seguridad",
      "Interfaz web moderna y bien organizada",
      "IDS/IPS Suricata integrado",
      "Amplio ecosistema de plugins",
      "Basado en HardenedBSD (más seguro)",
    ],
    cons: [
      "Requiere hardware con 2+ NICs",
      "Configuración inicial compleja",
      "Curva de aprendizaje en conceptos de red",
      "Algunas funciones avanzadas requieren plugins de pago",
    ],
    officialUrl: "https://opnsense.org",
    logoEmoji: "🔐",
    tags: ["Firewall", "Router", "VPN", "FreeBSD", "IDS/IPS"],
    gettingStarted: {
      quickStart: [
        "Instala OPNsense en un PC con 2+ NICs",
        "Asigna NIC1 a WAN (conecta al módem) y NIC2 a LAN",
        "Accede a https://192.168.1.1 desde un PC en la LAN",
        "Usuario: admin, contraseña: opnsense (cámbiala inmediatamente)",
        "Configura DHCP en LAN: Services > DHCP > LAN",
        "Habilita NAT: Firewall > NAT > Outbound",
        "Crea reglas de firewall básicas",
      ],
      firstTasks: [
        {
          title: "Cambiar contraseña de admin",
          description: "System > Access > Users > admin. Cambia la contraseña por defecto inmediatamente por seguridad.",
          time: "2 min",
        },
        {
          title: "Configurar DHCP en LAN",
          description: "Services > DHCP > LAN. Habilita y configura rango (ej: 192.168.1.100-200). Esto permite que PCs se conecten automáticamente.",
          time: "5 min",
        },
        {
          title: "Crear una regla de firewall",
          description: "Firewall > Rules > LAN. Crea una regla que permita todo tráfico desde LAN a WAN (NAT). Esto es lo básico.",
          time: "10 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "No asignar correctamente WAN y LAN en el primer arranque",
          solution: "Si te equivocas, accede por consola (conecta teclado/monitor) y ejecuta 'opnsense-shell' para reasignar interfaces.",
        },
        {
          mistake: "Bloquear todo tráfico accidentalmente sin crear reglas NAT",
          solution: "Siempre crea una regla de salida (Outbound NAT) que permita LAN > WAN. Si no, no hay internet.",
        },
        {
          mistake: "Olvidar que OPNsense es un firewall, no un router WiFi",
          solution: "Conecta un router WiFi a la interfaz LAN de OPNsense. OPNsense solo maneja cables/Ethernet.",
        },
      ],
    },
  },
  {
    id: "mikrotik",
    name: "MikroTik RouterOS",
    subtitle: "Sistema operativo para router y switch",
    category: "switch",
    categoryLabel: "Router / Switch",
    difficulty: "avanzado",
    difficultyLabel: "Avanzado",
    color: "#419641",
    accentClass: "text-green-400",
    description:
      "RouterOS de MikroTik es un sistema operativo basado en Linux que puede instalarse en un PC x86 para convertirlo en un router/switch de nivel profesional con soporte para BGP, OSPF, MPLS, VLANs y más.",
    longDescription:
      "RouterOS es el sistema operativo que equipa los dispositivos MikroTik, pero también puede instalarse en hardware x86 estándar. Ofrece capacidades de enrutamiento avanzado (BGP, OSPF, RIP), switching (VLANs 802.1Q), gestión de ancho de banda (QoS), VPN (L2TP, PPTP, OpenVPN, WireGuard) y un potente firewall. Se gestiona mediante Winbox (aplicación Windows), WebFig (web) o CLI (SSH/Telnet).",
    useCases: [
      "Router de borde con enrutamiento dinámico",
      "Switch gestionable con VLANs",
      "Controlador de ancho de banda (QoS)",
      "VPN concentrator empresarial",
      "Hotspot WiFi con portal cautivo",
    ],
    hardware: {
      cpu: "x86 o x86-64 (cualquier PC moderno)",
      ram: "Mínimo 64 MB; recomendado 512 MB+",
      storage: "Mínimo 64 MB (puede instalarse en USB/CF/SSD)",
      network: "Mínimo 2 NICs para router; 1 NIC para switch virtual",
      extra: "NICs Intel o Realtek bien soportadas",
    },
    steps: [
      {
        title: "Obtener licencia RouterOS x86",
        description:
          "RouterOS para PC requiere licencia. Puedes usar el nivel CHR (Cloud Hosted Router) gratuito con límite de 1 Mbps, o comprar una licencia Level 4-6.",
      },
      {
        title: "Descargar la imagen de instalación",
        description:
          "Descarga el instalador x86 desde mikrotik.com/download. Grábalo en USB con Rufus.",
      },
      {
        title: "Instalar RouterOS",
        description:
          "Arranca desde el USB. El instalador es muy simple: selecciona los paquetes y el disco de destino.",
      },
      {
        title: "Conectar con Winbox",
        description:
          "Descarga Winbox desde mikrotik.com. Conecta un PC a la primera NIC y busca el dispositivo por MAC address.",
      },
      {
        title: "Configurar interfaces y rutas",
        description:
          "Asigna IPs a las interfaces, configura el gateway por defecto, activa NAT masquerade para acceso a internet.",
        command: "/ip address add address=192.168.1.1/24 interface=ether1\n/ip route add gateway=X.X.X.X",
      },
    ],
    pros: [
      "Funcionalidades de nivel empresarial",
      "Muy eficiente en hardware modesto",
      "Winbox: herramienta de gestión potente",
      "Soporte BGP, OSPF, MPLS completo",
      "Gran comunidad y documentación (wiki.mikrotik.com)",
    ],
    cons: [
      "Licencia de pago para uso completo en x86",
      "Interfaz poco intuitiva al principio",
      "Terminología propia diferente a Cisco/Juniper",
      "Curva de aprendizaje pronunciada",
    ],
    officialUrl: "https://mikrotik.com/software",
    logoEmoji: "🌐",
    tags: ["Router", "Switch", "BGP", "OSPF", "VLANs", "QoS"],
    gettingStarted: {
      quickStart: [
        "Descarga RouterOS x86 desde mikrotik.com",
        "Instala en el PC (modo texto, muy rápido)",
        "Descarga Winbox (gestor gráfico) en otro PC",
        "Conecta por Winbox a la IP del router (usuario: admin, sin contraseña)",
        "Cambia la contraseña inmediatamente",
        "Configura interfaces de red (WAN/LAN)",
        "Habilita DHCP en LAN",
      ],
      firstTasks: [
        {
          title: "Conectar por Winbox",
          description: "Descarga Winbox desde mikrotik.com. Abre el .exe, introduce la IP del router y conecta. Es más fácil que la web.",
          time: "5 min",
        },
        {
          title: "Configurar IP Address",
          description: "Winbox > IP > Addresses. Añade direcciones IP a las interfaces (ej: 192.168.1.1/24 en ether2 para LAN).",
          time: "5 min",
        },
        {
          title: "Habilitar DHCP Server",
          description: "Winbox > IP > DHCP Server. Crea un servidor DHCP en la interfaz LAN para que los PCs obtengan IP automáticamente.",
          time: "10 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "Instalar RouterOS en un PC sin dejar espacio para el SO host",
          solution: "RouterOS es el SO completo. No instales nada más. Si quieres dual-boot, particiona bien el disco.",
        },
        {
          mistake: "No cambiar la contraseña de admin (viene sin contraseña)",
          solution: "Primero que nada en Winbox: System > Users > admin > Set Password. Usa una contraseña fuerte.",
        },
        {
          mistake: "Confundir interfaces de red (ether1, ether2, etc.) y no saber cuál es WAN/LAN",
          solution: "Etiqueta los cables. Usa Winbox > Interfaces para ver qué interfaz está conectada a dónde.",
        },
      ],
    },
  },
  {
    id: "wordpress",
    name: "WordPress",
    subtitle: "CMS para servidor web propio",
    category: "web",
    categoryLabel: "Servidor Web / CMS",
    difficulty: "facil",
    difficultyLabel: "Fácil",
    color: "#21759b",
    accentClass: "text-sky-400",
    description:
      "WordPress es el CMS más popular del mundo. Instalado en un servidor web propio (Apache/Nginx + PHP + MySQL), permite crear desde blogs hasta tiendas online, convirtiendo tu PC en un servidor web completo.",
    longDescription:
      "WordPress alimenta más del 43% de todos los sitios web de internet. Instalarlo en tu propio PC (usando XAMPP, un servidor Debian/Ubuntu, o directamente en FreeBSD) te da control total sobre el servidor. Aprenderás conceptos de servidor web (Apache/Nginx), bases de datos (MySQL/MariaDB), PHP, gestión de DNS y seguridad web. Es el punto de entrada ideal para entender la arquitectura LAMP/LEMP.",
    useCases: [
      "Blog personal o corporativo",
      "Tienda online con WooCommerce",
      "Portal educativo del centro",
      "Portfolio profesional",
      "Práctica de administración web",
    ],
    hardware: {
      cpu: "Cualquier CPU moderna (incluso Raspberry Pi)",
      ram: "Mínimo 512 MB; recomendado 1-2 GB",
      storage: "Mínimo 1 GB libre para WordPress + base de datos",
      network: "1 NIC; IP estática recomendada para servidor",
      extra: "PHP 8.0+ y MySQL 5.7+ o MariaDB 10.4+",
    },
    steps: [
      {
        title: "Instalar el stack LAMP",
        description:
          "En Debian/Ubuntu: instala Apache2, PHP y MariaDB. En Windows usa XAMPP (ver sección XAMPP).",
        command: "apt install apache2 php php-mysql mariadb-server -y",
      },
      {
        title: "Crear base de datos para WordPress",
        description: "Accede a MySQL y crea una base de datos y usuario dedicados para WordPress.",
        command:
          "CREATE DATABASE wordpress;\nCREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'contraseña';\nGRANT ALL PRIVILEGES ON wordpress.* TO 'wpuser'@'localhost';",
      },
      {
        title: "Descargar y extraer WordPress",
        description: "Descarga WordPress desde wordpress.org y extrae en el directorio web.",
        command:
          "cd /var/www/html\nwget https://wordpress.org/latest.tar.gz\ntar -xzf latest.tar.gz",
      },
      {
        title: "Configurar wp-config.php",
        description:
          "Copia wp-config-sample.php a wp-config.php y edita los datos de la base de datos.",
        command: "cp wp-config-sample.php wp-config.php\nnano wp-config.php",
      },
      {
        title: "Completar instalación web",
        description:
          "Accede a http://localhost/wordpress en el navegador y sigue el asistente de instalación de WordPress.",
      },
    ],
    pros: [
      "Instalación muy sencilla (5 minutos)",
      "Enorme ecosistema de temas y plugins",
      "Documentación abundante en español",
      "Aprende arquitectura web real (LAMP)",
      "Completamente gratuito",
    ],
    cons: [
      "Requiere mantenimiento de seguridad constante",
      "Puede ser lento sin optimización",
      "Muchos plugins de baja calidad disponibles",
      "Necesita conocimientos básicos de servidor",
    ],
    officialUrl: "https://wordpress.org",
    logoEmoji: "📝",
    tags: ["CMS", "PHP", "MySQL", "Apache", "Web"],
    gettingStarted: {
      quickStart: [
        "Instala un servidor web (Apache/Nginx + PHP + MySQL/MariaDB)",
        "Descarga WordPress desde wordpress.org",
        "Descomprime en /var/www/html (Linux) o C:\\xampp\\htdocs (Windows con XAMPP)",
        "Crea una base de datos MySQL: 'CREATE DATABASE wordpress;'",
        "Accede a http://localhost/wordpress en tu navegador",
        "Sigue el asistente de instalación de WordPress",
        "Inicia sesión en el panel de administración",
      ],
      firstTasks: [
        {
          title: "Instalar WordPress localmente con XAMPP",
          description: "Descarga XAMPP, instala, inicia Apache + MySQL. Descarga WordPress, descomprímelo en htdocs y accede a http://localhost/wordpress. Es lo más rápido.",
          time: "15 min",
        },
        {
          title: "Crear tu primer post",
          description: "En el panel de WordPress, ve a Posts > Añadir nuevo. Escribe un título, contenido y publica. Verás cómo aparece en la web.",
          time: "5 min",
        },
        {
          title: "Cambiar el tema",
          description: "Appearance > Themes. Elige un tema gratuito y activálo. Verás cómo cambia el diseño del sitio sin tocar código.",
          time: "5 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "No crear la base de datos antes de instalar WordPress",
          solution: "Crea la BD en phpMyAdmin o por línea de comandos ANTES de ejecutar el instalador de WordPress.",
        },
        {
          mistake: "Olvidar cambiar los permisos de carpetas (chmod) en Linux",
          solution: "Ejecuta: chmod -R 755 /var/www/html/wordpress y chown -R www-data:www-data /var/www/html/wordpress",
        },
        {
          mistake: "Usar la contraseña de admin por defecto",
          solution: "En la instalación, crea una contraseña fuerte. Después puedes cambiarla en Users > Tu usuario.",
        },
      ],
    },
  },
  {
    id: "xampp",
    name: "XAMPP",
    subtitle: "Servidor de desarrollo local multiplataforma",
    category: "devserver",
    categoryLabel: "Servidor de Desarrollo",
    difficulty: "facil",
    difficultyLabel: "Fácil",
    color: "#fb7a24",
    accentClass: "text-amber-400",
    description:
      "XAMPP es un paquete que instala Apache, MariaDB, PHP y Perl en Windows, Linux o macOS con un solo instalador. Convierte tu PC en un servidor web local de desarrollo en minutos, sin configuración compleja.",
    longDescription:
      "XAMPP (X=multiplataforma, A=Apache, M=MariaDB, P=PHP, P=Perl) es la forma más rápida de tener un entorno de desarrollo web completo en tu PC. Incluye phpMyAdmin para gestionar bases de datos visualmente, el servidor Apache, PHP con todas las extensiones comunes, y MariaDB. Es perfecto para desarrollar y probar aplicaciones web (WordPress, Joomla, Drupal, aplicaciones PHP propias) antes de subirlas a producción.",
    useCases: [
      "Desarrollo y prueba de aplicaciones PHP",
      "Instalación local de WordPress para desarrollo",
      "Prácticas de SQL con phpMyAdmin",
      "Servidor web de pruebas en clase",
      "Aprendizaje de tecnologías web LAMP",
    ],
    hardware: {
      cpu: "Cualquier CPU x86-64 moderna",
      ram: "Mínimo 512 MB; recomendado 1 GB+",
      storage: "200 MB para XAMPP + espacio para proyectos",
      network: "No requiere NIC adicional (localhost)",
      extra: "Compatible con Windows 10/11, Linux, macOS",
    },
    steps: [
      {
        title: "Descargar XAMPP",
        description:
          "Descarga el instalador desde apachefriends.org. Elige la versión con PHP 8.x para Windows, Linux o macOS.",
      },
      {
        title: "Instalar XAMPP",
        description:
          "Ejecuta el instalador (como administrador en Windows). Selecciona componentes: Apache, MySQL, PHP, phpMyAdmin.",
      },
      {
        title: "Iniciar servicios",
        description:
          "Abre el Panel de Control de XAMPP y pulsa 'Start' en Apache y MySQL. Los indicadores se pondrán en verde.",
      },
      {
        title: "Verificar funcionamiento",
        description:
          "Abre el navegador y accede a http://localhost. Deberías ver la página de bienvenida de XAMPP.",
      },
      {
        title: "Crear tu primer proyecto",
        description:
          "Coloca tus archivos PHP en C:\\xampp\\htdocs\\ (Windows) o /opt/lampp/htdocs/ (Linux). Accede en http://localhost/tu-proyecto",
        command: "<!-- Ejemplo PHP: /htdocs/hola/index.php -->\n<?php echo 'Hola, Mundo!'; ?>",
      },
    ],
    pros: [
      "Instalación en minutos, sin configuración",
      "Panel de control visual e intuitivo",
      "phpMyAdmin incluido para gestionar BD",
      "Multiplataforma (Windows, Linux, macOS)",
      "Completamente gratuito",
    ],
    cons: [
      "No apto para producción (solo desarrollo)",
      "Configuración de seguridad básica por defecto",
      "Puede haber conflictos de puertos con otros servicios",
      "Actualizaciones manuales de componentes",
    ],
    officialUrl: "https://www.apachefriends.org",
    logoEmoji: "⚙️",
    tags: ["Apache", "PHP", "MariaDB", "Desarrollo", "LAMP"],
    gettingStarted: {
      quickStart: [
        "Descarga XAMPP desde apachefriends.org (Windows, Linux o macOS)",
        "Instala XAMPP (ruta por defecto es OK)",
        "Abre el XAMPP Control Panel",
        "Haz clic en 'Start' para Apache y MySQL",
        "Accede a http://localhost en tu navegador",
        "Verás la página de bienvenida de XAMPP",
        "Crea tu primer archivo PHP en htdocs",
      ],
      firstTasks: [
        {
          title: "Iniciar XAMPP y verificar que funciona",
          description: "Abre XAMPP Control Panel. Inicia Apache y MySQL. Accede a http://localhost. Si ves la página de XAMPP, todo está bien.",
          time: "3 min",
        },
        {
          title: "Crear tu primer archivo PHP",
          description: "Crea un archivo test.php en C:\\xampp\\htdocs (Windows) o /opt/lampp/htdocs (Linux) con: <?php echo 'Hola Mundo'; ?>. Accede a http://localhost/test.php",
          time: "5 min",
        },
        {
          title: "Acceder a phpMyAdmin",
          description: "Ve a http://localhost/phpmyadmin. Crea una nueva base de datos (ej: 'miapp'). Esto te permite gestionar MySQL visualmente sin comandos.",
          time: "5 min",
        },
      ],
      commonMistakes: [
        {
          mistake: "Instalar XAMPP en una carpeta protegida (Archivos de Programa en Windows)",
          solution: "Instala en C:\\xampp o una carpeta sin restricciones de permisos. Evita Program Files.",
        },
        {
          mistake: "Olvidar iniciar Apache y MySQL en el Control Panel",
          solution: "Abre XAMPP Control Panel y haz clic en 'Start' para ambos servicios. Deben estar en verde.",
        },
        {
          mistake: "Poner archivos en la carpeta equivocada",
          solution: "Los archivos web van en htdocs (Windows: C:\\xampp\\htdocs, Linux: /opt/lampp/htdocs). No en la carpeta de instalación.",
        },
      ],
    },
  },
];

export const categoryColors: Record<string, string> = {
  os: "text-red-400",
  virtualization: "text-orange-400",
  nas: "text-blue-400",
  router: "text-orange-500",
  switch: "text-green-400",
  web: "text-sky-400",
  devserver: "text-amber-400",
};

export const difficultyConfig = {
  facil: { label: "Fácil", class: "badge-easy", dot: "bg-green-400" },
  medio: { label: "Intermedio", class: "badge-medium", dot: "bg-yellow-400" },
  avanzado: { label: "Avanzado", class: "badge-hard", dot: "bg-red-400" },
};
