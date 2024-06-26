const mockData = [
  {
    Title: "Mucho Bien",
    Subtitle: "(Zeds Dead Remix)",
    Author: "Blue Foundation, Zeds Dead",
    Album: "Eyes on Fire",
    TrackTime: "5:20",
  },
  {
    Title: "Sunflower",
    Subtitle: "(Spider-Man: Into the Spider-Verse)",
    Author: "Post Malone, Swae Lee",
    Album: "Spider-Man: Into the Spider-Verse",
    TrackTime: "2:41",
  },
  { Title: "Blinding Lights", Subtitle: "", Author: "The Weeknd", Album: "After Hours", TrackTime: "3:22" },
  { Title: "Circles", Subtitle: "", Author: "Post Malone", Album: "Hollywood's Bleeding", TrackTime: "3:35" },
  {
    Title: "Levitating",
    Subtitle: "(feat. DaBaby)",
    Author: "Dua Lipa, DaBaby",
    Album: "Future Nostalgia",
    TrackTime: "3:23",
  },
  {
    Title: "Peaches",
    Subtitle: "(feat. Daniel Caesar & Giveon)",
    Author: "Justin Bieber, Daniel Caesar, Giveon",
    Album: "Justice",
    TrackTime: "3:18",
  },
  { Title: "Watermelon Sugar", Subtitle: "", Author: "Harry Styles", Album: "Fine Line", TrackTime: "2:54" },
  {
    Title: "Save Your Tears",
    Subtitle: "(with Ariana Grande) [Remix]",
    Author: "The Weeknd, Ariana Grande",
    Album: "After Hours",
    TrackTime: "3:11",
  },
  {
    Title: "Rockstar",
    Subtitle: "(feat. Roddy Ricch)",
    Author: "DaBaby, Roddy Ricch",
    Album: "Blame It on Baby",
    TrackTime: "3:01",
  },
  { Title: "Dance Monkey", Subtitle: "", Author: "Tones and I", Album: "The Kids Are Coming", TrackTime: "3:29" },
  {
    Title: "Mucho Bien",
    Subtitle: "(Zeds Dead Remix)",
    Author: "Blue Foundation, Zeds Dead",
    Album: "Eyes on Fire",
    TrackTime: "5:20",
  },
  {
    Title: "Sunflower",
    Subtitle: "(Spider-Man: Into the Spider-Verse)",
    Author: "Post Malone, Swae Lee",
    Album: "Spider-Man: Into the Spider-Verse",
    TrackTime: "2:41",
  },
  { Title: "Blinding Lights", Subtitle: "", Author: "The Weeknd", Album: "After Hours", TrackTime: "3:22" },
  { Title: "Circles", Subtitle: "", Author: "Post Malone", Album: "Hollywood's Bleeding", TrackTime: "3:35" },
  {
    Title: "Levitating",
    Subtitle: "(feat. DaBaby)",
    Author: "Dua Lipa, DaBaby",
    Album: "Future Nostalgia",
    TrackTime: "3:23",
  },
  {
    Title: "Peaches",
    Subtitle: "(feat. Daniel Caesar & Giveon)",
    Author: "Justin Bieber, Daniel Caesar, Giveon",
    Album: "Justice",
    TrackTime: "3:18",
  },
  { Title: "Watermelon Sugar", Subtitle: "", Author: "Harry Styles", Album: "Fine Line", TrackTime: "2:54" },
  {
    Title: "Save Your Tears",
    Subtitle: "(with Ariana Grande) [Remix]",
    Author: "The Weeknd, Ariana Grande",
    Album: "After Hours",
    TrackTime: "3:11",
  },
  {
    Title: "Rockstar",
    Subtitle: "(feat. Roddy Ricch)",
    Author: "DaBaby, Roddy Ricch",
    Album: "Blame It on Baby",
    TrackTime: "3:01",
  },
  { Title: "Dance Monkey", Subtitle: "", Author: "Tones and I", Album: "The Kids Are Coming", TrackTime: "3:29" },
  { Title: "Drivers License", Subtitle: "", Author: "Olivia Rodrigo", Album: "SOUR", TrackTime: "4:02" },
  { Title: "Good 4 U", Subtitle: "", Author: "Olivia Rodrigo", Album: "SOUR", TrackTime: "2:58" },
  {
    Title: "Bad Guy",
    Subtitle: "",
    Author: "Billie Eilish",
    Album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    TrackTime: "3:14",
  },
  { Title: "Senorita", Subtitle: "", Author: "Shawn Mendes, Camila Cabello", Album: "Shawn Mendes", TrackTime: "3:11" },
  { Title: "Memories", Subtitle: "", Author: "Maroon 5", Album: "JORDI", TrackTime: "3:09" },
  {
    Title: "Old Town Road",
    Subtitle: "(Remix)",
    Author: "Lil Nas X, Billy Ray Cyrus",
    Album: "7 EP",
    TrackTime: "2:37",
  },
  {
    Title: "Someone You Loved",
    Subtitle: "",
    Author: "Lewis Capaldi",
    Album: "Divinely Uninspired to a Hellish Extent",
    TrackTime: "3:02",
  },
  {
    Title: "Shallow",
    Subtitle: "",
    Author: "Lady Gaga, Bradley Cooper",
    Album: "A Star Is Born Soundtrack",
    TrackTime: "3:36",
  },
  { Title: "Lose You to Love Me", Subtitle: "", Author: "Selena Gomez", Album: "Rare", TrackTime: "3:27" },
  { Title: "Don't Start Now", Subtitle: "", Author: "Dua Lipa", Album: "Future Nostalgia", TrackTime: "3:03" },
  { Title: "Señorita", Subtitle: "", Author: "Shawn Mendes, Camila Cabello", Album: "Shawn Mendes", TrackTime: "3:11" },
  {
    Title: "Havana",
    Subtitle: "(feat. Young Thug)",
    Author: "Camila Cabello, Young Thug",
    Album: "Camila",
    TrackTime: "3:37",
  },
  { Title: "Shape of You", Subtitle: "", Author: "Ed Sheeran", Album: "÷ (Divide)", TrackTime: "4:24" },
  { Title: "Perfect", Subtitle: "", Author: "Ed Sheeran", Album: "÷ (Divide)", TrackTime: "4:23" },
  { Title: "Believer", Subtitle: "", Author: "Imagine Dragons", Album: "Evolve", TrackTime: "3:24" },
  { Title: "Thunder", Subtitle: "", Author: "Imagine Dragons", Album: "Evolve", TrackTime: "3:07" },
  { Title: "God's Plan", Subtitle: "", Author: "Drake", Album: "Scorpion", TrackTime: "3:19" },
  { Title: "Lucid Dreams", Subtitle: "", Author: "Juice WRLD", Album: "Goodbye & Good Riddance", TrackTime: "3:59" },
  { Title: "Sicko Mode", Subtitle: "", Author: "Travis Scott", Album: "ASTROWORLD", TrackTime: "5:12" },
  {
    Title: "Goosebumps",
    Subtitle: "",
    Author: "Travis Scott",
    Album: "Birds in the Trap Sing McKnight",
    TrackTime: "4:03",
  },
];

export default mockData;
