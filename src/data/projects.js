import pkt from "../assets/pkt.png";
import lucy from "../assets/lucy.png";

export const projects = [
    {
        id: "network-sim",
        name: "Small Town Network Simulation",
        date: "June – September 2025",
        desc: "A network simulation of a small town using Cisco Packet Tracer.",
        picture: pkt,
        imageDesc: "Diagram of final network topology",
        
        skillsUsed: [
            "Networking Fundamentals",
            "Subnetting",
            "TCP/IP Model",
            "IP Address Configuration",
            "Routing (Static & Dynamic)",
            "Network Topology Design",
            "802.1Q VLAN Trunking",
            "Common Network Troubleshooting"
        ],

        inspiration:
            "While teaching myself network protocols, I had a difficult time absorbing the concepts without implementing them practically. Sure, I could recite the three steps of the TCP handshake, but I couldn't visualize myself configuring or implementing the protocol itself. So naturally, I set out to look for a software where I could explore these connections and experiment with topologies and eventually stumbled upon Cisco Packet Tracer.",

        process:
            "Firstly, I started by drawing out network diagrams. I learned that mesh topologies were superior, but I wanted to understand why. After experimenting with different topologies for a single network (ex. Bus, Ring, Star, Mesh), I settled with a \"router on a stick\" topology for the networks in the final implementation.\n\n The next steps were to subnet the individual networks and configure VLANs for every section of each network to simulate different departments. After researching 802.1Q trunking, I was able to configure the routers to support VLANs.\n\n When it came time to connect every network together. I had to learn how interactions between routers worked, I configured routing tables to connect each router to each other. Then, to simulate the Internet and NAT, I used an edge router to make a subnet of routers, with each local subnet having its own private network.\n\n Finally, I configured a server with DNS and HTTP to support a README for the project, which provides documentation on commands and methods I used to set up the larger network.",

        coursework: [
            "Google Professional Cybersecurity Certificate"
        ],

        relatedLinks: [
            {label: "Github", url: "https://github.com/kcvenkat/network-simulation"},
        ]
    },
    {
        id: "lucy-ai",
        name: "L.U.C.Y - Voice Enabled A.I. Assistant",
        date: "September – December 2025",
        desc: "Voice-enabled AI assistant to assist in automating productivity.",
        imageDesc: "Image of terminal interface",
        picture: lucy,

        skillsUsed: [
            "Python",
            "Modular Development",
            "Speech Recognition",
            "Natural Language Processing",
            "Agentic Development",
            "AI Workflow Automation",
            "REST API Integration"
        ],

        inspiration: "My favorite superhero is Iron Man. I remember thinking to myself while watching the movies, \"Wouldn't it be nice if I could have something like J.A.R.V.I.S that could help me be more productive?\" I decided to build L.U.C.Y (Literally Understands Commands and Yaps) to make simple scripts that I made on a day-to-day basis, like a calorie calculator or a timer, to increase my productivity.",

        process: "Since I had never called AI-based APIs in the past, I started with research on what AI to use. Initially, I leaned towards Ollama with its powerful locally hosted AI model. However, despite my detailed system prompt, Ollama kept returning improperly formatted strings and I was unable to parse this data accurately to execute actions. As a result, I decided to pivot to Google's Gemini. While it needed an Internet connection to function, it provided vastly more accurate strings of parsable data with the same system prompt.\n\n After learning how to call the Gemini API to extract its natural language response, I started writing the programs to gather speech input and allow the AI to give text-to-speech output using the Python pyttsx3, Speech Recognition, and PyAudio libraries. Then, I made another module to handle file creation, execution, and deletion using the Python subprocess library. Finally, I used the Rich library for terminal UI formatting",

        relatedLinks: [
            {label: "Github", url: "https://github.com/kcvenkat/L.U.C.Y"},
        ]
    },
]