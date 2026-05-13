/**
 * Lesson renderer registry. Keyed by "moduleId/lessonId".
 * Used by the Lesson page to render the right content for the active route.
 */
import {
  WhatIsAnLLM,
  NeuralNetworks,
  TrainingFineTuningRAG,
  Hallucination,
  ContextAndTokens,
  WhyModelsDiffer,
  PracticalImplications,
} from './module-1'
import {
  TheSixFamilies,
  StrengthsWeaknesses,
  HowVersioningWorks,
  DecisionMatrix,
  SideBySide,
} from './module-2'
import {
  AnatomyOfAPrompt,
  Personas,
  ConstraintPrompting,
  Iteration,
  TemplatesAndFewShot,
  PromptLibrary,
} from './module-3'
import {
  WhatCopilotIs,
  CopilotEverywhere,
  ChatVsApp,
  WorkVsWeb,
  Permissions,
  SourceDocuments,
  CopilotAgents,
  CopilotWorkout,
} from './module-4'
import {
  WhatClaudeIs,
  ThreeFlavours,
  ProjectsArtefacts,
  LongContextUseCases,
  TryItProjects,
} from './module-5'
import {
  WhatIsClaudeCode,
  PwaPattern,
  BeyondPwas,
  SkillsHooks,
  TryItCC,
} from './module-6'

export const LESSON_RENDERERS: Record<string, () => React.ReactElement> = {
  // Module 1 — How AI actually works
  'how-ai-works/what-is-an-llm':            WhatIsAnLLM,
  'how-ai-works/neural-networks':           NeuralNetworks,
  'how-ai-works/training-fine-tuning-rag':  TrainingFineTuningRAG,
  'how-ai-works/hallucination':             Hallucination,
  'how-ai-works/context-and-tokens':        ContextAndTokens,
  'how-ai-works/why-models-differ':         WhyModelsDiffer,
  'how-ai-works/practical-implications':    PracticalImplications,
  // Module 2 — The frontier models today
  'frontier-models/the-six-families':       TheSixFamilies,
  'frontier-models/strengths-weaknesses':   StrengthsWeaknesses,
  'frontier-models/versioning':             HowVersioningWorks,
  'frontier-models/decision-matrix':        DecisionMatrix,
  'frontier-models/side-by-side':           SideBySide,
  // Module 3 — Prompting
  'prompting/anatomy-of-a-prompt':          AnatomyOfAPrompt,
  'prompting/personas':                     Personas,
  'prompting/constraint-prompting':         ConstraintPrompting,
  'prompting/iteration':                    Iteration,
  'prompting/templates':                    TemplatesAndFewShot,
  'prompting/prompt-library':               PromptLibrary,
  // Module 4 — Microsoft Copilot deep dive
  'copilot-deep-dive/what-copilot-actually-is': WhatCopilotIs,
  'copilot-deep-dive/copilot-everywhere':       CopilotEverywhere,
  'copilot-deep-dive/chat-vs-app':              ChatVsApp,
  'copilot-deep-dive/work-vs-web':              WorkVsWeb,
  'copilot-deep-dive/permissions':              Permissions,
  'copilot-deep-dive/source-documents':         SourceDocuments,
  'copilot-deep-dive/agents':                   CopilotAgents,
  'copilot-deep-dive/progressive-difficulty':   CopilotWorkout,
  // Module 5 — Claude deep dive
  'claude-deep-dive/what-claude-is':            WhatClaudeIs,
  'claude-deep-dive/three-flavours':            ThreeFlavours,
  'claude-deep-dive/projects':                  ProjectsArtefacts,
  'claude-deep-dive/long-context':              LongContextUseCases,
  'claude-deep-dive/try-it-projects':           TryItProjects,
  // Module 6 — Claude Code: the power-user tool
  'claude-code/what-is-cc':                     WhatIsClaudeCode,
  'claude-code/pwa-pattern':                    PwaPattern,
  'claude-code/beyond-pwas':                    BeyondPwas,
  'claude-code/skills-hooks':                   SkillsHooks,
  'claude-code/try-it-cc':                      TryItCC,
}
