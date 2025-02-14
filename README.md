# Robin Francis - Portfolio

A modern, responsive portfolio website showcasing my projects, achievements, and skills. Built with modern web technologies and best practices for performance and user experience.

## 🌟 Features

### 💻 Technical Features
- Responsive design that works on all devices
- Dark/Light theme with smooth transitions
- Custom cursor trail effect
- Progressive Web App (PWA) support
- Optimized performance with lazy loading
- SEO optimized with meta tags and Schema.org markup
- Custom animations and transitions
- Mobile-first approach
- Glass morphism UI elements

### 🎯 Content Sections
- Hero section with multilingual name display
- Mission statement
- About me with key highlights
- Interactive resume timeline
- Project showcase
- Blog with modal view
- Contact form with EmailJS integration

### 🚀 Performance Optimizations
- Lazy loading images
- Minified CSS and JavaScript
- Optimized asset loading
- Browser caching
- Service Worker for offline support
- Content delivery optimization

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- EmailJS for contact form
- Anime.js for animations
- Font Awesome icons
- Google Fonts
- Service Workers for PWA

## 📦 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/robinfrancis186/robinfrancis186.github.io.git
```

2. Navigate to the project directory:
```bash
cd robinfrancis186.github.io
```

3. Open index.html in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Update the EmailJS configuration in `js/script.js`:
```javascript
emailjs.init("YOUR_USER_ID");
```

### Google Analytics Setup
1. Replace the Google Analytics ID in `index.html`:
```html
gtag('config', 'YOUR_GA_ID');
```

## 📱 PWA Support

The website is PWA-enabled with:
- Service Worker for offline functionality
- Manifest file for installation
- Cache management
- Push notifications support

## 🎨 Customization

### Theme Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --gradient-start: #2563eb;
    --gradient-end: #60a5fa;
    /* ... other variables */
}
```

### Content
Update the content in `index.html` and blog posts in `js/blog.js`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/robinfrancis186/robinfrancis186.github.io/issues).

## 👤 Author

**Robin Francis**
- GitHub: [@robinfrancis186](https://github.com/robinfrancis186)
- LinkedIn: [Robin Francis](https://www.linkedin.com/in/robin-francis-b43565175)
- Email: robinfrancis186@gmail.com

## 🙏 Acknowledgments

- IEEE Community
- Sahrdaya College of Engineering & Technology
- All mentors and supporters

## 📈 Future Updates

- [ ] Add more interactive elements
- [ ] Implement blog comments system
- [ ] Add project filtering
- [ ] Enhance accessibility features
- [ ] Add more language support 