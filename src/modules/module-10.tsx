/**
 * Module 10 — The playbook: AI in daily work
 *
 * Seven lessons, one per work activity, where AI most reliably pays
 * back. Each lesson is a practical recipe — prompts, patterns, and a
 * Try-It — so the module reads like a working professional's
 * companion rather than a tutorial.
 *
 * The capstone exercise asks the reader to map their own week and
 * apply Praxis to it.
 */
import {
  P, H2, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 10.1 — Email
// ============================================================
export function EmailPlaybook() {
  return (
    <>
      <BeginnerSection>
        <P>
          Email is the activity where AI pays back fastest for the largest number of working
          professionals. Most knowledge workers spend 1–2 hours a day inside an inbox; even a
          25% productivity gain in that one activity is worth more than mastering any other AI
          workflow in the curriculum. Start here.
        </P>

        <H2>Three patterns that do most of the work</H2>
        <OL items={[
          <><Em>Triage.</Em> Paste a long thread into Copilot or Claude and ask for: who's asking what, what action is needed, what's the deadline, who's the decision-maker. This collapses a 4-minute read into a 30-second skim.</>,
          <><Em>Draft.</Em> Give the AI the context and the outcome you want. Let it write the first version. You edit. Even when the draft is only 60% there, it eliminates the blank-page tax that slows so many email replies.</>,
          <><Em>Follow-up.</Em> Ask the AI to scan the thread for unanswered questions, unresolved actions, and dates that have slipped. This is where AI catches things the human brain has just stopped noticing.</>,
        ]} />
      </BeginnerSection>

      <H2>Triage in practice</H2>
      <P>
        For any thread longer than four messages, the triage prompt below pays back in seconds:
      </P>
      <Prompt>{`Read this email thread. In four bullets, tell me:

1. Who is asking for what?
2. What action do they need from me?
3. What's the deadline (explicit or implicit)?
4. Who has decision authority on this — me or someone else?

If anything is ambiguous, flag it. Don't fill gaps with assumptions.

[paste thread]`}</Prompt>
      <P>
        Inside Copilot, you can run this directly on a selected Outlook thread without
        copy-pasting — that's the real M365 unlock. Outside Copilot, paste into Claude or
        ChatGPT.
      </P>

      <H2>Drafting in practice</H2>
      <P>
        The single biggest mistake people make with email drafting is asking the AI to "write a
        reply to this". You get a generic, slightly stilted email. The better prompt gives the AI
        what it needs to write like you:
      </P>
      <Prompt>{`Draft a reply to the thread below.

Context about me:
- My role: [role]
- My relationship to the recipient: [colleague / vendor / client / boss]

What I want the reply to do:
- Outcome: [agree to meet / push back politely / ask for more info / close the loop]
- Tone: [warm / formal / brief]
- Length: [two short paragraphs / four sentences / one paragraph]

Things to include:
- [point 1]
- [point 2]

Things NOT to include:
- [anything sensitive]

[paste thread]`}</Prompt>

      <H2>Follow-up in practice</H2>
      <P>
        At the end of each week, paste your most important running threads into a single chat
        and ask:
      </P>
      <Prompt>{`Across these threads, identify:

1. Questions I was asked that I haven't answered.
2. Actions I committed to that I haven't done.
3. Decisions I asked someone else for that I haven't received.
4. Anything that has gone quiet that probably shouldn't have.

For each, suggest one short action.

[paste threads]`}</Prompt>

      <TryIt>
        <P>
          Pick three threads from your inbox right now — ideally ones that have been sitting
          there longer than they should. Run them through the triage prompt. Notice how much
          faster the answer comes back than reading them yourself. Then draft replies using the
          drafting prompt. The whole exercise takes under 15 minutes and clears three threads
          you'd otherwise spend an hour on.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          A small habit worth building: at the start of each morning, run the triage prompt
          over your overnight email. Five minutes of structured reading replaces twenty minutes
          of distracted inbox skimming, and you start the day with a clear list of what actually
          matters. This is the kind of micro-workflow that compounds; over a year it gives back
          a working week.
        </P>
      </LevelUp>

      <KeyCallout>
        Email is the highest-leverage starting point for AI in working life. Triage, draft,
        follow up. The mechanics take a day to learn; the hours-saved-per-week pay back forever.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 10.2 — Meetings
// ============================================================
export function MeetingsPlaybook() {
  return (
    <>
      <BeginnerSection>
        <P>
          Meetings are the second-highest-leverage activity for AI, after email. The asymmetry is
          obvious once you see it: a 30-minute meeting produces an hour of human time consumed,
          but only a few sentences of durable output. AI helps you compress the meeting into a
          tighter artefact and prepare faster so the meeting itself is more useful.
        </P>

        <H2>Three patterns that do most of the work</H2>
        <OL items={[
          <><Em>Prep.</Em> Before the meeting, have AI summarise what's known about attendees, the topic, and likely questions. Module 8 walked through building a Meeting Prep agent — once you have one, prep takes a minute.</>,
          <><Em>Recap.</Em> After the meeting, turn the transcript or your notes into structured outputs: decisions made, actions assigned, dates set, open questions. Copilot in Teams can do this from the recording directly.</>,
          <><Em>Action capture.</Em> Distil the recap into a short list of "who does what by when" and circulate. This single artefact does more for follow-through than any other meeting habit.</>,
        ]} />
      </BeginnerSection>

      <H2>Prep — the 60-second version</H2>
      <P>
        Before any non-trivial meeting, paste the invite (or a description) into your meeting-prep
        agent and read the output. In under a minute you have:
      </P>
      <UL items={[
        <>Who's in the room, and what each person is likely focused on.</>,
        <>Three questions you should have a sharp answer for.</>,
        <>One thing to bring.</>,
      ]} />
      <P>
        Compare this to walking in cold. The gap in performance is bigger than most people
        realise until they've done a few side-by-side.
      </P>

      <H2>Recap — turning hour-long meetings into 5-minute artefacts</H2>
      <P>
        Copilot in Teams will produce a meeting recap automatically if the meeting is recorded.
        If your meeting isn't recorded, paste your notes (or even just rough handwritten notes
        you've typed up after the meeting) into Copilot or Claude with this prompt:
      </P>
      <Prompt>{`Turn the meeting notes below into four short sections:

1. DECISIONS MADE — bullets, one per decision, plus who made it.
2. ACTIONS — bullets, one per action, in the format "[person] will [do thing] by [date]".
3. OPEN QUESTIONS — bullets, things that weren't resolved and need follow-up.
4. KEY CONTEXT — two or three sentences capturing the rationale, for someone reading later who wasn't there.

Be precise. If a decision was hedged, capture the hedge. If an action lacks a date, mark it [no date set].

[paste notes]`}</Prompt>
      <P>
        Send this artefact to attendees the same day, ideally within the hour. The downstream
        effect on follow-through is dramatic.
      </P>

      <H2>Action capture as a habit</H2>
      <P>
        Many teams over-engineer this. The single useful pattern is: at the end of the meeting,
        spend the last two minutes letting Copilot draft the action list from the transcript so
        far, read it aloud, and confirm with everyone before you leave. The actions are agreed
        in the room, not negotiated by email afterwards. That alone is worth the entire Copilot
        licence.
      </P>

      <TryIt>
        <P>
          For your next three meetings: (1) run the prep prompt or use your custom GPT before
          each, (2) record (with consent) and use Copilot Recap on each, (3) circulate the recap
          within the hour. Notice how the rhythm of the meetings themselves changes once people
          know they'll be summarised. Most teams find the meetings get shorter and more focused
          almost immediately.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          A pattern worth knowing: for recurring meetings, save the previous meeting's recap as
          pre-reading for the next. The AI can then summarise "what's changed since last time"
          rather than re-deriving context from scratch. Recurring board meetings, project
          steerings, and 1:1s benefit most from this. The recurring meeting is no longer a series
          of one-offs; it's a coherent thread with running context.
        </P>
      </LevelUp>

      <KeyCallout>
        Prep faster, recap better, capture actions in the room. The combined effect on
        productivity is larger than any meeting-management technique that doesn't involve AI.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 10.3 — Drafting
// ============================================================
export function DraftingPlaybook() {
  return (
    <>
      <BeginnerSection>
        <P>
          Drafting — documents, slides, presentations — is where the AI-as-collaborator framing
          matters most. The wrong mental model is "AI writes my document". The right mental model
          is "AI is the colleague I bounce drafts off". The output is yours; the AI is the
          rapid-iteration partner that makes the work better and faster.
        </P>

        <H2>The three-pass pattern</H2>
        <OL items={[
          <><Em>Pass 1 — Structure.</Em> Tell AI what you're writing, who it's for, and what it needs to achieve. Ask for an outline only. Iterate on the outline until the spine is right.</>,
          <><Em>Pass 2 — Draft.</Em> Ask AI to expand each section into 80% of the way to finished. Don't try to nail the final version in one prompt — you'll spend longer cleaning up than if you'd done a quick draft and a careful edit.</>,
          <><Em>Pass 3 — Critique.</Em> Take the draft to a different model (Module 7's critic pattern) and ask for the three weakest sections, the three places that need a citation, and the one thing the draft is missing. Revise.</>,
        ]} />
        <P>
          Each pass takes 5–15 minutes. The whole thing takes about 30 minutes for a memo that
          would otherwise take 2 hours, and the quality is usually better — not because the AI
          is smarter than you, but because the three-pass structure forces a level of rigour that
          ad-hoc drafting doesn't.
        </P>
      </BeginnerSection>

      <H2>Outlining prompt</H2>
      <Prompt>{`I need to write a [document type — board paper / strategy memo / project plan /
internal newsletter].

Audience: [who reads this]
Purpose: [what decision or action it should support]
Length: [target word count or page count]
Tone: [formal / friendly / direct]

Give me an outline only — headings and one-sentence summaries of what each
section will cover. Do not write the sections yet.

The thing I'm trying to communicate is: [your core message in two sentences]

Context the reader will already have: [what they know]
Context they will NOT have: [what you'll need to explain]`}</Prompt>

      <H2>Drafting prompt</H2>
      <P>
        Once the outline is approved by you, expand each section. Best done one section at a
        time so you can keep the quality bar high:
      </P>
      <Prompt>{`Expand the section titled "[section]" into [number] paragraphs.

Tone: [same tone as outline]
Avoid: [jargon to avoid / things that would be wrong]

Include:
- [point 1]
- [point 2]

Don't write a perfect final version. Write a strong first draft that I'll edit.`}</Prompt>

      <H2>Critique prompt</H2>
      <P>
        Once you have a full draft, open a different chat (different model if possible) and run:
      </P>
      <Prompt>{`Critique this draft as a skeptical senior reviewer. You're not here to be
encouraging.

Find:
1. The three weakest sections, and why each is weak.
2. Any claim that should have a citation but doesn't.
3. Any sentence that sounds confident but is actually a guess.
4. The single most important thing the draft is missing.

Be specific. Use quotes from the draft to anchor each criticism.

[paste full draft]`}</Prompt>

      <H2>Slides specifically</H2>
      <P>
        For slide decks, AI is most useful at two ends: at the start (outlining the deck flow
        before opening PowerPoint) and at the end (writing the speaker notes once the slides
        are designed). Prompt the AI with the slide titles in order and ask for what should be
        on each slide. Don't expect AI to generate finished slides — the layout work is
        usually faster done by a human, and Copilot in PowerPoint isn't yet good enough to
        skip that step.
      </P>

      <TryIt>
        <P>
          Pick a document you owe someone. Run the three-pass pattern on it: outline, draft,
          critique. Time yourself. Compare to how long the same document would have taken you
          without AI. Most people are surprised: the time-savings are real, but the quality
          lift is the bigger gain.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          A pattern worth knowing for high-stakes writing: write the first paragraph yourself,
          by hand, before involving any AI. The first paragraph sets the voice and frames the
          argument. If you let AI write it, the rest of the document tends to inherit a slightly
          off voice that's hard to fix later. Your hand-written first paragraph anchors the
          tone for everything the AI generates next.
        </P>
      </LevelUp>

      <KeyCallout>
        Outline, draft, critique. Three short passes, three different prompts, often two
        different models. The output reads like yours but it's better, and it shipped two hours
        faster than it would have otherwise.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 10.4 — Research and synthesis
// ============================================================
export function ResearchPlaybook() {
  return (
    <>
      <BeginnerSection>
        <P>
          Research is the activity where AI is most likely to lie to you, and also the activity
          where AI gives you the biggest leverage when used right. The key skill is treating AI
          as a fast first-pass researcher whose claims you then verify, not as an oracle whose
          claims you accept.
        </P>

        <H2>Three patterns that do most of the work</H2>
        <OL items={[
          <><Em>Scope.</Em> Use AI to map the shape of a topic you're not yet expert in — the major sub-topics, the dominant views, the open debates. This is what AI does best.</>,
          <><Em>Source-anchor.</Em> Switch to a tool that retrieves real sources (Copilot with web search, Perplexity, ChatGPT with browsing). Get citations. Read the actual sources, not just the AI's summary of them.</>,
          <><Em>Synthesise.</Em> Once you've read the primary material yourself, use AI to organise what you've learned into a structured summary. This is where AI is strongest as a thinking partner.</>,
        ]} />
      </BeginnerSection>

      <H2>Scoping prompt</H2>
      <Prompt>{`I need to get up to speed on [topic] for [purpose, audience, time horizon].

I currently know roughly [your current understanding in one paragraph].

Give me:
1. The three to five sub-topics I need to understand.
2. The two or three dominant schools of thought, briefly.
3. The two or three things that are still genuinely contested.
4. What would I be embarrassed not to know, going into a conversation with an expert?
5. Three searches I should run to start getting concrete sources.

Don't try to teach me everything. Give me the map.`}</Prompt>

      <H2>Source-anchoring</H2>
      <P>
        Once you have the map, switch to a tool that retrieves real sources. Copilot inside
        M365 can search the web and your tenant; Perplexity is excellent at standalone web
        research; ChatGPT with browsing also works. Ask:
      </P>
      <Prompt>{`I'm researching [specific question from the scoping pass].

Find me three sources with the most authoritative view on this. For each:
- Title and URL.
- One sentence summary.
- One specific data point or quote I should remember.

Prioritise primary sources (the regulator, the company, the researcher) over
secondary commentary.`}</Prompt>
      <P>
        Then — and this is the part that separates serious researchers from credulous ones —
        actually open each source. Read it. The AI's summary will be 80% right; the missing 20%
        is where the value lives.
      </P>

      <H2>Synthesis</H2>
      <P>
        After you've read 3–10 sources yourself, paste them (or your notes on them) into a single
        chat and ask the AI to organise what you've learned:
      </P>
      <Prompt>{`I've read the following sources [list]. Help me synthesise them.

1. What do they agree on?
2. Where do they disagree, and on what specifically?
3. What's the single most important thing a senior reader of my work would
   want me to know about this topic?
4. What's the thing I'm probably missing — that all three sources implicitly
   assume but never spell out?

[paste source summaries]`}</Prompt>
      <P>
        Question 4 is the trick. Asking explicitly for what's "implicitly assumed" pulls out
        the unsaid context that's often the most useful insight from a research session.
      </P>

      <TryIt>
        <P>
          Pick a topic at the edge of your expertise — something you'd benefit from understanding
          better, but haven't had time to study. Run the three-pattern sequence: scope, source,
          synthesise. Spend an hour total. You'll come out the other side with a structured
          understanding that would normally take half a day, and you'll have the citations to
          back it up.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          The Module 7 Council pattern shines here. Ask three models the same scoping question
          and compare. Where they agree on a sub-topic being important, that's a strong signal.
          Where they disagree, that's where you should dig in by hand. For genuinely high-stakes
          research (a board paper, an investment thesis, a strategic move), the Council step is
          almost always worth the extra 30 minutes.
        </P>
      </LevelUp>

      <KeyCallout>
        AI is a brilliant first-pass researcher and a fluent synthesist. It is not a reliable
        source. The trick is using it for what it's good at (scope, structure, synthesis) and
        switching to primary sources where the facts matter.
      </KeyCallout>

      <DeeperDive items={[
        { kind: 'article', title: 'How to research like a journalist', by: 'Various', note: 'Classic technique still applies in the AI era — verify against primary sources, triangulate.' },
        { kind: 'article', title: 'Perplexity\'s research mode', by: 'Perplexity', note: 'Worth knowing as a specialist research tool alongside the general-purpose models.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 10.5 — Code and spreadsheets for non-developers
// ============================================================
export function CodePlaybook() {
  return (
    <>
      <BeginnerSection>
        <P>
          You don't need to be a developer to get serious value out of AI-assisted code and
          spreadsheet work. The barrier most working professionals have isn't the syntax; it's
          the confidence to start. AI removes the syntax barrier almost entirely. What you bring
          to the table is the understanding of what you actually want to compute.
        </P>

        <H2>Three patterns that do most of the work</H2>
        <OL items={[
          <><Em>Excel formulas.</Em> Describe what you want in English. Ask for the formula. Paste it in. AI is now better at Excel formulas than 90% of office workers.</>,
          <><Em>Power Query and macros.</Em> The next level up. For repetitive data-cleaning tasks, AI can generate the Power Query M code or a VBA macro. You don't need to read it line-by-line; you need to test that it does what you want on a small sample.</>,
          <><Em>Small scripts and tools.</Em> For tasks that don't fit Excel — file renaming, scraping a PDF for specific values, batch-emailing — AI can write a small Python or PowerShell script. If you're using Claude Code (Module 6), it can also run it for you.</>,
        ]} />
      </BeginnerSection>

      <H2>The Excel formula recipe</H2>
      <Prompt>{`I have a spreadsheet with these columns:
- A: [description]
- B: [description]
- C: [description]
... etc.

I want to: [describe what you want to compute, in plain English].

Give me an Excel formula that does this. Explain in one sentence what each
part of the formula does, so I can adapt it later.

If there's a simpler way to do this using a different Excel feature (pivot
table, Power Query, etc.), tell me that instead.`}</Prompt>

      <H2>The Power Query / VBA recipe</H2>
      <P>
        For anything that recurs — a monthly cleanup, a weekly report, a recurring import —
        the formula approach starts to creak. That's the moment to switch to Power Query for
        Excel or, if you must, a small VBA macro:
      </P>
      <Prompt>{`I do the following data cleanup every month, by hand:
1. [step 1]
2. [step 2]
3. [step 3]
4. [step 4]

This takes me [N] minutes each time.

Write me a Power Query (M code) that does this automatically. Include
comments explaining what each step does, so I can adjust if the source data
changes.

Assume the source data looks like [paste a small sample, names changed].`}</Prompt>

      <H2>Small scripts</H2>
      <P>
        For one-off or recurring tasks that aren't really spreadsheet work — renaming 500 files
        by a pattern, extracting specific data from 30 PDFs, parsing a folder of emails — a
        small Python script does in a minute what would take you an hour. You don't need to
        learn Python to use this; you need to be willing to copy a script, paste it into a
        tool that runs it, and check the output.
      </P>
      <P>
        If you have Claude Code on your laptop (Module 6), you can describe the task and let
        Claude write and run the script directly. If not, ChatGPT can write the script and you
        can run it via free tools like Google Colab (for Python) or PowerShell ISE (for
        Windows).
      </P>

      <TryIt>
        <P>
          Pick the most-repetitive spreadsheet task in your work — the one you've been
          doing manually for months. Describe it to Claude or Copilot. Ask for a Power Query or
          script. Test it on a sample. Once it works, you've just freed up a few hours a month
          permanently. Most working professionals have at least three of these tasks they've
          never thought to automate.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          A psychological note: the biggest blocker to non-developers using AI for code work
          isn't ability. It's the worry that they'll generate something they "don't understand"
          and that this is somehow irresponsible. Two things to know about this. First, you
          don't drive a car by understanding the engine; you drive it by understanding what it
          does. The same is fine for code. Second, AI can explain any line of code it generated,
          in plain English, on request. Ask. The transparency tax is one prompt.
        </P>
        <P>
          What you do need to do, every time, is <Em>test on a small sample</Em> before
          running on your real data. AI-generated code can be wrong in subtle ways. Testing on
          a sample takes a minute and catches almost every problem you'd care about.
        </P>
      </LevelUp>

      <KeyCallout>
        Non-developers can now do what used to require a Python developer or a power user. The
        ceiling is lower than people expect; the floor is much, much higher.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 10.6 — Decisions and critique
// ============================================================
export function DecisionsPlaybook() {
  return (
    <>
      <BeginnerSection>
        <P>
          Using AI as a thinking partner for decisions is one of the most under-appreciated
          applications. Not "AI decides for you" — that almost never works. But "AI as the
          devil's advocate, the structured critic, the question-asker" — that pays back on
          almost every meaningful decision you'll make.
        </P>

        <H2>Three patterns that do most of the work</H2>
        <OL items={[
          <><Em>Devil's advocate.</Em> Once you've reached a tentative decision, ask AI to argue against it. Hard. The exercise of defending the decision against a competent critic is one of the highest-leverage forms of due diligence.</>,
          <><Em>Pre-mortem.</Em> Before committing, ask AI to describe what failure looks like in six months. What were the warning signs you missed? Which assumption proved wrong? This frames the risks in a way that abstract risk-listing doesn't.</>,
          <><Em>Frame-checking.</Em> Ask AI to identify the implicit framing in how you're thinking about the decision. Often the most valuable insight is that you've been answering the wrong question.</>,
        ]} />
      </BeginnerSection>

      <H2>The devil's advocate prompt</H2>
      <Prompt>{`I'm leaning towards the following decision: [state the decision in one
sentence].

My reasoning is:
- [reason 1]
- [reason 2]
- [reason 3]

I'd like you to argue against this decision. Be specific. Don't give me
balanced "considerations" — give me the case that I'm wrong.

Specifically:
1. What's the strongest counter-argument to my reasoning?
2. What am I assuming that might not be true?
3. What's the most likely way this decision turns out badly in 6–12 months?
4. What question should I be asking that I'm not?

Be direct. I don't need diplomacy; I need a sharp critic.`}</Prompt>

      <H2>The pre-mortem prompt</H2>
      <Prompt>{`Imagine it is six months from now. We made the following decision:
[the decision].

It has gone badly. Write a one-paragraph "post-mortem" describing:
- What specifically went wrong.
- The warning signs we missed at the time.
- The assumption that turned out to be incorrect.
- The cheapest thing we could have done at the time of the decision to
  reduce this risk.

Don't be balanced. Imagine the worst plausible outcome and reason backwards.`}</Prompt>
      <P>
        Pre-mortems are a well-known decision technique. AI makes them faster and more rigorous:
        the AI doesn't have your blind spots, so its account of "what went wrong" surfaces risks
        you would not have surfaced on your own.
      </P>

      <H2>Frame-checking</H2>
      <Prompt>{`Here is how I'm currently framing a decision:

[describe the decision and how you're currently thinking about it, including
the alternatives you're choosing between]

I'd like you to step back and identify:
1. What's the implicit framing here?
2. Are there alternatives I'm not considering because of how I've framed it?
3. Am I solving the right problem, or have I narrowed the question
   prematurely?
4. If a thoughtful outsider with no stake in this looked at the same
   situation, how might they describe the choice differently?`}</Prompt>

      <TryIt>
        <P>
          Pick a real decision you're currently weighing — work or personal. Run all three
          prompts in sequence: devil's advocate, then pre-mortem, then frame-check. Take notes
          on what surfaces. You'll usually end up either more confident in your original
          direction (because the critiques didn't land) or pivoting in a way that would have
          been hard to reach by sitting with the question alone.
        </P>
      </TryIt>

      <LevelUp tier="advanced">
        <P>
          The Module 7 Council pattern is exceptionally powerful here. Run each of the three
          prompts against three different models. Compare the devil's advocate cases — where
          they agree, the criticism is probably valid. Compare the pre-mortems — where they
          surface the same failure mode, take it seriously. Compare the frame-checks — where
          they all see the same hidden assumption, that's a finding worth investigating.
        </P>
        <P>
          For any decision with material consequences, this 30-minute Council sweep is one of
          the highest-value uses of AI in professional life. It is not common practice yet —
          which means doing it gives you an edge most colleagues don't have.
        </P>
      </LevelUp>

      <KeyCallout>
        AI doesn't make decisions. AI sharpens the decisions you make. Devil's advocate,
        pre-mortem, frame-check — three prompts, fifteen minutes, applied to any decision
        worth more than the time spent.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 10.7 — Capstone: rebuild your day
// ============================================================
export function RebuildYourDay() {
  return (
    <>
      <BeginnerSection>
        <P>
          You've reached the end. The last lesson is not a lecture; it's an exercise. The point
          of Praxis is not knowing about AI. The point is doing your actual work — your
          specific work, in your specific role — measurably better.
        </P>
        <P>
          This capstone asks you to map your typical working week, identify the leverage points,
          and design a personal AI playbook for the week ahead. It takes about an hour. The
          payoff is the rest of your career.
        </P>

        <H2>Step 1 — Map your week</H2>
        <P>
          On a single sheet of paper (or a blank document), list the recurring activities of
          your working week. Be honest. Aim for 10–20 items. Examples:
        </P>
        <UL items={[
          <>Monday morning leadership meeting (1 hour, every week)</>,
          <>Inbox triage (30 minutes, every morning)</>,
          <>Weekly status email to my boss (45 minutes, every Friday)</>,
          <>Project review with the team (1 hour, every Thursday)</>,
          <>Reading regulatory updates (2 hours, every Wednesday)</>,
          <>1:1s with direct reports (30 minutes each, weekly)</>,
          <>Drafting board paper (4 hours, once a month)</>,
          <>Monthly performance reporting (3 hours, once a month)</>,
        ]} />
        <P>
          Beside each item, write the rough time you spend on it per week or month.
        </P>

        <H2>Step 2 — Score each item against three questions</H2>
        <OL items={[
          <><Em>Is this activity repetitive?</Em> (Yes/No). Things that recur are higher-leverage to automate.</>,
          <><Em>Is the output reviewable?</Em> (Yes/No). If you'd read what AI produced before sending, AI can help. If it has to be perfect first time without a human in the loop, AI is risky.</>,
          <><Em>Could the activity be 30% faster with the right AI prompt or workflow?</Em> (Yes/Maybe/No). Be honest. Some activities really are AI-immune.</>,
        ]} />
        <P>
          The activities that score Yes/Yes/Yes are your highest-leverage targets. The
          activities that score Yes/Yes/Maybe are next.
        </P>
      </BeginnerSection>

      <H2>Step 3 — Match each high-leverage activity to a Praxis pattern</H2>
      <P>
        For each high-leverage activity, pick the Module 10 lesson it most closely maps to:
      </P>
      <UL items={[
        <>Email-heavy? → Module 10.1 patterns.</>,
        <>Meeting-heavy? → Module 10.2 patterns.</>,
        <>Drafting-heavy? → Module 10.3 patterns.</>,
        <>Research-heavy? → Module 10.4 patterns.</>,
        <>Data-heavy? → Module 10.5 patterns.</>,
        <>Decision-heavy? → Module 10.6 patterns.</>,
      ]} />
      <P>
        For each, write down the specific prompt you'll use, the tool you'll use it in, and the
        first activity you'll apply it to next week.
      </P>

      <H2>Step 4 — Build your custom toolkit</H2>
      <P>
        Where the same pattern recurs, build a custom agent (Module 8) or save the prompt as a
        Claude Skill or a Copilot prompt. The fifth time you do it, you'll thank yourself for
        building the agent the first time.
      </P>
      <P>
        Target a personal toolkit of 5–10 named agents or saved prompts by the end of your
        first month. Suggested starter set:
      </P>
      <UL items={[
        <><Em>Inbox Triage:</Em> the Module 10.1 prompt, saved.</>,
        <><Em>Meeting Prep:</Em> the Module 8 custom GPT.</>,
        <><Em>Meeting Recap:</Em> Copilot in Teams, plus the recap prompt for non-recorded meetings.</>,
        <><Em>Document Critic:</Em> a different model from your usual drafter, running the Module 10.3 critique prompt.</>,
        <><Em>Devil's Advocate:</Em> the Module 10.6 prompt, saved.</>,
        <><Em>Research Scout:</Em> the Module 10.4 scoping prompt, saved.</>,
        <><Em>One personal tool unique to your role.</Em> Everyone has one — the recurring task no one else in your org has. Build the agent for it.</>,
      ]} />

      <H2>Step 5 — Pick one week. Apply the playbook.</H2>
      <P>
        Pick the week ahead. Apply the playbook deliberately. Keep notes on what worked, what
        didn't, where you got stuck. At the end of the week, take 15 minutes and ask yourself:
      </P>
      <UL items={[
        <>Where did AI genuinely save me time, and how much?</>,
        <>Where did I expect it to help, and it didn't?</>,
        <>What's one new prompt or pattern I'll add to the toolkit?</>,
        <>What's one habit I'll drop, because AI made it obsolete?</>,
        <>What's the next thing I want to learn?</>,
      ]} />

      <TryIt>
        <P>
          This is the only exercise in Praxis that's mandatory. Take an hour now, or this
          weekend, and do steps 1–4. The cost is one hour. The compounding payoff is
          measurable within a fortnight and large within a quarter.
        </P>
      </TryIt>

      <LevelUp tier="advanced">
        <P>
          Three pieces of advice from people who've been through this:
        </P>
        <UL items={[
          <><Em>Don't try to AI-ify everything at once.</Em> Pick the top three highest-leverage activities and master those before adding more. Adoption fatigue is real.</>,
          <><Em>Share what you learn.</Em> The act of teaching a colleague one of your saved prompts forces you to refine it. You'll get better; your team will get better. Over a year this matters more than any individual productivity gain.</>,
          <><Em>Re-do this exercise every six months.</Em> Your work changes. The tools change. What was high-leverage in May 2026 may be table-stakes in November. The playbook is a living document.</>,
        ]} />
      </LevelUp>

      <KeyCallout>
        Praxis means practice. Knowing about AI is worth nothing. Doing your actual work better
        with AI is worth everything. You've done the reading; now do the rebuild.
      </KeyCallout>

      <DeeperDive items={[
        { kind: 'book', title: 'The Effective Executive', by: 'Peter Drucker', note: 'The classic argument that knowledge workers should be judged by what they produce, not by what they do. AI sharpens the distinction.' },
        { kind: 'book', title: 'Deep Work', by: 'Cal Newport', note: 'Useful complement to a Praxis-style playbook — AI is most powerful when paired with the focused human attention to use it well.' },
        { kind: 'article', title: 'The Three Eras of AI at Work', by: 'Various', note: 'The shift from "AI as novelty" to "AI as workflow" to "AI as the medium of work" — useful framing for where you sit now.' },
      ]} />
    </>
  )
}
