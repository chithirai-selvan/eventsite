const events = [
  {
    id: "1",
    title: "December Meetup",
    date: "Saturday, December 28, 2024",
    location: "Tambaram, Chennai",
    description:
      "Join us for an exciting December meetup featuring lightning talks, engaging discussions, and networking opportunities.",
    schedule: [
      "Open slot 1",
      "Open slot 2",
      "Open slot 3",
      "Lightning talks (10 mins each)",
    ],
    participationDetails:
      "If you are interested in presenting a talk (20 mins) or a lightning talk (10 mins), please add a comment to this page with your topic and description.",
    attendees: [
      { name: "Rengaraj", photo: "/assets/attendees/rengaraj.jpg" },
      { name: "Shrayas", photo: "/assets/attendees/shrayas.jpg" },
    ],
    photos: ["/assets/event-img1.jpg", "/assets/event-img2.jpg"],
    image: "/assets/event-img.jpg",
  },
  {
    id: "2",
    title: "AI and ML Workshop",
    date: "Sunday, January 12, 2025",
    location: "Anna Nagar, Chennai",
    description:
      "Explore the basics of AI and ML in this hands-on workshop with live coding sessions.",
    schedule: [
      "Introduction to AI and ML",
      "Live Coding: Building a Simple ML Model",
      "Q&A and Networking",
    ],
    participationDetails:
      "If you would like to present your project or share your experience, feel free to join the discussion session.",
    attendees: [
      { name: "Amit", photo: "/assets/attendees/amit.jpg" },
      { name: "Nisha", photo: "/assets/attendees/nisha.jpg" },
    ],
    photos: ["/assets/event-img3.jpg", "/assets/event-img4.jpg"],
    image: "/assets/event-img(2).jpg",
  },
  {
    id: "3",
    title: "React Native Bootcamp",
    date: "Saturday, February 1, 2025",
    location: "T Nagar, Chennai",
    description:
      "A comprehensive bootcamp on building mobile apps using React Native. Perfect for developers looking to expand their skillset.",
    schedule: [
      "Introduction to React Native",
      "Setting Up Your Development Environment",
      "Building a Basic Mobile App",
      "Q&A and Networking",
    ],
    participationDetails:
      "If you have any projects or questions about React Native, feel free to bring them up during the bootcamp.",
    attendees: [
      { name: "Karthik", photo: "/assets/attendees/karthik.jpg" },
      { name: "Priya", photo: "/assets/attendees/priya.jpg" },
    ],
    photos: ["/assets/event-img5.jpg", "/assets/event-img6.jpg"],
    image: "/assets/event-img(3).jpg",
  },
  {
    id: "4",
    title: "Tech Talk: Web Security",
    date: "Tuesday, February 18, 2025",
    location: "Adyar, Chennai",
    description:
      "Join us for an in-depth tech talk on web security, exploring common vulnerabilities and best practices for securing web applications.",
    schedule: [
      "Overview of Web Security",
      "Exploring Common Web Vulnerabilities",
      "Best Practices for Web Application Security",
      "Q&A Session",
    ],
    participationDetails:
      "Share your experience or research on web security by joining the open floor discussion after the talk.",
    attendees: [
      { name: "Ravi", photo: "/assets/attendees/ravi.jpg" },
      { name: "Anjali", photo: "/assets/attendees/anjali.jpg" },
    ],
    photos: ["/assets/event-img7.jpg", "/assets/event-img8.jpg"],
    image: "/assets/event-img(4).png",
  },
  {
    id: "5",
    title: "Design for Developers Workshop",
    date: "Saturday, March 7, 2025",
    location: "Velachery, Chennai",
    description:
      "Learn the fundamentals of design and how to apply them to your development projects in this hands-on workshop.",
    schedule: [
      "Introduction to Design Principles",
      "Design Tools for Developers",
      "Hands-On Session: Designing a Web App",
      "Q&A and Networking",
    ],
    participationDetails:
      "If you want to share your design projects or have any design-related queries, join the interactive discussion session.",
    attendees: [
      { name: "Sundar", photo: "/assets/attendees/sundar.jpg" },
      { name: "Meera", photo: "/assets/attendees/meera.jpg" },
    ],
    photos: ["/assets/event-img9.jpg", "/assets/event-img10.jpg"],
    image: "/assets/event-img(8).jpg",
  },
  {
    id: "6",
    title: "Cloud Computing Meetup",
    date: "Sunday, March 22, 2025",
    location: "Koramangala, Bangalore",
    description:
      "A meetup focused on cloud technologies, with expert talks and hands-on labs for developers and IT professionals.",
    schedule: [
      "Introduction to Cloud Computing",
      "Exploring AWS and Azure",
      "Hands-On Lab: Building Cloud Infrastructure",
      "Networking Session",
    ],
    participationDetails:
      "Feel free to share your cloud computing experiences or projects during the open mic session.",
    attendees: [
      { name: "Vikram", photo: "/assets/attendees/vikram.jpg" },
      { name: "Neha", photo: "/assets/attendees/neha.jpg" },
    ],
    photos: ["/assets/event-img11.jpg", "/assets/event-img12.jpg"],
    image: "/assets/event-img(7).jpg",
  }
];

export default events;
