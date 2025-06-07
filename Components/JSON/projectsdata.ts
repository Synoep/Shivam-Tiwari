// Replace below project details with your project details. Add all your projects details here as per below object structure, and it will populate it in projects sections.
export const projectsdata = () => {
  return [
    {
      name: "CampusConnect",
      title: "A Personalized Tech Networking & Placement Journey Platform for College Students",
      banner: "/CampusConnect.png",
      logo: "/CampusConnect.png",
      description: [
        "Helps students track their tech journey and connect with seniors and alumni through an intuitive and responsive interface.",
        "Features a dynamic roadmap generator for beginner to advanced levels, aiding effective upskilling.",
        "Includes a chatbot for doubt clearance, a CP leaderboard, and real-time updates on tech events.",
        "Provides data-driven insights for placement cells to assess students beyond academics, ensuring optimized performance with efficient state management."
      ],
      features: [
        "Dynamic Roadmap Generator: Personalized learning and placement preparation plans, from beginner to advanced levels.",
        "Placement Hub: Centralized access to college placement notifications, important dates, and eligibility criteria.",
        "Placement Tips & Resources: Curated strategies and best practices to prepare for interviews, aptitude tests, and coding rounds.",
        "AI-Powered Chatbot: Real-time doubt clearance and placement guidance using OpenAI integration.",
        "Competitive Programming Leaderboard: Ranks students based on CP activity to promote skill development and visibility.",
        "Real-Time Chat System: Enables seamless student-to-student and student-to-alumni communication.",
        "Event & Resource Hub: Delivers tech event updates and supports document/project sharing.",
        "Placement Analytics Dashboard: Offers data-driven insights to placement cells, highlighting students' technical growth beyond academics.",
        "Secure Authentication: JWT-based auth with Supabase and protected routes.",
        "Responsive UI: Mobile-first, animated UI using Tailwind CSS and Framer Motion."
      ],
      tech: ["React", "Node.js","AI", "MongoDB","Tailwind","Typescript","Express.js","WebScraping","Python  "],
      snapshots: ["/CampusConnect.png", "/CampusConnect.png"], // Placeholder snapshots
      github: "https://github.com/Synoep/Campus_Connect",
      live: "https://campusconnect3.netlify.app/",
      others: []
    },
    {
      name: "MEDISEN",
      title: "AI-Powered Disease Predictor with Specialist Mapping",
      banner: "/Medisen.png",
      logo: "/Medisen.png",
      description: [
        "Built a disease prediction system that analyzes user symptoms to predict the most probable disease, along with three other possible conditions.",
        "Improved model accuracy by over 50% through feature optimization, symptom selection refinement, and algorithm tuning.",
        "Categorizes diseases based on symptoms and suggests the relevant medical specialist for consultation.",
        "Designed an intuitive interface for seamless user interaction and accurate real-time predictions."
      ],
      tech: ["Python", "Machine Learning", "Flask", "React", "MongoDB"],
      github: "https://github.com/yourusername/medisen",
      live: null,
      others: []
    },
    {
      name: "Deribit Trading System",
      title: "GoQuant Industry Assignment",
      banner: "/Derbit Trading System.png",
      logo: "/Derbit Trading System.png",
      description: [
        "Developed a high-performance C++ trading system for real-time Deribit TESTNET interaction using WebSocket APIs.",
        "Enabled fast order placement, cancellation, and live orderbook streaming via secure CLI with API authentication.",
        "Achieved sub-50ms round-trip latency through optimized asynchronous I/O and performance monitoring.",
        "Leveraged CMake, Boost, WebSocket++, OpenSSL, and JSON to ensure modularity, security, and network efficiency."
      ],
      tech: ["C++", "WebSocket", "Boost", "OpenSSL", "CMake"],
      github: "https://github.com/yourusername/deribit-trading",
      live: null,
      others: []
    },
    {
      name: "Multi-Agent AI System",
      title: "Intelligent Multi-Agent Collaboration Platform",
      banner: "/Multi-Agents-AISystem.png",
      logo: "/Multi-Agents-AISystem.png",
      description: [
        "Developed a sophisticated multi-agent AI system that enables autonomous agents to collaborate and solve complex tasks.",
        "Implemented advanced communication protocols and decision-making algorithms for seamless agent interaction.",
        "Created a scalable architecture supporting multiple agent types with specialized capabilities.",
        "Integrated real-time monitoring and analytics for system performance optimization."
      ],
      tech: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubernetes", "REST APIs"],
      github: "https://github.com/yourusername/multi-agent-ai",
      live: null,
      others: []
    },
    {
      name: "Bitcoin Hub",
      title: "Cryptocurrency Trading and Analytics Platform Frontend",
      banner: "/Bitcoin Hub.png",
      logo: "/Bitcoin Hub.png",
      description: [
        "Built a comprehensive cryptocurrency trading platform with real-time market data and analytics.",
        "Implemented secure wallet integration and transaction management system.",
        "Developed advanced charting tools and technical analysis indicators for traders.",
        "Created an intuitive user interface for seamless trading experience."
      ],
      tech: ["React", "Redux","Java","Tailwind","Typescript"],
      github: "https://github.com/yourusername/bitcoin-hub",
      live: null,
      others: []
    }
  ];
};
