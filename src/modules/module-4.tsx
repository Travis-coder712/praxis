/**
 * Module 4 — Microsoft Copilot deep dive
 *
 * The deepest module in Praxis. Written to be useful as a standalone
 * entry point — if someone lands here without reading Modules 1-3,
 * Lesson 4.1 covers the foundational concepts they need to follow
 * the rest.
 *
 * Eight lessons:
 *   1. What Copilot M365 actually is (+ "if you skipped here" primer)
 *   2. Copilot in Word / Excel / PowerPoint / Outlook / Teams
 *   3. Copilot Chat (web) vs Copilot in apps
 *   4. Work mode vs Web mode
 *   5. Permissions and the data plane
 *   6. Source-document workflows
 *   7. Copilot agents
 *   8. Ten progressively-harder Copilot tasks (capstone)
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  CostNote, DeeperDive, KeyCallout, Aside,
} from '../components/Lesson'

// ============================================================
// Lesson 4.1 — What Copilot M365 actually is
// ============================================================
export function WhatCopilotIs() {
  return (
    <>
      <BeginnerSection>
        <Aside title="Skipped here without doing Modules 1–3?">
          Welcome. You can absolutely start here. Four things from earlier modules that you'll need:
          <UL items={[
            <><Em>An LLM is "very good autocomplete"</Em> — it predicts the next word based on patterns learned from huge amounts of text. It doesn't "know" things the way you know things; it generates plausible continuations.</>,
            <><Em>Hallucination</Em> — LLMs sometimes produce confidently wrong information. The best fix is grounding: giving the model real source documents to read. This is the single most important thing Copilot does for you.</>,
            <><Em>Context window</Em> — how much text the AI can hold in its head at once. Generous in modern systems (hundreds of pages).</>,
            <><Em>RAG (retrieval-augmented generation)</Em> — when the AI is fed relevant documents before answering. Copilot does this automatically against your Microsoft Graph.</>,
          ]} />
          You don't need any more than that. If you want the deeper background, Modules 1-3 of Praxis are
          where to go after this. Otherwise: read on.
        </Aside>

        <H2>The three-part stack</H2>
        <P>
          Microsoft Copilot M365 isn't one thing. It's three things bolted together — and understanding the
          architecture explains pretty much everything about why Copilot behaves the way it does.
        </P>

        <H3>1. The foundation model</H3>
        <P>
          Under the hood, Copilot uses OpenAI's models — currently GPT-4o and o-series reasoning models,
          provisioned via Microsoft's Azure OpenAI Service. Microsoft doesn't make its own foundation
          model; it pays OpenAI for this. Practically, this means: Copilot's "smarts" are the same as
          ChatGPT's. Most prompting techniques that work in ChatGPT work in Copilot, with minor
          adjustments.
        </P>

        <H3>2. The Microsoft Graph</H3>
        <P>
          The Graph is Microsoft's term for everything that's in your work tenant: your emails (Outlook),
          your files (OneDrive, SharePoint), your calendar, your Teams messages, your meetings, your
          organisational structure (who reports to whom), and so on. The Graph is what Copilot can actually
          see and search. When you ask "what did John say about the budget last week?", Copilot is
          searching your Graph and feeding the relevant results to the model.
        </P>
        <P>
          This is the part of Copilot that doesn't exist in ChatGPT.com or Claude.ai. It's the killer
          feature.
        </P>

        <H3>3. The tenant boundary + enterprise controls</H3>
        <P>
          Your "tenant" is your organisation's instance of M365. Copilot operates inside the tenant
          boundary — your prompts and the model's responses are processed inside your tenant's data
          environment. Microsoft contractually commits that:
        </P>
        <UL items={[
          <>Your prompts are <Em>not</Em> used to train OpenAI's or Microsoft's models.</>,
          <>Your prompts <Em>do not</Em> leave your tenant's regulated data plane.</>,
          <>Your organisation's information barriers, sensitivity labels, and access permissions are <Em>enforced</Em> on Copilot the same way they are on a human user.</>,
        ]} />
        <P>
          This is the layer that makes Copilot defensible for enterprise use. It's also why your IT and
          security teams approved Copilot but probably blocked direct ChatGPT.com use for company data.
        </P>

        <KeyCallout title="The big idea">
          Copilot M365 = OpenAI's GPT + your Microsoft Graph + enterprise compliance wrapper. The "smart"
          part is GPT. The "useful for work" part is the Graph. The "safe to use with company data" part
          is the wrapper. All three matter.
        </KeyCallout>

        <H2>What this means for how you use it</H2>
        <P>Three practical implications:</P>
        <UL items={[
          <><Em>For tasks involving your work data</Em> — emails, files, Teams chats, calendar — Copilot is the right tool. Nothing else has the Graph access.</>,
          <><Em>For general-purpose tasks</Em> not involving your work data — drafting, analysis, learning — Copilot works fine, but ChatGPT, Claude, and Gemini (with personal accounts) often work as well or better. The Graph access doesn't help you here.</>,
          <><Em>For sensitive data</Em> you're not sure about pasting elsewhere — use Copilot. It's the one with the contractual boundaries.</>,
        ]} />

        <Aside title="Heads-up on the UI">
          Microsoft updates Copilot's interface frequently. Menu paths, button labels, and feature names
          shift every few months. The architectural concepts in this module are stable; the exact location
          of a specific control may have moved. If you can't find something I describe, Microsoft Learn
          (learn.microsoft.com) usually has the current location.
        </Aside>

        <TryIt>
          <P>Three quick prompts to feel the three parts:</P>
          <P><Em>Feel the foundation model.</Em> In Copilot Chat:</P>
          <Prompt>Explain how superannuation contribution caps work in Australia.</Prompt>
          <P>The answer uses pure GPT knowledge — no Graph involvement.</P>
          <P><Em>Feel the Graph.</Em></P>
          <Prompt>What documents have I worked on this week?</Prompt>
          <P>Now Copilot is searching your Graph. Only Copilot can answer this — ChatGPT.com couldn't.</P>
          <P><Em>Feel the enterprise boundary.</Em></P>
          <Prompt>Find anything in our SharePoint marked "confidential" related to the [Project X] account.</Prompt>
          <P>
            Whether Copilot finds anything depends on what you have permission to see. If your colleague has
            confidential documents you don't have access to, Copilot won't surface them to you. That's the
            tenant boundary doing its job.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Licensing tiers — they matter</H3>
        <P>
          "Copilot M365" is several products at slightly different prices. The differences affect what you
          have access to:
        </P>
        <UL items={[
          <><Em>Microsoft 365 Copilot</Em> — the full enterprise product. Includes Copilot in Word, Excel, PowerPoint, Outlook, Teams, plus Copilot Chat with full Graph access. Currently ~$30 USD per user per month on top of an existing M365 licence. This is what most enterprise users have.</>,
          <><Em>Copilot Chat (free tier)</Em> — basic chat without Graph access, available to anyone with a free Microsoft account. Useful but limited. Not the version this module is about.</>,
          <><Em>Copilot Pro</Em> — a consumer-flavoured tier for personal Microsoft accounts. Bridges between free and full enterprise.</>,
          <><Em>Copilot Studio</Em> — the platform for building custom Copilot agents. Separate licence; often bundled.</>,
        ]} />
        <P>
          For corporate users: check with IT what tier you're on. Some features described in this module
          require the full M365 Copilot licence — particularly anything involving Graph access in the
          Office apps.
        </P>

        <H3>The "Azure OpenAI Service" detail</H3>
        <P>
          Microsoft doesn't call OpenAI's API directly from your tenant. They route through
          <Em> Azure OpenAI Service</Em>, which is Microsoft's hosted, enterprise-grade version of OpenAI's
          models. This gives Microsoft tighter control over data flow, latency, and compliance. It also
          means Copilot can lag slightly behind the latest OpenAI features — Azure deployment cycles
          typically take 2-8 weeks behind public ChatGPT releases.
        </P>

        <H3>Why Microsoft chose this architecture</H3>
        <P>
          Strategically: Microsoft has spent 20+ years convincing enterprise IT departments to trust them
          with company data. By keeping AI inside the tenant boundary, they piggy-back on existing
          compliance posture rather than asking customers to evaluate a new data-handling relationship
          from scratch. This is why Copilot adoption inside large enterprises has outpaced standalone
          ChatGPT — the data risk model is already understood.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Test the boundary directly. Pick a piece of information you know exists in your tenant but
          isn't widely shared.</P>
          <Prompt>
            Summarise what we know about [internal project name] from emails, documents, and Teams chats.
          </Prompt>
          <P>
            Notice: Copilot answers <Em>from documents you can already access</Em>. If you ask about a
            confidential project a colleague's working on that you don't have rights to, Copilot will not
            surface that information to you — it inherits your permissions exactly. This is good, and
            worth confirming for yourself.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The Microsoft Purview / DLP layer</H3>
        <P>
          Sitting between you and Copilot is Microsoft Purview, the compliance and data governance layer.
          Purview does several things relevant to Copilot:
        </P>
        <UL items={[
          <><Em>Sensitivity labels</Em> — documents tagged "Confidential", "Highly Confidential", etc. propagate through Copilot outputs. If you ask Copilot to summarise a Confidential document, the summary inherits the same label.</>,
          <><Em>Data Loss Prevention (DLP) policies</Em> — administrators can block Copilot from processing certain document types or content patterns (credit card numbers, personal data, etc.).</>,
          <><Em>Audit logging</Em> — every Copilot interaction is logged in the M365 audit log, available to administrators for compliance review.</>,
          <><Em>Retention policies</Em> — Copilot interactions follow the tenant's retention rules.</>,
        ]} />
        <P>
          For most users this is invisible. For users in regulated industries (finance, healthcare,
          government), it's the architectural detail that made Copilot deployable.
        </P>

        <H3>What model is actually answering me?</H3>
        <P>
          Microsoft doesn't always publicise which specific OpenAI model version is behind Copilot at any
          given time. Generally:
        </P>
        <UL items={[
          'Default chat responses → fast tier (currently GPT-4o-class)',
          'Reasoning-heavy or long-context tasks → top tier (currently o-series)',
          'Internal routing decides based on the request',
        ]} />
        <P>
          The implication: Copilot's output can vary not just between sessions but within a session as
          the routing engine picks different models. For repeatable production use cases, this is worth
          knowing about.
        </P>

        <H3>The "Copilot for X" sprawl</H3>
        <P>
          As of 2026, Microsoft uses "Copilot" as a brand across many products. Important distinctions:
        </P>
        <UL items={[
          <><Em>Microsoft 365 Copilot</Em> — what this module is about.</>,
          <><Em>GitHub Copilot</Em> — code completion in IDEs. Different product, different team, separate licensing.</>,
          <><Em>Copilot in Edge</Em> — Bing Chat / Web Copilot. Free, web-based, no Graph access.</>,
          <><Em>Copilot in Windows</Em> — the system-level assistant. Different surface; varies by Windows version.</>,
          <><Em>Copilot for Sales / Service / Finance</Em> — vertical-specific copilots that sit on top of Dynamics 365.</>,
        ]} />
        <P>
          When someone says "I tried Copilot and it was great / terrible" — first question: which Copilot?
        </P>

        <TryIt title="Try it (advanced)">
          <P>The architecture probe. Run these three prompts in Copilot Chat and notice the routing:</P>
          <Prompt>What's 47 × 83?</Prompt>
          <Prompt>Walk through the steps to evaluate ∫(x² · sin(x)) dx using integration by parts.</Prompt>
          <Prompt>Summarise the last 3 emails I received from my manager.</Prompt>
          <P>
            The first goes to a fast model (basic arithmetic, no Graph). The second probably triggers a
            reasoning model (multi-step maths). The third triggers Graph search + fast model. You may not
            see the routing explicitly, but response time and quality differ.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Microsoft 365 Copilot — overview',           by: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-overview', note: 'The canonical reference. Bookmark for when the UI changes.' },
        { kind: 'article', title: 'How Copilot works in M365',                   by: 'Microsoft',        url: 'https://www.microsoft.com/en-au/microsoft-365/copilot/business', note: 'Marketing page, but useful for the official three-part architecture diagram.' },
        { kind: 'article', title: 'Data, Privacy and Security for Copilot',     by: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy', note: 'The detailed answer to "where does my data go?". Worth reading once.' },
        { kind: 'video',   title: 'Microsoft Mechanics — Copilot deep dives',    by: 'Microsoft Mechanics', url: 'https://www.youtube.com/@MSFTMechanics', note: 'Microsoft\'s own YouTube channel. Lots of short Copilot explainers, kept current.' },
        { kind: 'podcast', title: 'The Intrazone',                              by: 'Microsoft 365 team', url: 'https://www.microsoft.com/en-us/microsoft-365/podcasts/intrazone', note: 'Inside Microsoft\'s M365 evolution. Listen to recent episodes for Copilot updates.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.2 — Copilot in Word / Excel / PowerPoint / Outlook / Teams
// ============================================================
export function CopilotEverywhere() {
  return (
    <>
      <BeginnerSection>
        <P>
          Copilot lives inside every major M365 app. The interface and the most-useful tasks vary by app —
          knowing what each does well saves you from forcing the wrong tool on the wrong task.
        </P>

        <H2>Word — drafting, editing, rewriting</H2>
        <P>What Copilot in Word is best at:</P>
        <UL items={[
          <><Em>Drafting from scratch</Em> — "draft a one-page memo about [topic] for [audience]" — gives you a starting point fast.</>,
          <><Em>Drafting from reference</Em> — "draft a memo based on the meeting notes in this document".</>,
          <><Em>Rewriting selected text</Em> — highlight a paragraph, ask Copilot to make it shorter / formal / casual / more confident.</>,
          <><Em>Summarising long documents</Em> — open a 30-page report, ask Copilot for a one-page summary.</>,
          <><Em>Asking questions about the document</Em> — "what does this contract say about termination?".</>,
        ]} />
        <P>How to invoke: the Copilot icon in the ribbon, or Alt + I in current builds.</P>

        <H2>Excel — analysis, formulas, charts</H2>
        <P>What Copilot in Excel is best at:</P>
        <UL items={[
          <><Em>Explaining data</Em> — "tell me three things about this data I might not have noticed".</>,
          <><Em>Generating formulas</Em> — "calculate the year-over-year growth rate for each row" — gives you the formula.</>,
          <><Em>Building charts</Em> — "make a chart that shows monthly revenue vs costs as a side-by-side bar".</>,
          <><Em>Pivot tables</Em> — "summarise this data by region and product category".</>,
          <><Em>Conditional formatting</Em> — "highlight rows where margin is below 15%".</>,
        ]} />
        <P>
          Critical caveat: Copilot in Excel works best on data formatted as a Table (Ctrl + T) with
          headers. Random ranges are hit-or-miss.
        </P>

        <H2>PowerPoint — slide drafting, design, narration</H2>
        <P>What Copilot in PowerPoint is best at:</P>
        <UL items={[
          <><Em>Drafting decks from a document</Em> — "create a 10-slide deck from this Word doc" — generates the structure and starter content.</>,
          <><Em>Adding slides on a topic</Em> — "add three slides about [topic] that match the existing deck style".</>,
          <><Em>Summarising existing decks</Em> — useful for quickly digesting a deck someone else made.</>,
          <><Em>Designing</Em> — Copilot can suggest design tweaks via the Designer panel.</>,
          <><Em>Generating speaker notes</Em> — for each slide, draft what you'd say.</>,
        ]} />
        <P>
          What it's mediocre at: aesthetic polish on individual slides. The structure is usually fine; the
          visual design often needs human work to look professional.
        </P>

        <H2>Outlook — email triage, drafting, summary</H2>
        <P>What Copilot in Outlook is best at:</P>
        <UL items={[
          <><Em>Summarising long email threads</Em> — open a 20-reply thread, ask Copilot for a summary. Often the single best Copilot feature.</>,
          <><Em>Drafting replies</Em> — "draft a reply agreeing to the meeting but pushing back on the agenda".</>,
          <><Em>Drafting new emails</Em> — "draft an email to [person] about [topic]". Works best with context (drag in related docs).</>,
          <><Em>Suggesting responses</Em> — the AI-suggested replies that appear inline.</>,
          <><Em>Coaching tone</Em> — "is this email going to land OK? Make it warmer if not."</>,
        ]} />

        <H2>Teams — meeting recap, action capture, chat summary</H2>
        <P>What Copilot in Teams is best at:</P>
        <UL items={[
          <><Em>Live meeting transcription + recap</Em> — generates a written summary at the end of a meeting, including key decisions, action items, and follow-ups.</>,
          <><Em>Catching up on a meeting you missed</Em> — "what did I miss? What decisions were made? What was assigned to me?"</>,
          <><Em>Chat summarisation</Em> — "summarise this Teams chat from the last week".</>,
          <><Em>Drafting Teams messages</Em> — same as email drafting, but for the Teams channel context.</>,
        ]} />

        <KeyCallout title="The big idea">
          Copilot in each app is best at the things that app naturally does. Don't fight the tool: use
          Word's Copilot for documents, Outlook's for emails, Teams's for meetings. For cross-app tasks
          ("look at my emails and write a summary I can paste into a doc") — use Copilot Chat (next
          lesson).
        </KeyCallout>

        <TryIt>
          <P>Do one Copilot task in each app this week. Track what worked and what didn't:</P>
          <OL items={[
            <><Em>Word</Em>: "Open a long doc you need to read. Ask Copilot for a one-page summary with three quotes."</>,
            <><Em>Excel</Em>: "Open a spreadsheet with data. Ask Copilot for three insights you might have missed."</>,
            <><Em>PowerPoint</Em>: "Take any Word doc and ask Copilot to turn it into a 5-slide deck."</>,
            <><Em>Outlook</Em>: "Find the longest email thread in your inbox. Ask Copilot to summarise it."</>,
            <><Em>Teams</Em>: "After your next meeting, read the auto-generated recap. Score it 1-5 for usefulness."</>,
          ]} />
          <P>Note which app's Copilot felt most useful for your work. That's where you should be reaching first.</P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The "/" prompt shortcut</H3>
        <P>
          In Copilot Chat and many of the in-app surfaces, you can use slash commands to reference
          specific resources:
        </P>
        <UL items={[
          <><Em>/file</Em> — reference a specific document.</>,
          <><Em>/email</Em> — reference a specific email or thread.</>,
          <><Em>/meeting</Em> — reference a specific calendar entry or meeting recording.</>,
          <><Em>/person</Em> — reference a specific colleague (Copilot will pull context about them).</>,
        ]} />
        <P>
          Example: "<Em>Summarise the key risks raised in /meeting Q3-Strategy-Offsite and /file Q3-Risk-Register</Em>"
          — Copilot now knows exactly what to ground its answer in.
        </P>

        <H3>Excel — the "build a model" workflow</H3>
        <P>
          Excel Copilot is dramatically better with structured data. The reliable workflow:
        </P>
        <OL items={[
          'Convert your data to a Table (select range → Ctrl + T → confirm headers).',
          'Open Copilot pane.',
          'Ask for one calculation, formatting, or chart at a time.',
          'Verify each result before stacking the next.',
        ]} />
        <P>
          The temptation to ask "build me a financial model that does X, Y, Z" produces unreliable output.
          Break the task down.
        </P>

        <H3>Word — the "tone-matching" trick</H3>
        <P>
          When you need Copilot to write in your voice, the best approach is example-based prompting:
        </P>
        <Prompt>
          I write internal updates in this style:

          [paste 2-3 of your actual past updates]

          Now draft an update for [new topic] in the same style.
        </Prompt>
        <P>
          This works dramatically better than "write like me" or "use my tone of voice". Show, don't tell.
        </P>

        <H3>PowerPoint — the "draft from outline" workflow</H3>
        <P>
          The most reliable PowerPoint Copilot pattern:
        </P>
        <OL items={[
          'Write a Word doc with your outline. One section per planned slide.',
          'Open PowerPoint, "Create presentation from file" → select the Word doc.',
          'Copilot generates a starter deck.',
          'Edit individual slides; don\'t ask Copilot to redo the whole deck.',
        ]} />
        <P>
          The "give me a deck about X" prompt with no source content reliably produces a generic, vague
          starter. Outline-first is consistently better.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Use the slash-command syntax. In Copilot Chat:</P>
          <Prompt>
            Read /file [name of last week's strategy doc] and /meeting [name of related meeting]. Tell me:
            three things mentioned in both, two things mentioned only in the doc, two things mentioned only
            in the meeting. Quote where each came from.
          </Prompt>
          <P>
            That's cross-source synthesis — one of Copilot's strongest patterns. Note how the explicit
            references (slash-commands) make the answer dramatically more reliable than "look at our recent
            stuff and summarise".
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Loop — the underrated Copilot surface</H3>
        <P>
          Microsoft Loop is a less-discussed Copilot surface worth knowing about. Loop components are
          shared live-editable blocks that exist independently of any one document — they can be embedded
          in Outlook, Teams chats, Word documents, or standalone Loop pages.
        </P>
        <P>
          What this enables: Copilot can generate a Loop component (a table, list, project plan) once and
          have it stay synchronised across all the places it's referenced. For teams that work
          asynchronously across multiple channels, this is materially useful — and most enterprise users
          haven't discovered it yet.
        </P>

        <H3>OneNote — the personal Copilot scratchpad</H3>
        <P>
          OneNote Copilot is genuinely useful for personal knowledge work. The pattern:
        </P>
        <UL items={[
          'A OneNote notebook for each major project or topic you work on.',
          'Capture meeting notes, ideas, links, quotes into pages within the notebook.',
          'Use Copilot to query across the notebook: "what did I conclude about X?", "summarise everything in this notebook tagged #strategy".',
        ]} />
        <P>
          OneNote Copilot is essentially a personal-knowledge RAG system. Much lighter setup than building
          a Claude Project or custom GPT, and it's already inside M365.
        </P>

        <H3>Stream — meeting deep-dive</H3>
        <P>
          When Teams records a meeting, the recording lives in Stream (Microsoft's video platform). Stream
          has its own Copilot integration:
        </P>
        <UL items={[
          'Search within meeting recordings by transcript content',
          'Jump to specific moments based on a question',
          'Summarise specific chapters or speakers',
          'Generate quotes with timestamps',
        ]} />
        <P>
          The killer use case: you missed a 60-minute meeting, you have 10 minutes. Stream + Copilot can
          tell you the three things that mattered, in your specific role, with timestamps so you can
          watch only those clips.
        </P>

        <H3>OneDrive / SharePoint search via Copilot</H3>
        <P>
          A pattern many users miss: Copilot can search across your entire OneDrive and any SharePoint
          sites you have access to. The phrasing matters:
        </P>
        <UL items={[
          <><Em>"Find the document about..."</Em> works.</>,
          <><Em>"What does our policy say about..."</Em> usually triggers a search.</>,
          <><Em>"Show me documents tagged with [sensitivity label]"</Em> respects Purview labels.</>,
          <><Em>"Who has worked on [topic] in the last quarter?"</Em> can identify colleagues you didn't know were involved.</>,
        ]} />

        <TryIt title="Try it (advanced)">
          <P>The "cross-surface workflow" experiment. One task touching multiple apps:</P>
          <OL items={[
            'In Teams: ask Copilot to summarise the last 5 messages in a specific channel.',
            'In Outlook: ask Copilot to summarise the last 5 emails from a specific person.',
            'In Copilot Chat: ask "what are the common themes between [Teams summary] and [email summary]?".',
            'In Word: ask Copilot to draft a one-page memo synthesising both.',
            "In OneNote: paste the memo and ask Copilot \"what questions does this raise that we haven't answered?\"",
          ]} />
          <P>
            That's the working professional's Copilot stack in motion. The friction between apps is real;
            knowing where each Copilot is best at lets you route around it.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Copilot in Word — feature reference',         by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/word' },
        { kind: 'article', title: 'Copilot in Excel — feature reference',        by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/excel' },
        { kind: 'article', title: 'Copilot in PowerPoint — feature reference',   by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/powerpoint' },
        { kind: 'article', title: 'Copilot in Outlook — feature reference',      by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/outlook' },
        { kind: 'article', title: 'Copilot in Teams — feature reference',        by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/teams' },
        { kind: 'video',   title: 'Microsoft Mechanics — Copilot demos',         by: 'Microsoft Mechanics', url: 'https://www.youtube.com/@MSFTMechanics' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.3 — Copilot Chat (web) vs Copilot in apps
// ============================================================
export function ChatVsApp() {
  return (
    <>
      <BeginnerSection>
        <P>
          Copilot Chat — the web-based / sidebar conversation surface — and Copilot embedded in Word /
          Excel / etc. behave differently. Same underlying brain, different reach. Knowing which to use
          when saves real time.
        </P>

        <H2>Copilot Chat — the broad-reach Copilot</H2>
        <P>
          Where you find it: m365.cloud.microsoft, the Copilot app, the Edge sidebar, or the standalone
          Copilot app on Windows/Mac.
        </P>
        <P>What Chat is best at:</P>
        <UL items={[
          <><Em>Cross-document, cross-app tasks</Em>. "Look at my emails and last week\'s meetings, then draft a summary I can paste into a doc."</>,
          <><Em>Open-ended research</Em>. "What do we know about [topic] across the org?"</>,
          <><Em>Multi-turn conversations</Em>. Refining and iterating over many exchanges — easier in Chat than in-app.</>,
          <><Em>When you don\'t already have a document open</Em>. Start with a question, not a file.</>,
        ]} />

        <H2>Copilot in apps — the contextual Copilot</H2>
        <P>What in-app Copilot is best at:</P>
        <UL items={[
          <><Em>Direct manipulation of the document you\'re in</Em>. Rewriting a paragraph, generating a formula, inserting a chart.</>,
          <><Em>Tasks scoped to a single artefact</Em>. Summarising one document, drafting a single email.</>,
          <><Em>Speed</Em>. Often faster than switching to Chat and back.</>,
        ]} />

        <H2>The rule</H2>
        <KeyCallout title="When to use which">
          <UL items={[
            <><Em>You have one document open and want to work on it</Em> → in-app Copilot.</>,
            <><Em>You\'re starting from a question and don\'t know which document the answer is in</Em> → Copilot Chat.</>,
            <><Em>You need to pull data from multiple places</Em> → Copilot Chat (Graph access is broader).</>,
            <><Em>You need to draft something new from scratch with no specific source</Em> → either works; Chat is more flexible.</>,
          ]} />
        </KeyCallout>

        <TryIt>
          <P>The "same task, two surfaces" experiment:</P>
          <P>In Word, with a long document open:</P>
          <Prompt>Summarise this document in 5 bullet points.</Prompt>
          <P>Same task in Copilot Chat (no document open):</P>
          <Prompt>Summarise /file [name of same document] in 5 bullet points.</Prompt>
          <P>
            Compare the outputs. Word's Copilot has tighter context on the specific document and often
            gives a more precise summary. Chat is more conversational and easier to iterate on. Both are
            fine for this task; one will feel more natural to you.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Context window differences</H3>
        <P>
          Copilot in apps generally has tighter context — it sees the document you\'re in, recent
          conversations, and a limited slice of the Graph. Copilot Chat has access to a broader slice but
          may not have the immediate document context unless you explicitly reference it.
        </P>
        <P>
          Practical implication: if Copilot in Word seems to "forget" what document you\'re working on
          across turns, it\'s because Word's Copilot panel sometimes resets context. Chat tends to be
          more persistent across turns. For long, multi-turn refinements, Chat usually wins.
        </P>

        <H3>The Edge sidebar — the third Copilot surface</H3>
        <P>
          Microsoft Edge has a Copilot icon in the toolbar that opens Copilot Chat in a sidebar. This is
          subtly different from m365.cloud.microsoft:
        </P>
        <UL items={[
          <>The sidebar can read the current web page you\'re looking at. Useful for "summarise this article" without copy-paste.</>,
          <>It still has Graph access (same Chat brain).</>,
          <>It's the most-convenient way to use Copilot while doing web research.</>,
        ]} />

        <H3>Conversation history</H3>
        <P>
          A subtle gotcha: in-app Copilot conversations and Copilot Chat conversations are <Em>separate
          histories</Em>. A conversation you started in Word's Copilot doesn\'t appear in Copilot Chat's
          history (and vice versa). If you want to continue a conversation, do it where you started it.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "follow the same thread" experiment:</P>
          <OL items={[
            'Start a conversation in Word\'s Copilot about a specific document.',
            'Close Word.',
            'Open Copilot Chat. Look for the conversation in history. Most likely: not there.',
            'Note the implication for how you organise long-running AI work.',
          ]} />
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Power Automate — Copilot beyond the chat surface</H3>
        <P>
          For sophisticated workflows, Copilot's AI Builder integrates into Power Automate flows. This
          lets you embed Copilot operations (extract data, summarise documents, classify content) into
          automated business processes without a chat surface at all.
        </P>
        <P>
          Example: a flow that runs every Monday morning, pulls all emails from the previous week tagged
          with a specific category, asks Copilot to extract action items, and writes them to a SharePoint
          list.
        </P>
        <P>
          This is the layer where Copilot stops being a chat assistant and becomes an embedded business
          capability. Most enterprises haven\'t built this out yet — early-mover advantage available.
        </P>

        <H3>The Copilot extension ecosystem</H3>
        <P>
          Beyond the built-in surfaces, Microsoft has been building an extension ecosystem:
        </P>
        <UL items={[
          <><Em>Plugins</Em> — third-party services that Copilot can call. Salesforce, Atlassian, ServiceNow, and others have shipped plug-ins.</>,
          <><Em>Connectors</Em> — Graph extensions that bring non-Microsoft data into Copilot\'s search space.</>,
          <><Em>Copilot Studio agents</Em> — custom agents you build yourself (Lesson 4.7).</>,
        ]} />
        <P>
          Many enterprises haven\'t configured these yet. Worth asking your IT team which extensions are
          available in your tenant — there are often capabilities sitting unused.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Audit your tenant's Copilot extensions:</P>
          <OL items={[
            'In Copilot Chat, look for the "Apps" or "Extensions" icon (location varies by tenant).',
            'Note which third-party connectors and plug-ins are available.',
            'For each one available, run a sample query to feel what it adds.',
            'Identify one workflow that would benefit from a connector you don\'t currently have. Raise it with IT.',
          ]} />
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Copilot Chat overview',                       by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/business-chat' },
        { kind: 'article', title: 'Power Automate AI Builder + Copilot',         by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/ai-builder/overview', note: 'For when you want to embed Copilot into automated flows.' },
        { kind: 'video',   title: 'Microsoft Mechanics — Copilot Studio demos',  by: 'Microsoft Mechanics', url: 'https://www.youtube.com/@MSFTMechanics' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.4 — Work mode vs Web mode
// ============================================================
export function WorkVsWeb() {
  return (
    <>
      <BeginnerSection>
        <P>
          In Copilot Chat there\'s a small toggle (sometimes labelled, sometimes implicit) between
          <Em> Work mode</Em> and <Em>Web mode</Em>. Most users miss it. It changes everything about what
          Copilot does for you.
        </P>

        <H2>Work mode (default for M365 users)</H2>
        <P>
          Copilot uses your Microsoft Graph — your emails, files, Teams chats, calendar, organisational
          context — to answer.
        </P>
        <P>Use Work mode when:</P>
        <UL items={[
          'The question is about your company, your colleagues, your work.',
          'You want grounded answers based on actual documents in your tenant.',
          'You\'re asking about a specific project, person, meeting, or file.',
          'You need an audit trail (Work mode logs through Purview).',
        ]} />

        <H2>Web mode</H2>
        <P>
          Copilot uses Bing search and the public web to answer. It does <Em>not</Em> see your Graph in
          this mode.
        </P>
        <P>Use Web mode when:</P>
        <UL items={[
          'You\'re asking about something in the news, recent events, or current information.',
          'You\'re researching a topic that\'s not internal — competitor analysis, industry trends, public data.',
          'You want citations from the open web.',
          'You explicitly don\'t want your work data involved.',
        ]} />

        <H2>The default and how to switch</H2>
        <P>
          For full M365 Copilot users, Work mode is the default in Copilot Chat. The toggle is somewhere
          near the prompt input (the exact location moves with UI updates).
        </P>
        <P>
          In some interfaces, Copilot will automatically detect that a question is web-flavoured and
          switch — or use both — without you toggling. This is helpful when it works and confusing when
          it doesn\'t. The defensive habit: explicitly check which mode you\'re in for important queries.
        </P>

        <KeyCallout title="The big idea">
          Work mode searches your data; Web mode searches the public web. Most users never notice the
          toggle and get confused why Copilot can\'t answer about current news (Work mode) or doesn\'t
          know about their internal projects (Web mode). One-click fix.
        </KeyCallout>

        <TryIt>
          <P>Find the toggle in your environment. In Copilot Chat:</P>
          <OL items={[
            'Open Copilot Chat (m365.cloud.microsoft or the standalone app).',
            'Look near the input box — there\'s usually a toggle for "Work" / "Web" or similar wording.',
            'Toggle to Work mode. Ask: "What was discussed in my meetings yesterday?"',
            'Toggle to Web mode. Ask the same question. Notice the answer changes — Web mode doesn\'t see your meetings.',
            'Now ask: "What\'s the latest news on [a public topic]?" in both modes. Work mode often has no answer; Web mode does.',
          ]} />
          <P>Once you can find the toggle and feel the difference, half the "Copilot doesn\'t do X" complaints disappear.</P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Data flow — what goes where</H3>
        <P>
          The data-handling differences between Work mode and Web mode matter for sensitive queries:
        </P>
        <UL items={[
          <><Em>Work mode</Em> — all processing happens inside your M365 tenant\'s Azure OpenAI environment. Your prompt and the model\'s response stay inside the regulated data plane. Logged in Purview.</>,
          <><Em>Web mode</Em> — your prompt is sent to Bing (a Microsoft service, but with different data-handling). Web search results come back to Copilot, which generates a response. Both your prompt and the response are still inside Microsoft\'s data plane, but the web sources are not under your tenant\'s controls.</>,
        ]} />
        <P>
          Practical implication: don\'t put confidential information into Web-mode queries. Use Work mode
          for anything involving non-public data — and explicitly check the toggle before submitting.
        </P>

        <H3>The "hybrid" question</H3>
        <P>
          Sometimes you want both — internal context + current public info. Two patterns work:
        </P>
        <UL items={[
          <><Em>Work mode first, then Web mode</Em>: ask the internal question in Work mode, then start a new conversation in Web mode for the public-context part. Synthesise yourself.</>,
          <><Em>Combine in the prompt</Em>: "Given what you know from [internal source] in Work mode, and what you can find about [public topic], how do we compare?" In auto-routing tenants, Copilot may pull from both.</>,
        ]} />

        <H3>Permissions still apply in Work mode</H3>
        <P>
          Work mode is <Em>not</Em> "Copilot reads everything in the tenant". It's "Copilot reads
          everything <em>you</em> have access to". If a colleague has documents in a SharePoint site you
          aren\'t a member of, Copilot won\'t surface them to you — same as if you\'d searched manually.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "sensitivity test":</P>
          <Prompt>
            (In Work mode.) Summarise the most-sensitive document I worked on in the last month, and
            tell me what sensitivity label it has.
          </Prompt>
          <P>
            Notice: Copilot will tell you the label. If the document is "Confidential", the summary
            inherits that label. This is Purview in action.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Administrative controls over modes</H3>
        <P>
          Tenant administrators can configure which modes are available, who can use them, and what data
          they can access. Common policies:
        </P>
        <UL items={[
          'Disable Web mode entirely for some users (high-sensitivity roles).',
          'Restrict Copilot\'s access to specific SharePoint sites only.',
          'Block Copilot from processing documents with certain sensitivity labels.',
          'Require explicit consent before Copilot accesses certain document types.',
        ]} />
        <P>
          If something you expect Copilot to do isn\'t working, it might be an admin policy, not a
          product limitation. Worth asking IT.
        </P>

        <H3>The future: automatic mode selection</H3>
        <P>
          Microsoft is steadily moving toward auto-detection — Copilot inferring whether to use Work,
          Web, or both, without an explicit toggle. As of 2026 this is partially deployed:
        </P>
        <UL items={[
          'Queries clearly about internal context auto-route to Work.',
          'Queries clearly about public information auto-route to Web.',
          'Ambiguous queries (most of them) still default to Work, but may not surface as much public context as they could.',
        ]} />
        <P>
          The defensive habit holds: for high-stakes queries, explicitly set the mode rather than trusting
          auto-routing.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "where does the data really go?" experiment. Ask your IT team or check your tenant\'s
          documentation for:</P>
          <OL items={[
            'Where is your Azure OpenAI Service hosted? (Australian customers may have local hosting; check.)',
            'What data residency commitments does your tenant have?',
            'Are there sensitivity labels under which Copilot is restricted or audited differently?',
            'What\'s logged about your Copilot interactions, for how long, and who can review the logs?',
          ]} />
          <P>
            Knowing the answers takes 30 minutes and saves a lot of guessing about what\'s safe to do.
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Work mode and Web mode are both included in your M365 Copilot licence — no per-mode cost. Web
          mode queries do consume more Bing search budget on Microsoft\'s side, but you don\'t see this.
          What you might notice: Web mode is slightly slower (search + generation) than Work mode (Graph
          + generation).
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'Microsoft 365 Copilot — Web grounding',     by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/manage-public-web-access', note: 'How Web mode actually works.' },
        { kind: 'article', title: 'Tenant data and Copilot',                    by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy' },
        { kind: 'article', title: 'Microsoft 365 Copilot — protecting privacy', by: 'Microsoft',         url: 'https://www.microsoft.com/en-us/security/blog/2024/05/06/microsoft-365-copilot-and-the-bing-search-engine/', note: 'Explains the Bing integration specifically.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.5 — Permissions and the data plane
// ============================================================
export function Permissions() {
  return (
    <>
      <BeginnerSection>
        <P>
          Three questions every user eventually asks: what can Copilot actually see? What can\'t it see?
          And what gets logged? Knowing the answers gives you the confidence to use Copilot freely with
          real work data.
        </P>

        <H2>What Copilot can see</H2>
        <UL items={[
          <><Em>Your emails</Em> — every email in your Outlook mailbox.</>,
          <><Em>Your files</Em> — anything in your OneDrive, and any SharePoint site you have access to.</>,
          <><Em>Your Teams messages</Em> — chat history in channels and DMs you participate in.</>,
          <><Em>Your calendar</Em> — meeting times, attendees, locations, descriptions.</>,
          <><Em>Meeting recordings and transcripts</Em> — for meetings you attended and that were recorded.</>,
          <><Em>Your colleagues\' contact info</Em> — name, role, manager, team. (Not their private data — see below.)</>,
          <><Em>Your organisational structure</Em> — who reports to whom, which teams exist.</>,
        ]} />

        <H2>What Copilot cannot see</H2>
        <UL items={[
          <><Em>Anything you don\'t have permission to see</Em>. Confidential SharePoint sites you\'re not a member of? Invisible. Your CEO\'s emails (assuming you\'re not their assistant)? Invisible. The same access rules a human user has.</>,
          <><Em>Other tenants</Em>. If you\'re a contractor with access to multiple companies\' M365, Copilot can only see one tenant\'s data at a time.</>,
          <><Em>Personal Microsoft accounts</Em> mixed in. Your work account and personal account stay separate.</>,
          <><Em>Locally-stored documents</Em> not in OneDrive. A file on your hard drive that hasn\'t been synced isn\'t indexed.</>,
          <><Em>Content explicitly excluded by admin policy</Em>. Some tenants exclude specific SharePoint sites or content patterns.</>,
        ]} />

        <H2>What gets logged</H2>
        <P>Microsoft logs every Copilot interaction:</P>
        <UL items={[
          'Who asked.',
          'What they asked (the prompt).',
          'What the model responded.',
          'When.',
          'Which documents were referenced.',
        ]} />
        <P>
          These logs are accessible to your tenant administrators via Microsoft Purview. In most
          organisations they\'re reviewed only for compliance investigations — not routinely surveilled.
          But assume your Copilot use is auditable: don\'t put anything in a Copilot prompt you wouldn\'t
          want logged.
        </P>

        <KeyCallout title="The big idea">
          Copilot inherits your access rights exactly — no more, no less. Everything you do with Copilot
          is logged in the tenant\'s audit trail. Within those boundaries, it\'s safe to use freely on
          real work data.
        </KeyCallout>

        <TryIt>
          <P>Run a "permissions probe" in Copilot Chat (Work mode):</P>
          <OL items={[
            <><Em>Pick a sensitive topic you know exists in the tenant</Em> — a project name, an org change, a financial metric.</>,
            <>Ask Copilot to "tell me everything you know about [topic]".</>,
            <>Notice: it returns information from documents <em>you have access to</em>. If a colleague has a document on the same topic in a SharePoint site you can\'t see, Copilot won\'t include it.</>,
            <>This is the boundary working as designed.</>,
          ]} />
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The "oversharing" problem</H3>
        <P>
          A real risk worth knowing about: many organisations have looser permissions on internal documents
          than they realised, because permissions were set years ago and never audited. When Copilot
          starts surfacing those documents to people who technically could always see them but never
          looked — it can feel like a leak, even though it isn\'t.
        </P>
        <P>
          Common examples:
        </P>
        <UL items={[
          'SharePoint sites where "Everyone except external users" has read access by default.',
          'Documents shared via "Anyone with the link" that never get re-locked.',
          'Old HR documents in folders that weren\'t restricted.',
          'Financial drafts saved to a team site rather than a finance-only site.',
        ]} />
        <P>
          If your organisation is rolling out Copilot, this is a real pre-deployment concern — and one
          where IT may have run a permissions audit beforehand. If they didn\'t, expect occasional
          "Copilot found a document I shouldn\'t have access to" moments.
        </P>

        <H3>Sensitivity labels and inheritance</H3>
        <P>
          Documents in M365 can be labelled — Public, Internal, Confidential, Highly Confidential, etc.
          Two important rules:
        </P>
        <UL items={[
          'Copilot respects labels. If a document is "Highly Confidential" and you don\'t have rights to that classification level, you can\'t access it via Copilot any more than you could directly.',
          'Copilot outputs inherit labels. If you ask Copilot to summarise a Confidential document, the resulting summary is also Confidential (or higher).',
        ]} />
        <P>
          The second point trips people up: if you ask Copilot to summarise a Confidential strategy paper
          and then paste the summary into a less-confidential channel, you may be violating policy. The
          label travels with the content.
        </P>

        <H3>What about external users?</H3>
        <P>
          Guests in your tenant (contractors, partners with shared SharePoint access) have Copilot access
          to <Em>only the resources they\'ve been explicitly granted</Em>. They can\'t use Copilot to
          discover unrelated content. But if they\'ve been added to a sensitive site, they have the same
          Copilot reach as an employee on that site.
        </P>
        <P>
          The practical rule for shared work with externals: assume they can see, via Copilot, anything
          they could see manually. If you wouldn\'t want them to find a particular document, don\'t add
          them to the site it\'s in.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "what can I find?" audit:</P>
          <Prompt>
            Search across everything I have access to and tell me: (1) the most-sensitive documents
            I can see, by label; (2) any documents that look like they might be over-shared (e.g.,
            "Confidential" labelled but in a team site with broad access). List the top 5 of each.
          </Prompt>
          <P>
            This is genuinely useful for understanding your own exposure. Worth running once a quarter.
            Don\'t do anything with the results except note them — that\'s a separate process — but
            knowing what\'s visible to you is part of operating safely.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The "Copilot Restricted SharePoint Search" feature</H3>
        <P>
          Microsoft offers an administrative feature called "Restricted SharePoint Search" that lets
          tenants gate Copilot to only specific SharePoint sites during initial rollout. Many enterprises
          use this as a phased approach:
        </P>
        <OL items={[
          'Enable Copilot, but restrict it to ~10 vetted SharePoint sites.',
          'Train users on those sites.',
          'Audit permissions across the rest of the tenant.',
          'Progressively expand the allowed list.',
        ]} />
        <P>
          If Copilot in your tenant feels strangely narrow — can\'t find documents you know exist — ask
          IT whether Restricted Search is active and what\'s in scope.
        </P>

        <H3>The Purview audit log — what\'s captured</H3>
        <P>
          Every Copilot interaction generates a Purview audit event. The captured fields:
        </P>
        <UL items={[
          'User identifier',
          'Timestamp',
          'Copilot surface (Chat, Word, Excel, etc.)',
          'Prompt text',
          'Response text (truncated)',
          'Files / emails / Teams chats referenced',
          'Sensitivity labels involved',
          'Whether the response was used (saved, copied) — partial coverage',
        ]} />
        <P>
          For users in regulated industries: assume your prompts and responses are subject to discovery
          and review. For everyone else: assume they\'re technically auditable but unlikely to be reviewed
          unless there\'s a specific investigation.
        </P>

        <H3>Cross-geography data flow</H3>
        <P>
          For Australian users, Microsoft offers Australian data residency for M365 — your tenant\'s data
          stays in Australian Azure regions (Sydney, Melbourne). Confirm with IT that:
        </P>
        <UL items={[
          'Your tenant is hosted in Australian Azure regions.',
          'Your Azure OpenAI Service for Copilot is also Australian-hosted (this is configurable).',
          'Web mode queries to Bing may briefly traverse US infrastructure for search — confirm whether this is acceptable for your data classification.',
        ]} />
        <P>
          Most Australian enterprises operate fully in-country for M365 Copilot. Worth confirming for any
          sovereign-data use cases.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The compliance briefing prompt — give to your IT team:</P>
          <Prompt>
            Briefly answer for our Copilot deployment:
            1. Where is our tenant\'s Azure OpenAI Service hosted geographically?
            2. Are there sensitivity labels under which Copilot is restricted?
            3. What\'s in scope for Restricted SharePoint Search (if active)?
            4. What\'s the data flow for Web mode queries?
            5. How long are Copilot audit logs retained?
            6. Who can review Copilot prompts and responses?
            7. Is there a DLP policy active against Copilot processing of certain content?
          </Prompt>
          <P>
            Most enterprises have answers to these but they\'re not always proactively communicated. Worth
            asking before doing anything sensitive.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Microsoft 365 Copilot — Data Security and Compliance', by: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy', note: 'The canonical reference. Read once.' },
        { kind: 'article', title: 'Restricted SharePoint Search',                          by: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/sharepoint/restricted-sharepoint-search' },
        { kind: 'article', title: 'Purview audit logs for Copilot',                        by: 'Microsoft Learn', url: 'https://learn.microsoft.com/en-us/purview/audit-copilot' },
        { kind: 'video',   title: 'Microsoft Mechanics — Copilot security architecture',   by: 'Microsoft Mechanics', url: 'https://www.youtube.com/@MSFTMechanics' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.6 — Source-document workflows (the killer use case)
// ============================================================
export function SourceDocuments() {
  return (
    <>
      <BeginnerSection>
        <P>
          If you remember one thing from this entire module, remember this: Copilot is at its best when
          you give it specific source documents to work with. Vague "tell me about" questions produce
          generic answers. "Read these three documents and tell me X" produces sharp, grounded,
          citation-backed answers.
        </P>

        <H2>The four core source-document patterns</H2>

        <H3>1. Summarise specific documents</H3>
        <Prompt>
          Summarise /file [name of strategy paper] in 5 bullet points. Include direct quotes for each.
        </Prompt>
        <P>
          Result: a tight, quote-backed summary. The quote requirement forces grounding — if Copilot
          can\'t quote, the bullet is suspect.
        </P>

        <H3>2. Compare across documents</H3>
        <Prompt>
          Compare /file [draft version 1] with /file [draft version 2]. What changed? Be specific —
          include the sections that differ.
        </Prompt>
        <P>
          Result: a structured diff. Often saves an hour of reading two slightly-different documents
          side by side.
        </P>

        <H3>3. Synthesise across mixed sources</H3>
        <Prompt>
          Look at /file [meeting notes] and /email [thread with John about budget]. What was decided,
          what\'s still open, and who\'s on the hook?
        </Prompt>
        <P>
          Result: a synthesis across an email thread and a separate meeting note. The exact pattern that
          knowledge workers spend hours on manually.
        </P>

        <H3>4. Find specific information across many documents</H3>
        <Prompt>
          Search across my OneDrive and SharePoint: what does our risk-tolerance policy say about
          counterparty concentration? Quote the exact language.
        </Prompt>
        <P>
          Result: Copilot finds the relevant policy document(s) and quotes the exact section. Far more
          reliable than manual search-and-skim.
        </P>

        <KeyCallout title="The big idea">
          Tell Copilot which sources to use. Don\'t make it guess. Specific source documents +
          quote-the-evidence instruction = the magic combination that produces grounded, defensible
          answers.
        </KeyCallout>

        <TryIt>
          <P>Run all four patterns this week on actual work tasks. Track which one saved the most time.</P>
          <OL items={[
            'Summarise a long document you needed to read anyway.',
            'Compare two versions of something — a contract, a proposal, two drafts.',
            'Synthesise across an email thread and a meeting note on the same topic.',
            'Find a specific piece of information you know exists somewhere in your org.',
          ]} />
          <P>The fourth one is the most surprising. Most people don\'t realise Copilot can find specific information across their entire accessible Graph reliably.</P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The /file vs /email vs /meeting distinction</H3>
        <P>
          Different slash-commands target different content:
        </P>
        <UL items={[
          <><Em>/file</Em> — documents in OneDrive / SharePoint. Word, PDF, Excel, PowerPoint.</>,
          <><Em>/email</Em> — Outlook content. Individual messages or threads.</>,
          <><Em>/meeting</Em> — calendar entries and their associated recordings/transcripts (when present).</>,
          <><Em>/person</Em> — references a colleague\'s profile and any context Copilot has about them.</>,
          <><Em>/loop</Em> — Loop components (less commonly used).</>,
        ]} />
        <P>
          For complex queries, stack multiple references in one prompt. Copilot can hold and synthesise
          across many sources in a single conversation.
        </P>

        <H3>Working sets — the persistent-context pattern</H3>
        <P>
          For multi-day work on the same topic, keep a "working set" of references:
        </P>
        <OL items={[
          'Start a Copilot Chat conversation specifically for this project.',
          'In your first prompt, reference all the key documents: "I\'m working on [project]. The key sources are /file X, /file Y, /email Z, /meeting Q. Read them all so we can refer back."',
          'Each follow-up prompt builds on this context.',
          'Save the conversation. Return to it across days.',
        ]} />
        <P>
          This is essentially Copilot\'s answer to the Claude Projects pattern (Module 5). Less polished
          but works well for sustained work on a single project.
        </P>

        <H3>When source-document workflows go wrong</H3>
        <P>Three failure modes worth knowing:</P>
        <UL items={[
          <><Em>The document is too long</Em>. Even with generous context, very long documents can lose detail. Fix: ask about specific sections, not the whole document.</>,
          <><Em>The document is poorly structured</Em>. Scanned PDFs, screenshot-heavy docs, badly-formatted spreadsheets all degrade Copilot\'s comprehension. Fix: extract clean text first.</>,
          <><Em>The document is in a SharePoint site Copilot can\'t find</Em>. Sometimes Copilot\'s search doesn\'t surface the right document. Fix: open the document directly, then ask Copilot about it ("based on the document I\'m currently looking at...").</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>The "working set" pattern in practice. Pick a project you\'re actively working on:</P>
          <Prompt>
            I\'m working on [project name]. I want you to be my working brain for it. Here are the key sources:
            - /file [strategy doc]
            - /file [budget spreadsheet]
            - /email [latest thread with the project lead]
            - /meeting [last steering committee]

            Read them all. Then answer:
            (1) What\'s the current state of the project in one paragraph?
            (2) Three open questions that need decision.
            (3) One risk no one\'s talking about.

            From now on in this chat, treat these as your primary sources.
          </Prompt>
          <P>
            Save the chat. Use it as your project\'s persistent working space. Return to it whenever
            you\'re doing work on the project.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The "show your sources" discipline</H3>
        <P>
          For high-stakes outputs, always end source-document prompts with:
        </P>
        <Prompt>
          After your answer, list which specific sources each claim came from. For any claim not directly
          from a source, flag it as "inferred — verify".
        </Prompt>
        <P>
          This forces Copilot to expose its grounding. Claims with sources are verifiable; "inferred"
          claims get flagged for you to check separately. The discipline is the difference between an
          AI-generated answer you can defend and one you have to take on faith.
        </P>

        <H3>Pasted documents — when to use them over /file</H3>
        <P>
          Sometimes pasting the full text of a document directly into the prompt works better than using
          /file:
        </P>
        <UL items={[
          'When the document is short (less than 5 pages) — pasting is faster.',
          'When the document is in a format Copilot doesn\'t parse well (e.g., scanned PDF).',
          'When the document isn\'t in your Graph (external source, shared verbally, etc.).',
          'When you want to send a sanitised / edited version rather than the original.',
        ]} />
        <P>
          The trade-off: pasted content takes up your prompt context, which can crowd out other reference
          material. For sustained work on a project, /file is better. For one-shot questions about a
          specific document, paste works fine.
        </P>

        <H3>The "Copilot pages" feature</H3>
        <P>
          Microsoft has been rolling out "Copilot Pages" — persistent, shareable Copilot conversations
          that can be edited collaboratively. Useful for:
        </P>
        <UL items={[
          'Building a working document from AI-generated content + manual edits.',
          'Sharing a Copilot output with colleagues who can iterate on it.',
          'Capturing the source-document workflow output as something you can come back to.',
        ]} />
        <P>
          Treat Pages as "the artefact" and Copilot Chat as "the conversation that produced it". Pages
          gets the structure; Chat gets the iteration.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "audit-ready output" exercise. Pick a real high-stakes task — something you\'ll defend
          in a meeting or send to senior stakeholders:</P>
          <Prompt>
            Task: [your real task].

            Sources: /file [primary source], /file [secondary source], /email [supporting context].

            Constraints:
            - Use only information from the sources above.
            - For every claim in your answer, identify which source it came from.
            - Flag anything that requires interpretation as "inferred — verify".
            - Length: 300 words maximum.
            - No conclusions that don\'t derive from the sources.
          </Prompt>
          <P>
            The output: a defensible piece of analysis with explicit provenance. The pattern works for
            board papers, client memos, audit summaries, regulatory submissions — any output where you
            need to know where every claim came from.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Copilot — referencing files in prompts',     by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/business-chat' },
        { kind: 'article', title: 'Copilot Pages — overview',                    by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-pages' },
        { kind: 'video',   title: 'Practical Copilot workflows',                 by: 'Microsoft Mechanics', url: 'https://www.youtube.com/@MSFTMechanics' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.7 — Copilot agents
// ============================================================
export function CopilotAgents() {
  return (
    <>
      <BeginnerSection>
        <P>
          An "agent" in Copilot is a pre-built or custom AI assistant focused on a specific job. Unlike
          general Copilot (which does whatever you ask), an agent has a defined role, a defined set of
          sources, and a defined set of actions. It\'s how Copilot moves from "ask and answer" toward
          "set up and run".
        </P>

        <H2>Built-in agents you may already have</H2>
        <UL items={[
          <><Em>Email triage agent</Em> — sorts incoming email, flags urgent items, summarises low-priority threads. Often called "Prioritize my inbox" or similar.</>,
          <><Em>Meeting agent</Em> — joins meetings, takes notes, captures action items, generates the recap.</>,
          <><Em>Calendar agent</Em> — finds meeting times across people, manages scheduling, prepares pre-reads.</>,
          <><Em>Sales / service / industry agents</Em> — vertical-specific. Available if your tenant has the relevant Microsoft Dynamics or Copilot vertical add-ons.</>,
        ]} />
        <P>
          Whether you have these enabled depends on your tenant\'s configuration. Check with IT what\'s
          active for your account.
        </P>

        <H2>Custom agents — Copilot Studio</H2>
        <P>
          Beyond the built-in agents, you can build custom agents in Copilot Studio. A custom agent is
          basically:
        </P>
        <UL items={[
          'A persistent system prompt that defines the agent\'s role and behaviour.',
          'A defined set of "knowledge sources" the agent can access (specific SharePoint sites, web URLs, etc.).',
          'A defined set of "actions" the agent can perform (read email, create calendar entries, post to Teams).',
          'A surface — where the agent appears (Copilot Chat, Teams channel, embedded in a website).',
        ]} />
        <P>
          Custom agents are often more reliable than ad-hoc Copilot prompts because the scope is locked
          in. The agent doesn\'t need to guess what to read or how to behave — it\'s configured.
        </P>

        <H2>When agents are worth building</H2>
        <UL items={[
          'A task you do regularly with the same sources — e.g., weekly status compilation from 5 specific SharePoint sites.',
          'A capability you want to make available to others — e.g., "the audit-policy answer agent" anyone in finance can ask.',
          'A workflow that benefits from defaults — e.g., "the customer onboarding agent" that asks specific questions in a specific order.',
        ]} />
        <P>
          Don\'t build agents for one-off tasks; the setup overhead doesn\'t pay back. Build them for
          repeated, scoped, shared work.
        </P>

        <KeyCallout title="The big idea">
          Copilot is the generalist; agents are the specialists. The built-in agents handle the obvious
          recurring tasks (email triage, meeting recap). Custom agents extend this to your team\'s
          recurring tasks. Built right, an agent saves hours per week — but the setup investment is real.
        </KeyCallout>

        <TryIt>
          <P>Discover what\'s already available in your tenant:</P>
          <OL items={[
            'In Copilot Chat, look for an "Agents" or "Apps" icon (location varies; sometimes a chip near the prompt input).',
            'Browse what\'s enabled in your tenant.',
            'Pick one that looks relevant. Try it on a real task.',
            'Note: many tenants have agents enabled that nobody uses because no one knew they were there.',
          ]} />
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Building your first custom agent</H3>
        <P>
          High-level steps in Copilot Studio (interface varies; Microsoft Learn has current screenshots):
        </P>
        <OL items={[
          'Open Copilot Studio (requires the appropriate licence).',
          'Create a new agent. Give it a name and a one-sentence description of its role.',
          'Define the system prompt — "you are X, you do Y, you don\'t do Z".',
          'Add knowledge sources — specific SharePoint sites, URLs, uploaded files.',
          'Add actions (optional) — what the agent can do beyond reading.',
          'Test it. Iterate the system prompt.',
          'Publish to specific surfaces (Copilot Chat, Teams, a website).',
        ]} />
        <P>
          The first agent takes ~30-60 minutes to build. After that, you\'ll have templates and patterns
          and subsequent agents drop to 10-20 minutes.
        </P>

        <H3>Where custom agents commonly fail</H3>
        <UL items={[
          <><Em>Scope too broad</Em>. "An agent that helps with everything project-related" — too vague, performs poorly. Build narrow agents for specific tasks.</>,
          <><Em>Knowledge sources too generic</Em>. Pointing the agent at "all of SharePoint" — it can\'t prioritise. Pick specific sites and folders.</>,
          <><Em>System prompt too long or unclear</Em>. Treat the system prompt like any prompt — the five-part framework from Module 3 applies.</>,
          <><Em>No clear "this agent doesn\'t do that" boundary</Em>. Add explicit constraints: "If asked about [out of scope], politely redirect."</>,
          <><Em>Maintenance neglect</Em>. Knowledge sources go stale. Permissions change. Set a quarterly review.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>Build your first custom agent. Pick a task you do weekly:</P>
          <OL items={[
            'Define the agent in one sentence: "It does X, with these sources, returning this kind of output."',
            'In Copilot Studio, create the agent.',
            'Test it 5 times on real instances of the task.',
            'Refine the system prompt based on what\'s wrong.',
            'Use it for two weeks. Note where it consistently helps vs where it consistently fails.',
          ]} />
          <P>
            Most professionals never build a custom agent. Those who do report it\'s the single largest
            productivity unlock from M365 Copilot — bigger than the chat surface itself.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Agent connectors and actions</H3>
        <P>
          Agents can do more than read. They can take actions via "connectors":
        </P>
        <UL items={[
          'Create calendar entries.',
          'Post to a Teams channel.',
          'Send emails (with explicit user approval).',
          'Create / update SharePoint list items.',
          'Call third-party APIs (Salesforce, ServiceNow, Jira, etc., where connectors exist).',
        ]} />
        <P>
          The combination of read + act is what makes an agent meaningfully more powerful than a Copilot
          chat. An agent that reads a meeting transcript, extracts action items, and creates them as tasks
          in your project tool — without you intervening — is a different kind of capability.
        </P>

        <H3>Authority bounds and approval flows</H3>
        <P>
          Action-taking agents need authority limits. Common patterns:
        </P>
        <UL items={[
          'Read-only: the agent surfaces information; the human takes action.',
          'Suggest-and-approve: the agent proposes the action; the human confirms.',
          'Auto-act below a threshold: the agent acts on low-stakes items; escalates higher-stakes to human.',
          'Full auto: only for clearly bounded, reversible operations.',
        ]} />
        <P>
          The right boundary depends on the task. Auto-creating Teams channel posts based on detected
          themes? Probably fine. Auto-sending external emails? Definitely needs approval. Start
          conservative; loosen as confidence builds.
        </P>

        <H3>Agents vs. Power Automate flows</H3>
        <P>
          There\'s overlap between Copilot agents (Copilot Studio) and traditional automation flows
          (Power Automate). Rough rule of thumb:
        </P>
        <UL items={[
          <><Em>Copilot agent</Em> when the work involves understanding unstructured input (text, documents, conversation) and producing intelligent output.</>,
          <><Em>Power Automate flow</Em> when the work involves moving structured data between systems with deterministic logic.</>,
        ]} />
        <P>
          Increasingly the two combine: a Power Automate flow that invokes a Copilot agent at one step,
          or a Copilot agent that triggers a Power Automate flow as one of its actions.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Build a "read + act" agent (with appropriate safeguards):</P>
          <OL items={[
            'Pick a workflow: e.g., "Every Friday, summarise all emails labelled #project-status, and post the summary to the #weekly-status Teams channel."',
            'In Copilot Studio, build the agent.',
            'Set authority: agent drafts the summary; you approve before posting. (Don\'t auto-post until you trust it.)',
            'Run for 4 weeks with the approval step.',
            'If consistently good, remove the approval step. If not, refine the agent.',
          ]} />
          <P>
            The pattern of "draft autonomously, approve human-in-loop, gradually expand autonomy" is the
            safest path to useful agents.
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Built-in agents are included with your M365 Copilot licence. Custom agents (Copilot Studio)
          typically require an additional licence tier or per-usage billing — varies by Microsoft\'s
          current pricing. Check with IT before committing to a custom-agent strategy. The licensing has
          changed several times since Copilot Studio launched.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'Copilot Studio — overview',                  by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/' },
        { kind: 'article', title: 'Building an agent — quick start',            by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/microsoft-copilot-studio/copilot-studio-getting-started' },
        { kind: 'video',   title: 'Microsoft Mechanics — Copilot Studio',       by: 'Microsoft Mechanics', url: 'https://www.youtube.com/@MSFTMechanics' },
        { kind: 'article', title: 'Agent design patterns',                       by: 'Microsoft',        url: 'https://www.microsoft.com/en-us/microsoft-365/copilot/copilot-studio', note: 'Marketing-flavoured but useful for the example patterns.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 4.8 — Ten progressively-harder Copilot tasks
// ============================================================
export function CopilotWorkout() {
  return (
    <>
      <BeginnerSection>
        <P>
          The Module 4 capstone. Ten tasks of increasing sophistication. Each one is realistic — these are
          the kinds of things working professionals do, only now you\'re doing them with Copilot. Try a
          task a day, or knock out a couple at a time. The set takes you from "first useful Copilot
          prompt" to "I\'m getting genuine leverage from this tool".
        </P>

        <H2>Tasks 1–3 — beginner</H2>

        <H3>Task 1 — Summarise a long email thread</H3>
        <P>The single highest-leverage Copilot move for most knowledge workers.</P>
        <Prompt>
          (In Outlook, with a long thread open or selected.) Summarise this thread. What was decided?
          What\'s open? Who\'s on the hook for what?
        </Prompt>

        <H3>Task 2 — Summarise a long document</H3>
        <Prompt>
          (In Word, with a long doc open.) Summarise this in 5 bullet points, with a one-line direct quote
          for each.
        </Prompt>

        <H3>Task 3 — Draft a reply, refine once</H3>
        <Prompt>
          (In Outlook, with an email open.) Draft a reply agreeing to the meeting but pushing back on the
          proposed time. Keep it warm and brief.
        </Prompt>
        <P>
          Then refine: "Make it shorter." Or "Less apologetic." Or "Drop the closing pleasantry." This is
          where iteration discipline (Module 3) compounds.
        </P>

        <H2>Tasks 4–6 — intermediate</H2>

        <H3>Task 4 — Cross-document synthesis</H3>
        <Prompt>
          (In Copilot Chat.) Compare /file [project-plan v1] with /file [project-plan v2]. What materially
          changed? What\'s in v2 that wasn\'t in v1, and vice versa? Flag any risks the changes introduce.
        </Prompt>

        <H3>Task 5 — Meeting prep</H3>
        <Prompt>
          (In Copilot Chat.) I have a meeting with /person [colleague] in two days about /file [topic
          document]. We last met /meeting [previous meeting]. Help me prepare:
          - What did we agree last time?
          - What\'s changed since?
          - Three open questions to bring.
          - One outcome I should push for.
        </Prompt>

        <H3>Task 6 — Excel data probe</H3>
        <Prompt>
          (In Excel, with a data table selected.) Tell me three things about this data I might not have
          noticed. Suggest one chart that would best communicate the most important pattern.
        </Prompt>

        <H2>Tasks 7–10 — advanced</H2>

        <H3>Task 7 — The audit-ready memo</H3>
        <Prompt>
          (In Copilot Chat.) I need to write a 400-word memo to my manager on [topic].

          Sources:
          - /file [primary doc]
          - /file [secondary doc]
          - /email [relevant thread]

          Constraints:
          - Only use information from the sources above.
          - For every claim, note which source it came from.
          - Flag anything that requires interpretation as "inferred — verify".
          - No conclusions not directly derivable from the sources.

          Draft, then critique your own draft as if you were a tough editor, then rewrite.
        </Prompt>

        <H3>Task 8 — The "find what I missed" pattern</H3>
        <Prompt>
          (In Copilot Chat.) For the last quarter, search across my emails, meetings, and shared
          documents for [topic]. Identify:
          - Three commitments I made that haven\'t been fulfilled.
          - Two open questions colleagues raised that nobody answered.
          - One pattern of recurring discussion that might warrant explicit attention.
        </Prompt>

        <H3>Task 9 — Build a project working set</H3>
        <P>
          Start a Copilot Chat conversation dedicated to one of your active projects. Establish the
          working set:
        </P>
        <Prompt>
          I\'m the [your role] on [project name]. The key sources for this project are:
          - /file [strategy doc]
          - /file [budget]
          - /file [risk register]
          - /email [latest steerco thread]
          - /meeting [last steerco]

          You are my project working brain. Read everything. Tell me, in 200 words:
          - Current state.
          - Top 3 risks.
          - 2 decisions outstanding.
          - 1 thing I\'m probably underweighting.

          Keep this conversation open. I\'ll come back with follow-ups.
        </Prompt>
        <P>
          Now use this conversation continuously for the next two weeks. Track how much faster project
          work gets when you have this persistent context available.
        </P>

        <H3>Task 10 — Build a custom agent</H3>
        <P>
          The advanced capstone. Identify one workflow you do weekly. In Copilot Studio, build an agent
          for it. Run it for two weeks. Iterate the system prompt based on what works. By the end of two
          weeks, you should have at least one working agent that saves you meaningful time per week.
        </P>

        <KeyCallout title="End of Module 4">
          You now have the conceptual map of Copilot, the practical patterns for each app, the data-plane
          knowledge to use it safely, the source-document workflow that makes it genuinely powerful, and
          a workout to build the habits.
          <br /><br />
          The next modules (Claude, Claude Code, multi-model workflows) are about the tools available to
          you outside Copilot — useful for specific tasks where Copilot isn\'t the right fit. But for
          anything involving your work data, Copilot is the answer. Use the patterns from this module
          tomorrow and the productivity gains start immediately.
        </KeyCallout>

        <TryIt>
          <P>Pick your starting tier:</P>
          <UL items={[
            <><Em>Just starting</Em>: do tasks 1, 2, 3 this week. One per day.</>,
            <><Em>Comfortable with chat-style use</Em>: do tasks 4, 5, 6 this week. One per day, alongside your normal work.</>,
            <><Em>Confident user</Em>: do tasks 7, 8 this week. They\'ll change how you think about Copilot.</>,
            <><Em>Already getting leverage</Em>: do tasks 9, 10 over the next two weeks. The working-set and custom-agent patterns are the highest-leverage moves in this whole module.</>,
          ]} />
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Tracking what works</H3>
        <P>
          For each task, after you run it, ask yourself three quick questions:
        </P>
        <UL items={[
          'Did this save me time vs doing it manually?',
          'Was the output trustworthy without manual verification?',
          'Would I use this again next week?',
        ]} />
        <P>
          Tasks that score "yes" on all three become part of your routine. Tasks that score "no" on
          accuracy need different prompting or a different model — sometimes Copilot is the wrong tool
          and the answer is Claude or ChatGPT.
        </P>

        <H3>The compound effect</H3>
        <P>
          The first time you save 20 minutes with a Copilot task it feels nice. The second month, when
          you have 30 such tasks in your routine and you\'re saving 5 hours a week, the compounding becomes
          obvious. The professionals who internalise this become measurably more productive than those
          who use Copilot occasionally.
        </P>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The team-level workout</H3>
        <P>
          For team leaders: run this set with your direct reports. Pick a Wednesday afternoon. Each person
          does the 10 tasks at their tier. Then compare:
        </P>
        <UL items={[
          'Which tasks felt natural to which people?',
          'What patterns did each person discover?',
          'What custom agents would benefit the team?',
        ]} />
        <P>
          A four-hour team Copilot workout, run quarterly, builds shared fluency faster than any vendor
          training. And it surfaces team-specific use cases that no generic training would catch.
        </P>

        <H3>The "stuck at Task X" check</H3>
        <P>
          Each task in this set is genuinely doable. If you\'re stuck on a particular task, the failure
          usually points to one of three things:
        </P>
        <UL items={[
          <><Em>You don\'t have the licence tier needed</Em> — particularly for tasks 9, 10. Check with IT.</>,
          <><Em>Your source data isn\'t where Copilot can find it</Em> — documents in personal OneDrive that aren\'t synced, or in non-indexed locations.</>,
          <><Em>The prompting needs sharpening</Em> — return to Module 3 for the patterns.</>,
        ]} />
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Microsoft Copilot prompt library',           by: 'Microsoft',         url: 'https://www.microsoft.com/en-us/microsoft-copilot/learn/prompts', note: 'Curated by Microsoft. Mixed quality but worth browsing.' },
        { kind: 'article', title: 'Copilot — quick wins per role',              by: 'Microsoft Learn',  url: 'https://learn.microsoft.com/en-us/copilot/microsoft-365/copilot-deployment-guide', note: 'Microsoft\'s own role-by-role onboarding guide.' },
        { kind: 'article', title: 'WorkLab — Copilot at work',                  by: 'Microsoft WorkLab', url: 'https://www.microsoft.com/en-us/worklab/', note: 'Microsoft\'s thought-leadership content on Copilot use. Marketing-flavoured but useful examples.' },
        { kind: 'video',   title: 'Copilot tips with Mark Kashman',             by: 'Microsoft 365',     url: 'https://www.youtube.com/@MicrosoftMicrosoft365', note: 'Microsoft\'s product evangelists run regular short tip videos. Worth subscribing.' },
        { kind: 'podcast', title: 'The Intrazone',                              by: 'Microsoft 365',     url: 'https://www.microsoft.com/en-us/microsoft-365/podcasts/intrazone', note: 'Insider context on Microsoft 365 updates. Listen monthly.' },
      ]} />
    </>
  )
}
