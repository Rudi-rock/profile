export const profile = {
  name: 'Rudra Pratap Singh',
  status: 'Second-Year CSE Student',
  school: 'SRM IST Chennai',
  location: 'Chennai, India',
  email: 'rudra7275277928@gmail.com',
  phone: '+91 881 075 9951',
  github: 'https://github.com/rudi-rock',
  linkedin: 'https://www.linkedin.com/in/rudra-srm',
  resume: '/resume.pdf',
  intro: 'I build things that actually work: from fintech platforms and health-tech systems to quantum visualizers and drone simulations.',
  about: 'Originally from Varanasi, I have lived across India and briefly in the UAE. My focus is fintech and health-tech, where good software can directly change lives. Outside code, I hold a Taekwondo Black Belt with 14+ medals.',
};

export const projects = [
  {
    number: '01', slug: 'sehat', title: 'Sehat', year: '2025', category: 'Health-tech',
    shortDescription: 'A QR-based digital health identity system for rural India, designed to work offline and remove authentication barriers during emergencies.',
    fullDescription: 'Patient data is encoded directly into QR URLs, creating an offline-first experience for a digital health identity. The project is PWA-enabled and deployed live.',
    technologies: ['HTML/CSS/JS', 'PWA', 'QR Encoding', 'GitHub Pages', 'Offline-first'],
    githubUrl: 'https://github.com/Rudi-rock/Sehat', liveUrl: 'https://rudi-rock.github.io/Sehat/', featured: true,
    problem: 'People in rural areas may not have dependable connectivity or the time to navigate authentication during an emergency.',
    approach: 'Keep the identity portable: encode the patient data into a QR URL so it can be reached with a scan, including in low-connectivity contexts.',
    features: ['QR-based health identity', 'Offline-first PWA direction', 'Emergency access without authentication barriers', 'Live GitHub Pages deployment'],
    learning: 'Designing for the last mile means treating access and connectivity as core product constraints.',
  },
  {
    number: '02', slug: 'flowx', title: 'FlowX', year: '2026', category: 'Fintech / Web3',
    shortDescription: 'A P2P USDT/INR crypto trading platform for Indian retail users with live rates, charts, fee calculations, and transaction history.',
    fullDescription: 'A polished single-file app that frames a retail crypto trading workflow around current market context and clear transaction details.',
    technologies: ['HTML/JS', 'CoinGecko API', 'Chart.js', 'Web3', 'USDT/INR'],
    githubUrl: 'https://github.com/Rudi-rock/no-drop', liveUrl: '',
    problem: 'Retail users need a clear view of rates, fees, and transaction history in one focused workflow.',
    approach: 'Combine live CoinGecko rates, visual charts, fee calculations, and a transaction history into a compact trading interface.',
    features: ['Live CoinGecko rates', 'Chart.js visualization', 'Fee calculations', 'Transaction history'],
    learning: 'A financial interface earns trust through clarity: every number needs context.',
  },
  {
    number: '03', slug: 'clincode', title: 'ClinCode', year: '2026', category: 'AI / Health-tech',
    shortDescription: 'An explainable ICD-10 coding assistant simulated for a hackathon demo, focused on making AI decisions visible to users.',
    fullDescription: 'ClinCode is a simulated medical coding assistant. Its central idea is visual explainability: users should be able to follow the reasoning presented by the interface.',
    technologies: ['AI/ML', 'ICD-10', 'Explainability', 'HTML/CSS/JS'],
    githubUrl: 'https://github.com/Rudi-rock/CODERED', liveUrl: '',
    problem: 'Medical coding tools can feel opaque when users cannot see why a suggested code was chosen.',
    approach: 'Use UX storytelling and visual explainability to make the assistant’s decision framing understandable in a hackathon setting.',
    features: ['ICD-10 coding assistant concept', 'Visual explainability', 'Hackathon-focused UX storytelling'],
    learning: 'Explainability is not an afterthought; it is part of the product experience.',
  },
  {
    number: '04', slug: 'quvis', title: 'QuVis', year: '2026', category: 'Quantum / Visualization',
    shortDescription: 'A quantum key distribution visualizer covering Shor’s Algorithm threat framing, BB84 simulation, and a Bloch sphere.',
    fullDescription: 'Built for QtHack04, QuVis presents quantum concepts in a NASA mission-control aesthetic as a single HTML file.',
    technologies: ['Quantum Computing', 'BB84', 'Bloch Sphere', 'Three.js', 'HTML/JS'],
    githubUrl: 'https://github.com/Rudi-rock/OptiQ-Flow', liveUrl: '',
    problem: 'Quantum protocols are difficult to understand when their state changes stay abstract.',
    approach: 'Turn the protocol and its threat framing into a visual, interactive explanation with a Bloch sphere and simulation language.',
    features: ['BB84 protocol simulation', 'Bloch sphere visualization', 'Shor’s Algorithm threat framing'],
    learning: 'Visual models can make unfamiliar technical systems easier to reason about.',
  },
  {
    number: '05', slug: 'drone-swarm-sim', title: 'Drone Swarm Sim', year: '2026', category: 'Simulation / Systems',
    shortDescription: 'Two swarm systems: a browser-based drone attack visualization and a defensive micro-drone system with Boids physics and threat detection.',
    fullDescription: 'The work spans a browser visualization with thousands of agents and a Python defensive system with FSM logic and a real-time matplotlib dashboard.',
    technologies: ['Python', 'Boids Physics', 'FSM', 'matplotlib', 'Three.js'],
    githubUrl: 'https://github.com/Rudi-rock/drone-defence-system', liveUrl: '',
    problem: 'Swarm behavior and defensive responses are easier to study when agents and system states are visible together.',
    approach: 'Pair browser-based visualization with physics, finite-state-machine behavior, threat detection, and a dashboard.',
    features: ['Boids physics', 'Finite-state-machine behavior', 'Threat detection', 'Real-time matplotlib dashboard'],
    learning: 'Simulation becomes useful when the model and the system response can be inspected together.',
  },
  {
    number: '06', slug: 'morphx-city', title: 'MORPHX City', year: '2026', category: 'Browser game / 3D',
    shortDescription: 'A Three.js open-world browser game with a city environment, NPCs, minimap, wanted system, and radio.',
    fullDescription: 'A single self-contained HTML game experiment inspired by the open-world genre, with a transforming car concept and a playable city framework.',
    technologies: ['Three.js', 'WebGL', 'Game Dev', 'HTML/JS', '3D'],
    githubUrl: 'https://github.com/Rudi-rock/Arduino-Based-Radar-System', liveUrl: '',
    problem: 'A browser game needs a convincing sense of place and readable systems without a heavy engine stack.',
    approach: 'Build the city, NPCs, minimap, wanted system, and radio into a self-contained Three.js experiment.',
    features: ['3D city environment', 'NPCs', 'Minimap', 'Wanted system', 'Radio'],
    learning: 'Small systems compound into a world that feels coherent and interactive.',
  },
];

