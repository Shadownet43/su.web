# Spiritual University Website

A modern, elegant website for Spiritual University featuring smooth animations, responsive design, and an intuitive user interface. The website is designed to provide information about spiritual education programs, mentors, events, and facilitate user engagement.

## Features

- Single page design with smooth scroll animations
- Modern and spiritual-themed UI with elegant color scheme
- Responsive layout for all devices
- Custom cursor and smooth transitions
- Interactive sections with hover effects
- Contact form with validation
- Particle animations and mandala effects
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- GSAP (GreenSock Animation Platform)
- Intersection Observer API
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)

## Project Structure

```
spiritual-university/
├── index.html
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── animations.js
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── logo-white.png
│   │   ├── favicon.png
│   │   ├── mandala.png
│   │   ├── program-*.jpg
│   │   ├── mentor-*.jpg
│   │   └── testimonial-*.jpg
│   └── fonts/
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/spiritual-university.git
   ```

2. Navigate to the project directory:
   ```bash
   cd spiritual-university
   ```

3. Set up a local development server:
   - You can use any local server of your choice (e.g., Live Server in VS Code)
   - Or use Python's built-in server:
     ```bash
     python -m http.server 8000
     ```

4. Open your browser and visit:
   ```
   http://localhost:8000
   ```

## Required Assets

Before running the website, ensure you have the following assets in place:

1. Logo images:
   - `assets/images/logo.png` (for header)
   - `assets/images/logo-white.png` (for footer)
   - `assets/images/favicon.png`

2. Background images:
   - `assets/images/mandala.png`

3. Program images:
   - `assets/images/program-1.jpg`
   - `assets/images/program-2.jpg`
   - `assets/images/program-3.jpg`
   - `assets/images/program-4.jpg`

4. Mentor images:
   - `assets/images/mentor-1.jpg`
   - `assets/images/mentor-2.jpg`
   - `assets/images/mentor-3.jpg`

5. Testimonial images:
   - `assets/images/testimonial-1.jpg`

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Performance Optimization

The website implements several optimization techniques:
- Lazy loading for images
- Minified CSS and JavaScript
- Optimized animations for performance
- Responsive images
- Efficient asset loading

## Customization

You can customize the website by:

1. Modifying color schemes in `css/style.css`:
   ```css
   :root {
       --primary-color: #6B46C1;
       --secondary-color: #2C5282;
       /* ... other color variables ... */
   }
   ```

2. Adjusting animations in `css/animations.css` and `js/animations.js`

3. Updating content in `index.html`

4. Modifying layout and responsive breakpoints in `css/style.css`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com
Project Link: https://github.com/your-username/spiritual-university 