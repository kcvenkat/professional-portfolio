import hshake from "../assets/handshake.jpg"
import fci from "../assets/FCI.png"
export const experiences = [
  {
    id: "real-time-services",
    title: "Team Lead",
    company: "ASU EPICS / Florida Community Innovation",
    date: "January 2026 - May 2026",

    overview: "Worked with nonprofit Florida Community Innovation to bring real-time information reflection to the Florida Resource Map page.",

    description:
      "This role involved working as a part of the ASU EPICS (Engineering Projects In Community Service) program with Florida Community Innovation, a student-driven nonprofit organization. I led a team of 5 students through an Alige sprint cycle for the Real-Time Services Capacity Sensor and Alert System project aimed at working with the Florida Resource Map to bring accurate, real-time shelter information to the public.",

    reflection:
      "The initial stages of development, the team and I interviewed our Community Partner, the Executive Director of Florida Community Innovation, to determine the design requirements and user needs. Our project revolved around a central problem that users of the Florida Resource Map faced. When they were browsing an institution which provided housing, they couldn't see the availability of beds at that shelter.\n\n Our team initially debated between hardware and software solutions. Ultimately, since hardware would be expensive, inefficient, and unnecessary, we pivoted to a software-based solution where we used existing resources like the Florida Resource Map and bed tracking systems to automate the reflection of gathered data towards the public instead of automating the data collection process.\n\n As a result, our solution focused on editing the database schema of the Florida Resource Map (FRM) to include a field named \"beds\" which reflected on each resource page if the institute was a shelter. Throughout the project, I liked the chain of communication the team had with the Community Partner and the FRM developer team. The ability to ask questions proved valuable in times of doubt.\n\n Our final prototype accomplished this task well, as the beds field solved the initial problem. However, the solution largely relied on the cadence of the database administration team to verify the changes and quickly approve them, making it more about staff availability.",

    skillsUsed: [
      "React.js",
      "MongoDB / Mongoose",
      "Database Administration",
      "User Authentication",
      "MERN Stack",
      "API Troubleshooting"
    ],

    relatedLinks: [
      {label: "Florida Resource Map", url: "https://www.floridaresourcemap.org/"},
    ],
    picture: fci,
  },
  {
    id: "ai-trainer",
    title: "AI Trainer Fellow",
    company: "Handshake AI",
    date: "December 2025 - March 2026",

    overview: "Reviewed model output using the NIST AI RMF and performed data annotation.",

    description:
      "Working as a remote AI trainer entailed logging onto the Handshake platform, claiming tasks through Multimango, and working on tasks. These tasks ranged from drawing bounding boxes around UI elements to evaluating AI text or audio output to determine areas of improvement and maintain quality.",

    reflection:
      "Over the course of this role, I evaluated 100+ model outputs and maintained a minimum quality rating of 1.86/3.0, approaching the 2.0 threshold the organization defined as excellent. This role was particularly valuable because it taught me how how model outputs are evaluated for safety, accuracy, and alignment. I found the variety of tasks interesting and felt as though there was always more to learn. My work also motivated me to self-learn the NIST AI RMF to improve my accuracy on the video and audio quality assurance tasks.\n\nSome struggles I faced in this role were staying motivated during my remote role. The lack of team involvement instilled feelings of isolation and creative block. Additionally, given the 1.0/3.0 rating to be automatically dropped from the project, my contract wasn't renewed despite my near excellent quality rating being well above the threshold for poor quality.\n\nOverall, this role solidified my interest in AI safety and evaluation, and gave me hands-on exposure to the kind of work that sits at the intersection of cybersecurity and AI alignment. It was a formative experience that continues to shape how I think about model behavior and responsible AI development.",

    skillsUsed: [
      "Prompt Evaluation",
      "Quality Assurance",
      "Multimodal Data Annotation",
      "NIST Risk Management Framework (self-studied)"
    ],

    picture: hshake,
  }

];