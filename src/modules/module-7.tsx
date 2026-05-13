/**
 * Module 7 — Multi-model workflows: the Council pattern
 *
 * Why one model is rarely the best answer for a whole task. How to
 * orchestrate two or three models so they catch each other's mistakes.
 * Aimed at intermediate users who have done some real prompting and
 * are now noticing the limits of any single model.
 */
import {
  P, H2, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 7.1 — Why use more than one model
// ============================================================
export function WhyMultiModel() {
  return (
    <>
      <BeginnerSection>
        <P>
          By now you've probably noticed something uncomfortable: every model has a personality, and
          every personality has blind spots. Claude is careful and verbose. ChatGPT is confident and
          sometimes overconfident. Gemini is broad and shallower. Copilot is bounded by your tenant.
          Ask the same question to all four and you'll get four different answers — sometimes subtly
          different, sometimes dramatically.
        </P>
        <P>
          The intuition most people start with is: <Em>pick the best one and stick with it.</Em> That
          works for routine work. But for anything where the cost of being wrong is meaningful — a
          board paper, a financial assumption, a legal interpretation, a strategy memo — one model is
          not enough. Not because any model is broken, but because no model knows what it doesn't know.
        </P>

        <H2>What "blind spots" actually means</H2>
        <P>
          Every frontier model was trained on a different mix of data, with different reinforcement
          signals, by a different team with different views about what "good" looks like. That means:
        </P>
        <UL items={[
          <><Em>Different facts feel more salient to different models.</Em> Two models can both answer a question correctly, but emphasise wildly different things as the "main point".</>,
          <><Em>Different models have different appetites for caution.</Em> Claude will often say "I'm not sure". ChatGPT will often answer anyway. Neither is wrong; they're calibrated differently.</>,
          <><Em>Different models hallucinate in different patterns.</Em> When Claude is uncertain about a citation, it tends to refuse. When ChatGPT is uncertain, it tends to invent one. If both agree on a citation, you should believe it more than if either gave it alone.</>,
          <><Em>Different models miss different errors when reviewing.</Em> Ask one model to critique another's work and you get review comments that are systematically different from the comments the original model would have made about itself.</>,
        ]} />
        <P>
          The trick of multi-model work is not "find the best model". It's <Em>use the disagreement
          between models as a signal</Em>. When two models agree, your confidence should go up. When
          they disagree, you have a useful place to dig in.
        </P>
      </BeginnerSection>

      <LevelUp tier="advanced">
        <P>
          If you treat each model as a noisy independent estimator of the right answer, then averaging
          their outputs (or having one critique another) is mathematically equivalent to running
          ensemble methods in statistics — you reduce variance without sacrificing much bias. This is
          why mixture-of-experts and self-consistency sampling work inside models, and why running
          multiple separate models works at the workflow level.
        </P>
        <P>
          The key word is <Em>independent</Em>. Two Claude conversations on the same prompt are not
          independent — they share weights, training data, and biases. Claude + ChatGPT are
          much closer to independent. That's where the leverage comes from.
        </P>
      </LevelUp>

      <H2>When multi-model is worth it</H2>
      <P>
        Not every task needs a council. Here's the honest taxonomy:
      </P>
      <UL items={[
        <><Em>Single model is fine:</Em> drafting an email, summarising a meeting, rewriting a paragraph, generating ideas, exploratory questions.</>,
        <><Em>Multi-model pays back:</Em> board papers, regulatory submissions, anything where a hallucinated number could embarrass you, anything where the wrong framing could cost real money.</>,
        <><Em>Multi-model is overkill:</Em> tasks where speed matters more than accuracy, tasks with a clear right answer that you can verify yourself in 30 seconds anyway.</>,
      ]} />

      <KeyCallout>
        The mental shift: stop asking "which model is best?" and start asking "where does one model
        fail in a way another model would catch?" That question is the entire premise of Module 7.
      </KeyCallout>

      <DeeperDive items={[
        { kind: 'paper', title: 'Self-Consistency Improves Chain of Thought Reasoning in Language Models', by: 'Wang et al.', note: 'The original "sample many answers, take the majority" paper. The intuition generalises to multi-model.' },
        { kind: 'article', title: 'Why Models Disagree', by: 'Anthropic research notes', note: 'Useful framing for thinking about model variance as signal rather than noise.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 7.2 — Critic vs author splits
// ============================================================
export function CriticAuthor() {
  return (
    <>
      <BeginnerSection>
        <P>
          The simplest multi-model pattern, and the one that pays back fastest, is the
          <Em> critic-vs-author split</Em>. One model writes; a different model reviews.
        </P>
        <P>
          You already do this with humans. You don't ask the person who wrote the report to also
          be the only person who proofreads it. They have a blind spot for their own work because
          they know what they meant. The same is true of language models.
        </P>

        <H2>The basic pattern</H2>
        <OL items={[
          <><Em>Author step.</Em> Ask Model A to do the actual work. Get a complete draft.</>,
          <><Em>Critic step.</Em> Paste the output into Model B with a prompt like "Review the following draft as a skeptical senior reviewer. Find the three weakest claims and explain why they're weak. Find any factual claims that need a citation. Flag anything that sounds confident but is actually a guess."</>,
          <><Em>Revise step.</Em> Take Model B's critique back to Model A (or do the revisions yourself) and produce a v2.</>,
        ]} />
        <P>
          The whole thing takes about 2× the time of a single-model workflow. The quality lift is
          usually larger than 2×, because the critique is finding errors that no amount of re-prompting
          a single model would surface.
        </P>
      </BeginnerSection>

      <H2>Why the critic prompt matters</H2>
      <P>
        Most people who try this pattern get weak results the first time. The reason is almost always
        the critic prompt. By default, models are trained to be helpful and agreeable, which means a
        prompt like "what do you think of this?" gets you "it's pretty good, here are some minor
        suggestions". That's worthless.
      </P>
      <P>
        The critic prompt has to be sharp. Try language like:
      </P>
      <Prompt>{`You are a skeptical senior reviewer. Your job is to find weaknesses in the
draft below, not to be encouraging. Specifically:

1. List the three weakest claims in the draft and explain why each is weak.
2. Identify any factual claims that should have a citation but don't.
3. Flag any sentence that sounds confident but is actually a guess.
4. Identify the most important thing the draft is missing.

Be direct. Do not soften your feedback. Do not list strengths.

[paste draft here]`}</Prompt>

      <TryIt>
        <P>
          Take a piece of work you produced with AI recently — an email, a memo, anything substantive.
          Paste it into a different model with the critic prompt above. Read what comes back. Most
          people are surprised: the critique finds things they (and the original model) missed.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          You might think you can save effort by asking the same model to critique its own work.
          You can — and it does help — but it helps much less than cross-model critique. The reason
          is that the same model has the same biases about what counts as a "weakness". It will
          consistently flag the kinds of weaknesses it was trained to flag and consistently miss the
          rest.
        </P>
        <P>
          A simple test: take a Claude draft, ask Claude to critique it, then ask ChatGPT to critique
          the same draft. Compare the two critiques. The overlap is usually small. That non-overlap
          is the value you'd be leaving on the table by sticking to one model.
        </P>
      </LevelUp>

      <H2>Practical splits that work well</H2>
      <UL items={[
        <><Em>Claude writes, ChatGPT critiques.</Em> Claude tends to be careful and a bit verbose. ChatGPT is good at spotting hedging and waffle.</>,
        <><Em>ChatGPT writes, Claude critiques.</Em> ChatGPT tends to be confident. Claude is good at spotting overconfidence and missing caveats.</>,
        <><Em>Gemini writes, Claude critiques.</Em> Gemini sometimes makes structural errors. Claude is good at structural review.</>,
        <><Em>Copilot writes (using your documents), Claude critiques (without them).</Em> Copilot finds source material; Claude tests whether the conclusions actually follow.</>,
      ]} />

      <KeyCallout>
        Author + critic is a 2× time cost for typically a much larger quality gain. For any work
        that needs to be defensible, this is the first multi-model pattern to adopt.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 7.3 — The Claude Council
// ============================================================
export function CouncilPattern() {
  return (
    <>
      <BeginnerSection>
        <P>
          The Council pattern is the next step up from critic-vs-author. Instead of two models in
          sequence, you assemble three or more models in parallel, ask them all the same question,
          and then look at the disagreement.
        </P>
        <P>
          The pattern got its name from a workflow people started running with the Claude family
          (Sonnet, Opus, Haiku — three sibling models with different sizes and slightly different
          calibrations). But the pattern works just as well across vendors: a council of Claude +
          ChatGPT + Gemini is more powerful than three Claudes, because the independence is real.
        </P>

        <H2>The structure</H2>
        <OL items={[
          <><Em>Pose the question.</Em> Write one careful prompt. Save it.</>,
          <><Em>Ask three models the same prompt.</Em> Three separate chats, the same input.</>,
          <><Em>Compare answers side by side.</Em> Look for: things all three agree on (probably true), things two of three agree on (probably true but worth checking), things only one says (most likely wrong or, occasionally, the unique insight).</>,
          <><Em>Synthesise.</Em> Either by hand, or by feeding all three answers into a fourth conversation and asking it to reconcile them.</>,
        ]} />
      </BeginnerSection>

      <H2>What the three signals mean</H2>
      <UL items={[
        <><Em>Unanimous agreement.</Em> All three models agree on a fact or a recommendation. Very high confidence. Move on.</>,
        <><Em>Two-of-three agreement.</Em> Two models agree, one disagrees. Worth a closer look — sometimes the dissenting model has noticed something real that the other two missed.</>,
        <><Em>All three disagree.</Em> This is the most useful signal. The question is genuinely ambiguous, or genuinely hard, or genuinely outside what models can reliably answer. Stop trusting any single answer and go to a primary source.</>,
        <><Em>One model says something none of the others mention.</Em> Treat as a hypothesis to verify, not a fact to use. Could be a hallucination; could be a genuine insight the others missed.</>,
      ]} />

      <LevelUp tier="intermediate">
        <P>
          Two models gives you agreement or disagreement — a binary signal. Three gives you the
          richer "majority vs minority" signal, which is much more useful for triaging where to dig.
        </P>
        <P>
          Five or more is usually overkill. The marginal model after the third adds less and less
          new signal (because they're not fully independent), and the synthesis step becomes painful.
          Three is the sweet spot for most professional work. Save four+ for stakes where the
          coordination cost is worth it (legal review, scientific synthesis, regulatory filings).
        </P>
      </LevelUp>

      <H2>A worked example</H2>
      <P>
        Suppose you're writing a board paper that needs a paragraph summarising the regulatory
        outlook for your industry over the next 2 years. You ask three models the same question:
      </P>
      <Prompt>{`Summarise the regulatory outlook for [your industry] in [your jurisdiction]
over the next 24 months. Highlight the three changes most likely to affect
operating costs. Cite your sources. Be precise about dates.`}</Prompt>
      <P>
        Claude returns three regulatory changes with dates and source notes. ChatGPT returns four,
        two of which overlap with Claude's. Gemini returns a broader narrative and mentions only
        one of Claude's three. Now you have a much richer picture:
      </P>
      <UL items={[
        <>The two regulatory changes that <Em>all three</Em> models mentioned independently are real and well-known. Use them.</>,
        <>The change <Em>only Claude</Em> mentioned: verify with a regulator's website before using.</>,
        <>The extra item from <Em>ChatGPT alone</Em>: same — verify.</>,
        <>The fact that <Em>Gemini gave a broader narrative</Em>: useful framing context. Don't take the narrative as fact, but use the framing for your paper's structure.</>,
      ]} />
      <P>
        You've now spent 20 minutes and have something close to what a junior analyst would have
        produced in half a day, with built-in cross-checking that a junior analyst would have
        skipped.
      </P>

      <TryIt>
        <P>
          Pick a question you'd genuinely like a good answer to — something with stakes, where you'd
          normally hesitate to trust one model. Ask Claude, ChatGPT, and Gemini (or Copilot) the
          same prompt, in three separate chats. Lay the three answers side by side. Notice where
          they agree and where they don't.
        </P>
      </TryIt>

      <KeyCallout>
        Three models asking the same question is one of the cheapest ways to dramatically reduce
        your risk of being wrong. The cost is 3× your tokens; the benefit is order-of-magnitude
        better confidence on the parts that matter.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 7.4 — Try it: orchestrate a Council
// ============================================================
export function TryItCouncil() {
  return (
    <>
      <BeginnerSection>
        <P>
          Time to actually run a Council. The exercise below is designed to take about 30 minutes
          and to leave you with a concrete artefact — a piece of work that's measurably better than
          any single model would have produced.
        </P>

        <H2>The exercise</H2>
        <P>
          Pick a real piece of work you currently owe someone. A memo, a slide deck outline, a
          briefing note, an analysis, a recommendation. Something where being wrong would matter.
          Don't pick a toy task; pick something where you'd genuinely benefit from a second and
          third opinion.
        </P>

        <H2>Step 1 — Write the prompt once</H2>
        <P>
          Spend 5 minutes writing one careful prompt. Include: the audience, the purpose, the
          constraints, what you want as output. Save it to a notes app — you're going to paste it
          three times.
        </P>
        <Prompt>{`Context: [who you are, what the work is for]
Audience: [who will read this]
Purpose: [what decision or action it should support]
Constraints: [length, tone, anything off-limits]
Task: [the specific output you want]
Format: [bullets, paragraphs, headings, etc.]`}</Prompt>
      </BeginnerSection>

      <H2>Step 2 — Ask three models</H2>
      <P>
        Open three separate chat windows: Claude, ChatGPT, and either Gemini or Copilot. Paste your
        prompt into each. Don't reuse a chat with prior context — start each one fresh. Wait for
        all three to finish.
      </P>

      <H2>Step 3 — Compare</H2>
      <P>
        Read all three outputs once before reacting. Then make a table (paper, whiteboard, or a
        plain text file) with three columns and rows for each major claim or recommendation. Tick
        the column when that model made the claim. Look at the pattern:
      </P>
      <UL items={[
        <><Em>Rows ticked by all three:</Em> the spine of your final answer.</>,
        <><Em>Rows ticked by two:</Em> probably good, worth a sentence each in the final version.</>,
        <><Em>Rows ticked by one:</Em> hypotheses. Verify the most interesting ones before using.</>,
        <><Em>Where the models disagree on the same point:</Em> the questions you need to think hardest about. This is where the human value-add is.</>,
      ]} />

      <H2>Step 4 — Synthesise</H2>
      <P>
        Two ways to do this. Both work.
      </P>
      <UL items={[
        <><Em>By hand.</Em> Write the final version yourself, drawing from each model's answer. This is slower but gives you the deepest understanding of the material.</>,
        <><Em>By delegated synthesis.</Em> Open a fourth chat (Claude is well-suited) and paste in your original prompt, then all three answers, and ask: "These are three different answers to the same question. Reconcile them into a single answer. Where they agree, use the agreed version. Where they disagree, note the disagreement and explain which side has the stronger argument." Then edit the result.</>,
      ]} />

      <LevelUp tier="intermediate">
        <P>
          The delegated-synthesis approach has one failure mode: the synthesising model can paper
          over real disagreements by smoothing them into a bland consensus. Watch for the phrase
          "all three answers agree that..." when in fact they didn't agree, they just used similar
          words. If you suspect this, ask the synthesising model: "where exactly did the three
          answers disagree, and how did you resolve each disagreement?"
        </P>
      </LevelUp>

      <H2>Step 5 — Reflect</H2>
      <P>
        Once you have the final artefact, take five minutes and write down:
      </P>
      <UL items={[
        <>What did the Council catch that a single model would have missed?</>,
        <>What was the one piece of advice that only one model gave, that you ended up keeping?</>,
        <>What was the one piece of advice that all three gave, but turned out to be wrong (or that you disagreed with)?</>,
        <>How much extra time did the Council cost, and was it worth it for this task?</>,
      ]} />
      <P>
        That reflection is what turns the Council from a curiosity into a repeatable workflow you'll
        reach for next time the stakes are high.
      </P>

      <TryIt>
        <P>
          Don't read on until you've actually run a Council on something real. The mechanics look
          obvious on the page; the value only shows up when you've done it.
        </P>
      </TryIt>

      <KeyCallout>
        The Council pattern is the highest-leverage multi-model workflow for most professional
        work. 3× the cost, often 5–10× the confidence on the parts that matter. The first time
        you catch a serious mistake this way, the time spent learning it pays back permanently.
      </KeyCallout>

      <DeeperDive items={[
        { kind: 'paper', title: 'Mixture of Agents', by: 'Together AI research', note: 'Formalises the Council pattern at the API level; the workflow you just did by hand is what they automate.' },
        { kind: 'article', title: 'Debate and Critique as Alignment Techniques', by: 'Various', note: 'Multi-model setups also show up in safety research; the same independence-as-signal logic applies.' },
      ]} />
    </>
  )
}
