
import { useState } from 'react'
import {
  Home as HomeIcon,
  BriefcaseBusiness,
  Leaf,
  Users,
  MessageSquare,
  ArrowLeft,
  ChevronRight,
  Droplets,
  Recycle,
  Zap,
  Send,
  CheckCircle,
  Menu
} from 'lucide-react'

const jobs = [
  {
    name: 'Production',
    number: 120,
    icon: '🏭',
    overview: 'Support daily production activities and help maintain smooth operations.',
    skills: 'Teamwork, attention to detail, communication and willingness to learn.',
    benefit: 'Creates employment opportunities and helps residents develop practical workplace skills.'
  },
  {
    name: 'Technicians',
    number: 70,
    icon: '⚙️',
    overview: 'Assist with technical operations, equipment maintenance and operational support.',
    skills: 'Technical knowledge, problem-solving, safety awareness and attention to detail.',
    benefit: 'Provides opportunities to develop technical knowledge and skills for future careers.'
  },
  {
    name: 'Administration',
    number: 40,
    icon: '📋',
    overview: 'Support office operations, documentation, coordination and communication.',
    skills: 'Organization, computer skills, communication and time management.',
    benefit: 'Builds administrative and professional skills that can be useful in different industries.'
  },
  {
    name: 'Security & Cleaning',
    number: 20,
    icon: '🛡️',
    overview: 'Help maintain a safe, organized and clean project environment.',
    skills: 'Responsibility, teamwork, reliability and awareness of safety procedures.',
    benefit: 'Provides local income opportunities and supports a safe working environment.'
  }
]

const environmentalItems = [
  {
    title: 'Water Management',
    icon: Droplets,
    description: 'Monitor water consumption, avoid unnecessary use and improve water efficiency.',
    importance: 'Responsible water use helps conserve natural resources.'
  },
  {
    title: 'Waste Management',
    icon: Recycle,
    description: 'Reduce waste, separate recyclable materials and ensure responsible disposal.',
    importance: 'Better waste management helps reduce pollution and supports a cleaner environment.'
  },
  {
    title: 'Energy Efficiency',
    icon: Zap,
    description: 'Monitor energy consumption and reduce unnecessary energy use.',
    importance: 'Using energy more efficiently can help reduce environmental impacts.'
  }
]

