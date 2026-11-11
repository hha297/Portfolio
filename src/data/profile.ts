export const profile = {
  name: "Ha Dang",
  fullName: "Dang Hoang Ha",
  wordmark: "Ha Dang",
  logo: "/logos/logo-transparent.png",
  title: "Software Developer",
  subtitle: "Full-stack & Product-focused Engineer",
  location: "Helsinki, Finland",
  email: "ha.dh290702@gmail.com",
  phone: "+358 466 522 707",
  website: "https://www.danghoangha.com/",
  avatar: "/images/danghoangha.jpg",
  resume: "/ha-dang-resume.pdf",
  resumeLabel: "Download resume",
  summary:
    "I design and ship full-stack web and mobile products — from early product decisions through backend architecture, polished interfaces, and iteration based on how people actually use the software.",
  about: [
    "I enjoy designing and building products people can actually use — from the first product questions and UX decisions through implementation, launch, and the iteration that follows.",
    "Most of my work sits at the intersection of full-stack web, mobile apps, and backend systems: shaping data models, APIs, and interfaces so the whole product feels coherent instead of stitched together.",
    "I care less about collecting frameworks and more about shipping software that is clear to use, reliable under real conditions, and maintainable once the first version is live.",
  ],
  focus: [
    {
      title: "Full-stack web",
      copy: "Product UIs, server logic, and the flows that connect them.",
    },
    {
      title: "Mobile apps",
      copy: "React Native / Expo features with practical UX and solid state.",
    },
    {
      title: "Backend & data",
      copy: "APIs, modeling, and the infrastructure products depend on.",
    },
    {
      title: "Product thinking",
      copy: "Turning fuzzy ideas into scoped, shippable software.",
    },
  ],
  pillars: [
    {
      title: "Product-minded engineering",
      copy: "I start from the user problem, then shape interfaces, data models, and workflows that hold up when people actually use them.",
    },
    {
      title: "End-to-end ownership",
      copy: "I like owning a surface across idea, architecture, implementation, and iteration — not just a thin slice of the stack.",
    },
    {
      title: "Feedback-driven craft",
      copy: "Usability, reliability, and visual clarity are part of the engineering job. I tighten the product based on how it behaves in practice.",
    },
  ],
  personal: {
    title: "Beyond the keyboard.",
    intro:
      "Outside of shipping software, the same things have stuck with me for years: the gym as a daily reset, football through Messi and Barcelona, competitive esports, and rap that rewards listening closely.",
    football: {
      eyebrow: "Football",
      story:
        "2014 was when I became a Messi fan. Watching Argentina lose the World Cup final against Germany — and seeing how devastated he looked — stayed with me. From that point I followed him closely, and following Messi meant following FC Barcelona. That is how I became a Culer: not as a separate club decision, but by walking the same path he was already on.",
      messi: {
        label: "Lionel Messi",
        since: "Fan since 2014",
        image: "/about/messi.jpg",
        alt: "Lionel Messi in an FC Barcelona kit facing the Camp Nou crowd",
      },
      barca: {
        label: "FC Barcelona",
        since: "Culer since 2015",
        image: "/about/fcbarcelona.jpg",
        alt: "FC Barcelona crest on blaugrana stripes",
      },
    },
    esports: {
      eyebrow: "Esports",
      intro:
        "Competitive games scratch a different itch than football — systems, drafts, clutches, and the long arc of a roster. Two orgs have stayed with me across seasons.",
      t1: {
        label: "T1 · League of Legends · Since 2015",
        title: "T1",
        detail: "League of Legends",
        since: "Since 2015",
        copy: "I have followed T1 since 2015 — long enough that the roster names have changed, but the standard they play under has not. What keeps me watching is the discipline of League at the highest level: drafting under pressure, mid-game adaptations, and that feeling when a teamfight finally snaps into place.",
        image: "/about/t1.jpg",
        alt: "T1 logo over a League of Legends-inspired jungle backdrop",
      },
      navi: {
        label: "NAVI · Counter-Strike 2 · Since 2020",
        title: "NAVI",
        detail: "Counter-Strike 2",
        since: "Since 2020",
        copy: "NAVI became my Counter-Strike team in 2020. CS rewards a different kind of attention — utility, timing, and nerves in the last rounds. I follow them for the same reason I still watch big football nights: the tension when a map could swing either way.",
        image: "/about/navi.jpg",
        alt: "NAVI logo on a dark Counter-Strike tactical backdrop",
      },
    },
    music: {
      eyebrow: "Music · Rap / Hip-hop",
      intro:
        "Rap is the soundtrack I return to when I want words with weight — technical writing, flow, and delivery that still hits after the hundredth listen.",
      eminem: {
        name: "Eminem",
        since: "Listening since 2015",
        copy: "I became an Eminem fan around 2015 after discovering Rap God. What caught me was not the hype alone, but the craft underneath it — speed, syllable density, internal rhymes, and a delivery that makes the technical work feel inevitable. That first impression stuck, and I have kept coming back for the same reasons: precision, intensity, and writing that rewards close listening.",
        image: "/about/eminem.webp",
        alt: "Portrait of Eminem",
        track: {
          id: "eminem-fuel",
          title: "Fuel ft. JID",
          artist: "Eminem",
          src: "/audio/Eminem - Fuel.mp3",
          favoriteLabel: "Favorite track",
        },
      },
      dsk: {
        name: "DSK",
        since: "Listening since 2017",
        copy: "I have been listening to DSK since 2017. What stands out for me is the writing and the way he rides a beat — the wordplay, the pacing, and a flow that feels deliberate without sounding stiff. His tracks are the ones I put on when I want lyrics that actually say something and a delivery that carries them.",
        image: "/about/dsk.jpg",
        alt: "Portrait of DSK",
        track: {
          id: "dsk-ngay-tan",
          title: "Ngày Tàn",
          artist: "DSK",
          src: "/audio/DSK - Ngay Tan.mp3",
          favoriteLabel: "Favorite track",
        },
      },
    },
    fitness: {
      eyebrow: "Fitness",
      title: "Gym · strength training",
      lead:
        "The gym is the simplest reset I have. No scoreboard, no roster drama — just showing up, lifting with intent, and leaving a little sharper than I arrived.",
      body:
        "Strength training has become part of how I keep energy and focus for everything else, including the work I ship. It is less about chasing a perfect physique and more about building a routine I can trust on ordinary days.",
      points: [
        {
          label: "Consistency",
          copy: "Showing up regularly beats waiting for motivation.",
        },
        {
          label: "Progressive work",
          copy: "Adding load and control over time, not random max-outs.",
        },
        {
          label: "Clear head",
          copy: "A session that resets focus before I go back to building.",
        },
      ],
      image: "/about/gym.jpg",
      alt: "Strength training session at the gym",
    },
  },
  availability: "Open to software engineering opportunities",
} as const;
