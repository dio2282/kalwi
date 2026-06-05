// ═══════════════════════════════════════════════════════════════════════════
// STAFF & CAREER CONFIGURATION
// Edit this file to manage staff members and career openings
// ═══════════════════════════════════════════════════════════════════════════

// Role types with their display colors and order priority
export const roleConfig = {
  Owner: {
    color: "#e91e63",
    bgColor: "bg-pink-500/20",
    textColor: "text-pink-400",
    priority: 1,
  },
  "Co-Owner": {
    color: "#00bbff",
    bgColor: "bg-sky-500/20",
    textColor: "text-sky-400",
    priority: 2,
  },
  Supervisor: {
    color: "#528d7a",
    bgColor: "bg-emerald-500/20",
    textColor: "text-emerald-400",
    priority: 3,
  },
  Developer: {
    color: "#d4843d",
    bgColor: "bg-orange-500/20",
    textColor: "text-orange-400",
    priority: 4,
  },
  Admin: {
    color: "#965f7f",
    bgColor: "bg-purple-500/20",
    textColor: "text-purple-400",
    priority: 5,
  },
  Builder: {
    color: "#3faa0a",
    bgColor: "bg-lime-500/20",
    textColor: "text-lime-400",
    priority: 6,
  },
  Moderator: {
    color: "#9e6bff",
    bgColor: "bg-violet-500/20",
    textColor: "text-violet-400",
    priority: 7,
  },
  Helper: {
    color: "#2647ff",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-400",
    priority: 8,
  },
} as const;

export type StaffRole = keyof typeof roleConfig;

// ═══════════════════════════════════════════════════════════════════════════
// STAFF MEMBERS - Edit list staff di sini
// ═══════════════════════════════════════════════════════════════════════════
export interface StaffMember {
  username: string; // Username Minecraft (untuk skin)
  displayName?: string; // Nama display (opsional, default: username)
  role: StaffRole;
  discord?: string; // Username Discord (opsional)
  joinDate?: string; // Tanggal bergabung (opsional)
}

export const staffMembers: StaffMember[] = [
  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ OWNER                                                                  ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    username: "xlqcy",
    role: "Owner",
    discord: "xlqcy",
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ CO-OWNER                                                               ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    username: "Dev_Dio",
    role: "Co-Owner",
    discord: "dev_dio",
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ SUPERVISOR - Tambah supervisor di sini                                 ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    username: "graciellyn_",
    role: "Supervisor",
    discord: "graciellyn",
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ DEVELOPER - Tambah developer di sini                                   ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    username: "pukislukis",
    role: "Developer",
    discord: "lukisspukis",
  },
  {
    username: "coobylah",
    role: "Developer",
    discord: "coobylah",
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ ADMIN - Tambah admin di sini                                           ║
  // ╚═══════════════════════════════════════════════════════════════════════╝

  {
    username: "rv_kuda",
    role: "Admin",
    discord: "chandrakusuma.",
  },
  {
    username: "kanamiybh",
    role: "Admin",
    discord: "yasashikanami",
  },


  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ MODERATOR - Tambah moderator di sini                                   ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  /**
  {
    username: "rielvtuber",
    role: "Moderator",
    discord: "rielrudesu001",
  },
  {
    username: "bangucop",
    role: "Moderator",
    discord: "ap4lu",
  },
  {
    username: "humblesaturn469",
    role: "Moderator",
    discord: "najibhumble",
  },
  {
    username: "nandagmg25",
    role: "Moderator",
    discord: "nanda_292",
  },
  {
    username: "janji081",
    role: "Moderator",
    discord: "useless_af081",
  },

  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ HELPER - Tambah helper di sini                                         ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  {
    username: ".reja9988",
    role: "Helper",
    discord: "reja99880637",
  },
  {
    username: ".swankylily39",
    role: "Helper",
    discord: "rezky.991",
  },
  {
    username: "mainku22",
    role: "Helper",
    discord: "set1111303",
  },
  {
    username: "bijiwangy",
    role: "Helper",
    discord: "bijiwangy",
  },
  {
    username: "fallz7771",
    role: "Helper",
    discord: "fallzd",
  },
  {
    username: "mocikhoara",
    role: "Helper",
    discord: "mocikhoara",
  },
  {
    username: "axa_nyeni",
    role: "Helper",
    discord: "axa1241_98350",
  },
  {
    username: "zeephyrrr",
    role: "Helper",
    discord: "seeenpaii1",
  },

   */
];

// ═══════════════════════════════════════════════════════════════════════════
// CAREER OPENINGS - Edit lowongan kerja di sini
// ═══════════════════════════════════════════════════════════════════════════

// Tipe metode apply yang tersedia
export type ApplyMethod =
  | { type: "discord"; username: string; userId: string } // DM Discord
  | { type: "gform"; url: string; label?: string } // Google Form
  | { type: "link"; url: string; label: string }; // Link custom (website, dll)