function Header() {
  return (
    <header className="bg-[#193D31] px-5 py-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C5D8C9]">
            GREENTECH
          </p>
          <p className="mt-1 text-[10px] text-[#DCE7DF]">
            SUSTAINABILITY & COMMUNITY
          </p>
        </div>
        <div className="rounded-full border border-white/20 p-2">
          <Menu size={17} />
        </div>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-4">
      {eyebrow && (
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#688676]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-bold text-[#193D31]">{title}</h2>
      {description && (
        <p className="mt-2 text-xs leading-5 text-[#69766E]">{description}</p>
      )}
    </div>
  )
}

function Card({ children, onClick, className = '' }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl border border-[#E8EAE2] bg-white p-4 shadow-sm ${onClick ? 'cursor-pointer transition hover:border-[#A7BBAA]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

function HomePage({ navigate }) {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-[#E8EFE7] p-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#688676]">
          STAKEHOLDER PORTAL
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-tight text-[#193D31]">
          Growing together for a better future.
        </h1>
        <p className="mt-3 text-xs leading-5 text-[#596B60]">
          Discover how GreenTech aims to create positive local impact through
          employment, environmental responsibility and community engagement.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Card>
          <p className="text-[10px] text-[#78847B]">Total project jobs</p>
          <p className="mt-1 text-3xl font-bold text-[#193D31]">250</p>
          <p className="mt-1 text-[10px] text-[#78847B]">Across job categories</p>
        </Card>
        <Card>
          <p className="text-[10px] text-[#78847B]">Local hiring target</p>
          <p className="mt-1 text-3xl font-bold text-[#193D31]">70%</p>
          <p className="mt-1 text-[10px] text-[#78847B]">175 local positions</p>
        </Card>
      </div>

      <Card className="flex items-center justify-between">
        <div>
          <p className="text-[10px] text-[#78847B]">Project duration</p>
          <p className="mt-1 text-lg font-bold text-[#193D31]">3 months</p>
        </div>
        <div className="rounded-xl bg-[#EEF3EC] p-3 text-xl">📅</div>
      </Card>

      <div>
        <SectionTitle
          eyebrow="OUR COMMITMENTS"
          title="What matters to us"
          description="Explore the areas where GreenTech aims to make a meaningful difference."
        />
        <div className="space-y-3">
          <Card onClick={() => navigate('jobs')}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#EEF3EC] p-3 text-xl">👷</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-[#193D31]">Local Employment</h3>
                <p className="mt-1 text-[11px] text-[#78847B]">Create opportunities and support local skills.</p>
              </div>
              <ChevronRight size={18} className="text-[#688676]" />
            </div>
          </Card>

          <Card onClick={() => navigate('environment')}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#EEF3EC] p-3 text-xl">🌱</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-[#193D31]">Environmental Responsibility</h3>
                <p className="mt-1 text-[11px] text-[#78847B]">Encourage responsible resource management.</p>
              </div>
              <ChevronRight size={18} className="text-[#688676]" />
            </div>
          </Card>

          <Card onClick={() => navigate('community')}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#EEF3EC] p-3 text-xl">🤝</div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-[#193D31]">Community Engagement</h3>
                <p className="mt-1 text-[11px] text-[#78847B]">Listen, communicate and work together.</p>
              </div>
              <ChevronRight size={18} className="text-[#688676]" />
            </div>
          </Card>
        </div>
      </div>

      <div className="rounded-2xl bg-[#193D31] p-4 text-white">
        <p className="text-sm font-bold">Our goal</p>
        <p className="mt-2 text-xs leading-5 text-[#DCE7DF]">
          Build trust through responsible actions, transparent communication
          and meaningful benefits for the surrounding community.
        </p>
      </div>

      <Card onClick={() => navigate('feedback')}>
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-[#EEF3EC] p-3">
            <MessageSquare size={20} className="text-[#426A53]" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-[#193D31]">Your voice matters</h3>
            <p className="mt-1 text-[11px] text-[#78847B]">Share a question, suggestion or concern.</p>
          </div>
          <ChevronRight size={18} className="text-[#688676]" />
        </div>
      </Card>
    </div>
  )
}

function JobsPage({ openJob }) {
  return (
    <div className="space-y-5">
      <SectionTitle
        eyebrow="OUR COMMITMENT"
        title="Local Employment"
        description="Creating job opportunities for local residents, supporting household income and strengthening local skills."
      />

      <Card>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] text-[#78847B]">Local hiring target</p>
            <p className="mt-1 text-3xl font-bold text-[#193D31]">70%</p>
          </div>
          <p className="text-right text-xs text-[#78847B]">
            <strong className="block text-lg text-[#193D31]">175</strong>
            of 250 positions
          </p>
        </div>
        <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#E9EDE7]">
          <div className="h-full w-[70%] rounded-full bg-[#6D9478]" />
        </div>
        <p className="mt-2 text-[10px] text-[#78847B]">Local hiring target</p>
      </Card>

      <div>
        <SectionTitle
          title="Job opportunities"
          description="Explore the different roles within the project."
        />
        <div className="space-y-3">
          {jobs.map((job) => (
            <Card key={job.name} onClick={() => openJob(job)}>
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#EEF3EC] p-3 text-xl">{job.icon}</div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-[#193D31]">{job.name}</h3>
                  <p className="mt-1 text-[11px] text-[#78847B]">Explore role details</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#193D31]">{job.number}</p>
                  <p className="text-[9px] text-[#78847B]">Positions</p>
                </div>
                <ChevronRight size={17} className="text-[#688676]" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <h3 className="text-sm font-bold text-[#193D31]">Benefits for the community</h3>
        <ul className="mt-3 space-y-2 text-xs leading-5 text-[#69766E]">
          <li>• More opportunities to earn local income.</li>
          <li>• Practical experience and skills development.</li>
          <li>• Greater participation in the local economy.</li>
        </ul>
      </Card>
    </div>
  )
}

function JobDetail({ job, back }) {
  return (
    <div className="space-y-4">
      <button onClick={back} className="flex items-center gap-2 text-xs font-semibold text-[#688676]">
        <ArrowLeft size={16} /> Back to job opportunities
      </button>

      <div className="rounded-2xl bg-[#E8EFE7] p-5">
        <div className="text-3xl">{job.icon}</div>
        <h2 className="mt-3 text-xl font-bold text-[#193D31]">{job.name}</h2>
        <p className="mt-1 text-sm text-[#688676]">{job.number} positions</p>
      </div>

      <Card>
        <h3 className="text-sm font-bold text-[#193D31]">Role overview</h3>
        <p className="mt-2 text-xs leading-5 text-[#69766E]">{job.overview}</p>
      </Card>

      <Card>
        <h3 className="text-sm font-bold text-[#193D31]">Relevant skills</h3>
        <p className="mt-2 text-xs leading-5 text-[#69766E]">{job.skills}</p>
      </Card>

      <Card>
        <h3 className="text-sm font-bold text-[#193D31]">Community benefits</h3>
        <p className="mt-2 text-xs leading-5 text-[#69766E]">{job.benefit}</p>
      </Card>
    </div>
  )
}

function EnvironmentPage() {
  return (
    <div className="space-y-4">
      <SectionTitle
        eyebrow="OUR COMMITMENT"
        title="Environmental Responsibility"
        description="Responsible resource management is an important part of creating a more sustainable project."
      />

      {environmentalItems.map((item) => {
        const Icon = item.icon
        return (
          <Card key={item.title}>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#EEF3EC] p-3">
                <Icon size={21} className="text-[#52765D]" />
              </div>
              <h3 className="text-sm font-bold text-[#193D31]">{item.title}</h3>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#69766E]">{item.description}</p>
            <div className="mt-3 rounded-xl bg-[#F4F6F1] p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#688676]">Why it matters</p>
              <p className="mt-1 text-xs leading-5 text-[#69766E]">{item.importance}</p>
            </div>
          </Card>
        )
      })}

      <Card>
        <h3 className="text-sm font-bold text-[#193D31]">Transparency and monitoring</h3>
        <p className="mt-2 text-xs leading-5 text-[#69766E]">
          Keep stakeholders informed about environmental measures, progress
          and concerns through clear and accessible updates.
        </p>
      </Card>
    </div>
  )
}

function CommunityPage({ navigate }) {
  const items = [
    ['📢', 'Project updates', 'Share project progress, upcoming activities and important announcements so stakeholders stay informed.'],
    ['💬', 'Open communication', 'Give residents opportunities to ask questions, express concerns and receive responses.'],
    ['🤝', 'Community participation', 'Encourage discussions, information sessions and local activities to support collaboration.']
  ]

  return (
    <div className="space-y-4">
      <SectionTitle
        eyebrow="OUR COMMITMENT"
        title="Community Engagement"
        description="Building positive relationships through communication, participation and listening."
      />

      {items.map(([icon, title, description]) => (
        <Card key={title}>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#EEF3EC] p-3 text-xl">{icon}</div>
            <h3 className="text-sm font-bold text-[#193D31]">{title}</h3>
          </div>
          <p className="mt-3 text-xs leading-5 text-[#69766E]">{description}</p>
        </Card>
      ))}

      <div className="rounded-2xl bg-[#193D31] p-4 text-white">
        <h3 className="text-sm font-bold">Let's stay connected</h3>
        <p className="mt-2 text-xs leading-5 text-[#DCE7DF]">
          Your feedback helps us understand community needs and improve communication.
        </p>
        <button
          onClick={() => navigate('feedback')}
          className="mt-4 rounded-xl bg-white px-4 py-2 text-xs font-bold text-[#193D31]"
        >
          Share your feedback
        </button>
      </div>
    </div>
  )
}

function FeedbackPage() {
  const [type, setType] = useState('Suggestion')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center text-center">
        <div className="rounded-full bg-[#E8EFE7] p-5">
          <CheckCircle size={38} className="text-[#52765D]" />
        </div>
        <h2 className="mt-5 text-xl font-bold text-[#193D31]">Thank you!</h2>
        <p className="mt-2 max-w-[230px] text-xs leading-5 text-[#69766E]">
          Your feedback has been recorded in this demonstration.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setMessage('')
            setType('Suggestion')
          }}
          className="mt-5 rounded-xl bg-[#193D31] px-5 py-3 text-xs font-bold text-white"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <SectionTitle
        eyebrow="YOUR VOICE MATTERS"
        title="Share your feedback"
        description="Your questions, suggestions and concerns help us understand what matters to the community."
      />

      <Card>
        <label className="text-xs font-bold text-[#193D31]">What would you like to share?</label>
        <div className="mt-3 space-y-2">
          {['Suggestion', 'Question', 'Concern'].map((option) => (
            <button
              key={option}
              onClick={() => setType(option)}
              className={`w-full rounded-xl border px-3 py-3 text-left text-xs ${
                type === option
                  ? 'border-[#52765D] bg-[#EEF3EC] font-bold text-[#193D31]'
                  : 'border-[#E8EAE2] text-[#69766E]'
              }`}
            >
              <span className="mr-2">{type === option ? '●' : '○'}</span>
              {option}
            </button>
          ))}
        </div>

        <label className="mt-5 block text-xs font-bold text-[#193D31]">
          Your message
        </label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your message here..."
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-[#E8EAE2] bg-[#FAFBF8] p-3 text-xs outline-none focus:border-[#688676]"
        />

        <button
          onClick={() => setSubmitted(true)}
          disabled={!message.trim()}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#193D31] py-3 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send size={15} /> Submit feedback
        </button>
      </Card>

      <p className="text-center text-[10px] leading-4 text-[#78847B]">
        Thank you for taking the time to share your thoughts.
      </p>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState('home')
  const [selectedJob, setSelectedJob] = useState(null)

  const navigate = (nextPage) => {
    setSelectedJob(null)
    setPage(nextPage)
  }

  const openJob = (job) => {
    setSelectedJob(job)
  }

  const tabs = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'jobs', label: 'Jobs', icon: BriefcaseBusiness },
    { id: 'environment', label: 'Environment', icon: Leaf },
    { id: 'community', label: 'Community', icon: Users }
  ]

  const pageTitles = {
    home: 'Welcome',
    jobs: 'Local Employment',
    environment: 'Environment',
    community: 'Community',
    feedback: 'Feedback'
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#E8EAE4] p-3 sm:p-6">
      <div className="flex h-[700px] w-full max-w-[350px] flex-col overflow-hidden rounded-[32px] border-[7px] border-[#193D31] bg-[#F7F7F1] shadow-2xl">
        <Header />

        <div className="flex items-center justify-between border-b border-[#E8EAE2] bg-[#F7F7F1] px-5 py-3">
          <p className="text-xs font-semibold text-[#193D31]">
            {selectedJob ? selectedJob.name : pageTitles[page]}
          </p>
          <span className="text-[9px] font-medium text-[#849087]">GREENTECH PORTAL</span>
        </div>

        <main className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
          {selectedJob ? (
            <JobDetail job={selectedJob} back={() => setSelectedJob(null)} />
          ) : page === 'home' ? (
            <HomePage navigate={navigate} />
          ) : page === 'jobs' ? (
            <JobsPage openJob={openJob} />
          ) : page === 'environment' ? (
            <EnvironmentPage />
          ) : page === 'community' ? (
            <CommunityPage navigate={navigate} />
          ) : (
            <FeedbackPage />
          )}
        </main>

        {!selectedJob && (
          <nav className="grid grid-cols-4 border-t border-[#E8EAE2] bg-white px-1 py-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className={`flex flex-col items-center gap-1 py-1 text-[9px] ${
                  page === id ? 'font-bold text-[#193D31]' : 'text-[#98A29A]'
                }`}
              >
                <Icon size={19} strokeWidth={page === id ? 2.5 : 1.8} />
                {label}
              </button>
            ))}
          </nav>
        )}

        {page === 'feedback' && !selectedJob && (
          <div className="border-t border-[#E8EAE2] bg-white px-3 py-2">
            <button
              onClick={() => navigate('home')}
              className="w-full text-center text-[10px] font-semibold text-[#688676]"
            >
              ← Back to home
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
