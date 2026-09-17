export const translations = {
  en: {
    nav: { projects: 'Projects', about: 'About', contact: 'Contact' },
    languageSwitch: 'Language',
    hero: {
      greeting: "Hi, I'm Ilias.",
      title: 'I build software that makes everyday things a little easier.',
      intro:
        'Second-year Computer and Systems Sciences student at Stockholm University. I work mostly with Java and Spring Boot on the backend, and I have shipped a native iOS app in Swift.',
      status: 'Open to part-time IT roles in Stockholm',
      ctaProjects: 'See my projects',
      ctaContact: 'Get in touch',
    },
    projects: {
      heading: 'Projects',
      lead: 'Things I have designed, built and published from start to finish.',
      code: 'View code on GitHub',
      items: {
        picto: {
          title: 'PictoDía',
          summary:
            'A native iOS app that helps caregivers explain the day to people with autism. The caregiver writes one or two sentences about what is going to happen, and the app turns them into a vertical, step by step schedule of pictograms.',
          points: [
            'AI extracts the events and puts them in a logical order, even when they are written out of order',
            'Pictograms from ARASAAC, with a Swedish search and an English fallback',
            'Built with Spec-Driven Development: every feature had an approved spec and plan before any code',
            'Unit-tested services and a local cache that cuts repeated API calls',
          ],
        },
        tasks: {
          title: 'Task Manager API',
          summary:
            'A REST API for managing tasks and categories, built to practise the way backend services are made in real teams: layered architecture, tests, containers and automated checks.',
          points: [
            'Full CRUD with Spring Boot, Spring Data JPA and a relational model with categories',
            'Indexes, transactions and joins for efficient, consistent data access',
            'Unit tests with JUnit and Mockito, run by GitHub Actions on every push',
            'Packaged as a multi-stage Docker image',
          ],
        },
      },
    },
    about: {
      heading: 'About me',
      paragraphs: [
        'I study Computer and Systems Sciences at DSV, Stockholm University, where my courses cover object-oriented programming, data structures, computer architecture, networking and operating systems.',
        'Before tech I studied marketing in Spain and worked as a teacher. That background shapes how I build: I think about who is going to use the software, and I like explaining technical things in plain words.',
        'Right now I am studying for the AWS Cloud Practitioner certification. This site is part of that: it is deployed on AWS.',
      ],
      skillsHeading: 'What I work with',
      skillGroups: [
        { name: 'Languages', items: ['Java', 'Swift', 'SQL', 'Python', 'JavaScript'] },
        { name: 'Frameworks', items: ['Spring Boot', 'SwiftUI', 'React', 'JavaFX'] },
        { name: 'Tools', items: ['Git and GitHub', 'GitHub Actions', 'Docker', 'Maven', 'IntelliJ IDEA', 'Xcode'] },
        { name: 'Learning now', items: ['AWS'] },
      ],
      spokenHeading: 'Languages I speak',
      spoken: 'Spanish, English and Swedish',
    },
    contact: {
      heading: "Let's talk",
      text: 'I am looking for a part-time role where I can contribute while I finish my degree. If you think I could be a good fit, or just want to chat about a project, send me a message.',
      email: 'Send an email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: { built: 'Built with React and deployed with GitHub Pages.' },
  },

  sv: {
    nav: { projects: 'Projekt', about: 'Om mig', contact: 'Kontakt' },
    languageSwitch: 'Språk',
    hero: {
      greeting: 'Hej, jag heter Ilias.',
      title: 'Jag bygger mjukvara som gör vardagen lite enklare.',
      intro:
        'Jag läser andra året på Data- och systemvetenskap vid Stockholms universitet. Jag jobbar mest med Java och Spring Boot på backend, och jag har byggt och publicerat en native iOS-app i Swift.',
      status: 'Söker deltidsjobb inom IT i Stockholm',
      ctaProjects: 'Se mina projekt',
      ctaContact: 'Kontakta mig',
    },
    projects: {
      heading: 'Projekt',
      lead: 'Saker jag har designat, byggt och publicerat från början till slut.',
      code: 'Se koden på GitHub',
      items: {
        picto: {
          title: 'PictoDía',
          summary:
            'En native iOS-app som hjälper anhöriga och personal att förklara dagen för personer med autism. Man skriver en eller två meningar om vad som ska hända, och appen gör om dem till ett vertikalt schema med bildstöd, steg för steg.',
          points: [
            'AI plockar ut händelserna och sätter dem i logisk ordning, även när de skrivs i fel ordning',
            'Piktogram från ARASAAC, med sökning på svenska och engelska som reserv',
            'Byggd med Spec-Driven Development: varje funktion hade en godkänd spec och plan innan någon kod skrevs',
            'Enhetstestade tjänster och en lokal cache som minskar upprepade API-anrop',
          ],
        },
        tasks: {
          title: 'Task Manager API',
          summary:
            'Ett REST API för att hantera uppgifter och kategorier, byggt för att öva på hur backendtjänster görs i riktiga team: lagerindelad arkitektur, tester, containrar och automatiska kontroller.',
          points: [
            'Fullständig CRUD med Spring Boot, Spring Data JPA och en relationsmodell med kategorier',
            'Index, transaktioner och joins för effektiv och konsekvent dataåtkomst',
            'Enhetstester med JUnit och Mockito som körs av GitHub Actions vid varje push',
            'Paketerad som en Docker-image i flera steg (multi-stage)',
          ],
        },
      },
    },
    about: {
      heading: 'Om mig',
      paragraphs: [
        'Jag läser Data- och systemvetenskap på DSV vid Stockholms universitet, med kurser i objektorienterad programmering, datastrukturer, datorarkitektur, nätverk och operativsystem.',
        'Innan jag började med IT studerade jag marknadsföring i Spanien och arbetade som lärare. Den bakgrunden påverkar hur jag bygger: jag tänker på vem som ska använda mjukvaran, och jag gillar att förklara tekniska saker på ett enkelt sätt.',
        'Just nu pluggar jag till certifieringen AWS Cloud Practitioner. Den här sajten är en del av det: den körs på AWS.',
      ],
      skillsHeading: 'Det här jobbar jag med',
      skillGroups: [
        { name: 'Språk', items: ['Java', 'Swift', 'SQL', 'Python', 'JavaScript'] },
        { name: 'Ramverk', items: ['Spring Boot', 'SwiftUI', 'React', 'JavaFX'] },
        { name: 'Verktyg', items: ['Git och GitHub', 'GitHub Actions', 'Docker', 'Maven', 'IntelliJ IDEA', 'Xcode'] },
        { name: 'Lär mig nu', items: ['AWS'] },
      ],
      spokenHeading: 'Språk jag talar',
      spoken: 'Spanska, engelska och svenska',
    },
    contact: {
      heading: 'Hör av dig',
      text: 'Jag söker en deltidstjänst där jag kan bidra medan jag avslutar min utbildning. Om du tror att jag kan passa, eller bara vill prata om ett projekt, skicka ett meddelande.',
      email: 'Skicka e-post',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: { built: 'Byggd med React och publicerad med GitHub Pages.' },
  },
}
