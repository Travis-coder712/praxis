/**
 * Module 9 — Privacy, security, compliance
 *
 * The module most working professionals secretly want first. Where
 * prompts actually go, what's in the M365 data plane vs not, what
 * the vendors say (and don't say), Australian-specific considerations,
 * and a short list of safe-use rules you can give your team tomorrow.
 */
import {
  P, H2, Em, UL, OL,
  BeginnerSection, LevelUp,
  TryIt,
  CostNote, DeeperDive, KeyCallout,
} from '../components/Lesson'

// ============================================================
// Lesson 9.1 — Where your prompts actually go
// ============================================================
export function WherePromptsGo() {
  return (
    <>
      <BeginnerSection>
        <P>
          The single most common question working professionals ask about AI tools is some
          variation of: "Wait, where does my prompt go?" It's an excellent question, and the
          honest answer depends on which tool you're using, what you're paying for, and what
          your IT team has configured.
        </P>
        <P>
          The bad news: the answer changes every six months as vendors update their terms. The
          good news: the <Em>shape</Em> of the answer is stable, and you can reason about any new
          tool by walking it through the same four questions.
        </P>

        <H2>The four questions</H2>
        <OL items={[
          <><Em>Where is the prompt processed?</Em> Which company's servers, in which country?</>,
          <><Em>How long is it stored?</Em> Days, weeks, indefinitely?</>,
          <><Em>Who can see it?</Em> Vendor employees? Other customers? Subprocessors?</>,
          <><Em>Is it used to train future models?</Em> By default, or only with opt-in, or never?</>,
        ]} />
        <P>
          For each tool you use, you should be able to answer these four questions. If you can't,
          assume the worst-case answer for the kind of data you're about to paste.
        </P>

        <H2>A rough taxonomy</H2>
        <UL items={[
          <><Em>Consumer products on the free or low-priced tier</Em> (ChatGPT.com free, Claude.ai free, Gemini consumer): the safe assumption is that prompts may be used for training unless you opted out. Don't paste anything confidential.</>,
          <><Em>Consumer products on a paid tier</Em> (ChatGPT Plus, Claude Pro): training is usually off by default, but data is still processed on the vendor's general infrastructure and is subject to vendor-employee access for safety review.</>,
          <><Em>Enterprise-tenant products</Em> (Copilot for M365, ChatGPT Enterprise, Claude for Work): the data plane is contractually inside your organisation's tenant boundary. Training is off. Vendor-employee access is heavily restricted.</>,
          <><Em>Models running locally on your own hardware</Em> (Ollama, Llama on a laptop): the data never leaves your machine. Trade-off: smaller models, no training data updates, your problem to operate.</>,
        ]} />
      </BeginnerSection>

      <H2>The mental model</H2>
      <P>
        Think of each AI tool as having two boundaries:
      </P>
      <UL items={[
        <><Em>The processing boundary.</Em> Where is the prompt physically computed? US, EU, Australia, your own laptop?</>,
        <><Em>The data-use boundary.</Em> What can the vendor do with the prompt after it's processed? Train models? Show it to humans? Sell it to advertisers? Delete it?</>,
      ]} />
      <P>
        Most working professionals over-focus on the first boundary and under-focus on the
        second. In practice, the second is where most of the risk lives. A prompt processed in
        the US but contractually never used for training is usually safer than a prompt processed
        in your home country but on a vendor's general training mix.
      </P>

      <LevelUp tier="intermediate">
        <P>
          A subtlety: even when training is contractually off, vendors generally retain logs of
          your prompts for a window (often 30 days) for "abuse monitoring" — making sure their
          systems aren't being used for fraud, CSAM, weapons, etc. During that window, a small
          number of vendor employees may have access to your prompts if a security or trust-and-
          safety review is triggered. This is a different risk profile from training.
        </P>
        <P>
          For most professional data, the abuse-monitoring window is acceptable. For genuinely
          sensitive data — patient records, sealed legal matters, classified material — it isn't.
          For those, you want zero data retention or on-premise inference. Both exist, both
          cost more.
        </P>
      </LevelUp>

      <KeyCallout>
        Don't memorise vendor terms; memorise the four questions. Re-run them when you adopt
        any new tool. Process boundary, retention, who-can-see-it, training. That's the model.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 9.2 — The Microsoft 365 data plane
// ============================================================
export function M365DataPlane() {
  return (
    <>
      <BeginnerSection>
        <P>
          If you're at a typical Australian white-collar employer, the AI tool you're most likely
          to be officially licensed for is Microsoft Copilot inside the M365 suite. There's a
          good reason for that: it sits inside what Microsoft calls the <Em>M365 data plane</Em>,
          and that data plane has properties that make it much easier to defend as safe-for-work
          than a consumer chatbot.
        </P>

        <H2>What "inside the data plane" actually means</H2>
        <P>
          When you use Copilot in Word, Excel, Outlook, or Teams, three things happen:
        </P>
        <OL items={[
          <><Em>Your prompt, the relevant document context, and the response all stay inside your tenant's M365 instance.</Em> They are not sent to OpenAI's general infrastructure.</>,
          <><Em>The data is governed by the same security and compliance posture as the rest of your M365 environment.</Em> Whatever your IT team has configured for SharePoint and Outlook applies here too.</>,
          <><Em>The data is not used to train OpenAI's models, or Microsoft's, or anyone else's.</Em> This is contractually guaranteed in the M365 service terms.</>,
        ]} />
        <P>
          That last point is the one most colleagues don't realise. ChatGPT.com on a personal
          account and Copilot at work look superficially similar, but the privacy posture is
          completely different. One is consumer-grade; the other is enterprise-grade.
        </P>

        <H2>Why this matters in practice</H2>
        <P>
          For most working professionals, the difference between "I can use this with company
          data" and "I can't use this with company data" is exactly the difference between Copilot
          inside M365 and a consumer AI tool. That's why Copilot is the workhorse for company
          work and Claude/ChatGPT/Gemini are the personal tools that work alongside it.
        </P>
        <UL items={[
          <><Em>Safe inside M365 Copilot:</Em> drafting from real client documents, summarising a confidential meeting transcript, working with internal financials.</>,
          <><Em>Unsafe in consumer tools:</Em> the same activities, even on a paid Plus account, unless your employer has explicitly approved them.</>,
        ]} />
      </BeginnerSection>

      <H2>What still needs care</H2>
      <P>
        "Inside the data plane" doesn't mean "anything goes". Three things still matter even with
        Copilot:
      </P>
      <UL items={[
        <><Em>Copilot inherits SharePoint permissions.</Em> If a document was shared too broadly, Copilot will happily surface its contents to anyone who can see it. The data plane is safe; the access controls inside it might not be. (Module 4 covered this in detail.)</>,
        <><Em>Outputs can be exported.</Em> A Copilot draft pasted into an email to an external party leaves the data plane the moment you hit send. The protection is around the prompt, not the output once you've moved it.</>,
        <><Em>Plugins and connectors broaden the boundary.</Em> The moment you connect Copilot to a third-party tool, the data plane extends to include that tool's vendor. Check what each connector does before approving it.</>,
      ]} />

      <LevelUp tier="intermediate">
        <P>
          A useful frame: Copilot inside M365 is approximately as safe as the M365 environment
          itself. If your organisation trusts SharePoint and Exchange Online to hold its
          documents and email, Copilot is in the same trust boundary. If you've never thought
          about SharePoint permissions before, now is a great time. The Copilot rollout has been
          a forcing function for many companies to clean up their SharePoint sharing model —
          because Copilot makes overshared documents much easier to find.
        </P>
        <P>
          For genuinely sensitive material (HR investigations, board deliberations, M&A) most
          organisations layer additional controls on top: a separate SharePoint site, sensitivity
          labels that block Copilot from indexing, or simply working in OneDrive outside the
          shared scope. The Copilot data plane is the floor, not the ceiling.
        </P>
      </LevelUp>

      <KeyCallout>
        Copilot inside M365 ≈ safe with company data. Consumer AI tools ≈ treat like a public
        forum. The shape of the boundary matters more than the brand on the logo.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 9.3 — Vendor terms (Anthropic, OpenAI, Google)
// ============================================================
export function VendorTerms() {
  return (
    <>
      <BeginnerSection>
        <P>
          The terms are a moving target. What's accurate today may shift by the time you read
          this. But the structure of how each major vendor approaches data — and where they
          differ — is more stable than the specifics. Here's the structure.
        </P>

        <H2>Anthropic (Claude)</H2>
        <UL items={[
          <><Em>Consumer tier (Claude.ai free and Pro):</Em> by default, Anthropic does not use your conversations to train models. This has been their position from the start, and it's one of the more genuine differentiators in the market.</>,
          <><Em>API and Claude for Work:</Em> data is not used for training. 30-day retention for abuse monitoring, configurable down to zero retention on enterprise contracts.</>,
          <><Em>Where they're strict:</Em> Anthropic's Acceptable Use Policy is one of the more restrictive in the industry. Some kinds of analysis (e.g. detailed regulatory advice in some sectors, certain creative writing categories) Claude will simply refuse to help with even when the use is legitimate.</>,
        ]} />

        <H2>OpenAI (ChatGPT)</H2>
        <UL items={[
          <><Em>Consumer free tier (ChatGPT.com without a paid plan):</Em> by default, prompts may be used to train future models unless you turn off chat history. Turning off chat history also disables the ability to come back to old conversations.</>,
          <><Em>ChatGPT Plus and Team:</Em> training defaults to off, but the workspace is still on OpenAI's general infrastructure with 30-day abuse-monitoring retention.</>,
          <><Em>ChatGPT Enterprise and API on a zero-retention agreement:</Em> approximately equivalent to Anthropic enterprise — no training, configurable retention.</>,
          <><Em>Microsoft Copilot uses OpenAI models under the hood</Em>, but the data plane is Microsoft's, not OpenAI's. Different terms apply.</>,
        ]} />

        <H2>Google (Gemini)</H2>
        <UL items={[
          <><Em>Consumer Gemini app:</Em> conversations may be reviewed by humans for up to three years and used to improve services. Even with "Gemini Apps Activity" turned off, Google retains data for 72 hours for service operation. More aggressive retention than the others on the consumer tier.</>,
          <><Em>Gemini for Workspace:</Em> data not used for training, governed by your organisation's Workspace terms. Approximately analogous to Copilot inside M365, but inside Google Workspace.</>,
          <><Em>Vertex AI (Gemini via Google Cloud):</Em> enterprise-grade, no training on customer data.</>,
        ]} />

        <H2>Microsoft (Copilot for M365)</H2>
        <UL items={[
          <><Em>Inside the M365 tenant:</Em> already covered in Lesson 9.2. Data stays in the tenant, no training, governed by your Microsoft Customer Agreement.</>,
          <><Em>Copilot for the web (the consumer chat at copilot.microsoft.com):</Em> different product, different terms, treat like a consumer chatbot.</>,
        ]} />
      </BeginnerSection>

      <H2>The honest summary</H2>
      <P>
        For any work you do at a typical employer:
      </P>
      <UL items={[
        <><Em>Enterprise tiers across all four vendors are roughly comparable</Em> in their data protections. The differences are at the margins.</>,
        <><Em>Consumer tiers diverge sharply.</Em> Claude consumer is the most protective by default. Gemini consumer is the least. ChatGPT consumer is in the middle and depends on your settings.</>,
        <><Em>If you're using a consumer tier with anything sensitive</Em>, you're relying on yourself to triage what you paste. The vendor isn't covering you.</>,
      ]} />

      <LevelUp tier="intermediate">
        <P>
          Three subtleties worth knowing:
        </P>
        <UL items={[
          <><Em>"Not used for training" is not the same as "not retained".</Em> Vendors typically retain prompts for 30 days even on enterprise plans for abuse monitoring. For most data this is fine. For some it isn't.</>,
          <><Em>"Training" and "fine-tuning" can be different.</Em> Some vendors allow opt-in fine-tuning on your data for your own private model. That's not the same as your data being added to the general training set, but the distinction is sometimes blurred in marketing.</>,
          <><Em>Subprocessors matter.</Em> When a vendor uses another vendor for some piece of infrastructure (e.g. hosting), your data crosses that boundary too. Vendor subprocessor lists are published; for genuinely sensitive work, read them.</>,
        ]} />
      </LevelUp>

      <DeeperDive items={[
        { kind: 'article', title: 'Anthropic data usage policies', by: 'Anthropic', note: 'Up-to-date statement on what is and isn\'t used for training across Claude tiers.' },
        { kind: 'article', title: 'OpenAI enterprise privacy', by: 'OpenAI', note: 'The enterprise data terms; useful as a contrast with the consumer terms.' },
        { kind: 'article', title: 'Microsoft 365 Copilot privacy and security', by: 'Microsoft Learn', note: 'The official documentation on the M365 Copilot data plane. Worth reading once, properly.' },
      ]} />
    </>
  )
}

// ============================================================
// Lesson 9.4 — Australian-specific considerations
// ============================================================
export function AusSpecific() {
  return (
    <>
      <BeginnerSection>
        <P>
          Most AI vendor documentation is written from a US legal perspective. Australian law has
          its own framework, and there are a handful of specifically Australian considerations
          worth knowing if your work falls under the Privacy Act, the Notifiable Data Breaches
          scheme, or any sectoral regulator.
        </P>

        <H2>The Privacy Act and the APPs</H2>
        <P>
          The Australian Privacy Principles (APPs) govern how organisations handle personal
          information. The two most relevant for AI use are:
        </P>
        <UL items={[
          <><Em>APP 6 — Use or disclosure.</Em> Personal information collected for one purpose can't be used for another without consent. Putting a customer's data into a public AI tool to help draft a response is, in most readings, a new use that needs to be supported by either the original collection notice or new consent.</>,
          <><Em>APP 8 — Cross-border disclosure.</Em> If you send personal information overseas — including by pasting it into a US-hosted AI tool — your organisation remains accountable for how it's handled, and must take reasonable steps to ensure the overseas recipient does not breach the APPs.</>,
        ]} />
        <P>
          The practical implication: feeding customer or employee personal information into a
          consumer AI tool is almost always a breach of one or both of these principles. Inside an
          enterprise data plane (M365 Copilot, Claude for Work, etc.) it's defensible because the
          data hasn't really been "disclosed" in the legal sense — it's still being processed by
          your service providers under your contractual control.
        </P>

        <H2>The OAIC's guidance</H2>
        <P>
          The Office of the Australian Information Commissioner (OAIC) has published guidance on
          generative AI. The headline points worth remembering:
        </P>
        <UL items={[
          <>Generative AI is not a free pass on the APPs. The same rules apply.</>,
          <>Organisations are expected to have a written policy on AI use, communicated to staff.</>,
          <>"Reasonable steps" for cross-border disclosure can include contractual terms, but contractual terms alone are not always enough — the organisation must also consider whether the recipient is realistically subject to enforcement.</>,
          <>Where AI output is used to make decisions about individuals, the organisation should be transparent about that and able to explain how the decision was reached.</>,
        ]} />

        <H2>Sectoral regulators</H2>
        <UL items={[
          <><Em>APRA-regulated entities</Em> (banks, insurers, super funds) have additional obligations around outsourcing and operational resilience that may apply when sensitive operations are supported by third-party AI.</>,
          <><Em>The Therapeutic Goods Administration</Em> has views on AI used in medical contexts.</>,
          <><Em>The legal profession</Em> has bar-level guidance in most states about disclosure to clients of AI assistance and confidentiality.</>,
          <><Em>Public-sector users</Em> are typically subject to additional whole-of-government AI guidance (e.g. the DTA's policy in the federal context).</>,
        ]} />
        <P>
          If you work in a regulated industry, your compliance team has probably already published
          internal guidance — that should be your first read.
        </P>
      </BeginnerSection>

      <H2>The Notifiable Data Breaches angle</H2>
      <P>
        Under the NDB scheme, if personal information is exposed and serious harm is likely, you
        have to notify the OAIC and the affected individuals. Pasting personal information into a
        consumer AI tool is, in a strict reading, a disclosure to a third party. Whether it
        triggers NDB depends on the harm test, but the conservative position most compliance
        teams take is: <Em>don't put yourself in a position where you have to argue about it</Em>.
        Use the enterprise tools for personal information; use the consumer tools for impersonal
        material.
      </P>

      <LevelUp tier="intermediate">
        <P>
          Three Australia-specific things worth knowing that don't always come up in vendor
          documentation:
        </P>
        <UL items={[
          <><Em>"Sovereign" AI options exist but are limited.</Em> A few Australian or APAC vendors offer locally-hosted LLM services. Their capability is generally a step behind the frontier; trade-offs are real.</>,
          <><Em>Data may be processed in Australia under Microsoft and Google enterprise contracts</Em>, but the supporting model training infrastructure and underlying capabilities are still global. Local processing addresses some concerns but not all.</>,
          <><Em>Australian copyright law has its own answer to "is training on the open web fair use?"</Em> The answer is less settled than in the US, and several cases are in progress. For output you publish under your name, the safer position is to treat AI output as a draft your team then edits substantively.</>,
        ]} />
      </LevelUp>

      <KeyCallout>
        The APPs apply to AI use just like everything else. Personal information into a consumer
        AI tool is almost always a problem. Personal information inside your enterprise data
        plane is defensible. When in doubt, ask the privacy team — they would much rather have
        the conversation than read about it in a notification.
      </KeyCallout>
    </>
  )
}

// ============================================================
// Lesson 9.5 — Practical safe-use rules
// ============================================================
export function PracticalRules() {
  return (
    <>
      <BeginnerSection>
        <P>
          Everything in this module distils into a short list you can share with a team, hand to
          a new starter, or stick on the back of your monitor. The rules below are deliberately
          conservative — they err on the side of "ask before you paste". For most working
          professionals that's the right calibration.
        </P>

        <H2>The eight rules</H2>
        <OL items={[
          <><Em>Use enterprise tools for company work.</Em> Copilot inside M365, Claude for Work, ChatGPT Enterprise, Gemini for Workspace — whichever your organisation has licensed. Default to these for anything touching company data.</>,
          <><Em>Use consumer tools for personal, public, or impersonal work.</Em> Studying for a certification, drafting a personal blog, exploring a hobby — consumer Claude or ChatGPT is fine.</>,
          <><Em>Never paste personal information into a consumer tool.</Em> Names, addresses, contact details, ID numbers, health information, financial detail. If it identifies a specific person, it's personal information.</>,
          <><Em>Never paste confidential commercial information into a consumer tool.</Em> Customer lists, pricing, contracts, strategy documents, internal financials. Use the enterprise data plane.</>,
          <><Em>Strip names and IDs when you can.</Em> Even inside enterprise tools, anonymising obvious identifiers reduces the blast radius if something goes wrong. "Customer A" and "Customer B" are usually enough for the AI to help.</>,
          <><Em>Check before you click "Allow" on a new connector or plugin.</Em> Connectors extend the data plane outwards. The default should be "no" unless there's a clear reason and the connector is approved by IT.</>,
          <><Em>Treat AI output as a draft, not a deliverable.</Em> Read it carefully. Check facts. Edit for your voice. The accountability is yours; the AI is the assistant.</>,
          <><Em>When in doubt, ask.</Em> Privacy, security, and legal teams want to hear from you. The cost of asking is fifteen minutes; the cost of guessing wrong can be much bigger.</>,
        ]} />
      </BeginnerSection>

      <H2>A simple test for any new tool</H2>
      <P>
        Before adopting any new AI tool for work, run it through five questions:
      </P>
      <UL items={[
        <>Is it on the organisation's approved-tools list? (If not, start with IT.)</>,
        <>Where does the data go, and what are the retention terms?</>,
        <>Does it use my prompts for training?</>,
        <>If I imagine my organisation's name on the front page of the paper because of how I used this tool, am I comfortable?</>,
        <>If something went wrong, could I explain to the privacy team what I did and why it was reasonable?</>,
      ]} />
      <P>
        If you can't answer any of those, slow down. Most AI mistakes aren't caused by the
        technology; they're caused by skipping the five minutes of thought before opening the
        chat window.
      </P>

      <TryIt>
        <P>
          Take the eight rules above, copy them into a notes app or a one-pager, and share them
          with one colleague who's just starting to use AI at work. The act of sharing forces
          you to refine your own understanding, and you've just made the rollout in your team
          one person safer.
        </P>
      </TryIt>

      <LevelUp tier="intermediate">
        <P>
          For leaders and managers, three additional rules:
        </P>
        <UL items={[
          <><Em>Have a written AI policy.</Em> Even a one-page version is better than nothing. The OAIC expects it. So do most boards.</>,
          <><Em>Audit your enterprise tool's permissions.</Em> Copilot inheriting overshared SharePoint permissions is one of the most common rollout problems. Fix the SharePoint problem; don't blame Copilot.</>,
          <><Em>Notice the gap between what staff are licensed for and what they're actually using.</Em> If half the team is paying for personal ChatGPT and pasting work into it, you have a licensing problem and a privacy problem. Both are solvable; ignoring them is not.</>,
        ]} />
      </LevelUp>

      <CostNote>
        Enterprise AI licences are not cheap (M365 Copilot is roughly A$50/user/month, Claude for
        Work and ChatGPT Enterprise are comparable). The cost is real. The cost of a serious
        privacy incident is several orders of magnitude larger. Most CFOs find the licence cost
        much easier to defend when framed as "the safest way to use the tools staff are already
        using anyway".
      </CostNote>

      <KeyCallout>
        Eight rules. Five questions before any new tool. One written policy. That's the floor of
        responsible AI use at work — and it's much less complicated than the regulatory
        commentary makes it sound.
      </KeyCallout>

      <DeeperDive items={[
        { kind: 'article', title: 'OAIC guidance on generative AI', by: 'Office of the Australian Information Commissioner', note: 'The authoritative starting point for Australian organisations.' },
        { kind: 'article', title: 'Microsoft 365 Copilot data, privacy and security', by: 'Microsoft Learn', note: 'Worth reading once if your organisation has rolled out Copilot. Clear and well-organised.' },
        { kind: 'article', title: 'Anthropic Acceptable Use Policy', by: 'Anthropic', note: 'Knowing what Claude will and won\'t do is part of choosing the right tool for the job.' },
      ]} />
    </>
  )
}
