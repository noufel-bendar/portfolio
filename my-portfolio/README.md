# Bendar Noufel - Portfolio Website

A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS. Features smooth animations, dark mode support, and a professional design.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Contact Form**: Integrated contact form with email functionality
- **Project Showcase**: Dedicated section to display your work with live demo modals
- **Performance Optimized**: Built with Vite for fast development and building

## 🚀 Technologies Used

- **Frontend**: React 19, JSX
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and theme toggle
│   ├── Hero.jsx            # Hero section with introduction
│   ├── Projects.jsx        # Projects showcase
│   ├── Contact.jsx         # Contact form and information
│   ├── ContactModal.jsx    # Quick contact modal
│   ├── Footer.jsx          # Footer with links
│   └── InitialsLogo.jsx    # Animated logo component
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
├── index.css              # Global styles and Tailwind imports
└── App.css                # Additional component styles
```

## 🎨 Customization

### Personal Information
- Update your name, title, and description in `Hero.jsx`
- Modify contact information in `Contact.jsx`
- Update social media links in `Contact.jsx`

### Projects
- Edit the projects array in `Projects.jsx`
- Add your own project images, descriptions, and technologies
- Update project links to point to your actual work

### Styling
- Modify colors in `tailwind.config.js`
- Update CSS variables in `index.css`
- Customize animations and transitions

### Logo
- Edit the `InitialsLogo.jsx` component to change your initials
- Modify colors and effects as needed

## 🌟 Key Features Explained

### Dark Mode
The portfolio includes a sophisticated dark mode system that:
- Automatically detects user preference
- Persists choice in localStorage
- Smoothly transitions between themes

### Animations
All animations are powered by Framer Motion:
- Staggered entrance animations
- Hover effects on interactive elements
- Smooth page transitions
- Performance-optimized animations

### Responsive Design
The portfolio is fully responsive with:
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized typography scaling

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: bendarnoufel@gmail.com
- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn Profile]

---

Built with ❤️ using React and Tailwind CSS

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy using Vercel Dashboard**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect it's a Vite project
   - Deploy with default settings

3. **Deploy using Vercel CLI**:
```bash
vercel
```

4. **Environment Variables** (if needed):
   - Add any environment variables in the Vercel dashboard
   - The project is configured to work without additional environment variables

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist` directory, ready for deployment to any static hosting service.
