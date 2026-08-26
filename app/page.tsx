"use client";

import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  GraduationCap,
  Library,
  MapPin,
  MessageSquare,
  Monitor,
} from "lucide-react";

const student = {
  name: "John Ryan",
  age: 28,
  address: "1842 W. Addison Street, Chicago, IL 60613",
  academicYear: "2026–2027",
  program: "Master of Music — Orchestral Studies",
  school: "Eastlake Conservatory of Music",
  studentId: "ECM-2026-0427",
};

const courses = [
  {
    code: "GRAD-DEMO 501",
    name: "Graduate Orchestra Seminar",
    schedule: "Monday & Wednesday · 10:00–11:20 AM",
    color: "bg-violet-500",
  },
  {
    code: "GRAD-DEMO 514",
    name: "Advanced Analytical Techniques",
    schedule: "Tuesday & Thursday · 1:00–2:20 PM",
    color: "bg-sky-500",
  },
  {
    code: "GRAD-DEMO 532",
    name: "Research in Music History",
    schedule: "Friday · 9:00–11:40 AM",
    color: "bg-amber-500",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-100 font-sans text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <div className="flex items-center gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-700 font-serif text-xl font-bold text-white shadow-sm">
              EC
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.17em] text-indigo-700 uppercase">
                Eastlake Conservatory
              </p>
              <h1 className="mt-1 text-xl font-semibold tracking-tight">
                Student Dashboard
              </h1>
            </div>
          </div>
          <div className="hidden items-center gap-7 md:flex">
            <nav aria-label="Portal navigation" className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="#overview" className="text-indigo-700 hover:text-indigo-900">Overview</a>
              <a href="#academics" className="hover:text-indigo-700">Academics</a>
              <a href="#resources" className="hover:text-indigo-700">Resources</a>
            </nav>
            <div className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
              JR · Graduate Student
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <section id="overview" className="scroll-mt-8 overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl">
          <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-end md:p-10">
            <div>
              <span className="inline-flex rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold tracking-wider text-rose-200 uppercase ring-1 ring-rose-300/30">
                Graduate student · active term
              </span>
              <p className="mt-7 text-sm text-slate-400">Welcome back</p>
              <h2 className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
                {student.name}
              </h2>
              <p className="mt-3 text-lg text-slate-300">{student.program}</p>
              <p className="mt-1 text-sm text-slate-400">{student.school}</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 rounded-2xl bg-white/5 p-5 text-sm ring-1 ring-white/10">
              <div>
                <dt className="text-slate-400">Academic year</dt>
                <dd className="mt-1 font-semibold">{student.academicYear}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Student ID</dt>
                <dd className="mt-1 font-mono font-semibold">{student.studentId}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Age</dt>
                <dd className="mt-1 font-semibold">{student.age}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Delivery</dt>
                <dd className="mt-1 font-semibold">Online</dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-label="Student summary" className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Current credits", "9", "of 12 this term"],
            ["Program progress", "62%", "21 of 34 credits"],
            ["Academic standing", "Good", "Graduate program"],
            ["Next class", "Mon 10 AM", "Orchestra seminar"],
          ].map(([label, value, detail]) => (
            <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">{label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
              <p className="mt-1 text-xs text-slate-500">{detail}</p>
            </article>
          ))}
        </section>

        <div id="academics" className="mt-10 grid scroll-mt-8 gap-8 lg:grid-cols-[1.55fr_0.75fr]">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-indigo-700">Current term</p>
                <h2 className="text-2xl font-semibold tracking-tight">My classes</h2>
              </div>
              <CalendarDays className="h-6 w-6 text-slate-400" />
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <article
                  key={course.code}
                  className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className={`absolute inset-y-0 left-0 w-1.5 ${course.color}`} />
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-mono text-xs font-bold tracking-wider text-slate-500 uppercase">
                        {course.code}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold">{course.name}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                        <Clock3 className="h-4 w-4" /> {course.schedule}
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      <Monitor className="h-4 w-4" /> Online
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase">Fall term</p>
                  <h2 className="mt-1 text-xl font-semibold">Weekly schedule</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Central Time</span>
              </div>
              <div className="grid grid-cols-5 divide-x divide-slate-200">
                {[
                  ["Mon", "Orchestra", "10:00 AM"],
                  ["Tue", "Analysis", "1:00 PM"],
                  ["Wed", "Orchestra", "10:00 AM"],
                  ["Thu", "Analysis", "1:00 PM"],
                  ["Fri", "History", "9:00 AM"],
                ].map(([day, title, time]) => (
                  <div key={day} className="min-h-36 p-3 sm:p-4">
                    <p className="text-xs font-bold text-slate-500 uppercase">{day}</p>
                    <div className="mt-4 rounded-lg bg-indigo-50 p-2 ring-1 ring-indigo-100 sm:p-3">
                      <p className="text-xs font-semibold text-indigo-950 sm:text-sm">{title}</p>
                      <p className="mt-1 text-[0.65rem] text-indigo-600 sm:text-xs">{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-wider text-indigo-700 uppercase">Degree audit</p>
                  <h2 className="mt-1 text-xl font-semibold">Master of Music progress</h2>
                </div>
                <GraduationCap className="h-7 w-7 text-indigo-700" />
              </div>
              <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[62%] rounded-full bg-indigo-600" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-slate-500">
                <span>21 credits completed</span>
                <span>13 remaining</span>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[["Core studies", "9 / 12"], ["Performance", "8 / 12"], ["Electives", "4 / 10"]].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-100">
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="mt-1 text-xs text-slate-500">{value} credits</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <aside className="space-y-5">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <BookOpen className="h-6 w-6 text-indigo-700" />
              <h2 className="mt-4 text-lg font-semibold">Profile details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-slate-500">Mailing address</dt>
                  <dd className="mt-1 flex gap-2 font-medium leading-6">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                    {student.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-500">Study format</dt>
                  <dd className="mt-1 font-medium">Fully online</dd>
                </div>
              </dl>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold tracking-[0.16em] text-indigo-700 uppercase">
                Academic advising
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Registration for the spring term opens November 16. Meet with
                your faculty advisor before submitting your course plan.
              </p>
              <button
                type="button"
                className="mt-4 rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white"
              >
                View advising resources
              </button>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Upcoming</h2>
                <Bell className="h-5 w-5 text-indigo-700" />
              </div>
              <div className="mt-5 space-y-5">
                {[
                  ["Sep 14", "Theory analysis portfolio", "Advanced Analytical Techniques"],
                  ["Sep 18", "Orchestra coaching", "Virtual studio room 3"],
                  ["Sep 25", "Research proposal due", "Research in Music History"],
                ].map(([date, title, detail]) => (
                  <div key={title} className="flex gap-3">
                    <div className="h-fit min-w-14 rounded-lg bg-indigo-50 px-2 py-2 text-center text-xs font-bold text-indigo-700">{date}</div>
                    <div>
                      <p className="text-sm font-semibold leading-5">{title}</p>
                      <p className="mt-1 text-xs leading-4 text-slate-500">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section id="resources" className="mt-12 scroll-mt-8">
          <div>
            <p className="text-sm font-semibold text-indigo-700">Student services</p>
            <h2 className="text-2xl font-semibold tracking-tight">Resources and support</h2>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Library, "Digital library", "Scores, journals, and research databases"],
              [FileText, "Forms & records", "Transcripts, enrollment, and program forms"],
              [MessageSquare, "Faculty directory", "Connect with instructors and advisors"],
              [CalendarDays, "Academic calendar", "Term dates, recitals, and deadlines"],
            ].map(([Icon, title, detail]) => (
              <button key={title as string} type="button" className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
                <Icon className="h-6 w-6 text-indigo-700" />
                <span className="mt-5 flex items-center justify-between text-base font-semibold">
                  {title as string}<ChevronRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-700" />
                </span>
                <span className="mt-2 block text-sm leading-5 text-slate-500">{detail as string}</span>
              </button>
            ))}
          </div>
        </section>
        <p className="mt-10 text-center text-[9px] tracking-[0.12em] text-slate-400 uppercase">
          Sample — Not Valid · Fictional institution and data
        </p>
      </main>
    </div>
  );
}
