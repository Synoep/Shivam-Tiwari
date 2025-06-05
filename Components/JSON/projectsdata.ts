// Replace below project details with your project details. Add all your projects details here as per below object structure, and it will populate it in projects sections.
export const projectsdata = () => {
  return [
    {
      name: "CampusConnect",
      title: "Networking Platform for College Tech Communities",
      banner: "/projects/campusconnect.png",
      logo: "/projects/campusconnect-logo.png",
      description: [
        "Helps students track their tech journey and connect with seniors and alumni through an intuitive and responsive interface.",
        "Features a dynamic roadmap generator for beginner to advanced levels, aiding effective upskilling.",
        "Includes a chatbot for doubt clearance, a CP leaderboard, and real-time updates on tech events.",
        "Provides data-driven insights for placement cells to assess students beyond academics, ensuring optimized performance with efficient state management."
      ],
      tech: ["React", "Node.js", "MongoDB", "WebSocket", "Redux"],
      github: "https://github.com/yourusername/campusconnect",
      live: null
    },
    {
      name: "Deribit Trading System",
      title: "GoQuant Industry Assignment",
      banner: "/projects/deribit.png",
      logo: "/projects/deribit-logo.png",
      description: [
        "Developed a high-performance C++ trading system for real-time Deribit TESTNET interaction using WebSocket APIs.",
        "Enabled fast order placement, cancellation, and live orderbook streaming via secure CLI with API authentication.",
        "Achieved sub-50ms round-trip latency through optimized asynchronous I/O and performance monitoring.",
        "Leveraged CMake, Boost, WebSocket++, OpenSSL, and JSON to ensure modularity, security, and network efficiency."
      ],
      tech: ["C++", "WebSocket", "Boost", "OpenSSL", "CMake"],
      github: "https://github.com/yourusername/deribit-trading",
      live: null
    },
    {
      name: "MEDISEN",
      title: "Overall Disease Predictor",
      banner: "/projects/medisen.png",
      logo: "/projects/medisen-logo.png",
      description: [
        "Built a disease prediction system that analyzes user symptoms to predict the most probable disease, along with three other possible conditions.",
        "Improved model accuracy by over 50% through feature optimization, symptom selection refinement, and algorithm tuning.",
        "Categorizes diseases based on symptoms and suggests the relevant medical specialist for consultation.",
        "Designed an intuitive interface for seamless user interaction and accurate real-time predictions."
      ],
      tech: ["Python", "Machine Learning", "Flask", "React", "MongoDB"],
      github: "https://github.com/yourusername/medisen",
      live: null
    }
  ];
};
