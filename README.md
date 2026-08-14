<div align="center">
<h1>PIMXPORTAL</h1>
<p><strong>Bilingual Visual Gateway to the PIMX Project Ecosystem</strong></p>
</div>

[![Persian Description](https://img.shields.io/badge/Read-Persian%20Description-0A66C2?style=for-the-badge)](#persian-description)
[![Website](https://img.shields.io/badge/Live-pimxportal.pages.dev-0ea5e9?style=for-the-badge)](https://pimxportal.pages.dev/)

---

## 🌐 Live Website

**Production URL:** [https://pimxportal.pages.dev/](https://pimxportal.pages.dev/)

---

## 🚀 What is PIMXPORTAL?

PIMXPORTAL is a modern, **bilingual (EN/FA)** visual directory for exploring the PIMX project ecosystem. Instead of presenting a conventional list of links, it turns every destination into an independent poster-style object with its own color, identity, purpose, and direct route.

The portal brings the main PIMX portfolio, utilities, experiments, privacy tools, and support page together in one responsive experience.

### Key Capabilities

- 🌍 **Bilingual Interface** with complete English and Persian content
- ↔️ **Native RTL/LTR Support** with instant language switching
- 🧭 **Nine Independent Destinations** across the PIMX ecosystem
- 🎨 **Editorial Poster Interface** inspired by Swiss print design and neo-brutalism
- 📱 **Fully Responsive Layout** for desktop, tablet, and mobile
- 💾 **Persistent Language Preference** using browser LocalStorage
- 🔗 **Direct External Navigation** with accessible labels and safe new-tab behavior
- 📊 **Optional Analytics Integration** controlled entirely through environment variables

---

## ✨ Core Features

### 🧭 Ecosystem Navigation

- A single gateway to the complete PIMX project family
- Numbered poster navigation for fast visual scanning
- Clear role labels for every destination
- Independent links that open each project in a separate tab
- Dedicated support route for backing future PIMX projects

### 🎨 Visual Experience

- Warm paper-inspired background and print texture
- High-contrast typography and hard editorial shadows
- Distinct color identity for every project poster
- Responsive hover, focus, and movement states
- Animated marquee, ticket-style support section, and poster composition
- Reduced-motion support for users who prefer less animation

### 🌐 Multilingual Support

- Complete English and Persian interface copy
- Automatic document direction updates between `ltr` and `rtl`
- Persian-friendly typography using Vazirmatn
- English display typography using Archivo Black and IBM Plex Mono
- Language selection stored locally between visits

### 🛡️ Reliability & Accessibility

- React error boundary for graceful failure handling
- Semantic links, buttons, headings, and navigation regions
- Accessible labels for icon-based controls
- Keyboard-visible interactive states
- Client-side fallback route for unknown pages

---

## 🗺️ PIMX Destinations

| No. | Project | Purpose | Live URL |
|-----|---------|---------|----------|
| **01** | **PIMX** | Main portfolio | [pimx.pages.dev](https://pimx.pages.dev/) |
| **02** | **PIMX SATS** | Satellite and orbit tracker | [pimxsats.pages.dev](https://pimxsats.pages.dev/) |
| **03** | **PIMX MORPH** | File converter | [pimxmorph.pages.dev](https://pimxmorph.pages.dev/) |
| **04** | **PIMX FAIL** | Startup lesson archive | [pimxfail.pages.dev](https://pimxfail.pages.dev/) |
| **05** | **PIMX PASS DNS** | DNS utility | [pimxpassdns.pages.dev](https://pimxpassdns.pages.dev/) |
| **06** | **PIMX MOJI** | Text art laboratory | [pimxmoji.pages.dev](https://pimxmoji.pages.dev/) |
| **07** | **PIMX VEIL** | Private vault and steganography tool | [pimxveil.pages.dev](https://pimxveil.pages.dev/) |
| **08** | **PIMX NODE** | Direct P2P file transfer | [pimxnode.pages.dev](https://pimxnode.pages.dev/) |
| **09** | **PIMX WIDE** | Secure multilingual text space | [pimxwide.pages.dev](https://pimxwide.pages.dev/) |

Support is available through [pimxsupport.pages.dev](https://pimxsupport.pages.dev/).

---

## 🔐 Data & Privacy Model

PIMXPORTAL is primarily a static navigation experience and does not require user accounts, forms, or a database.

### Stored Only in the Browser

- Selected interface language (`en` or `fa`)

### Not Collected by the Core Application

- Personal information
- Passwords or authentication credentials
- Uploaded files
- Project browsing history

Optional analytics are loaded only when both `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` are configured at build time.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-based user interface |
| **TypeScript** | Type-safe application development |
| **Vite 7** | Build tool and development server |
| **Tailwind CSS 4** | Utility styling foundation |
| **Radix UI** | Accessible UI primitives |
| **Lucide React** | Interface icons |
| **Wouter** | Lightweight client-side routing |
| **Framer Motion** | Motion and interaction utilities |
| **Express** | Production static server |
| **pnpm** | Dependency and workspace management |
| **Cloudflare Pages** | Hosting and continuous deployment |

---

## 💻 Local Development

### Prerequisites

- Node.js **20.19+** or **22.12+**
- pnpm **10+**

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MOHAMMADREZAABEDINPOOR/PIMX_PORTAL.git
   cd PIMX_PORTAL
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open your browser at [http://localhost:3000](http://localhost:3000).

4. **Run the TypeScript check:**

   ```bash
   pnpm check
   ```

5. **Build for production:**

   ```bash
   pnpm build
   ```

6. **Run the production server:**

   ```bash
   pnpm start
   ```

---

## ☁️ Cloudflare Pages Deployment

### Git Integration Settings

Connect this repository to Cloudflare Pages and use the following build configuration:

| Setting | Value |
|---------|-------|
| **Framework preset** | Vite |
| **Build command** | `pnpm build` |
| **Build output directory** | `dist/public` |
| **Root directory** | `/` |
| **Node.js version** | `20.19+` recommended |

The application is static on Cloudflare Pages. The Express bundle generated at `dist/index.js` is intended for conventional Node.js hosting and is not part of the Pages output directory.

### Optional Direct Upload

```bash
npx wrangler pages deploy dist/public --project-name=pimxportal
```

### Optional Analytics Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_ANALYTICS_ENDPOINT` | No | Base URL of the analytics script service |
| `VITE_ANALYTICS_WEBSITE_ID` | No | Website identifier used by the analytics service |

The site works normally when these variables are not defined.

---

## 📁 Project Structure

```text
PIMX_PORTAL/
├── client/
│   ├── index.html                 # HTML document and page metadata
│   ├── public/                    # Static public assets
│   └── src/
│       ├── App.tsx                # Application shell and routes
│       ├── main.tsx               # React entry and optional analytics loader
│       ├── index.css              # Complete visual and responsive system
│       ├── pages/
│       │   ├── Home.tsx           # Bilingual portal experience
│       │   └── NotFound.tsx       # Fallback route
│       ├── components/            # Shared and accessible UI components
│       ├── contexts/              # Theme context
│       ├── hooks/                 # Reusable React hooks
│       └── lib/                   # Shared client utilities
├── server/
│   └── index.ts                   # Express production static server
├── shared/
│   └── const.ts                   # Shared constants
├── patches/
│   └── wouter@3.7.1.patch         # Route discovery patch
├── vite.config.ts                 # Vite, Tailwind, aliases, and build output
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Scripts and dependencies
└── pnpm-lock.yaml                 # Reproducible dependency lockfile
```

---

## 🎭 Design Direction

**Movement:** Swiss editorial poster design combined with neo-brutalist print objects.

**Core visual language:**

- Warm paper canvas with visible print texture
- Cobalt blue, lime, red, purple, orange, pink, mint, yellow, and ink-black poster identities
- Hard borders and offset shadows instead of glass effects
- Large editorial typography with compact technical labels
- Asymmetric composition that becomes a clear vertical sequence on mobile

The interface is designed as a living printed index rather than a conventional dashboard or card grid.

---

## ✅ Validation

Before deployment, run:

```bash
pnpm check
pnpm build
```

Both commands must finish successfully before publishing a production deployment.

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 💬 Support & Contact

For issues, questions, or suggestions, open an issue in this repository. To support the wider PIMX ecosystem, visit [pimxsupport.pages.dev](https://pimxsupport.pages.dev/).

---

<a id="persian-description"></a>

# PIMXPORTAL

## توضیحات فارسی

PIMXPORTAL یک درگاه تصویری **دوزبانه فارسی و انگلیسی** برای مشاهده و ورود به اکوسیستم پروژه‌های PIMX است. این وب‌سایت به‌جای نمایش یک فهرست ساده از لینک‌ها، هر پروژه را به‌شکل یک پوستر مستقل با رنگ، هویت، کاربرد و مسیر اختصاصی نمایش می‌دهد.

این پورتال، وب‌سایت اصلی PIMX، ابزارها، تجربه‌های خلاقانه، پروژه‌های حریم خصوصی و صفحه حمایت را در یک رابط واکنش‌پذیر کنار هم قرار می‌دهد.

### ✨ ویژگی‌های اصلی

- 🌍 **رابط کامل دوزبانه** به زبان فارسی و انگلیسی
- ↔️ **پشتیبانی واقعی از RTL و LTR** با تغییر سریع زبان
- 🧭 **دسترسی به ۹ مقصد مستقل** از مجموعه پروژه‌های PIMX
- 🎨 **طراحی پوستر ادیتوریال** با الهام از چاپ سوئیسی و نئوبروتالیسم
- 📱 **طراحی کاملاً واکنش‌پذیر** برای دسکتاپ، تبلت و موبایل
- 💾 **ذخیره زبان انتخاب‌شده** در LocalStorage مرورگر
- 🔗 **بازشدن مستقل پروژه‌ها** همراه با برچسب‌های دسترس‌پذیر
- 📊 **تحلیل‌گر اختیاری** که فقط با متغیرهای محیطی فعال می‌شود

### 🧭 ناوبری اکوسیستم

- یک نقطه ورود مشترک برای خانواده پروژه‌های PIMX
- پوسترهای شماره‌گذاری‌شده برای پیدا کردن سریع مقصد
- نمایش کاربرد هر پروژه در پایین پوستر
- بازشدن هر پروژه در تب جداگانه
- بخش مستقل حمایت برای کمک به توسعه پروژه‌های آینده

### 🎨 تجربه بصری

- پس‌زمینه کاغذی گرم با بافت چاپی
- تایپوگرافی پرکنتراست و سایه‌های سخت ادیتوریال
- هویت رنگی متفاوت برای هر پروژه
- حالت‌های واکنش‌گرا برای hover، focus و حرکت
- نوار متحرک، بخش حمایت شبیه بلیت و ترکیب پوسترهای نامتقارن
- پشتیبانی از حالت کاهش حرکت برای کاربران حساس به انیمیشن

### 🌐 پشتیبانی چندزبانه

- متن کامل رابط به فارسی و انگلیسی
- تغییر خودکار جهت سند بین `rtl` و `ltr`
- استفاده از فونت Vazirmatn برای متن فارسی
- استفاده از Archivo Black و IBM Plex Mono برای تایپوگرافی انگلیسی
- نگهداری انتخاب زبان بین مراجعه‌های مختلف

### 🛡️ پایداری و دسترس‌پذیری

- Error Boundary برای مدیریت خطاهای رابط
- ساختار معنایی برای لینک‌ها، دکمه‌ها و عنوان‌ها
- برچسب دسترس‌پذیر برای کنترل‌های آیکونی
- وضعیت focus قابل‌مشاهده برای کار با کیبورد
- صفحه جایگزین برای مسیرهای ناشناخته

---

## 🗺️ مقصدهای PIMX

| شماره | پروژه | کاربرد | آدرس |
|-------|--------|--------|-------|
| **۰۱** | **PIMX** | پورتفولیوی اصلی | [pimx.pages.dev](https://pimx.pages.dev/) |
| **۰۲** | **PIMX SATS** | ره‌گیر ماهواره و مدار | [pimxsats.pages.dev](https://pimxsats.pages.dev/) |
| **۰۳** | **PIMX MORPH** | تبدیل فایل | [pimxmorph.pages.dev](https://pimxmorph.pages.dev/) |
| **۰۴** | **PIMX FAIL** | آرشیو تجربه‌ها و شکست‌های استارتاپی | [pimxfail.pages.dev](https://pimxfail.pages.dev/) |
| **۰۵** | **PIMX PASS DNS** | ابزار DNS | [pimxpassdns.pages.dev](https://pimxpassdns.pages.dev/) |
| **۰۶** | **PIMX MOJI** | آزمایشگاه هنر متنی | [pimxmoji.pages.dev](https://pimxmoji.pages.dev/) |
| **۰۷** | **PIMX VEIL** | گاوصندوق خصوصی و ابزار استگانوگرافی | [pimxveil.pages.dev](https://pimxveil.pages.dev/) |
| **۰۸** | **PIMX NODE** | انتقال مستقیم فایل به‌صورت P2P | [pimxnode.pages.dev](https://pimxnode.pages.dev/) |
| **۰۹** | **PIMX WIDE** | فضای امن متن چندزبانه | [pimxwide.pages.dev](https://pimxwide.pages.dev/) |

صفحه حمایت از مجموعه در [pimxsupport.pages.dev](https://pimxsupport.pages.dev/) در دسترس است.

---

## 🔐 مدل داده و حریم خصوصی

PIMXPORTAL در اصل یک تجربه ناوبری استاتیک است و برای استفاده از آن نیازی به حساب کاربری، فرم یا دیتابیس نیست.

### اطلاعات ذخیره‌شده فقط در مرورگر

- زبان انتخاب‌شده رابط (`fa` یا `en`)

### اطلاعاتی که برنامه اصلی جمع‌آوری نمی‌کند

- اطلاعات شخصی
- رمز عبور یا اطلاعات ورود
- فایل‌های آپلودشده
- تاریخچه مشاهده پروژه‌ها

تحلیل‌گر فقط زمانی بارگذاری می‌شود که هر دو متغیر `VITE_ANALYTICS_ENDPOINT` و `VITE_ANALYTICS_WEBSITE_ID` هنگام build تعریف شده باشند.

---

## 🛠️ پشته تکنولوژی

| تکنولوژی | کاربرد |
|----------|--------|
| **React 19** | ساخت رابط مبتنی بر کامپوننت |
| **TypeScript** | توسعه با تایپ ایمن |
| **Vite 7** | ابزار build و سرور توسعه |
| **Tailwind CSS 4** | زیرساخت استایل‌دهی |
| **Radix UI** | کامپوننت‌های پایه دسترس‌پذیر |
| **Lucide React** | آیکون‌های رابط |
| **Wouter** | مسیریابی سبک سمت کلاینت |
| **Express** | سرو فایل‌های نسخه production |
| **pnpm** | مدیریت وابستگی‌ها |
| **Cloudflare Pages** | میزبانی و انتشار خودکار |

---

## 💻 راه‌اندازی محلی

### پیش‌نیازها

- Node.js نسخه **20.19+** یا **22.12+**
- pnpm نسخه **10+**

### مراحل اجرا

1. **دریافت پروژه:**

   ```bash
   git clone https://github.com/MOHAMMADREZAABEDINPOOR/PIMX_PORTAL.git
   cd PIMX_PORTAL
   ```

2. **نصب وابستگی‌ها:**

   ```bash
   pnpm install
   ```

3. **اجرای سرور توسعه:**

   ```bash
   pnpm dev
   ```

   آدرس محلی: [http://localhost:3000](http://localhost:3000)

4. **بررسی TypeScript:**

   ```bash
   pnpm check
   ```

5. **ساخت نسخه production:**

   ```bash
   pnpm build
   ```

6. **اجرای نسخه production:**

   ```bash
   pnpm start
   ```

---

## ☁️ انتشار روی Cloudflare Pages

تنظیمات اتصال GitHub به Cloudflare Pages:

| تنظیم | مقدار |
|-------|-------|
| **Framework preset** | Vite |
| **Build command** | `pnpm build` |
| **Build output directory** | `dist/public` |
| **Root directory** | `/` |
| **Node.js version** | `20.19+` توصیه می‌شود |

نسخه Cloudflare Pages کاملاً استاتیک است. فایل `dist/index.js` برای میزبانی معمولی Node.js ساخته می‌شود و داخل خروجی Pages قرار نمی‌گیرد.

برای انتشار مستقیم نیز می‌توان از دستور زیر استفاده کرد:

```bash
npx wrangler pages deploy dist/public --project-name=pimxportal
```

---

## 📄 مجوز

این پروژه تحت [مجوز MIT](LICENSE) منتشر شده است.

---

## 🤝 مشارکت

برای مشارکت در پروژه:

1. ریپو را Fork کنید
2. یک branch جدید بسازید
3. تغییرات را commit کنید
4. branch را push کنید
5. یک Pull Request باز کنید

---

## 💬 پشتیبانی و ارتباط

برای گزارش مشکل یا پیشنهاد، یک Issue در همین ریپو ثبت کنید. برای حمایت از مجموعه PIMX نیز می‌توانید به [pimxsupport.pages.dev](https://pimxsupport.pages.dev/) مراجعه کنید.

---

**Made with ❤️ by [Mohammad Reza Abedinpoor](https://github.com/MOHAMMADREZAABEDINPOOR)**
