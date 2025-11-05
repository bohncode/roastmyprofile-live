// examples.ts
// Reference examples with MAXIMUM BRAINROT ENERGY to guide Claude's output

export const ROAST_EXAMPLES = `
EXAMPLE ROAST 1 (Gym Bro Profile - BRAINROT EDITION):
Profile: 4 shirtless gym selfies, bio says "6'2" since that matters 💪"

"Brother, we GET IT - you go to Planet Fitness. But four shirtless gym selfies is giving 'my personality peaked when I discovered creatine' energy. Negative 800 aura immediately. And leading with your height? That's not confidence, that's a compensation strategy written in bio form. BFR you're telling me NOTHING about who you are as a person. The ladies want to know if you can hold a conversation, not just a deadlift. Maybe try ONE gym pic and literally any other personality trait? Perhaps a hobby that doesn't involve mirrors? Revolutionary concept, I know. You're cooked rn but it's fixable - show us you have interests beyond the pump."

EXAMPLE ROAST 2 (Mystery Profile - BRAINROT EDITION):
Profile: All group photos, sunglasses in every pic, bio is just travel emojis ✈️🌍🗺️

"Playing Where's Waldo with your profile pics is NOT the vibe. This is giving main character syndrome but make it confusing. I've seen five different brunettes and three different haircuts, and I still don't know which one is you. Lost 1000 aura points for the mystery novel approach. And a row of travel emojis as your bio? EVERYONE loves travel, Sarah. That's not a personality, that's a boarding pass collection. This is NPC behavior. Tell me something that makes you YOU, not just 'person who has been to an airport.' The sunglasses in every photo? What are you hiding? A face? The suspense is killing me, but not in a good way. You're giving witness protection program meets 'I'm too cool to show my face.' Delete the group pics, show your actual face, and write words. Actual human words."

EXAMPLE ROAST 3 (The Fish Pic - MAXIMUM BRAINROT):
Profile: Guy holding fish, bio says "Just ask 🎣"

"The fish pic. In twenty twenty-five. MY GUY. This meme is older than your relationship with that bass. It's COOKED. Been done. Been mocked. Been turned into a drinking game. And you STILL went with it. The fish community is begging you to stop. And 'just ask' as a bio? That's not mysterious, that's MAXIMUM LAZINESS. You're basically saying 'I couldn't be bothered to write three sentences about myself, so YOU do the heavy lifting.' This is giving negative infinity aura. Why would anyone swipe right on maximum effort? At least the fish tried harder than you did. Here's the fix: Delete the fish. Write an actual bio with your interests. Show us literally anything about your personality. You can recover from this but you gotta put in work."

EXAMPLE ROAST 4 (Generic Everything - CURRENT REFERENCES):
Profile: Mix of okay photos, bio says "Love to laugh, looking for adventure, fluent in sarcasm, The Office fan 🍕"

"This bio is like a greatest hits compilation of 2015 Tinder. Giving major NPC energy. 'Love to laugh'? EVERYONE loves to laugh. That's like saying 'I enjoy breathing' or 'I prefer not being on fire.' It's not a personality trait, it's basic human function. Zero aura points for this. 'Looking for adventure'? What does that MEAN? Are we going skydiving or to Target? Be specific. 'Fluent in sarcasm'? My dude, that phrase has been cringe since before TikTok existed. It's COOKED. And The Office? Listen, I love the show too, but if that's your entire identity, that's called having 'no personality' with extra steps. Give me something REAL. What makes YOU different from the other 47 people who wrote this exact same bio? You're currently giving copy-paste energy. Fix: Delete all these clichés and tell me one specific interesting thing about you."

EXAMPLE ROAST 5 (Actually Good Profile - POSITIVE AURA):
Profile: Variety of photos (one with dog, one hobby shot, one clear face photo), decent bio with personality

"Okay, okay, I see you. FINALLY someone who understands the assignment. +1000 aura immediately. You've got photo variety - we can see your face, you're doing things you enjoy, and you're not hiding behind sunglasses like you're in witness protection. The bio has actual personality instead of the usual 'love to laugh' template garbage. You mention specific interests that give conversation starters. The dog photo? *Chef's kiss* - but it's not your WHOLE personality. This is what a profile should look like. Not giving NPC behavior at all. Would I change anything? Maybe swap out [specific suggestion], but honestly? This is leagues ahead of the competition. You're NOT cooked. You'll do fine. My only advice: stay this authentic and don't overthink it. The bar is in hell and you cleared it by miles."

EXAMPLE ROAST 6 (Looksmaxxing Brainrot Guy):
Profile: All photos are intense "mogging" poses, mentions going to the gym 5x a week, every pic shows mewing

"Bro. BRO. I can tell you've discovered looksmaxxing TikTok and it's become your whole personality. Every single photo you're doing that mewing tongue thing and trying to mog the camera. This is giving terminal brainrot energy. We can see you're trying to hit that canthal tilt and get the hunter eyes but it's coming across as... constipated? Negative 2000 aura for making it this obvious. The gym 5x a week in your bio? That's great for you but it's not a dating app flex, it's a personality replacement. You've softmaxxed yourself into thinking this is attractive when really it's giving 'I base my self-worth on PSL ratings.' The Patrick Bateman energy is STRONG but not in the way you think. Touch grass. Like actually go outside and develop interests beyond the grindset. You're cooked unless you chill with the looksmaxxing and show you're a normal human who can talk about things that aren't the gym or facial aesthetics."

EXAMPLE ROAST 7 (Car Selfie NPC):
Profile: 3 car selfies, 1 mirror selfie, bio says "Ask me anything"

"The car selfies. ALL car selfies. This is giving 'I have zero friends to take photos of me' energy. Lost all your aura in the parking lot. We can see your steering wheel better than your personality. And 'Ask me anything'? No. YOU tell ME something. This is not a job interview, it's a dating app. You're giving maximum NPC behavior - like the default character creation screen. Zero effort detected. BFR you thought this was it? The one mirror selfie thrown in isn't saving you. This profile is MID at best. Fix it: Get literally one photo of you doing something. Anything. A hobby. With friends. Existing in the world. Write a bio with actual information. You're cooked but recoverable if you try."
`;

export const FEW_SHOT_PROMPT = `
Here are examples of the roasting style and quality I'm looking for (with current brainrot energy):

${ROAST_EXAMPLES}

Now roast this profile in a similar style - specific, funny, uses current slang/memes naturally, and mixes brutal honesty with actual advice. Use aura points, call out NPC behavior, reference if they're cooked, and keep the brainrot energy HIGH but accessible.
`;

export function getFewShotExamples(): string {
  return FEW_SHOT_PROMPT;
}
