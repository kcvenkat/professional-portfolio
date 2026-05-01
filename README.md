# Kaushik Venkatesh — Portfolio

This portfolio was built using React and Vite, with React Router handling client-side navigation across pages for Projects, Experience, Contact, and a hidden Miscellaneous page. Styling is done entirely with vanilla CSS, using custom properties and animations to achieve a dark, purple-accented aesthetic. The site also makes fetch calls to static JSON files served from the public directory, which form the basis of a small CTF challenge hidden on the home page.

Each project and experience entry is driven by structured data files, making it easy to add new content without touching the component logic. The Miscellaneous page — accessible only by solving the CTF — features an embedded SoundCloud player styled as a VHS cassette interface with a spinning reel animation. The site is deployed on Vercel with automatic redeployment on every push to the main branch.
