import lakeside1 from "../assets/lakeside1.jpg";
import lakeside2 from "../assets/lakeside2.jpg";
import lakeside3 from "../assets/lakeside3.jpg";
import chatbot from "../assets/chatbot.png";
import calorieHome from "../assets/calorie-home.png";
import calorieFoods from "../assets/calorie-foods.png";
import calorieRecommendation from "../assets/calorie-recommendation.png";

export const projects = [
  {
    title: "Mobile Attendance System",
    type: "mobile",
    description:
      "A Flutter-based mobile attendance application utilizing geolocation and GPS to record real-time staff presences within a 50m radius fence.",
    highlight: "95.24% accuracy, 100% precision, 94.44% recall, 100% specificity",
    tags: ["Flutter", "Dart", "Geolocation", "REST API"],
    images: [lakeside1, lakeside2, lakeside3],
    link: null,
  },
  {
    title: "NLP Chatbot",
    type: "web",
    description:
      "A public service information chatbot designed for Desa Borobudur, utilizing PyTorch, Flask, and Google Sheets to handle administrative, tourism, and village queries.",
    tags: ["Python", "PyTorch", "Flask", "NLP", "Google Sheets"],
    images: chatbot,
    link: null,
  },
  {
    title: "Calorie Counter Application",
    type: "mobile",
    description:
      "A calorie-tracking application that calculates BMI-based nutrition targets from user profile information and gives personalized daily calorie recommendations, instead of relying on a fixed calorie target.",
    tags: ["Flutter", "Dart", "Firebase"], 
    images: [calorieFoods, calorieHome, calorieRecommendation],
    link: null,
  },
];
