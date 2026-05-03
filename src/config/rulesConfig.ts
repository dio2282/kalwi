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
        footer: "KandangAlwi Rules • Pasal 1 dari 5",
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
        footer: "KandangAlwi Rules • Pasal 2 dari 5",
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
        footer: "KandangAlwi Rules • Pasal 3 dari 5",
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
        footer: "KandangAlwi Rules • Pasal 4 dari 5",
    },
    {
        id: "pasal-5",
        label: "Pasal 5: WTT Rank",
        emoji: "📢",
        color: "#30B4FF",
        title: "📢 PASAL 5: PERATURAN WTT KHUSUS RANK",
        content: `
### 1. Pendahuluan
Aturan ini **hanya berlaku untuk transaksi WTT yang melibatkan rank premium** sebagai salah satu sisi pertukaran.

Contoh transaksi yang dimaksud:
- Item ↔️ Rank
- Balance ↔️ Rank
- Jasa ↔️ Rank
- Rank ↔️ Item
- Rank ↔️ Balance
- Rank ↔️ Jasa

**Transaksi yang tidak melibatkan rank** seperti item ↔️ item, item ↔️ balance, jasa ↔️ item, dan sejenisnya **tidak diatur** oleh aturan ini dan tidak wajib melalui ticket. Namun transaksi tersebut tetap tunduk pada peraturan server umum tentang penipuan atau scam.

Tujuan aturan khusus ini:
- Melindungi kedua belah pihak dari penipuan dalam transaksi yang melibatkan rank.
- Menyediakan jalur resmi dan bukti transaksi yang sah.
- Memberikan kepastian hukum dalam transaksi jangka panjang seperti jasa build yang melibatkan rank.

---

### 2. Definisi WTT yang Diatur
**Transaksi yang wajib mengikuti aturan ini karena melibatkan rank:**
- Item in-game dari server KandangAlwi ↔️ Rank.
- Balance atau uang in-game ↔️ Rank.
- Jasa build, desain, dan sejenisnya ↔️ Rank.
- Rank ↔️ Item in-game.
- Rank ↔️ Balance.
- Rank ↔️ Jasa.

**Transaksi yang tidak diatur aturan ini dan tidak wajib ticket:**
- Item ↔️ Item, keduanya item in-game.
- Item ↔️ Balance.
- Balance ↔️ Balance.
- Jasa ↔️ Item tanpa rank.
- Jasa ↔️ Balance tanpa rank.

**Tetap dilarang dalam aturan server utama:**
- Item dari server atau game lain ↔️ Rank KandangAlwi.
- Transaksi dengan uang asli atau RMT.

---

### 3. Kewajiban Open Ticket
**Semua transaksi yang melibatkan rank wajib melalui Open Ticket.**

Ticket dibuka di **Discord server KandangAlwi** melalui channel khusus. Ticket berfungsi sebagai:
- Bukti resmi transaksi.
- Tempat staff memonitor dan menjadi penengah.
- Arsip kesepakatan tertulis.
- Sarana komunikasi aman tanpa kecurigaan.

**Persyaratan sebelum membuka ticket:**
- Kedua pihak yang akan bertransaksi wajib memiliki akun Discord.
- Kedua pihak wajib bergabung di server Discord KandangAlwi.

**Cara membuka ticket:**
1. Salah satu player pergi ke channel \`#「🎫」open-ticket\` atau channel open ticket sesuai nama yang berlaku di server.
2. Player membuka ticket baru dengan memilih kategori bebas, misalnya \`Support\`, \`Ask\`, \`Other\`, atau kategori lain yang tersedia.
3. Setelah ticket terbuka, staff akan mengubah kategori ticket tersebut menjadi \`Parking\` khusus untuk keperluan WTT.
4. Di dalam channel ticket yang baru terbuat, player menjelaskan maksud transaksi WTT kepada staff Helper dan melampirkan mention Discord pihak yang diajak WTT.
5. Staff dengan role **Moderator** atau **Admin** akan masuk ke dalam ticket dan bertindak sebagai penengah.
6. Moderator akan melampirkan format kesepakatan yang wajib diisi oleh kedua pihak.
7. Seluruh proses negosiasi dan kesepakatan dilakukan di dalam ticket dengan staff sebagai penengah. Proses ini gratis.
8. Jika kesepakatan telah selesai dan transaksi dinyatakan sah, **Helper** akan menutup ticket.

**Transaksi di luar ticket untuk transaksi yang melibatkan rank:**
- Transaksi tersebut tidak dilindungi oleh server.
- Jika terjadi scam, staff tidak akan memproses laporan.
- Kedua pihak menanggung risiko sepenuhnya.
- Jika staff mengetahui adanya transaksi WTT yang melibatkan rank tetapi tanpa ticket, kedua pihak tetap dapat dikenakan warning karena melanggar prosedur keamanan server.

---

### 4. Sanksi Pelanggaran
**Sanksi untuk transaksi tanpa ticket:**
- Pelanggaran pertama yang ketahuan staff: Warning.
- Pelanggaran kedua: Ban sementara 3 hari.
- Pelanggaran ketiga: Ban permanen dari layanan WTT rank atau ban akun.

**Sanksi untuk scam dalam ticket:**
- Ban sementara 7 hari untuk pelaku.
- Staff akan berusaha memulihkan aset yang dirugikan jika memungkinkan.
- Pelaku dicatat dalam daftar hitam WTT server.

**Sanksi tambahan:**
- Jika pelaku sudah memiliki riwayat scam sebelumnya, staff dapat menjatuhkan ban permanen.
- Barang curian atau hasil scam akan disita.

---

### 5. Aturan Khusus Jasa Build ke Rank
Karena jasa build yang imbalannya berupa rank membutuhkan waktu lama, aturan berikut berlaku.

**Perjanjian awal wajib di ticket. Kesepakatan harus mencantumkan:**
- Detail build, termasuk ukuran, gaya, dan deadline jika ada.
- Imbalan, termasuk rank apa, kapan diberikan, dan apakah ada DP.
- Konsekuensi jika salah satu pihak gagal memenuhi.

**Parking hold ticket untuk jasa build:**
- Jika build memakan waktu lebih dari 3 hari, ticket yang sudah dalam kategori \`Parking\` dapat dipertahankan dalam status hold.
- Staff dapat menetapkan masa hold maksimal 14 hari.
- Setelah itu, jika tidak ada kabar, ticket akan ditutup dan perjanjian dianggap batal kecuali ada perpanjangan dari staff.

**Jika penyewa atau pemberi rank tidak membayar setelah build selesai:**
1. Staff akan memeriksa bukti penyelesaian build dari builder.
2. Jika terbukti build selesai sesuai kesepakatan tetapi penyewa tidak memberikan rank, staff akan membekukan lahan yang dibangun hingga penyewa membayar.
3. Jika setelah 7 hari tetap tidak membayar, lahan dapat dipindahkan kepemilikannya ke builder hanya untuk area yang dibangun, bukan seluruh lahan penyewa.

**Jika builder gagal menyelesaikan build setelah menerima DP rank sementara:**
- Penyewa dapat memberikan rank sementara, misalnya Supporter, kepada builder sebagai DP atau untuk mempermudah builder.
- Rank sementara diberikan oleh staff, bukan oleh penyewa langsung.
- Rank sementara akan dicabut setelah build selesai atau jika perjanjian batal.
- Jika builder terbukti gagal memenuhi perjanjian tanpa alasan yang sah seperti menghilang atau tidak mengerjakan, rank sementara akan dicabut.
- Staff dapat memindahkan rank sementara ke akun alt milik penyewa sebagai kompensasi.
- Builder juga dapat dikenakan sanksi tambahan berupa ban sementara atau daftar hitam.

---

### 6. Peran Staff
**Helper:**
- Menyapa pemain, menutup ticket, dan memastikan pemain memantau ticket.
- Mengarahkan ke Moderator jika perlu.

**Moderator ke atas, termasuk Moderator, Admin, dan Owner:**
- Bertindak sebagai penengah resmi.
- Memeriksa bukti, memutuskan sanksi, dan menyelesaikan sengketa.

**Biaya:** Tidak ada biaya untuk layanan WTT melalui ticket.

**Target respons:** Maksimal 2x24 jam, kecuali sedang libur.

---

### 7. Format Bukti dalam Ticket
Setiap ticket WTT yang melibatkan rank wajib mencantumkan pesan kesepakatan yang disetujui oleh kedua belah pihak.

Format minimal:

~~~
Kesepakatan WTT (melibatkan rank) antara:
- Pihak 1: [nama Minecraft & Discord]
- Pihak 2: [nama Minecraft & Discord]

Jenis transaksi: [item/balance/jasa] ↔️ [rank]
Detail:
- [Sebutkan barang/balance/jasa yang diberikan]
- [Sebutkan rank yang diberikan]

Tenggat waktu (jika ada): [tanggal atau "tidak ada"]

Konsekuensi jika gagal: [sesuai aturan server]

Dengan ini kedua pihak menyatakan setuju dan memahami risiko.
~~~

Kedua pihak harus mengetik **"Saya setuju"** di dalam ticket. Staff akan mengonfirmasi dan mengunci pesan tersebut sebagai bukti.

---

### 8. Hubungan dengan Peraturan Server Utama
- Aturan WTT ini merupakan tambahan dari Peraturan Server KandangAlwi, khusus untuk transaksi yang melibatkan rank.
- Untuk transaksi yang tidak melibatkan rank seperti item ↔️ item dan item ↔️ balance, aturan server umum tentang penipuan tetap berlaku.
- Jika ada ketentuan dalam aturan WTT yang bertentangan dengan peraturan server utama, maka peraturan server utama yang berlaku.
- RMT tetap dilarang keras sesuai Pasal 2 Ayat 7 Peraturan Server.
- Donasi ke server adalah satu-satunya transaksi dengan uang asli yang diizinkan.

---

### 9. Penutup
Dengan mengikuti aturan ini, kami berharap semua transaksi WTT yang melibatkan rank berjalan aman, adil, dan nyaman bagi seluruh pemain KandangAlwi.

**Mulai sekarang, untuk setiap transaksi WTT yang melibatkan rank, wajib buka ticket!**

> Peraturan ini dapat berubah sewaktu-waktu dengan pemberitahuan di Discord.
`,
        footer: "KandangAlwi Rules • Pasal 5 dari 5",
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