export interface CareerOpening {
  id: string;
  title: string;
  description?: string;
  isOpen: boolean;
  requirements: string[];
  generalRequirements: string[];
  benefits: string[];
  applyMethod: ApplyMethod; // Cara apply (discord/gform/link)
}

export const careerOpenings: CareerOpening[] = [
  {
    id: "helper-server-2026",
    title: "Helper Server",
    description:
      "Open Recruitment Staff KALWI 2026 untuk player aktif yang ingin membantu kelancaran server. Periode pendaftaran: 5 Juni - 15 Juni 2026.",
    isOpen: true,
    requirements: [
      "Berstatus player aktif KALWI.",
      "Memiliki komunikasi yang baik dan ramah.",
      "Siap membantu player lain yang membutuhkan informasi atau bantuan teknis.",
    ],
    generalRequirements: [
      "Aktif dan peduli dengan komunitas KALWI.",
      "Mampu menjaga sikap saat membantu player.",
      "Kontak Discord: graciellyn.",
    ],
    benefits: [
      "Berkontribusi langsung dalam menjaga kelancaran server.",
      "Kesempatan membantu sesama player KALWI.",
      "Bergabung sebagai bagian dari Staff KALWI 2026.",
    ],
    applyMethod: {
      type: "gform",
      url: "https://forms.gle/LbcoBkNPpd9xcwsR6",
      label: "Daftar Helper",
    },
  },
  /*
    {
        id: "skyblock-developer",
        title: "Skyblock Developer",
        description: "Kami sedang mencari developer Skyblock yang berpengalaman untuk bergabung dengan tim KalWi.",
        isOpen: true,
        requirements: [
            "Java/Kotlin Plugin Development",
            "Slimefun",
            "Slimefun Addon",
            "Fix Slimefun Dupe",
        ],
        generalRequirements: [
            "Bertanggung jawab",
            "Jujur",
        ],
        benefits: [
            "Pengalaman",
            "Gaji perbulan/perminggu (nominal sama aja, cuma kalo perminggu lebih cepat gajiannya)",
        ],
        // ╔═══════════════════════════════════════════════════════════════════════╗
        // ║ CARA APPLY - Pilih SALAH SATU dari 3 opsi di bawah:                   ║
        // ╚═══════════════════════════════════════════════════════════════════════╝

        // Opsi 1: Discord DM
       //  applyMethod: { type: "discord", username: "xlqcy", userId: "819573006523301898" },

        // Opsi 2: Google Form (uncomment untuk pakai)
        // applyMethod: { type: "gform", url: "https://forms.gle/xxxxx", label: "Isi Form" },

        // Opsi 3: Link custom (uncomment untuk pakai)
        // applyMethod: { type: "link", url: "https://example.com/apply", label: "Apply Now" },
    },
    */
  // ╔═══════════════════════════════════════════════════════════════════════╗
  // ║ CONTOH LOWONGAN DENGAN GOOGLE FORM (uncomment untuk pakai)            ║
  // ╚═══════════════════════════════════════════════════════════════════════╝
  // {
  //     id: "helper-recruitment",
  //     title: "Helper",
  //     description: "Kami mencari helper yang aktif dan ramah.",
  //     isOpen: true,
  //     requirements: ["Aktif di server", "Mengerti rules"],
  //     generalRequirements: ["Ramah", "Sabar"],
  //     benefits: ["Role khusus", "Akses fitur staff"],
  //     applyMethod: { type: "gform", url: "https://forms.gle/xxxxx" },
  // },
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

// Get Minecraft avatar URL (2D head)
export const getMcAvatar = (username: string, size = 128) =>
  `https://mc-heads.net/avatar/${username}/${size}`;

// Get Minecraft 3D head URL
export const getMcHead = (username: string, size = 128) =>
  `https://api.mcheads.org/ioshead/${username}/right/${size}`;

// Get Minecraft full body URL
export const getMcBody = (username: string, size = 128) =>
  `https://api.mcheads.org/iosbody/${username}/right/${size}`;

// Get Discord DM link
export const getDiscordDmLink = (userId: string) =>
  `https://discord.com/users/${userId}`;

// Sort staff by role priority
export const getSortedStaff = () =>
  [...staffMembers].sort(
    (a, b) => roleConfig[a.role].priority - roleConfig[b.role].priority,
  );

// Get staff grouped by role
export const getStaffByRole = () => {
  const grouped: Record<StaffRole, StaffMember[]> = {
    Owner: [],
    "Co-Owner": [],
    Supervisor: [],
    Developer: [],
    Admin: [],
    Builder: [],
    Moderator: [],
    Helper: [],
  };

  staffMembers.forEach((member) => {
    grouped[member.role].push(member);
  });

  return grouped;
};

// Get open career count
export const getOpenCareerCount = () =>
  careerOpenings.filter((c) => c.isOpen).length;
