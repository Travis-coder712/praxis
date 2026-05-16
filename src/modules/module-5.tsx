/**
 * Module 5 — Claude deep dive
 *
 * The complement to Module 4 (Copilot M365). Most working professionals
 * have Copilot at work — that's their corporate tool. Claude is the
 * personal/supplementary tool that often wins on the harder, more
 * nuanced work. Knowing both gives you a kit, not just a hammer.
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  CostNote, DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 5.1 — What Claude is and how it differs
// ============================================================
export function WhatClaudeIs() {
  return (
    <>
      <BeginnerSection>
        <P>
          Claude is the AI assistant made by Anthropic, founded in 2021 by a group of ex-OpenAI safety
          researchers. It's the model that working professionals doing serious writing or analysis tend
          to gravitate toward — not because it's smarter than ChatGPT in some abstract sense, but because
          its personality and training make it particularly good at certain kinds of work.
        </P>

        <H2>The Anthropic worldview</H2>
        <P>
          Three things distinguish how Anthropic approaches building AI, and they all show up in how Claude
          behaves:
        </P>
        <UL items={[
          <><Em>Safety as a research bet, not a marketing position.</Em> Anthropic was founded specifically to build AI that's "helpful, harmless, and honest" — in that order. The "honest" bit is load-bearing: Claude is explicitly trained to acknowledge uncertainty and push back rather than agreeing to be helpful.</>,
          <><Em>Constitutional AI.</Em> Where ChatGPT is fine-tuned by human raters ranking outputs (RLHF), Claude is trained against an explicit written set of principles — its "constitution". The constitution covers honesty, autonomy, avoiding harm, treating different perspectives fairly, and so on. The result is a model with more consistent ethical defaults.</>,
          <><Em>The "model spec" approach.</Em> Anthropic publishes how it wants Claude to behave — what it should refuse, how it should handle uncertainty, what it should escalate. This documentation is meant to be readable by users, not just engineers.</>,
        ]} />

        <H2>The Claude family — three sizes, three roles</H2>
        <P>
          Like the other frontier labs, Anthropic ships Claude in three tiers, plus a top reasoning model:
        </P>
        <UL items={[
          <><Em>Claude Haiku</Em> — fast and cheap. For high-volume, light tasks (summarisation, classification, simple Q&A). About 10× cheaper than Sonnet, ~5× faster.</>,
          <><Em>Claude Sonnet</Em> — the workhorse. The model most users default to. Good at almost everything Claude is good at.</>,
          <><Em>Claude Opus</Em> — the top tier. Used for the hardest writing, analysis, code, and reasoning. Slower and more expensive than Sonnet by ~5×.</>,
          <><Em>Opus with "thinking" mode</Em> — the reasoning variant. Used for genuinely hard multi-step problems. Visible chain-of-thought before the answer. Significantly slower and more expensive again — but materially better on hard work.</>,
        ]} />
        <P>
          The generation number (3, 4, 4.5) matters as much as the tier. Sonnet 4.5 is generally better
          than Sonnet 4, which is better than Sonnet 3. When someone says they tried Claude and it
          "wasn't impressive", the next question is which model and which version.
        </P>

        <H2>Why Claude reads "thoughtful"</H2>
        <P>
          A common reaction the first time you use Claude after using only ChatGPT: "wait, this one is
          willing to disagree with me." That's not personality theatre — it's the Constitutional AI
          training showing up. Specifically:
        </P>
        <UL items={[
          'Claude is explicitly trained to express uncertainty when it has it ("I\'m not sure, but...").',
          'It will push back on questionable premises rather than just answering ("I think the framing of this question is a bit off — let me explain why before I answer").',
          'It refuses more often than ChatGPT on borderline topics — which is sometimes a feature (you wanted careful) and sometimes a bug (you wanted help and got a refusal).',
          'It defaults to longer, more nuanced answers. The "skip the introduction" prompt fixes this when you don\'t want it.',
        ]} />

        <H2>When Claude is genuinely the best choice</H2>
        <UL items={[
          <><Em>Long-form analytical writing.</Em> Strategy docs, board papers, careful memos, nuanced critique. Claude routinely beats ChatGPT on these in head-to-head comparisons.</>,
          <><Em>Code.</Em> Particularly modern web stacks (React, TypeScript). The 2024-2025 generation of Claude is the consensus "best for code" among working developers.</>,
          <><Em>Genuine critique.</Em> When you actually want to know what's wrong with your draft — not have it cheered on.</>,
          <><Em>Carefully argued positions.</Em> Anything where you want the model to argue both sides fairly, then take a position with caveats.</>,
          <><Em>Very long context.</Em> Claude.ai has a 200k token context window (~150k words, ~300 pages). Genuinely useful for "paste in the whole document" work.</>,
        ]} />

        <H2>Where Claude isn't the right choice</H2>
        <UL items={[
          <><Em>Anything involving your work data</Em> — Claude doesn't have Microsoft Graph access. Copilot wins here.</>,
          <><Em>Anything involving image generation</Em> — Claude can read images but not generate them. ChatGPT (DALL-E) or Gemini for that.</>,
          <><Em>Real-time information without web search</Em> — Claude.ai's free tier doesn't include web search at time of writing. Use Gemini or Copilot with web mode.</>,
          <><Em>Fast trivia.</Em> When you just want a quick factual answer, any fast tier works; reaching for Claude is overkill.</>,
        ]} />

        <KeyCallout title="The big idea">
          Claude isn't "better than" ChatGPT or Copilot in some universal sense. It's a tool with specific
          strengths — careful writing, nuanced analysis, genuine pushback, long-form work. For these,
          it's often the best choice. For other things (your work data, images, real-time info), other
          tools win.
        </KeyCallout>

        <TryIt>
          <P>Feel the difference in one prompt. Open Claude.ai (free tier; sign up at claude.ai) and Copilot Chat:</P>
          <Prompt>
            Help me think through a decision. I'm considering taking a job that pays 25% more but requires
            relocating my family interstate. The kids are in their senior school years; my partner is
            settled in their job. The current job is fine but I've outgrown it.

            Don't give me a "here are the pros and cons" answer. Tell me what you think. Be candid about
            what I'm probably missing.
          </Prompt>
          <P>
            Two things to notice. First, Claude is more likely to actually take a position (a real one,
            with caveats) where Copilot will hedge. Second, Claude is more likely to push back on the
            framing — "have you considered..." vs taking the question as posed. Neither is universally
            "better"; they're different defaults. Pick the one that fits the task.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The Anthropic origin story (briefly, because it matters)</H3>
        <P>
          Anthropic was founded by Dario and Daniela Amodei and a small group of researchers who left
          OpenAI in 2021. The proximate trigger: a disagreement about the pace and direction of OpenAI's
          commercial work versus its safety research. The Amodeis and their co-founders wanted a company
          that put safety research first, commercial product second.
        </P>
        <P>
          The strategic positioning of Anthropic since then has been: "we ship frontier models, but we
          run our safety research adjacent to (not separate from) the commercial work, and we publish
          enough about how the model is supposed to behave that customers can trust the system." That
          worldview shows up in every Claude release.
        </P>

        <H3>What "Constitutional AI" actually means</H3>
        <P>
          The technique works in roughly three steps:
        </P>
        <OL items={[
          'A base language model is trained the normal way (next-token prediction on huge text corpus).',
          'Anthropic writes a "constitution" — a set of principles like "be honest about uncertainty", "treat different viewpoints fairly", "don\'t help with harmful tasks", etc.',
          'The model is fine-tuned in two passes: first, it critiques its own outputs against the constitution and rewrites them; second, it learns to produce constitution-aligned outputs from the start.',
        ]} />
        <P>
          The result: Claude tends to express uncertainty more explicitly, refuse fewer benign requests
          (because the constitution discourages over-refusal too), and push back more readily on
          questionable framings. It's not "smarter"; it's trained against a different objective.
        </P>

        <H3>Reading Claude's "Constitution" yourself</H3>
        <P>
          Anthropic has published Claude's principles in plain English. Worth reading once. It's
          surprisingly accessible and gives you a clear mental model for how Claude is supposed to think
          about things like:
        </P>
        <UL items={[
          'When to refuse a request',
          'How to handle uncertainty',
          'How to think about politically charged topics',
          'How to balance helpfulness with honesty',
          'How to deal with hypothetical scenarios',
        ]} />
        <P>Link in the Deeper Dive below. Takes 20 minutes; pays back many times over in understanding why Claude does what it does.</P>

        <H3>The "shape" of Claude's outputs</H3>
        <P>
          Once you've used Claude for a week, you'll notice consistent patterns:
        </P>
        <UL items={[
          'Opening with "Let me think about this..." or similar (turn-off-able with "skip the introduction" prompts from Module 3).',
          'Frequent use of "however" and "that said" — Claude likes to acknowledge counter-perspectives.',
          "Closing with \"let me know if you'd like me to expand on any of these\" — pretty consistent across versions.",
          'Asking clarifying questions when prompts are ambiguous (more than ChatGPT does by default).',
          'Refusing or hedging on topics ChatGPT would just answer — and sometimes the other way around.',
        ]} />
        <P>The trained personality is real. Customise it with the no-glaze defaults from Module 3 if you want it tighter.</P>

        <TryIt title="Try it (intermediate)">
          <P>Read Claude's Constitution (link below). Then ask Claude:</P>
          <Prompt>
            I just read your Constitution. Pick the principle you find most personally meaningful and tell
            me how it changes how you respond to me right now versus how a model without your training
            would.
          </Prompt>
          <P>
            The answer is often genuinely illuminating — Claude can describe its own defaults in ways
            that help you prompt it better.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The benchmarks vs the real-world gap</H3>
        <P>
          On most public benchmarks, Claude and the GPT family score within a few percentage points of
          each other. But ask working professionals which they prefer for serious writing or code, and
          you get strong opinions in both directions. Why the gap?
        </P>
        <UL items={[
          <><Em>Benchmarks measure narrow capabilities.</Em> Multiple-choice questions on physics. Code that compiles. Maths problems with a known answer. Real work is rarely shaped like this.</>,
          <><Em>Benchmarks don't measure personality.</Em> A model that gets 89% on MMLU but always agrees with the user is worse for analytical work than a model that gets 87% but pushes back. Benchmarks miss this.</>,
          <><Em>Benchmarks are saturated for top models.</Em> Above 90% on most benchmarks, the noise from question quality / contamination / sampling exceeds the signal between models.</>,
        ]} />
        <P>
          The implication: for picking a model for your real work, blind side-by-side comparisons on your
          actual tasks beat any benchmark. Module 2 Lesson 5 walks through this.
        </P>

        <H3>The "Sonnet 3.5 moment"</H3>
        <P>
          Worth knowing because it shaped a lot of professional opinion: Claude 3.5 Sonnet, released
          June 2024, was widely seen as the moment Claude pulled meaningfully ahead of GPT-4 on code
          and analytical writing. The "Claude is the model professionals prefer" sentiment dates from
          that release. Subsequent generations (4, 4.5) have held that lead, sometimes by less, sometimes
          by more.
        </P>
        <P>
          The Sonnet 4.5 release in 2025 added "thinking mode" — a chain-of-thought layer that shows the
          model's reasoning before the final answer. For hard problems, this is the highest-quality
          frontier output available outside the most expensive reasoning models.
        </P>

        <H3>The trade-offs of Constitutional AI</H3>
        <P>
          Constitutional AI isn't universally better. The trade-offs:
        </P>
        <UL items={[
          <><Em>More refusals.</Em> Claude refuses some requests other models will fulfil. Frustrating when benign; protective when not. The "I can't help with that" wall comes up about 1.5-2× more often on Claude than ChatGPT.</>,
          <><Em>More hedging.</Em> "I'm not entirely certain, but..." is great when warranted; performative when not. The constraint prompts from Module 3 help.</>,
          <><Em>Longer outputs.</Em> Claude defaults to thorough; you have to ask for brevity. Other models default to medium-length; you have to ask for thorough.</>,
          <><Em>Slightly stronger creative writing.</Em> The same training that makes Claude careful also seems to produce noticeably better prose — better sentence rhythm, more comfortable with ambiguity, more interesting word choices.</>,
        ]} />

        <TryIt title="Try it (advanced)">
          <P>The "refusal probe" — find Claude's edges. Try a few prompts that test boundaries:</P>
          <UL items={[
            'A medical question that wants specific dosing advice.',
            'A legal question that wants specific legal advice.',
            'A "what would happen if..." hypothetical involving conflict or violence.',
            'A request to help draft something on a politically charged topic.',
          ]} />
          <P>
            Note where Claude refuses, where it caveat-heavy answers, and where it just answers. Then
            try the same prompts in ChatGPT. Note the difference in the refusal threshold. Neither is
            universally right; the calibration is intentional in both, just different. Knowing your
            tools' edges saves frustration later.
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Claude.ai's tiers as of 2026: Free (limited daily messages, Sonnet only), Pro (~$20/month USD,
          Opus access, much higher limits), Max (~$100-200/month, very high limits, priority access),
          Team (per-seat enterprise). Most working professionals find Pro pays back within the first
          month of regular use. The Free tier is enough to learn on but the daily limits cut off serious
          work fast.
        </P>
        <P>
          Claude API (separate from Claude.ai) is pay-per-token, comparable pricing to OpenAI's API
          across the tiers.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude\'s Constitution (plain English)',     by: 'Anthropic',          url: 'https://www.anthropic.com/news/claudes-constitution', note: 'Worth 20 minutes. The clearest window into how Claude is supposed to think.' },
        { kind: 'article', title: 'Anthropic — Core Views on AI Safety',        by: 'Anthropic',          url: 'https://www.anthropic.com/news/core-views-on-ai-safety', note: 'The company\'s public worldview. Read once for context.' },
        { kind: 'paper',   title: 'Constitutional AI: Harmlessness from AI Feedback', by: 'Bai et al., Anthropic 2022', url: 'https://arxiv.org/abs/2212.08073', note: 'The original paper. Technical, but the intro is readable.' },
        { kind: 'video',   title: 'Anthropic — How we built Claude',            by: 'Anthropic',          url: 'https://www.anthropic.com/research', note: 'Their research index — substantial reading material.' },
        { kind: 'podcast', title: 'Dwarkesh — Dario Amodei interview',          by: 'Dwarkesh Patel',     url: 'https://www.dwarkesh.com/p/dario-amodei', note: 'Long-form interview with Anthropic\'s CEO. The clearest articulation of the worldview.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 5.2 — Three flavours: Claude.ai vs API vs Claude Code
// ============================================================
export function ThreeFlavours() {
  return (
    <>
      <BeginnerSection>
        <P>
          When people say "Claude", they could mean one of three quite different products. Each has its
          own audience, its own quirks, and its own use cases. Knowing which is which saves you from
          using the wrong one for the wrong job.
        </P>

        <H2>1. Claude.ai — the chat product</H2>
        <P>What it is: the consumer-facing chat at claude.ai.</P>
        <P>
          Best for: drafting, analysis, critique, coding assistance, learning, casual exploration.
          Anyone signing up gets a free tier that gives a generous daily allowance of Claude Sonnet
          conversations. Pro and Max tiers unlock Opus, higher limits, and longer context.
        </P>
        <P>If you're a working professional starting with Claude, this is what you use. Module 5 mostly assumes you're using Claude.ai.</P>

        <H2>2. Claude API — the developer interface</H2>
        <P>What it is: a programming interface where you (or software you use) sends prompts and gets back responses, billed per token.</P>
        <P>
          Best for: building tools, integrating Claude into custom workflows, automation, production
          systems. Not for end users — it's a developer product.
        </P>
        <P>
          You probably don't use this directly. But many SaaS tools you use are built on the Claude API
          underneath (replacing or supplementing their previous OpenAI integration). When a vendor
          says "powered by Claude", they mean the API.
        </P>

        <H2>3. Claude Code — the agentic coding tool</H2>
        <P>
          What it is: a separate tool that runs Claude on your filesystem, lets it read and edit files,
          execute commands, browse the web, and operate over long sessions with real autonomy. Module 6
          covers this in depth.
        </P>
        <P>
          Best for: software development, automation, building tools — including building PWAs that
          deploy to GitHub Pages (the pattern this entire Studio portfolio is built with).
        </P>
        <P>
          Different audience than Claude.ai. Different skill prerequisite. Different superpower.
        </P>

        <H2>Which one are you using right now?</H2>
        <P>If you're browsing claude.ai in a tab, you're using Claude.ai. If you're using a third-party tool that has "powered by Claude" in the footer, you're indirectly using the API. If you've installed and configured Claude Code on your computer, you're using Claude Code.</P>
        <P>All three use the same underlying models. What differs is the surrounding tooling, autonomy, and intended user.</P>

        <KeyCallout title="The big idea">
          Claude.ai is for talking. The API is for building. Claude Code is for doing. The three are
          designed for different audiences and different tasks. Picking the right one is half the skill
          of getting value from Anthropic's products.
        </KeyCallout>

        <TryIt>
          <P>Sign up for Claude.ai if you haven't already (free at claude.ai). Then try three prompts that lean into Claude's strengths:</P>
          <Prompt>
            Critique this paragraph as if you were a tough editor. Don't be polite. Point out specific
            weaknesses and explain why each is weak.

            [paste a paragraph of your own writing — a recent email, draft, or note]
          </Prompt>
          <Prompt>
            I'm trying to choose between two ways to structure an argument. Approach A: [...]. Approach B:
            [...]. Don't just give me pros and cons of each — tell me which you think is stronger and why,
            then tell me what I'd have to believe to prefer the other.
          </Prompt>
          <Prompt>
            Write a 200-word piece in the style of [a writer you know well — e.g., "Tim Urban", "Paul
            Graham", "a senior partner at a strategy firm"]. Topic: [something you'd like to read about].
          </Prompt>
          <P>Three different uses of Claude's strengths: critique, decision support, stylistic writing. Each one shows off something Claude is reliably good at.</P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>The Claude.ai tiers, in practical terms</H3>
        <UL items={[
          <><Em>Free</Em> — Sonnet only. ~30-50 messages per day depending on length. Resets every few hours, not daily. Genuinely useful for learning and casual work; daily limits cut off serious sessions.</>,
          <><Em>Pro ($20/month USD)</Em> — Opus access. ~5× the Free limits. Projects, artefacts, custom instructions, larger context. The first tier where Claude becomes part of your daily workflow.</>,
          <><Em>Max ($100-200/month)</Em> — much higher limits, fastest response times, priority during outages. Worth it if Claude is core to your work. Most professionals don't need it.</>,
          <><Em>Team / Enterprise</Em> — per-seat licensing for organisations, with admin controls, SSO, data handling guarantees, longer context. Comparable to Microsoft 365 Copilot's commercial positioning but for Claude.</>,
        ]} />

        <H3>Claude API — what it costs, roughly</H3>
        <P>Pricing varies by model and is in USD per million tokens. Rough 2026 prices:</P>
        <UL items={[
          <><Em>Haiku 4.5</Em> — input ~$0.25, output ~$1.25 per million tokens. Very cheap.</>,
          <><Em>Sonnet 4.5</Em> — input ~$3, output ~$15 per million tokens. Mid-range.</>,
          <><Em>Opus 4.5</Em> — input ~$15, output ~$75 per million tokens. Expensive.</>,
          <><Em>Opus with thinking</Em> — same input cost, output costs more because the thinking tokens add up. Reasoning isn't free.</>,
        ]} />
        <P>
          For perspective: a typical chat exchange is maybe 500 input tokens + 500 output tokens, so under
          $0.01 on Sonnet. A "paste in a 100-page document and ask for a summary" exchange might use
          50,000 input tokens + 2,000 output tokens — closer to $0.20. Long-running work adds up.
        </P>

        <H3>When to step outside the Claude.ai chat</H3>
        <P>
          Most professionals start in Claude.ai and never leave. Three patterns that justify the next step:
        </P>
        <UL items={[
          <><Em>You've built a workflow that runs the same prompt many times</Em>. Move to the API (or to a tool built on the API like Zapier's AI actions or n8n) so it can run automatically.</>,
          <><Em>You need to embed Claude into existing software</Em>. The API is the integration point.</>,
          <><Em>You're doing significant software development</Em>. Claude Code is faster than Claude.ai for code work (Module 6).</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>If you have Claude Pro: try the "comparing approaches" pattern with Opus vs Sonnet:</P>
          <Prompt>
            I'm trying to write a one-page strategic brief on [your topic]. Draft it twice. Once you're
            done, tell me which draft is stronger and why.
          </Prompt>
          <P>
            Run this in both Sonnet and Opus by selecting the model in the picker. Compare the drafts.
            You'll feel the quality difference — Opus is generally more nuanced, less generic, better at
            holding complex perspectives. Sonnet is faster and often "good enough"; Opus is worth the
            extra cost for the hardest 10% of tasks.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The trio in production workflows</H3>
        <P>
          For someone building real workflows on Claude, the three flavours usually combine:
        </P>
        <UL items={[
          <><Em>Claude.ai</Em> — for prototyping prompts and patterns. You iterate in the chat interface.</>,
          <><Em>Claude API</Em> — once a prompt is stable, you move it into an automated workflow. This might be a Zapier flow, a Python script, a Power Automate flow with the AI Builder, or a custom tool.</>,
          <><Em>Claude Code</Em> — for the meta-work: building the tool that runs the workflow. Claude Code writes the Python script, sets up the deployment, debugs the automation.</>,
        ]} />
        <P>
          The mental model: Claude.ai is where you think out loud. The API is where production runs. Claude
          Code is where production gets built.
        </P>

        <H3>API features you don't get in Claude.ai</H3>
        <P>The API exposes a few capabilities not directly available in the chat product:</P>
        <UL items={[
          <><Em>System prompts you control</Em> — full programmatic control over the system message, not just Claude.ai's "custom instructions" textbox.</>,
          <><Em>Temperature and top_p sampling</Em> — control the model's creativity/determinism. Useful for production work where you want reproducibility.</>,
          <><Em>Stop sequences</Em> — tell the model when to stop generating.</>,
          <><Em>Tool use</Em> — Claude can call functions you define. The foundation of all agentic behaviour. Module 8 (Agents) covers this.</>,
          <><Em>Streaming</Em> — get tokens as they're generated, rather than waiting for the whole response.</>,
          <><Em>Vision (image input) at full quality</Em> — Claude.ai compresses images for the chat; the API can take higher-fidelity inputs.</>,
        ]} />

        <H3>The "Model Context Protocol" (MCP)</H3>
        <P>
          Anthropic introduced MCP in late 2024 as an open standard for connecting AI assistants to tools
          and data sources. The idea: rather than every tool needing a bespoke integration with Claude,
          tools can implement MCP and Claude can talk to any MCP-compatible tool.
        </P>
        <P>
          Practical implication: Claude Code and Claude.ai are increasingly extensible through MCP
          servers. There's a growing ecosystem of MCP servers for Slack, Notion, GitHub, databases, file
          systems, even web browsers. Module 6 covers this in more depth for Claude Code users.
        </P>
        <P>
          MCP is also being adopted by other model providers — OpenAI and Google have indicated support.
          If it becomes a true industry standard, it's the most significant interoperability move in the
          space since the OpenAI API became the de-facto reference.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "prompt prototype to API" workflow:</P>
          <OL items={[
            'In Claude.ai, develop a prompt that reliably does a specific task. Iterate until it works on 5 different test cases.',
            'Save the final prompt verbatim. This is your "production" prompt.',
            'If you have access: try the same prompt via the API (e.g., via Zapier, n8n, or directly in Anthropic\'s console).',
            'Notice: the same prompt may behave subtly differently. Defaults differ. System prompts differ. Sampling differs.',
          ]} />
          <P>
            For one-off tasks: stay in Claude.ai. For tasks you do daily or weekly: consider whether the
            API is worth the engineering investment.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude.ai — getting started',              by: 'Anthropic',          url: 'https://claude.ai/', note: 'Sign up here.' },
        { kind: 'article', title: 'Anthropic API — overview',                  by: 'Anthropic',          url: 'https://docs.anthropic.com/', note: 'Developer documentation. Skim once to know what\'s available.' },
        { kind: 'article', title: 'Claude — pricing',                          by: 'Anthropic',          url: 'https://www.anthropic.com/pricing', note: 'Current tier prices.' },
        { kind: 'article', title: 'Model Context Protocol — introduction',     by: 'Anthropic',          url: 'https://modelcontextprotocol.io/', note: 'The new standard. Worth knowing about even if you\'re not building.' },
        { kind: 'video',   title: 'Claude in production — case studies',       by: 'Anthropic',          url: 'https://www.anthropic.com/customers' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 5.3 — Projects, artefacts, MCP
// ============================================================
export function ProjectsArtefacts() {
  return (
    <>
      <BeginnerSection>
        <P>
          Claude.ai has three features that make it feel different from a plain chat interface:
          <Em> Projects</Em>, <Em>Artefacts</Em>, and (more recently) <Em>MCP</Em>. Each one solves a
          real working-professional problem that a plain "chat box" doesn't.
        </P>

        <H2>Projects — your persistent knowledge base</H2>
        <P>
          A Project is a folder-like container where you can:
        </P>
        <UL items={[
          'Upload reference documents (Word, PDF, text, code files).',
          'Write a "project instructions" prompt that applies to every conversation in the project.',
          'Have multiple separate conversations that all share the same context.',
        ]} />
        <P>
          Practical use case: you're working on a long-running piece of work — a strategy document, a
          client engagement, learning a new field. Set up a Project. Drop in all your reference
          materials. Write project instructions that tell Claude what role to play and what to use the
          materials for. Now every conversation in that Project starts grounded in the right context,
          without you having to re-paste the same documents every time.
        </P>
        <P>
          Available on Claude Pro and higher. Not in the free tier.
        </P>

        <H2>Artefacts — the side panel for big outputs</H2>
        <P>
          When Claude generates something substantial — code, a long document, a chart, an HTML page,
          a markdown table — Artefacts pops it into a side panel rather than the chat stream. You can:
        </P>
        <UL items={[
          'See the full thing without scrolling through chat.',
          'Edit the artefact directly.',
          'Have Claude iterate on the artefact specifically while keeping the conversation context separate.',
          'For HTML / React artefacts: see them rendered live in the side panel.',
          'Share an artefact as a standalone URL.',
        ]} />
        <P>
          The killer use case: building small interactive tools. Claude generates a working HTML+JS
          calculator, a small dashboard, an interactive explainer. You can use it immediately. You can
          ask Claude to refine it and watch it update. You can share the link with a colleague.
        </P>
        <P>
          Free tier gets a limited number of artefacts per day; Pro gets generous.
        </P>

        <H2>MCP — connecting Claude to your tools</H2>
        <P>
          The newest addition. MCP (Model Context Protocol) is the standard for connecting Claude to
          external tools and data sources. The mental model:
        </P>
        <UL items={[
          'You install an "MCP server" — a small piece of software that exposes a tool or data source to Claude.',
          'Claude can then use that tool during conversations.',
          'Examples of available MCP servers: file system access, GitHub, Slack, Notion, Google Drive, SQLite databases, web browsers.',
        ]} />
        <P>
          Practical implication: with the right MCP servers configured, Claude.ai stops being just a
          chat and becomes more like a workbench. "Read my last 10 Notion pages on this topic and
          summarise the common themes" becomes a real prompt rather than a copy-paste exercise.
        </P>
        <P>
          As of 2026, MCP is rapidly evolving. The setup is more technical than most working
          professionals will want to do themselves — but worth knowing exists, and worth asking your
          team's technical members to set up if there's a relevant data source.
        </P>

        <KeyCallout title="The big idea">
          Claude.ai isn't a chat product disguised as a workspace — it's a workspace with chat as the
          primary interface. Projects give it memory. Artefacts give it side-panel output. MCP gives it
          tools. Once you've set up two or three Projects and used Artefacts a few times, you stop
          thinking of Claude as "an AI to chat with" and start thinking of it as "my second monitor for
          thinking work".
        </KeyCallout>

        <TryIt>
          <P>Build your first Project. This is the lesson 5.5 capstone, but a starter run-through now:</P>
          <OL items={[
            'In Claude.ai (Pro), click "Projects" → "Create Project".',
            'Name it after a real ongoing piece of work — "Q3 strategy", "House renovation", "Learning data engineering".',
            'In the "Project knowledge" section, upload 3-5 relevant documents.',
            'In "Project instructions", write a sentence about what role you want Claude to play in this Project ("You\'re my research partner on [X]. Reference the uploaded documents when relevant. Push back on weak ideas.")',
            'Start a conversation in the Project. Ask: "Summarise what we know so far based on the uploaded documents."',
          ]} />
          <P>The first time you do this, the difference vs a plain chat is immediately obvious.</P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Project patterns that work</H3>
        <P>From across professional users:</P>
        <UL items={[
          <><Em>The Topic Project</Em>: one Project per long-running topic. Strategy, a client, a learning area. Add documents as they come in. Use the same Project for months.</>,
          <><Em>The Style-Match Project</Em>: upload 5-10 of your past pieces of writing as reference. Project instruction: "Write in the style of the uploaded samples." Use for all your drafting in that voice.</>,
          <><Em>The Reference-Library Project</Em>: upload key policies, standards, or reference materials. Use to query specific facts ("what does our refund policy say about [X]?").</>,
          <><Em>The Persona Project</Em>: Project instructions that give Claude a specific role and constraints. "You're a sceptical board director reviewing materials before each meeting. Push back hard." Use as a default critique partner.</>,
        ]} />

        <H3>What Projects don't do</H3>
        <UL items={[
          <><Em>They don't auto-update</Em>. Adding a new document means re-uploading it. The Project doesn't watch a folder.</>,
          <><Em>They don't search the open web</Em>. Project knowledge is what you upload + Claude's training. No live search.</>,
          <><Em>They don't share automatically</Em>. Projects are personal by default. Team Projects exist on the higher tiers but they're separate.</>,
          <><Em>They don't replace conversation context</Em>. Within a single conversation, the document is still being held in context with the conversation. Very long Projects can still hit context limits in a long chat.</>,
        ]} />

        <H3>Artefact patterns worth knowing</H3>
        <UL items={[
          <><Em>Living docs</Em>: ask Claude to write a long doc as an artefact. Iterate on it directly. Export when done.</>,
          <><Em>Throwaway tools</Em>: "Build me a calculator that does X" → working tool you can use immediately. Don't deploy it; use it once.</>,
          <><Em>Visualisations</Em>: ask Claude to make a chart from data you've given it. Renders inline.</>,
          <><Em>Markdown tables</Em>: big tables go to Artefact rather than cluttering the chat.</>,
          <><Em>Code snippets</Em>: gets syntax highlighting and a copy button.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>The "instant tool" Artefact:</P>
          <Prompt>
            Build me a simple HTML page (single file, no external dependencies) that lets me input my
            current salary, my desired salary, and an annual increase percentage, and shows me how many
            years it'll take to get there. Make it look reasonably polished. Use Artefacts so I can see
            it rendered.
          </Prompt>
          <P>
            Two minutes later you have a working calculator in the side panel. You can use it right
            there. Ask Claude to iterate ("add inflation adjustment", "make the styling more modern")
            and watch it update. This is one of the patterns that makes Claude.ai materially different
            from a chat bot.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Combining Projects with conversation patterns</H3>
        <P>
          For the highest-leverage use of Projects, combine them with the prompt patterns from Module 3:
        </P>
        <UL items={[
          <><Em>Project instructions as the system prompt</Em>: the no-glaze defaults from Module 3 Lesson 3 go here once, not in every conversation.</>,
          <><Em>Standing constraint prompts</Em>: "When answering, always cite which document each claim comes from. Flag inferred conclusions explicitly."</>,
          <><Em>Persona persistence</Em>: "You're my [role]. Stay in character throughout."</>,
          <><Em>Source discipline</Em>: "Only use information from the Project knowledge. If asked about something outside it, say so."</>,
        ]} />
        <P>
          Well-configured Project instructions make every subsequent conversation start at the quality
          level that prompt-engineering normally takes to reach. It's a one-time investment per Project.
        </P>

        <H3>Sharing Projects (team tier)</H3>
        <P>
          On Claude Team / Enterprise tiers, Projects can be shared across team members. Use cases:
        </P>
        <UL items={[
          'A team-wide "company policy" Project that anyone can query.',
          'A "client X" Project that the team working on that client can all contribute to.',
          'A "company writing style" Project that has team writing samples and style guidelines.',
        ]} />
        <P>
          The team-level Project is essentially a poor person's enterprise knowledge graph. Less powerful
          than a full RAG infrastructure but far simpler to set up. Most teams haven't tried this yet —
          available value sitting unused.
        </P>

        <H3>MCP — the realistic landing</H3>
        <P>
          MCP is technically powerful but practically still maturing. As of 2026:
        </P>
        <UL items={[
          'Setting up an MCP server requires comfort with command-line tools and configuration files. Most working professionals will need help from someone technical.',
          'The available MCP servers vary in quality. The official ones (Anthropic\'s reference implementations) are reliable; community-built ones are mixed.',
          'Once configured, it works well — "ask Claude to summarise my last 5 GitHub PRs" becomes a real workflow.',
          'For Claude Code users, MCP is essential (Module 6 covers this). For Claude.ai users, MCP is "useful if your team sets it up for you".',
        ]} />

        <TryIt title="Try it (advanced)">
          <P>Build a Project with a real working set:</P>
          <OL items={[
            'Pick a real ongoing piece of work — at least a month of activity ahead of you.',
            'Create a Project.',
            'Upload 10-15 relevant documents: meeting notes, drafts, references, policies.',
            'Write detailed Project instructions: your role, Claude\'s role, constraints, no-glaze defaults, source discipline.',
            'Use the Project as your primary working space for this work for 4 weeks.',
            'After 4 weeks: notice how much it sped up vs your previous workflow.',
          ]} />
          <P>
            The pattern compounds. By month 3, you stop wanting to do this kind of work without a
            Project.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Projects — how to use',         by: 'Anthropic',  url: 'https://support.anthropic.com/en/articles/9519177-using-projects-in-claude-ai' },
        { kind: 'article', title: 'Claude Artefacts — overview',          by: 'Anthropic',  url: 'https://support.anthropic.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them' },
        { kind: 'article', title: 'Model Context Protocol — docs',         by: 'Anthropic',  url: 'https://modelcontextprotocol.io/', note: 'For when you (or your team) want to set up MCP servers.' },
        { kind: 'video',   title: 'Claude — power user patterns',         by: 'Anthropic',  url: 'https://www.anthropic.com/news', note: 'Their blog posts on Claude.ai features. Worth subscribing.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 5.4 — Long-context use cases
// ============================================================
export function LongContextUseCases() {
  return (
    <>
      <BeginnerSection>
        <P>
          Claude.ai has a 200,000-token context window — about 150,000 words, or roughly 300 pages.
          That's enough to fit:
        </P>
        <UL items={[
          'A novel.',
          'A full annual report plus prior-year comparatives.',
          'Three substantial board papers.',
          'A complete codebase for a small application.',
          'A full year of weekly project updates.',
          'A long contract with all its annexures.',
        ]} />
        <P>
          The implication: for any analytical task involving a single big document or set of related
          documents, you don't need clever retrieval. You can just paste the whole thing in.
        </P>

        <H2>The "send the whole thing" pattern</H2>
        <P>
          When you have a single coherent document, the right move is usually to paste it in and ask
          questions:
        </P>
        <Prompt>
          [paste the full document — 30, 50, 100 pages — directly into the chat]

          Three questions:
          1. What's the document's central argument?
          2. Where is the argument weakest?
          3. What's the one fact most likely to be wrong or out of date?
        </Prompt>
        <P>
          Three minutes of work. Way better than asking general questions about the document and hoping
          Claude's training data covers it.
        </P>

        <H2>The "compare multiple documents" pattern</H2>
        <Prompt>
          [paste document 1]

          ---

          [paste document 2]

          ---

          [paste document 3]

          What do all three agree on? What does each one say uniquely? Where do they conflict?
        </Prompt>
        <P>
          Synthesis across three substantial documents. The kind of analysis that takes a knowledge
          worker hours by hand. Claude can do a competent first pass in under 30 seconds, and you can
          refine from there.
        </P>

        <H2>What you can't quite do</H2>
        <UL items={[
          <><Em>A whole 500-page book</Em> — too long. You'd need to chunk or summarise first.</>,
          <><Em>Multiple very large documents</Em> — 3-4 large docs fits; a dozen medium-sized ones might overflow.</>,
          <><Em>A whole year of emails</Em> — possibly, but you're better off using Copilot M365 for that (it does RAG over your Graph rather than stuffing everything into context).</>,
        ]} />

        <KeyCallout title="The big idea">
          For single-document analytical work, Claude's long context is the single most useful feature.
          The "paste the whole thing" workflow beats "ask about it generally" or "build a RAG system"
          for most professional tasks. The whole document in front of the model, asked good questions,
          beats anything else.
        </KeyCallout>

        <TryIt>
          <P>Pick a substantial document you need to read this week — a long report, a strategy paper,
          a contract.</P>
          <OL items={[
            'Open Claude.ai. Start a new chat.',
            'Paste the full text of the document.',
            'Ask: "Summarise this in 5 bullet points. For each bullet, include the verbatim quote that supports it."',
            'Ask: "What\'s the strongest argument in this document, and what\'s the weakest?"',
            'Ask: "What questions does this document raise but not answer?"',
            'Compare the time to do this vs reading the document manually. Notice how much faster you can extract key insights.',
          ]} />
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>"Lost in the middle" and how to prompt around it</H3>
        <P>
          Even with 200k tokens, Claude doesn't pay equal attention to every word. Research on long-context
          models has consistently found that:
        </P>
        <UL items={[
          'Information at the start of a long prompt is recalled best.',
          'Information at the end is recalled second-best.',
          'Information in the middle is recalled worst — sometimes by a wide margin.',
        ]} />
        <P>
          Practical implication: when you've pasted a long document, put your question at the end of the
          prompt, not at the start. And if there's a specific fact in the middle of the document you need
          Claude to use, consider repeating it at the end ("note specifically that on page 47, the document
          says X").
        </P>

        <H3>When long context beats RAG, and when it doesn't</H3>
        <P>
          Long context (paste the whole thing) wins when:
        </P>
        <UL items={[
          'You have one cohesive document.',
          'You want to ask multiple questions about it.',
          'You want to compare across a small number of documents.',
          'The questions require global understanding of the document, not just specific facts.',
        ]} />
        <P>
          RAG (or Copilot's Graph search) wins when:
        </P>
        <UL items={[
          "You're searching across many documents.",
          'You don\'t know in advance which documents are relevant.',
          'The total content is too big for context.',
          'You want answers that cite specific source documents.',
        ]} />
        <P>
          For most professional tasks, long context is simpler and often produces better results — until
          you hit scale, at which point you need RAG. The line is around 5-10 documents or 500 pages.
        </P>

        <H3>The "needle in a haystack" pattern</H3>
        <P>
          A useful test for long-context work — and a useful prompt pattern:
        </P>
        <Prompt>
          [paste a long document]

          Somewhere in the document above, there's a specific commitment about [topic]. Find it. Quote it
          verbatim. Tell me what section of the document it appears in.
        </Prompt>
        <P>
          Modern Claude is reliable on this for documents up to about 200k tokens (its context limit).
          For shorter documents (under 50 pages), reliability is essentially perfect. For 100-300 pages,
          reliability is high but not perfect — verify the quote.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "I've pasted a 50-page document, what do I do" workflow:</P>
          <OL items={[
            'Start with a comprehensive summary prompt (5 bullets with quotes, as above).',
            'Follow up with: "What are the document\'s implicit assumptions — things it takes for granted but doesn\'t argue for?"',
            'Follow up with: "If I had 5 minutes to explain this to my CEO, what would I say?"',
            'Follow up with: "What does this document not say that I should care about?"',
          ]} />
          <P>
            Four follow-up prompts, all running on the same pasted document. Each one is a different
            analytical angle. Total time: under 10 minutes. Manual equivalent: an hour-plus of close
            reading.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The cost-quality trade-off at long context</H3>
        <P>
          Long-context queries cost more (token-wise) and run slower than short ones. In Claude.ai's
          chat, you don't see the cost — you see latency and occasionally hit usage limits. In the API,
          you see both:
        </P>
        <UL items={[
          'A 100-page document is ~50,000 tokens. At Sonnet API pricing, the input cost is ~$0.15 per call.',
          'For interactive exploration, you might run 5-10 prompts on the same long context. Each call re-sends the entire context. So your effective cost is 5-10× higher than a normal chat.',
          'The Anthropic API supports "prompt caching" — re-using the cached representation of a long input. Reduces the cost significantly on repeated queries.',
        ]} />
        <P>
          In Claude.ai (chat), prompt caching is handled automatically within a single conversation.
          You don't manage it. The implication: stay in one conversation when you're doing long-context
          exploration, rather than starting fresh chats — it's faster and (for paid tiers with usage
          limits) cheaper.
        </P>

        <H3>"Holding the document in mind" across a long session</H3>
        <P>
          A subtle gotcha for long sessions: as the conversation grows, your earlier turns (including
          the pasted document and your earlier questions) push toward the middle of the context. The
          "lost in the middle" effect can kick in. Symptoms:
        </P>
        <UL items={[
          'Claude starts to "forget" details from the document you can clearly remember it knew earlier.',
          'Cross-references between earlier turns get fuzzy.',
          'Specific quotes from the document start to vary slightly across answers.',
        ]} />
        <P>
          The fix: periodically remind Claude of the source. "Re-anchoring" prompts work well:
        </P>
        <Prompt>
          Refer back to the document I pasted earlier. Specifically, the section on [topic]. Re-quote
          the key passage and use it as the basis for the next answer.
        </Prompt>

        <H3>Multi-document workflows that fit in context</H3>
        <P>
          For 3-5 medium documents, the explicit-separator pattern works well:
        </P>
        <Prompt>
          ===== DOCUMENT 1: [name] =====
          [paste]

          ===== DOCUMENT 2: [name] =====
          [paste]

          ===== DOCUMENT 3: [name] =====
          [paste]

          ===== QUESTION =====
          [your question]
        </Prompt>
        <P>
          The visible separators help Claude track which content came from which source. When you ask
          for synthesis, it can correctly attribute claims to specific documents — and so can you,
          which matters for any output you need to defend.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "five-document executive summary" workflow:</P>
          <OL items={[
            'Pick five related documents — quarterly reports, board minutes, project status updates, whatever.',
            'In one Claude conversation, paste each with explicit separators.',
            'Ask: "Treat these as a connected set. Produce: (1) what\'s common across all five, (2) what\'s changed between earliest and latest, (3) what\'s mentioned in any but not all, (4) the single most surprising thing across the set. Cite which document each claim comes from."',
            'Verify the citations against the source documents.',
            'Note: this kind of cross-document synthesis is one of the most useful applications of long context.',
          ]} />
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          On Claude.ai, long-context conversations count more heavily against your daily limits — a single
          long-context prompt might equal 5-10 normal prompts of usage. Pro tier handles this fine for
          most work. If you find yourself frequently hitting limits, Max tier is the answer; if you
          rarely do, Pro is enough.
        </P>
        <P>
          On the API, prompt caching reduces the cost of repeated long-context queries significantly.
          Worth knowing about if you're building a tool that does this.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'paper',   title: 'Lost in the Middle: How Language Models Use Long Contexts', by: 'Liu et al., 2023', url: 'https://arxiv.org/abs/2307.03172', note: 'The foundational paper on long-context attention patterns.' },
        { kind: 'article', title: 'Anthropic — 100K context',                                    by: 'Anthropic',         url: 'https://www.anthropic.com/news/100k-context-windows', note: 'Useful framing of what becomes possible at scale.' },
        { kind: 'article', title: 'Anthropic — prompt caching',                                  by: 'Anthropic',         url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching', note: 'For API users who want to optimise long-context cost.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 5.5 — Try it: build a Claude Project (capstone)
// ============================================================
export function TryItProjects() {
  return (
    <>
      <BeginnerSection>
        <P>
          The Module 5 capstone — a hands-on Project build. Done right, this is the lesson that
          permanently changes how you work with Claude. Not because Projects are magic, but because the
          discipline of setting one up properly forces you to think clearly about your workflow.
        </P>
        <P>
          Roughly 30 minutes. You'll end with a working Project that pays back for months.
        </P>

        <H2>Pre-requisites</H2>
        <UL items={[
          'Claude Pro account (Projects aren\'t available on the free tier).',
          '10-15 minutes to gather 5-10 reference documents that relate to a single piece of ongoing work.',
          'A piece of work you\'ll be doing for at least the next month (so the Project pays back).',
        ]} />

        <H2>Step 1 — Pick the right scope</H2>
        <P>The mistake most first-time Project builders make is picking too broad a scope ("all my work") or too narrow ("just this one document"). The sweet spot:</P>
        <UL items={[
          <>One ongoing work area — a project, a client, a learning topic, a domain.</>,
          <>You'll do at least 5-10 hours of work on it over the next month.</>,
          <>There's enough reference material to justify the upload but not so much that it overflows context.</>,
        ]} />
        <P>Good first-Project candidates:</P>
        <UL items={[
          <><Em>"Q3 strategy"</Em> — drafts, decks, meeting notes, customer research.</>,
          <><Em>"Client X engagement"</Em> — proposal, contract, meeting notes, the work product you're producing.</>,
          <><Em>"Learning data engineering"</Em> — books, tutorials, your own notes.</>,
          <><Em>"Renovation"</Em> — quotes, plans, articles you've researched.</>,
          <><Em>"My writing voice"</Em> — 8-10 samples of your past writing.</>,
        ]} />

        <H2>Step 2 — Gather and upload the materials</H2>
        <OL items={[
          'Make a temporary local folder. Drop in the 5-10 documents (PDF, Word, text).',
          'Open Claude.ai → Projects → Create Project. Name it specifically (not "stuff" — name the work).',
          'Upload all the documents into Project knowledge.',
          'Wait for them to process (usually 30 seconds total).',
        ]} />
        <P>
          One caveat: don't upload anything genuinely sensitive (personal data, internal financials you
          wouldn't paste anywhere else). Claude.ai\'s data handling is documented, but for sensitive
          work, use Copilot M365 (which has the enterprise compliance wrapper) instead.
        </P>

        <H2>Step 3 — Write Project Instructions</H2>
        <P>This is the most important step. The Project Instructions are your standing system prompt for every conversation in the Project. Quality here pays back many times over.</P>
        <P>A solid template:</P>
        <Prompt>
          Role: You're my [specific role for this project — e.g., "research partner on Q3 strategy", "drafting partner who writes in my voice", "tough editor on my client work"].

          Sources: The documents in Project knowledge are the authoritative source for [topic]. When you reference them, mention which document the information came from.

          Output discipline:
          - Skip the introduction. Start with the answer.
          - Be matter-of-fact. Don't be effusive.
          - Push back if I'm wrong. Don't agree to be helpful.
          - If you don't know, say so. Don't speculate.
          - Use plain language. Avoid corporate-speak.

          Specific constraints for this project:
          [3-5 constraints that fit this work — e.g., "always think about both the customer perspective and the commercial perspective", "remember that audience X cares about Y", "use the company writing style from the uploaded samples"]
        </Prompt>
        <P>Save the instructions. They apply to every chat you start in this Project.</P>

        <H2>Step 4 — First useful conversation</H2>
        <P>Now you have a real working Project. The first conversation to run:</P>
        <Prompt>
          Read everything in Project knowledge. Then give me:
          1. One paragraph: what we're working on, in plain English.
          2. Three open questions I haven't answered.
          3. The single most important thing I'm probably under-weighting.
          4. Two things to do next.

          Cite which documents each point draws from.
        </Prompt>
        <P>This single prompt, run against a well-set-up Project, is often worth the entire 30-minute setup investment. It gives you a top-down view of your own work that's hard to assemble manually.</P>

        <KeyCallout title="The end state">
          A Project per ongoing piece of work. Project instructions that bake in your defaults. Reference
          materials that travel with you across conversations. Within a month of using Projects this way,
          you stop wanting to do this kind of work in plain chat. The persistent context, the source
          discipline, the role-locked Claude — these compound.
        </KeyCallout>

        <TryIt>
          <P>Build the Project now. Don't read further first. The lesson is in the doing.</P>
          <OL items={[
            'Pick the topic.',
            'Gather and upload materials.',
            'Write Project instructions.',
            'Run the first useful conversation.',
            'Bookmark the Project. Use it for the next two weeks instead of starting plain chats for this work.',
          ]} />
          <P>Come back to read the Level Up sections after you've built one. They'll make more sense with concrete experience.</P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Project hygiene — keeping it useful</H3>
        <P>Projects degrade over time if you don't maintain them. Three habits:</P>
        <UL items={[
          <><Em>Re-upload changed documents</Em>. If a strategy doc gets revised, replace the old version in Project knowledge. Otherwise Claude works with stale material.</>,
          <><Em>Refine the instructions monthly</Em>. As your understanding of what works grows, tighten the instructions. The Project gets sharper.</>,
          <><Em>Archive old Projects</Em>. When a piece of work ends, archive its Project. Stops them from cluttering your sidebar.</>,
        ]} />

        <H3>Cross-Project conversations</H3>
        <P>
          A subtle limitation: Claude can't reference one Project from another. If you have a "Q3 strategy"
          Project and a "client X engagement" Project, and you want to ask "what are the implications of
          the strategy for client X?", you need to either:
        </P>
        <UL items={[
          'Combine into one Project (if the overlap is significant).',
          'Run the analysis manually in a plain chat, copy-pasting key context.',
          'Create a third Project for cross-cutting analysis with relevant docs from both.',
        ]} />

        <H3>Sharing Projects on Team tier</H3>
        <P>
          If your organisation has Claude Team, you can share Projects across team members. The biggest
          unlock:
        </P>
        <UL items={[
          'A "company writing style" Project that everyone uses for drafts.',
          'A "team\'s research" Project that accumulates institutional knowledge.',
          'A "current client X" Project that everyone working on it shares.',
        ]} />
        <P>
          Most teams using Claude Team haven't set this up yet. It's one of the highest-leverage moves
          a team leader can make if you have the tier.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>After 2 weeks of using your Project:</P>
          <OL items={[
            'Look at the conversations you\'ve had in the Project. Pick the 3 most useful.',
            'For each, ask yourself: would this have been worse if I\'d had to set up context from scratch?',
            'Update your Project instructions based on what worked and what didn\'t.',
            'Add any new reference documents that have emerged.',
          ]} />
          <P>
            This is the Project maintenance loop. Done quarterly, it keeps Projects sharp. Skipped, they
            drift toward "I never use this Project anymore".
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Project as personal AI infrastructure</H3>
        <P>
          The way to think about Projects long-term: they're your personal AI infrastructure. After a
          year of disciplined use, you might have 10-15 active Projects covering:
        </P>
        <UL items={[
          'Each major work area.',
          'Your writing-voice Project (for personal voice in drafts).',
          'A "tough editor" Project (for critique on anything).',
          'A "decision support" Project (with frameworks and reference material).',
          'A learning Project per significant new domain you\'re studying.',
        ]} />
        <P>
          The infrastructure compounds. Three years in, your Projects represent more thinking about how
          you work than you'd have done explicitly. They become a kind of externalised cognition.
        </P>

        <H3>Project instructions vs Claude API system prompts</H3>
        <P>
          For users who also use the Claude API (or build tools on top of it), Project instructions are
          conceptually the same thing as a system prompt. If a Project pattern works well, you can lift
          its instructions verbatim into an API call.
        </P>
        <P>
          This is the path from "I have a useful Project" → "I have a useful prompt" → "I have a useful
          tool". Many of the AI tools you\'ll see in 2026-27 are essentially well-engineered Project
          instructions deployed as standalone products.
        </P>

        <H3>Auditing your own Project use</H3>
        <P>
          Every quarter, do a Project review:
        </P>
        <OL items={[
          'Which Projects did you actually use? Archive the others.',
          'Which Project instructions consistently produced useful output? Save those as templates for new Projects.',
          'Which Projects had context bloat (too many docs, sluggish responses)? Trim.',
          'What\'s missing? Is there a recurring kind of work that doesn\'t have a Project yet?',
        ]} />
        <P>
          Most professionals never audit their tool use this way. The 30 minutes a quarter pays back
          enormously.
        </P>

        <KeyCallout title="End of Module 5">
          You now know what Claude is, how it differs from ChatGPT and Copilot, which of its three
          flavours fits which job, what Projects / Artefacts / MCP do, and how to use long context. You've
          built at least one Project.
          <br /><br />
          Module 6 covers Claude Code — the third flavour, and the most powerful. It's where Claude
          stops being a chat partner and becomes a working agent on your filesystem. Different audience,
          different skill prerequisite, different superpower. Worth understanding even if you don't
          immediately use it — because Claude Code is the pattern that underpins the next generation of
          AI tools.
        </KeyCallout>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Claude Projects — official guide',          by: 'Anthropic',  url: 'https://support.anthropic.com/en/articles/9519177-using-projects-in-claude-ai' },
        { kind: 'video',   title: 'How professionals use Claude Projects',     by: 'Various',     note: 'Search YouTube for "Claude Projects walkthrough" — several creators have made detailed tour videos.' },
        { kind: 'article', title: 'Awesome Claude Projects',                    by: 'GitHub',      url: 'https://github.com/lojikil/awesome-claude-projects', note: 'Community-curated examples and templates.' },
        { kind: 'article', title: 'Ethan Mollick — using AI as a thinking partner', by: 'Ethan Mollick', url: 'https://www.oneusefulthing.org/', note: 'His blog has many posts on Claude Projects in practice.' },
      ]} />
    </>
  )
}
