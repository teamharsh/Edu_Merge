import { HoverEffect } from '../ui/card-hover-effect';

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-md">
        Features
      </h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: '🌐 Custom Subdomain',
    description:
      'Get your own branded space (e.g., yourname.ourplatform.com) to showcase and sell your courses. Customize your subdomain with your brand colors, logo, and unique design to create a professional online presence. This feature allows you to build trust with your audience and establish a distinct identity in the competitive e-learning market.',
    link: '#',
  },
  {
    title: '📚 Seamless Course Creation',
    description:
      'Easily upload videos, PDFs, quizzes, and more to create rich, engaging courses. Our user-friendly course builder supports drag-and-drop functionality, enabling you to organize modules, chapters, and lessons effortlessly. Whether it’s multimedia content or interactive quizzes, everything is streamlined for an enhanced teaching experience.',
    link: '#',
  },
  {
    title: '🤖 AI-Powered Student Support',
    description:
      "Integrated chatbots help your students with real-time assistance, while you're free to focus on teaching. Our AI-driven chatbot is available 24/7 to address common queries, guide students through complex topics, and ensure a seamless learning journey without requiring your constant attention.",
    link: '#',
  },
  {
    title: '📝 Smart Notes and Reviews',
    description:
      'Your students can save important notes and search them globally, enhancing their learning experience. The smart note-taking feature allows learners to bookmark key insights, add personal annotations, and quickly retrieve notes with an advanced search system.',
    link: '#',
  },
  {
    title: '💬 Community Engagement',
    description:
      'Build a thriving community with discussion boards and live sessions, directly from your platform. Foster collaboration and peer-to-peer learning through group discussions, Q&A sessions, and live webinars. Encourage engagement by hosting real-time interactive events.',
    link: '#',
  },
  {
    title: '📊 Analytics Dashboard',
    description:
      'Track your course performance with detailed insights and optimize your content for better results. Monitor student progress, engagement metrics, and revenue statistics through an intuitive dashboard. Leverage data-driven decisions to refine your strategies and maximize impact.',
    link: '#',
  },
];
