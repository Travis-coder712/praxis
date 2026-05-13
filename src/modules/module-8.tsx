/**
 * Module 8 — Agents and automation
 *
 * What "agent" actually means once the hype is stripped away,
 * how the major platforms have implemented agents, where agents
 * fail in production, and a 30-minute hands-on build.
 */
import {
  P, H2, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  CostNote, DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 8.1 — What an agent actually is
// ============================================================
export function WhatIsAnAgent() {
  return (
    <>
      <BeginnerSection>
        <P>
          "Agent" is the most over-used word in AI right now. Vendors use it to mean almost
          anything: a chatbot with a system prompt, a Copilot extension that calls one API, a
          fully autonomous coding assistant. The term has been so badly diluted that it's almost
          useless without a definition. Here's a working one.
        </P>
        <KeyCallout>
          An agent is an LLM that runs in a loop, with the ability to call tools and observe their
          results, until a goal is reached or a limit is hit. The defining word is <Em>loop</Em>.
        </KeyCallout>

        <H2>The loop, not the model</H2>
        <P>
          A regular chat is one round: you ask, the model answers, you read. An agent is many
          rounds in sequence, all of them automated. The model thinks, picks a tool, runs the
          tool, looks at what came back, decides what to do next, picks another tool, and so on.
          The user might give the original goal and then not interact again for ten minutes while
          the agent works.
        </P>
        <P>
          This is why the same underlying model (Claude, GPT-4, Gemini) can be a chatbot in one
          context and an agent in another. The model didn't change. What changed is whether
          there's a control loop wrapped around it, and whether that loop has access to tools.
        </P>

        <H2>The three things an agent needs</H2>
        <UL items={[
          <><Em>A goal.</Em> Something to do. "Triage my inbox", "research this company", "fix this bug", "summarise these PDFs". The clearer the goal, the better the agent performs.</>,
          <><Em>Tools.</Em> Functions the agent can call. Read a file. Send an email. Search the web. Run a calculation. Without tools an agent can only talk — it can't act.</>,
          <><Em>A stopping condition.</Em> When does the agent decide it's done? When the goal looks accomplished, when a step limit is hit, when an error is unrecoverable, when the user says stop. Bad stopping conditions are the #1 cause of agents that run forever burning tokens.</>,
        ]} />
      </BeginnerSection>

      <H2>A concrete example</H2>
      <P>
        Imagine you say: "Find me three flights from Sydney to Tokyo next Tuesday, under $1,500,
        with reasonable layovers, and email the results to my assistant." Here's roughly what
        happens inside an agent that handles that:
      </P>
      <OL items={[
        <><Em>The model reads the request</Em> and decides the first useful action is to search flights.</>,
        <><Em>It calls a flight-search tool</Em> with the parameters parsed from your request.</>,
        <><Em>The tool returns a list of 40 candidate flights.</Em> The model reads the list.</>,
        <><Em>The model filters</Em> for price and layover length, keeps the top three.</>,
        <><Em>The model writes an email</Em> in the format the user prefers.</>,
        <><Em>The model calls a send-email tool</Em> to dispatch it.</>,
        <><Em>The agent reports back:</Em> "Done. Three options sent."</>,
      ]} />
      <P>
        Notice: at no step did you have to intervene. The model decided what to do, did it, and
        moved on. That's the loop. That's what makes it an agent.
      </P>

      <LevelUp tier="intermediate">
        <P>
          The model itself doesn't "remember" the loop. Each tool-call is a separate API request
          where the model is shown the full conversation history (the original goal, every tool
          call it made, every tool result, every reasoning step). It then decides the <Em>next</Em>
          action, given all of that, and the orchestration layer dispatches the chosen tool.
        </P>
        <P>
          This is why agents are expensive: the conversation history grows with every step,
          and every step re-sends the entire history. A 20-step agent costs vastly more than 20
          single chat messages would have.
        </P>
      </LevelUp>

      <CostNote>
        A non-trivial agent run can use tens of thousands of tokens because the entire history is
        re-sent at every step. A 20-step Claude agent on Sonnet might cost $0.20–$1.00 per run.
        Acceptable for high-value work; ruinous if you accidentally put one in an infinite loop.
        Always set step limits.
      </CostNote>
    </>
  )
}

// ============================================================
// Lesson 8.2 — Copilot agents, Claude agents, custom GPTs
// ============================================================
export function AgentFlavours() {
  return (
    <>
      <BeginnerSection>
        <P>
          The three platforms most working professionals will meet — Microsoft Copilot, Claude,
          and ChatGPT — each have their own agent implementations. They look superficially
          similar, but they make very different trade-offs. Knowing which is which lets you pick
          the right tool for the job.
        </P>

        <H2>Copilot Studio agents</H2>
        <UL items={[
          <><Em>What they are:</Em> agents you build inside your Microsoft 365 tenant. They have access to your SharePoint, Outlook, Teams, and (with permission) line-of-business systems.</>,
          <><Em>Strengths:</Em> they live inside your data plane. Your prompts and the agent's outputs stay inside your tenant boundary. They can be deployed to colleagues, surface in Teams, run on a schedule.</>,
          <><Em>Weaknesses:</Em> the agent runtime is opinionated and not very transparent. Debugging a Copilot agent that does the wrong thing is harder than debugging Claude or ChatGPT. The model behind the agent is GPT-class but you don't choose which version.</>,
          <><Em>Best for:</Em> internal automations that touch company data — meeting summarisers, ticket triage, document Q&A — where the data plane matters more than model choice.</>,
        ]} />

        <H2>Claude agents (Skills, Projects, Claude Code)</H2>
        <UL items={[
          <><Em>What they are:</Em> Anthropic has three different agent surfaces. Skills inside Claude.ai are short, scoped agents triggered from chat. Claude Code is a full coding agent on your filesystem. The Claude API supports building bespoke agents.</>,
          <><Em>Strengths:</Em> the underlying model is unusually good at long-horizon work — agents that need to plan over many steps without losing the thread. The tool-call API is clean. Pricing is competitive.</>,
          <><Em>Weaknesses:</Em> Claude doesn't sit inside M365, so no native access to company SharePoint or Outlook. You need to wire that yourself, and a lot of orgs won't let you. Less polished UI for non-technical users.</>,
          <><Em>Best for:</Em> personal automations, technical work, long research tasks, anything where the model's quality matters more than the data plane.</>,
        ]} />

        <H2>Custom GPTs and OpenAI Assistants</H2>
        <UL items={[
          <><Em>What they are:</Em> custom GPTs are agents you configure in ChatGPT. The OpenAI Assistants API is the lower-level version. Both are scoped wrappers around GPT-4-class models with custom instructions, knowledge files, and tool access.</>,
          <><Em>Strengths:</Em> the easiest agents to build. Custom GPTs can be configured in 10 minutes by a non-developer. Massive ecosystem of community GPTs to learn from.</>,
          <><Em>Weaknesses:</Em> shareable only inside ChatGPT (paid users see public GPTs; not enterprise-deployable in the way Copilot agents are). Knowledge file size limits. Data plane is OpenAI's, which most companies treat as external.</>,
          <><Em>Best for:</Em> personal productivity agents, hobby projects, sharable mini-tools, prototypes you might later rebuild inside Copilot.</>,
        ]} />
      </BeginnerSection>

      <H2>The decision matrix</H2>
      <UL items={[
        <><Em>Touches company data, has to be shareable to colleagues:</Em> Copilot agent.</>,
        <><Em>Personal use, technical or research-heavy, long-running:</Em> Claude (Skills or Claude Code).</>,
        <><Em>Personal use, quick to build, low-stakes:</Em> Custom GPT.</>,
        <><Em>Genuinely complex orchestration, you'll need to debug it:</Em> bespoke agent on the Anthropic or OpenAI API, with your own code wrapping it.</>,
      ]} />

      <LevelUp tier="advanced">
        <P>
          A trick worth knowing: agents from different platforms can call each other. Nothing
          stops you from having a Copilot agent that, for one tricky step, calls the Claude API
          to do something Claude is better at, and returns the result back into the Copilot flow.
          Most working professionals will never need to do this, but for power users it's
          surprisingly approachable.
        </P>
        <P>
          The same logic applies to the Council pattern from Module 7: an agent can be the
          orchestrator that consults two or three models, weighs the answers, and acts on the
          consensus. That's the agent + multi-model pattern, and it's where the cutting edge of
          AI workflow design currently is.
        </P>
      </LevelUp>

      <KeyCallout>
        Pick the agent platform that matches the data plane your work lives in, not the one
        with the best demo. A "worse" model that already has access to your SharePoint will
        outperform a "better" model that needs you to paste things in.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 8.3 — Where agents fail
// ============================================================
export function WhereAgentsFail() {
  return (
    <>
      <BeginnerSection>
        <P>
          The agent demos you see online are almost always cherry-picked. The unglamorous truth
          is that most agent runs in production fail in characteristic ways. If you understand
          the failure modes upfront, you can design around them. If you don't, you'll fall in
          love with the demo and then get burned in the rollout.
        </P>

        <H2>Failure mode 1 — compounding error</H2>
        <P>
          Every step in an agent loop has some probability of being wrong. If each step is 95%
          accurate, a 20-step agent has a 64% chance of getting all 20 steps right
          (0.95<sup>20</sup>). At 90% accuracy per step, the whole-run reliability drops to 12%.
          This is just maths — but it's the maths that most agent vendors don't put in their
          marketing.
        </P>
        <P>
          The implication: keep agent loops <Em>short</Em>. Five well-defined steps will usually
          out-perform twenty loosely-defined ones. If a task needs many steps, structure it as
          several short agents in a chain, with human review between, rather than one long agent.
        </P>

        <H2>Failure mode 2 — long-horizon drift</H2>
        <P>
          Even when no single step is "wrong", agents lose the plot over long runs. The model's
          context fills with tool calls and their outputs. The original goal gets buried under
          intermediate noise. By step 30 the agent is optimising for something that's drifted
          from what you asked for.
        </P>
        <P>
          Mitigations: re-state the goal explicitly every few steps, summarise the history
          periodically and replace the verbatim log with the summary, and prefer agents that
          have a final "review what you did against the original goal" step before declaring
          done.
        </P>

        <H2>Failure mode 3 — authority overreach</H2>
        <P>
          The most embarrassing agent failures are the ones where the agent did something it
          technically had permission to do but obviously shouldn't have. Email-triage agent
          archives an unread message from your CEO. Calendar agent moves a meeting it shouldn't
          have touched. Spending agent buys the wrong thing because the prompt was ambiguous.
        </P>
        <P>
          Mitigation: think hard about the <Em>blast radius</Em> of every tool you give an agent.
          A read-only tool is almost always safe. A write tool needs a confirmation step.
          A spend-money or send-email tool ideally needs a human approval. Read carefully through
          the agent's tool list before letting it run unsupervised.
        </P>

        <H2>Failure mode 4 — silent infinite loops</H2>
        <P>
          Agents can get stuck in two ways. The obvious one: the model keeps calling the same
          tool over and over because it can't satisfy its stopping condition. The subtle one:
          the model alternates between two near-identical actions, each correcting a perceived
          error in the other, while no real progress is made. Both burn tokens fast.
        </P>
        <P>
          Mitigations: hard step limits, dollar limits, "the agent has not made progress in
          three steps — escalate to a human" detectors. These exist in every mature agent
          framework. Use them.
        </P>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <P>
          Across all four failure modes, there's a single underlying principle: <Em>agents
          fail when they're left alone for too long with too much authority</Em>. Short
          horizons, narrow tools, and frequent human checkpoints are the design vocabulary that
          makes agents reliable in production. The vendors don't always emphasise this because
          short-horizon agents are less impressive in a demo, but they're far more useful
          in real life.
        </P>
        <P>
          The pattern most experienced practitioners settle on: an agent does one well-scoped
          thing, then hands control back to the human (or to a different agent). Long
          autonomous runs are reserved for cases where the cost of error is small or the work is
          easily reviewed (e.g. drafting an email a human will read before sending).
        </P>
      </LevelUp>

      <KeyCallout>
        Short agents that hand control back are robust. Long agents that run unattended are
        fragile. Choose the topology first; choose the model second.
      </KeyCallout>

      <DeeperDive items={[
        { kind: 'paper', title: 'The Bitter Lesson of Long-Horizon Agents', by: 'Various', note: 'Surveys of why long-horizon RL and agent systems underperform in production. Same lesson, different decade.' },
        { kind: 'article', title: 'Tool use evaluations', by: 'Anthropic', note: 'Anthropic publishes its tool-call reliability numbers, which is more transparency than most vendors offer. Worth reading to calibrate expectations.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 8.4 — Try it: build a 30-minute agent
// ============================================================
export function TryItAgent() {
  return (
    <>
      <BeginnerSection>
        <P>
          Time to actually build one. The exercise is designed to take 30 minutes and to give
          you a working agent at the end of it. We'll use a Custom GPT because it's the lowest
          friction starting point — no IT involvement, no API keys, no installs. The principles
          carry over to Copilot agents and Claude skills.
        </P>

        <H2>What we're building</H2>
        <P>
          A "meeting-prep" agent. You give it a calendar invite (or just paste the meeting
          context). It does three things:
        </P>
        <OL items={[
          <>Tells you who's in the meeting and what's likely on their mind.</>,
          <>Drafts three sharp questions you should be ready to answer.</>,
          <>Suggests one thing you should bring or pre-read.</>,
        ]} />
        <P>
          Short horizon. Narrow scope. Read-only tools. This is exactly the agent topology that
          works.
        </P>
      </BeginnerSection>

      <H2>Step 1 — Open the builder</H2>
      <P>
        Go to ChatGPT (a paid Plus account is required to build GPTs). Click "Explore GPTs" →
        "Create". You'll get a two-pane interface: the builder on the left, a preview on the
        right.
      </P>

      <H2>Step 2 — Configure the agent</H2>
      <P>
        Skip the conversational builder; click "Configure". Fill in:
      </P>
      <UL items={[
        <><Em>Name:</Em> Meeting Prep.</>,
        <><Em>Description:</Em> Prepares you for any meeting in 60 seconds.</>,
        <><Em>Instructions:</Em> paste the prompt below.</>,
      ]} />
      <Prompt>{`You are a meeting-prep agent. The user will paste a meeting invite,
calendar entry, or a paragraph describing an upcoming meeting.

Your job is to produce three things, in this exact order:

1) ATTENDEES & ANGLE
   For each named attendee (skip the user), give one sentence on
   their likely angle, priorities, or recent context. If you don't
   know who they are, say so honestly.

2) THREE QUESTIONS TO BE READY FOR
   List the three sharpest questions the user should have an answer
   ready for. Pick questions that, if unprepared, would be the most
   awkward.

3) ONE THING TO BRING
   One concrete item — a number, a one-pager, a recent example —
   the user should walk in with.

Be concise. Use bullets, not paragraphs. Avoid filler.
If the meeting context is too vague to do all three sections,
ask one clarifying question before responding.`}</Prompt>

      <H2>Step 3 — Pick the tools</H2>
      <P>
        On the right of the Configure pane, you'll see "Capabilities". For this agent, turn on:
      </P>
      <UL items={[
        <><Em>Web Browsing:</Em> on. (So the agent can look up attendees if it doesn't already know them.)</>,
        <><Em>Code Interpreter:</Em> off. (Not needed for this task; less surface area.)</>,
        <><Em>DALL·E Image Generation:</Em> off.</>,
        <><Em>Actions / custom tools:</Em> none for now.</>,
      ]} />
      <P>
        Notice what we did: gave the agent only one tool (web browsing) and only because we
        actually need it. Every tool you don't turn on is a failure mode you can't have.
      </P>

      <H2>Step 4 — Test in the preview pane</H2>
      <P>
        Paste a real upcoming meeting into the preview chat. (A team meeting, a vendor call, a
        client review — anything where the stakes are non-zero.) Read what comes back. Iterate:
      </P>
      <UL items={[
        <>Too generic? Tighten the prompt — add an example of what good output looks like.</>,
        <>Wrong tone? Add a sentence about tone to the instructions.</>,
        <>Misses something you care about? Add a fourth section, or rewrite section 2.</>,
      ]} />
      <P>
        The whole point of building a custom agent is that the prompt is reusable. You're
        spending 20 minutes now so that the next 50 meeting preps take 30 seconds each.
      </P>

      <H2>Step 5 — Save and use</H2>
      <P>
        Click "Save". You can keep it private (just for you), share via link, or publish to the
        GPT Store. For a personal productivity agent, "Only me" is fine.
      </P>

      <TryIt>
        <P>
          Use your new agent before your next real meeting. Notice what it gets right and what
          you have to add. Edit the instructions accordingly. Within three iterations you'll
          have an agent that's genuinely better at meeting prep than 80% of professionals.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          Once you've done one of these, the same recipe scales to many adjacent problems:
        </P>
        <UL items={[
          <><Em>Email-triage agent.</Em> Paste a thread; it tells you the action, the deadline, and a draft reply.</>,
          <><Em>1:1 coach.</Em> Paste your direct report's recent updates; it suggests three things to discuss in your next 1:1.</>,
          <><Em>Decision logger.</Em> Paste a memo; it extracts the decisions, the owners, and the dates.</>,
          <><Em>Risk reader.</Em> Paste a contract paragraph; it flags the three terms most likely to bite you.</>,
        ]} />
        <P>
          Each of these is the same 20 minutes of prompt-writing. Each pays back hundreds of
          times. The defining characteristic of working professionals who get serious value out
          of AI is that they have a small toolbox of personal agents like these — not that they
          use one mega-agent for everything.
        </P>
      </LevelUp>

      <CostNote>
        Custom GPTs run on your existing ChatGPT Plus subscription — no per-run charge. Copilot
        agents are billed against your tenant's Copilot licences. Claude Skills are included
        in your Pro plan. For personal-scale use, none of these will produce a surprise bill.
      </CostNote>

      <KeyCallout>
        Agents start paying back when you build small, specific ones — not when you build one
        big general one. A toolbox of five 20-minute agents is worth more than a single
        elaborate one.
      </KeyCallout>
    </>
  )
}
