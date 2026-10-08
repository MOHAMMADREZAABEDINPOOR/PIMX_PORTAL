<div align="center">

<img src="assets/readme/hero.gif" width="1200" alt="PIMX PORTAL: a luminous gateway with distinct tool destinations" />

**[English](README.md) · [فارسی](README.fa.md)**

</div>

# 🌀 PIMX PORTAL

<!-- pimx-live-site:start -->
## Live website

**[Open PIMX_PORTAL ↗](https://pimxportal.pages.dev/)**
<!-- pimx-live-site:end -->

A bilingual visual directory for the PIMX ecosystem. Distinct project posters lead visitors to individual tools and a support destination.

[GitHub](https://github.com/MOHAMMADREZAABEDINPOOR/PIMX_PORTAL) · [PIMX / Profile](https://github.com/MOHAMMADREZAABEDINPOOR) · [Static artwork](assets/readme/hero.png)

| At a glance | Details |
|:---|:---|
| 🌀 Experience | Web application / browser experience |
| 🧰 Built with | `React` · `Vite` · `TypeScript` · `Express` |
| 🌐 Documentation | [English](README.md) · [فارسی](README.fa.md) |

[✨ Features](#features) · [🚀 Getting started](#getting-started) · [⚙️ Configuration](#configuration) · [🌍 Deployment](#deployment)

---

<a id="features"></a>

## ✨ Features

| Area | Included capability |
|:---|:---|
| ⚡ Workflow | Individual project posters and direct destination links |
| 🌐 Experience | English/Persian copy with LTR/RTL layouts |
| ⚡ Workflow | React components with motion and responsive styling |
| 🔌 Integration | Optional Express server for the compiled site |

<a id="stack"></a>

## 🧰 Stack

| Tool | Version / source |
|---|---|
| React | `^19.2.1` |
| Vite | `^7.1.7` |
| TypeScript | `5.6.3` |
| Express | `^4.21.2` |
| Framer Motion | `^12.23.22` |
| Tailwind CSS | `^4.1.14` |

<a id="getting-started"></a>

## 🚀 Getting started

Node.js 22.12+ and the package manager declared in package.json. Install dependencies from the checked-in lockfile where available.

```bash
git clone https://github.com/MOHAMMADREZAABEDINPOOR/PIMX_PORTAL.git
cd PIMX_PORTAL

pnpm install --frozen-lockfile
pnpm run dev
```

<a id="configuration"></a>

## ⚙️ Configuration

These names are found in the example configuration or source; not all are required. Check their defaults/usage in those files and supply secrets only in your local or hosting environment.

| Name | Role |
|---|---|
| `BUILT_IN_FORGE_API_KEY` | Credential/connection setting; keep private |
| `BUILT_IN_FORGE_API_URL` | Application setting; inspect its definition |
| `PORT` | Application setting; inspect its definition |

<a id="usage"></a>

## 🎯 Usage

Open the project index and select a poster. Edit the projects array in client/src/pages/Home.tsx to add or change destinations.

<a id="project-structure"></a>

## 🗂️ Project structure

| Path | Role |
|---|---|
| [`assets/`](assets/) | Brand/media/README assets |
| [`client/`](client/) | Browser application |
| [`server/`](server/) | Server implementation |
| [`components.json`](components.json) | Project entry/configuration file |
| [`package.json`](package.json) | Project entry/configuration file |
| [`tsconfig.json`](tsconfig.json) | Project entry/configuration file |
| [`tsconfig.node.json`](tsconfig.node.json) | Project entry/configuration file |

<a id="commands-and-checks"></a>

## 🧪 Commands and checks

| Command | Purpose |
|:---|:---|
| `pnpm run dev` | 🧑‍💻 Development server |
| `pnpm run build` | 📦 Production build |
| `pnpm run start` | ▶️ Application server |
| `pnpm run preview` | 👀 Preview a build |
| `pnpm run check` | 🔎 Source checks |

```bash
pnpm run dev
pnpm run build
pnpm run start
pnpm run preview
pnpm run check
```

These commands are declared in package.json; the list is not a test execution report. Test commands may need a browser, service or prepared database.

<a id="deployment"></a>

## 🌍 Deployment

Deploy the build according to its architecture: server-backed projects need a Node process; static Vite frontends can host dist. Pages functions, KV or D1 require separate configuration.

<a id="limitations"></a>

## 📌 Limitations

This is a directory; linked applications run separately. External URLs can change and should be checked before publication.

<a id="troubleshooting"></a>

## 🛠️ Troubleshooting

- Missing packages: install dependencies using the project’s package manager.
- API/network failure: check the configured origin, provider and hosting bindings.
- Old assets: rebuild when a build script exists, then clear the browser cache.

<a id="contributing"></a>

## 🤝 Contributing

Create a focused branch, verify the affected behavior and explain the change clearly. Keep private data, build outputs and local databases out of commits.

<a id="license"></a>

## 📄 License

The repository license text is in the following file; third-party resources and dependencies can have different terms: [LICENSE](LICENSE).

---

Part of **PIMX** · Documentation in English and Persian.

---

<div align="center">

🌀 **PIMX PORTAL** · [English](README.md) · [فارسی](README.fa.md)

</div>
