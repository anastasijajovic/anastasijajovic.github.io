import profilePhoto from '../assets/profil.jpeg'
import petsOverview from '../assets/adoptpet/pets-overview.png'
import profileEditor from '../assets/adoptpet/profile-editor.png'
import userManagement from '../assets/adoptpet/user-management.png'
import shelterManagement from '../assets/adoptpet/shelter-management.png'

export const profile = {
  name: 'Anastasija Jović',
  role: 'Software Engineering Student',
  location: 'Beograd, Srbija',
  email: 'anastasijaj004@gmail.com',
  phone: '+381 63 409 673',
  github: 'https://github.com/anastasijajovic',
  linkedin: 'https://www.linkedin.com/in/anastasija-jovi%C4%87-878035208/',
  cv: 'https://canva.link/80z5y1ifbf5gv48',
  avatar: profilePhoto,
  intro: 'Studentkinja softverskog inženjerstva koja pretvara ideje u jasna, korisna i lepo oblikovana digitalna iskustva.',
}

export const skills = [
  'Java — napredni nivo',
  'Python — osnovni nivo',
  'C — osnovni nivo',
  'C# — osnovni nivo',
  'Swift — osnovni nivo',
  'Spring Boot',
  'Java Swing',
  'Pandas',
  'SQL',
  'Relacione baze podataka',
  'REST API',
  'Machine Learning',
  'Git',
  'MS Office paket',
]
export const projects = [
  {
    title: 'AdoptPet',
    type: 'Full-stack web aplikacija',
    period: 'maj 2026 — jul 2026',
    text: 'Aplikacija za upravljanje procesom udomljavanja životinja. Arhitektura je podeljena na frontend, backend i bazu podataka, uz siguran REST API za poslovnu logiku, autentifikaciju i rutiranje zahteva.',
    tags: ['Full-stack', 'REST API', 'Autentifikacija', 'Responsive UI'],
    images: [
      { src: petsOverview, alt: 'AdoptPet — pregled ljubimaca' },
      { src: profileEditor, alt: 'AdoptPet — uređivanje profila' },
      { src: userManagement, alt: 'AdoptPet — upravljanje korisnicima' },
      { src: shelterManagement, alt: 'AdoptPet — upravljanje azilima' },
    ],
    link: 'https://github.com/anastasijajovic',
  },
  {
    title: 'Mašinsko učenje i veštačka inteligencija',
    type: 'Portfolio ML projekata',
    period: 'april 2026 — jun 2026',
    text: 'Portfolio koji obuhvata nadgledano, nenadgledano i duboko učenje: regresiju, stabla odlučivanja, KNN, K-Means, hijerarhijsko klasterovanje i MLP neuronsku mrežu u Keras/TensorFlow okruženju.',
    tags: ['Python', 'Pandas', 'Keras', 'TensorFlow'],
    link: 'https://github.com/anastasijajovic',
  },
  {
    title: 'Heat FLOW Manager',
    type: 'Autorski Java projekat',
    period: 'decembar 2025 — februar 2026',
    text: 'Sistem za upravljanje grejnim uslugama, projektovan prema OOP principima. Razvijen je u Javi sa SQL bazom podataka i logikom za obradu podataka zasnovanom na naprednim strukturama i algoritmima.',
    tags: ['Java', 'OOP', 'SQL', 'Git'],
    link: 'https://github.com/anastasijajovic',
  },
  {
    title: 'Studentska služba',
    type: 'Informacioni sistem',
    period: 'Fakultetski projekat',
    text: 'Aplikacija osmišljena za pregledno upravljanje studentskim servisima i administrativnim podacima. Projekat pokazuje rad sa poslovnom logikom, organizacijom podataka i korisničkim funkcionalnostima.',
    tags: ['Java', 'SQL', 'OOP', 'Git'],
    link: 'https://github.com/anastasijajovic',
  },
  {
    title: 'Prevodilac',
    type: 'Aplikacija za prevođenje',
    period: 'Fakultetski projekat',
    text: 'Aplikacija usmerena na jednostavno i intuitivno prevođenje teksta, sa fokusom na jasnu organizaciju funkcionalnosti i kvalitetno korisničko iskustvo.',
    tags: ['Java', 'Java Swing', 'OOP', 'UI'],
    link: 'https://github.com/anastasijajovic',
  },
]

export const timeline = [
  {
    year: '2024 — danas',
    title: 'Student Mentor Program',
    text: 'Student mentor — pružam direktnu podršku i usmeravanje vršnjaka, uz fokus na komunikacione veštine, rešavanje problema i prilagođavanje individualnim potrebama mentija.',
  },
  {
    year: 'jun 2024 — novembar 2025',
    title: 'AIESEC in Serbia',
    text: 'Potpredsednica za logistiku Nacionalne konferencije. Organizovala sam kompletnu logistiku u multikulturalnom okruženju za 200+ delegata i 50+ partnera, vodila merch sajt i pružala tehničku podršku tokom konferencije.',
  },
  {
    year: '2024',
    title: 'SEEDIG',
    text: 'Volonterka na South Eastern European Dialogue on Internet Governance događaju — podrška organizaciji aktivnosti, koordinaciji učesnika i rešavanju operativnih zahteva.',
  },
  {
    year: '2025',
    title: 'OpenIT konferencija',
    text: 'Volonterka na jednom od vodećih IT događaja u regionu, sa doprinosom organizaciji i nesmetanom odvijanju konferencijskih aktivnosti.',
  },
  {
    year: 'april 2022',
    title: 'Evropska škola debate',
    text: 'Sertifikat Delegacije Evropske unije u Srbiji.',
  },
  {
    year: 'mart 2022',
    title: 'Swift Developing / iOS Development',
    text: 'Kurs iOS razvoja u organizaciji kompanije Apple.',
  },
  {
    year: 'decembar 2019',
    title: 'Učeničke kompanije',
    text: 'Program preduzetničkog učenja i razvoja učeničkih kompanija — COOPeR Interreg IPA CBC.',
  },
]