export const achievements = [
  { value: '1st', label: 'CryptoSolve Fintech App Expo', detail: 'First place at SRM IST Chennai in 2026.', tone: 'gold' },
  { value: '19+', label: 'Hackathons', detail: 'Multiple top-5 and top-10 finishes.', tone: 'blue' },
  { value: '6+', label: 'Projects shipped', detail: 'Real products and experiments.', tone: 'teal' },
  { value: '14+', label: 'Taekwondo medals', detail: 'Black Belt.', tone: 'red' },
];

export const hackathons = ['CryptoSolve Fintech Expo — 1st Place', "ARIVOLIO 2K'26", 'Elite Hack 1.0', 'JAI Hackathon', "Infinity Ideathon · E-Summit'26", 'Dev Heat · Spring Fiesta', 'QtHack04', '+ 12 more'];

export const skills = [
  { group: 'Full stack', items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'PWA'] },
  { group: 'Intelligent systems', items: ['AI/ML Fundamentals', 'Web3', 'Quantum Computing', 'ICD-10 AI', 'Boids Physics', 'Three.js', 'Chart.js'] },
  { group: 'Foundations & tools', items: ['Python', 'DSA (C/Python)', 'Git & GitHub', 'VS Code', 'Cursor IDE', 'GitHub Pages', 'Figma'] },
];

export const chronicle = [
  { year: '2026', title: 'Public Relations Team Member', org: 'Futurix · SRMIST', detail: 'Supporting outreach, communication, and event promotions for a tech club.' },
  { year: '2026', title: 'First place at CryptoSolve', org: 'Fintech App Expo', detail: 'Won first place with a fintech application demo.' },
  { year: '2025–29', title: 'B.Tech CSE Undergraduate', org: 'SRM IST Chennai', detail: 'Hands-on projects, hackathons, AI learning, and full-stack development.' },
  { year: '2025', title: 'Launched Sehat', org: 'Personal project · Live', detail: 'QR-based digital health identity for rural India.' },
  { year: '2015–25', title: 'Schooling + Taekwondo', org: 'Varanasi · UAE', detail: '14+ medals and a Black Belt.' },
];
