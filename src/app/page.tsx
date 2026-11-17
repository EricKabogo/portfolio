import Image from 'next/image';
import PersonalProjects from '@/lib/PersonalProjects';

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive design',
      'SEO',
      'Accessibility standards',
    ],
  },
  {
    title: 'Backend & APIs',
    skills: ['REST APIs', 'Node.js', 'Nest.js', 'API integration & consumption'],
  },
  {
    title: 'Databases & platforms',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'Azure B2C', 'Strapi CMS'],
  },
  {
    title: 'Other tools',
    skills: ['Python', 'Git', 'ClickUp'],
  },
];

const contacts = [
  { label: 'Phone', value: '+254 706 003 581', href: 'tel:+254706003581' },
  { label: 'GitHub', value: 'github.com/EricKabogo', href: 'https://github.com/EricKabogo' },
  { label: 'LinkedIn', value: 'linkedin.com/in/erickabogo', href: 'https://www.linkedin.com/in/erickabogo/' },
];

const ArrowIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-4 w-4 ${className}`}
    aria-hidden="true"
  >
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-sm text-accent">{label}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 sm:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Full-stack developer · Nairobi, Kenya
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I&apos;m Eric Kabogo.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              I design and build web applications end to end, from the database
              and APIs to the interface people use every day.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-opacity hover:opacity-90"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-surface"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-64 overflow-hidden rounded-3xl border border-border md:max-w-sm">
            <Image
              src="/profile.jpg"
              alt="Portrait of Eric Kabogo"
              fill
              sizes="(min-width: 768px) 384px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading label="01 · Work" title="Selected projects" />
          <div className="space-y-20">
            {PersonalProjects.map((project) => (
              <article
                key={project.id}
                className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr] md:gap-12"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl border border-border bg-surface"
                  aria-label={`Open ${project.title}`}
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      fill
                      sizes="(min-width: 768px) 640px, 100vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
                    />
                  </div>
                </a>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-muted">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="mt-8 flex gap-6">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                      >
                        Visit site <ArrowIcon />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-muted hover:text-fg"
                      >
                        Source <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.4fr]">
          <SectionHeading label="02 · About" title="A bit about me" />
          <div>
            <p className="text-lg leading-relaxed text-muted">
              I am a software developer with a passion for building scalable web
              applications. With a strong background in full-stack development, I
              love turning complex problems into elegant, user-friendly solutions.
            </p>
            <h3 className="mb-6 mt-10 text-sm font-medium uppercase tracking-wide text-muted">
              Skills
            </h3>
            <dl className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <dt className="mb-3 font-medium">{group.title}</dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-full border border-border bg-surface px-3 py-1 text-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHeading label="03 · Contact" title="Let's build something" />
          <p className="-mt-6 mb-12 max-w-xl text-lg text-muted">
            Have a project in mind or want to talk? Email is the quickest way to
            reach me.
          </p>
          <a
            href="mailto:kabogoeric@gmail.com"
            className="inline-flex items-center gap-2 break-all text-2xl font-semibold tracking-tight text-accent hover:underline sm:text-4xl"
          >
            kabogoeric@gmail.com <ArrowIcon className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
          </a>
          <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {contacts.map((c) => (
              <div key={c.label} className="bg-bg p-6">
                <dt className="text-sm text-muted">{c.label}</dt>
                <dd className="mt-1">
                  <a
                    href={c.href}
                    {...(c.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="break-words font-medium hover:text-accent"
                  >
                    {c.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted">Based in Nairobi, Kenya.</p>
        </div>
      </section>
    </>
  );
}
