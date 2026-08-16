// ═══════════════════════════════════════════════════════════════════════════
// DISCORD RULES CONFIGURATION
// Edit this file to manage Discord server rules
// ═══════════════════════════════════════════════════════════════════════════

import {
    type Language,
    type RuleSection,
} from "@/config/rulesConfig";

// ═══════════════════════════════════════════════════════════════════════════
// INDONESIAN DISCORD RULES
// ═══════════════════════════════════════════════════════════════════════════
export const discordRulesIndonesia: RuleSection[] = [
    {
        id: "pasal-1",
        label: "Pasal 1: Perilaku & Etika",
        emoji: "📜",
        color: "#2ECC71",
        title: "📜 PASAL 1: PERILAKU & ETIKA",
        content: `
### Ayat 1: Toxic & Ujaran Kebencian
Dilarang:
- Bersikap toxic, menghina, mengejek, merendahkan.
- Menyebarkan SARA, rasisme, diskriminasi.
- Membahas politik.
- Membahas topik dewasa (+18), mengirim gambar/pornografi.
- Menggunakan emoji/sticker bernuansa tidak senonoh (sus).
- Spam, flood, atau kirim pesan berulang/tidak relevan.

---

### Ayat 2: Nama & Profil
Dilarang:
- Username atau display name yang provokatif, toxic, SARA, rasis, dewasa.
- Avatar mengandung unsur SARA, pornografi, gore, provokasi.

---

### Ayat 3: Voice Channel (VC)
Dilarang:
- Suara berisik, jeritan tiba-tiba (ear rape).
- Mengganggu obrolan orang lain secara sengaja.

---

### Ayat 4: Mention & Ping
Dilarang:
- Mention \`@everyone\`, \`@here\`, atau role staf tanpa alasan penting.
- Mass mention (mention banyak user dalam waktu singkat).

---

### Ayat 5: Bahasa
- Gunakan Bahasa Indonesia atau Inggris.
- Dilarang menggunakan bahasa asing untuk menyembunyikan ujaran kebencian.

---

### Sanksi Pasal 1 (Bertahap)
- **Pelanggaran ke-1:** \`Peringatan (Warning)\`
- **Pelanggaran ke-2:** \`Timeout 1 menit\`
- **Pelanggaran ke-3:** \`Timeout 10 menit\`
- **Pelanggaran ke-4:** \`Timeout 1 jam\`
- **Pelanggaran ke-5:** \`Timeout 1 hari\`
- **Pelanggaran ke-6:** \`Timeout 1 minggu\`
- **Pelanggaran ke-7+:** \`Ban permanen\`

> Pelanggaran berat (SARA kasar, +18 eksplisit, ear rape parah) bisa langsung **Timeout 1 jam** atau **Ban permanen** sesuai kebijakan staf.
`,
        footer: "KandangAlwi Discord Rules • Pasal 1 dari 8",
    },
    {
        id: "pasal-2",
        label: "Pasal 2: Link & Promosi",
        emoji: "🔗",
        color: "#F1C40F",
        title: "🔗 PASAL 2: LINK & PROMOSI",
        content: `
### Ayat 1: Link Umum
- **Fitur kirim link secara umum sudah dinonaktifkan** di server ini.
- Namun **mengirim link server Discord lain tetap tidak diizinkan**.
- Link phishing, malware, atau mencurigakan tetap dilarang dan akan dikenakan sanksi berat.

---

### Ayat 2: Self-Promotion Lainnya
- Dilarang promosi YouTube, Twitch, TikTok, sosial media, atau jual jasa (selain jual akun/rank yang sudah diatur di Pasal 4) tanpa izin staff.

---

### Sanksi Pasal 2
- **Link phishing/malware:** \`Ban permanen langsung\`
- **Promosi tanpa izin (bukan jual akun/rank):** \`Peringatan\` → \`Kick\`
`,
        footer: "KandangAlwi Discord Rules • Pasal 2 dari 8",
    },
    {
        id: "pasal-3",
        label: "Pasal 3: Bot & Alt",
        emoji: "🤖",
        color: "#E74C3C",
        title: "🤖 PASAL 3: PENGGUNAAN BOT & AKUN ALTERNATIF (ALT)",
        content: `
### Ayat 1: Bot
- Dilarang menyalahgunakan bot (spam command, command berulang mengganggu). Silakan bermain menggunakan bot di \`#「🤖」bot-commands\`.
- Dilarang menggunakan self-bot (bot pribadi dengan token user).

---

### Ayat 2: Akun Alternatif (Alt)
- **Penggunaan alt account diperbolehkan** selama tidak digunakan untuk abuse.
- **Abuse alt** didefinisikan sebagai: menggunakan alt untuk menghindari sanksi timeout/ban, mengganggu setelah kena sanksi, atau melanjutkan pelanggaran yang sama.
- Jika ketahuan abuse alt, sanksi akan dikenakan ke **semua akun (utama + alt)**.

---

### Sanksi Pasal 3
- **Spam command bot (di luar channel yang disediakan):** \`Timeout 10 menit\` → \`1 jam\`
- **Self-bot:** \`Ban permanen\`
- **Abuse alt (menghindari sanksi):** Sanksi asli dilipatgandakan + ban permanen untuk alt
- **Abuse alt berulang:** Ban permanen untuk semua akun
`,
        footer: "KandangAlwi Discord Rules • Pasal 3 dari 8",
    },
    {
        id: "pasal-4",
        label: "Pasal 4: Jual Beli Akun & Rank",
        emoji: "🛒",
        color: "#9B59B6",
        title: "🛒 PASAL 4: JUAL BELI AKUN & RANK KANDANGALWI",
        content: `
### Ayat 1: Larangan
- Dilarang menjual **akun Minecraft** atau **rank KandangAlwi** dengan imbalan apapun (termasuk uang, item in-game, jasa, dll).

---

### Ayat 2: Sanksi Khusus
- **Ban permanen langsung** (tidak melalui tahap timeout/peringatan).
- Tidak bisa di-unban kecuali melalui proses **appeal**.
- Proses **klarifikasi di ticket** untuk kasus ini dilakukan **secara in-game** (bukan di Discord). Silakan \`#「🎫」open-ticket\` untuk melakukan appeal KandangAlwi.

---

### Sanksi Pasal 4
- **Jual akun Minecraft / rank KandangAlwi:** Ban permanen (in-game), harus appeal via **Ticket**
`,
        footer: "KandangAlwi Discord Rules • Pasal 4 dari 8",
    },
    {
        id: "pasal-5",
        label: "Pasal 5: Konten & Privasi",
        emoji: "🔒",
        color: "#30B4FF",
        title: "🔒 PASAL 5: KONTEN & PRIVASI",
        content: `
### Ayat 1: Spoiler & Sensitif
- Wajib gunakan spoiler (\`||teks||\`) untuk gambar serangga, luka ringan, horror.
- Dilarang mengirim gore, kekerasan ekstrem, konten menyiksa.

---

### Ayat 2: DM Harassment
- Dilarang mengirim DM mengganggu, spam, atau pelecehan ke member lain. Laporkan ke staff.

---

### Ayat 3: Ticket & Laporan Palsu
- Dilarang membuat ticket palsu atau laporan tidak benar untuk menjebak.

---

### Sanksi Pasal 5
- **Tidak pakai spoiler (sensitif):** \`Peringatan\`
- **Gore / kekerasan ekstrem:** \`Ban permanen\`
- **DM harassment:** \`Ban permanen\`
- **Laporan palsu:** \`Timeout 1 hari\` → \`Ban\`
`,
        footer: "KandangAlwi Discord Rules • Pasal 5 dari 8",
    },
    {
        id: "pasal-6",
        label: "Pasal 6: Sanksi & Banding",
        emoji: "⚖️",
        color: "#14B8A6",
        title: "⚖️ PASAL 6: SANKSI UMUM & BANDING",
        content: `
### Ayat 1: Jenis Sanksi
- **Peringatan** – Notifikasi dari staf/bot.
- **Timeout** – Tidak bisa chat (\`1m\`, \`10m\`, \`1h\`, \`1d\`, \`1w\`).
- **Kick** – Dikeluarkan, bisa join ulang.
- **Ban** – Tidak bisa join lagi.

---

### Ayat 2: Banding (Appeal)
- Ajukan via **Ticket** di Discord (kecuali untuk kasus jual akun/rank, harus via Ticket).
- Banding tidak diterima untuk: phishing, self-bot, abuse alt parah, gore, DM harassment.
- Untuk kasus **jual akun/rank**, banding hanya via Ticket dan keputusan final dari staff.
`,
        footer: "KandangAlwi Discord Rules • Pasal 6 dari 8",
    },
    {
        id: "pasal-7",
        label: "Pasal 7: Tambahan",
        emoji: "➕",
        color: "#F39C12",
        title: "➕ PASAL 7: TAMBAHAN",
        content: `
### Ayat 1: Donasi
Donasi sukarela, tidak memberi hak istimewa untuk melanggar aturan.

---

### Ayat 2: Perubahan Aturan
Aturan dapat berubah. Member wajib memeriksa channel \`#rules\` secara berkala.

---

**KandangAlwi – Nyaman bersama, bermain sehat!** 🐔
`,
        footer: "KandangAlwi Discord Rules • Pasal 7 dari 8",
    },
    {
        id: "etika-ticket",
        label: "Etika Open Ticket",
        emoji: "🎫",
        color: "#5865F2",
        title: "🎫 ETIKA OPEN TICKET",
        content: `
Dalam membuka ticket, mohon perhatikan etika berikut:

1. Dilarang menggunakan bahasa yang tidak sopan ataupun memaksa staff untuk segera menghandle ticket tersebut secara kasar.
2. Dilarang memberikan informasi pribadi yang sensitif.
3. Dilarang untuk menghina staff maupun server.

---

### Sanksi
- **Pelanggaran Pertama:** \`Ban 3 Jam\`.
- **Pelanggaran Kedua:** \`Ban 6 Jam\`
- **Pelanggaran Ketiga:** \`Ban 1 Hari\`
- **Pelanggaran Berulang (>3x):** \`Ban > 1 Hari\`
`,
        footer: "KandangAlwi Discord Rules • Pasal 8 dari 8",
    },
];

