import { TimelineEvent } from '@/types';

// Extended interface for detailed event information
export interface DetailedEvent extends TimelineEvent {
  longDescription?: string;
  additionalInfo?: {
    title: string;
    content: string;
  }[];
  media?: {
    type: 'image' | 'video' | 'document';
    url: string;
    title: string;
  }[];
  links?: {
    title: string;
    url: string;
  }[];
}

// Detailed event data
export const detailedEvents: DetailedEvent[] = [
  {
    id: 1,
    date: "12:30",
    title: "Doris R. Tommas 🎈",
    description: "Bekannt geworden durch TikTok und co. Doris R. Tommas bekannt für ihere turbulent romantische Liebesromane.",
    image: "https://i.postimg.cc/2SjV7Mg2/doris2.jpg",
    longDescription: "Auf der Leipziger Buchmesse haben wir die Gelegenheit genutzt, uns ein Autogramm von ihr zu holen – ein echtes Highlight! Auch ein Foto mit ihr durfte natürlich nicht fehlen. Wer neugierig ist, kann gerne mal auf ihrem Instagram-Profil vorbeischauen – vielleicht entdeckt ihr ja auch uns. Eine Lesung gab es dieses Jahr zwar leider nicht, wie man auf dem Bild sieht, aber das kurze Gespräch mit ihr war trotzdem super spannend und persönlich.",
    additionalInfo: [
      {
        title: "Gruppe (Mitglieder)",
        content: "Anny & Tim"
      },
      {
        title: "Wartezeit in der Schlange",
        content: "ca. 20 Minuten"
      }
    ],
    media: [
      {
        type: "image",
        url: "https://i.postimg.cc/2SjV7Mg2/doris2.jpg",
        title: "Bilder"
      }
    ],
    links: [
      {
        title: "Website der Autorin",
        url: "https://doris-r-thomas.de/"
      }
    ]
  },
  {
    id: 2,
    date: "14:00",
    title: "Eine kleine französische Oase 🇫🇷",
    description: "Einmal an einem Glücksrad drehen und zack kommt man nicht mehr weg...",
    image: "https://i.postimg.cc/sXWX2rZD/franz.jpg",
    longDescription: " So erging es uns am Stand des Institut Français in der internationalen Halle der Leipziger Buchmesse. Eigentlich wollten wir nur kurz schauen, doch nach dem Dreh hieß es plötzlich: „Ihr spielt jetzt ein Spiel!“ Gespielt wurde eine abgewandelte Version von Dobble Classic, allerdings mit französischen Begriffen. Überraschenderweise haben wir sogar gewonnen. Doch bevor wir richtig durchatmen konnten, fing die Dame am Stand an, uns begeistert von Austauschprogrammen und Auslandsjahren in Frankreich zu erzählen. Dass ich Französisch bei der erstbesten Gelegenheit abgewählt habe, habe ich in dem Moment zum Glück nicht erwähnt. Trotzdem war’s eine lustige und unerwartete Begegnung – und ein kleines Highlight der Messe.",
    additionalInfo: [
      {
        title: "Gruppe (Mitglieder)",
        content: "Kito & Tim"
      },
      {
        title: "Teilnahme",
        content: "Anmeldungen sind noch bis zum Veranstaltungstag möglich."
      }
    ],
    media: [
      {
        type: "image",
        url: "https://i.postimg.cc/sXWX2rZD/franz.jpg",
        title: "Bilder"
      }
    ],
    links: [
      {
        title: "Website des Institut Français",
        url: "https://www.institutfrancais.de/de/deutschland/kultur/buch-ideen/buchmessen-und-festivals/leipziger-buchmesse-2025#/"
      }
    ]
  },
  {
    id: 3,
    date: "15:00",
    title: "Stadt, Land, Vollpfosten",
    description: "Diesmal ein freiwilliges Spiel",
    image: "https://i.postimg.cc/mkNgQywv/stadt.jpg",
    longDescription: "Auch in den Hallen der Manga-Comic-Con haben wir uns ein wenig umgeschaut. Dort sind wir auf den Stand des Verlags Denkriese gestoßen, der vor allem für das Spiel Stadt, Land, Vollpfosten bekannt ist. Passend zur Messe stellten sie eine Extreme-Version vor, die direkt vor Ort ausprobiert werden konnte. Also haben wir uns als Gruppe ein paar Runden gegönnt. Anfangs war es ziemlich witzig, aber nach einer Weile ließ der Spaß dann doch etwas nach. Trotzdem war die Stimmung am Stand sehr entspannt, auch wenn er ziemlich gut besucht war. Insgesamt ein netter Zwischenstopp auf unserem Rundgang durch die Messehallen – mal was anderes abseits von Büchern und Lesungen.",
    additionalInfo: [
      {
        title: "Gruppe (Mitglieder)",
        content: "Anny, Kito, Miriam , Jule & Tim"
      },
      {
        title: "Side Infos",
        content: "Nebem dem Stand war ein Cosplay-Event zu sehen. Das wir auch vorher kurz besucht haben."
      }
    ],
    media: [
      {
        type: "image",
        url: "https://i.postimg.cc/mkNgQywv/stadt.jpg",
        title: "Bilder"
      }
    ],
    links: [
      {
        title: "Rückblick Leipziger Buchmesse 2025 | DENKRIESEN",
        url: "https://www.youtube.com/watch?v=dk8h7Ic0wCo"
      }
    ]
  },

  {
    id: 4,
    date: "14:43",
    title: "Die Signierstunde des Wahnsinns 🕒",
    description: "Stundenlanges warten in der Schlange mit Jule",
    image: "https://i.postimg.cc/mkNgQywv/stadt.jpg",
    longDescription: "Es war einer dieser Momente, in denen man sich fragt, ob das Schicksal einem wohlgesonnen ist. Ohne ein reserviertes Ticket für die Signierstunde von Sebastian Fitzek wagte ich mich dennoch in die Schlange. Die Uhr zeigte 14:43 Uhr, und ich war bereit, alles auf eine Karte zu setzen. 14:56 Uhr – „Diese Schlange ist nur für Personen mit Reservierung“, informierte mich ein Mitarbeiter. Mein Herz setzte kurz aus. Doch dann fügte er hinzu: „Sie können trotzdem bleiben.“ Ein Funken Hoffnung keimte auf, und ich blieb stehen – unsicher, ob dies ein Akt der Gnade oder der Grausamkeit war. 15:28 Uhr – Kurz vor Beginn der Signierstunde wurde ich aus der Schlange in eine andere verwiesen. „Hier hätten Sie von Anfang an stehen sollen“, sagte man mir trocken. Der neue Standort? Eine Schlange, die sich aus der Halle hinaus erstreckte. Ich musste mich ganz hinten anstellen. Die Zeit lief gegen mich. 15:38 Uhr – Die bittere Wahrheit Zehn Minuten später trat Fitzeks Managerin an mich heran. Ihre Worte waren wie ein Dolchstoß: „Die Chance, dass Sie ein Autogramm bekommen, ist gleich null.“ Trotzdem blieb ich stehen. Hoffnungslosigkeit und Beharrlichkeit kämpften in meinem Inneren. 17:00 Uhr – Ein Lichtblick? Nach fast zwei Stunden bemerkte ich eine Person vor mir, die die Schlange verließ und fünf Minuten später triumphierend mit einem signierten Buch zurückkehrte. Sie hatte einfach die andere Seite des Standes genutzt! In diesem Moment traf ich zwei Frauen, die dasselbe Schicksal teilten wie ich. Gemeinsam schmiedeten wir einen Plan. Der Plan - Ein riskantes Manöver Eine von uns sollte mit unseren Büchern zur anderen Seite gehen und versuchen, sie signieren zu lassen. Es war ein gewagter Plan, aber unsere Hoffnung auf ein Autogramm trieb uns an. Wir drückten ihr die Bücher in die Hand und sahen ihr nach, wie sie in der Menge verschwand. 17:31 Uhr – Nach fünf Minuten kehrte unsere Botin zurück. In ihren Händen hielt sie nicht nur unsere Bücher mit Fitzeks Unterschrift, sondern auch die Erlösung von diesem nervenaufreibenden Tag. „Habt ihr noch etwas vor? Sonst können wir jetzt nach Hause gehen“, sagte sie lächelnd.Dieser Tag war eine Achterbahn der Gefühle – von Frustration über Hoffnung bis hin zu triumphaler Erleichterung. Vielleicht war es Fitzeks Thriller-Atmosphäre, die sich auf das reale Leben übertragen hatte.",
    additionalInfo: [
      {
        title: "Gruppe (Mitglieder)",
        content: "Jule"
      },
      {
        title: "Side Infos",
        content: "Für sämmtlichen Text auf diesem Post ist Jule verantwortlich."
      }
    ],
    media: [
      {
        type: "image",
        url: "https://i.postimg.cc/mkNgQywv/stadt.jpg",
        title: "Bilder"
      }
    ],
    links: [
      {
        title: "Rückblick Leipziger Buchmesse 2025 | DENKRIESEN",
        url: "https://www.youtube.com/watch?v=dk8h7Ic0wCo"
      }
    ]
  },

  
  {
    id: 5,
    date: "16:30",
    title: "Volle S-Bahn 🚋",
    description: "Ganz ohne Drama wärs ja zu langweilig",
    image: "https://i.postimg.cc/3rgN53Tt/snahn2.jpg",
    longDescription: "Ganz ohne Drama läuft’s halt nie. Blöd nur, dass wir dieses Mal selbst mittendrin steckten. Alles begann am Bahngleis, als plötzlich durchgesagt wurde, dass die S-Bahn nur am Ende des Steigs halten würde. Als sie dann ankam, war sofort klar: Da passen niemals alle rein. Und so kam es, dass wir sechs zurückblieben – allein am Messebahnhof, mit dem Gedanken im Kopf, dass wir im schlimmsten Fall noch eine Stunde länger in Leipzig festhängen würden. Aber hatten wir hatten Glück im Unglück: Die nächste S-Bahn kam nach nur zehn Minuten, war fast leer, und wir konnten problemlos den Rückweg antreten. Ein kleiner Nervenkitzel zum Schluss – aber am Ende ist ja alles gut gegangen. ",
    additionalInfo: [
      {
        title: "Gruppe (Mitglieder)",
        content: "Trsistan, Miriam, Ben, Laura, Lina & Tim"
      },
      {
        title: "Ganzbesondere Danksagungen",
        content: "An die DB für den tollen Service und einen netten Schüler aus dem Deutsch GK der sich sehr über unsere Situation gefreut hat 🫶"
      }
    ],
    media: [
      {
        type: "image",
        url: "https://i.postimg.cc/3rgN53Tt/snahn2.jpg",
        title: "Bilder"
      }
    ],
    links: [
      {
        title: "Petition: Kein Bonus für den Bahnvorstand: Endlich Pünktlichkeit und Barrierefreiheit!",
        url: "https://innn.it/bahnboni"
      }
    ]
  }
];

// Simple event data for the timeline
export const events: TimelineEvent[] = detailedEvents.map(({ id, date, title, description, image }) => ({
  id,
  date,
  title,
  description,
  image
})); 
