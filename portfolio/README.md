# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Performance**: Optimized for fast loading and smooth performance
- **Accessibility**: Built with accessibility best practices
- **Animations**: Beautiful animations using Framer Motion

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Build Tool**: Create React App

## 📱 Sections

1. **Header**: Fixed navigation with smooth scrolling
2. **Hero**: Eye-catching introduction with call-to-action buttons
3. **About**: Personal information and achievements
4. **Skills**: Technical skills with animated progress bars
5. **Projects**: Portfolio of work with project details
6. **Contact**: Contact form and information
7. **Footer**: Social links and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - Personal details and achievements
- `src/components/Skills.tsx` - Your technical skills
- `src/components/Projects.tsx` - Your projects and work
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Social links and footer details

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors: Update the color scheme in `tailwind.config.js`
- Fonts: Modify font families in the config
- Animations: Adjust animations in the config or components

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.tsx`
3. Update navigation links in `src/components/Header.tsx`

## 📧 Contact Form

The contact form is currently set up for frontend only. To make it functional:

1. Set up a backend API endpoint
2. Update the `handleSubmit` function in `Contact.tsx`
3. Consider using services like Netlify Forms, Formspree, or EmailJS

## 🎨 Assets

- Images are sourced from Unsplash (replace with your own)
- Icons from Heroicons
- Fonts from Google Fonts (Inter)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using React and TypeScript**
