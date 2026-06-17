

const painPoints = [
  "Facebook chat, Google Sheets, courier dashboards, and manual follow-ups scattered across the day",
  "Fake COD orders, inventory mistakes, and no single source of truth for orders or customers",
  "Teams that cannot scale because owners, staff, and reporting live in disconnected tools",
];

const solutionPoints = [
  "Centralized order, inventory, customer, and courier workflows in one SaaS workspace",
  "Fraud detection, analytics, and role-based access designed for multi-tenant operations",
  "Subscription-ready architecture for stores, staff, and platform-level administration",
];

const modules = [
  {
    title: "Authentication & RBAC",
    description: "JWT sessions, Google OAuth, password recovery, and scoped permissions for every role.",
  },
  {
    title: "Store & Product Ops",
    description: "Manage catalog, stock, promotions, and branded store settings from one interface.",
  },
  {
    title: "Order Management",
    description: "Track order status, assign staff, add notes, and keep customer communication organized.",
  },
  {
    title: "Customer Intelligence",
    description: "Build complete customer histories with repeat-order signals and behavioral context.",
  },
  {
    title: "Fraud Prevention",
    description: "Flag risky COD patterns before they drain margin and reduce delivery success.",
  },
  {
    title: "Analytics & Billing",
    description: "Monitor growth, revenue, and subscriptions with platform-wide visibility.",
  },
];

const roles = [
  {
    name: "Super Admin",
    description: "Oversee the platform, manage subscriptions, monitor health, and access audit trails.",
  },
  {
    name: "Store Owner",
    description: "Run products, orders, inventory, staff, branding, and reporting for a single store.",
  },
  {
    name: "Staff Member",
    description: "Execute assigned orders, update delivery progress, and support customer communication.",
  },
];

const features = [
  "Multi-tenant SaaS foundation for separate merchant workspaces",
  "Courier integration ready for RedX, Pathao, and SteadFast",
  "MongoDB, Redis, and file storage architecture for scale",
  "Built for Bangladesh and South Asia F-commerce workflows",
];

const roadmap = [
  "Foundation: authentication, tenant model, dashboard shell, and store onboarding",
  "Operations: products, inventory, orders, staff, and courier integrations",
  "Growth: analytics, billing, fraud detection, and automation",
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#07111f] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(45,212,191,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(251,191,36,0.14),_transparent_28%),linear-gradient(180deg,_rgba(15,23,42,0.7),_rgba(7,17,31,0.98))]" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-[18rem] h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-6 sm:px-8 lg:px-12">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">CommerceFlow</p>
            <p className="mt-2 text-sm text-slate-300">Multi-tenant F-commerce management for Facebook sellers.</p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm text-slate-300">
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/50 hover:text-white" href="#problem">
              Problem
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/50 hover:text-white" href="#modules">
              Modules
            </a>
            <a className="rounded-full border border-white/10 px-4 py-2 transition hover:border-cyan-300/50 hover:text-white" href="#roles">
              Roles
            </a>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-14 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Built for Bangladesh and South Asia F-commerce teams
            </div>

            <h1 className="mt-7 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              One control room for orders, inventory, fraud, and growth.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              CommerceFlow is the operating system for Facebook sellers who need to replace scattered tools with a single
              multi-tenant platform for stores, staff, customers, couriers, analytics, and billing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                href="#modules"
              >
                Explore the platform
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                href="#roadmap"
              >
                View roadmap
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Multi-tenant", "Isolated store workspaces with shared platform controls"],
                ["RBAC", "Permissions for super admins, owners, and staff"],
                ["Automation-ready", "Courier, billing, and fraud workflows ready to scale"],
              ].map(([label, description]) => (
                <article key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100/80">{label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-white/5 to-amber-300/10 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/70">Platform snapshot</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-3xl font-semibold text-white">24/7</p>
                  <p className="mt-1 text-sm text-slate-300">Order visibility across every store.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-3xl font-semibold text-white">3 roles</p>
                  <p className="mt-1 text-sm text-slate-300">Super admin, store owner, and staff.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-3xl font-semibold text-white">1 stack</p>
                  <p className="mt-1 text-sm text-slate-300">Orders, analytics, billing, and operations in one system.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <p className="text-3xl font-semibold text-white">0 chaos</p>
                  <p className="mt-1 text-sm text-slate-300">Less manual tracking, fewer mistakes, faster dispatch.</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4 text-sm leading-6 text-cyan-50">
                Designed to replace the fragmented workflow of Facebook Messenger, Google Sheets, courier portals, and ad hoc
                reporting with a product built for merchants who want to scale.
              </div>
            </div>
          </aside>
        </section>

        <section id="problem" className="py-8 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-rose-200/70">Problem</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">F-commerce sellers are forced to operate with disconnected tools.</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                {painPoints.map((point) => (
                  <p key={point} className="rounded-2xl border border-white/8 bg-slate-950/50 p-4 leading-7">
                    {point}
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-cyan-300/15 bg-cyan-300/8 p-7 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/70">Solution</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">CommerceFlow consolidates the entire seller workflow into one platform.</h2>
              <div className="mt-6 space-y-4 text-cyan-50/85">
                {solutionPoints.map((point) => (
                  <p key={point} className="rounded-2xl border border-cyan-300/15 bg-slate-950/55 p-4 leading-7">
                    {point}
                  </p>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="modules" className="py-8 sm:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-amber-100/70">Core modules</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">The operating blocks of the platform.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              The homepage surfaces the major capabilities from the product docs so the app feels like a real product, not a placeholder.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((module) => (
              <article key={module.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/[0.07]">
                <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{module.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="roles" className="py-8 sm:py-12">
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/70">User roles</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Built around the responsibilities of each person in the workflow.</h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {roles.map((role) => (
              <article key={role.name} className="rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-6">
                <h3 className="text-xl font-semibold text-white">{role.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <article className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-200/70">Killer features</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">The features that make the platform worth building.</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-3 rounded-2xl border border-white/8 bg-slate-950/45 p-4 leading-7">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article id="roadmap" className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-amber-300/10 via-white/5 to-cyan-300/10 p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-100/80">Development roadmap</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">A clean path from platform shell to business engine.</h2>
              <div className="mt-6 space-y-4">
                {roadmap.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-sm font-semibold text-slate-950">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{step}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="rounded-[2.25rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-2xl shadow-cyan-950/20">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/70">Ready to scale</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
              CommerceFlow turns Facebook selling into a structured, measurable, and scalable business.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              The homepage now reflects the actual product direction from the docs: multi-tenant operations, role-based access,
              automation, courier coordination, and analytics for serious merchants.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
