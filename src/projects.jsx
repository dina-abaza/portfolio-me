import React, { forwardRef } from "react";
import { FaProjectDiagram } from "react-icons/fa";

const projectData = [
   {
    title: "BankReach — WhatsApp Campaign Dashboard",
    description: "A full-featured Arabic RTL dashboard for managing WhatsApp marketing campaigns. Includes customer segmentation, message template management, campaign scheduling and triggering, real-time delivery stats via WebSocket, and a secure JWT auth flow with automatic token refresh.",
    techStack: "Next.js 15, Tailwind CSS 4, Socket.IO, Axios, Node.js",
    github: "private",
    liveDemo: "https://bank-reach.vercel.app"
  },
  // {
  //   title: "Lawyers Management SaaS",
  //   description: "A multi-tenant SaaS platform for law offices covering full legal case management (cases, sessions, contracts, consultations), GPS-based HR attendance, automated invoicing, double-entry accounting, and granular role-based permissions — each office runs in a fully isolated environment.",
  //   techStack: "PHP, Laravel 11, MySQL, Laravel Sanctum, Spatie Permission, RESTful API",
  //   github: "private",
  //   liveDemo: "https://sass-lawyers-multivendor.vercel.app"
  // },
   {
    title: "Publishing House & Admin Dashboard",
    description: "A secure digital publishing platform for selling and downloading eBooks, with Stripe and Paymob payments (inside and outside Egypt) plus a complete dashboard for best-seller analytics, revenue tracking, and full CRUD management.",
    techStack: "Next.js, Node.js, Cloudflare, React Query, Tailwind CSS, Zustand",
    github: "https://github.com/dina-abaza/aldawlia-publishing",
    liveDemo: "https://aldawlia-publishing.vercel.app/"
  },
  {
    title: "Restaurant Reservation",
    description: "A full-stack restaurant reservation system that allows users to book tables, log in, and communicate with the restaurant. Connected to a real Laravel back-end for managing reservations and users.",
    techStack: " React.js, Tailwind css, React Router DOM, Axios, Zustand, larvel",
    github: "https://github.com/dina-abaza/food-corner",
    liveDemo: "http://food-corner-roan.vercel.app"
  },
  {
    title: "Down Center & Dashboard Platform",
    description: "Down Syndrome Center platform providing personalized content, articles, videos, tips, and events based on the child’s age and specific challenges through a detailed survey. Includes fast AI-powered chat for instant support and appointment booking, fully optimized for mobile devices.",
    techStack: " React.js, Tailwind css, React Router DOM, Axios, Zustand, framer-motion, toastify, lottiefiles, node.js",
    github: "https://github.com/dina-abaza/down-syndrome",
    liveDemo: "https://down-syndrome-one.vercel.app/"
  },
  {
    title: "Booking-Hotels",
    description: "A full-featured hotel booking app with a real backend, allowing users to browse hotels, book rooms, pay securely via Stripe, and communicate with hotel management—all in a sleek, responsive interface built with React and Tailwind CSS.",
    techStack: " React.js, Tailwind css, React Router DOM, Axios, Zustand, framer-motion, toastify, node.js",
    github: "https://github.com/dina-abaza/portofilio",
    liveDemo: "https://booking-hotels-ue7g.vercel.app/"
  },
  {
    title: "Website-Portfolio",
    description: "Developed a fully responsive company website in collaboration with a UI/UX designer, implementing modern design principles and an intuitive interface. Integrated a functional contact form connected to backend APIs, enhancing client engagement and improving overall website usability.",
    techStack: " Next.js, Tailwind css, Framer-Motion, Figma Designs",
    github: "https://github.com/dina-abaza/portfolio",
    liveDemo: "https://portfolio-taupe-beta-40.vercel.app/"
  },
    {
    title: "Landing-Page",
    description: "A clean, engaging landing page that highlights the company’s services and brand identity. Built with a fully responsive layout, smooth scroll interactions, and clear call-to-action sections to improve user engagement and conversion.",
    techStack: "Html5, Css, JavaScript, Figma Designs",
    github: "https://github.com/dina-abaza/landing-page",
    liveDemo: "https://landing-page-theta-sable.vercel.app"
  },
    {
    title: "gift shopping & dashboard",
    description: "A comprehensive E-gift store featuring a secure Google Auth admin dashboard, real-time order tracking, and a seamless delivery management system",
    techStack: "next, tailwind, node.js, framer-motion, toastify, zustand, lucide, swiper",
    github: "https://github.com/dina-abaza/grocy-web",
    liveDemo: "https://grocy-web.vercel.app"
  },
  {
    title: "Beauty Store & Admin Dashboard",
    description: "A full-featured beauty products e-commerce platform with a complete admin dashboard and Paymob payment gateway integration for smooth, secure checkout and order management.",
    techStack: "Next.js, Node.js, Toastify, Tailwind CSS, Redux",
    github: "https://github.com/dina-abaza/herodex",
    liveDemo: "https://herodex-navy.vercel.app/"
  },
  {
    title: "Vitrine (e-commerce & dashboard)",
    description: "An online furniture store offering a smooth shopping experience with product browsing, cart, checkout, and Stripe payment integration. Includes an admin dashboard for managing products and tracking orders.",
    techStack: "React.js, Tailwind CSS, zustand, React-Router-Dom, Axios, node.js",
    github: "https://github.com/dina-abaza/E-commece-vitrine",
    liveDemo: "http://e-commece-vitrine-jm7x.vercel.app"
  },
];


const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="projects" className="w-full bg-black text-white py-20">
      <div className="w-full max-w-[90%] sm:max-w-7xl md:max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center uppercase mb-6 flex justify-center items-center gap-2 pulse-effect">
          <FaProjectDiagram className=" mb-2 sm:mb-0 sm:mr-2 text-teal-400 text-2xl" />
          My Projects
        </h2>

        <p className="text-lg text-center mb-16">
          Some of the projects I’ve built using modern web technologies:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 w-full p-4 sm:p-5 md:p-6 rounded-lg border border-white/10 shadow-lg shadow-teal-400/20 hover:shadow-teal-400/50 hover:scale-105 transition duration-300 flex flex-col min-h-[340px]"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold text-white">Tech:</span> {project.techStack}
              </p>

              <div className="flex justify-between text-sm mt-auto pt-4">
                {project.github === "private" ? (
                  <span className="text-gray-500 cursor-not-allowed">🔒 Private Repo</span>
                ) : project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    🔗 GitHub
                  </a>
                ) : (
                  <span className="text-gray-500 cursor-not-allowed">🔗 GitHub</span>
                )}

                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-400 hover:underline"
                  >
                    🚀 Live Demo
                  </a>
                ) : (
                  <span className="text-gray-500 cursor-not-allowed">🚀 Live Demo</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
