'use server';

import { createClaudeMessages } from '@/lib/prompts/prompt-builder';
import { PersonalityMode } from '@/lib/prompts/personalities';

export async function analyzeProfile(
  mode: PersonalityMode,
  images: string[], // base64 images without data:image prefix
  imageTypes: string[] // MIME types like 'image/jpeg', 'image/png'
) {
  try {
    // Build the request for Claude API
    const requestBody = createClaudeMessages(mode, images, imageTypes, true);
    
    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY || "",
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API request failed: ${response.status} - ${error}`);
    }

    const data = await response.json();
    
    // Return the analysis text
    return {
      success: true,
      analysis: data.content[0].text
    };
  } catch (error) {
    console.error('Analysis error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
