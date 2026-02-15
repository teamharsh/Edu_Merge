# Project Nexus - System Design & Architecture

## 1. High-Level Architecture
Project Nexus utilizes a **Microservices Architecture** to ensure scalability and modularity. [cite_start]The backend is decoupled from the frontend, communicating via RESTful APIs and WebSockets[cite: 125, 915].

### [cite_start]Core Microservices[cite: 127, 151, 156, 161]:
1.  **User Service:** Handles Auth (JWT), Profiles, and Verification status.
2.  **Learning Engine Service:** Manages Roadmaps, Adaptive Algorithms, and Task Generation.
3.  **Resource Service:** Manages the database of learning materials, Verified Ratings, and Leaderboards.
4.  **Community Service:** Handles Forums, Chat (WebSockets), and Project Showcases.

## 2. Tech Stack

### Frontend (Client Side)
* [cite_start]**Framework:** Next.js (React) for dynamic UIs and server-side rendering[cite: 176, 340].
* [cite_start]**Styling:** TailwindCSS for responsive and consistent design[cite: 504].
* **State Management:** React Hooks/Context API.

### Backend (Server Side)
* [cite_start]**Runtime:** Node.js with Express.js[cite: 176, 336].
* **API Interface:** REST API for standard requests; [cite_start]WebSockets/Socket.io for real-time chat and collaboration[cite: 452].

### Database Layer
* [cite_start]**Primary DB (Relational):** PostgreSQL for structured user data and fixed learning paths[cite: 178].
* [cite_start]**Secondary DB (NoSQL):** MongoDB for storing flexible logs, feedback, community chats, and dynamic roadmap JSONs[cite: 337, 451].

### AI & Machine Learning (AWS Integration)
* **Generative AI:** **Amazon Bedrock** (replacing generic GPT) for generating personalized roadmaps and summarizing content.
* **AI Assistant:** **Amazon Q** integrated as the "Personal AI Mentor" for code debugging and Q&A.
* [cite_start]**ML Logic:** Python-based services for adaptive difficulty algorithms and recommendation engines[cite: 199, 1023].

### DevOps & Infrastructure
* [cite_start]**Cloud Provider:** AWS (Amazon Web Services)[cite: 183].
* **Compute:** AWS EC2 for hosting microservices; [cite_start]AWS Lambda for serverless task triggers[cite: 183, 1098].
* [cite_start]**Storage:** AWS S3 for storing user-uploaded project files and static assets[cite: 183].
* [cite_start]**Containerization:** Docker for consistent deployment environments[cite: 558].
* [cite_start]**CI/CD:** Jenkins or GitHub Actions for automated testing and deployment[cite: 187].

## 3. Data Flow Diagram (Simplified)

1.  **User Input:** User submits skills/goals via Next.js Frontend.
2.  **Processing:** API Gateway routes request to **Learning Engine Service**.
3.  **AI Generation:** Service calls **Amazon Bedrock API** with context prompts.
4.  **Storage:** Generated Roadmap JSON is stored in MongoDB/PostgreSQL.
5.  **Task Scheduling:** Node.js Scheduler creates weekly tasks populated into the User Dashboard.
6.  [cite_start]**Feedback Loop:** Quiz results update the User Profile -> Triggers "Adaptive Logic" to modify future tasks[cite: 106].

## 4. UI/UX Design Principles
* [cite_start]**Accessibility:** WCAG compliance (Screen reader support, keyboard navigation)[cite: 731].
* [cite_start]**Responsiveness:** Mobile-first approach to support users on all devices[cite: 515].
* [cite_start]**Gamification:** Visual progress bars, badges, and leaderboards to maintain engagement[cite: 30].