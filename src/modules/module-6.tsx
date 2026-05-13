/**
 * Module 6 — Claude Code: the power-user tool
 *
 * The most technical module so far. Aimed at professionals who are
 * willing to leave the chat interface behind and use Claude as a
 * working agent on their own filesystem. Uses the Studio portfolio
 * (AURES, Praxis, Brisbane Builder, etc.) as worked examples.
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 6.1 — What Claude Code is and why it's different
// ============================================================
export function WhatIsClaudeCode() {
  return (
    <>
      <BeginnerSection>
        <P>
          Claude Code is the most powerful product Anthropic ships — and the one most working
          professionals haven't tried. It's a separate application from Claude.ai. You install it on
          your computer, point it at a folder of files, and Claude gets the keys: it can read every file,
          edit them, create new files, run commands, browse the web, install packages, and operate over
          long sessions with real autonomy.
        </P>
        <P>
          In other words: Claude Code isn't a chat. It's an <Em>agent</Em>. The chat-based Claude is the
          intern who can answer questions. Claude Code is the intern who can also do the work.
        </P>

        <H2>The shift from chat to agent</H2>
        <P>
          Stop and notice what changes when you go from chat to agent:
        </P>
        <UL items={[
          <><Em>It can act, not just answer.</Em> Chat-Claude can tell you what command to run. Claude Code can run it.</>,
          <><Em>It can see your filesystem.</Em> Chat-Claude needs you to paste. Claude Code reads files directly, including ones it didn't know existed until you mentioned them.</>,
          <><Em>It can iterate.</Em> Chat-Claude gives you a code snippet you copy-paste. Claude Code writes the code, runs it, sees the error, fixes the error — without you doing anything.</>,
          <><Em>It can browse, install, deploy.</Em> Reach extends to whatever you give it permission for.</>,
        ]} />
        <P>
          The implication: you stop being the bottleneck. With chat, you have to do every action the AI
          recommends. With Claude Code, you describe the outcome you want, and the agent does the
          recommending and the doing.
        </P>

        <H2>Who Claude Code is for</H2>
        <P>
          Honest answer: anyone willing to spend a couple of hours learning how to use it. You do not
          need to be a "developer" in any formal sense. You need to be comfortable with:
        </P>
        <UL items={[
          'A terminal application (the black-screen-with-typing thing). You don\'t need to know commands; Claude Code does the typing.',
          'Letting an AI write files on your computer. The setup includes safety guards, but the model is clearly going to make changes.',
          'Iterating on instructions rather than expecting perfect first-try execution.',
        ]} />
        <P>
          What you don't need: coding ability, knowledge of programming languages, understanding of
          frameworks. Many of the most prolific Claude Code users in 2026 don't write code; they describe
          what they want, and Claude writes the code.
        </P>

        <H2>What people actually use Claude Code for</H2>
        <UL items={[
          <><Em>Building small web apps</Em> — calculators, dashboards, learning tools, internal tools. The whole Studio portfolio (AURES, Praxis, Brisbane Builder Guide, etc.) is built this way.</>,
          <><Em>Personal automation</Em> — scripts that process files, parse data, automate repetitive workflows.</>,
          <><Em>Data analysis</Em> — point Claude Code at a CSV, ask it to analyse, get an answer plus a script you can re-run.</>,
          <><Em>Document workflows</Em> — convert formats, extract data, batch-edit hundreds of files.</>,
          <><Em>Learning by doing</Em> — "build me a small project that demonstrates how [concept] works". You read the code Claude wrote to learn.</>,
          <><Em>Refactoring existing work</Em> — point at a codebase, ask for changes, watch them happen across many files at once.</>,
        ]} />

        <KeyCallout title="The big idea">
          Claude Code is what happens when an LLM can act, not just advise. Most working professionals
          have only used AI in chat form, where they're the bottleneck between the model and the world.
          Claude Code removes the bottleneck. The first time you ship something this way — start to
          finish, in one session, no copy-pasting — the change is hard to unsee.
        </KeyCallout>

        <TryIt>
          <P>The "watch a Claude Code demo" lesson, before you commit time to install:</P>
          <OL items={[
            'Search YouTube for "Claude Code walkthrough" — many creators have made 5-15 min demos.',
            'Pick one. Watch it.',
            'Note the rhythm: prompt → Claude reads files → Claude proposes changes → user approves → Claude makes changes → Claude runs the command → checks output → iterates if needed.',
            'Notice how much faster things move when the AI doesn\'t need a human to execute each step.',
          ]} />
          <P>
            If after the demo you think "I want that", continue to Lesson 6.2 (the PWA + GitHub + Pages
            pattern, where this whole Studio portfolio came from). If you don't, that's also a valid
            answer — Claude.ai chat will continue to serve most working professionals well. Claude Code
            is the next level for people willing to invest the time.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Installing Claude Code</H3>
        <P>
          The actual setup, as of 2026:
        </P>
        <OL items={[
          'Go to claude.com/code or claude.ai/code (Anthropic\'s landing page for Claude Code).',
          'Sign in with your Claude account (Pro tier or higher recommended).',
          'Download and install the application for your operating system.',
          'On first launch, Claude Code asks for a working folder. Point it at a folder you\'re comfortable letting it edit (start with an empty one, not your personal documents).',
          'Open the terminal interface inside Claude Code. You\'re now talking to an agent.',
        ]} />
        <P>
          First-run experience: it feels like a chat window inside a terminal. Type something. Watch
          Claude respond — and act, if action is required.
        </P>

        <H3>Permissions and safety</H3>
        <P>
          Claude Code asks for permission before doing anything potentially destructive:
        </P>
        <UL items={[
          'Editing a file → confirmation prompt.',
          'Creating a new file → confirmation prompt.',
          'Running a command → confirmation prompt.',
          'Installing a package → confirmation prompt.',
          'Browsing the web → permitted by default; you can tighten.',
        ]} />
        <P>
          You can configure auto-approve for trusted categories of action. The first session, leave
          everything on manual confirmation. Read what Claude is about to do. You'll learn the rhythm
          fast.
        </P>

        <H3>The fundamental loop</H3>
        <P>
          A working Claude Code session has a consistent loop:
        </P>
        <OL items={[
          <><Em>You state an outcome</Em>. "Build me a calculator for X." "Add Y feature." "Fix the bug in Z."</>,
          <><Em>Claude explores</Em>. Reads existing files, checks current state.</>,
          <><Em>Claude proposes</Em>. "I'll do A, B, C. Sound right?"</>,
          <><Em>You approve / refine</Em>. "Yes" or "actually, do A and C, skip B because..."</>,
          <><Em>Claude does the work</Em>. Edits files, runs commands. Each potentially-destructive step asks for confirmation.</>,
          <><Em>Claude reports</Em>. "Done. Here\'s what changed. Want to test?"</>,
          <><Em>You verify</Em>. Run the thing, check the output.</>,
          <><Em>Iterate</Em>.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>If you've installed Claude Code, your first useful task:</P>
          <Prompt>
            Create a new folder called "my-first-praxis-project". Inside it, build a single-file HTML page
            that has:
            - A title "My Praxis Notes"
            - A textarea where I can type notes
            - A button that saves notes to localStorage
            - A list below showing all saved notes
            - Dark theme

            Make it look reasonably polished. Open it in my browser when you're done.
          </Prompt>
          <P>
            Two-minute task. By the end you have: a folder, a working HTML file, an open browser tab
            with a working notes app. You wrote no code. You didn't open a file editor. That's the Claude
            Code experience.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The two big mental shifts</H3>
        <P>
          To get serious leverage from Claude Code, two shifts pay off:
        </P>

        <H3>1. Outcomes, not instructions</H3>
        <P>
          With chat-Claude, you specify the action: "show me how to write code that does X". With
          Claude Code, you specify the outcome: "make my app do X". The agent picks the implementation.
        </P>
        <P>
          This is a subtle but real shift in how you frame requests. Examples:
        </P>
        <UL items={[
          'Chat: "Write Python code to deduplicate a CSV file."',
          'Code: "Deduplicate the CSV in this folder, keeping the latest entry by date."',
          'Chat: "Show me how to build a static blog with Jekyll."',
          'Code: "Set up a static blog in this folder. Pick a sensible framework. Deploy to GitHub Pages."',
        ]} />

        <H3>2. Trust the agent to figure out the implementation</H3>
        <P>
          When you describe what you want at the outcome level, Claude Code will often pick
          implementations you wouldn't have. Sometimes you'll prefer the alternative. Sometimes Claude
          picks something better than you would have.
        </P>
        <P>
          The discipline: don't over-specify. Say what you want, then let Claude propose. Refine if the
          proposal is wrong. You'll spend less time being a project manager and more time being a product
          manager.
        </P>

        <H3>When Claude Code is the wrong tool</H3>
        <P>
          Honest list of when not to reach for it:
        </P>
        <UL items={[
          'One-off conceptual questions — chat is faster.',
          'Tasks where the writing is the thing — chat Claude\'s output is what you want, no execution required.',
          'Work that touches sensitive personal data and you don\'t want any AI on your filesystem — defensible position; use Claude.ai or Copilot for those.',
          'Anything where you can\'t reasonably review what the agent did — too high stakes.',
        ]} />

        <H3>The Studio portfolio as worked example</H3>
        <P>
          The full Praxis curriculum, AURES Intelligence, the Brisbane Builder Guide, Acknowledge
          Country, and the Studio landing page itself — all of these were built and are maintained
          using Claude Code. The repos are public; you can see what kind of work the agent produced.
        </P>
        <UL items={[
          <><a href="https://github.com/Travis-coder712/praxis" target="_blank" className="text-[color:var(--color-praxis)] hover:underline">github.com/Travis-coder712/praxis</a> — this curriculum.</>,
          <><a href="https://github.com/Travis-coder712/aures-db" target="_blank" className="text-[color:var(--color-praxis)] hover:underline">github.com/Travis-coder712/aures-db</a> — AURES Intelligence.</>,
          <><a href="https://github.com/Travis-coder712/studio" target="_blank" className="text-[color:var(--color-praxis)] hover:underline">github.com/Travis-coder712/studio</a> — Studio landing.</>,
        ]} />
        <P>
          Worth browsing if you want a sense of what a non-developer can produce with Claude Code. The
          code is what Claude wrote; the design decisions and the content are the human author's. The
          collaboration is more "writer-with-research-assistant" than "developer-with-tool".
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "build the whole thing in one session" exercise:</P>
          <OL items={[
            'Pick a small useful tool you wish existed — a calculator, tracker, simple game, learning aid.',
            'Describe it to Claude Code in one paragraph: what it does, who it\'s for, rough look.',
            'Watch Claude propose a structure. Approve.',
            'Iterate: "actually, also add..." / "make this look more like..."',
            'At the end of the session, you should have a working tool in your browser.',
          ]} />
          <P>
            First few sessions feel slow. By the fifth or sixth, you\'ll be producing one small tool per
            session, ~30-60 minutes each. The Studio portfolio was built this way over months.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — official page',                by: 'Anthropic',  url: 'https://claude.com/code', note: 'Sign up and download here.' },
        { kind: 'article', title: 'Claude Code — documentation',                by: 'Anthropic',  url: 'https://docs.claude.com/en/docs/claude-code', note: 'The official docs. Read the "getting started" section.' },
        { kind: 'video',   title: 'Anthropic — Claude Code demos',              by: 'Anthropic',  url: 'https://www.youtube.com/@Anthropic-AI', note: 'Official demos. Worth watching one before installing.' },
        { kind: 'article', title: 'Simon Willison\'s LLM journal — Claude Code', by: 'Simon Willison', url: 'https://simonwillison.net/series/llms/', note: 'Search his blog for "Claude Code" — substantial real-use writing.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 6.2 — The PWA + GitHub + Pages pattern
// ============================================================
export function PwaPattern() {
  return (
    <>
      <BeginnerSection>
        <P>
          One specific pattern accounts for an enormous proportion of what Claude Code is used for by
          non-developers: building small Progressive Web Apps (PWAs) and deploying them free on GitHub
          Pages. It's the pattern behind every project in the Studio portfolio. Worth understanding even
          if you never use it yourself.
        </P>

        <H2>What a PWA actually is</H2>
        <P>
          A Progressive Web App is a website that behaves like an app. Specifically:
        </P>
        <UL items={[
          'You access it via a URL in any browser.',
          'It can be "installed" — added to your home screen, Dock, or Start menu — and opens in its own window.',
          'It can work offline (with caching) once visited.',
          'It feels like a native app but doesn\'t require app store distribution.',
        ]} />
        <P>
          For working professionals, PWAs are the simplest practical deliverable. No app store. No native
          development. No installation friction for users. Just a URL.
        </P>

        <H2>What GitHub Pages does</H2>
        <P>
          GitHub Pages is a free hosting service that serves static websites from a GitHub repository.
          Push code; GitHub publishes it. Costs nothing. URL is{' '}
          <code>username.github.io/projectname/</code>. Works for hundreds of millions of users.
        </P>
        <P>
          The constraint: GitHub Pages only serves "static" files (HTML, CSS, JavaScript). No databases,
          no server-side code. For most personal and small-team tools, this is enough — and the
          simplicity is the point.
        </P>

        <H2>Why the pattern works</H2>
        <P>
          Combine PWA + GitHub Pages + Claude Code and you get:
        </P>
        <UL items={[
          <><Em>Build</Em> — Claude Code creates the PWA in a folder on your computer.</>,
          <><Em>Test</Em> — Claude Code runs a local dev server. You open it in your browser.</>,
          <><Em>Push</Em> — Claude Code commits to a GitHub repo. You can keep your work, version it, share it.</>,
          <><Em>Deploy</Em> — GitHub Pages serves it at a public URL. Automatic.</>,
          <><Em>Iterate</Em> — every change you describe gets built, tested, committed, and deployed in seconds.</>,
        ]} />
        <P>
          End-to-end, including the public URL, in a single Claude Code session. No accounts to set up
          beyond GitHub (free), no server infrastructure, no DevOps. The Brisbane Builder Guide PWA was
          built and shipped this way in a single afternoon.
        </P>

        <KeyCallout title="The big idea">
          PWA + GitHub Pages is the unit of value for a Claude Code user: the smallest thing you can
          conceive, build, and ship to a public URL in one session. Many other patterns work, but this
          one is the cleanest for working professionals because it requires no infrastructure beyond a
          free GitHub account.
        </KeyCallout>

        <TryIt>
          <P>The first end-to-end ship. Open Claude Code:</P>
          <Prompt>
            I want to build and deploy a small PWA. Here\'s what it does: [a short description of something
            useful — e.g., a habit tracker, a unit converter, a tax calculator, a daily checklist for kids].

            Build it as a Vite + React + TypeScript app with a dark theme. Set up the project. Make it
            look reasonably polished. Test it locally and confirm it works. Then push to a new GitHub
            repo called [whatever-you-want] and deploy to GitHub Pages.

            Take it step by step. Confirm with me before pushing to GitHub.
          </Prompt>
          <P>
            45-90 minutes later, you have a public URL. You\'ve shipped a thing. The repeatability is the
            point — once you\'ve done one, the next takes half the time. The Studio portfolio is dozens
            of these compounded over months.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The stack that consistently works for non-developers</H3>
        <P>
          For solo working professionals (i.e., not corporate dev teams), this stack has the best ratio
          of capability to simplicity:
        </P>
        <UL items={[
          <><Em>React</Em> — the front-end framework. Claude Code knows it deeply.</>,
          <><Em>Vite</Em> — the build tool. Fast, simple, ~zero configuration.</>,
          <><Em>TypeScript</Em> — JavaScript with types. Catches errors earlier; Claude Code uses it well.</>,
          <><Em>Tailwind CSS</Em> — utility-first styling. No "CSS files to manage" — just classes in your component.</>,
          <><Em>vite-plugin-pwa</Em> — adds the PWA manifest and service worker automatically.</>,
          <><Em>GitHub Pages</Em> — hosting. Free.</>,
          <><Em>GitHub Actions</Em> — auto-deploys on every push. Free.</>,
        ]} />
        <P>
          This is the stack of every Studio portfolio project. Claude Code will set it up in minutes; you
          don\'t need to understand each piece. Knowing the names lets you read what Claude is doing and
          ask better questions.
        </P>

        <H3>The "publish to a custom domain" upgrade</H3>
        <P>
          GitHub Pages URLs are <code>username.github.io/projectname/</code>. Fine for most users. If you
          want a custom domain (e.g., <code>my-app.com</code>):
        </P>
        <OL items={[
          'Buy a domain (Namecheap, Porkbun, Cloudflare Registrar — ~$10-15/year).',
          'Point the domain at GitHub Pages via DNS records (Claude Code can walk you through this).',
          'Configure the custom domain in your repo\'s Pages settings.',
          'Done. Your PWA now lives at your custom URL.',
        ]} />
        <P>
          Most working professionals don\'t bother for internal/personal tools. Worth doing when you have
          something you\'re sharing externally and want it to feel polished.
        </P>

        <H3>What this pattern can\'t do</H3>
        <P>Honest limits:</P>
        <UL items={[
          <><Em>No server-side processing</Em> — no databases, no user accounts, no email sending (without third-party services).</>,
          <><Em>Data lives in the browser</Em> — using <code>localStorage</code>. Means data doesn\'t sync across devices and is lost if you clear browser data.</>,
          <><Em>Public by default</Em> — anything on GitHub Pages is public. For private tools, you need a different deployment (Vercel, Netlify with password protection, or a private deployment).</>,
          <><Em>Can\'t process big files</Em> — large operations slow your browser. Server-side is needed for serious data work.</>,
        ]} />
        <P>
          For 80% of personal-use tools and shareable utilities, none of these matter. For the other
          20%, you\'ll need to step up to a more capable platform — which Claude Code can also do.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "small tool a week" practice:</P>
          <OL items={[
            'Each week, identify one small tool you wish existed for your work or life.',
            'In one Claude Code session, build and ship it.',
            'Add it to your personal toolbelt.',
            'After 8-12 weeks, you have a personal portfolio of tools you built — and a noticeable shift in how you think about "could I just build that?".',
          ]} />
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>From PWA to real backend — when and how</H3>
        <P>
          Eventually one of your PWAs needs more than the GitHub Pages constraints allow. The next-step
          options Claude Code can build:
        </P>
        <UL items={[
          <><Em>Vercel / Netlify</Em> — free hosting that supports serverless functions. PWA + a few server-side capabilities. Most common next step.</>,
          <><Em>Cloudflare Workers</Em> — more advanced serverless platform. Faster, more capable, slightly more complex.</>,
          <><Em>Supabase / Firebase</Em> — backend-as-a-service. Database, auth, storage. Free tiers generous enough for personal projects.</>,
          <><Em>A real server</Em> — if you need full control. Claude Code can set up a small Linux server on Hetzner or DigitalOcean for ~$5/month and deploy your code there.</>,
        ]} />
        <P>
          The discipline: only move up when you\'ve hit the constraint. Don\'t architect for scale you
          don\'t have. The "small Hetzner box hosting a few PWAs" setup runs surprisingly far before
          you need anything fancier.
        </P>

        <H3>The Studio portfolio as a case study</H3>
        <P>
          The full Studio portfolio architecture, end of 2026:
        </P>
        <UL items={[
          <><Em>aures-db</Em> — Vite + React PWA with a backend data pipeline. The backend runs locally on the author\'s Mac; outputs are JSON files that get committed and served as static data by GitHub Pages.</>,
          <><Em>praxis</Em> (this curriculum) — pure static PWA. No backend at all. All content is React TSX files.</>,
          <><Em>brisbane-builder-guide</Em>, <Em>acknowledge-country</Em> — small PWAs, pure static. Each in its own GitHub repo.</>,
          <><Em>studio</Em> — the landing page. Single static HTML file.</>,
          <><Em>Dashboard.html</Em> — the personal dashboard. Local file, never deployed.</>,
        ]} />
        <P>
          Total monthly hosting cost: $0. All public PWAs free on GitHub Pages. The "backend" for AURES
          runs on Travis\'s Mac (cron job, weekly). Total infrastructure: free GitHub account + a Mac
          that\'s on most of the time.
        </P>
        <P>
          This is what's available to any working professional willing to invest the time. The
          economic-leverage delta between this setup and traditional small-team software development is
          two-to-three orders of magnitude.
        </P>

        <H3>When to outgrow the pattern</H3>
        <P>
          Signs the PWA + GitHub Pages pattern is no longer right:
        </P>
        <UL items={[
          'You need users to log in.',
          'You need data to persist across devices for different users.',
          'You need to send emails / SMS / notifications.',
          'You need to process more data than fits in browser memory.',
          'You need real-time multi-user collaboration.',
          'Your tool is becoming a real product, not a personal utility.',
        ]} />
        <P>
          When you hit these, Claude Code can scale you up. But until you hit them, the simplicity is
          the feature.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "audit my Claude Code output" exercise. Open one of your previous Claude Code projects:</P>
          <OL items={[
            'Read the README. Does it explain what the project is and how it works?',
            'Read the main source file. Can you understand what it does?',
            'Check the deploy workflow (.github/workflows/deploy.yml). Does it make sense?',
            'Ask Claude Code: "review this repo. What could be simpler? What\'s unnecessary?"',
            'Often: there\'s 20-30% of the code you don\'t need. Trim.',
          ]} />
          <P>
            Most Claude Code output is "fine" — works, deploys, no obvious bugs. With one round of review
            it becomes "good" — same functionality, less complexity. With practice, you start writing
            requests that produce "good" first time.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Vite — getting started',          by: 'Vite',           url: 'https://vitejs.dev/guide/', note: 'You don\'t need to read this end-to-end. Skim once.' },
        { kind: 'article', title: 'GitHub Pages documentation',       by: 'GitHub',         url: 'https://docs.github.com/en/pages', note: 'The hosting layer. Claude Code handles the setup.' },
        { kind: 'article', title: 'PWA documentation — MDN',          by: 'MDN',            url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps', note: 'If you want to understand what a PWA actually is technically.' },
        { kind: 'video',   title: 'Theo Browne — modern web stack',    by: 't3.gg',          url: 'https://www.youtube.com/@t3dotgg', note: 'For when you want to dive deeper into the React/TS ecosystem.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 6.3 — Beyond PWAs
// ============================================================
export function BeyondPwas() {
  return (
    <>
      <BeginnerSection>
        <P>
          PWAs are the most photogenic Claude Code output, but the most-used capabilities are humbler
          and arguably more leveraged. Five categories worth knowing about.
        </P>

        <H2>1. Personal automation scripts</H2>
        <P>
          One-off or scheduled scripts that do something specific. Examples:
        </P>
        <UL items={[
          '"Read all the PDFs in this folder, extract the first table from each, save as CSV."',
          '"Watch this folder. When a new file appears, rename it based on its content and move to the right subfolder."',
          '"Every Monday morning, fetch my Google Calendar and write a weekly plan to a Notion page."',
          '"Process this list of 500 customer addresses. Geocode each. Output to a map."',
        ]} />
        <P>
          These are tasks that previously required either a developer or hours of manual work. With
          Claude Code: 20 minutes to describe and have built.
        </P>

        <H2>2. Data analysis</H2>
        <P>
          Point Claude Code at a CSV / Excel / JSON file. Ask it to analyse. Claude writes Python (or
          R, or SQL) to do the analysis, runs it, shows you the output, often produces charts.
        </P>
        <P>
          The leverage over chat-Claude: chat-Claude tells you how to do the analysis. Claude Code does
          it and tells you the answer. For one-off analyses this is decisive.
        </P>

        <H2>3. Document workflows</H2>
        <UL items={[
          'Bulk-rename hundreds of files based on content.',
          'Convert hundreds of Word docs to PDF (or markdown, or HTML).',
          'Extract specific information from a folder of contracts.',
          'Reformat 50 spreadsheets to the same template.',
          'Generate a summary of every email in a folder.',
        ]} />
        <P>
          The pattern: you have a folder full of "stuff", and you want to do the same operation on each
          file. Manually: hours or days. Claude Code: one prompt, then it executes.
        </P>

        <H2>4. Learning by building</H2>
        <P>
          When you want to learn a new domain — a programming language, a framework, a software
          technique — describe what you want to learn and have Claude Code build a small project that
          demonstrates it. Then read the code Claude wrote.
        </P>
        <P>
          The principle: code you read while it's being built (and you can ask "why did you do it this
          way?") is much more memorable than reading textbooks.
        </P>

        <H2>5. Refactoring and migrations</H2>
        <P>
          Existing code that needs to change. "Add TypeScript to this JavaScript project." "Migrate this
          old Vue 2 app to Vue 3." "Convert all my notes from Markdown to MDX." Claude Code does the
          whole-codebase pass.
        </P>
        <P>
          This is one of the most lopsided value propositions: a task that took a team a week now takes
          a single person a few hours. Particularly useful for personal tools that have accumulated
          tech debt.
        </P>

        <KeyCallout title="The big idea">
          PWAs are the photogenic showcase. The real productivity gains come from the unglamorous
          stuff — automating the boring file-shuffling, getting data analysis answers in minutes
          instead of hours, refactoring without budget. The Studio portfolio is built with Claude Code;
          the actual ongoing time savings come from the 30-minute scripts the author writes that
          nobody else ever sees.
        </KeyCallout>

        <TryIt>
          <P>Pick one chore you do regularly that involves files on your computer. Examples:</P>
          <UL items={[
            'Renaming downloaded receipts by date and amount.',
            'Combining weekly status updates into a monthly summary.',
            'Backing up specific folders to specific places.',
            'Extracting attachments from emails saved as files.',
          ]} />
          <P>Now describe it to Claude Code:</P>
          <Prompt>
            I have a folder at [path]. It contains [description of files].

            I want to [describe the operation in plain English].

            Write a script that does this. Make it safe — don\'t delete anything; if you need to move
            files, write copies to a new folder first. Let me run it once on a small test set before
            running it on the real folder.
          </Prompt>
          <P>
            If the chore takes you 30 minutes a week, the script pays for itself in week 2. After a
            year of building such scripts you have a small but meaningful army of personal automation.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Scheduled / triggered automation</H3>
        <P>
          For scripts that should run repeatedly, Claude Code can also set up scheduling:
        </P>
        <UL items={[
          <><Em>cron / launchd</Em> (macOS, Linux) — run a script at a specific time daily, weekly, etc. Claude Code can write the cron entry / launchd plist.</>,
          <><Em>Task Scheduler</Em> (Windows) — same idea, Windows-native.</>,
          <><Em>GitHub Actions</Em> — if the script is in a GitHub repo, you can schedule it via Actions. Free tier generous.</>,
          <><Em>Folder watchers</Em> — scripts that wake up when a folder changes. Useful for "when a new file arrives, do X".</>,
        ]} />
        <P>
          The AURES Intelligence backend uses a Mac launchd entry to run a weekly pipeline that imports
          data, processes it, and commits updated JSON to GitHub. Total ongoing maintenance: roughly zero
          per week.
        </P>

        <H3>The "script that becomes a tool" arc</H3>
        <P>
          A common evolution:
        </P>
        <OL items={[
          'You write a one-off script in Claude Code to solve a specific problem.',
          'You realise you\'d want to run it again next week.',
          'You ask Claude Code to make it more general — add parameters, make it configurable.',
          'You realise you\'d want others to use it too.',
          'You ask Claude Code to wrap it in a PWA UI so users can interact without running scripts.',
          'You now have a tool you can share via a URL.',
        ]} />
        <P>
          Three steps from "personal script" to "shareable tool". Most people stop at step 1 because they
          assume the rest is hard. With Claude Code, each step is one prompt.
        </P>

        <H3>Sub-agents — the parallel-task pattern</H3>
        <P>
          Claude Code can spawn sub-agents to handle parallel tasks. Useful for:
        </P>
        <UL items={[
          'Searching across many directories simultaneously.',
          'Trying multiple approaches in parallel and comparing.',
          'Performing background analysis while you continue working with the main agent.',
        ]} />
        <P>
          More relevant for power users. Worth knowing the feature exists; not essential for basic use.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "automate your weekly chore" exercise:</P>
          <OL items={[
            'Pick a chore that takes 15-30 minutes weekly. Something file-based.',
            'In one Claude Code session: build a script that automates it.',
            'Test it on a small example.',
            'Set it up to run on a schedule (Claude Code can configure cron/launchd).',
            'Forget about the chore. Run a quick check monthly to confirm it\'s still working.',
          ]} />
          <P>
            Most professionals have 5-10 weekly chores that can be automated this way. The first one
            takes effort. The next nine take ~20 minutes each. Cumulative time savings: hours per week,
            forever.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Building tools other people use</H3>
        <P>
          The next-level move: building tools your team or organisation uses. Three patterns:
        </P>
        <UL items={[
          <><Em>Internal PWA on GitHub Pages</Em> — public URL, but only people who have the URL know about it. "Security through obscurity" works for small-scope internal tools.</>,
          <><Em>Password-protected deploy</Em> — Cloudflare Access in front of a GitHub Pages site, or use Vercel\'s password protection. Real auth, free tier available.</>,
          <><Em>Internal hosting</Em> — deploy to your organisation\'s internal server / Azure / AWS infrastructure. More involved, but appropriate for tools that handle internal data.</>,
        ]} />
        <P>
          For working professionals: the first pattern serves most use cases. If you have a tool that's
          useful to your team and doesn\'t involve sensitive data, "here\'s the URL, bookmark it" works
          fine.
        </P>

        <H3>The "agent as collaborator" pattern</H3>
        <P>
          The highest-leverage Claude Code use case is sustained collaboration on a project over weeks
          or months. The pattern:
        </P>
        <OL items={[
          'You and Claude Code share a project folder.',
          'Claude Code reads the existing state at the start of each session.',
          'You describe what you want to do that session.',
          'Claude executes. You review.',
          'Both of you commit your work (Claude Code can commit with attribution).',
          'Across sessions, the project grows. Both human and AI have history.',
        ]} />
        <P>
          The Praxis curriculum was built this way: roughly one session per module, with Claude Code
          handling the architecture, file generation, and deployment, while the human author shapes
          content and direction. Module 1 took the longest (architecture decisions). Subsequent modules
          dropped to 1-2 hours each, because the patterns were already in place.
        </P>

        <H3>Where Claude Code fails</H3>
        <P>
          Honest failure modes:
        </P>
        <UL items={[
          <><Em>Very large codebases</Em> — Claude Code\'s ability to "hold the whole project in mind" degrades past ~50-100 files. Workarounds: break into sub-projects, give Claude explicit guidance about which files to focus on.</>,
          <><Em>Niche frameworks or languages</Em> — anything with a small training-data presence (some Lisp dialects, niche embedded systems, very recent frameworks) is harder. Use a mainstream stack.</>,
          <><Em>Tasks requiring genuine novel research</Em> — Claude Code is great at "make this work" but not at "discover something new". The agent doesn\'t do research breakthroughs.</>,
          <><Em>Tasks requiring deep domain knowledge you haven\'t given it</Em> — if the project requires understanding your specific business in detail, you have to provide that understanding. Claude Code can\'t infer it.</>,
        ]} />

        <TryIt title="Try it (advanced)">
          <P>The "sustained collaboration" exercise:</P>
          <OL items={[
            'Pick a project that requires multiple sessions to build — something with 5-10 hours of work in it.',
            'Run weekly Claude Code sessions on it. Each session, advance the project.',
            'At the end of each session, ask Claude Code to update a "progress notes" file summarising what was done and what\'s next.',
            'Across 4-6 weeks, watch what gets built.',
          ]} />
          <P>
            The first project of this kind is enlightening. By the end, you have a working understanding
            of what sustained AI collaboration looks like — and a thing you built that you couldn\'t
            otherwise have built.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — common use cases',           by: 'Anthropic',  url: 'https://docs.claude.com/en/docs/claude-code', note: 'Look for the use-cases section. Updated regularly.' },
        { kind: 'video',   title: 'Theo Browne — Claude Code reactions',       by: 't3.gg',       url: 'https://www.youtube.com/@t3dotgg', note: 'Working developer\'s real-time reactions to using Claude Code. Useful for calibration.' },
        { kind: 'article', title: 'Ethan Mollick — AI as a writing partner',   by: 'Ethan Mollick', url: 'https://www.oneusefulthing.org/', note: 'His writing on agentic AI generally applies — search for "agent" in his archive.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 6.4 — Skills, hooks, sub-agents
// ============================================================
export function SkillsHooks() {
  return (
    <>
      <BeginnerSection>
        <P>
          Three Claude Code features that most users never touch — and the ones that turn it from a
          general assistant into a customised personal workbench. None are required to get value from
          Claude Code; all three reward investment.
        </P>

        <H2>Skills — your reusable capability library</H2>
        <P>
          A "skill" in Claude Code is a packaged capability: a description, a system prompt, and
          (optionally) a set of tools, all bundled together. Once defined, you can invoke a skill
          mid-conversation without re-explaining what to do.
        </P>
        <P>
          Examples of skills worth building:
        </P>
        <UL items={[
          <><Em>"Refactor for clarity"</Em> — a skill that reviews code and suggests simplifications.</>,
          <><Em>"Write release notes"</Em> — a skill that looks at git history since last release and drafts notes.</>,
          <><Em>"Check Australian English"</Em> — a skill that scans content and flags American spelling.</>,
          <><Em>"Update changelog"</Em> — adds an entry to CHANGELOG.md in your house style.</>,
        ]} />
        <P>
          Anthropic ships some skills by default (the document skills for Word, Excel, PDF, PowerPoint
          handling are particularly useful). You add your own as you discover patterns you keep
          repeating.
        </P>

        <H2>Hooks — automatic actions at key moments</H2>
        <P>
          A "hook" is a script that runs automatically when Claude Code reaches certain moments in its
          workflow:
        </P>
        <UL items={[
          <><Em>UserPromptSubmit</Em> — when you send a prompt.</>,
          <><Em>PreToolUse</Em> — before Claude does an action (edit file, run command).</>,
          <><Em>PostToolUse</Em> — after Claude does an action.</>,
          <><Em>Stop</Em> — when Claude finishes a turn.</>,
        ]} />
        <P>
          Hooks let you enforce policies. Examples:
        </P>
        <UL items={[
          <>Run a linter automatically after every code edit.</>,
          <>Block edits to specific protected files.</>,
          <>Log all tool uses to a journal file.</>,
          <>Run tests automatically when Claude finishes a session.</>,
          <>Send yourself a desktop notification when a long task completes.</>,
        ]} />

        <H2>Sub-agents — parallel work</H2>
        <P>
          Sub-agents are independent Claude instances Claude Code can spawn to handle parallel tasks.
          The main agent stays in conversation with you; sub-agents go off and do specific things.
        </P>
        <P>
          Useful for:
        </P>
        <UL items={[
          'Searching multiple directories in parallel.',
          'Trying multiple approaches and comparing results.',
          'Background analysis while the main thread continues.',
          'Long-running independent tasks (data downloads, batch processing).',
        ]} />
        <P>
          Most working professionals won\'t use sub-agents directly. They become valuable as your usage
          gets sophisticated.
        </P>

        <KeyCallout title="The big idea">
          Skills, hooks, sub-agents are the customisation layer. With them, Claude Code stops being a
          generic agent and becomes your personal workbench — with your patterns, your policies, your
          preferred workflows baked in. Optional but compounding.
        </KeyCallout>

        <TryIt>
          <P>Build your first skill. Pick something you do repeatedly with Claude Code:</P>
          <Prompt>
            I want to make a Claude Code skill called "audit-and-trim" that does this:
            - Reviews the current project\'s code.
            - Identifies sections that could be simpler.
            - Suggests specific simplifications.
            - Doesn\'t make changes — just produces a report.

            Set this up as a skill I can invoke by name in future sessions.
          </Prompt>
          <P>
            Once defined, you can invoke "audit-and-trim" mid-session in any Claude Code conversation.
            Saves describing the task each time.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The skill anatomy</H3>
        <P>
          A skill consists of:
        </P>
        <UL items={[
          <><Em>name</Em> — short identifier (e.g. "audit-and-trim").</>,
          <><Em>description</Em> — when to use this skill, in one sentence. Used by Claude Code to decide whether to invoke automatically.</>,
          <><Em>system prompt / instructions</Em> — the detailed prompt that defines what the skill does.</>,
          <><Em>tools allow-list</Em> (optional) — restrict what the skill can do.</>,
          <><Em>example invocations</Em> (optional) — sample prompts that should invoke this skill.</>,
        ]} />
        <P>
          The description matters more than people expect. Claude Code uses it to decide automatically
          when to invoke the skill. A vague description means the skill rarely fires; a precise one
          means it fires reliably.
        </P>

        <H3>Hook patterns worth knowing</H3>
        <UL items={[
          <><Em>The auto-format hook</Em>: PostToolUse on Edit operations runs your project's formatter. Means Claude Code\'s output is automatically formatted to your standards.</>,
          <><Em>The test-on-stop hook</Em>: Stop event runs your test suite. Catches breakages immediately.</>,
          <><Em>The protected-files hook</Em>: PreToolUse on Edit blocks edits to specific files (e.g., production configs).</>,
          <><Em>The journal hook</Em>: PostToolUse logs every action to a file. Useful for auditing what Claude did over a long session.</>,
          <><Em>The notification hook</Em>: Stop event triggers a system notification when long tasks complete.</>,
        ]} />

        <H3>The configuration files</H3>
        <P>
          Skills and hooks live in configuration files in your home directory or per-project:
        </P>
        <UL items={[
          <><code>~/.claude/skills/</code> — global skills available in every project.</>,
          <><code>~/.claude/settings.json</code> — global hook config.</>,
          <><code>.claude/skills/</code> — project-specific skills.</>,
          <><code>.claude/settings.json</code> — project-specific hooks and config.</>,
        ]} />
        <P>
          Documenting your own skills and hooks (especially project-specific ones) is a form of personal
          IP. They travel with your projects in git, persist across sessions, and accumulate value.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Set up a simple hook. The "auto-format on edit" is the highest-leverage starter:</P>
          <Prompt>
            Add a PostToolUse hook that automatically runs my project\'s formatter (e.g., prettier or
            eslint) after every file edit. Configure it in .claude/settings.json for this project.
          </Prompt>
          <P>
            After this is set up, you don\'t have to remember to format. Every Claude Code session
            produces consistently-formatted code. Small win, every session, forever.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Multi-project skill libraries</H3>
        <P>
          The advanced pattern: maintain a personal skill library that travels with you across
          projects. Examples worth building:
        </P>
        <UL items={[
          <><Em>"summarise-changes"</Em> — looks at recent git history and produces a human-readable summary.</>,
          <><Em>"check-deploy-ready"</Em> — runs through a checklist before deploying (tests passing, no console.log, etc.).</>,
          <><Em>"explain-this-codebase"</Em> — when entering an unfamiliar project, produces a brief overview.</>,
          <><Em>"propose-architecture"</Em> — for greenfield projects, walks through the tech choices interactively.</>,
        ]} />
        <P>
          These compound over time. After a year of skill-building, you have a personal AI workbench
          tailored to how you work.
        </P>

        <H3>Sub-agent orchestration</H3>
        <P>
          For sophisticated work, sub-agents enable patterns like:
        </P>
        <UL items={[
          <><Em>The investigator pattern</Em>: main agent assigns sub-agents to investigate different aspects of a problem in parallel, then synthesises.</>,
          <><Em>The author / critic pattern</Em>: one sub-agent drafts, another critiques, a third reconciles. Module 7\'s Council pattern applied within Claude Code.</>,
          <><Em>The exploration pattern</Em>: spawn sub-agents to try different implementations of the same feature; compare outputs; pick the winner.</>,
        ]} />
        <P>
          These are advanced moves. Most professional Claude Code users won\'t reach for them; for those
          who do, the productivity ceiling jumps another order of magnitude.
        </P>

        <H3>The fewer-permission-prompts pattern</H3>
        <P>
          Out of the box, Claude Code asks permission before nearly every action. This is safe but
          slow. As you gain trust:
        </P>
        <UL items={[
          'Auto-approve read operations (file reads, search, web fetches).',
          'Auto-approve specific commands you trust (running tests, formatters, git status).',
          'Keep manual approval for destructive operations (delete, force push, etc.).',
        ]} />
        <P>
          Configure auto-approve thoughtfully and per-project. The right balance: Claude does its work
          fluidly, with you intervening only at decision points.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "personal Claude Code config" exercise. Spend one Saturday morning building out your
          configuration:</P>
          <OL items={[
            'Open <code>~/.claude/skills/</code>. Build 3-5 skills based on patterns you use repeatedly.',
            'Open <code>~/.claude/settings.json</code>. Add 2-3 hooks for common automations.',
            'Configure auto-approve for read operations and trusted commands.',
            'Commit this all to a private Git repo (your "personal Claude Code config repo").',
            'When you set up a new machine, you have a one-step restore.',
          ]} />
          <P>
            This is the deepest customisation step. Worth it for serious power users. Skip for casual use.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — Skills',         by: 'Anthropic',     url: 'https://docs.claude.com/en/docs/claude-code/skills' },
        { kind: 'article', title: 'Claude Code — Hooks',          by: 'Anthropic',     url: 'https://docs.claude.com/en/docs/claude-code/hooks' },
        { kind: 'article', title: 'Claude Code — Sub-agents',     by: 'Anthropic',     url: 'https://docs.claude.com/en/docs/claude-code/sub-agents' },
        { kind: 'article', title: 'Configuration reference',       by: 'Anthropic',     url: 'https://docs.claude.com/en/docs/claude-code/settings', note: 'The full settings.json reference.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 6.5 — Try it: build something small
// ============================================================
export function TryItCC() {
  return (
    <>
      <BeginnerSection>
        <P>
          The Module 6 capstone. A guided 30-minute build that takes you from "Claude Code installed" to
          "I shipped a working tool". Done well, the rest of the module clicks into place.
        </P>

        <H2>What you're building</H2>
        <P>
          A small PWA that lets you track a personal habit (sleep hours, exercise minutes, steps,
          meditation — pick whatever's useful to you). The app:
        </P>
        <UL items={[
          'Lets you log a daily value.',
          'Stores in localStorage (no backend).',
          'Shows a chart of the last 30 days.',
          'Computes simple stats (average, best, worst).',
          'Works offline once loaded (PWA).',
          'Deploys to GitHub Pages with a public URL.',
        ]} />
        <P>
          Small enough to ship in 30-60 minutes. Useful enough to actually use afterward.
        </P>

        <H2>Pre-requisites</H2>
        <UL items={[
          'Claude Code installed (Lesson 6.1).',
          'GitHub account (sign up at github.com — free).',
          'Pick a habit you actually want to track.',
        ]} />

        <H2>The session</H2>

        <H3>Step 1 — Set the scene</H3>
        <P>Open Claude Code in an empty folder. First prompt:</P>
        <Prompt>
          I want to build and deploy a personal habit tracker as a PWA. Here\'s what it should do:

          - I log a daily value for a single habit (let\'s call it "[your habit]").
          - Stores data in localStorage.
          - Shows a chart of the last 30 days.
          - Computes average, best, worst.
          - Works offline once loaded.
          - Deploys to GitHub Pages.

          Stack: Vite + React + TypeScript + Tailwind + vite-plugin-pwa.

          Before you start coding, propose a project structure and confirm with me.
        </Prompt>

        <H3>Step 2 — Approve the structure</H3>
        <P>
          Claude Code will propose: a Vite project, the file layout, the libraries needed. Read the
          proposal. If anything looks off, push back. If it looks fine, approve.
        </P>

        <H3>Step 3 — Watch Claude build</H3>
        <P>
          Claude Code will scaffold the project, install dependencies (with confirmation), and start
          building the components. Each major file creation, you'll be asked to confirm. Approve as
          things look right.
        </P>

        <H3>Step 4 — Test locally</H3>
        <Prompt>Run the dev server and open it in my browser so I can test.</Prompt>
        <P>
          You should now have a working habit tracker open in your browser. Try logging values. Check
          the chart updates. Note anything you'd change.
        </P>

        <H3>Step 5 — Iterate</H3>
        <P>
          Inevitably you'll want changes. The polish round is where Claude Code shines:
        </P>
        <UL items={[
          '"Make the chart bigger."',
          '"Add a streak counter — consecutive days I\'ve logged."',
          '"Change the colours to feel calmer."',
          '"Add a way to delete a wrong entry."',
        ]} />
        <P>
          Each is one prompt. Each takes 30 seconds for Claude to implement. Iterate freely until
          you're happy.
        </P>

        <H3>Step 6 — Deploy</H3>
        <Prompt>
          Push this to a new GitHub repo called "[name]". Set up GitHub Pages deployment via GitHub
          Actions. Once deployed, give me the public URL.
        </Prompt>
        <P>
          Claude Code will create the repo, configure the deploy workflow, push, wait for the first
          deploy, and report the URL. ~3-5 minutes.
        </P>

        <H3>Step 7 — Use it</H3>
        <P>
          Open the public URL. Add it to your home screen / bookmark bar. Log today's habit value.
        </P>
        <P>
          You just shipped a working tool. Total elapsed time: probably 45 minutes. Total code you
          wrote: zero. Public URL, working app, your own data.
        </P>

        <KeyCallout title="What just happened">
          You went from idea to shipped public tool in under an hour, without writing a line of code.
          Claude Code did the implementation; you did the directing. The skill that compounds is
          knowing how to direct. After 10 of these, you stop thinking of "could I build that?" as a
          question — it becomes "should I build that?" instead.
        </KeyCallout>

        <TryIt>
          <P>Actually do it. Don't read further first. The lesson is in the doing.</P>
          <P>
            If you don't have Claude Code installed yet — install it now (Lesson 6.1). The capstone
            doesn't work as an abstract concept; it works as a session you complete.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Recurring patterns to spot</H3>
        <P>
          Across your first 5-10 Claude Code sessions, you'll notice patterns:
        </P>
        <UL items={[
          <><Em>The "explain your plan first" rhythm</Em> — asking Claude to propose before acting saves rework. Make it standard.</>,
          <><Em>The "small steps" instinct</Em> — break ambitious tasks into ~5 sub-tasks Claude can complete in order. Easier to verify each.</>,
          <><Em>The "iterate after seeing it work" habit</Em> — get to "working but rough" fast, then refine. Don't try to perfect each piece before moving on.</>,
          <><Em>The "git as safety net" practice</Em> — commit before every risky operation. Easy to roll back if Claude breaks something.</>,
        ]} />

        <H3>The "review the code Claude wrote" habit</H3>
        <P>
          For learning: skim the code Claude generates. You don't need to understand every line. But
          notice patterns. Notice how files connect. Notice library names. After a few projects, you'll
          recognise the structure of a React app, a Python script, a deploy workflow.
        </P>
        <P>
          The compounding effect: after 6 months of Claude Code use, you'll have absorbed a substantial
          amount of practical software literacy without ever sitting down to "learn programming".
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Build a second project that builds on the first:</P>
          <Prompt>
            Now build a second habit tracker for a different habit. Use the same stack. But this time,
            instead of starting from scratch, copy the first one and adapt.
          </Prompt>
          <P>
            Watch how Claude handles the "copy and modify" task. Note how much faster it is than starting
            from scratch. This is how a personal portfolio compounds: each project becomes a template
            for the next.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>From session to project to product</H3>
        <P>
          The arc of becoming a sophisticated Claude Code user, roughly:
        </P>
        <OL items={[
          <><Em>Week 1-2</Em>: getting comfortable with the interface. Lots of confirmations. Slow.</>,
          <><Em>Week 3-4</Em>: first end-to-end project. The habit tracker capstone or equivalent.</>,
          <><Em>Month 2</Em>: 3-5 projects shipped. Starting to recognise patterns.</>,
          <><Em>Month 3-4</Em>: building skills and hooks. Customising your workbench.</>,
          <><Em>Month 6+</Em>: maintaining a portfolio of personal tools. Helping colleagues build theirs.</>,
          <><Em>Year 1</Em>: you've internalised the "could I just build that?" frame. Often, you can.</>,
        ]} />

        <H3>The non-developer's superpower</H3>
        <P>
          The single most-underrated outcome of Claude Code competence: a non-developer who can build
          working tools has a meaningful capability advantage in any knowledge-work role. The advantage
          isn't "I can code now" — it's "the friction between 'this would be useful' and 'this exists'
          dropped by 50x".
        </P>
        <P>
          Most professionals never invest the few weeks needed to cross that threshold. The ones who do
          report it as one of the highest-leverage time investments of the decade.
        </P>

        <KeyCallout title="End of Module 6">
          You now understand what Claude Code is, how it differs from chat, the PWA + GitHub + Pages
          pattern that powers practical use, what else it can do, the customisation layer, and how a
          first shipped project feels. You've installed it (probably) and built at least one thing.
          <br /><br />
          Module 7 covers multi-model workflows — the "Council" pattern where multiple AIs review each
          other's work. It applies whether you use Claude Code, Copilot, or just chat AIs — but the
          pattern is most powerful when one of the models is agentic.
        </KeyCallout>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — quickstart guide',     by: 'Anthropic',      url: 'https://docs.claude.com/en/docs/claude-code/quickstart' },
        { kind: 'video',   title: 'Claude Code — building a real app',  by: 'Anthropic',      url: 'https://www.youtube.com/@Anthropic-AI', note: 'Their demos. Watch one to feel the rhythm.' },
        { kind: 'article', title: 'AURES source — built with Claude Code', by: 'Travis Hughes', url: 'https://github.com/Travis-coder712/aures-db', note: 'Open-source example of a non-trivial Claude-Code-built project. Read the commit history.' },
        { kind: 'article', title: 'Praxis source — built with Claude Code', by: 'Travis Hughes', url: 'https://github.com/Travis-coder712/praxis', note: 'This curriculum, built with Claude Code. Look at the module files.' },
      ]} />
    </>
  )
}
