/**
 * Module 1 — How AI actually works
 *
 * Each lesson exports a function component returning JSX with three tiers:
 *   - <BeginnerSection> (always visible at beginner+)
 *   - <LevelUp tier="intermediate"> (visible at int+, or with Show All)
 *   - <LevelUp tier="advanced"> (visible at advanced, or with Show All)
 *
 * Plus <TryIt>, <Prompt>, <CostNote>, <DeeperDive>, <KeyCallout>.
 */
import {
  P, H2, H3, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt, Prompt,
  CostNote, DeeperDive, KeyCallout, Aside,
} from '../components/Lesson'

// ============================================================
// Lesson 1.1 — What an LLM actually is
// ============================================================
export function WhatIsAnLLM() {
  return (
    <>
      <BeginnerSection>
        <P>
          An LLM — "large language model" — is a piece of software that predicts the next word in a sentence,
          based on patterns it learned from a vast amount of written text. That's it. That's the whole thing.
        </P>
        <P>
          When you type a question into Copilot or Claude or ChatGPT, the model reads your words and starts
          producing its answer one word at a time, asking itself at each step: <Em>"given everything I've
          seen so far — both your message and what I've already said — what is the most plausible next word?"</Em>
        </P>
        <P>
          That's why it sounds so natural. It's been trained on more sentences than any human will ever read.
          It's an extremely good autocomplete.
        </P>

        <H2>So why does it feel like it "understands"?</H2>
        <P>
          Because to predict the next word convincingly across millions of different topics, the model has had
          to learn a vast amount of structure: how grammar works, what facts tend to go together, how
          arguments are constructed, what tone fits what situation. Whether you call that "understanding" or
          "very, very good pattern matching" is partly a philosophical question. The practical effect, for
          you, is the same.
        </P>

        <KeyCallout title="The big idea">
          AI doesn't <em>know</em> things the way you know things. It's predicting plausible-sounding
          continuations of text. Most of the time that's enough. Sometimes it's not — and the lessons that
          follow are mostly about telling the two apart.
        </KeyCallout>

        <TryIt>
          <P>Open Copilot M365 (or any AI chat). Try these three prompts in order:</P>
          <Prompt>Complete this sentence: "The capital of France is..."</Prompt>
          <Prompt>Complete this sentence: "The capital of the world's least-known country is..."</Prompt>
          <Prompt>Complete this sentence: "The thing I had for breakfast today was..."</Prompt>
          <P>
            Notice: the first one has a single right answer — and you'll get it. The second has no
            "right" answer — the AI will give you something that <em>sounds plausible</em>. The third has a
            right answer the AI <em>cannot possibly know</em> — but it'll happily make one up. That's
            prediction in action.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>What's actually happening: tokens, attention, prediction</H3>
        <P>
          When you send a prompt, the model breaks your words into <Em>tokens</Em> — small pieces, roughly
          0.75 of an English word each. So <code>"unbelievable"</code> might be three tokens:{' '}
          <code>un</code> · <code>believ</code> · <code>able</code>.
        </P>
        <P>
          The model then runs every token through a deeply layered network that uses something called
          <Em> attention</Em> — a mathematical operation that lets each token "look at" all the other tokens
          to figure out which ones matter most. After many layers of this, the model outputs a probability
          for every possible next token (out of ~50,000–100,000 in its vocabulary).
        </P>
        <P>
          It picks one — usually the most likely, sometimes with a bit of randomness for variety — and the
          process repeats for the token after that. And the one after. Until it decides to stop.
        </P>

        <H3>Training vs. inference</H3>
        <P>
          The "learning" happened once, before you ever met the model — that's <Em>training</Em>. It involved
          feeding the model trillions of words and adjusting its internal weights so its predictions got
          better. Then it was <Em>fine-tuned</Em> with human feedback to make it helpful and safe.
        </P>
        <P>
          Every time you chat with it now, that's <Em>inference</Em> — the model is running, but it's not
          learning. It doesn't remember you between sessions (unless explicitly given memory).
          Each conversation is a fresh autocomplete session, primed only by what's in the current context.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Ask the same question three times in three new chats:</P>
          <Prompt>What's the most interesting thing about the year 1973?</Prompt>
          <P>
            Notice that the answers vary. That's the small amount of randomness ("temperature") the model
            uses by design — it's not deterministic. Try asking the same model "explain why your answers
            varied" — it can describe the mechanism in its own words.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The maths in 60 seconds</H3>
        <P>
          A modern LLM is a stack of <Em>transformer blocks</Em>. Each block has two main pieces: a
          multi-head <Em>self-attention</Em> layer, and a feed-forward network. Self-attention computes,
          for every token, three vectors — query <code>Q</code>, key <code>K</code>, value <code>V</code>{' '}
          — and uses them to weigh how much each other token should influence the current one
          (<code>softmax(QKᵀ / √d) · V</code>).
        </P>
        <P>
          Stack 30–100 of these blocks, each operating in parallel across millions of tokens, and you get a
          system that can model arbitrarily complex dependencies in language. <Em>Scaling laws</Em> — work
          mostly by Kaplan et al. (OpenAI, 2020) and Hoffmann et al. (Chinchilla, DeepMind, 2022) — showed
          that performance improves predictably with more parameters and more training data. That's why
          frontier labs spend billions on training: it works.
        </P>
        <P>
          What's still being figured out: which capabilities are <Em>emergent</Em> (only appear above a
          certain scale), how much of the model's behaviour comes from training data vs. fine-tuning, and
          whether continuing to scale will keep producing gains or eventually plateau.
        </P>

        <TryIt title="Try it (advanced)">
          <P>
            Ask Claude.ai (free tier) and Copilot the same prompt, then compare:
          </P>
          <Prompt>
            Walk me through what happens computationally between me pressing enter on this prompt and you
            producing your first token. Be specific about attention, embeddings, and sampling.
          </Prompt>
          <P>
            Two reveals to look for: (a) which model gives a more accurate technical answer, and (b) does
            either acknowledge what it <em>doesn't</em> know about its own architecture? (Hint: they should.)
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Every word you send and every word the AI produces costs <em>tokens</em>. In Copilot M365 the
          cost is covered by your enterprise licence — you don't see it. In the consumer products (ChatGPT
          free, Claude.ai free), you get a generous-but-limited number of messages per day. In the APIs
          (OpenAI, Anthropic), you pay per token, and long conversations or large pasted documents add up
          fast. We'll come back to this in Lesson 5 (Context windows and tokens) and again in Module 2.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'video',   title: 'But what is a neural network?', by: '3Blue1Brown', url: 'https://www.youtube.com/watch?v=aircAruvnKk', note: 'The single best intuition-building video on neural networks. 19 minutes. Watch it.' },
        { kind: 'video',   title: "Let's build GPT: from scratch, in code, spelled out.", by: 'Andrej Karpathy', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY', note: 'For the brave: an ex-OpenAI / ex-Tesla engineer rebuilds a small GPT live. 2 hours.' },
        { kind: 'article', title: 'What Is ChatGPT Doing… and Why Does It Work?', by: 'Stephen Wolfram', url: 'https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/', note: 'Long but the clearest written explanation aimed at non-engineers.' },
        { kind: 'book',    title: 'Co-Intelligence', by: 'Ethan Mollick', note: 'Penguin, 2024. The most-cited mainstream book on living and working with AI. Worth reading twice.' },
        { kind: 'podcast', title: 'Latent Space', by: 'swyx & Alessio',           url: 'https://www.latent.space/podcast', note: 'The deep-end AI podcast. Weekly. Episodes 60–80 are a great onramp.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 1.2 — Neural networks without the maths
// ============================================================
export function NeuralNetworks() {
  return (
    <>
      <BeginnerSection>
        <P>
          A neural network is a stack of mathematical layers that learn patterns from examples. The "neural"
          name comes from a loose analogy with brain cells, but you can ignore the analogy — it doesn't help.
        </P>
        <P>
          A better analogy is mail sorting. Imagine a sorting facility where letters pass through several
          rooms in sequence. The first room sorts by country. The second sorts by city. The third by suburb.
          The fourth by street. By the time the letter has been through every room, it's been categorised
          along several dimensions at once.
        </P>
        <P>
          A neural network does roughly that, except each "room" is doing maths on numbers, not reading
          addresses — and the rules for which letter goes where in each room aren't hand-written by humans.
          They were <Em>learned</Em>, by showing the network millions of examples and letting it adjust.
        </P>

        <H2>Input → middle layers → output</H2>
        <P>
          For an LLM: your prompt becomes a long list of numbers (one number per token), those numbers pass
          through dozens of layers, and at the end the network produces a probability distribution over every
          possible next token. The middle layers are where the work happens — the network has discovered
          patterns at every level of abstraction, from "what letter usually follows what letter" all the way
          up to "what kind of argument is this person trying to make."
        </P>

        <KeyCallout title="The big idea">
          Neural networks aren't programmed. They're <em>trained</em>. Humans don't write the rules; the
          network finds them by being shown enough examples. That's both why they're so flexible — and why
          they're sometimes mysteriously wrong.
        </KeyCallout>

        <TryIt>
          <P>Ask Copilot:</P>
          <Prompt>
            Explain how a neural network works using a non-technology analogy. Then critique your own
            analogy and tell me where it breaks down.
          </Prompt>
          <P>
            Two things to notice: (a) how good the analogy is (some models pick richer ones than others),
            and (b) whether the model can spot the limits of its own framing. The "critique your own analogy"
            half is where you'll see real reasoning.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>How they learn — backpropagation in one paragraph</H3>
        <P>
          You show the network a question. It guesses. You tell it the right answer. It compares its guess to
          the right answer using a <Em>loss function</Em> (a number that says "how wrong were you"). Then it
          calculates which of its millions of internal numbers, if nudged slightly, would have made the guess
          a bit closer to right — and nudges them. Just a bit. Then repeat with the next example. And the
          next. For trillions of examples. That's training.
        </P>
        <P>
          The "calculate which numbers to nudge" step is called <Em>backpropagation</Em>. It's just calculus,
          applied through every layer of the network in reverse, telling each weight how much it contributed
          to the error.
        </P>

        <H3>What does a "layer" do, really?</H3>
        <P>
          Two main kinds of work happen inside a modern LLM's layers:
        </P>
        <UL items={[
          <>
            <Em>Attention</Em> — each token in your prompt gets to "look at" all the other tokens and decide
            which are relevant. This is how the model understands references ("she" → "the doctor"), grammar
            ("not just X but Y"), and long-range dependencies.
          </>,
          <>
            <Em>Feed-forward</Em> — between attention layers, each token's representation gets transformed
            by a mini-network that mixes and re-mixes the information. This is where most of the model's
            "knowledge" appears to be stored.
          </>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <Prompt>
            Explain backpropagation to me using an analogy from learning to throw a basketball into a hoop.
            Then explain where the analogy breaks down.
          </Prompt>
          <P>This is a classic Karpathy-style framing — and a great test of how clearly an AI can explain a real ML concept.</P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Why transformers beat recurrent networks for language</H3>
        <P>
          Before 2017, language models were mostly <Em>recurrent</Em> (RNN, LSTM) — they processed tokens one
          at a time, carrying forward a "hidden state". This was slow and lost information over long
          sequences. The 2017 transformer paper (Vaswani et al., <em>Attention Is All You Need</em>) proposed
          a different design: process all tokens in parallel using self-attention. Faster to train,
          better at long-range dependencies, and — critically — easier to scale across many GPUs.
        </P>
        <P>
          Three additional engineering tricks made transformers work at scale: <Em>residual connections</Em>{' '}
          (each layer adds to rather than replaces its input, easing gradient flow), <Em>layer norm</Em>{' '}
          (stabilises training), and <Em>positional encoding</Em> (because attention by itself doesn't
          care about word order, you have to bolt that in).
        </P>

        <Aside title="What's still being figured out">
          Mechanistic interpretability is the research field trying to reverse-engineer what individual
          attention heads and feed-forward neurons are actually computing. Anthropic's circuits work and
          OpenAI's microscope project are the leading public efforts. Most of what we know is still
          fragmentary.
        </Aside>

        <TryIt title="Try it (advanced)">
          <Prompt>
            Pick a single research paper that changed deep learning between 2015 and 2022. Explain its
            contribution, what came before, and what came after. Be specific about the technical idea.
          </Prompt>
          <P>
            Run this through two models. The good answers will pick something well-justified (Adam,
            transformer, BERT, GPT-2, AlphaGo, CLIP) and explain the lineage. The weak answers will give you
            a survey instead of a focused choice. That's a useful tell about a model's depth.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'video',   title: 'Neural networks (4-part series)',       by: '3Blue1Brown',           url: 'https://www.3blue1brown.com/topics/neural-networks', note: 'Visualised, paced, beautiful. Skip the maths if you want; the diagrams alone are worth it.' },
        { kind: 'video',   title: 'Spelled-out intro to neural networks and backpropagation', by: 'Andrej Karpathy', url: 'https://www.youtube.com/watch?v=VMj-3S1tku0', note: 'Builds a tiny network from scratch in Python. Live coding. The clearest version of backprop ever filmed.' },
        { kind: 'article', title: 'The Illustrated Transformer', by: 'Jay Alammar', url: 'https://jalammar.github.io/illustrated-transformer/', note: 'If you only read one explainer about transformers, read this one.' },
        { kind: 'paper',   title: 'Attention Is All You Need', by: 'Vaswani et al. (2017)', url: 'https://arxiv.org/abs/1706.03762', note: 'The paper that started the modern era. Even non-engineers can skim the diagrams.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 1.3 — Training, fine-tuning, RAG
// ============================================================
export function TrainingFineTuningRAG() {
  return (
    <>
      <BeginnerSection>
        <P>
          When people talk about "AI", three different processes get jumbled together. Telling them apart is
          the single most useful piece of mental clarity you can take away from this module.
        </P>

        <H2>1. Training — the AI company's job</H2>
        <P>
          Training is what happens before the model meets you. The AI company (Anthropic, OpenAI, Google,
          Microsoft) feeds the model trillions of words and adjusts its internal weights until it can predict
          text well. Then they do a second pass — <Em>fine-tuning with human feedback</Em> — to teach it to
          be helpful, harmless, and follow instructions. By the time the model is "released", training is
          done. You don't train the model. The model doesn't learn from your chats.
        </P>

        <H2>2. Fine-tuning — specialising a base model</H2>
        <P>
          Fine-tuning is when someone (you, your company, a vendor) takes an already-trained model and
          teaches it a specific task or style by showing it more examples. Common use cases: train a model on
          all of your company's tone-of-voice docs so it writes more like you, or train it on a domain (legal
          contracts, medical notes) so it speaks that dialect more fluently.
        </P>
        <P>
          For 99% of working professionals, fine-tuning is <Em>not</Em> what you want. It's expensive,
          requires technical setup, and — surprise — usually isn't actually necessary. Which brings us to:
        </P>

        <H2>3. RAG — give the model the right document at the right moment</H2>
        <P>
          RAG stands for <Em>retrieval-augmented generation</Em>. In plain English: when you ask the AI a
          question, the system first finds the most relevant documents (your emails, files, a knowledge base)
          and pastes them into the prompt before the model answers. The model is now answering with the right
          source material at its fingertips.
        </P>
        <P>
          This is what makes Copilot in your work environment so different from ChatGPT.com. Copilot is doing
          RAG against your Microsoft Graph — your emails, files, calendar, Teams messages. When you ask "what
          did John say about the budget last week?" it actually goes and looks. That's RAG. It's the most
          important architecture pattern in modern AI use.
        </P>

        <KeyCallout title="The big idea">
          Training is once-off and you can't do it. Fine-tuning is rare and usually unnecessary. <Em>RAG —
          giving the model the right source material — is the technique you'll use almost every day, often
          without realising it.</Em>
        </KeyCallout>

        <TryIt>
          <P>Try the same question in two modes. In Copilot Chat:</P>
          <Prompt>What did we decide in last Wednesday's leadership meeting?</Prompt>
          <P>
            That's RAG — Copilot will look through your meeting notes, transcripts, and emails. Now try the
            same question in ChatGPT.com or Claude.ai with no documents attached:
          </P>
          <Prompt>What did we decide in last Wednesday's leadership meeting?</Prompt>
          <P>
            Without your source documents, it can't possibly answer. Compare the two responses. The
            difference is everything.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>How RAG works under the hood</H3>
        <P>Three steps every time you ask a RAG-powered AI a question:</P>
        <OL items={[
          <><Em>Retrieve.</Em> The system takes your question, converts it into a mathematical fingerprint (an "embedding"), and searches a database for documents with similar fingerprints. It usually returns the top 3–10.</>,
          <><Em>Augment.</Em> The system pastes those documents into the prompt, alongside your original question.</>,
          <><Em>Generate.</Em> The model now answers your question with the relevant text right there in front of it.</>,
        ]} />
        <P>
          The quality of the answer depends on the quality of the retrieve step. Bad retrieval — the system
          pulled the wrong documents — produces confidently-wrong answers (which is exactly what hallucination
          looks like; we'll come back to that next lesson). Good retrieval gets you answers that <Em>actually
          cite your data</Em>.
        </P>

        <H3>When fine-tuning <em>does</em> make sense</H3>
        <P>It's rare, but here's the shortlist:</P>
        <UL items={[
          'You need consistent tone of voice across thousands of outputs (and showing examples in every prompt is impractical).',
          'You need the model to output structured data in a specific format reliably.',
          'You need it to use vocabulary or conventions that aren\'t well-represented in the base training data (very technical domains).',
        ]} />
        <P>
          For everything else: write better prompts, or give the model the right source documents.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>Paste a long article (10+ pages) into Claude.ai or Copilot Chat:</P>
          <Prompt>
            Summarise this article in 5 bullet points. For each bullet, include the exact quote it comes
            from. If you can't find a quote to support a bullet, say so.
          </Prompt>
          <P>
            This is RAG-by-paste — the simplest form. The "quote it" instruction is the key bit; it forces
            the model to ground its summary in the source rather than fabricating.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The spectrum: prompting → RAG → fine-tuning → training</H3>
        <P>
          Think of it as a cost / capability ladder.
        </P>
        <UL items={[
          <><Em>Prompting</Em> — instant, cheap, lossless to switch between models. Try this first. Always.</>,
          <><Em>RAG</Em> — moderate effort to set up (you need an index, an embedding model, retrieval logic). Once built, hugely powerful. Doesn't require any model retraining.</>,
          <><Em>Fine-tuning</Em> — requires labelled training data, GPU time, evaluation infrastructure. Use only when prompting and RAG have failed.</>,
          <><Em>Training from scratch</Em> — millions to billions of dollars. Effectively nobody outside frontier labs does this.</>,
        ]} />

        <H3>Advanced RAG patterns</H3>
        <P>If you want to dig deeper into how production RAG systems work, the terms to search:</P>
        <UL items={[
          <><Em>Dense vs sparse retrieval</Em> — embeddings vs. keyword matching, often combined ("hybrid retrieval").</>,
          <><Em>Re-ranking</Em> — a second model that re-orders the top results from retrieval for quality.</>,
          <><Em>Multi-hop reasoning</Em> — chaining retrieval steps for complex questions ("what was the budget impact of the decision in the meeting referenced in last Tuesday's email?").</>,
          <><Em>Vector databases</Em> — Pinecone, Weaviate, Qdrant, pgvector — the storage layer for embeddings.</>,
        ]} />

        <TryIt title="Try it (advanced)">
          <P>Open Claude.ai and create a <Em>Project</Em>. Upload 5–10 documents you actually work with — meeting notes, contracts, internal docs. Then ask:</P>
          <Prompt>
            Across all these documents, what are the three biggest themes? For each theme, cite which
            document(s) support it.
          </Prompt>
          <P>
            That's a managed RAG system you just used. Claude Projects, ChatGPT custom GPTs, Copilot Studio
            agents, and OpenAI Assistants all implement variations of this.
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          RAG sends more tokens than a plain prompt (because the retrieved documents are pasted in). In
          Copilot M365 you don't see the cost. In Claude.ai / ChatGPT free tiers, long documents eat your
          daily quota faster. In APIs, costs add up: a 10-page document can cost 5–10x what a normal
          conversation costs. The reliability is almost always worth it.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'video',   title: 'What is RAG?',                                by: 'IBM Technology',         url: 'https://www.youtube.com/watch?v=T-D1OfcDW1M', note: '8 minutes. Cleanest mainstream explainer.' },
        { kind: 'article', title: 'A Brief Introduction to LoRA and Fine-tuning', by: 'Hugging Face',           url: 'https://huggingface.co/blog/lora', note: 'If you want to understand fine-tuning specifically.' },
        { kind: 'article', title: 'Anthropic — Building Effective Agents',        by: 'Anthropic',              url: 'https://www.anthropic.com/research/building-effective-agents', note: 'Best single piece on when to use prompts vs. RAG vs. agents.' },
        { kind: 'podcast', title: 'The AI Daily Brief',                           by: 'Nathaniel Whittemore',   url: 'https://www.youtube.com/@AIDailyBrief', note: 'Short daily episodes on AI news in business context. Easy onramp.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 1.4 — Hallucination (the big one)
// ============================================================
export function Hallucination() {
  return (
    <>
      <BeginnerSection>
        <P>
          You've heard this one: "AI is confidently wrong, and that's the worst." It's the single biggest
          reason smart professionals are hesitant to lean on AI for real work.
        </P>
        <P>
          The fear is valid. AI <Em>will</Em> make up facts, citations, quotes, statistics, names, and
          dates. It will do this with the same confidence it uses for correct information. There is no
          built-in tell. This is real.
        </P>
        <P>
          The good news is that this lesson is mostly about one fix — and once you internalise it, the fear
          stops being a blocker.
        </P>

        <H2>Why this happens — and why it isn't really a bug</H2>
        <P>
          Remember Lesson 1: an LLM's job is to predict plausible next words. "Plausible" and "true" are not
          the same thing. If you ask "who won the 2008 Nobel Prize in Physics?", the model has seen enough
          training text to predict the correct names. But if you ask something it doesn't actually know — or
          asks about events after its training cutoff, or asks for a citation that doesn't exist — the model
          will still produce something <Em>plausible-sounding</Em>. That's its job. It can't easily
          distinguish "I know this" from "I'm pattern-matching what an answer like this usually looks like."
        </P>
        <P>That's hallucination. It's not a bug. It's the way the technology works.</P>

        <H2>The single biggest fix: ground the model in source material</H2>
        <P>
          When you point the AI at documents — your emails, a PDF you've pasted in, a SharePoint folder, a
          Project's knowledge base — the model is no longer guessing about facts. It's reading them. The
          hallucination rate on factual questions drops <Em>dramatically</Em> when answers can be drawn
          directly from a source.
        </P>
        <P>Concretely, this means:</P>
        <UL items={[
          <>Using <Em>Copilot in your work environment</Em> instead of consumer ChatGPT for anything involving company information. Copilot grounds in your Microsoft Graph automatically.</>,
          <><Em>Pasting the source document</Em> into Claude or ChatGPT when you need them to summarise or analyse something specific. Don't ask "what does our refund policy say?" — paste the policy.</>,
          <>Using <Em>Claude Projects</Em> or <Em>ChatGPT custom GPTs</Em> to set up a persistent knowledge base of source documents you reference often.</>,
          <>Turning on <Em>web search</Em> when asking about current events. Most major AIs now have this; without it they'll happily hallucinate "current" news from their training cutoff.</>,
        ]} />

        <KeyCallout title="The Praxis rule of thumb">
          If the answer depends on facts the AI couldn't possibly know — your data, recent events,
          specific citations — <Em>give it the source material</Em>. If you can't, treat the answer as a
          starting draft, not a finished answer.
        </KeyCallout>

        <H2>Does grounding eliminate hallucination?</H2>
        <P>
          Not completely — but it reduces it from a near-certainty on specific factual questions to a much
          rarer event. Even with sources, a model can still:
        </P>
        <UL items={[
          'Misattribute a quote (paraphrasing as if it were a direct quote).',
          'Hallucinate connections between documents that aren\'t there.',
          'Pull a fact from training data and present it as if it came from your source.',
          'Get a number slightly wrong (off-by-one errors are common).',
        ]} />
        <P>So the second rule:</P>

        <H2>Verify the things that matter</H2>
        <P>You don't need to verify everything. You do need to verify:</P>
        <UL items={[
          <><Em>Numbers</Em> — dollar amounts, percentages, counts, dates. AI is unreliable with arithmetic and remembers numbers fuzzily.</>,
          <><Em>Citations and quotes</Em> — author, paper title, page number, exact wording. Ask the AI to show you the source text verbatim. If it can't, treat it as uncertain.</>,
          <><Em>Names and titles</Em> — especially for people in your company or industry.</>,
          <><Em>Anything you'd be embarrassed to be wrong about in front of your boss.</Em></>,
        ]} />

        <H2>The verification workflow that actually works</H2>
        <OL items={[
          'Get the AI\'s answer.',
          'Underline (mentally or literally) the 1–3 facts in it that actually matter.',
          'For each one, ask the AI: "Show me the exact source text or paragraph this came from." If it\'s grounded, it can. If it can\'t, the fact is suspect.',
          'For numbers, ask: "Walk me through the calculation step by step." Errors usually appear in the working.',
          'For anything still in doubt — Google it, check the original doc, or ask a colleague.',
        ]} />

        <TryIt>
          <P>This is the most important Try It in Module 1. Do both halves.</P>

          <Em>Half 1 — see hallucination happen.</Em>
          <Prompt>
            Give me a list of 5 academic papers on transformer architecture from 2019, with full titles,
            authors, journal names, and DOIs.
          </Prompt>
          <P>
            Run this in Claude.ai or ChatGPT free with web search <Em>off</Em>. You will get five very
            convincing-looking papers. Try to find any of them in a real search engine. Most — possibly all —
            won't exist. The model has hallucinated them. The author names are real. The titles sound real.
            The DOIs follow the right format. None of it is true. <Em>This is the worst case of AI failure
            and it's easy to reproduce.</Em>
          </P>

          <Em>Half 2 — same question, grounded.</Em>
          <Prompt>
            Search the web for 5 real academic papers on transformer architecture from 2019. Cite only
            papers you can find verbatim with a real working URL. If you can't find 5, tell me.
          </Prompt>
          <P>
            Run this in Copilot M365, or any AI with web search on. The answers will be fewer, slower,
            sometimes paraphrased differently — but they'll be real. Notice how the model behaves
            differently when forced to ground its answer.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Why models <em>sound</em> so confident</H3>
        <P>
          Modern LLMs are fine-tuned to be helpful — and "I'm not sure" doesn't read as helpful. The
          fine-tuning process (RLHF, RLAIF, constitutional AI) explicitly rewards confident, structured,
          complete-sounding answers. So even when the underlying model isn't sure, the surface layer is
          trained to deliver the answer in a confident register.
        </P>
        <P>
          Different models calibrate this differently. <Em>Claude</Em> is trained explicitly toward
          acknowledging uncertainty — you'll often see "I'm not certain about this, but..." or "I don't have
          information on..." caveats. <Em>ChatGPT</Em> tends to be more confidently helpful by default.
          Gemini is somewhere in between. None of them are perfectly calibrated.
        </P>

        <H3>Prompting techniques that reduce hallucination</H3>
        <UL items={[
          <><Em>"Cite sources or say you don't have one."</Em> — Tell the model up front that it has permission to say "I don't know". Watch the answer change.</>,
          <><Em>"Rate your confidence 1–10 and explain why."</Em> — Forces the model to expose its uncertainty. Confidence below 7 is a flag to double-check.</>,
          <><Em>"Show your reasoning step by step."</Em> — Catches arithmetic errors and logical jumps that hide in confident prose.</>,
          <><Em>"Use only information from the document I provided."</Em> — Explicit grounding instruction. Reduces drift into training-data territory.</>,
          <><Em>"If a part of this question requires information you can't verify, flag that part."</Em> — Asks the model to separate the verifiable from the speculative.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>Run this prompt in two ways:</P>

          <P><Em>Version A (default):</Em></P>
          <Prompt>
            What were the top three findings of the AEMO Integrated System Plan 2024?
          </Prompt>

          <P><Em>Version B (calibrated):</Em></P>
          <Prompt>
            What were the top three findings of the AEMO Integrated System Plan 2024? For each finding:
            (a) state your confidence 1–10, (b) tell me the exact source you're drawing from or say you
            can't recall a specific source.
          </Prompt>
          <P>
            Version A will sound great and may be partly wrong. Version B will be slower, sometimes hedgier,
            and more reliable. Try both on the same model and compare.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The research view</H3>
        <P>
          Hallucination is one of the most-studied failure modes in modern LLMs. Two findings worth knowing:
        </P>
        <UL items={[
          <><Em>Calibration research</Em> (Kadavath et al., Anthropic 2022) — models are well-calibrated <em>below</em> ~70% confidence but systematically over-confident above. So when an LLM is "very sure", you should treat that with measured scepticism; when it expresses real uncertainty, that signal is reliable.</>,
          <><Em>Sycophancy</Em> (Sharma et al., 2023) — RLHF-trained models will agree with their conversation partner more than they should, including changing factual answers to match what the user seems to want. The fix: don't ask leading questions. "Am I right that X?" gets you "yes, you are." "What's the case for and against X?" gets you a balanced answer.</>,
        ]} />

        <H3>Production-grade hallucination mitigation</H3>
        <P>
          If you're building tools that use LLMs (Module 6, Claude Code), there's a stack of techniques worth knowing:
        </P>
        <UL items={[
          <><Em>Constrained generation</Em> — force the model to output structured JSON / SQL / specific formats. Reduces the surface area for fabrication.</>,
          <><Em>Self-consistency</Em> — ask the same question multiple times at high temperature and check for agreement. Disagreement = uncertainty.</>,
          <><Em>Verification chains</Em> — one LLM generates, a second LLM verifies against sources, a third synthesises. Each step adds reliability.</>,
          <><Em>Tool use</Em> — make the model call out to calculators, search APIs, databases instead of "knowing" the answer. Modern Claude and ChatGPT do this well; agents make it explicit.</>,
        ]} />

        <TryIt title="Try it (advanced)">
          <P>Build a two-step verification chain manually:</P>
          <P><Em>Step 1 (in Claude.ai):</Em></P>
          <Prompt>
            Draft a 200-word executive summary of [your topic here], citing 3 specific facts.
          </Prompt>
          <P><Em>Step 2 (in ChatGPT, separately):</Em></P>
          <Prompt>
            Below is a draft summary. For each factual claim, tell me whether it's likely true, likely
            false, or unverifiable without a source. Be conservative: flag anything you can't verify with high
            confidence.
            {'\n\n'}[paste Claude's output here]
          </Prompt>
          <P>
            That's a Council pattern in miniature. Module 7 covers it properly — but you can use it
            tomorrow on any high-stakes draft.
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Grounding (RAG, pasting sources, web search) costs more tokens than ungrounded prompting — sometimes
          5–10x more. In Copilot M365 you don't pay per token; in APIs you do. For anything where accuracy
          matters, the cost is trivially worth it. A 50¢ extra spend to avoid an embarrassingly wrong board
          memo is a great deal.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'article', title: 'The Latent Space of Wrongness — What Hallucinations Actually Are', by: 'Simon Willison',          url: 'https://simonwillison.net/series/llms/', note: 'Simon Willison\'s long-running writing on LLMs is the single best ongoing resource for working professionals.' },
        { kind: 'paper',   title: 'Language Models (Mostly) Know What They Know',                       by: 'Kadavath et al., Anthropic 2022', url: 'https://arxiv.org/abs/2207.05221', note: 'The calibration paper. Skim the introduction.' },
        { kind: 'video',   title: 'Why Do AI Chatbots Lie? Explained.',                                  by: 'Computerphile',         url: 'https://www.youtube.com/watch?v=Z3xcwQyA3DI', note: 'Short, clear, non-technical.' },
        { kind: 'article', title: 'Co-Intelligence — chapter on hallucination',                          by: 'Ethan Mollick',          note: 'Best mainstream treatment. Print copy: chapter 4.' },
        { kind: 'podcast', title: 'Hard Fork (NYT)',                                                     by: 'Kevin Roose & Casey Newton', url: 'https://www.nytimes.com/column/hard-fork', note: 'Mainstream-friendly AI news + criticism. Listen for the recurring "AI got X wrong" segments — pattern recognition matters.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 1.5 — Context windows and tokens
// ============================================================
export function ContextAndTokens() {
  return (
    <>
      <BeginnerSection>
        <P>
          A model's <Em>context window</Em> is how much text it can hold in its head at one time. Including
          your prompt, the documents you've pasted, the conversation so far, and the model's own emerging
          answer. Everything counts against the same budget.
        </P>
        <P>
          Modern frontier models have generous context windows:
        </P>
        <UL items={[
          'Copilot M365 — effectively unlimited for your immediate Graph data (the system handles retrieval for you).',
          'Claude.ai (free) — 200,000 tokens ≈ 150,000 words ≈ 300 pages.',
          'ChatGPT (free, GPT-4o) — 128,000 tokens ≈ 100,000 words ≈ 200 pages.',
          'Gemini (free) — 1 million tokens ≈ 750,000 words ≈ 1,500 pages.',
        ]} />
        <P>
          A "token" is roughly 0.75 of an English word — so 1,000 tokens ≈ 750 words ≈ 1.5 pages.
        </P>

        <H2>Why this matters for you</H2>
        <P>
          When you ask an AI to summarise a document, you have two options:
        </P>
        <OL items={[
          <><Em>Refer to it</Em> ("summarise the 2024 strategy doc"). The AI doesn't have it, will guess based on training data, and is likely to make things up.</>,
          <><Em>Send the whole thing</Em> (paste the PDF or upload the file). The AI has the text directly and can quote from it.</>,
        ]} />
        <P>
          For anything you actually care about, do option 2. The context window is generous enough for almost
          any single document you'll work with. Use it.
        </P>

        <KeyCallout title="The big idea">
          If you find yourself thinking "the AI should already know this" — it doesn't. Send it the document.
          That's why context windows are big.
        </KeyCallout>

        <TryIt>
          <P>Pick a long-ish work document — a 10–20 page PDF, a long email thread, a strategy slide deck.</P>
          <Prompt>
            Here is [name of document]. Three things I'd like from you:
            (1) a one-paragraph summary
            (2) the three most important points, with the exact quote each one came from
            (3) one question this document raises that it doesn't answer

            [paste the full content]
          </Prompt>
          <P>
            Notice how concrete the answer is when the source is right there. Now ask a follow-up:
          </P>
          <Prompt>
            Without re-reading the document, what was point 2?
          </Prompt>
          <P>
            The model can still answer because the conversation context still contains the document. Now
            open a <em>new chat</em> and ask the same follow-up. Notice — the model has no idea what point 2
            was. Context is fresh each conversation.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>"Lost in the middle"</H3>
        <P>
          A counter-intuitive finding: when you paste a long document into a model, it doesn't pay equal
          attention to every page. Research has shown models are reliably best at recalling information from
          the <Em>start</Em> and the <Em>end</Em> of a long prompt, and worst at recalling information from
          the <Em>middle</Em>. This is the "lost in the middle" effect (Liu et al., 2023).
        </P>
        <P>
          Practical implication: put your question at the end of a long prompt, not the beginning. And if
          you have a critical fact buried in the middle of a long document, consider repeating it at the end
          as a "remember to consider..." note.
        </P>

        <H3>The prompt structure that works for long-context tasks</H3>
        <Prompt>
          [Long source document goes here — 5 to 50 pages]
          {'\n\n'}
          ---
          {'\n\n'}
          Question: [your specific question, asked at the end]
          {'\n\n'}
          Constraints: only use information from the document above. If the answer isn't in the document,
          say so.
        </Prompt>

        <H3>What counts against the context budget</H3>
        <UL items={[
          'Your current prompt.',
          'Every previous message in the conversation (yours and the AI\'s).',
          'Any files you\'ve attached.',
          'The system prompt (invisible — the model\'s "instructions" from the AI company).',
          'The response the model is currently generating.',
        ]} />
        <P>
          For very long conversations, older messages eventually get "summarised" or "forgotten" — different
          products handle this differently. If you've been chatting for an hour and the model suddenly seems
          to forget what you said 20 messages ago, that's why.
        </P>

        <TryIt title="Try it (intermediate)">
          <P>The "needle in a haystack" test:</P>
          <Prompt>
            Below is a long article. Somewhere in the middle I've hidden the sentence "The favourite colour
            of the CEO is teal." Find it and quote it back to me.

            [paste a long article, 15+ pages, with that exact sentence inserted around the middle]
          </Prompt>
          <P>
            Run this in Claude (200k context). It should find the sentence reliably. Run it in a smaller-context
            model and you'll occasionally see misses. That's "lost in the middle" in action.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>How context is actually implemented</H3>
        <P>
          Attention is <Em>quadratic</Em> in sequence length — doubling the context length means roughly
          quadrupling the compute. Naively, this would make 1M-token contexts impossibly expensive. Real
          systems use a stack of optimisations:
        </P>
        <UL items={[
          <><Em>Sliding window attention</Em> — restrict each token to attending only to a fixed window of nearby tokens (Mistral, Longformer).</>,
          <><Em>Sparse attention</Em> — only compute attention for selected pairs of tokens (Longformer, BigBird).</>,
          <><Em>Attention sinks</Em> — preserve a few "anchor" tokens at the start of the context that all later tokens can attend to (StreamingLLM).</>,
          <><Em>Flash attention</Em> — a more memory-efficient way to compute the same attention operation (Tri Dao, 2022). Used in most modern training pipelines.</>,
          <><Em>RoPE / ALiBi position encodings</Em> — let the model generalise to context lengths longer than it was trained on.</>,
        ]} />

        <H3>The frontier: 1M and 10M contexts</H3>
        <P>
          Gemini 2.5 publicly supports 1M-token contexts, with research demonstrations of 10M. The
          performance characteristics get strange at these lengths — perfect recall on simple needle-in-haystack
          tests, but degraded reasoning across the full document. The practical sweet spot for most
          enterprise tasks is still 100k–500k tokens — enough for any single document, but not so much
          that retrieval quality degrades.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Put two different needles in the same haystack:</P>
          <Prompt>
            Below is a 50-page document. I have hidden two facts inside it:
            - one near the start (the favourite colour of the CEO)
            - one near the end (the year the CFO joined the company)

            Quote both back to me, with the surrounding paragraph for each.

            [paste 50-page document with those two needles]
          </Prompt>
          <P>
            Now move both needles to the middle of the document and re-run. Notice the difference in
            reliability. That's "lost in the middle" properly measured.
          </P>
        </TryIt>
      </LevelUp>

      <CostNote>
        <P>
          Long context = long prompts = lots of tokens = more cost (in APIs) or faster quota burn (in free
          tiers). Practical rules: in Copilot M365 you don't think about this; in Claude.ai or ChatGPT free,
          long-document analysis will eat your daily messages faster; in APIs, a 100-page document costs
          ~10x what a normal conversation does.
        </P>
        <P>
          Counter-rule: a more expensive grounded answer is almost always cheaper than a free hallucinated
          answer you have to spend time verifying or, worse, didn't catch.
        </P>
      </CostNote>

      <DeeperDive items={[
        { kind: 'paper',   title: 'Lost in the Middle: How Language Models Use Long Contexts', by: 'Liu et al., 2023', url: 'https://arxiv.org/abs/2307.03172', note: 'The core finding. Read the introduction and look at the U-shaped graphs.' },
        { kind: 'article', title: 'Anthropic\'s 100K announcement',                              by: 'Anthropic',         url: 'https://www.anthropic.com/news/100k-context-windows', note: 'Useful framing of what becomes possible at scale.' },
        { kind: 'video',   title: 'Long Context, Explained',                                     by: 'Latent Space',      url: 'https://www.latent.space/p/long-context', note: 'Podcast deep-dive on the trade-offs.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 1.6 — Why models differ
// ============================================================
export function WhyModelsDiffer() {
  return (
    <>
      <BeginnerSection>
        <P>
          Send the same prompt to Claude, ChatGPT, Gemini, and Copilot and you'll get four different answers.
          Sometimes very different. The differences aren't random — they trace back to choices each company
          made during training and fine-tuning.
        </P>

        <H2>The four sources of difference</H2>
        <UL items={[
          <><Em>Training data.</Em> Different mixes of web text, books, code, scientific papers, and reference material.</>,
          <><Em>Training method and objectives.</Em> What the model was rewarded for during fine-tuning. Claude was trained with "constitutional AI" — explicit principles about honesty and refusal. ChatGPT was trained via RLHF — humans ranking outputs. Different goals, different personalities.</>,
          <><Em>Safety guardrails.</Em> What topics each model will refuse or hedge on. Claude is the most cautious. ChatGPT is roughly middle. Gemini varies by configuration.</>,
          <><Em>Available capabilities.</Em> Web search, image generation, code execution, file analysis — different models have different tools wired up.</>,
        ]} />

        <H2>The personalities you'll meet</H2>
        <UL items={[
          <><Em>Claude</Em> — thoughtful, cautious, willing to say "I'm not sure". Particularly good at long-form writing, nuanced analysis, and code. Reads as the "senior colleague" persona.</>,
          <><Em>ChatGPT</Em> — confident, helpful, structured. Strong at general-purpose tasks and at sounding polished. Reads as the "energetic generalist" persona.</>,
          <><Em>Gemini</Em> — informational, comfortable with images and web search, strong with structured data. Reads as "the Google one" — useful when you want web-grounded answers.</>,
          <><Em>Copilot M365</Em> — sits on top of OpenAI's models, so the personality is ChatGPT-flavoured. The difference is the data plane: Copilot reads your work environment. That's where its value comes from, not from being a better model.</>,
        ]} />

        <KeyCallout title="The big idea">
          For any meaningful task, try the same prompt in two models. Pick the answer you trust more, not the
          one that came up first. Treating "AI" as a single thing is the single biggest mistake new users make.
        </KeyCallout>

        <TryIt>
          <P>Run this exact prompt in Copilot, Claude.ai (free), and Gemini (free):</P>
          <Prompt>
            Write a one-paragraph email to my team announcing we're moving offices in three weeks. Keep
            it warm but professional. Don't be effusive. Don't use the words "exciting", "journey", or
            "thrilled".
          </Prompt>
          <P>
            Three things to notice: (a) which feels closest to how <em>you</em> write, (b) which one
            actually followed the "don't use these words" instruction, and (c) which one needed the least
            editing. You'll start to feel the personality difference within five prompts.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Training data choices, in practice</H3>
        <P>
          You can sometimes feel the training data leak through. Three examples:
        </P>
        <UL items={[
          <><Em>Code</Em> — Claude and the GPT-4 family are trained on substantial code corpora. They're strong code writers. Earlier models trained on less code are weak code writers.</>,
          <><Em>Recent events</Em> — every model has a training cutoff date. Beyond that, it has no native knowledge. Without web search, ask "what happened in [recent month]" and you'll get either an honest "I don't know" or a confident hallucination.</>,
          <><Em>Specialised domains</Em> — medicine, law, niche scientific fields. Models trained with more academic content (e.g., GPT-4 reportedly trained on substantial scientific paper data) outperform those without.</>,
        ]} />

        <H3>RLHF vs Constitutional AI vs DPO</H3>
        <P>
          These are the three main techniques used to turn a raw next-token predictor into something
          helpful and safe:
        </P>
        <UL items={[
          <><Em>RLHF</Em> (Reinforcement Learning from Human Feedback) — used by OpenAI for ChatGPT. Humans rank model outputs; the model learns to produce highly-ranked outputs. Side effect: tends to make models confident and agreeable (sycophancy).</>,
          <><Em>Constitutional AI</Em> — used by Anthropic for Claude. The model is trained against a written set of principles ("be honest", "avoid harm", "acknowledge uncertainty"). Different output personality: more measured, less confident-sounding.</>,
          <><Em>DPO</Em> (Direct Preference Optimisation) — a more efficient variant of RLHF used by some open-source models.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>Probe the training methods directly. In each of Claude.ai and ChatGPT, ask:</P>
          <Prompt>
            Pretend I've just made a confident factual claim that's wrong. Should you (a) agree with me
            to be helpful, (b) gently push back, (c) firmly correct me? Explain your default behaviour.
          </Prompt>
          <P>
            You'll often see Claude lean toward (b) or (c), and ChatGPT explain that it tries for (b) but
            sometimes drifts to (a). That's the difference between Constitutional AI and RLHF showing up.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>Benchmark eval — what to take seriously</H3>
        <P>
          The benchmarks you'll see in launch announcements (MMLU, HumanEval, GSM8K, GPQA, etc.) are useful
          but limited. Two cautions:
        </P>
        <UL items={[
          <><Em>Contamination</Em> — many models have seen the eval data during training, inflating scores.</>,
          <><Em>Eval drift</Em> — models that ace MMLU still fail on tasks an expert human would consider trivial. Benchmarks are necessary but not sufficient.</>,
        ]} />
        <P>The two most credible signals I rely on:</P>
        <UL items={[
          <><Em>LMSYS Chatbot Arena</Em> — head-to-head human preference voting. The least gameable signal we have for which model people actually prefer.</>,
          <><Em>Your own task-specific eval</Em> — pick 10 prompts you actually care about, run them across 3 models, write down which won. Re-run quarterly. This is more useful than any benchmark for your use case.</>,
        ]} />

        <H3>Reasoning models — the new wave</H3>
        <P>
          Since late 2024, a new category has emerged: "reasoning models" (OpenAI o1/o3, Claude Sonnet 4.5
          with thinking mode, Gemini Thinking, DeepSeek R1). These models do something different at
          inference time — they generate a long internal "chain of thought" before producing a final answer.
        </P>
        <P>
          Practical implication: for hard reasoning tasks (multi-step maths, complex logic, careful
          analysis), reasoning models materially outperform regular models. For fast, conversational, or
          simple tasks, regular models are faster and cheaper. Pick the right tier.
        </P>

        <TryIt title="Try it (advanced)">
          <P>Pick a genuinely hard problem you care about. Run it in three modes:</P>
          <OL items={[
            <>A regular model (Claude Sonnet, GPT-4o, Gemini Pro).</>,
            <>A reasoning model (Claude Opus with thinking, ChatGPT o3, Gemini 2.5 Pro Thinking).</>,
            <>Two reasoning models, asked the same question; then ask a third model to choose between their answers and explain why.</>,
          ]} />
          <P>
            Time how long each takes. Note how confident each sounds. Notice which mode you actually trust
            for your task. That's your task-specific eval.
          </P>
        </TryIt>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Chatbot Arena leaderboard',                  by: 'LMSYS',         url: 'https://lmarena.ai/', note: 'The least-gameable signal for which models people actually prefer.' },
        { kind: 'article', title: 'Anthropic — Claude\'s Constitution',          by: 'Anthropic',     url: 'https://www.anthropic.com/news/claudes-constitution', note: 'Read the actual principles Claude was trained against. Surprisingly readable.' },
        { kind: 'article', title: 'OpenAI Model Spec',                          by: 'OpenAI',        url: 'https://model-spec.openai.com/', note: 'The equivalent for OpenAI — what they want ChatGPT to be like.' },
        { kind: 'video',   title: 'How Reasoning Models Actually Work',         by: '3Blue1Brown',   note: 'Visual explanation of test-time compute and chain-of-thought.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 1.7 — Practical implications
// ============================================================
export function PracticalImplications() {
  return (
    <>
      <BeginnerSection>
        <P>
          You've now read about how LLMs work, why they hallucinate, how grounding helps, and why models
          differ. Time to compress that into the five working rules you'll carry into every other module.
        </P>

        <H2>Rule 1 — Be specific</H2>
        <P>
          Vague prompts get vague answers. "Help me write an email" produces something generic. "Write an
          email to my manager explaining I need to push back our deadline by two weeks because of supplier
          delays. Be matter-of-fact, no apology spiral, three short paragraphs" produces something you can
          actually use.
        </P>

        <H2>Rule 2 — Provide sources</H2>
        <P>
          Anything the AI couldn't possibly know (your data, recent events, specific citations, internal
          context) — give it the source material. Pasted documents, Copilot's grounded Graph access, Claude
          Projects, ChatGPT custom GPTs. Grounded AI is dramatically more reliable than ungrounded AI.
        </P>

        <H2>Rule 3 — Verify the things that matter</H2>
        <P>
          Numbers, citations, names, dates, and anything career-relevant. Ask the AI to show you the exact
          source text it's quoting from. If it can't, treat the claim as a starting hypothesis, not a fact.
        </P>

        <H2>Rule 4 — Iterate, don't restart</H2>
        <P>
          When the answer is wrong, refine the prompt rather than starting a new conversation. The model
          already has the context. "Good, but make it shorter and remove the sales-y language" is faster
          than re-describing the whole task.
        </P>

        <H2>Rule 5 — Pick the right model for the task</H2>
        <UL items={[
          'Quick lookups, summaries, simple drafts → the fastest, cheapest tier (Claude Haiku, GPT-4o mini, Copilot Chat).',
          'Real analysis, multi-step reasoning, careful work → mid tier (Claude Sonnet, GPT-4o, Copilot in Word/Excel).',
          'Hard problems, critical decisions, anything you\'ll defend in front of others → top tier and/or reasoning model (Claude Opus thinking, ChatGPT o3, Gemini 2.5 Pro Thinking).',
        ]} />

        <KeyCallout title="The Praxis working checklist">
          Print this. Stick it next to your screen. Use it for two weeks.
          <ol className="list-decimal list-inside mt-3 space-y-1">
            <li><Em>Be specific</Em> in what you're asking for.</li>
            <li><Em>Provide sources</Em> if facts matter.</li>
            <li><Em>Verify</Em> numbers, citations, and names.</li>
            <li><Em>Iterate</Em> the prompt; don't restart the chat.</li>
            <li><Em>Right-size</Em> the model to the task.</li>
          </ol>
        </KeyCallout>

        <TryIt title="The Module 1 capstone — apply it to a real task">
          <P>
            Pick one task you'll do at work tomorrow. Something real — a draft email, a meeting prep, a
            document summary, a piece of analysis. Apply all five rules. Specifically:
          </P>
          <OL items={[
            'Write the prompt with concrete details (Rule 1).',
            'Identify what source material the AI needs (Rule 2). Get it.',
            'After the answer, list the 3 things you should verify (Rule 3).',
            'Iterate the prompt at least once (Rule 4).',
            'Notice which model felt right for the task (Rule 5).',
          ]} />
          <P>
            Then — before you move on to Module 2 — pause and write yourself two notes: what worked, what
            didn't. That's the first entry in your personal prompt library.
          </P>
        </TryIt>
      </BeginnerSection>

      <LevelUp tier="intermediate">
        <H3>Levelling up your AI use over the next month</H3>
        <P>
          A few habits that compound:
        </P>
        <UL items={[
          <><Em>Keep a prompt journal.</Em> When a prompt works well, save it. A simple Notion / OneNote / Apple Notes file is enough. Within a month you'll have 20–30 reusable prompts. Within a year, this is your personal AI infrastructure.</>,
          <><Em>Notice friction.</Em> If you find yourself thinking "I'd ask the AI but it'll get this wrong" — that's a hypothesis to test, not a fact. Try it anyway. Sometimes you'll be right. Surprisingly often you won't.</>,
          <><Em>Treat AI as a junior colleague.</Em> You wouldn't accept a junior colleague's first draft as final. You also wouldn't refuse to delegate to them. Same posture for AI.</>,
          <><Em>Build a personal eval.</Em> Pick five prompts you care about. Run them quarterly across the new model versions. Track which model wins for which task. This is your private benchmark — more useful than any public one for <em>your</em> use cases.</>,
        ]} />

        <TryIt title="Try it (intermediate)">
          <P>Start your prompt journal now. Open a new note. Title it "Prompts that worked". Add this template:</P>
          <Prompt>
            Date:
            Model:
            Task:
            Prompt I used:
            What worked:
            What I'd change next time:
          </Prompt>
          <P>
            Fill in two entries this week. Five by month's end. The discipline matters more than the
            template — but the template makes the discipline easier.
          </P>
        </TryIt>
      </LevelUp>

      <LevelUp tier="advanced">
        <H3>The compounding return on AI literacy</H3>
        <P>
          The single biggest mistake I see professionals make with AI is treating it as a tool to use
          occasionally for specific tasks. The single biggest win is treating it as <Em>infrastructure</Em>
          — a layer that sits over and through your daily work, with prompts as portable assets and models
          as a routinely-evaluated stack.
        </P>
        <P>
          Two analogies:
        </P>
        <UL items={[
          <><Em>Spreadsheets in 1995.</Em> Some professionals used spreadsheets to occasionally calculate things. Some built spreadsheet-native workflows for their entire job. Twenty years later, the gap between those two groups was enormous.</>,
          <><Em>Search engines in 2003.</Em> Same story — some used Google occasionally, some built their entire information-gathering workflow around it. The latter group was substantially more capable for the next two decades.</>,
        ]} />
        <P>
          AI is a similar inflection point. The investment is mostly in habits, not technology. The
          professionals who internalise the five rules above and apply them every day will compound that
          advantage over the professionals who use AI casually. The Praxis curriculum exists to make that
          compounding happen faster.
        </P>

        <H3>The five things to be sceptical of</H3>
        <UL items={[
          <><Em>"AI replaces X job."</Em> Almost never the right framing. AI replaces specific <em>tasks</em>, not jobs. Jobs are bundles of tasks; the bundle changes.</>,
          <><Em>"AI will get there next year."</Em> The pace of capability gain is real but uneven. Some things AI is already excellent at (drafting, summarising, code generation). Some things it's been "almost there" on for two years (genuine reliability without verification). Plan for the former, hedge on the latter.</>,
          <><Em>"You don't need to understand it to use it."</Em> Partly true. But the people who understand it use it better — by a lot. This whole module exists because of that asymmetry.</>,
          <><Em>"AGI is imminent."</Em> Definitions vary. Capabilities are improving fast. But the gap between "very impressive on benchmarks" and "actually reliable across a real worker's full week" is large. Plan for what's here now, not what's announced.</>,
          <><Em>"Vendor X is just better."</Em> True for some tasks, untrue for others, and the rankings change every six months. Run your own evals.</>,
        ]} />

        <KeyCallout title="The end of Module 1">
          You now have the mental model. Module 2 starts the practical comparison — same prompts across
          the major models, with experiments that let you feel the differences yourself. The rest of Praxis
          builds on the five working rules.
          <br /><br />
          Welcome to the practice.
        </KeyCallout>
      </LevelUp>

      <DeeperDive items={[
        { kind: 'book',    title: 'Co-Intelligence',                   by: 'Ethan Mollick',   note: 'Worth reading after this module — you\'ll see the framing more clearly with Module 1\'s foundation.' },
        { kind: 'article', title: 'How to Use AI to Do Stuff: An Updated Opinionated Guide', by: 'Ethan Mollick', url: 'https://www.oneusefulthing.org/p/how-to-use-ai-to-do-stuff-an-updated', note: 'Single best survey of "what AI can actually do for you right now". Refreshed regularly.' },
        { kind: 'podcast', title: 'The AI Daily Brief',                 by: 'Nathaniel Whittemore', url: 'https://www.youtube.com/@AIDailyBrief', note: 'Daily 10-20 min episodes. The most efficient way to stay current.' },
        { kind: 'article', title: 'Simon Willison — weeknotes',          by: 'Simon Willison',  url: 'https://simonwillison.net/', note: 'A working developer thinking out loud about LLMs in real time. Unmissable.' },
        { kind: 'article', title: 'The Pragmatic Engineer — AI series',  by: 'Gergely Orosz',   note: 'For the engineering-curious. Practical, sceptical, well-sourced.' },
      ]} />
    </>
  )
}
