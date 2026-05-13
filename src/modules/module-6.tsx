/**
 * Module 6 — Claude Code: the power-user tool
 *
 * The most technical module in Praxis. Aimed at professionals who are
 * willing to leave the chat interface behind and use AI as a working
 * agent on their own filesystem. Generic — no specific portfolio
 * references — so a reader can apply the patterns to any project.
 *
 * Lesson 6.5 is a full step-by-step setup guide with a Print / Save
 * as PDF button so it can be used as a hand-out.
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  CostNote, DeeperDive, KeyCallout, Aside,
  PrintButton,
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
          professionals haven't tried. It is a separate application from Claude.ai. You install
          it on your computer, point it at a folder of files, and the model gets the keys: it can
          read every file, edit them, create new files, run commands, browse the web, install
          packages, and operate over long sessions with real autonomy.
        </P>
        <P>
          In other words: Claude Code isn't a chat. It is an <Em>agent</Em>. The chat-based
          Claude is the intern who can answer questions. Claude Code is the intern who can also
          do the work.
        </P>

        <H2>The shift from chat to agent</H2>
        <P>
          Stop and notice what changes when you go from chat to agent:
        </P>
        <UL items={[
          <><Em>It can act, not just answer.</Em> Chat-Claude can tell you what command to run. Claude Code can run it.</>,
          <><Em>It can see your filesystem.</Em> Chat-Claude needs you to paste. Claude Code reads files directly, including ones it did not know existed until you mentioned them.</>,
          <><Em>It can iterate.</Em> Chat-Claude gives you a code snippet you copy-paste. Claude Code writes the code, runs it, sees the error, fixes the error — without you doing anything.</>,
          <><Em>It can browse, install, deploy.</Em> Reach extends to whatever you give it permission for.</>,
        ]} />
        <P>
          The implication: you stop being the bottleneck. With chat, you have to do every action
          the AI recommends. With Claude Code, you describe the outcome you want, and the agent
          does the recommending and the doing.
        </P>

        <H2>Who Claude Code is for</H2>
        <P>
          Honest answer: anyone willing to spend a couple of hours learning how to use it. You do
          not need to be a "developer" in any formal sense. You need to be comfortable with:
        </P>
        <UL items={[
          "A terminal application (the black-screen-with-typing thing). You don't need to know commands; Claude Code does the typing.",
          'Letting an AI write files on your computer. The setup includes safety guards, but the model is clearly going to make changes.',
          'Iterating on instructions rather than expecting perfect first-try execution.',
        ]} />
        <P>
          What you don't need: coding ability, knowledge of programming languages, understanding
          of frameworks. Many of the most prolific Claude Code users in 2026 don't write code;
          they describe what they want, and the model writes the code.
        </P>

        <H2>What people actually use Claude Code for</H2>
        <UL items={[
          <><Em>Building small web apps</Em> — calculators, dashboards, learning tools, internal tools, personal trackers.</>,
          <><Em>Personal automation</Em> — scripts that process files, parse data, automate repetitive workflows.</>,
          <><Em>Data analysis</Em> — point Claude Code at a CSV, ask it to analyse, get an answer plus a script you can re-run.</>,
          <><Em>Document workflows</Em> — convert formats, extract data, batch-edit hundreds of files.</>,
          <><Em>Learning by doing</Em> — "build me a small project that demonstrates how [concept] works". You read the code to learn.</>,
          <><Em>Refactoring existing work</Em> — point at a codebase, ask for changes, watch them happen across many files at once.</>,
        ]} />

        <KeyCallout title="The big idea">
          Claude Code is what happens when an LLM can act, not just advise. Most working
          professionals have only used AI in chat form, where they are the bottleneck between
          the model and the world. Claude Code removes the bottleneck. The first time you ship
          something this way — start to finish, in one session, no copy-pasting — the change is
          hard to unsee.
        </KeyCallout>

        <TryIt>
          <P>Watch a Claude Code demo before you commit time to install:</P>
          <OL items={[
            'Search YouTube for "Claude Code walkthrough" — many creators have made 5–15 minute demos.',
            'Pick one. Watch it.',
            'Note the rhythm: prompt → Claude reads files → Claude proposes changes → user approves → Claude makes changes → Claude runs the command → checks output → iterates if needed.',
            "Notice how much faster things move when the AI doesn't need a human to execute each step.",
          ]} />
          <P>
            If the demo makes you think "I want that", continue to Lesson 6.2. If not, that is
            also a valid answer — Claude.ai chat will continue to serve most working
            professionals well. Claude Code is the next level for people willing to invest the
            time.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Installing Claude Code (overview)</H3>
        <P>
          The full step-by-step install is in <Em>Lesson 6.5 — Setup Guide</Em>, which you can
          also print as a PDF hand-out. The short version:
        </P>
        <OL items={[
          'Go to claude.com/code (Anthropic\'s landing page for Claude Code).',
          'Sign in with your Claude account (Pro tier or higher recommended).',
          'Download and install the application for your operating system.',
          "On first launch, Claude Code asks for a working folder. Point it at a folder you're comfortable letting it edit (start with an empty one, not your personal documents).",
          "Open the terminal interface. You're now talking to an agent.",
        ]} />

        <H3>Permissions and safety</H3>
        <P>
          Claude Code asks for permission before doing anything potentially destructive: editing
          a file, creating a new file, running a command, installing a package. You can
          configure auto-approve for trusted categories of action. The first session, leave
          everything on manual confirmation. Read what Claude is about to do. You'll learn the
          rhythm fast.
        </P>

        <H3>The fundamental loop</H3>
        <OL items={[
          <><Em>You state an outcome.</Em> "Build me a calculator for X." "Add Y feature." "Fix the bug in Z."</>,
          <><Em>Claude explores.</Em> Reads existing files, checks current state.</>,
          <><Em>Claude proposes.</Em> "I'll do A, B, C. Sound right?"</>,
          <><Em>You approve or refine.</Em> "Yes" or "actually, do A and C, skip B because..."</>,
          <><Em>Claude does the work.</Em> Edits files, runs commands. Each potentially destructive step asks for confirmation.</>,
          <><Em>Claude reports.</Em> "Done. Here's what changed. Want to test?"</>,
          <><Em>You verify.</Em> Run the thing, check the output.</>,
          <><Em>Iterate.</Em></>,
        ]} />
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Outcomes, not instructions</H3>
        <P>
          With chat-Claude you specify the action ("show me how to write code that does X"). With
          Claude Code you specify the outcome ("make the app do X"). The agent picks the
          implementation.
        </P>
        <UL items={[
          'Chat: "Write Python code to deduplicate a CSV file."',
          'Code: "Deduplicate the CSV in this folder, keeping the latest entry by date."',
          'Chat: "Show me how to build a static blog with Jekyll."',
          'Code: "Set up a static blog in this folder. Pick a sensible framework. Deploy it."',
        ]} />
        <P>
          Discipline: don't over-specify. Say what you want, then let Claude propose. Refine if
          the proposal is wrong. You spend less time being a project manager and more time being
          a product manager.
        </P>

        <H3>When Claude Code is the wrong tool</H3>
        <UL items={[
          'One-off conceptual questions — chat is faster.',
          "Tasks where the writing is the thing — chat Claude's output is what you want, no execution required.",
          "Work on sensitive personal data where you don't want any AI on your filesystem — defensible position; use Claude.ai or Copilot for those.",
          "Anything where you can't reasonably review what the agent did — too high stakes.",
        ]} />
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — official page',  by: 'Anthropic', url: 'https://claude.com/code', note: 'Sign up and download here.' },
        { kind: 'article', title: 'Claude Code — documentation',  by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code', note: 'The official docs. Read the "getting started" section.' },
        { kind: 'video',   title: 'Claude Code demos',            by: 'Anthropic', url: 'https://www.youtube.com/@Anthropic-AI', note: 'Worth watching one before installing.' },
        { kind: 'article', title: "Simon Willison's LLM journal", by: 'Simon Willison', url: 'https://simonwillison.net/series/llms/', note: 'Search for "Claude Code" — substantial real-use writing.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 6.2 — The PWA + GitHub + Pages pattern (and alternatives)
// ============================================================
export function PwaPattern() {
  return (
    <>
      <BeginnerSection>
        <P>
          Once Claude Code can build things on your computer, the natural next question is: how
          do you share them? The most common answer for non-developers is a small stack made of
          three free pieces — a <Em>Progressive Web App</Em>, a <Em>GitHub repository</Em>, and
          <Em> GitHub Pages</Em>. Each piece does one job. Once you know what each piece does
          and why, you can swap any of them for an alternative if you ever need to.
        </P>

        <H2>What a PWA actually is</H2>
        <P>
          A Progressive Web App is, technically, just a website — built with the same HTML, CSS
          and JavaScript that powers every page in your browser. What makes it a "PWA" is two
          small extra files (a manifest and a service worker) that let it behave more like an
          installed app:
        </P>
        <UL items={[
          'You access it via a URL in any browser.',
          'It can be "installed" by saving the URL to your phone\'s home screen, your laptop\'s Dock, or Windows Start menu. Once installed it opens in its own window with no browser chrome — indistinguishable from a native app at a glance.',
          'It can work offline (once visited) because the service worker caches the files.',
          "No app store. No install package. No code signing. The user just opens a URL and, if they want, taps 'Add to Home Screen'.",
        ]} />

        <Aside title="Why this matters">
          For working professionals, PWAs are the simplest practical deliverable. A friend or
          colleague does not need to install anything from a store. You send them a URL. They
          open it. If they want it to feel like an app on their phone, they save the URL to the
          home screen — and from then on, tapping the icon launches your tool full-screen, with
          its own splash and offline support.
        </Aside>

        <H2>Why GitHub — three jobs in one</H2>
        <P>
          GitHub is the second piece, and it does three different jobs that beginners often
          conflate. Pulling them apart makes the rest of the module much easier to read:
        </P>
        <OL items={[
          <><Em>Version control.</Em> Every change you (or the AI) makes is saved as a "commit" — a snapshot you can roll back to if something breaks. The first time Claude Code accidentally breaks your app, version control is the safety net that lets you undo in one command.</>,
          <><Em>Remote storage and collaboration.</Em> Your project lives on GitHub's servers as well as on your laptop. You can work from a different computer, the laptop can fail without losing the work, and (optionally) collaborators can contribute.</>,
          <><Em>Serving the result at a public URL.</Em> GitHub Pages is a free hosting feature attached to every GitHub account. Push the right files to a repository; GitHub publishes them at <code>username.github.io/projectname/</code>. No DNS, no server, no payment.</>,
        ]} />
        <P>
          You could do any one of these three jobs without GitHub. GitHub bundles them so that
          one free account covers all three. That bundling is the entire reason this stack is
          the default starting point.
        </P>

        <H2>How the three pieces fit together</H2>
        <UL items={[
          <><Em>Build</Em> — Claude Code creates the PWA in a folder on your computer.</>,
          <><Em>Test</Em> — Claude Code runs a local dev server. You open it in your browser to check it.</>,
          <><Em>Push</Em> — Claude Code commits the work and pushes it to a GitHub repository.</>,
          <><Em>Deploy</Em> — GitHub Pages picks up the change and publishes it at a public URL. Automatic.</>,
          <><Em>Install on phone</Em> — open the URL on your phone, tap "Add to Home Screen". You now have an app icon that opens straight into your tool.</>,
          <><Em>Iterate</Em> — every change you describe goes through the same pipeline in seconds.</>,
        ]} />
        <P>
          End-to-end, including the public URL and the phone install, in a single Claude Code
          session. No accounts to set up beyond GitHub (free) and Claude (paid), no server
          infrastructure, no DevOps.
        </P>

        <KeyCallout title="The unit of value">
          PWA + GitHub + GitHub Pages is the smallest thing a non-developer can conceive, build,
          and ship to a public URL in one session. Other stacks work — and they are worth
          knowing about — but this one is the cleanest default because it requires no
          infrastructure beyond a free GitHub account.
        </KeyCallout>
      </BeginnerSection>

      <H2>Save to home screen — the "install" step on each device</H2>
      <P>
        Once your PWA is live at a URL, you and any user can "install" it. Mechanically, this is
        just saving the URL as a launcher icon — but it feels exactly like installing a native
        app, and the result behaves the same way.
      </P>
      <UL items={[
        <><Em>iPhone / iPad (Safari).</Em> Open the URL in Safari. Tap the Share button (square with an up-arrow). Scroll the share sheet down and tap "Add to Home Screen". Confirm the name. Done — your tool is now an icon on the home screen, opens full-screen with no browser bar.</>,
        <><Em>Android (Chrome).</Em> Open the URL in Chrome. Tap the three-dot menu. Tap "Add to Home screen" or "Install app". Confirm. Same result — icon, full-screen, no browser chrome.</>,
        <><Em>Desktop (Chrome, Edge, Brave).</Em> When you open a PWA, an install icon appears in the right-hand side of the address bar (a small computer-monitor or plus icon). Click it. The app gets its own Dock / Start-menu entry and runs in its own window.</>,
        <><Em>Desktop (Safari on macOS).</Em> File → Add to Dock. Same effect.</>,
      ]} />
      <P>
        Notice what you did <Em>not</Em> do: visit an app store, agree to a developer
        certificate, wait for review, install a binary, or change any system settings. You saved
        a URL. That is the entire installation. For tools you build for yourself or share with
        friends, this approach beats the native-app route by orders of magnitude on every axis
        except discoverability.
      </P>

      <LevelUp tier="intermediate">
        <H3>The default stack — and why each piece is there</H3>
        <UL items={[
          <><Em>React</Em> — a UI framework. Lets you build an interface from small reusable pieces ("components") instead of one giant HTML file. Optional, but it is what Claude Code knows best.</>,
          <><Em>Vite</Em> — a build tool. Bundles your code together, supports a fast development server, and produces the optimised files that get deployed. Replaces older tools like webpack with much less configuration.</>,
          <><Em>TypeScript</Em> — JavaScript with type annotations. Catches a class of errors before the code runs. Claude Code uses it well; you do not need to write the types yourself.</>,
          <><Em>Tailwind CSS</Em> — a styling system. Lets you write styles directly in your markup as small utility classes (e.g. <code>p-4 bg-blue-500</code>) rather than maintaining a separate CSS file.</>,
          <><Em>vite-plugin-pwa</Em> — the plugin that adds the PWA manifest and service worker automatically. Without this, your app is just a website; with it, it can be installed.</>,
          <><Em>GitHub Pages</Em> — the hosting layer. Free, publishes static files at a URL.</>,
          <><Em>GitHub Actions</Em> — automation. Configured to re-deploy your site every time you push a change. Free for personal use.</>,
        ]} />
        <P>
          Claude Code will set up all of this for you in minutes. Knowing the names lets you
          read what the agent is doing and ask better questions when something goes wrong.
        </P>

        <H3>Alternatives — where each piece can be swapped</H3>
        <P>
          The stack above is a default, not a requirement. Each piece has reasonable
          alternatives. Worth knowing about so you can pick the right tool when the default
          stops fitting:
        </P>
        <UL items={[
          <><Em>Instead of React → plain HTML + a sprinkle of JavaScript.</Em> For a very small tool (one screen, one form, no routing) you do not need a framework at all. A single <code>index.html</code> file with some inline JavaScript is faster to write, easier to read, and just as deployable. Most "I just want one screen" projects belong here.</>,
          <><Em>Instead of React → Svelte, Vue, SolidJS, Astro.</Em> Other front-end frameworks Claude Code knows. Svelte and Solid feel lighter; Astro is excellent for content-heavy sites. Pick by preference once you have built a few projects.</>,
          <><Em>Instead of GitHub Pages → Vercel, Netlify, Cloudflare Pages.</Em> All three offer a free tier with more capability than GitHub Pages: serverless functions (small bits of server-side code), preview deployments per change, custom domains on the free plan. Setup is similar — connect a GitHub repo, they take over. Worth switching to once your app needs anything dynamic.</>,
          <><Em>Instead of GitHub for storage → GitLab, Bitbucket, Codeberg.</Em> Same version-control idea, different vendor. GitHub is the default because of integrations and community; the others are equivalent in core function.</>,
          <><Em>Instead of a PWA → Replit.</Em> Replit gives you a browser-based code editor with built-in hosting. No install on your laptop at all. Excellent for people who do not want a local development environment. Free tier is generous; paid tier is small.</>,
          <><Em>Instead of a PWA → Streamlit / Gradio (Python).</Em> If your tool is fundamentally a data app or an AI demo, these Python frameworks give you a UI in 20 lines of code. Deploy free on Streamlit Cloud or Hugging Face Spaces.</>,
          <><Em>Instead of a PWA → a desktop app via Tauri or Electron.</Em> If your tool needs deep operating-system access (the filesystem, USB devices, system tray) a desktop wrapper makes sense. More complex to ship; only worth it once the limits of a PWA bite.</>,
          <><Em>Instead of a PWA → a native mobile app.</Em> If you genuinely need camera, GPS, push notifications, or app-store distribution, you'll need a native app eventually. Until then, the friction is rarely worth it.</>,
          <><Em>Instead of any of the above → a single local HTML file.</Em> For tools that are just for you, do not host anything. Save an <code>index.html</code> to your computer. Open it in your browser. Bookmark it. No URL, no GitHub, no PWA — just a local file. Surprisingly often the right answer.</>,
        ]} />

        <H3>The "publish to a custom domain" upgrade</H3>
        <P>
          GitHub Pages URLs look like <code>username.github.io/projectname/</code>. Fine for most
          use cases. If you want a custom domain (e.g. <code>my-tool.com</code>):
        </P>
        <OL items={[
          'Buy a domain (Namecheap, Porkbun, Cloudflare Registrar — roughly $10–15 per year).',
          'Point the domain at GitHub Pages by adding two DNS records (Claude Code can walk you through this).',
          "Configure the custom domain in your repository's Pages settings.",
          'Done. Your PWA now lives at your custom URL.',
        ]} />
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>What the basic stack cannot do</H3>
        <UL items={[
          <><Em>No server-side processing.</Em> No databases, no user accounts, no email sending (without third-party services).</>,
          <><Em>Data lives in the browser.</Em> Using <code>localStorage</code>. Data does not sync across devices and can be lost if the user clears browser data.</>,
          <><Em>Public by default.</Em> Anything on GitHub Pages is publicly accessible. For private tools, use Vercel or Cloudflare Pages with their built-in access control, or host on your own infrastructure.</>,
          <><Em>Cannot process very large files in the browser.</Em> Anything more than a few hundred megabytes wants a real backend.</>,
        ]} />
        <P>
          For ~80% of personal-use tools and shareable utilities, none of these matter. For the
          other 20%, you'll need to step up to a more capable platform — which Claude Code can
          also do.
        </P>

        <H3>The next step up — when and where</H3>
        <UL items={[
          <><Em>Vercel / Netlify / Cloudflare Pages.</Em> Free hosting with serverless functions. PWA plus a few server-side capabilities (form submissions, API calls that need to hide a key, scheduled jobs). Most common next step.</>,
          <><Em>Supabase / Firebase.</Em> Backend-as-a-service. Database, authentication, file storage, real-time sync — all behind a friendly API. Free tiers are generous enough for personal projects.</>,
          <><Em>A small cloud VM.</Em> If you need full control (your own backend code, scheduled scripts, more privacy). Claude Code can set up a Linux server on Hetzner or DigitalOcean for roughly $5/month and deploy your code there.</>,
        ]} />
        <P>
          Discipline: only move up when you have actually hit the constraint. Don't architect
          for scale you don't have.
        </P>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'PWA documentation', by: 'MDN', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps', note: 'The canonical explanation of what a PWA technically is.' },
        { kind: 'article', title: 'GitHub Pages documentation', by: 'GitHub', url: 'https://docs.github.com/en/pages' },
        { kind: 'article', title: 'Vite — getting started', by: 'Vite', url: 'https://vitejs.dev/guide/' },
        { kind: 'article', title: 'Vercel vs Netlify vs Cloudflare Pages — comparison', by: 'Various', note: 'A current comparison is one search away; the rankings shift each year, the categories don\'t.' },
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
          PWAs are the most visible Claude Code output, but the most-used capabilities are
          humbler and arguably more leveraged. Five categories worth knowing about.
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
          Tasks that previously required either a developer or hours of manual work. With Claude
          Code: 20 minutes to describe and have built.
        </P>

        <H2>2. Data analysis</H2>
        <P>
          Point Claude Code at a CSV, Excel or JSON file. Ask it to analyse. The agent writes
          Python (or R, or SQL) to do the analysis, runs it, shows you the output, often
          produces charts.
        </P>
        <P>
          Leverage over chat-Claude: chat tells you how to do the analysis. Claude Code does it
          and tells you the answer.
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
          The pattern: you have a folder full of "stuff", and you want to do the same operation
          on each file. Manually that is hours or days; Claude Code does it in one prompt.
        </P>

        <H2>4. Learning by building</H2>
        <P>
          When you want to learn a new domain — a programming language, a framework, a software
          technique — describe what you want to learn and have Claude Code build a small project
          that demonstrates it. Then read the code. Code you read while it is being built (and
          you can ask "why did you do it this way?") is much more memorable than reading
          textbooks.
        </P>

        <H2>5. Refactoring and migrations</H2>
        <P>
          Existing code that needs to change. "Add TypeScript to this JavaScript project."
          "Migrate this old framework to its current version." "Convert all my notes from
          Markdown to MDX." Claude Code does the whole-codebase pass.
        </P>
        <P>
          One of the most lopsided value propositions: a task that took a team a week now takes
          a single person a few hours. Particularly useful for personal tools that have
          accumulated tech debt.
        </P>

        <KeyCallout title="The big idea">
          PWAs are the photogenic showcase. The real productivity gains come from the
          unglamorous stuff — automating the boring file-shuffling, getting data analysis
          answers in minutes instead of hours, refactoring without budget. The biggest time
          savings come from the 30-minute scripts that nobody else ever sees.
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
          <Prompt>{`I have a folder at [path]. It contains [description of files].

I want to: [describe the operation in plain English].

Write a script that does this. Make it safe — don't delete anything; if you
need to move files, write copies to a new folder first. Let me run it once on
a small test set before running it on the real folder.`}</Prompt>
          <P>
            If the chore takes 30 minutes a week, the script pays for itself in week 2.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Scheduled and triggered automation</H3>
        <P>
          For scripts that should run repeatedly, Claude Code can also set up scheduling:
        </P>
        <UL items={[
          <><Em>cron / launchd</Em> (macOS, Linux) — run a script at a specific time daily, weekly, etc. Claude Code can write the cron entry or launchd plist.</>,
          <><Em>Task Scheduler</Em> (Windows) — same idea, Windows-native.</>,
          <><Em>GitHub Actions</Em> — if the script lives in a GitHub repository, you can schedule it via Actions. Free tier generous.</>,
          <><Em>Folder watchers</Em> — scripts that wake up when a folder changes. Useful for "when a new file arrives, do X".</>,
        ]} />

        <H3>The "script that becomes a tool" arc</H3>
        <OL items={[
          'You write a one-off script in Claude Code to solve a specific problem.',
          "You realise you'd want to run it again next week.",
          'You ask Claude Code to make it more general — add parameters, make it configurable.',
          "You realise you'd want others to use it too.",
          'You ask Claude Code to wrap it in a PWA UI so users can interact without running scripts.',
          'You now have a tool you can share via a URL.',
        ]} />
        <P>
          Three steps from "personal script" to "shareable tool". Most people stop at step 1
          because they assume the rest is hard. With Claude Code, each step is one prompt.
        </P>

        <H3>Sub-agents — the parallel-task pattern</H3>
        <P>
          Claude Code can spawn sub-agents to handle parallel tasks: searching multiple
          directories simultaneously, trying multiple approaches and comparing results,
          background analysis while the main agent continues. More relevant for power users;
          worth knowing the feature exists.
        </P>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Building tools for other people</H3>
        <P>
          The next-level move: building tools your team or organisation uses. Three patterns:
        </P>
        <UL items={[
          <><Em>Internal PWA on GitHub Pages.</Em> Public URL, but only people who have it know about it. "Security through obscurity" works for small-scope internal tools that contain no sensitive data.</>,
          <><Em>Password-protected deploy.</Em> Cloudflare Access in front of a GitHub Pages site, or use Vercel's built-in password protection. Real authentication, free tier available.</>,
          <><Em>Internal hosting.</Em> Deploy to your organisation's internal server, Azure or AWS infrastructure. More involved, appropriate for tools that handle internal data.</>,
        ]} />

        <H3>The "agent as collaborator" pattern</H3>
        <P>
          The highest-leverage Claude Code use case is sustained collaboration on a project over
          weeks or months. The pattern:
        </P>
        <OL items={[
          'You and Claude Code share a project folder.',
          'Claude Code reads the existing state at the start of each session.',
          'You describe what you want to do that session.',
          'Claude executes. You review.',
          'Both of you commit the work (Claude Code can commit with attribution).',
          'Across sessions, the project grows. Both human and AI have history.',
        ]} />
        <P>
          The first project of this kind is enlightening. By the end you have a working
          understanding of what sustained AI collaboration looks like — and a thing you built
          that you could not otherwise have built.
        </P>

        <H3>Where Claude Code fails</H3>
        <UL items={[
          <><Em>Very large codebases.</Em> Ability to "hold the whole project in mind" degrades past ~50–100 files. Workarounds: break into sub-projects, give Claude explicit guidance about which files to focus on.</>,
          <><Em>Niche frameworks or languages.</Em> Anything with a small training-data presence is harder. Use a mainstream stack.</>,
          <><Em>Tasks requiring genuine novel research.</Em> The agent is great at "make this work" but not at "discover something new".</>,
          <><Em>Tasks requiring deep domain knowledge you haven't given it.</Em> If the project requires understanding your specific business in detail, you have to provide that understanding.</>,
        ]} />
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — common use cases', by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code' },
        { kind: 'article', title: 'Ethan Mollick — One Useful Thing', by: 'Ethan Mollick', url: 'https://www.oneusefulthing.org/', note: 'Search his archive for "agent" — practical writing on agentic AI.' },
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
          Three Claude Code features that most users never touch — and the ones that turn it
          from a general assistant into a customised personal workbench. None are required to
          get value from Claude Code; all three reward investment.
        </P>

        <H2>Skills — your reusable capability library</H2>
        <P>
          A "skill" is a packaged capability: a description, a system prompt, and (optionally) a
          set of tools, all bundled together. Once defined, you can invoke a skill mid-
          conversation without re-explaining what to do.
        </P>
        <UL items={[
          <><Em>"Refactor for clarity"</Em> — a skill that reviews code and suggests simplifications.</>,
          <><Em>"Write release notes"</Em> — looks at git history since last release and drafts notes.</>,
          <><Em>"Check Australian English"</Em> — scans content and flags American spelling.</>,
          <><Em>"Update changelog"</Em> — adds an entry to CHANGELOG.md in your house style.</>,
        ]} />
        <P>
          Anthropic ships some skills by default. You add your own as you discover patterns you
          keep repeating.
        </P>

        <H2>Hooks — automatic actions at key moments</H2>
        <P>
          A "hook" is a script that runs automatically at specific moments:
        </P>
        <UL items={[
          <><Em>UserPromptSubmit</Em> — when you send a prompt.</>,
          <><Em>PreToolUse</Em> — before Claude does an action.</>,
          <><Em>PostToolUse</Em> — after Claude does an action.</>,
          <><Em>Stop</Em> — when Claude finishes a turn.</>,
        ]} />
        <P>Common uses:</P>
        <UL items={[
          'Run a linter automatically after every code edit.',
          'Block edits to specific protected files.',
          'Log all tool uses to a journal file.',
          'Run tests automatically when Claude finishes a session.',
          'Send yourself a desktop notification when a long task completes.',
        ]} />

        <H2>Sub-agents — parallel work</H2>
        <P>
          Sub-agents are independent Claude instances Claude Code can spawn to handle parallel
          tasks. The main agent stays in conversation with you; sub-agents go off and do
          specific things — searching multiple directories, trying multiple approaches, running
          background analysis.
        </P>
        <P>
          Most working professionals will not use sub-agents directly. They become valuable as
          your usage gets sophisticated.
        </P>

        <KeyCallout title="The big idea">
          Skills, hooks, sub-agents are the customisation layer. With them, Claude Code stops
          being a generic agent and becomes your personal workbench — with your patterns, your
          policies, your preferred workflows baked in. Optional but compounding.
        </KeyCallout>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The skill anatomy</H3>
        <UL items={[
          <><Em>name</Em> — short identifier.</>,
          <><Em>description</Em> — when to use this skill, in one sentence. Used by Claude Code to decide whether to invoke automatically.</>,
          <><Em>system prompt</Em> — the detailed prompt that defines what the skill does.</>,
          <><Em>tools allow-list</Em> (optional) — restrict what the skill can do.</>,
          <><Em>example invocations</Em> (optional) — sample prompts that should invoke this skill.</>,
        ]} />
        <P>
          The description matters more than people expect. Claude Code uses it to decide
          automatically when to invoke the skill. A vague description means the skill rarely
          fires; a precise one means it fires reliably.
        </P>

        <H3>Hook patterns worth knowing</H3>
        <UL items={[
          <><Em>Auto-format hook.</Em> PostToolUse on Edit operations runs your project's formatter.</>,
          <><Em>Test-on-stop hook.</Em> Stop event runs your test suite. Catches breakages immediately.</>,
          <><Em>Protected-files hook.</Em> PreToolUse on Edit blocks edits to specific files (e.g. production configs).</>,
          <><Em>Journal hook.</Em> PostToolUse logs every action to a file. Useful for auditing what Claude did over a long session.</>,
          <><Em>Notification hook.</Em> Stop event triggers a system notification when long tasks complete.</>,
        ]} />

        <H3>The configuration files</H3>
        <UL items={[
          <><code>~/.claude/skills/</code> — global skills available in every project.</>,
          <><code>~/.claude/settings.json</code> — global hook config.</>,
          <><code>.claude/skills/</code> — project-specific skills.</>,
          <><code>.claude/settings.json</code> — project-specific hooks and config.</>,
        ]} />
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Multi-project skill libraries</H3>
        <P>
          The advanced pattern: maintain a personal skill library that travels with you across
          projects. Examples worth building:
        </P>
        <UL items={[
          <><Em>"summarise-changes"</Em> — looks at recent git history and produces a human-readable summary.</>,
          <><Em>"check-deploy-ready"</Em> — runs through a checklist before deploying.</>,
          <><Em>"explain-this-codebase"</Em> — when entering an unfamiliar project, produces a brief overview.</>,
          <><Em>"propose-architecture"</Em> — for greenfield projects, walks through the tech choices interactively.</>,
        ]} />

        <H3>The fewer-permission-prompts pattern</H3>
        <P>
          Out of the box, Claude Code asks permission before nearly every action. This is safe
          but slow. As you gain trust:
        </P>
        <UL items={[
          'Auto-approve read operations (file reads, search, web fetches).',
          'Auto-approve specific commands you trust (running tests, formatters, git status).',
          'Keep manual approval for destructive operations (delete, force push, etc.).',
        ]} />
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — Skills',     by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code/skills' },
        { kind: 'article', title: 'Claude Code — Hooks',      by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code/hooks' },
        { kind: 'article', title: 'Claude Code — Sub-agents', by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code/sub-agents' },
        { kind: 'article', title: 'Configuration reference',  by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code/settings' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 6.5 — Try it: a step-by-step setup guide (printable)
// ============================================================
export function TryItCC() {
  return (
    <>
      <BeginnerSection>
        <P>
          The Module 6 capstone — a step-by-step walkthrough from <Em>nothing installed</Em> to
          <Em> a working PWA shared with your friends</Em>. Designed to be readable on screen
          or printed as a PDF hand-out. Whole journey is realistic in a single evening (90–120
          minutes including all sign-ups).
        </P>

        <PrintButton label="Print / Save this guide as a PDF" />

        <H2>What you'll have at the end</H2>
        <UL items={[
          'A Claude account (paid plan) with Claude Code installed.',
          'A GitHub account with one repository.',
          'A working web app — a small habit tracker, but you can change what it does — live at a public URL.',
          'The app installed on your phone home screen as an icon you tap to open.',
          'A URL you can text to friends. They can install it the same way.',
        ]} />

        <H2>Total cost</H2>
        <UL items={[
          <><Em>Claude Pro:</Em> roughly USD $20 / month. Required for Claude Code (Free does not include it).</>,
          <><Em>GitHub:</Em> free.</>,
          <><Em>GitHub Pages:</Em> free.</>,
          <><Em>Domain name (optional, only if you want a custom URL):</Em> roughly $10–15 / year.</>,
        ]} />

        <Aside title="Before you start">
          Have these to hand: an email address you check, a phone, a credit card (for the Claude
          subscription), and 90 spare minutes. The first run is slower than later runs; budget
          accordingly.
        </Aside>
      </BeginnerSection>

      <H2>Part 1 — Sign up to Claude (≈ 5 minutes)</H2>
      <OL items={[
        <>Go to <a className="text-[color:var(--color-praxis)] hover:underline" href="https://claude.ai" target="_blank" rel="noreferrer">claude.ai</a>. Click <Em>Sign up</Em>.</>,
        'Use your real email address — Anthropic emails the receipt and any account notifications here.',
        'Verify your email (click the link Anthropic sends).',
        <>You now have the free Claude tier. To use Claude Code you need a paid plan — click your name (bottom-left) → <Em>Upgrade plan</Em> → choose <Em>Pro</Em> (or higher if you already know you want it). Enter payment.</>,
        'You can cancel any time. Pro is roughly USD $20 / month.',
      ]} />
      <P>
        Why a paid plan: Claude Code is included with paid plans only. The free tier gives you
        the chat-based Claude at claude.ai, which is enough for Modules 1–5 of Praxis but not
        for this build.
      </P>

      <H2>Part 2 — Install Claude Code (≈ 10 minutes)</H2>
      <OL items={[
        <>Go to <a className="text-[color:var(--color-praxis)] hover:underline" href="https://claude.com/code" target="_blank" rel="noreferrer">claude.com/code</a>.</>,
        'Click the download link for your operating system (macOS, Windows, or Linux).',
        'Run the installer. Approve any system permission prompts.',
        'Launch Claude Code. It opens a terminal-style window.',
        'Sign in with the same Claude account from Part 1. The first time, it opens a browser tab to authenticate; click <Em>Allow</Em>.',
        <>Create a working folder somewhere on your computer (your Documents folder is fine). Call it something like <code>my-first-app</code>. In Claude Code, navigate to that folder — usually by typing <code>cd ~/Documents/my-first-app</code> or by using the folder-picker if your version has one.</>,
        'Send a first message: "Hello, can you see this folder?" The agent should respond, confirming the folder is empty. You are connected.',
      ]} />

      <Aside title="If it does not work">
        Common first-run snags: macOS may block the installer the first time — go to System
        Settings → Privacy &amp; Security → click <Em>Open anyway</Em>. Windows may flag it via
        SmartScreen — click <Em>More info</Em> → <Em>Run anyway</Em>. If sign-in fails, restart
        Claude Code; the auth window sometimes needs a second go.
      </Aside>

      <H2>Part 3 — Sign up to GitHub (≈ 5 minutes)</H2>
      <OL items={[
        <>Go to <a className="text-[color:var(--color-praxis)] hover:underline" href="https://github.com" target="_blank" rel="noreferrer">github.com</a>. Click <Em>Sign up</Em>.</>,
        'Pick a username — this becomes part of your URLs (e.g. <code>your-username.github.io</code>), so make it something you are happy putting on the web.',
        'Use the same email as your Claude account (not required, but easier).',
        'Verify your email when GitHub asks.',
        "Skip every paid-tier upsell. Free is all you need.",
        'You now have a GitHub account.',
      ]} />
      <P>
        Why GitHub: this single account gives you three things — version control (every change
        you make is saved as a snapshot you can roll back to), remote backup (your work lives on
        GitHub's servers, not just your laptop), and free URL hosting via GitHub Pages. You do
        not need to learn how to use GitHub directly; Claude Code talks to it for you.
      </P>

      <H2>Part 4 — Connect Claude Code to GitHub (≈ 5 minutes)</H2>
      <P>
        Claude Code needs permission to push work to your GitHub account. The easiest way:
      </P>
      <OL items={[
        <>In Claude Code, type: <code>Help me set up GitHub authentication on this machine.</code></>,
        'Claude Code will guide you through one of two flows depending on whether you already have <code>git</code> and the GitHub CLI installed:',
        'If not installed: Claude Code installs them for you (Homebrew on Mac, winget on Windows). You approve a prompt or two.',
        <>If installed: Claude Code runs <code>gh auth login</code> and you complete the browser flow that pops up.</>,
        'When done, Claude Code can read and write your GitHub repositories on your behalf.',
      ]} />

      <H2>Part 5 — Build your first app (≈ 30–60 minutes)</H2>
      <P>
        This is the part where you stop reading and start watching the agent work. Pick a
        habit you actually want to track — sleep hours, daily steps, meditation minutes,
        anything. Then in Claude Code, send this prompt (substitute your habit):
      </P>
      <Prompt>{`I want to build and deploy a personal habit tracker as a PWA.

Habit: [your habit, e.g. "minutes of exercise"]

Behaviour:
- I log a daily value.
- Stores in browser localStorage (no backend, no accounts).
- Shows a chart of the last 30 days.
- Shows average / best / worst.
- Works offline once loaded (PWA).
- Dark theme, looks polished.

Stack: Vite + React + TypeScript + Tailwind + vite-plugin-pwa.

Step 1: propose a project structure and the libraries you'll use.
Step 2: scaffold the project and install dependencies.
Step 3: implement the UI.
Step 4: run the dev server so I can test it locally.

Pause after each step so I can confirm before you move on.`}</Prompt>
      <P>
        Then approve each step as the agent proposes it. Total active time on your part is small
        — you are mostly typing "yes" and checking that what Claude is doing matches what you
        wanted. After step 4, the agent will open your app in a browser. Try it. If something is
        not right, describe the change in plain English:
      </P>
      <UL items={[
        '"Make the chart taller."',
        "\"Add a streak counter — how many days in a row I've logged.\"",
        '"Let me edit yesterday\'s value if I got it wrong."',
        '"Change the colour to green."',
      ]} />
      <P>
        Each is one prompt. Iterate until you are happy.
      </P>

      <H2>Part 6 — Deploy to a public URL (≈ 10 minutes)</H2>
      <P>
        Once the local version works, ask Claude Code to publish:
      </P>
      <Prompt>{`Now push this to a new GitHub repository called "habit-tracker" and set
up GitHub Pages deployment via GitHub Actions. Once the first deploy
completes, give me the public URL.`}</Prompt>
      <P>
        Claude Code will: create the repository on your GitHub account, commit the code, push
        it, create a deploy workflow, wait for the first deploy to finish, and report the URL
        (usually <code>https://your-username.github.io/habit-tracker/</code>). Roughly 3–5
        minutes after the push, the URL is live.
      </P>

      <H2>Part 7 — Install on your phone (≈ 2 minutes)</H2>
      <P>
        Open the URL on your phone. Then:
      </P>
      <UL items={[
        <><Em>iPhone:</Em> in Safari, tap the Share button → scroll down → tap <Em>Add to Home Screen</Em> → confirm. The app icon appears on your home screen. Tap it — it opens full-screen, no browser bar.</>,
        <><Em>Android:</Em> in Chrome, tap the three-dot menu → tap <Em>Add to Home screen</Em> or <Em>Install app</Em> → confirm. Same result.</>,
        <><Em>Laptop:</Em> in Chrome or Edge, look for the install icon in the address bar (small monitor or plus). Click it. The app gets its own Dock or Start-menu entry.</>,
      ]} />
      <P>
        You have just "installed" your first app. Notice what you did not do: visit an app
        store, accept a developer certificate, agree to terms, wait for review. You saved a URL.
        That is the entire install.
      </P>

      <H2>Part 8 — Share with friends (≈ 1 minute)</H2>
      <P>
        Text or email the URL to a friend. They open it. They tap "Add to Home Screen". They
        have the app too. Their data is theirs — stored in their own browser, not on your
        server, because there is no server.
      </P>
      <P>
        If you want to give them their own copy they can modify, send them the GitHub URL of the
        repository as well. They can "fork" it (one click on GitHub), and they have their own
        copy to evolve.
      </P>

      <KeyCallout title="What just happened">
        You went from nothing installed to a deployed app — installable on phones, shareable as a
        URL — in under two hours, without writing a line of code yourself. Claude Code did the
        implementation; GitHub did the storage and hosting; you directed.
        <br /><br />
        The skill that compounds is knowing how to direct. After ten of these, the question
        "could I build that?" stops being interesting. The question becomes "should I build
        that?" instead.
      </KeyCallout>

      <TryIt>
        <P>
          Actually do it. The lesson is in the doing — reading it does not produce the
          experience. Print this guide (button at the top of the lesson), put it next to your
          laptop, work through each part. If you get stuck on a step, ask Claude Code or
          Claude.ai to explain that step in plain English.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <H3>What to build next</H3>
        <P>
          Once the habit tracker is shipped, repeat the pattern with something else. Suggestions
          for week 2 onwards:
        </P>
        <UL items={[
          'A unit converter for whatever you actually use (recipes, fitness, currency).',
          'A timer-and-checklist for a recurring task in your life (morning routine, weekly cleaning).',
          'A small calculator your work needs that nothing online does well.',
          'A reading list with categories and a "next up" suggestion.',
          'A daily reflection journal that stays on your phone, never uploaded.',
        ]} />
        <P>
          The first app takes 90 minutes. The fifth takes 25. The patterns transfer; the time
          collapses.
        </P>

        <H3>Alternative paths you might prefer</H3>
        <UL items={[
          <><Em>Prefer not to install anything locally?</Em> Use Replit. It gives you a browser-based code editor with built-in hosting. Claude Code on the desktop is more capable, but Replit removes the install steps entirely.</>,
          <><Em>Prefer a more dynamic site (forms that send email, user accounts)?</Em> Swap GitHub Pages for Vercel, Netlify, or Cloudflare Pages. All have free tiers; the deploy step is similar (Claude Code can switch you over in one prompt).</>,
          <><Em>Building a data tool rather than a UI app?</Em> Use Streamlit or Gradio. Python-based, deploys free to Streamlit Cloud or Hugging Face Spaces. Better fit for "I have a CSV and I want an interface for it" projects.</>,
          <><Em>Just want a tool for yourself, not the web?</Em> Skip GitHub and Pages entirely. Have Claude Code build a single <code>index.html</code> file you save to your laptop. Open it in your browser. Done. No hosting, no URL — just a file. Often the right answer.</>,
        ]} />
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Levelling up over the next year</H3>
        <OL items={[
          <><Em>Weeks 1–4.</Em> Ship 3–5 small PWAs using this exact pattern. Each one teaches you something the previous one did not.</>,
          <><Em>Month 2.</Em> Start using Claude Code for personal automation scripts (Lesson 6.3). Less photogenic; far more time-saving.</>,
          <><Em>Month 3–4.</Em> Build your first skill and hook (Lesson 6.4). The customisation layer.</>,
          <><Em>Month 6.</Em> Maintain a small portfolio of personal tools you actually use. Help one colleague set up their first one.</>,
          <><Em>Year 1.</Em> The "could I just build that?" frame has internalised. Often the answer is yes — and the build is one evening.</>,
        ]} />

        <H3>The non-developer's superpower</H3>
        <P>
          The single most-underrated outcome of Claude Code competence: a non-developer who can
          build working tools has a meaningful capability advantage in any knowledge-work role.
          The advantage is not "I can code now" — it is "the friction between 'this would be
          useful' and 'this exists' dropped by 50x".
        </P>
        <P>
          Most professionals never invest the few weeks needed to cross that threshold. The ones
          who do report it as one of the highest-leverage time investments of the decade.
        </P>
      </LevelUp>

      <CostNote>
        Running Claude Pro and a GitHub Free account costs roughly USD $20 / month for as much
        Claude Code use as a typical individual will manage. Hosting is free. Optional custom
        domain is $10–15 / year. There is no per-app cost on this stack — once you are paying
        for Claude, you can build as many small tools as you have evenings.
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Code — quickstart guide', by: 'Anthropic', url: 'https://docs.claude.com/en/docs/claude-code/quickstart' },
        { kind: 'article', title: 'GitHub — Getting started',       by: 'GitHub',    url: 'https://docs.github.com/en/get-started', note: 'The official intro to git and GitHub. Skim once.' },
        { kind: 'article', title: 'PWA — Add to Home Screen',       by: 'web.dev',   url: 'https://web.dev/install-criteria/', note: 'Technical explanation of how the "install" works under the hood.' },
        { kind: 'article', title: 'Replit — alternative path',      by: 'Replit',    url: 'https://replit.com', note: 'If you prefer a browser-only environment.' },
      ]} />
    </>
  )
}
