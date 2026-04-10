export const projects = [
  {
    id: 'finance',
    title: 'Personal Finance Dashboard',
    description: 'A full-featured budgeting app with real-time charts, transaction tracking, category breakdowns, and a mock authentication system. Built with a clean component architecture.',
    tags: ['React', 'TypeScript', 'Chart.js', 'Supabase'],
    demoUrl: 'https://finance-dashboard-rose-mu.vercel.app/',
    sourceUrl: 'https://github.com/crestFall3/finance-dashboard',
    codePlaceholder: `const Dashboard = () => {
  const [data] = useFinance();
  return (
    <Layout>
      <Chart data={data} />
      <Metrics />
    </Layout>
  );
};`,
  },
  {
    id: 'studyguide',
    title: 'Database Study Guide',
    description: 'An interactive, single-page study guide for a university database course. Organized by exam frequency, with key terms, SQL examples, and practice questions for 9 weeks of content.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://database-study-guide.vercel.app/',
    sourceUrl: 'https://github.com/ewajenrola/database-study-guide',
    codePlaceholder: `-- CSC 401: Database Design
SELECT topic, frequency
FROM exam_topics
WHERE difficulty = 'HIGH'
ORDER BY frequency DESC;

-- Normalization, ERD,
-- Transactions, Indexing`,
  },
  {
    id: 'pong',
    title: 'Pong Game',
    description: 'A classic Pong arcade game built in Python using the Turtle graphics library. Implements object-oriented design with Ball, Paddle, and Scoreboard classes, plus in-game instructions.',
    tags: ['Python', 'Turtle', 'OOP'],
    sourceUrl: 'https://github.com/crestFall3/pong-game-python',
    codePlaceholder: `class Ball:
  def move(self):
    self.x += self.dx
    self.y += self.dy

class Scoreboard:
  def instructions(self):
    # Display game rules
    self.pen.write(HELP)`,
  },
  {
    id: 'ytdl',
    title: 'YouTube Playlist Downloader',
    description: 'A command-line tool to download full YouTube playlists using yt-dlp. Supports format selection, batch downloading, and custom output templates.',
    tags: ['Python', 'yt-dlp', 'CLI'],
    sourceUrl: 'https://github.com/crestFall3/youtube-playlist-downloader',
    codePlaceholder: `def download_playlist(url):
  ydl_opts = {
    'format': 'best',
    'outtmpl': '%(title)s.%(ext)s'
  }
  with YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])`,
  },
  {
    id: 'animedb',
    title: 'Anime DB',
    description: 'A modern web application for discovering and managing anime series. Fetches real-time data from an anime API, featuring search, trending lists, and seasonal releases.',
    tags: ['React', 'Vite', 'CSS', 'API'],
    demoUrl: 'https://web-dev-projects-jiyr.vercel.app/',
    sourceUrl: 'https://github.com/crestFall3/anime-db',
    codePlaceholder: `function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}`,
  },
  {
    id: 'invoice',
    title: 'Invoice Generator',
    description: 'A professional invoice creation tool with real-time calculations. Features customizable company branding, dynamic line items, and automatic tax/discount processing.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://invoice-generator-web-app-qjvx.vercel.app/',
    sourceUrl: 'https://github.com/crestFall3/Invoice-Generator-web-app',
    codePlaceholder: `const updateAmount = () => {
  const quantity = Number(quantityInput.value) || 0;
  const rate = Number(rateInput.value) || 0;
  const result = quantity * rate;
  amountDisplay.innerText = result.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  updateSubtotal();
};`,
  },
  {
    id: 'acme',
    title: 'Pixel Paradise',
    description: 'A multi-page anime-themed website featuring informational sections about Anime, Manga, and Light Novels. Built with a focus on semantic HTML and custom CSS layouts.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    demoUrl: 'https://p1-acme-1.vercel.app/',
    sourceUrl: 'https://github.com/crestFall3/acme-landing-page',
    codePlaceholder: `/* Style for Pixel Paradise Logo */
#pixel {
  color: deepskyblue;
}

header {
  background-color: #35424A;
  color: white;
  border-bottom: deepskyblue 3px solid;
}`,
  },
];
