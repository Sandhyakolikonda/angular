import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  pdata  = [
    {
      "id": 1,
      "title": "Personalized Fitness & Diet Planner",
      "description": "A dynamic Angular web app styled with Tailwind CSS, offering tailored workout routines and diet plans based on user profiles. Features AI-driven recommendations (via APIs like Edamam),  chat bot.interactive dashboards with progress tracking, and role-based access (JWT). Built with Angular Reactive Forms, modular architecture, and responsive design for seamless cross-device use. Demonstrates full-stack proficiency in health-tech solutions, UX optimization, and third-party integrations.",
      "technologies": [ "Angular", "TypeScript", "HTML", "Tailwindcss", ],
      "image": "path/to/dashboard_screenshot.png",
      "live_demo": "https://sandy2004.netlify.app/",
      "github_repo": "https://github.com/Sandhyakolikonda/angular/blob/master/calories/src/app/app.component.html",
      "highlight": true,
      "creative_aspect": "A user-friendly app with an intuitive, engaging design. Features an interactive onboarding quiz using animated sliders and progress bars styled as fitness trails. Progress is visualized through dynamic illustrations (e.g., growing trees for goals). Workouts include celebratory sound effects, and meal plans offer AR-like recipe previews. Smooth animations and playful interactions make fitness feel personal and motivating."
    },
    {
      "id": 2,
      "title": "Flavor lab",
      "description": "A dynamic recipe hub built with Angular and Tailwind CSS, enabling users to create, explore, and customize dishes with detailed descriptions, calorie counts, and ingredient lists. Features AI-driven meal suggestions, interactive filters (dietary needs, cuisine), and real-time nutritional analysis. Includes a Kitchen Studiofor virtual ingredient swaps and a pantry tracker. Demonstrates full-stack integration , responsive design, and data visualization for health-conscious food innovation.",
      "technologies": [ "Angular", "TypeScript", "Html","Tailwind css","Javascript" ],
      "image": "path/to/whiteboard_screenshot.png",
      "live_demo": "https://sandhya123.netlify.app/",
      "github_repo": "https://github.com/yourusername/collaborative-whiteboard",
      "tags": [ "Real-time", "Collaboration", "WebSockets", "Frontend" ],
      "highlight": true,
      "creative_aspect": "Designed a custom drawing engine using the Canvas API, optimizing for smooth real-time updates and minimal latency. Implemented a unique user presence indicator and intuitive collaboration controls."
    },
    {
      "id": 3,
      "title": "Personalized Recipe Recommendation Engine",
      "description": "Developed a recipe recommendation engine that suggests recipes based on user preferences, dietary restrictions, and available ingredients. Utilized Angular for the frontend and integrated with a backend API for recipe data and recommendations.",
      "technologies": [ "Angular", "TypeScript", "REST API", "NgRx", "Tailwind CSS" ],
      "image": "path/to/recipe_app_screenshot.png",
      "live_demo": "https://recipe-recommender-app.com",
      "github_repo": "https://github.com/yourusername/recipe-recommender",
      "tags": [ "Recommendation Engine", "API Integration", "Frontend" ],
      "highlight": false,
      "creative_aspect": "Implemented a visually appealing and intuitive interface for filtering and exploring recipes. Incorporated features like user ratings and reviews to personalize recommendations further. Focused on a delightful user experience for discovering new recipes."
    },
    {
      "id": 4,
      "title": "Interactive 3D Product Showcase",
      "description": "Created an interactive 3D product showcase using Angular and a 3D rendering library (e.g., Three.js or Babylon.js). Allowed users to rotate, zoom, and explore product features in a visually engaging way.",
      "technologies": [ "Angular", "TypeScript", "Three.js", "GLTF/GLB", "CSS3 Animations" ],
      "image": "path/to/product_showcase_screenshot.png",
      "live_demo": "https://3d-product-showcase.com",
      "github_repo": "https://github.com/yourusername/3d-product-showcase",
      "tags": [ "3D", "Interactive", "Frontend", "Visualization" ],
      "highlight": false,
      "creative_aspect": "Integrated smooth 3D model loading and interactive controls within the Angular framework. Experimented with lighting and animations to highlight product details effectively. Focused on creating a memorable and immersive shopping experience."
    },
    {
      "id": 5,
      "title": "Gamified Learning Platform",
      "description": "Designed and developed a gamified learning platform using Angular, incorporating elements like points, badges, and leaderboards to enhance user engagement. Focused on making learning interactive and fun.",
      "technologies": [ "Angular", "TypeScript", "REST API", "NgRx", "Material UI", "Gamification Principles" ],
      "image": "path/to/learning_platform_screenshot.png",
      "live_demo": "https://gamified-learning.netlify.app",
      "github_repo": "https://github.com/yourusername/gamified-learning-platform",
      "tags": [ "Gamification", "Learning Platform", "Frontend" ],
      "highlight": false,
      "creative_aspect": "Developed engaging game mechanics and visual feedback within the Angular application to motivate learners. Designed a user-friendly interface that seamlessly integrates learning content with gamified elements."
    }
    ];
    isSignin = false;
    constructor() { }
  }


  