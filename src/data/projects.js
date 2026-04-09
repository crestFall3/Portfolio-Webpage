export const projects = [
  {
    id: 'finance',
    title: 'Personal Finance Dashboard',
    description: 'A full-featured budgeting app with real-time charts, transaction tracking, category breakdowns, and a mock authentication system. Built with a clean component architecture.',
    tags: ['React', 'TypeScript', 'Chart.js', 'Supabase'],
    demoUrl: 'https://finance-dashboard-ebon.vercel.app/',
    sourceUrl: 'https://github.com/ewajenrola/finance-dashboard',
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
    sourceUrl: 'https://github.com/ewajenrola/pong-game-python',
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
    sourceUrl: 'https://github.com/ewajenrola/youtube-playlist-downloader',
    codePlaceholder: `def download_playlist(url):
  ydl_opts = {
    'format': 'best',
    'outtmpl': '%(title)s.%(ext)s'
  }
  with YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])`,
  },
];
