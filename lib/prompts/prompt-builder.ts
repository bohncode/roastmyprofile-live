// prompt-builder.ts
// Combines all prompt components into final Claude API prompts

import { getPrompt, PersonalityMode } from './personalities';
import { getFewShotExamples } from './examples';
import { CONTEXT_LAST_UPDATED } from './dating-context';

export interface PromptOptions {
  mode: PersonalityMode;
  includeExamples?: boolean; // Use few-shot examples for better quality
}

export function buildAnalysisPrompt(options: PromptOptions): string {
  const { mode, includeExamples = true } = options;
  
  const basePrompt = getPrompt(mode);
  const examples = includeExamples ? getFewShotExamples() : '';
  
  return `${basePrompt}

${examples}

IMPORTANT REMINDERS:
- Be specific about what you see in the actual photos
- Reference current dating culture naturally (use the slang guide above)
- Make them laugh while also helping them improve
- Keep responses under 500 words - punchy and entertaining
- Don't just list generic advice - give SPECIFIC observations
- Use formatting (bold headers, line breaks) for readability

Now analyze these dating profile images:`;
}

export function getSystemMessage(): string {
  return `You are an expert dating profile analyst with deep knowledge of current dating culture, memes, and social media trends. Your analysis should be entertaining, insightful, and culturally relevant.

Context last updated: ${CONTEXT_LAST_UPDATED}

You have access to the latest dating slang, TikTok trends, and X (Twitter) memes to make your analysis feel fresh and current.`;
}

// Helper for API calls
export function createClaudeMessages(
  mode: PersonalityMode,
  imageData: string[], // base64 encoded images
  imageTypes: string[], // MIME types like 'image/jpeg', 'image/png'
  includeExamples: boolean = true
) {
  const prompt = buildAnalysisPrompt({ mode, includeExamples });
  
  // Build content array with images
  const content: any[] = imageData.map((data, index) => ({
    type: "image",
    source: {
      type: "base64",
      media_type: imageTypes[index] || "image/jpeg", // Use actual MIME type
      data: data
    }
  }));
  
  // Add text prompt
  content.push({
    type: "text",
    text: prompt
  });
  
  return {
    model: "claude-sonnet-4-20250514",
    max_tokens: 2000,
    messages: [
      {
        role: "user",
        content: content
      }
    ]
  };
}

// For testing/debugging
export function previewPrompt(mode: PersonalityMode): string {
  return buildAnalysisPrompt({ mode, includeExamples: true });
}
