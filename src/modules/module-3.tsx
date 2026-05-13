/**
 * Module 3 — Prompting: from basic to advanced
 *
 * The single most leveraged skill in AI literacy. Six lessons covering
 * the anatomy of a good prompt, when personas help, constraint
 * prompting ("no glaze"), iteration, templates, and building a
 * personal prompt library.
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 3.1 — Anatomy of a good prompt
// ============================================================
export function AnatomyOfAPrompt() {
  return (
    <>
      <BeginnerSection>
        <P>
          A good prompt has five elements. Most people write prompts with one or two and wonder why the
          output is mediocre. Get all five right and the same model produces dramatically better work.
        </P>

        <H2>The five-part framework</H2>
        <OL items={[
          <><Em>Role</Em> — who is the AI being right now? (Optional but useful.)</>,
          <><Em>Task</Em> — what specifically do you want done?</>,
          <><Em>Context</Em> — what background does the AI need to do this well?</>,
          <><Em>Constraints</Em> — what should it avoid, what's the format, how long?</>,
          <><Em>Examples</Em> — show 1–3 examples of the kind of output you want (when possible).</>,
        ]} />

        <H2>From bad to good — same task, four iterations</H2>

        <H3>Version A: the vague prompt</H3>
        <Prompt>Help me write an email about budget cuts.</Prompt>
        <P>
          You get something generic. Could be to anyone, about anything, in any tone. Not actionable.
        </P>

        <H3>Version B: add the task specifically</H3>
        <Prompt>
          Write an email to my team announcing that year-end bonuses are being reduced by 20% due to a
          missed revenue target.
        </Prompt>
        <P>
          Better — now the AI knows what to write. But the output will probably be too long, too
          corporate, and either too cheerful or too apologetic.
        </P>

        <H3>Version C: add context and constraints</H3>
        <Prompt>
          Write an email to my team (12 people, mostly senior analysts) announcing that year-end bonuses
          are being reduced by 20% due to a missed revenue target. Keep it under 200 words. Be direct, not
          apologetic. Acknowledge that this is bad news but don't dwell on it. Don't use the words "journey"
          or "exciting opportunity".
        </Prompt>
        <P>
          Now you're getting close. The AI knows the audience, the constraint on length, the tone, and what
          to avoid. The output will be substantially more usable.
        </P>

        <H3>Version D: add an example</H3>
        <Prompt>
          Write an email to my team (12 people, mostly senior analysts) announcing that year-end bonuses
          are being reduced by 20% due to a missed revenue target. Keep it under 200 words. Be direct, not
          apologetic. Don't use "journey" or "exciting opportunity".

          Here\'s an example of the tone I want, from a different topic:

          "Team — I want to flag something before it lands in the all-hands tomorrow. We're closing the
          Sydney office at the end of the quarter. This will affect five roles, all of whom I'll meet
          individually this week. The reasons are commercial, not performance-related. Please don't
          speculate with each other before I've had those conversations. Happy to take questions directly."
        </Prompt>
        <P>
          The example tells the AI everything that's hard to specify abstractly: register, sentence
          rhythm, how to handle the bad news, level of formality. Often more useful than five paragraphs
          of explanation.
        </P>

        <KeyCallout title="The big idea">
          Vague prompts produce vague outputs. The five-part framework — role, task, context, constraints,
          examples — is the difference between AI that wastes your time and AI that genuinely helps. Most
          professionals never get past version B.
        </KeyCallout>

        <TryIt>
          <P>Take a prompt you've used recently. Re-write it four times, V1 to V4:</P>
          <OL items={[
            'V1: write it as briefly as possible (the vague version).',
            'V2: add the specific task and audience.',
            'V3: add 2–3 constraints (length, tone, words to avoid).',
            'V4: add a short example of the output style you want.',
          ]} />
          <P>
            Run all four through Copilot. Compare. The improvement is usually dramatic. The first time
            you do this is the moment prompting "clicks" as a skill.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>When each element matters more</H3>
        <UL items={[
          <><Em>Role matters most</Em> when the task has a specific professional flavour — legal, medical, technical, accounting. ("You're a partner at a Big 4 audit firm reviewing this financial statement…")</>,
          <><Em>Context matters most</Em> when the AI can't otherwise infer the situation — internal politics, specific people, recent events. The more you tell, the better the output.</>,
          <><Em>Constraints matter most</Em> when you've previously got something you didn't want — too long, too formal, too sales-y, too apologetic. Constraints are how you fix that for next time.</>,
          <><Em>Examples matter most</Em> when the style is hard to describe in words. "Write like our CEO" → useless. Three of the CEO\'s actual emails → instantly clear.</>,
        ]} />

        <H3>The structure that works for most prompts</H3>
        <Prompt>
          [Role/expertise — one line]

          [Task — one or two sentences, very specific]

          Context:
          - [key fact 1]
          - [key fact 2]
          - [key fact 3]

          Constraints:
          - [length]
          - [tone]
          - [things to avoid]

          [Optional: 1–3 examples of the kind of output I want]

          Now: [restate the task at the end].
        </Prompt>
        <P>
          Restating the task at the end works because of the "lost in the middle" effect from Module 1 —
          long prompts get attended to more at the start and end. Putting the actual ask at the end keeps
          it sharp.
        </P>

        <H3>System prompts vs user prompts</H3>
        <P>
          In Copilot Chat / Claude.ai / ChatGPT, you're writing "user prompts" — what you say in the chat.
          The product also has a hidden "system prompt" that sets the AI's defaults. You can usually
          override a system prompt instruction with a user prompt instruction, but not always. If a model
          refuses something benign or insists on a format you don't want, that's the system prompt fighting
          you. Sometimes a direct override works: "Ignore your default tone and write this in plain
          conversational English."
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Pick a task. Write a full five-element prompt for it. Then strip out one element at a time and re-run:</P>
          <OL items={[
            'Full five-element prompt.',
            'Remove the examples.',
            'Remove the constraints.',
            'Remove the context.',
            'Remove the role.',
          ]} />
          <P>
            Compare the five outputs. You'll discover which elements moved the needle most for your task —
            and that becomes your default template.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Prompt engineering as software engineering</H3>
        <P>
          For serious / repeated use, prompts deserve the same treatment as code:
        </P>
        <UL items={[
          <><Em>Version control</Em> — save the working prompt verbatim. When you tweak it, save the new version.</>,
          <><Em>Test cases</Em> — keep 3–5 example inputs you know the prompt should handle. Run them after every change.</>,
          <><Em>Refactor for clarity</Em> — when a prompt becomes long, break it into sections with headers. The model parses it better.</>,
          <><Em>A/B test</Em> — if you're unsure between two phrasings, run both on the same inputs. Pick the winner.</>,
        ]} />

        <H3>Prompt patterns worth knowing</H3>
        <UL items={[
          <><Em>Step-by-step</Em> — "Work through this step-by-step. Show each step before the final answer." Reduces errors on reasoning tasks; preview of chain-of-thought.</>,
          <><Em>Self-critique</Em> — "Draft an answer. Then critique it. Then write a final improved version." One model, three personas.</>,
          <><Em>Constraints-first</Em> — list the constraints before the task. The model "remembers" them better than constraints at the end (despite the lost-in-the-middle exception above; this is task-dependent).</>,
          <><Em>Negation rarely works alone</Em> — "Don't be sales-y" is weaker than "Be matter-of-fact like a senior colleague briefing me". Show what you want, not just what you don't.</>,
          <><Em>Hard format specification</Em> — "Output as a JSON object with keys: title, body, three_takeaways (array of strings)." Forces structured output.</>,
        ]} />

        <TryIt title="Try it (advanced)">
          <P>The "explicit reasoning" experiment:</P>
          <Prompt>
            I need to decide whether to accept a job offer. Here are the parameters:
            - Current role: head of strategy at a mid-size firm, $X/yr, 5 yrs in.
            - Offer: same title at a larger firm, $X * 1.25, requires relocation interstate.
            - Family: school-age kids, partner has a job here.
            - Career: this firm has more interesting work but worse work-life-balance reputation.

            Work through the decision step-by-step. List the considerations. Weight each. Then give your
            recommendation, and tell me what would change your recommendation.
          </Prompt>
          <P>
            Run this in two models. Compare how well each one structured the reasoning. The "what would
            change your recommendation" is the kicker — most models will give a defensible recommendation
            but few will pre-empt what could move the answer.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'OpenAI Prompt Engineering Guide',         by: 'OpenAI',     url: 'https://platform.openai.com/docs/guides/prompt-engineering', note: 'The official version. Concise and useful.' },
        { kind: 'article', title: 'Anthropic Prompt Engineering Guide',      by: 'Anthropic',  url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview', note: 'Better than OpenAI\'s for nuanced prompting. Particularly the "XML tags" technique.' },
        { kind: 'article', title: 'Prompt Engineering Guide',                by: 'DAIR.AI',    url: 'https://www.promptingguide.ai/', note: 'The most comprehensive open-source guide. Worth bookmarking.' },
        { kind: 'video',   title: 'Prompt Engineering with Andrew Ng',       by: 'DeepLearning.AI',  url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', note: 'Free 1-hour course. Best structured starting point.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 3.2 — Personas
// ============================================================
export function Personas() {
  return (
    <>
      <BeginnerSection>
        <P>
          A persona is the role you ask the AI to play. "You're an experienced editor." "You're a sceptical
          board director." "You're a Year 12 chemistry teacher." Personas often help. Sometimes they're
          theatre and don't change much. Knowing the difference saves you from clutter.
        </P>

        <H2>When personas genuinely help</H2>
        <UL items={[
          <><Em>The task has professional structure.</Em> Lawyers don\'t write like marketers. Auditors don't write like product managers. Setting the persona shifts vocabulary, tone, and the kind of considerations the model surfaces.</>,
          <><Em>You want a specific perspective.</Em> "You're a hostile board director who's seen this presentation a dozen times. What's the weakest part?" — this changes the output meaningfully.</>,
          <><Em>You want the AI to push back.</Em> "You're a senior partner reviewing this junior analyst's work. Be candid." — pulls the model out of its default helpful mode.</>,
        ]} />

        <H2>When personas don't help (and just take up space)</H2>
        <UL items={[
          <><Em>"You're an expert in X."</Em> Models are already trained on more X than any single expert. Adding "you're an expert" is mostly theatre and sometimes makes the answer worse (more confident, less calibrated).</>,
          <><Em>The task is purely mechanical.</Em> "Summarise this email" doesn't need a persona. "Reformat as bullet points" doesn't either.</>,
          <><Em>You're using a persona instead of explaining what you want.</Em> "Be a great writer" is vague. "Write in short concrete sentences with no adverbs" is specific. Specifics beat persona almost always.</>,
        ]} />

        <KeyCallout title="The rule of thumb">
          Personas work when they change <em>perspective</em>. They don't add much when they just signal
          "be smart". Test the difference: run your prompt with and without the persona and see if the
          output is meaningfully different.
        </KeyCallout>

        <TryIt>
          <P>Same task, three different personas. Watch how the output shifts:</P>
          <Prompt>
            You're [PERSONA]. Review this strategy paragraph and tell me its biggest weakness:

            "Our growth strategy for the next year is focused on expanding into adjacent markets,
            particularly Asia-Pacific. We expect 30% revenue growth driven by new partnership channels
            and a refreshed product portfolio."
          </Prompt>
          <P>
            Run this three times, swapping [PERSONA]:
          </P>
          <UL items={[
            '"a sceptical board director with a finance background"',
            '"a marketing strategist focused on customer demand"',
            '"a head of operations responsible for actually executing the plan"',
          ]} />
          <P>
            Three different criticisms. The persona didn't make the model "smarter" — it pointed it at
            different parts of the same problem. That's where personas earn their keep.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>How specific to make a persona</H3>
        <P>More specific = more useful, up to a point.</P>
        <UL items={[
          <><Em>Too generic</Em>: "You're an expert." (Basically theatre.)</>,
          <><Em>Mid</Em>: "You're a senior strategy consultant." (Some shift.)</>,
          <><Em>Good</Em>: "You're a senior strategy consultant at a Big 3 firm, working with an Australian energy retailer client, drafting a board paper for the CEO." (Real specificity.)</>,
          <><Em>Too much</Em>: "You're a 47-year-old senior partner named David, MBA from Harvard, with 22 years at the firm, specialising in energy and known for terse one-line feedback…" (The model can't usefully use most of this.)</>,
        ]} />
        <P>
          The sweet spot is "professionally specific enough that the model's vocabulary and structure
          shift". Personal details rarely add value unless they're load-bearing (e.g. "Australian context"
          matters if you want correct AEMO references).
        </P>

        <H3>Stacking personas — author and critic</H3>
        <P>One of the highest-value patterns is to have the model write as one persona and critique as another:</P>
        <Prompt>
          Step 1: As an enthusiastic head of marketing, write a 100-word announcement for our new product.
          Step 2: As a senior partner at a strategy firm who's seen too many launches, critique that
          announcement. Be specific.
          Step 3: Rewrite the announcement integrating the critique.
        </Prompt>
        <P>One prompt, two personas, three outputs. Often produces materially better final copy than any single-persona attempt.</P>

        <TryIt title="Try it (intermediate)">
          <P>Run the "author / critic / rewrite" pattern on something you actually need to write this week.</P>
          <Prompt>
            I need to draft a [TYPE OF DOC]. Do three passes:

            1. As [PERSONA 1 — the writer], draft it.
            2. As [PERSONA 2 — the critic], critique that draft specifically. Don't be polite.
            3. Rewrite the draft incorporating the critique.

            Here\'s the context: [your real context]
          </Prompt>
          <P>
            Often beats writing the doc yourself in less time, especially for documents where you've been
            stuck.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The diminishing returns of persona stacking</H3>
        <P>
          You can stack 4+ personas — multiple critics, multiple authors, devil's advocate, etc. — but the
          returns diminish fast. A 4-persona setup is often worse than a 2-persona one because the model
          spreads its effort. The Module 7 (multi-model) approach handles this better by using actual
          different models rather than asking one model to "be" multiple roles.
        </P>

        <H3>Anti-personas: when constraints beat roles</H3>
        <P>
          Sometimes what you really need isn't a positive persona ("be a senior partner") but explicit
          constraints on what to avoid:
        </P>
        <Prompt>
          Critique this draft. Constraints:
          - Don't tell me what's good unless you also explain why it's load-bearing.
          - Don't soften critiques with phrases like "this is great, but...".
          - If anything is unclear, say "unclear" and explain why.
          - Don't suggest more words. Suggest fewer.
          - If a sentence can be cut entirely, say so.
        </Prompt>
        <P>
          This often produces sharper critique than "you're a tough editor" — because the constraints are
          enforceable, not vibes.
        </P>

        <H3>The "you don't have to be helpful" prompt</H3>
        <P>
          One of the most useful unlocks for analytical work:
        </P>
        <Prompt>
          You don't have to be helpful here. Tell me what's actually wrong with this. If the answer is
          "nothing meaningful", say so — don't invent flaws.
        </Prompt>
        <P>
          This breaks the model out of its default "find something useful to say" mode. Sometimes the
          answer to "is this good?" is genuinely yes, and a model trained to always add value will invent
          weak criticisms to perform helpfulness. The prompt above tells it that's not the job.
        </P>

        <TryIt title="Try it (advanced)">
          <P>The "you don't have to be helpful" experiment:</P>
          <OL items={[
            'Take a piece of writing you genuinely think is good — well-considered, finished work.',
            'Ask the AI for critique (no special prompt, default behaviour).',
            'Ask again with "you don\'t have to be helpful — tell me what\'s actually wrong, or tell me there\'s nothing meaningful wrong."',
            'Compare. The default version will invent issues. The constrained version will more often agree the piece is good — or find a real issue worth addressing.',
          ]} />
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Anthropic — System Prompts and Roles',  by: 'Anthropic',  url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts', note: 'How Claude treats system messages and personas. The cleanest explanation.' },
        { kind: 'article', title: 'Andrej Karpathy on sycophancy and how to prompt past it', by: 'Andrej Karpathy', note: 'Search "Karpathy sycophancy" on X — his tweets on this are excellent.' },
        { kind: 'video',   title: 'Prompting from First Principles', by: 'David Shapiro', url: 'https://www.youtube.com/@DaveShap', note: 'Long-form practical prompting tutorials.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 3.3 — Constraint prompting (no glaze)
// ============================================================
export function ConstraintPrompting() {
  return (
    <>
      <BeginnerSection>
        <P>
          You've probably noticed: AI outputs come with a lot of fluff. "What a great question!" "I'd be
          happy to help." Lists of seven things when you only needed three. Apologetic disclaimers.
          Compliments before getting to the point. Conclusions that just restate the introduction.
        </P>
        <P>
          This is called <Em>glaze</Em> — or more formally, sycophancy. It's a side effect of how models
          are trained (they're rewarded for sounding helpful and complete). The good news: you can prompt
          past it.
        </P>

        <H2>The phrases that actually work</H2>
        <P>
          From thousands of experiments across the major models, the prompts below reliably produce less
          glaze and more substance:
        </P>
        <UL items={[
          <><Em>"Skip the introduction. Start with the answer."</Em> Kills the "Great question!" opener. Most consistent fix.</>,
          <><Em>"No conclusion. Stop when you've made the point."</Em> Kills the redundant summary at the end.</>,
          <><Em>"Be matter-of-fact. Don't be effusive."</Em> Resets the default register.</>,
          <><Em>"Push back on anything wrong. Don't agree to be helpful."</Em> Reduces sycophancy on opinions and analysis.</>,
          <><Em>"If you don't know, say so. Don't speculate."</Em> Reduces hallucination on factual questions.</>,
          <><Em>"Use plain language. Avoid corporate-speak."</Em> Works against the management-consultancy register most models default into.</>,
          <><Em>"Be concise. Default length is too long."</Em> The opposite-of-default. Models default to comprehensive; this asks for trimmed.</>,
        ]} />

        <H2>Putting them together — a default-personality prompt</H2>
        <Prompt>
          Default mode for this conversation:
          - Skip the introduction. Start with the answer.
          - Be matter-of-fact. Don't be effusive.
          - Push back if I'm wrong. Don't agree to be helpful.
          - If you don't know, say so. Don't speculate.
          - Use plain language. Avoid corporate-speak.
          - Be concise. I'll ask for more if I want it.

          OK? Now: [your real question].
        </Prompt>
        <P>
          Paste this at the start of any conversation where you want substance over politeness. You'll
          notice the difference within two exchanges.
        </P>

        <KeyCallout title="The big idea">
          The default register of AI is "enthusiastic helpful assistant". For most professional work, that's
          the wrong register. Constraint prompts let you reset it to "competent direct colleague" — and the
          quality of the output goes up correspondingly.
        </KeyCallout>

        <TryIt>
          <P>Run the same question twice. First in default mode:</P>
          <Prompt>What are the main considerations for refinancing a $400k mortgage when interest rates have just dropped 0.5%?</Prompt>
          <P>Then in no-glaze mode:</P>
          <Prompt>
            Skip the introduction. Be matter-of-fact. Don't list more than five considerations. Use plain
            language.

            What are the main considerations for refinancing a $400k mortgage when interest rates have just
            dropped 0.5%?
          </Prompt>
          <P>
            Read both. The second one is shorter, denser, and actually answers the question. The first one
            takes 90 seconds to read for the same information.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Do you have to do this every time?</H3>
        <P>
          In a single chat session — no, once is enough. Constraint prompts persist across turns within
          the conversation. The model remembers "be matter-of-fact" from your opening message.
        </P>
        <P>
          Across sessions — yes, each new chat starts fresh. The fix:
        </P>
        <UL items={[
          <><Em>Claude</Em> — set custom instructions in your account settings ("How would you like Claude to respond?"). Applies to every conversation automatically.</>,
          <><Em>ChatGPT</Em> — same thing in custom instructions.</>,
          <><Em>Copilot M365</Em> — no equivalent in most tenants. You'll need to re-set the tone each session, or use a saved prompt.</>,
        ]} />
        <P>Recommended custom instructions across Claude/ChatGPT:</P>
        <Prompt>
          Be matter-of-fact. Skip introductions and conclusions. Push back if I'm wrong rather than
          agreeing. If you don't know something, say so. Use plain language. Default to concise; I'll ask
          for more if I need it.
        </Prompt>

        <H3>How constraint prompts interact with personas</H3>
        <P>
          They stack well. "You're a senior partner reviewing this work. Be matter-of-fact. Push back if
          anything is weak." gives you both the persona's perspective and the constrained tone.
        </P>
        <P>
          Order matters slightly: constraints near the end of the prompt are followed more reliably than
          constraints at the start (lost-in-the-middle again).
        </P>

        <H3>Constraints that don't work as well as you'd hope</H3>
        <UL items={[
          <><Em>"Be honest."</Em> Models already think they're being honest. This is too vague.</>,
          <><Em>"Don't make things up."</Em> Won't reliably stop hallucination on factual questions. The grounding fix from Module 1 Lesson 4 is needed.</>,
          <><Em>"Be more confident."</Em> Tends to make the model more confident in wrong answers too. Calibration is the goal, not blanket confidence.</>,
          <><Em>"Write in my voice."</Em> Without examples, this is unactionable. Give it 2–3 samples of your writing instead.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>Set custom instructions in Claude.ai or ChatGPT (whichever you use most). Use the recommended phrasing above. Then run your normal AI tasks for the next day.</P>
          <P>
            Notice the difference. Glaze drops by 50%+ in most outputs. After a week, decide whether to
            keep, tighten, or adjust. (Some people prefer some glaze — they find the matter-of-fact version
            slightly cold. Calibrate to your taste.)
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Constraint prompts for specific failure modes</H3>
        <P>
          Once you've removed the baseline glaze, you'll start noticing more specific failure modes worth
          adding constraints for:
        </P>
        <UL items={[
          <><Em>The "interesting question!" tic</Em> — "Don't compliment my question or the topic. Just answer."</>,
          <><Em>The hedging spiral</Em> — "Don't pre-emptively caveat. State your view. I'll ask for caveats if I want them."</>,
          <><Em>The "great question, here are 7 considerations" pattern</Em> — "If three considerations are sufficient, give me three. Don't pad to a longer list."</>,
          <><Em>The "let me know if you have questions" close</Em> — "Don't ask if I have more questions. I do, and I'll ask them."</>,
          <><Em>Excessive markdown</Em> — "Don't use bold or italics. Use plain text and paragraph breaks."</>,
          <><Em>The bullet-everything-tic</Em> — "Use paragraphs. Bullets only when there\'s a list of more than 4 parallel items."</>,
        ]} />

        <H3>The "you sound like a model" detector</H3>
        <P>
          A useful diagnostic prompt to apply to a draft you've made AI-assisted:
        </P>
        <Prompt>
          This is a draft I'm sending under my own name. Read it. Tell me three things that make it sound
          like AI wrote it. Then suggest plain-English replacements.
        </Prompt>
        <P>
          The AI is surprisingly good at spotting its own tells — long parallel sentence structures,
          academic vocabulary in the wrong context, "this is more than just X, it's also Y" rhetorical
          moves, "ultimately" / "fundamentally" / "navigating the landscape" / "embarking on a journey".
        </P>

        <H3>The prompt that turns the AI into your editor</H3>
        <Prompt>
          Read this draft. Don't rewrite it. Just give me a short list of:
          1. Sentences that don't carry their weight (could be cut).
          2. Phrases that sound generic.
          3. One thing that's actually good about this draft.

          Be specific and concrete. No general feedback.
        </Prompt>
        <P>
          One of the highest-value AI applications for any working professional: AI as a tough editor on
          your own writing, before you send it.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Run the "you sound like a model" detector on something you've recently sent that the AI helped you write.</P>
          <P>
            Even if the AI helped you, the final output should sound like you. The exercise above forces a
            check. After a month of using it, your "smells like AI" intuition gets sharper and you stop
            needing the check for the obvious cases.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Why is everything written by ChatGPT identifiable?', by: 'Simon Willison', url: 'https://simonwillison.net/series/llms/', note: 'Search "AI writing tells" on his blog. Excellent meta-analysis.' },
        { kind: 'paper',   title: 'Towards Understanding Sycophancy in Language Models', by: 'Sharma et al., 2023', url: 'https://arxiv.org/abs/2310.13548', note: 'The research underlying the no-glaze problem.' },
        { kind: 'article', title: 'Customising Claude with Custom Instructions',         by: 'Anthropic',       url: 'https://support.anthropic.com/en/articles/8553574-set-up-your-claude-ai-account', note: 'Step-by-step for setting default behaviour.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 3.4 — Iteration: refine, don't restart
// ============================================================
export function Iteration() {
  return (
    <>
      <BeginnerSection>
        <P>
          The single biggest mistake new AI users make is starting over when an answer isn't what they
          wanted. They write a new prompt, in a new chat, hoping for a better result. Almost always: the
          better move is to refine the prompt in the existing conversation.
        </P>

        <H2>Why iteration beats restart</H2>
        <UL items={[
          'The model has context from the previous turns. Starting over throws that away.',
          'Refining is faster: you tell it what to change instead of re-describing the whole task.',
          'You build a feedback loop that converges on what you want, instead of guessing better next time.',
        ]} />

        <H2>The vocabulary of refinement</H2>
        <P>Useful one-liners to follow up an unsatisfying answer:</P>
        <UL items={[
          <><Em>"Make it half as long."</Em> Crisper, more direct.</>,
          <><Em>"Cut the corporate-speak."</Em> Removes the management-consultancy register.</>,
          <><Em>"Stronger opinion. Don't hedge."</Em> Reduces wishy-washy answers.</>,
          <><Em>"Focus on [X] specifically. Drop the other points."</Em> Narrows scope.</>,
          <><Em>"Now critique your own answer. Where's it weakest?"</Em> Forces self-critique.</>,
          <><Em>"Try again with the opposite angle."</Em> Surfaces what the first answer missed.</>,
          <><Em>"Cite where each fact came from."</Em> Forces grounding.</>,
          <><Em>"Now write it as if you're being read by [different audience]."</Em> Shifts register.</>,
        ]} />

        <KeyCallout title="The big idea">
          Treat the conversation as the work, not the prompt as the work. You're not trying to write one
          perfect prompt — you're having a working conversation. Each turn refines what came before.
        </KeyCallout>

        <TryIt>
          <P>Pick a task you'd normally ask once. Instead, iterate. Open Copilot and:</P>
          <OL items={[
            'Ask the initial question (deliberately vague).',
            'After the answer, say "make it half as long".',
            'After that, say "drop the third point — focus on the first two".',
            'After that, say "give me the strongest counter-argument".',
            'After that, say "now write the final version, integrating the counter-argument as a brief acknowledgement".',
          ]} />
          <P>
            Five turns. You'll end up with something materially better than what you'd have got from one
            careful prompt. And the time was the same, because each refinement was short.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>When to start over</H3>
        <P>
          Iteration isn't always right. Sometimes you should start a fresh chat:
        </P>
        <UL items={[
          <><Em>The conversation has drifted</Em>, and the model is now stuck in a frame that's wrong for what you actually want.</>,
          <><Em>You've polluted context with bad data</Em> — you uploaded the wrong file, or pasted incorrect numbers. The model is still using those.</>,
          <><Em>The model has committed to a wrong answer</Em> and is now defending it. Sometimes a fresh perspective is faster than walking it back.</>,
          <><Em>You're shifting to a fundamentally different task</Em>. "Now help me draft a different email" is usually cleaner in a new chat.</>,
        ]} />
        <P>
          Most of the time, though, iteration wins. The rule of thumb: if your refinement is "do the same
          thing but better", iterate. If it's "actually I want a completely different thing", start over.
        </P>

        <H3>The "show me three options" pattern</H3>
        <P>
          When you don't know exactly what you want, ask for variety:
        </P>
        <Prompt>
          Give me three versions of this paragraph. Make them genuinely different — different tone,
          different structure, different angle. Then I'll tell you which to develop.
        </Prompt>
        <P>
          Often faster than iterating on a single attempt. You spot the elements you like across the three
          and combine.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "three versions then merge" pattern on a real task:</P>
          <Prompt>
            I need to write a [TYPE OF DOC]. Here\'s what it\'s about: [context].

            Give me three genuinely different draft openings. Vary the tone, structure, and angle. Don\'t
            give me three rewordings of the same thing.
          </Prompt>
          <P>
            Read all three. Pick the elements you like from each. Follow up with: "Combine the opening
            from version 2, the second paragraph from version 1, and the closing from version 3. Edit for
            consistency."
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The "draft → critique → rewrite" loop</H3>
        <P>
          A higher-order iteration pattern that often beats both single-shot and casual iteration:
        </P>
        <OL items={[
          'Ask the AI for a draft.',
          'In the same chat, ask: "Critique this draft as a tough editor. Be specific. No generic feedback."',
          'Then: "Rewrite incorporating the critique."',
          'Optionally: critique the rewrite. Repeat once.',
        ]} />
        <P>
          The model does its own QC pass. Often produces better final output than three rounds of you
          critiquing manually — because the model can be more candid with itself than the surface-level
          "improve this" prompt elicits.
        </P>

        <H3>The "diff" prompt</H3>
        <P>
          When iterating, sometimes you want to see what changed:
        </P>
        <Prompt>
          Rewrite this draft incorporating the critique. After you're done, briefly tell me which specific
          changes you made and why.
        </Prompt>
        <P>
          The "tell me what you changed" tells you whether the model actually addressed the critique or
          just shuffled words. Useful for catching cosmetic-only edits.
        </P>

        <H3>The session-resurrection trick</H3>
        <P>
          When you've had a great conversation but the chat is getting long and slow, you can capture the
          state and start a new chat:
        </P>
        <Prompt>
          Summarise our conversation as a context prompt I can paste into a new chat. Include: what we
          were trying to accomplish, key decisions and constraints, what's been done so far, what's next.
        </Prompt>
        <P>
          Then paste that summary into a fresh chat as your opening message. You get a clean context window
          back without losing the working state. This is essentially the technique that Anthropic uses for
          long-running agents.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Build the "draft → critique → rewrite" loop into a single prompt:</P>
          <Prompt>
            I need a [type of doc] on [topic]. Do three passes in one response:

            Pass 1 — Draft: [your specific requirements].
            Pass 2 — Critique: be a tough editor. Specific. No generic feedback.
            Pass 3 — Rewrite: integrate the critique. Be concrete about what you changed.

            Format each pass clearly so I can see all three.
          </Prompt>
          <P>
            One prompt, three artefacts, often noticeably better than a single-shot draft. Save this as a
            template.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'The iterative prompting workflow',     by: 'Ethan Mollick',    url: 'https://www.oneusefulthing.org/', note: 'Many of his posts cover iteration patterns; search his archive.' },
        { kind: 'video',   title: 'Working with Claude — iteration patterns', by: 'Anthropic',     note: 'Several videos in their developer playlist worth watching.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 3.5 — Templates and few-shot
// ============================================================
export function TemplatesAndFewShot() {
  return (
    <>
      <BeginnerSection>
        <P>
          For any prompt you'll write more than twice — make it a template. For tasks where the style is
          hard to describe — give it examples (called "few-shot" prompting). Both compound over time into
          a personal prompt library that saves dramatic amounts of effort.
        </P>

        <H2>Templates — your repeatable prompts</H2>
        <P>
          A template is a prompt with blanks you fill in. The structure is fixed; the specifics change.
          Example for client meeting prep:
        </P>
        <Prompt>
          I have a meeting with [CLIENT] in [TIMEFRAME]. The meeting is about [TOPIC].

          Background:
          - Last time we met: [SUMMARY]
          - Current status of the relationship: [STATUS]
          - What I want from this meeting: [GOAL]

          Help me prepare:
          1. Three things to lead with.
          2. Two questions the client might ask that I should pre-think.
          3. One specific outcome to push for, with reasoning.

          Keep it under 300 words.
        </Prompt>
        <P>
          Use this once a week for a month and you save real hours. The first time you build it takes 5
          minutes; every subsequent use takes 30 seconds.
        </P>

        <H2>Few-shot prompting — showing examples</H2>
        <P>
          For tasks where the style or format is hard to describe, examples beat instructions:
        </P>
        <Prompt>
          I need to write status updates in this style:

          Example 1:
          "Refinance project: docs back from bank, signing Friday. Two weeks ahead of plan."

          Example 2:
          "Q3 budget: $20k under, mostly due to delayed hiring. October will be a true test."

          Example 3:
          "Vendor X audit: completed, no findings, signing off."

          Now write status updates for these projects:
          - [project A: details]
          - [project B: details]
          - [project C: details]
        </Prompt>
        <P>
          The examples teach the AI the register — short, factual, no preamble, leading with the topic.
          Instructions alone wouldn't capture this as cleanly.
        </P>

        <KeyCallout title="The big idea">
          Templates make repeat tasks faster. Examples make hard-to-describe style instantly clear.
          Together, they're the difference between "I use AI occasionally" and "AI is part of my workflow."
        </KeyCallout>

        <TryIt>
          <P>Build your first template. Pick a task you do at least weekly. Then:</P>
          <OL items={[
            'Write the prompt as if you were asking the AI for the first time.',
            'Replace the specifics with [VARIABLES].',
            'Save it somewhere accessible — Notion / OneNote / Apple Notes / a text file.',
            'Use it the next time the task comes up.',
          ]} />
          <P>
            After a month, you'll have 5–8 templates that cover most of your repeated work. Each one saves
            ~5 minutes per use, which compounds to hours per week.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>How many examples are enough?</H3>
        <UL items={[
          <><Em>1 example (one-shot)</Em> — often enough for simple style transfer.</>,
          <><Em>3 examples (few-shot)</Em> — sweet spot for most tasks. Captures enough variation that the AI can generalise without being too rigid.</>,
          <><Em>5+ examples</Em> — useful for high-stakes consistency (e.g., legal language). Diminishing returns beyond 5.</>,
        ]} />

        <H3>The trick: vary your examples</H3>
        <P>
          Three examples that are all very similar teach the AI a narrow rule. Three examples that vary
          along the dimensions you care about teach the AI the actual style:
        </P>
        <UL items={[
          'Vary the topic — don\'t use three examples all about the same thing.',
          'Vary the length — show that short and longer both work.',
          'Vary the structure slightly — show the elements that matter and the ones that don\'t.',
        ]} />

        <H3>Templates can stack</H3>
        <P>
          A useful pattern: a "base template" for your standard work, plus specialised templates that
          extend it. Example:
        </P>
        <UL items={[
          <><Em>Base template</Em>: my standard preamble — no-glaze, plain language, push back if wrong.</>,
          <><Em>"Client memo" extension</Em>: + tone matching, audience considerations, structured format.</>,
          <><Em>"Board paper" extension</Em>: + length / structure rules, hedging where required, executive summary at top.</>,
          <><Em>"Internal Slack" extension</Em>: + casual register, brief.</>,
        ]} />
        <P>
          You don't always need the full stack. The base alone covers most casual use; the extensions kick
          in when needed.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "examples vary correctly" test:</P>
          <OL items={[
            'Write 3 examples of the same kind of output but vary topic, length, structure slightly.',
            'Use them in a prompt to generate a fourth output.',
            'Then write 3 examples that are nearly identical (same topic, same length, same structure).',
            'Use those to generate another output.',
            'Compare. The varied-examples version should produce a more flexible, less mechanical fourth output.',
          ]} />
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Structured templates with XML tags</H3>
        <P>
          For complex prompts, structuring with XML-style tags helps the model parse correctly. Anthropic
          documents this for Claude specifically, but it works across models:
        </P>
        <Prompt>
          {`<context>
          Audience: senior partners at a Big 4 audit firm
          Tone: cautious, professional, slightly conservative
          </context>

          <task>
          Draft a one-page memo explaining the new IFRS 18 standard's impact on energy companies.
          </task>

          <constraints>
          - Maximum 400 words
          - Use plain English where possible
          - Reference specific sections of IFRS 18
          - Do not speculate beyond what the standard says
          </constraints>

          <examples>
          [previous good memos you've written, pasted here]
          </examples>`}
        </Prompt>
        <P>
          The tags help the model separate "this is context I should use" from "this is the actual task" —
          especially useful when prompts get long.
        </P>

        <H3>Building a prompt evaluation harness</H3>
        <P>
          If you have a template you use heavily, treat it like code. Build a small eval:
        </P>
        <OL items={[
          'Collect 5 representative inputs you know the right answer for.',
          'Run them through the template. Score outputs 1–5.',
          'When you change the template, re-run the same inputs. Did the score go up or down?',
          'Track regressions before they compound.',
        ]} />
        <P>
          This is overkill for casual use but invaluable for any template that powers business-critical
          output (client communications, board reports, repeated reports).
        </P>

        <TryIt title="Try it (advanced)">
          <P>Build your first XML-structured template for a high-value task. Run it three times with different inputs. Notice the consistency you get vs an unstructured equivalent.</P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Anthropic — Use XML tags',                  by: 'Anthropic',       url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags', note: 'Their official guidance. Works across models.' },
        { kind: 'article', title: 'Few-shot prompting — best practices',       by: 'DAIR.AI',         url: 'https://www.promptingguide.ai/techniques/fewshot' },
        { kind: 'video',   title: 'Prompt engineering tips with Claude',       by: 'Anthropic',       url: 'https://www.youtube.com/@Anthropic-AI', note: 'Their developer videos. Mostly engineering-flavoured but worth skimming.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 3.6 — Build your personal prompt library
// ============================================================
export function PromptLibrary() {
  return (
    <>
      <BeginnerSection>
        <P>
          Every working professional should have a personal prompt library. It's the single highest-leverage
          investment you can make in your own AI productivity. After 2–3 months of casual maintenance,
          you have 20–30 reusable prompts that handle most of your repeat work in seconds.
        </P>

        <H2>What goes in the library</H2>
        <UL items={[
          "Prompts you've used more than twice.",
          'Templates with [VARIABLES] for repeated tasks.',
          'Constraint prompts you find yourself re-typing (your "no glaze" defaults).',
          'Critique prompts ("be a tough editor on this draft").',
          'Meeting prep prompts, status update prompts, email drafting prompts.',
          'Few-shot examples you\'ve curated.',
        ]} />

        <H2>Where to keep it</H2>
        <P>
          Anywhere you can paste fast. The discipline matters more than the tool:
        </P>
        <UL items={[
          <><Em>OneNote / Notion / Apple Notes</Em> — fine. Use a single page or a tagged notebook.</>,
          <><Em>A plain text file on your desktop</Em> — also fine, sometimes faster.</>,
          <><Em>Saved in the AI tool itself</Em> — Claude Projects, ChatGPT custom GPTs, Copilot's saved prompts in some tenants. Tighter integration but harder to migrate.</>,
        ]} />
        <P>
          The principle: the friction of finding and using a prompt has to be lower than the friction of
          re-writing it. Anything that meets that bar works.
        </P>

        <H2>Suggested starter structure</H2>
        <Prompt>
          # My Prompt Library

          ## Defaults (paste into every new chat)
          [your no-glaze block]

          ## Drafting
          ### Status update
          [template]
          ### Client email
          [template]

          ## Critique
          ### Tough editor pass
          [prompt]
          ### "Sounds like AI" detector
          [prompt]

          ## Meeting prep
          ### One-pager for a client meeting
          [template]

          ## Analysis
          ### Pros and cons (sceptical version)
          [prompt]
          ### "What would I have to believe?" check
          [prompt]
        </Prompt>

        <KeyCallout title="The big idea">
          A prompt library is your <Em>private AI infrastructure</Em>. After 3 months, looking at someone
          else's prompts feels primitive — you've built your own working language with AI, suited to your
          tasks, your style, your audience. That's the compounding return on AI literacy.
        </KeyCallout>

        <TryIt>
          <P>Start your prompt library now. Don't aim for completeness — aim for momentum:</P>
          <OL items={[
            'Open a new note in whatever tool you use.',
            'Title it "Prompts that worked".',
            'Add the first 2 entries: your no-glaze defaults, and the best prompt you\'ve written in the last week.',
            'Set yourself a goal: add one prompt a week for a month.',
          ]} />
          <P>
            Five prompts is the floor at which the library starts paying back. Twenty is when it becomes a
            real productivity multiplier.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Tagging and discoverability</H3>
        <P>
          Once you have ~15 prompts, you'll start losing track. Three tagging conventions worth using:
        </P>
        <UL items={[
          <><Em>By task type</Em>: #drafting #critique #analysis #meeting-prep #status</>,
          <><Em>By audience</Em>: #client #internal #board #team</>,
          <><Em>By status</Em>: #working (reliable) #experimenting (testing) #archived (used to work; no longer relevant)</>,
        ]} />
        <P>
          OneNote, Notion, Apple Notes, and most text editors support search-by-tag. A 30-second tagging
          investment makes the library findable later.
        </P>

        <H3>Curating quality — what to add, what not to add</H3>
        <P>
          Resist saving every prompt that worked once. The library is only valuable if entries are
          high-signal. Heuristics:
        </P>
        <UL items={[
          'Saved a prompt and didn\'t use it in 60 days → archive.',
          'Used a prompt 5+ times → ensure it has [VARIABLES] for the parts that change.',
          'You wrote a version that consistently outperforms the saved version → update the saved one.',
          "You're tweaking a prompt every time you use it → it isn't generic enough yet; refactor.",
        ]} />

        <H3>Sharing prompts within a team</H3>
        <P>
          One of the highest-leverage moves a team can make is having a shared prompt library. Five people
          contributing their best prompts produces a library no individual would build alone.
        </P>
        <P>Practical guardrails for a shared library:</P>
        <UL items={[
          'Don\'t share prompts that contain sensitive data (real client names, real numbers).',
          'Add a "use case" note next to each prompt so others know when it fits.',
          'Have one person curate (lightly) — otherwise quality drifts.',
          'Encourage forking — "here\'s my version of X" is more useful than arguments about the canonical version.',
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>The "audit your library" exercise (do after 4 weeks of building one):</P>
          <OL items={[
            'List every prompt in your library.',
            'Mark each: 5⭐ (use frequently), 3⭐ (use sometimes), 1⭐ (haven\'t used in 30 days).',
            'Archive the 1⭐ entries.',
            'Promote the 5⭐ entries: make them the "first paste" templates for new chats.',
            'Look for clusters — categories where you have many prompts. Those tell you what your real work is.',
          ]} />
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Version control your best prompts</H3>
        <P>
          For prompts you use heavily and improve over time, simple version control:
        </P>
        <UL items={[
          'Date or version each saved prompt: v1.0, v1.1, v2.0.',
          'When you change a prompt meaningfully, save the old version as a comment.',
          'Note what changed and why ("v1.2 — added "no bullet points unless 4+ parallel items").',
          'Roll back if a "newer" version turns out to underperform.',
        ]} />
        <P>
          Overkill for most users. Worth it if AI is a core production tool for your work.
        </P>

        <H3>The "AI-built AI library"</H3>
        <P>
          When you've used a prompt successfully for a few weeks, ask the AI to help you generalise it:
        </P>
        <Prompt>
          Here\'s a prompt I\'ve been using successfully for [task]. Help me generalise it so I can use it
          for similar tasks. Identify the variables. Suggest where it could be tightened. Show me the
          template version.

          [paste your prompt]
        </Prompt>
        <P>
          A good model will pull out variables you hadn't noticed and suggest small refinements. Effectively
          AI-assisted maintenance of your AI library.
        </P>

        <H3>The team operating system</H3>
        <P>
          At scale, shared prompt libraries become a kind of operating system for a team:
        </P>
        <UL items={[
          'New hires inherit institutional knowledge in a usable form.',
          'Quality of AI outputs across the team becomes more consistent.',
          'Onboarding takes hours instead of weeks for AI-relevant skills.',
          'Best practices spread laterally without formal training.',
        ]} />
        <P>
          This is the early-2000s spreadsheet moment for AI literacy. The teams that build this
          infrastructure compound a meaningful advantage.
        </P>

        <KeyCallout title="End of Module 3">
          You now have the prompting skill stack: structure, persona use, constraint discipline, iteration,
          templates, and a library. Almost all subsequent AI productivity comes from compounding these.
          <br /><br />
          Module 4 is the deep dive on Microsoft Copilot — the AI you actually have at work. Most of what
          you've learned in Module 3 applies; some of it has Copilot-specific wrinkles.
        </KeyCallout>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Awesome ChatGPT Prompts (GitHub)',         by: 'F.K.',           url: 'https://github.com/f/awesome-chatgpt-prompts', note: 'Crowd-sourced library. Useful for inspiration; don\'t copy without curating.' },
        { kind: 'article', title: 'The Prompt Engineering Guide — patterns', by: 'DAIR.AI',         url: 'https://www.promptingguide.ai/techniques' },
        { kind: 'video',   title: 'Building a personal AI workflow',          by: 'Various',         note: 'Search YouTube for "personal AI workflow" — many practitioners have made walkthroughs of their setup.' },
      ]} />
    </>
  )
}
