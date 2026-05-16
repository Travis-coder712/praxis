/**
 * Module 2 — The frontier models today
 *
 * Practical orientation to the AI model landscape in 2026. Who makes
 * them, what each is best at, how to read version numbers, how to
 * pick a model for a task, and a hands-on side-by-side experiment.
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  CostNote, DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 2.1 — The six major model families
// ============================================================
export function TheSixFamilies() {
  return (
    <>
      <BeginnerSection>
        <P>
          When you hear someone say "AI", they almost always mean one of about six families of large language
          models. Knowing which family is behind the tool you're using helps you understand why it behaves
          the way it does — and which other tools might do the same job differently.
        </P>

        <H2>The six families that matter in 2026</H2>
        <UL items={[
          <><Em>OpenAI</Em> — the GPT family (GPT-4o, GPT-5, o3, o3-mini). Founded 2015, San Francisco. Backed by Microsoft. The company that turned ChatGPT into a household name in late 2022. Most generally available; widest ecosystem of plug-ins and integrations.</>,
          <><Em>Anthropic</Em> — the Claude family (Claude Sonnet, Opus, Haiku). Founded 2021 by ex-OpenAI safety researchers. The "safety-focused" lab. Generally considered the best long-form writer and most cautious about getting things wrong.</>,
          <><Em>Google DeepMind</Em> — the Gemini family (Gemini Pro, Flash, Ultra, Thinking). The internet-search-and-images-and-everything-Google player. Tightly integrated with Google Workspace.</>,
          <><Em>Meta</Em> — the Llama family. Open weights — you can literally download the model. Powers a lot of the AI you see in WhatsApp, Instagram, and Messenger.</>,
          <><Em>xAI</Em> — the Grok family. Musk's company. Integrated with X (formerly Twitter). Less corporate-aligned in tone; more recent in real-time-information.</>,
          <><Em>DeepSeek</Em> — the R1 family. Chinese, founded 2023, surprised the world in late 2024–early 2025 by releasing frontier-class models at a fraction of the cost. Open weights.</>,
        ]} />

        <H2>Where Microsoft Copilot sits</H2>
        <P>
          Copilot M365 doesn't have its own foundation model. It's a Microsoft product that wraps OpenAI's
          models (currently GPT-4o and o3-class) and surrounds them with access to your Microsoft Graph
          (emails, files, Teams chats, etc.) and a layer of enterprise controls. So when you "ask Copilot",
          you're asking GPT — but with your work data plugged in.
        </P>
        <P>
          This matters because if you understand how OpenAI's models behave, you understand how Copilot
          behaves at the language-model level. What's different is the surrounding plumbing — and that's
          what Module 4 is about.
        </P>

        <H2>What about Australian / energy / industry-specific AI?</H2>
        <P>
          The short answer: not really. There's no Australian-built frontier LLM, and no widely-used
          energy-specific or trading-specific foundation model that you'd compare against the six above.
          What you do see in industry is:
        </P>
        <UL items={[
          <><Em>Domain-tuned wrappers</Em> — vendors take a frontier model (usually GPT or Claude) and wrap it with industry-specific prompts, RAG over industry documents, and a polished UI. Examples: Bloomberg's BloombergGPT for finance, Harvey for law, Glean for enterprise search. Useful, but not foundation models.</>,
          <><Em>Specialist tools embedded into existing software</Em> — Excel's Copilot, GitHub Copilot for code, AutoCAD's AI features. All powered by one of the six families underneath.</>,
        ]} />
        <P>
          For your day-to-day work, the practical universe is: Copilot M365 (which is GPT), and whichever
          consumer products you have personal access to (Claude.ai, ChatGPT.com, Gemini, Grok). That's it.
        </P>

        <KeyCallout title="The big idea">
          There are six foundation-model makers globally. Microsoft, Apple, Salesforce, SAP and every other
          enterprise software vendor either wraps one of these six or partners with one. When you see
          "AI by [vendor X]" inside a product, ask: which foundation model is under the hood?
        </KeyCallout>

        <TryIt>
          <P>Run the same question through three different products in three browser tabs:</P>
          <Prompt>Who made you, and what model version am I talking to right now?</Prompt>
          <P>
            Try it in Copilot Chat, Claude.ai, and Gemini. You'll see three different self-descriptions —
            and you'll learn which version number to look for. (Claude tends to be the most precise; ChatGPT
            sometimes hedges; Gemini is in the middle.)
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Open weights vs closed weights</H3>
        <P>
          A critical distinction professionals new to AI often miss:
        </P>
        <UL items={[
          <><Em>Closed-weight models</Em> (GPT, Claude, Gemini) — you can only use them via the vendor's API or product. You don't get to see how they were built, you can't run them locally, and the vendor can change or deprecate them at any time. This is the dominant commercial mode.</>,
          <><Em>Open-weight models</Em> (Llama, DeepSeek, Mistral, Qwen) — you can download the model weights and run them on your own hardware (assuming you have enough GPU). You can fine-tune them. You can audit them. You can run them air-gapped if you have sensitive data.</>,
        ]} />
        <P>
          For most professionals: closed-weight via API or product is the default and the right choice.
          Open-weight matters if you have sovereign-data requirements (intelligence agencies, some
          regulated industries) or if you're an AI engineer building infrastructure.
        </P>

        <H3>The funding landscape</H3>
        <P>
          As of 2026, the rough order of magnitude on cumulative funding:
        </P>
        <UL items={[
          <><Em>OpenAI</Em> — ~$60B+ raised; primary backer Microsoft.</>,
          <><Em>Anthropic</Em> — ~$30B+ raised; primary backers Amazon, Google.</>,
          <><Em>Google DeepMind</Em> — funded internally by Alphabet; not separately raised.</>,
          <><Em>xAI</Em> — ~$25B raised; primary backer Musk + private equity.</>,
          <><Em>Meta AI</Em> — funded internally by Meta; not separately raised, but multi-billion training budgets.</>,
          <><Em>DeepSeek</Em> — undisclosed, much smaller — claimed to have trained competitive models for tens of millions, not billions.</>,
        ]} />
        <P>
          The DeepSeek number, if real, is the most important fact in this list. It implies that training
          frontier-class models doesn't necessarily require billions of dollars — which has wide-ranging
          implications for the competitive landscape and for who can credibly build their own model.
        </P>

        <H3>Geographical and political angles</H3>
        <P>
          Five of the six families are American. DeepSeek (Chinese) is the only major non-American frontier
          maker. Mistral (French) is the leading European option but operates a tier below the frontier.
          For a working professional in Australia this is mostly background — but it matters for:
        </P>
        <UL items={[
          'Data residency. Where does the API actually run? Important for some regulated data.',
          'Vendor risk. Concentration of strategic capability in a small number of foreign companies.',
          'Capability gap timing. The Chinese models tend to follow Western frontier by 6–12 months. Open-weight makes that gap easier to close.',
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>
            Pick a topic the model might have political-sounding takes on (climate policy, monetary policy,
            sovereignty issues). Ask the same question in:
          </P>
          <Prompt>What do you think about [topic]? Give me your actual view, not a list of perspectives.</Prompt>
          <P>
            Try it in Claude, ChatGPT, Gemini, and Grok. Notice the very different defaults — Claude will
            mostly refuse to take a position; ChatGPT will give measured pros-and-cons; Gemini varies; Grok
            is far more willing to take a side. That difference is fine-tuning policy, not a "smarter or
            dumber" axis.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>What's actually behind the "moat"</H3>
        <P>
          There are three things that distinguish frontier AI labs from everyone else:
        </P>
        <UL items={[
          <><Em>Compute</Em> — physical GPU clusters. Frontier-class training requires tens of thousands of H100/H200 GPUs running for weeks. Building or renting that takes billions.</>,
          <><Em>Training data</Em> — vast curated corpora of text, code, images. Sourcing, cleaning, and licensing this is enormous work. The labs have invested years in their data pipelines.</>,
          <><Em>Talent</Em> — a few thousand people globally know how to actually train these models well. Most are now at one of the six labs, and they get paid like sports stars.</>,
        ]} />
        <P>
          The DeepSeek result challenges the first one — they got near-frontier capability with
          dramatically less compute. The bet that "scaling alone wins" is no longer obviously correct.
        </P>

        <H3>The "synthetic data" turn</H3>
        <P>
          Around 2023, frontier labs started running out of high-quality real-world training data. The
          public internet is a finite resource. The response: synthetic data — get the existing model to
          generate training examples for the next model, with humans (or other models) filtering for
          quality. This is now the dominant training paradigm for the most advanced models. Whether it has
          a long-term ceiling is one of the open research questions.
        </P>

        <H3>The reasoning-model bifurcation</H3>
        <P>
          Since late 2024, the major labs have split their offerings into two tiers:
        </P>
        <UL items={[
          <><Em>Fast / cheap models</Em> — for general use. Claude Haiku, GPT-4o mini, Gemini Flash.</>,
          <><Em>Reasoning models</Em> — designed to "think" for longer before answering. Claude Opus with thinking mode, OpenAI o3, Gemini 2.5 Pro Thinking, DeepSeek R1. These use much more compute per query but solve harder problems.</>,
        ]} />
        <P>
          This bifurcation is the most important architectural shift in the field since transformers. It
          changes the cost / capability trade-off significantly. Picking the right tier for your task is
          now half the skill of using AI well — which is what Lesson 2.4 (Decision matrix) is about.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Pick a hard analytical question you genuinely care about — multi-step, no single right answer. Run it:</P>
          <OL items={[
            'On a fast model (Claude Sonnet or GPT-4o)',
            'On a reasoning model (Claude Opus with thinking, or ChatGPT o3, or Gemini 2.5 Pro Thinking)',
            'Then ask a third model (different family) to critique both answers',
          ]} />
          <P>Time each. Note the depth. The cost / quality / latency trade-offs become viscerally clear after one round of this.</P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'A non-engineer\'s guide to LLMs',     by: 'Simon Willison',    url: 'https://simonwillison.net/2024/Sep/10/llms-overview/', note: 'The clearest non-engineer overview of the landscape. Refreshed regularly.' },
        { kind: 'article', title: 'State of AI Report',                  by: 'Nathan Benaich',    url: 'https://www.stateof.ai/', note: 'Annual report card on the AI industry. Slides are skimmable in 30 min.' },
        { kind: 'podcast', title: 'Hard Fork (NYT)',                     by: 'Kevin Roose & Casey Newton', url: 'https://www.nytimes.com/column/hard-fork', note: 'Best mainstream context for what each frontier lab is doing this week.' },
        { kind: 'article', title: 'Anthropic\'s Core Views',             by: 'Anthropic',         url: 'https://www.anthropic.com/news/core-views-on-ai-safety', note: 'Understand the company behind Claude.' },
        { kind: 'article', title: 'OpenAI Model Index',                  by: 'OpenAI',            url: 'https://platform.openai.com/docs/models', note: 'Current list of OpenAI models. Useful reference.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 2.2 — Comparative strengths and weaknesses
// ============================================================
export function StrengthsWeaknesses() {
  return (
    <>
      <BeginnerSection>
        <P>
          You have access to Copilot at work. You can sign up for free tiers of Claude, ChatGPT, and Gemini
          personally. Knowing roughly what each is best at saves you a lot of trial-and-error.
        </P>

        <H2>A practical comparison</H2>
        <P>
          Below is a working person's view, distilled from millions of side-by-side comparisons across the
          industry and refreshed for 2026. Caveats: rankings shift with each major release, and "best" is
          task-dependent — but the broad strokes hold.
        </P>

        <H3>Claude (Anthropic)</H3>
        <UL items={[
          <><Em>Best at:</Em> long-form writing, careful analysis, nuanced critique, code, anything where you want the model to push back on you rather than agree.</>,
          <><Em>Personality:</Em> measured, willing to say "I'm not sure". Often the model people prefer for serious work.</>,
          <><Em>Weak at:</Em> real-time web information (no native web search in the free product); image generation (none); fast trivia.</>,
        ]} />

        <H3>ChatGPT (OpenAI)</H3>
        <UL items={[
          <><Em>Best at:</Em> general-purpose tasks, structured output, code, image generation (DALL-E), and the broadest tool ecosystem (custom GPTs, plug-ins).</>,
          <><Em>Personality:</Em> confident, polished, helpful. The "energetic generalist".</>,
          <><Em>Weak at:</Em> can over-agree (sycophancy); sometimes too eager to give an answer it shouldn't be confident about.</>,
        ]} />

        <H3>Gemini (Google)</H3>
        <UL items={[
          <><Em>Best at:</Em> anything involving web search or current events; image understanding and generation; structured data; massive context windows (1M tokens).</>,
          <><Em>Personality:</Em> informational, search-engine-flavoured.</>,
          <><Em>Weak at:</Em> tone consistency (varies more than the others); long-form creative writing.</>,
        ]} />

        <H3>Copilot M365 (Microsoft)</H3>
        <UL items={[
          <><Em>Best at:</Em> anything that uses your work data — emails, files, Teams chats, calendar. The only one that has direct access to your Microsoft Graph.</>,
          <><Em>Personality:</Em> ChatGPT-flavoured (because it's GPT underneath) but more compliance-aware.</>,
          <><Em>Weak at:</Em> standalone reasoning compared to the top tier of Claude / ChatGPT — for hard analytical tasks unrelated to your work data, Claude or ChatGPT direct is often better.</>,
        ]} />

        <KeyCallout title="The practical rule">
          For work-data tasks → Copilot M365 (only it has the data). For exploratory analysis, long writing,
          or pushback you can trust → Claude. For web-grounded research, images, or massive documents →
          Gemini. For general-purpose code or polished structured outputs → ChatGPT.
          <br /><br />
          For any high-stakes task: <Em>run it through two and compare</Em>.
        </KeyCallout>

        <TryIt>
          <P>Same prompt, three models. Watch the differences:</P>
          <Prompt>
            I have to give my team some hard news about budget cuts that affect their year-end bonuses.
            Write a 2-paragraph message I can send. Be direct. No corporate-speak. No optimism that
            isn't warranted.
          </Prompt>
          <P>
            Run it in Copilot, Claude.ai, and ChatGPT. Three things you'll notice: (a) which one followed
            "no corporate-speak" most faithfully, (b) which one felt most like a human wrote it, (c) which
            one would you actually send. You may find a hybrid — start in one, refine in another — gets
            you the best result.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Benchmark scores — what they actually tell you</H3>
        <P>
          You'll see comparison tables in launch blog posts: "Claude scores 89% on MMLU vs GPT-4o at 87%."
          These benchmarks are useful but limited:
        </P>
        <UL items={[
          <><Em>MMLU</Em> — Massive Multitask Language Understanding. Multiple-choice questions across 57 subjects. Mostly saturated above 90% — meaningful differences are small.</>,
          <><Em>HumanEval / SWE-Bench</Em> — code generation. SWE-Bench is the harder, more realistic test (real GitHub issues).</>,
          <><Em>GSM8K / MATH</Em> — maths reasoning. Saturated for top models on the easier set; MATH-500 still discriminates.</>,
          <><Em>GPQA</Em> — graduate-level physics / chemistry / biology. The current hardest broad-knowledge benchmark.</>,
          <><Em>HLE</Em> — Humanity's Last Exam. Very recent. The frontier of "what humans can ask that AI struggles with".</>,
        ]} />

        <H3>Why benchmarks lie (a bit)</H3>
        <UL items={[
          <><Em>Training-data contamination</Em> — many models have seen the eval data during training, inflating scores.</>,
          <><Em>Optimisation overfitting</Em> — labs benchmark-tune their models; you get strong test scores that don't always transfer to your actual workflow.</>,
          <><Em>Eval drift</Em> — the same benchmark today doesn't measure what it did three years ago. Saturation effects.</>,
        ]} />

        <H3>LMSYS Chatbot Arena</H3>
        <P>
          The least gameable signal we have for which models people actually prefer is the LMSYS Chatbot
          Arena — humans see two anonymous model outputs side-by-side and pick which they prefer. The
          aggregated Elo rating gives a real "blind taste test" ranking. Worth checking quarterly.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Build your own personal benchmark in 10 minutes:</P>
          <OL items={[
            'Write down 5 prompts that represent your actual work tasks — drafting, summarising, analysing, coding, deciding.',
            'Run all 5 through Copilot, Claude, and ChatGPT.',
            'Score each output 1–5 on (a) usefulness, (b) accuracy, (c) tone fit.',
            'Total the scores. Repeat quarterly when new models come out.',
          ]} />
          <P>
            This is more useful than any public benchmark for <em>your</em> work. The first time you do
            this is also the moment you stop thinking of "AI" as one thing.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Capability boundaries — what the models still can't do</H3>
        <P>
          For all the impressive progress, some failure modes are stubborn:
        </P>
        <UL items={[
          <><Em>Genuine numerical accuracy</Em> — even frontier models make off-by-one and arithmetic errors. The fix: tool use (calculators / code execution).</>,
          <><Em>Long-horizon planning</Em> — multi-step plans with constraints over many steps. Better with reasoning models, but still fragile beyond ~10 steps.</>,
          <><Em>Genuinely original synthesis</Em> — combining ideas from very disparate fields in a way that breaks new ground. Models do well at "the obvious synthesis"; novelty is harder.</>,
          <><Em>Calibrated uncertainty</Em> — models are over-confident on hard questions and over-cautious on easy ones. Calibration research is improving this but it's not solved.</>,
          <><Em>Working in genuinely new domains</Em> — if there's no training data on it (post-cutoff news, a niche internal system), the model can't know it. RAG / web search closes some of this gap; not all.</>,
        ]} />

        <H3>The "fast follower" pattern</H3>
        <P>
          When one frontier lab ships a new capability — Claude's Artefacts, OpenAI's o1 reasoning,
          Gemini's 1M context — the others typically match it within 3–9 months. So at any given moment,
          one or two labs are temporarily ahead on a specific axis, but durable monopolies on capabilities
          are rare. For long-term commitments, bet on the lab whose <em>roadmap</em> aligns with your
          needs, not whoever shipped the latest demo.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "task-eval grid" exercise:</P>
          <OL items={[
            'Make a 5×3 grid: 5 of your real tasks down the side, 3 models across the top.',
            'Run each prompt in each model. Score 1–5.',
            'Calculate per-model averages and per-task winners.',
            'Notice the granularity: some tasks have a clear winner; others are interchangeable.',
          ]} />
          <P>That grid is your decision matrix for the next quarter. Re-run when new models ship.</P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Within a model family the "tiers" (Haiku / Sonnet / Opus for Claude; mini / standard / o-series
          for OpenAI; Flash / Pro / Thinking for Gemini) are usually a 5–20× cost difference. For 80% of
          tasks the cheaper tier is fine. For the 20% that need real reasoning, pay up. The cost-per-token
          differences across families are now small relative to the cost-per-token differences within
          families — pick the right tier first, then the right family.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'Chatbot Arena Leaderboard',          by: 'LMSYS',          url: 'https://lmarena.ai/', note: 'Bookmark it. Check quarterly.' },
        { kind: 'article', title: 'How to evaluate LLMs for your task', by: 'Anthropic',      url: 'https://docs.anthropic.com/en/docs/build-with-claude/test-and-evaluate', note: 'How the experts build evals. Applies even if you\'re not using the API.' },
        { kind: 'article', title: 'Vellum AI — Model Comparison',        by: 'Vellum',         url: 'https://www.vellum.ai/llm-leaderboard', note: 'Aggregated benchmark dashboard, kept reasonably current.' },
        { kind: 'video',   title: 'AI Explained — model deep-dives',     by: 'AI Explained',   url: 'https://www.youtube.com/@aiexplained-official', note: 'YouTube channel that does measured, technical breakdowns of every major model release.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 2.3 — How model versioning works
// ============================================================
export function HowVersioningWorks() {
  return (
    <>
      <BeginnerSection>
        <P>
          When someone says "I asked ChatGPT" — they could be talking about any one of about a dozen
          different models, with widely different capabilities. "Claude" can mean anywhere from a fast cheap
          model to a $200/month research-grade one. Version matters more than family.
        </P>

        <H2>How each family names its versions</H2>

        <H3>OpenAI</H3>
        <UL items={[
          <><Em>GPT-4o</Em> — the workhorse. "o" for "omni" (handles text, image, audio).</>,
          <><Em>GPT-4o mini</Em> — fast and cheap. For high-volume light tasks.</>,
          <><Em>o3</Em> — reasoning model. Thinks before answering. Slower, smarter on hard problems.</>,
          <><Em>o3-mini</Em> — cheaper reasoning model.</>,
          <><Em>GPT-5</Em> — the newest flagship as of 2026.</>,
        ]} />

        <H3>Anthropic</H3>
        <UL items={[
          <><Em>Claude Haiku</Em> — fast and cheap. The Haiku name signals brevity.</>,
          <><Em>Claude Sonnet</Em> — the balanced workhorse. Sonnet is most people's daily driver.</>,
          <><Em>Claude Opus</Em> — the top-tier model. The most capable in the family. Slower, more expensive.</>,
          <P>The model number (3, 4, 4.5, etc.) is the generation. Newer generations are generally better. So "Claude Sonnet 4.5" is better than "Claude Sonnet 4".</P>,
        ]} />

        <H3>Google Gemini</H3>
        <UL items={[
          <><Em>Gemini Flash</Em> — fast/cheap.</>,
          <><Em>Gemini Pro</Em> — balanced.</>,
          <><Em>Gemini Ultra</Em> — top-tier.</>,
          <><Em>Gemini Thinking</Em> — reasoning variant.</>,
          <P>Versions: 1.5, 2.0, 2.5 — generation numbers.</P>,
        ]} />

        <H3>Copilot M365</H3>
        <P>
          Microsoft mostly hides the underlying model version from end users. Copilot uses whichever OpenAI
          model Microsoft has provisioned for that endpoint, which can change without notice. For most
          enterprise users this is fine — but if you notice Copilot suddenly behaving differently, that's
          usually why.
        </P>

        <H2>Why this matters for you</H2>
        <UL items={[
          'A demo someone showed you six months ago used a different model than what\'s in your hands today.',
          'A prompt that worked perfectly in Claude Sonnet 4 might give a worse answer in Haiku.',
          'When a model "feels different" after an update, that\'s usually a real version change, not your imagination.',
          'For repeatable work — the same task done weekly or monthly — pin to a specific model so the quality stays consistent.',
        ]} />

        <KeyCallout title="The version-check habit">
          Before complaining "ChatGPT is dumber now" or "Claude got worse", check which version you're
          actually using. The frontier labs ship updates, including occasional regressions. The version
          number is the only stable thing.
        </KeyCallout>

        <TryIt>
          <P>Open the model selector in each tool you use:</P>
          <OL items={[
            'Copilot Chat — top of the chat, you may or may not see model options depending on your licence tier.',
            'Claude.ai — at the bottom of the chat box. Note exactly which version is selected.',
            'ChatGPT — top of the chat. There\'s a dropdown.',
            'Gemini — top of the page.',
          ]} />
          <P>
            Write down the exact version each is using. Notice how visible (or invisible) the choice is in
            each product.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Knowledge cutoffs</H3>
        <P>
          Every model has a training cutoff — the date beyond which it has no knowledge from training.
          Without web search, asking about events after the cutoff gets you either an honest "I don't know"
          or a confident hallucination. The cutoffs migrate with each new generation.
        </P>
        <P>
          Typical 2026 cutoffs:
        </P>
        <UL items={[
          'GPT-4o family — mid 2024',
          'Claude Sonnet 4.5 family — early 2025',
          'Gemini 2.5 family — mid 2024',
          'DeepSeek R1 — mid 2024',
        ]} />
        <P>
          When you need anything more recent than the cutoff, use:
        </P>
        <UL items={[
          'Web search (Copilot M365, ChatGPT with browsing on, Gemini search-augmented mode).',
          'Pasted source documents (your most recent strategy doc, today\'s news article, etc.).',
          'Both.',
        ]} />

        <H3>Why models sometimes get "lobotomised"</H3>
        <P>
          You'll occasionally see users complain that a model "got dumber". This is usually one of:
        </P>
        <UL items={[
          <><Em>A version change.</Em> The vendor swapped the underlying model without you noticing.</>,
          <><Em>Latency optimisation.</Em> The vendor moved you to a faster / cheaper variant of the same model.</>,
          <><Em>Updated safety policies.</Em> The vendor tightened guardrails, so the model now refuses to do things it previously did.</>,
          <><Em>Drift in your own use.</Em> You're asking harder questions than you used to, but blaming the model instead.</>,
        ]} />
        <P>
          The defensive habit: always test with one or two of your favourite prompts after a vendor update.
          You'll catch real regressions quickly.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Establish your own "canary prompts":</P>
          <Prompt>
            Save 3 prompts that represent your common tasks. Note the model and version. Note the kind of
            output you expect to get back. Re-run them next month.
          </Prompt>
          <P>
            If the outputs degrade, you've caught a regression early. If they improve, you can confidently
            adopt the new model. This is your personal version-control system for AI quality.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The API vs product distinction</H3>
        <P>
          The same model behaves slightly differently depending on whether you access it via:
        </P>
        <UL items={[
          <><Em>The vendor's consumer product</Em> (ChatGPT.com, Claude.ai) — has additional system prompts, safety filters, and personality wrappers.</>,
          <><Em>The vendor's enterprise product</Em> (Copilot M365) — has additional grounding, compliance tooling, and audit logging.</>,
          <><Em>The raw API</Em> (developer access) — the closest to "talking to the model directly". You set the system prompt yourself. Different defaults for refusals, length, formatting.</>,
        ]} />
        <P>
          For most professionals, the consumer / enterprise products are what you use. But if you ever wonder
          "why does the same model give me different answers in Claude.ai vs in some tool that uses the
          Anthropic API?" — that's why.
        </P>

        <H3>Deprecation cycles</H3>
        <P>
          Frontier labs deprecate older models on a 12–24 month cycle. If you've built workflows around a
          specific model, you'll occasionally need to migrate. Practical guardrails:
        </P>
        <UL items={[
          'Pin model versions explicitly in production code.',
          'Build re-runnable evals so migration is fast to validate.',
          'Watch the vendor\'s deprecation announcements (OpenAI: model index page; Anthropic: deprecation policy).',
        ]} />

        <H3>The reproducibility issue</H3>
        <P>
          Even on the same model version, output varies between runs (because of sampling randomness). For
          anything where reproducibility matters — auditable decisions, regulated outputs, repeatable
          research — you need to either set temperature to 0 (deterministic), record the seed, or accept
          that the model output is one possible answer among many. Most working professionals ignore this;
          most working professionals are right to.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The cross-version diff:</P>
          <OL items={[
            'Pick a prompt you actually care about getting consistently.',
            'Run it 5 times in the same chat session (same model, same version, fresh chat each time).',
            'Compare. You\'ll see the variance from sampling — usually small, sometimes meaningful.',
          ]} />
          <P>
            For high-stakes work, knowing how much your model varies on identical inputs is part of
            calibrating how much to trust any one answer.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'OpenAI Models',                  by: 'OpenAI',            url: 'https://platform.openai.com/docs/models', note: 'The canonical list. Bookmark.' },
        { kind: 'article', title: 'Anthropic Model Overview',       by: 'Anthropic',         url: 'https://docs.anthropic.com/en/docs/about-claude/models', note: 'Equivalent for Claude.' },
        { kind: 'article', title: 'Gemini Models',                  by: 'Google',            url: 'https://ai.google.dev/gemini-api/docs/models/gemini', note: 'Equivalent for Gemini.' },
        { kind: 'article', title: 'Anthropic Model Deprecation Policy', by: 'Anthropic',    url: 'https://docs.anthropic.com/en/docs/about-claude/model-deprecations', note: 'How frontier labs communicate end-of-life.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 2.4 — Decision matrix
// ============================================================
export function DecisionMatrix() {
  return (
    <>
      <BeginnerSection>
        <P>
          Knowing which model to use for which task is one of the highest-leverage AI literacy skills. Below
          is a practical decision matrix — designed for working professionals with Copilot M365 access
          plus optional personal use of Claude.ai, ChatGPT, and Gemini.
        </P>

        <H2>The matrix</H2>

        <H3>If the task uses your work data — emails, files, Teams chat, calendar</H3>
        <P>→ <Em>Copilot M365</Em>. It's the only one with native access. Period.</P>

        <H3>If the task needs current information from the web</H3>
        <UL items={[
          'Inside your work environment → Copilot Chat with web mode on',
          'For deep research → Gemini (best web search integration) or ChatGPT with web on',
        ]} />

        <H3>If the task is serious analytical writing</H3>
        <P>
          → <Em>Claude (Sonnet or Opus)</Em>. Best long-form writer, willing to push back, fewer hallucinations.
          Especially for: long memos, strategy docs, op-eds, careful critique.
        </P>

        <H3>If the task involves code</H3>
        <UL items={[
          'Quick code drafting → Claude or ChatGPT (very close)',
          'Big refactors / multi-file changes → Claude Code (covered in Module 6)',
          'Inside Excel → Copilot in Excel',
          'Inside a developer IDE → GitHub Copilot or Cursor (different products)',
        ]} />

        <H3>If the task is image-related</H3>
        <UL items={[
          'Image generation → ChatGPT (DALL-E) or Gemini',
          'Reading / understanding images → Claude, ChatGPT, or Gemini all work well',
          'Inside PowerPoint → Copilot in PowerPoint',
        ]} />

        <H3>If the task is hard reasoning — multi-step logic, complex maths, careful planning</H3>
        <P>
          → A <Em>reasoning model</Em>. Claude Opus with thinking, ChatGPT o3, or Gemini 2.5 Pro Thinking.
          Worth the slower response.
        </P>

        <H3>If the task is fast / repetitive / high volume</H3>
        <P>
          → The cheapest tier in whichever family. Claude Haiku, GPT-4o mini, Gemini Flash. For an experienced
          user pumping through 50 quick tasks an hour, picking the cheap fast tier matters.
        </P>

        <H3>If you genuinely don't know</H3>
        <P>
          → <Em>Run the prompt in two models and compare.</Em> Pick the one you trust. Over a month or two
          you'll build a strong intuition for which one to reach for first.
        </P>

        <KeyCallout title="The five questions to ask before choosing">
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Does the task need my work data?</li>
            <li>Does it need current web information?</li>
            <li>Is it analytical writing or pure reasoning?</li>
            <li>Is it high-stakes or low-stakes?</li>
            <li>Will I run it once or many times?</li>
          </ol>
          The answers point you to a model. With practice, this question takes 5 seconds.
        </KeyCallout>

        <TryIt>
          <P>The "five questions" applied to one of your real tasks:</P>
          <OL items={[
            'Pick a task you\'ll do this week — drafting, analysing, deciding, planning.',
            'Run the five questions above.',
            'Choose the model.',
            'Do the task.',
            'After: was that the right choice? What would you pick next time?',
          ]} />
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Cost-aware task routing</H3>
        <P>
          As you do more AI-assisted work, cost becomes worth thinking about. Most professionals are on a
          flat-rate plan (Copilot M365 enterprise; Claude Pro; ChatGPT Plus) so per-prompt cost feels
          invisible — but you have a soft cap (rate limits, daily quotas).
        </P>
        <P>The intermediate habits:</P>
        <UL items={[
          <><Em>Cheap tier for the first draft.</Em> Top tier for the polish.</>,
          <><Em>Reasoning model only when you need it.</Em> Asking o3 to summarise an email is wasteful. Asking it to plan a complex multi-stage decision is well-spent.</>,
          <><Em>Web search off by default; on when needed.</Em> Web search adds 5–15 seconds of latency and consumes more compute.</>,
          <><Em>Pasted documents over uploaded files where possible.</Em> Some products parse and re-process uploads each turn; pasted text just sits in context.</>,
        ]} />

        <H3>Failure-mode routing</H3>
        <P>Different models fail in different ways. Knowing this lets you switch instead of fight:</P>
        <UL items={[
          <><Em>Claude refuses something benign.</Em> Try ChatGPT — different policy. (If it's a content question and you've tried both, you might need to reword.)</>,
          <><Em>ChatGPT is being too agreeable / shallow.</Em> Switch to Claude — explicitly trained to push back.</>,
          <><Em>Gemini doesn't have the latest information.</Em> Try Copilot or ChatGPT with web search.</>,
          <><Em>Copilot can't find a document you know exists.</Em> Try wording the search differently, then fall back to opening the document yourself and pasting into Claude.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>Pick a task you've recently had a frustrating AI experience on. Re-run it with the routing rules above:</P>
          <Prompt>
            (your previous prompt)
          </Prompt>
          <P>
            In a different model. Or with a different tier. Or with web search toggled. Notice which
            switch actually fixed it. That observation goes in your prompt library.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Building a multi-model workflow (preview of Module 7)</H3>
        <P>
          Once you're comfortable picking models, the next move is using more than one in a single workflow:
        </P>
        <UL items={[
          <><Em>Author / critic split.</Em> Claude drafts, ChatGPT critiques (or vice versa). The diversity exposes weaknesses neither model would catch alone.</>,
          <><Em>Tier escalation.</Em> Haiku does the bulk; you escalate to Opus only when Haiku's output is borderline.</>,
          <><Em>Model-as-validator.</Em> A second model checks the first one's facts before output.</>,
          <><Em>Specialised hand-offs.</Em> Gemini does the web research, Claude writes the synthesis from Gemini's notes.</>,
        ]} />
        <P>
          These patterns are the heart of Module 7. The decision matrix here is a single-model version of
          that thinking — useful even without orchestration.
        </P>

        <H3>The "what would I have to believe" check</H3>
        <P>
          When you've picked a model and run a task, before accepting the output ask: <em>what would I have
          to believe for this answer to be wrong?</em> If the answer is "the model would have to have
          completely fabricated this section" — that's verifiable. If the answer is "the model would have to
          have understood my organisation's idiosyncratic context wrong" — that's not verifiable; ground
          it next time.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Build a personal task-routing table — your version of the matrix above:</P>
          <OL items={[
            'List 10 of your most common AI tasks (be specific).',
            'For each, write down: which model? which tier? web search on/off? grounded or not?',
            'Pin this above your screen for a week.',
            'After the week, note any rules you overrode or changed. Update the table.',
          ]} />
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          The biggest cost discipline at the start is using reasoning models only when you need them. They're
          5–20× slower and more expensive than regular models, for marginal benefit on easy tasks. Default
          to the fast tier; reach for reasoning when the problem actually deserves it.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'How to Use AI to Do Stuff — opinionated guide', by: 'Ethan Mollick', url: 'https://www.oneusefulthing.org/p/how-to-use-ai-to-do-stuff-an-updated', note: 'The single most-recommended general AI use guide. Refreshed periodically.' },
        { kind: 'article', title: 'Anthropic — when to use which Claude', by: 'Anthropic', url: 'https://docs.anthropic.com/en/docs/about-claude/models', note: 'Vendor\'s own guidance on routing within their family.' },
        { kind: 'video',   title: 'Andrej Karpathy on LLM intuition',     by: 'Andrej Karpathy',  url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g', note: '"Intro to LLMs" — 1 hour, by far the best mental model lecture available.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 2.5 — Side-by-side experiment
// ============================================================
export function SideBySide() {
  return (
    <>
      <BeginnerSection>
        <P>
          You've now read about each model family, their relative strengths, how versioning works, and how
          to pick. The final lesson in this module is a hands-on exercise that lets you feel all of that
          for yourself in 15 minutes.
        </P>
        <P>
          The single highest-value thing a non-IT professional can do to build AI literacy is run the same
          prompts across multiple models and compare. Reading about model differences doesn't stick. Seeing
          them does.
        </P>

        <H2>The setup</H2>
        <P>You need three browser tabs open:</P>
        <OL items={[
          <><Em>Copilot Chat</Em> (via the M365 portal or Edge sidebar). Make sure you're in <Em>Web mode</Em> for fair comparison — not work-data mode.</>,
          <><Em>Claude.ai</Em> (free account at claude.ai). Note the model version.</>,
          <><Em>Gemini</Em> (free account at gemini.google.com). Note the model version.</>,
        ]} />
        <P>
          Optionally also: ChatGPT.com (free or paid). The five-prompt set below works equally well across
          all four.
        </P>

        <H2>The five prompts</H2>

        <H3>Prompt 1 — the writing test</H3>
        <Prompt>
          Write a one-paragraph email to my team telling them we're moving offices in three weeks. Keep it
          warm but professional. Do not use the words "excited", "journey", or "thrilled".
        </Prompt>
        <P>
          What to look for: did each model follow the word-ban? Did any of them sneak in synonyms ("looking
          forward to") that subverted the instruction? Which one would you actually send?
        </P>

        <H3>Prompt 2 — the analytical test</H3>
        <Prompt>
          What's the case for and the case against working from the office five days a week, for a
          knowledge-work company in 2026? Give me the strongest version of each side.
        </Prompt>
        <P>
          What to look for: which model gave the strongest version of each side (rather than a watered-down
          both-sides)? Which one had a clear position vs hedged? Which one cited specific evidence?
        </P>

        <H3>Prompt 3 — the factual / verification test</H3>
        <Prompt>
          Give me three real academic papers from 2023 on transformer architecture, with full titles,
          authors, and DOIs. Cite only papers that genuinely exist.
        </Prompt>
        <P>
          What to look for: <Em>this is the hallucination test from Module 1</Em>. Try to verify each paper
          in a real search engine. How many were hallucinated? Did any model refuse rather than hallucinate?
          This is the most important comparison in the set.
        </P>

        <H3>Prompt 4 — the reasoning test</H3>
        <Prompt>
          A 200 MW solar farm runs at 28% capacity factor. Capture price averages $42/MWh. Operating
          costs are $8 per MWh dispatched. What's the annual EBITDA? Then: what would the capacity factor
          need to be for EBITDA to double, holding price and costs constant?
        </Prompt>
        <P>
          What to look for: did each model get the arithmetic right? Did any "round" or skip steps? Did any
          show their working? (This is where reasoning models earn their cost — but a competent regular
          model should handle this.)
        </P>

        <H3>Prompt 5 — the critique-yourself test</H3>
        <Prompt>
          Make the strongest possible case against using AI in business decisions. Be persuasive, specific,
          and use real examples. Don't hedge.
        </Prompt>
        <P>
          What to look for: which model was actually willing to argue strongly against AI? Which one
          hedged with "of course, AI has many benefits..." (a sign of sycophancy)? Which one named specific
          failure cases instead of generalities?
        </P>

        <KeyCallout title="What you'll find">
          Three things will become viscerally clear after running these five prompts:
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>The models really are different. Not "kind of different" — substantially different.</li>
            <li>Each one is best at something. None is best at everything.</li>
            <li>Your gut feeling about "which one to use" will sharpen for years to come.</li>
          </ol>
        </KeyCallout>

        <TryIt title="The Module 2 capstone">
          <P>Run all five prompts in all three (or four) models. Then fill in a small scorecard:</P>
          <Prompt>
            | Prompt | Copilot | Claude | Gemini | (ChatGPT) | Winner |
            |--------|---------|--------|--------|-----------|--------|
            | 1 — writing       |   /5    |   /5   |   /5   |    /5     |        |
            | 2 — analytical    |   /5    |   /5   |   /5   |    /5     |        |
            | 3 — factual       |   /5    |   /5   |   /5   |    /5     |        |
            | 4 — reasoning     |   /5    |   /5   |   /5   |    /5     |        |
            | 5 — critique-self |   /5    |   /5   |   /5   |    /5     |        |
            | TOTAL             |  /25    |  /25   |  /25   |   /25     |        |
          </Prompt>
          <P>
            Total each column. The model with the highest total isn't "the best AI" — it's the one best
            suited to <em>these five prompts</em>. Run different prompts and you may get a different winner.
            That's the whole point.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>What to do with your scorecard</H3>
        <P>Three follow-on moves once you have the numbers:</P>
        <UL items={[
          <><Em>Save it.</Em> Put it in your prompt library / personal AI notes. Run it again in 3 months when models have updated.</>,
          <><Em>Build a domain-specific version.</Em> Replace the five generic prompts with five prompts from <em>your</em> work (e.g. "summarise this client email", "draft a project update", "critique my pitch deck"). Run that.</>,
          <><Em>Notice the gaps.</Em> If no model scored well on prompt 4, that might be a task category where AI isn't ready for you yet. If one model dominated, that's your default for that task type.</>,
        ]} />

        <H3>The "blind" version</H3>
        <P>
          A more rigorous version of this experiment: run the same prompt in all the models, paste the
          (anonymous) outputs into a doc, then ask a colleague to rank them without knowing which is which.
          You'll discover: (a) people often prefer different models than they say they do, and (b) your
          preferences may not match what you'd predict from reading about the models.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Run the blind taste test on one of the prompts above:</P>
          <OL items={[
            'Pick prompt 1 or 2 (writing or analytical).',
            'Run it in three models.',
            'Paste all three outputs into a doc, anonymised (A, B, C).',
            'Show a colleague. Ask them to rank.',
            'Reveal which is which.',
          ]} />
          <P>
            Often a real surprise. People's stated preferences don't always match their blind preferences.
            The same is true for you.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Beyond five prompts — building a personal eval</H3>
        <P>
          The five prompts above are a useful starting set, but a real personal eval has:
        </P>
        <UL items={[
          <><Em>15–20 prompts</Em> covering the full range of your tasks.</>,
          <><Em>Multiple difficulty levels</Em> per category. Easy / medium / hard.</>,
          <><Em>Edge cases</Em> — prompts where you know what should happen.</>,
          <><Em>Time-decay sensitivity</Em> — at least 2–3 prompts about recent events to test the cutoff handling.</>,
          <><Em>Re-run on a schedule</Em> — quarterly is plenty.</>,
        ]} />
        <P>
          This is more disciplined than most professionals will bother with, but if AI is a core tool for
          your work, the few hours per quarter is a high-leverage investment.
        </P>

        <H3>Looking ahead</H3>
        <P>
          Module 3 (Prompting) is where you learn to make any model better. The same prompt rewritten by
          someone who understands prompting will often outperform a different model running a worse-written
          version of the same prompt. The model matters; the prompt matters more.
        </P>

        <KeyCallout title="End of Module 2">
          You now have a working map of the AI landscape. You know who makes the models, which is best at
          what, why versioning matters, how to route by task — and you've run the experiments that prove
          it for you.
          <br /><br />
          Module 3 is where you stop choosing tools and start mastering the one skill that compounds across
          all of them: prompting.
        </KeyCallout>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'How to Use AI: A Practical Guide',          by: 'Ethan Mollick',     url: 'https://www.oneusefulthing.org/p/how-to-use-ai-to-do-stuff-an-updated' },
        { kind: 'article', title: 'Chatbot Arena Leaderboard',                  by: 'LMSYS',             url: 'https://lmarena.ai/', note: 'Keep this open in a tab.' },
        { kind: 'article', title: 'AI Snake Oil — what to be sceptical of',     by: 'Narayanan & Kapoor', url: 'https://www.aisnakeoil.com/', note: 'Excellent corrective to vendor hype. Builds your "what AI can\'t do well" intuition.' },
        { kind: 'video',   title: 'The State of AI in 5 Charts',                by: 'Nathan Benaich',    url: 'https://www.stateof.ai/', note: 'Annual industry overview.' },
      ]} />
    </>
  )
}
