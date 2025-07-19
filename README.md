# <img src="frontend/public/ship-wheel.svg" alt="PhoneSay Logo" /> PhoneSay 
## Learn Languages Through Real Conversations: Chat + Video

PhoneSay is an open-source web application designed to connect language learners worldwide through real-time chat and video calls. Practice conversations, make friends, and improve your language skills with native speakers.

🌐 **Live Demo**: [https://phonesay.onrender.com](https://phonesay.onrender.com)

## ✨ Features

- **User Authentication** - Secure signup/login system
- **Profile Customization** - Set your native and learning languages
- **Friend System** - Connect with other language learners
- **Real-time Chat** - Powered by Stream Chat
- **Video Calls** - Practice speaking with Stream Video SDK
- **Smart Matching** - Find partners based on language preferences
- **Theme Customization** - Multiple themes powered by DaisyUI
- **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**:

  - React with Vite
  - TailwindCSS + DaisyUI
  - Stream Chat & Video SDK
  - React Query
  - React Router

- **Backend**:
  - Node.js + Express
  - MongoDB
  - JWT Authentication
  - Stream API Integration

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/cryptasim/PhoneSay.git
cd PhoneSay
```

2. Install dependencies:

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Set up environment variables:

```bash
# Frontend (.env)
VITE_API_URL=your_backend_url
VITE_STREAM_API_KEY=your_stream_api_key

# Backend (.env)
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
```

4. Start the development servers:

```bash
# Frontend
npm run dev

# Backend
npm run dev
```

## 📸 Screenshots

<div align="center">

### 1. Getting Started

![Login Page](frontend/public/README%20IMAGES/LoginPage.png)
_Secure login with email and password_

![Sign Up Page](frontend/public/README%20IMAGES/SignUpPage.png)
_Join PhoneSay - Start your language learning journey_

![Onboarding](frontend/public/README%20IMAGES/OnboardingPage.png)
_Set up your profile, languages, and preferences_

### 2. Core Features

![Themes](frontend/public/README%20IMAGES/ThemesPage.png)
_Customize your experience with multiple themes_

![Home Page](frontend/public/README%20IMAGES/HomePage.png)
_Discover language partners matching your preferences_

![Home With Friends](frontend/public/README%20IMAGES/HomePageWithFriends.png)
_View and interact with your connections_

### 3. Social Features

![Friends Page](frontend/public/README%20IMAGES/FriendsPage.png)
_Manage your language exchange partners_

![Notifications](frontend/public/README%20IMAGES/NotificationsPage.png)
_Track friend requests and activities_

### 4. Communication Tools

![Chat Interface](frontend/public/README%20IMAGES/ChatPage.png)
_Real-time messaging with language partners_

![Video Call](frontend/public/README%20IMAGES/VideoCallPage.png)
_Practice speaking skills through video calls_

</div>

## 🤝 Contributing

PhoneSay is open-source and contributions are highly appreciated! Here's how you can help:

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 👨‍💻 Author

Created by [Asim Kumar Hansda](https://www.linkedin.com/in/asimkumarhansda/)