// ═══════════════════════════════════════════════════════════════════════════
// ENGLISH DISCORD RULES
// ═══════════════════════════════════════════════════════════════════════════
export const discordRulesEnglish: RuleSection[] = [
    {
        id: "article-1",
        label: "Article 1: Conduct & Ethics",
        emoji: "📜",
        color: "#2ECC71",
        title: "📜 ARTICLE 1: CONDUCT & ETHICS",
        content: `
### Clause 1: Toxicity & Hate Speech
Forbidden:
- Being toxic, insulting, mocking, or belittling others.
- Spreading SARA, racism, or discrimination.
- Discussing politics.
- Discussing adult topics (+18), or sending images/pornography.
- Using suggestive or indecent (sus) emojis/stickers.
- Spam, flood, or sending repeated/irrelevant messages.

---

### Clause 2: Name & Profile
Forbidden:
- A username or display name that is provocative, toxic, SARA, racist, or adult.
- An avatar containing SARA, pornography, gore, or provocation.

---

### Clause 3: Voice Channel (VC)
Forbidden:
- Loud noises or sudden screaming (ear rape).
- Intentionally disrupting other people's conversations.

---

### Clause 4: Mentions & Pings
Forbidden:
- Mentioning \`@everyone\`, \`@here\`, or staff roles without an important reason.
- Mass mention (mentioning many users in a short time).

---

### Clause 5: Language
- Use Indonesian or English.
- Using a foreign language to hide hate speech is forbidden.

---

### Article 1 Penalties (Progressive)
- **1st offense:** \`Warning\`
- **2nd offense:** \`1-minute Timeout\`
- **3rd offense:** \`10-minute Timeout\`
- **4th offense:** \`1-hour Timeout\`
- **5th offense:** \`1-day Timeout\`
- **6th offense:** \`1-week Timeout\`
- **7th+ offense:** \`Permanent ban\`

> Severe violations (harsh SARA, explicit +18, severe ear rape) may result in an immediate **1-hour Timeout** or **Permanent Ban** at staff discretion.
`,
        footer: "KandangAlwi Discord Rules • Article 1 of 8",
    },
    {
        id: "article-2",
        label: "Article 2: Links & Promotion",
        emoji: "🔗",
        color: "#F1C40F",
        title: "🔗 ARTICLE 2: LINKS & PROMOTION",
        content: `
### Clause 1: General Links
- **The general link-sending feature is disabled** on this server.
- However, **sending links to other Discord servers is still not allowed**.
- Phishing, malware, or suspicious links remain forbidden and will receive severe penalties.

---

### Clause 2: Other Self-Promotion
- Promoting YouTube, Twitch, TikTok, social media, or selling services (other than account/rank sales already covered in Article 4) without staff permission is forbidden.

---

### Article 2 Penalties
- **Phishing/malware links:** \`Immediate permanent ban\`
- **Promotion without permission (not account/rank sales):** \`Warning\` → \`Kick\`
`,
        footer: "KandangAlwi Discord Rules • Article 2 of 8",
    },
    {
        id: "article-3",
        label: "Article 3: Bots & Alts",
        emoji: "🤖",
        color: "#E74C3C",
        title: "🤖 ARTICLE 3: BOT USAGE & ALTERNATE ACCOUNTS (ALT)",
        content: `
### Clause 1: Bots
- Abusing bots (command spam, repeated commands that disturb others) is forbidden. Please use bots in \`#「🤖」bot-commands\`.
- Using a self-bot (a personal bot with a user token) is forbidden.

---

### Clause 2: Alternate Accounts (Alt)
- **Alt accounts are allowed** as long as they are not used for abuse.
- **Alt abuse** is defined as: using an alt to evade timeout/ban sanctions, causing trouble after being sanctioned, or continuing the same violation.
- If alt abuse is discovered, sanctions will be applied to **all accounts (main + alt)**.

---

### Article 3 Penalties
- **Bot command spam (outside the provided channel):** \`10-minute Timeout\` → \`1 hour\`
- **Self-bot:** \`Permanent ban\`
- **Alt abuse (evading sanctions):** Original sanction doubled + permanent ban for the alt
- **Repeated alt abuse:** Permanent ban for all accounts
`,
        footer: "KandangAlwi Discord Rules • Article 3 of 8",
    },
    {
        id: "article-4",
        label: "Article 4: Account & Rank Sales",
        emoji: "🛒",
        color: "#9B59B6",
        title: "🛒 ARTICLE 4: SELLING ACCOUNTS & KANDANGALWI RANKS",
        content: `
### Clause 1: Prohibition
- Selling a **Minecraft account** or **KandangAlwi rank** for any compensation (including money, in-game items, services, etc.) is forbidden.

---

### Clause 2: Special Penalties
- **Immediate permanent ban** (no timeout/warning stages).
- Cannot be unbanned except through the **appeal** process.
- **Clarification in a ticket** for this case is done **in-game** (not on Discord). Please use \`#「🎫」open-ticket\` to appeal KandangAlwi.

---

### Article 4 Penalties
- **Selling a Minecraft account / KandangAlwi rank:** Permanent ban (in-game), must appeal via **Ticket**
`,
        footer: "KandangAlwi Discord Rules • Article 4 of 8",
    },
    {
        id: "article-5",
        label: "Article 5: Content & Privacy",
        emoji: "🔒",
        color: "#30B4FF",
        title: "🔒 ARTICLE 5: CONTENT & PRIVACY",
        content: `
### Clause 1: Spoilers & Sensitive Content
- You must use spoilers (\`||text||\`) for images of insects, minor injuries, or horror.
- Sending gore, extreme violence, or torture content is forbidden.

---

### Clause 2: DM Harassment
- Sending harassing DMs, spam, or harassment to other members is forbidden. Report it to staff.

---

### Clause 3: Fake Tickets & Reports
- Creating fake tickets or false reports to frame someone is forbidden.

---

### Article 5 Penalties
- **Not using spoilers (sensitive):** \`Warning\`
- **Gore / extreme violence:** \`Permanent ban\`
- **DM harassment:** \`Permanent ban\`
- **False reports:** \`1-day Timeout\` → \`Ban\`
`,
        footer: "KandangAlwi Discord Rules • Article 5 of 8",
    },
    {
        id: "article-6",
        label: "Article 6: Sanctions & Appeals",
        emoji: "⚖️",
        color: "#14B8A6",
        title: "⚖️ ARTICLE 6: GENERAL SANCTIONS & APPEALS",
        content: `
### Clause 1: Types of Sanctions
- **Warning** – Notification from staff/bot.
- **Timeout** – Cannot chat (\`1m\`, \`10m\`, \`1h\`, \`1d\`, \`1w\`).
- **Kick** – Removed, can rejoin.
- **Ban** – Cannot join again.

---

### Clause 2: Appeals
- Submit via **Ticket** on Discord (except for account/rank sales cases, which must go through Ticket).
- Appeals are not accepted for: phishing, self-bot, severe alt abuse, gore, DM harassment.
- For **account/rank sales** cases, appeals are only via Ticket and the staff decision is final.
`,
        footer: "KandangAlwi Discord Rules • Article 6 of 8",
    },
    {
        id: "article-7",
        label: "Article 7: Additional",
        emoji: "➕",
        color: "#F39C12",
        title: "➕ ARTICLE 7: ADDITIONAL",
        content: `
### Clause 1: Donations
Donations are voluntary and do not grant privilege to break the rules.

---

### Clause 2: Rule Changes
Rules may change. Members must check the \`#rules\` channel periodically.

---

**KandangAlwi – Comfortable together, play fair!** 🐔
`,
        footer: "KandangAlwi Discord Rules • Article 7 of 8",
    },
    {
        id: "ticket-etiquette",
        label: "Open Ticket Etiquette",
        emoji: "🎫",
        color: "#5865F2",
        title: "🎫 OPEN TICKET ETIQUETTE",
        content: `
When opening a ticket, please follow this etiquette:

1. Do not use rude language or force staff to handle the ticket immediately in a harsh manner.
2. Do not share sensitive personal information.
3. Do not insult staff or the server.

---

### Penalties
- **First Offense:** \`3-hour Ban\`.
- **Second Offense:** \`6-hour Ban\`
- **Third Offense:** \`1-day Ban\`
- **Repeated Offenses (>3x):** \`Ban > 1 Day\`
`,
        footer: "KandangAlwi Discord Rules • Article 8 of 8",
    },
];

export const getDiscordRulesByLanguage = (lang: Language): RuleSection[] => {
    switch (lang) {
        case "indonesia":
            return discordRulesIndonesia;
        case "english":
            return discordRulesEnglish;
        case "malaysia":
            return discordRulesIndonesia;
        default:
            return discordRulesIndonesia;
    }
};
