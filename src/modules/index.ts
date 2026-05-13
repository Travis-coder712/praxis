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

export const LESSON_RENDERERS: Record<string, () => React.ReactElement> = {
  'how-ai-works/what-is-an-llm':            WhatIsAnLLM,
  'how-ai-works/neural-networks':           NeuralNetworks,
  'how-ai-works/training-fine-tuning-rag':  TrainingFineTuningRAG,
  'how-ai-works/hallucination':             Hallucination,
  'how-ai-works/context-and-tokens':        ContextAndTokens,
  'how-ai-works/why-models-differ':         WhyModelsDiffer,
  'how-ai-works/practical-implications':    PracticalImplications,
}
