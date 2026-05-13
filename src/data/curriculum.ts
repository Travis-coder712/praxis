/**
 * Praxis curriculum — single source of truth for modules + lessons.
 *
 * Module 1 is fully built (v0.1). Modules 2–10 are stubbed as
 * "Coming soon" with planned lesson titles visible so the arc is clear.
 */

export type LessonStatus = 'built' | 'planned'

export interface Lesson {
  id: string
  number: number
  title: string
  summary: string
  readingTime: string
  status: LessonStatus
}

export interface Module {
  id: string
  number: number
  title: string
  tagline: string
  summary: string
  accent: string
  status: 'built' | 'in-development' | 'planned'
  lessons: Lesson[]
}

export const MODULES: Module[] = [
  {
    id: 'how-ai-works',
    number: 1,
    title: 'How AI actually works',
    tagline: 'Demystify the machine. No maths required.',
    summary:
      'Strip the magic away from large language models. By the end you understand why they hallucinate, what context windows are for, why different models give different answers — and how to spot when an answer is plausible-but-wrong.',
    accent: '#10b981',
    status: 'built',
    lessons: [
      { id: 'what-is-an-llm',          number: 1, title: 'What an LLM actually is',                      summary: 'The "very-good autocomplete" framing — and what that means for you.',  readingTime: '8 min',  status: 'built' },
      { id: 'neural-networks',         number: 2, title: 'Neural networks without the maths',          summary: 'What\'s actually inside the box, in plain language.',                  readingTime: '7 min',  status: 'built' },
      { id: 'training-fine-tuning-rag',number: 3, title: 'Training, fine-tuning, RAG — three different things', summary: 'The single most useful distinction non-IT people can learn about AI.', readingTime: '8 min',  status: 'built' },
      { id: 'hallucination',           number: 4, title: 'Hallucination — not a bug, a feature',       summary: 'Why models are confidently wrong, the single best fix, and how to verify.', readingTime: '12 min', status: 'built' },
      { id: 'context-and-tokens',      number: 5, title: 'Context windows and tokens',                 summary: 'What they really mean, and why "send the whole document" usually wins.', readingTime: '7 min',  status: 'built' },
      { id: 'why-models-differ',       number: 6, title: 'Why models differ',                          summary: 'Same prompt, three answers — and what that tells you about each model.', readingTime: '8 min',  status: 'built' },
      { id: 'practical-implications',  number: 7, title: 'Practical implications — your working checklist', summary: 'Five working rules you take with you into every module that follows.', readingTime: '7 min',  status: 'built' },
    ],
  },
  {
    id: 'frontier-models',
    number: 2,
    title: 'The frontier models today',
    tagline: 'ChatGPT, Claude, Gemini, Copilot, Grok, DeepSeek — what each is best at.',
    summary:
      'A practical map of the major AI models in 2026. Strengths, weaknesses, when to use which, and a side-by-side experiment to feel the differences yourself.',
    accent: '#2563eb',
    status: 'built',
    lessons: [
      { id: 'the-six-families',   number: 1, title: 'The six major model families',           summary: 'OpenAI, Anthropic, Google, Meta, xAI, DeepSeek — orient yourself.', readingTime: '8 min',  status: 'built' },
      { id: 'strengths-weaknesses',number: 2, title: 'Comparative strengths and weaknesses',  summary: 'Reasoning, code, long context, multimodal — what each does best.', readingTime: '10 min', status: 'built' },
      { id: 'versioning',          number: 3, title: 'How model versioning works',            summary: 'Why "ChatGPT" or "Claude" isn\'t enough — you need the version.', readingTime: '7 min',  status: 'built' },
      { id: 'decision-matrix',     number: 4, title: 'Which model for which task',            summary: 'A decision matrix you can actually use.',                          readingTime: '9 min',  status: 'built' },
      { id: 'side-by-side',        number: 5, title: 'Side-by-side experiment — the Module 2 capstone', summary: 'Five prompts, three models. See the differences yourself.',      readingTime: '15 min', status: 'built' },
    ],
  },
  {
    id: 'prompting',
    number: 3,
    title: 'Prompting — from basic to advanced',
    tagline: 'The single most leveraged skill in AI literacy.',
    summary:
      'Anatomy of good prompts, personas, constraint-based prompting (no glaze, be critical), iteration, templates, and prompt libraries. Includes a "before and after" exercise you can run on real work prompts.',
    accent: '#8b5cf6',
    status: 'built',
    lessons: [
      { id: 'anatomy-of-a-prompt',  number: 1, title: 'Anatomy of a good prompt',          summary: 'Role · task · context · constraints · examples — the five-part framework.', readingTime: '9 min', status: 'built' },
      { id: 'personas',             number: 2, title: 'Personas — when to use them',       summary: 'Why "you are an expert X" works, and when it just adds clutter.',         readingTime: '8 min', status: 'built' },
      { id: 'constraint-prompting', number: 3, title: 'Constraint prompting — no glaze',   summary: 'How to make Copilot critical, not effusive. The exact phrases that work.', readingTime: '10 min', status: 'built' },
      { id: 'iteration',            number: 4, title: 'Iteration — refine, don\'t restart',summary: 'Treat prompts like code. Edit them. Save the good ones.',                readingTime: '8 min', status: 'built' },
      { id: 'templates',            number: 5, title: 'Templates and few-shot prompting',  summary: 'When showing examples beats describing what you want.',                  readingTime: '9 min', status: 'built' },
      { id: 'prompt-library',       number: 6, title: 'Build your personal prompt library',summary: 'The highest-leverage personal investment a knowledge worker can make.', readingTime: '7 min', status: 'built' },
    ],
  },
  {
    id: 'copilot-deep-dive',
    number: 4,
    title: 'Microsoft Copilot deep dive',
    tagline: 'The tool you actually have — properly understood.',
    summary:
      'How Copilot M365 actually works. Web vs Word vs Excel vs Outlook vs Teams. Work mode vs Web mode. The permissions and data plane. Source-document workflows (where Copilot shines). Agents. Built to work as a standalone entry point if you skip directly here.',
    accent: '#0ea5e9',
    status: 'built',
    lessons: [
      { id: 'what-copilot-actually-is', number: 1, title: 'What Copilot M365 actually is',              summary: 'OpenAI model + Microsoft Graph + your tenant. The three-part stack — plus a refresher for direct arrivers.', readingTime: '10 min', status: 'built' },
      { id: 'copilot-everywhere',       number: 2, title: 'Copilot in Word / Excel / PowerPoint / Outlook / Teams', summary: 'What changes per app. Plus Loop, OneNote, and Stream — the underrated surfaces.', readingTime: '12 min', status: 'built' },
      { id: 'chat-vs-app',              number: 3, title: 'Copilot Chat (web) vs Copilot in apps',      summary: 'Same brain, different reach. When to use which.', readingTime: '8 min', status: 'built' },
      { id: 'work-vs-web',              number: 4, title: 'Work mode vs Web mode',                     summary: 'The toggle most people miss — and why it matters.', readingTime: '7 min', status: 'built' },
      { id: 'permissions',              number: 5, title: 'Permissions and the data plane',            summary: 'What Copilot can see, what it can\'t, who else can see your prompts. Plus Purview and sensitivity labels.', readingTime: '11 min', status: 'built' },
      { id: 'source-documents',         number: 6, title: 'Source-document workflows',                 summary: 'The killer Copilot use case. Four patterns + the "audit-ready output" pattern.', readingTime: '11 min', status: 'built' },
      { id: 'agents',                   number: 7, title: 'Copilot agents',                            summary: 'Built-in and custom. When agents pay back and where they fail.', readingTime: '10 min', status: 'built' },
      { id: 'progressive-difficulty',   number: 8, title: 'Ten progressively-harder Copilot tasks',    summary: 'The Module 4 capstone — a real workout.', readingTime: '20 min', status: 'built' },
    ],
  },
  {
    id: 'claude-deep-dive',
    number: 5,
    title: 'Claude deep dive',
    tagline: 'The model that does deep work.',
    summary:
      'Claude.ai vs the API vs Claude Code. Projects, MCP, artefacts. Long-context use cases. Why Claude is more cautious — and when that\'s a feature. Complement to Module 4: Copilot is your work tool; Claude is the personal tool that often wins on harder, more nuanced work.',
    accent: '#f59e0b',
    status: 'built',
    lessons: [
      { id: 'what-claude-is',  number: 1, title: 'What Claude is, and how it differs',         summary: 'Constitutional AI, the company, the model family. When Claude is genuinely the best choice — and when it isn\'t.', readingTime: '10 min', status: 'built' },
      { id: 'three-flavours',  number: 2, title: 'Claude.ai vs Claude API vs Claude Code',     summary: 'Three different products. Different audiences. When to use each. Pricing tiers explained.', readingTime: '9 min', status: 'built' },
      { id: 'projects',        number: 3, title: 'Projects, artefacts, and MCP',               summary: 'Persistent knowledge base, side-panel for big outputs, the connector standard. The features that turn Claude.ai from a chat to a workspace.', readingTime: '11 min', status: 'built' },
      { id: 'long-context',    number: 4, title: 'Long-context use cases',                     summary: 'When the 200k token context window lets you paste the whole document, what changes. "Lost in the middle" and how to prompt around it.', readingTime: '10 min', status: 'built' },
      { id: 'try-it-projects', number: 5, title: 'Try it — build a Claude Project',            summary: 'Hands-on capstone: 30 minutes to set up a personal-knowledge Project that pays back for months.', readingTime: '15 min', status: 'built' },
    ],
  },
  {
    id: 'claude-code',
    number: 6,
    title: 'Claude Code — the power-user tool',
    tagline: 'When you stop chatting and start building.',
    summary:
      'What Claude Code is and why it\'s different from the chat product. The PWA + GitHub + Pages pattern that actually works. Skills, hooks, sub-agents. Real examples.',
    accent: '#d946ef',
    status: 'built',
    lessons: [
      { id: 'what-is-cc',  number: 1, title: 'What Claude Code is and why it\'s different',  summary: 'A coding agent with a terminal, your filesystem, and patience.',     readingTime: '9 min', status: 'built' },
      { id: 'pwa-pattern', number: 2, title: 'The PWA + GitHub + Pages pattern',             summary: 'One battle-tested workflow for shipping useful tools.',              readingTime: '11 min', status: 'built' },
      { id: 'beyond-pwas', number: 3, title: 'Beyond PWAs — what else Claude Code can do',   summary: 'Scripts, data pipelines, automation, refactors.',                    readingTime: '9 min', status: 'built' },
      { id: 'skills-hooks',number: 4, title: 'Skills, hooks, sub-agents',                    summary: 'The advanced controls most users never touch.',                     readingTime: '10 min', status: 'built' },
      { id: 'try-it-cc',   number: 5, title: 'Try it — build something small',                summary: 'A guided 30-minute build.',                                          readingTime: '20 min', status: 'built' },
    ],
  },
  {
    id: 'multi-model',
    number: 7,
    title: 'Multi-model workflows — the Council pattern',
    tagline: 'Two models are better than one — when used right.',
    summary:
      'Why one model is rarely the best answer for the whole job. Critic-vs-author splits. The "Claude Council" pattern. Practical orchestration patterns.',
    accent: '#06b6d4',
    status: 'planned',
    lessons: [
      { id: 'why-multi-model',  number: 1, title: 'Why use more than one model',           summary: 'Different models, different blind spots.',                          readingTime: '7 min', status: 'planned' },
      { id: 'critic-author',    number: 2, title: 'Critic vs author splits',               summary: 'Pattern: one model writes, another tears it apart.',                readingTime: '8 min', status: 'planned' },
      { id: 'council-pattern',  number: 3, title: 'The Claude Council — challenge + check',summary: 'Get multiple models to review the same answer.',                    readingTime: '9 min', status: 'planned' },
      { id: 'try-it-council',   number: 4, title: 'Try it — orchestrate three models',     summary: 'Hands-on Council exercise.',                                         readingTime: '15 min', status: 'planned' },
    ],
  },
  {
    id: 'agents',
    number: 8,
    title: 'Agents and automation',
    tagline: 'When AI starts doing, not just answering.',
    summary:
      'What "agent" actually means in 2026. Copilot agents, Claude agents, custom GPTs. Where they fail. Practical guardrails. A simple agent you can build today.',
    accent: '#fb923c',
    status: 'planned',
    lessons: [
      { id: 'what-is-an-agent',   number: 1, title: 'What an agent actually is',           summary: 'Stripped of hype: an LLM that can call tools and act in a loop.',  readingTime: '8 min', status: 'planned' },
      { id: 'flavours',           number: 2, title: 'Copilot agents, Claude agents, custom GPTs', summary: 'How each platform handles agents — what they share, what differs.', readingTime: '9 min', status: 'planned' },
      { id: 'where-they-fail',    number: 3, title: 'Where agents fail',                   summary: 'Long horizons. Compounding error. Authority bound.',                readingTime: '8 min', status: 'planned' },
      { id: 'try-it-agent',       number: 4, title: 'Try it — build a simple agent',       summary: 'A 30-minute email-triage agent.',                                   readingTime: '20 min', status: 'planned' },
    ],
  },
  {
    id: 'privacy-security',
    number: 9,
    title: 'Privacy, security, compliance',
    tagline: 'What\'s safe with company data, what isn\'t.',
    summary:
      'Where your prompts go. Data residency. M365\'s data plane. Vendor terms. Australian-specific considerations. What\'s defensible to do with sensitive information.',
    accent: '#f43f5e',
    status: 'planned',
    lessons: [
      { id: 'where-prompts-go',  number: 1, title: 'Where your prompts actually go',         summary: 'A clear mental model of the data flow.',                            readingTime: '8 min', status: 'planned' },
      { id: 'm365-data-plane',   number: 2, title: 'The Microsoft 365 data plane',            summary: 'Why Copilot M365 is safer than ChatGPT.com.',                       readingTime: '9 min', status: 'planned' },
      { id: 'vendor-terms',      number: 3, title: 'Vendor terms (Anthropic, OpenAI, Google)',summary: 'What each says about training on your prompts.',                    readingTime: '8 min', status: 'planned' },
      { id: 'aus-specific',      number: 4, title: 'Australian-specific considerations',     summary: 'Privacy Act, OAIC guidance, sovereign data.',                       readingTime: '9 min', status: 'planned' },
      { id: 'practical-rules',   number: 5, title: 'Practical safe-use rules',                summary: 'A short list you can give your team tomorrow.',                     readingTime: '6 min', status: 'planned' },
    ],
  },
  {
    id: 'playbook',
    number: 10,
    title: 'The playbook — AI in daily work',
    tagline: 'Rebuild your day with AI.',
    summary:
      'A practical playbook across the seven work activities AI most reliably accelerates: email, meetings, drafting, research, code, decisions, and learning. Live exercises throughout.',
    accent: '#84cc16',
    status: 'planned',
    lessons: [
      { id: 'email',     number: 1, title: 'Email — triage, drafting, follow-up',      summary: 'The 10x leverage area for most knowledge workers.',                 readingTime: '10 min', status: 'planned' },
      { id: 'meetings',  number: 2, title: 'Meetings — prep, recap, action capture',   summary: 'Turn a 30-minute meeting into a 5-minute artifact.',                readingTime: '9 min', status: 'planned' },
      { id: 'drafting',  number: 3, title: 'Drafting — docs, slides, presentations',   summary: 'AI-as-collaborator workflows for written work.',                    readingTime: '10 min', status: 'planned' },
      { id: 'research',  number: 4, title: 'Research and synthesis',                   summary: 'Cutting through information overload.',                              readingTime: '11 min', status: 'planned' },
      { id: 'code',      number: 5, title: 'Code and spreadsheets — even for non-devs',summary: 'You don\'t need to be a developer to get value here.',              readingTime: '10 min', status: 'planned' },
      { id: 'decisions', number: 6, title: 'Decisions and critique',                   summary: 'Using AI as devil\'s advocate.',                                    readingTime: '9 min', status: 'planned' },
      { id: 'rebuild',   number: 7, title: 'Rebuild your day — capstone exercise',     summary: 'Map your typical week. Apply Praxis to it.',                        readingTime: '20 min', status: 'planned' },
    ],
  },
]

export function getModule(id: string): Module | undefined {
  return MODULES.find(m => m.id === id)
}

export function getLesson(moduleId: string, lessonId: string): Lesson | undefined {
  return getModule(moduleId)?.lessons.find(l => l.id === lessonId)
}

export function totalLessons(): number {
  return MODULES.reduce((s, m) => s + m.lessons.length, 0)
}

export function builtLessons(): number {
  return MODULES.reduce((s, m) => s + m.lessons.filter(l => l.status === 'built').length, 0)
}
