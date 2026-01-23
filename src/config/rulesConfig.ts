// ═══════════════════════════════════════════════════════════════════════════
// RULES CONFIGURATION
// Edit this file to manage server rules
// ═══════════════════════════════════════════════════════════════════════════

export type Language = "indonesia" | "malaysia" | "english";

export interface RuleSection {
    id: string;
    label: string;
    emoji: string;
    color: string;
    title: string;
    content: string;  // Markdown content
    footer?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// INDONESIAN RULES
// ═══════════════════════════════════════════════════════════════════════════
export const rulesIndonesia: RuleSection[] = [
    {
        id: "pasal-1",
        label: "Pasal 1: Aturan Umum",
        emoji: "🌐",
        color: "#2ECC71",
        title: "🌐 PASAL 1: ATURAN UMUM",
        content: `
### Ayat 1: Etika Berinteraksi
- Dilarang menggunakan kata-kata kasar, SARA, atau komentar yang merendahkan.
- Dilarang melakukan tindakan provokatif yang memicu konflik (bully, hina, dll).
- Dilarang menyebarkan informasi palsu (hoax).
- Dilarang \`spam\`, \`flood\`, atau mengirim konten tidak relevan di chat.
- Dilarang membahas topik sensitif (politik, agama, dll).
- Dilarang mempromosikan \`link\` atau sejenisnya.
- Dilarang membuat \`drama\`, mengancam, atau melecehkan.
- Dilarang membahas topik pornografi.

**Sanksi:**
- **Pelanggaran Pertama:** \`Warning\`.
- **Pelanggaran Kedua:** \`Mute\` sementara 30 menit.
- **Pelanggaran Ketiga:** \`Mute\` sementara 1 jam.
- **Pelanggaran Berulang (>3x):** \`Mute\` sementara 3 jam.

---

### Ayat 2: Perilaku yang Mengganggu
- Dilarang mengganggu pemain lain (merusak \`building\` tanpa izin, dll).
- Dilarang menggunakan fitur untuk mengganggu (cth: \`spawn creeper\`, \`tnt\`, \`lava\`, \`smite\`).
- Dilarang menyinggung server, pemain, staff, dll dengan informasi yang tidak benar.

**Sanksi:**
- **Pelanggaran Pertama:** \`Warning\`.
- **Pelanggaran Kedua:** \`Ban\` sementara 1 jam.
- **Pelanggaran Ketiga:** \`Ban\` sementara 6 jam.
`,
        footer: "KandangAlwi Rules • Pasal 1 dari 4",
    },
    {
        id: "pasal-2",
        label: "Pasal 2: Aturan In-Game",
        emoji: "🎮",
        color: "#F1C40F",
        title: "🎮 PASAL 2: ATURAN IN-GAME",
        content: `
### Ayat 1: Eksploitasi Bug & Glitch
- \`Bug\` atau \`glitch\` yang ditemukan harus segera dilaporkan ke \`staff\`.
- Dilarang menggunakan \`bug\` atau \`glitch\` untuk keuntungan pribadi.
- Dilarang menggunakan \`bug\` atau \`glitch\` untuk merusak properti.

**Sanksi:**
- **Pelanggaran Pertama:** Ban permanen hingga mengajukan banding. Barang hasil \`dupe\` disita + \`Ban\` sementara 1 hari.
- **Pelanggaran Kedua:** Ban permanen + \`Ban\` sementara 7 hari.
- **Pelanggaran Ketiga:** Ban permanen + \`Ban\` sementara 14 hari.

---

### Ayat 2: Penggunaan Hack & Cheat
- Dilarang menggunakan \`software\`/\`mod\` pihak ketiga yang tidak adil (\`Kill Aura\`, \`Fly\`, \`Speed hack\`, \`Xray\`, dll).

**Sanksi:**
- **Pelanggaran Pertama:** \`Ban\` sementara 6 jam.
- **Pelanggaran Kedua:** \`Ban\` sementara 1 hari.
- **Pelanggaran Berulang:** \`Ban\` sementara 3 hari.

---

### Ayat 3: Mods
- **Dilarang:** \`Mods\` yang tidak adil (\`AutoTotem\`, \`X-Ray\`, \`AutoCrit\`, \`Fly\`, \`SpeedHacks\`, \`FreeCam\`, dll).
- **Diperbolehkan:** \`Mods\` client-side (\`NightVision\`, \`MiniMap\`, \`OptiFine\`, \`AutoFish\`, \`Macro\`, dll).

**Sanksi:**
- **Pelanggaran Pertama:** \`Warning\`.
- **Pelanggaran Kedua:** \`Ban\` sementara 1 hari.
- **Pelanggaran Ketiga:** \`Ban\` sementara 3 hari.

---

### Ayat 4: Penggunaan Trap
- Dilarang membuat \`trap\` untuk mencuri \`loot\` pemain atau untuk \`trap kill\`.

**Sanksi:** Warning → Ban 1 hari → Ban 3 hari.

---

### Ayat 5: Griefing
- Dilarang melakukan \`griefing\` (merusak properti, \`lava cast\`, mencuri, dll).

**Sanksi:** Warning → Ban 1 hari → Ban 3 hari.

---

### Ayat 6: Penipuan (Scamming)
- Dilarang melakukan \`scamming\` atau memanipulasi.

**Sanksi:** Warning → Ban 1 hari → Ban 3 hari.

---

### Ayat 7: Transaksi dan Perdagangan (RMT)
- **Real Money Trading (RMT) = DILARANG KERAS**. Jual-beli item/akun/jasa dengan uang nyata.
- **Donasi ke Server = DIIZINKAN**. Transaksi resmi ke \`Owner\` untuk mendukung server.
- **Transaksi Ilegal dengan Staff = DILARANG**.

**Sanksi RMT:** \`Ban Permanen\` & Reset Progress.

---

### Ayat 8: Penyalahgunaan Fitur
- Dilarang menyalahgunakan \`fitur\` (cth: \`spawnmob\` creeper untuk hancurkan \`base\`).

**Sanksi:** Ban 6 jam → Ban 1 hari → Ban 3 hari.

---

### Ayat 9: Doxing
- Dilarang menyebar informasi pribadi (\`doxing\`).

**Sanksi:** \`Ban permanen\`.

---

### Ayat 10: Perjudian (Gambling)
- Dilarang melakukan \`gambling\` (\`Coinflip\`, judi \`seed\`, dll).

**Sanksi:** Ban 3 hari → Ban 7 hari → Ban 14 hari.

---

### Ayat 11: Berbagi Akun (Account Sharing)
- Dilarang keras melakukan \`account sharing\`.
- Satu akun hanya digunakan satu orang.
- Pemilik asli bertanggung jawab penuh atas semua aktivitas akun.

**Sanksi:** Ban 3 hari → Ban 7 hari → Ban permanen.
`,
        footer: "KandangAlwi Rules • Pasal 2 dari 4",
    },
    {
        id: "pasal-3",
        label: "Pasal 3: Sanksi",
        emoji: "⚖️",
        color: "#E74C3C",
        title: "⚖️ PASAL 3: SANKSI",
        content: `
### Ayat 1: Jenis Sanksi
- \`Warn\` - Peringatan lisan
- \`Mute\` - Tidak bisa chat sementara
- \`Ban Sementara\` (Temporary Ban) - Tidak bisa masuk server sementara
- \`Ban Permanen\` (Permanent Ban) - Diblokir selamanya

---

### Ayat 2: Banding (Appeal)
- Player yang terkena sanksi berhak mengajukan \`appeal\` di \`Discord Support\`.
- \`Staff\` akan meninjau dan mempertimbangkan \`appeal\` tersebut.
- Proses appeal membutuhkan penjelasan lengkap tentang pelanggaran.
`,
        footer: "KandangAlwi Rules • Pasal 3 dari 4",
    },
    {
        id: "pasal-4",
        label: "Pasal 4: Tambahan",
        emoji: "➕",
        color: "#9B59B6",
        title: "➕ PASAL 4: TAMBAHAN",
        content: `
### Ayat 1: Donasi
- Semua bentuk \`donasi\` adalah sukarela untuk mendukung server.
- Donasi tidak menjamin keistimewaan dalam hal pelanggaran aturan.
- Manfaat donasi akan diberikan sesuai dengan paket yang dipilih.

---

### Ayat 2: Perubahan Aturan
- \`Server\` berhak mengubah peraturan kapanpun dengan pemberitahuan di \`Discord\`.
- Pemain diharapkan untuk selalu mengikuti update peraturan terbaru.
- Ketidaktahuan terhadap aturan baru bukan alasan untuk bebas dari sanksi.
`,
        footer: "KandangAlwi Rules • Pasal 4 dari 4",
    },
];

// ═══════════════════════════════════════════════════════════════════════════
// ENGLISH RULES
// ═══════════════════════════════════════════════════════════════════════════
export const rulesEnglish: RuleSection[] = [
    {
        id: "article-1",
        label: "Article 1: General Rules",
        emoji: "🌐",
        color: "#2ECC71",
        title: "🌐 ARTICLE 1: GENERAL RULES",
        content: `
### Clause 1: Code of Conduct
- The use of harsh language, hate speech, or derogatory comments is forbidden.
- Provocative actions that could trigger conflict (bullying, insults, etc.) are forbidden.
- Spreading false information (hoax) is forbidden.
- \`Spam\`, \`flood\`, or posting irrelevant content in the chat is forbidden.
- Discussing sensitive topics (politics, religion, etc.) is forbidden.
- Promoting external \`links\` is forbidden.
- Causing \`drama\`, making threats, or harassing others is forbidden.
- Discussing pornographic topics is forbidden.

**Penalties:**
- **First Offense:** \`Warning\`.
- **Second Offense:** Temporary \`Mute\` for 30 minutes.
- **Third Offense:** Temporary \`Mute\` for 1 hour.
- **Repeated Offenses (>3x):** Temporary \`Mute\` for 3 hours.

---

### Clause 2: Disruptive Behavior
- Disturbing other players (destroying \`builds\` without permission, etc.) is forbidden.
- Using game features to disrupt others (e.g., \`spawn creeper\`, \`tnt\`, \`lava\`, \`smite\`) is forbidden.

**Penalties:**
- **First Offense:** \`Warning\`.
- **Second Offense:** Temporary \`Ban\` for 1 hour.
- **Third Offense:** Temporary \`Ban\` for 6 hours.
`,
        footer: "KandangAlwi Rules • Article 1 of 4",
    },
    {
        id: "article-2",
        label: "Article 2: In-Game Rules",
        emoji: "🎮",
        color: "#F1C40F",
        title: "🎮 ARTICLE 2: IN-GAME RULES",
        content: `
### Clause 1: Bug & Glitch Exploitation
- Any \`bugs\` or \`glitches\` found must be reported to the \`staff\` immediately.
- Using \`bugs\` or \`glitches\` for personal gain is forbidden.
- Using \`bugs\` or \`glitches\` to damage property is forbidden.

**Penalties:** Permanent ban until appeal + item confiscation.

---

### Clause 2: Use of Hacks & Cheats
- Using unfair third-party \`software\`/\`mods\` (\`Kill Aura\`, \`Fly\`, \`Speed hack\`, \`Xray\`, etc.) is forbidden.

**Penalties:** Ban 6 hours → Ban 1 day → Ban 3 days.

---

### Clause 3: Mods
- **Forbidden:** Unfair \`mods\` (\`AutoTotem\`, \`X-Ray\`, \`AutoCrit\`, \`Fly\`, \`SpeedHacks\`, \`FreeCam\`, etc.).
- **Allowed:** Client-side \`mods\` (\`NightVision\`, \`MiniMap\`, \`OptiFine\`, \`AutoFish\`, \`Macro\`, etc.).

**Penalties:** Warning → Ban 1 day → Ban 3 days.

---

### Clause 4-6: Traps, Griefing, Scamming
- Creating \`traps\` to steal loot or trap kill is forbidden.
- \`Griefing\` (damaging property, \`lava casting\`, stealing) is forbidden.
- \`Scamming\` or manipulation is forbidden.

**Penalties:** Warning → Ban 1 day → Ban 3 days.

---

### Clause 7: Real Money Trading (RMT)
- **RMT = STRICTLY FORBIDDEN**. Selling/buying items/accounts with real money between players.
- **Server Donations = ALLOWED**. Official transactions to support the server.

**Penalty:** \`Permanent Ban\` & Progress Reset.

---

### Clause 8-11: Feature Abuse, Doxing, Gambling, Account Sharing
- Feature abuse is forbidden.
- Spreading private information (\`doxing\`) results in \`permanent ban\`.
- \`Gambling\` is forbidden: Ban 3 days → 7 days → 14 days.
- \`Account sharing\` is forbidden: Ban 3 days → 7 days → permanent.
`,
        footer: "KandangAlwi Rules • Article 2 of 4",
    },
    {
        id: "article-3",
        label: "Article 3: Penalties",
        emoji: "⚖️",
        color: "#E74C3C",
        title: "⚖️ ARTICLE 3: PENALTIES",
        content: `
### Clause 1: Types of Penalties
- \`Warn\` - Verbal warning
- \`Mute\` - Temporary chat restriction
- \`Temporary Ban\` - Temporary server access restriction
- \`Permanent Ban\` - Permanent server ban

---

### Clause 2: Appeals
- Penalized players have the right to file an \`appeal\` on \`Discord Support\`.
- \`Staff\` will review and consider the \`appeal\`.
`,
        footer: "KandangAlwi Rules • Article 3 of 4",
    },
    {
        id: "article-4",
        label: "Article 4: Additional Provisions",
        emoji: "➕",
        color: "#9B59B6",
        title: "➕ ARTICLE 4: ADDITIONAL PROVISIONS",
        content: `
### Clause 1: Donations
- All forms of \`donations\` are voluntary to support the \`server\`.
- Donations do not grant immunity from rule violations.

---

### Clause 2: Rule Changes
- The \`server\` reserves the right to change the rules at any time with notification on \`Discord\`.
- Players are expected to stay updated with the latest rules.
`,
        footer: "KandangAlwi Rules • Article 4 of 4",
    },
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

export const getRulesByLanguage = (lang: Language): RuleSection[] => {
    switch (lang) {
        case "indonesia":
            return rulesIndonesia;
        case "english":
            return rulesEnglish;
        case "malaysia":
            return rulesIndonesia; // Use Indonesia rules for Malaysia (similar)
        default:
            return rulesIndonesia;
    }
};

export const getLanguageLabel = (lang: Language): string => {
    switch (lang) {
        case "indonesia":
            return "🇮🇩 Bahasa Indonesia";
        case "english":
            return "🇬🇧 English";
        case "malaysia":
            return "🇲🇾 Bahasa Melayu";
        default:
            return "🇮🇩 Bahasa Indonesia";
    }
};

export const availableLanguages: Language[] = ["indonesia", "english"];
