# Port3Hub

Port3Hub is a community-driven project showcase platform for displaying projects and resources built by passionate community members from around the world in the Port3 ecosystem.

## 🌟 Features

- **Multi-language Support**: Supports English, Traditional Chinese, and Korean
- **Project Showcase**: Display various projects in the Port3 ecosystem
- **Category Filtering**: Filter projects by category (DeFi, NFT, Infrastructure, Tools, Community, Analytics)
- **Search Functionality**: Quickly search and find projects
- **Responsive Design**: Adapts to various device screens
- **GitHub-style UI**: Clean and beautiful GitHub-inspired design

## 🚀 Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm >= 7.0.0 or yarn >= 1.22.0

### Installation

```bash
# Clone the repository
git clone https://github.com/Port3Hub/port3hub_website.git

# Navigate to the project directory
cd port3hub_website

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173`.

### Build

```bash
# Build for production
npm run build
```

The build output will be in the `dist` directory.

### Preview Build

```bash
# Preview the production build
npm run preview
```

## 📁 Project Structure

```
port3hub_website/
├── public/
│   └── locales/          # Multi-language translation files
│       ├── en/           # English
│       ├── zh-TW/        # Traditional Chinese
│       └── ko/           # Korean
├── src/
│   ├── components/       # React components
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Header.tsx    # Header component
│   │   ├── Hero.tsx      # Hero section component
│   │   ├── ProjectCard.tsx   # Project card component
│   │   └── ProjectList.tsx  # Project list component
│   ├── data/
│   │   └── projects.ts   # Project data
│   ├── i18n/
│   │   └── config.ts     # Internationalization configuration
│   ├── types/
│   │   └── project.ts    # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Project configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── vercel.json           # Vercel deployment configuration
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling framework
- **React i18next** - Internationalization
- **React Icons** - Icon library

## 🌍 Multi-language Support

The project supports the following languages:

- 🇺🇸 English (en)
- 🇹🇼 Traditional Chinese (zh-TW)
- 🇰🇷 Korean (ko)

Translation files are located in the `public/locales/` directory. To add a new language:

1. Create a new language directory under `public/locales/`
2. Create a `translation.json` file
3. Add the new language to the `supportedLngs` array in `src/i18n/config.ts`

## 📝 Adding Projects

Add new projects in the `src/data/projects.ts` file:

```typescript
{
  id: 'project-id',
  name: 'Project Name',
  logo: 'https://ui-avatars.com/api/?name=Project+Name&background=0969da&color=ffffff&size=128',
  website: 'https://project-website.com',
  description: 'Project description',
  category: ['DeFi', 'Infrastructure']
}
```

## 🚢 Deployment

### Vercel Deployment

The project is configured for Vercel deployment. Simply push your code to GitHub, and Vercel will automatically deploy it.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist directory to your server
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Links

- [GitHub Repository](https://github.com/Port3Hub/port3hub_website)
- [Port3Hub Organization](https://github.com/Port3Hub)

## 📧 Contact

For questions or suggestions, please contact us via GitHub Issues.

---

© 2026 Port3 Community. All rights reserved.
