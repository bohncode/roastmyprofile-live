# 🔥 RoastMyProfile - AI Dating Profile Analyzer

Get brutally honest AI-powered feedback on your dating profile. Built with Next.js 14, TypeScript, Tailwind CSS, and Claude AI.

## Features

- 🎭 **5 Personality Modes**: Savage, Helpful, Gordon Ramsay, Gen Z, and Therapist
- 🧠 **Current Dating Culture**: Trained on 2025 TikTok trends and dating slang
- 📸 **Multi-Image Upload**: Analyze up to 6 profile screenshots
- ⚡ **Instant Results**: Get your roast in seconds
- 🎯 **Specific Feedback**: Real observations, not generic advice

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Claude Sonnet 4 (Anthropic API)
- **Deployment**: Netlify-ready

## Setup Instructions

### 1. Clone/Download the Project

If you haven't already, the project should be in your `roastmyprofile` folder.

### 2. Open in VS Code

```bash
cd roastmyprofile
code .
```

### 3. Install Dependencies

Open the VS Code terminal (Terminal → New Terminal) and run:

```bash
npm install
```

### 4. Set Up Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Anthropic API key:
   - Go to [console.anthropic.com](https://console.anthropic.com/)
   - Sign up or log in
   - Create an API key
   - Copy the key

3. Open `.env.local` and add your key:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-your-actual-key-here
   ```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## Project Structure

```
roastmyprofile/
├── app/
│   ├── actions/
│   │   └── analyze.ts          # Server action for Claude API
│   ├── analyze/
│   │   ├── page.tsx            # Analyze page wrapper
│   │   └── AnalyzeClient.tsx   # Upload UI component
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   └── globals.css             # Global styles
├── lib/
│   └── prompts/
│       ├── dating-context.ts   # Current dating culture & slang
│       ├── personalities.ts    # 5 roast personalities
│       ├── examples.ts         # Example roasts for few-shot
│       └── prompt-builder.ts   # Combines prompts for API
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.example
```

## Deployment to Netlify

### Option 1: Git Deploy (Recommended)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create a new repo on [github.com](https://github.com)
   - Follow the instructions to push your code:
     ```bash
     git remote add origin https://github.com/yourusername/roastmyprofile.git
     git branch -M main
     git push -u origin main
     ```

3. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repo
   - **Build Settings**:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - **Environment Variables**:
     - Add `ANTHROPIC_API_KEY` with your API key
   - Click "Deploy site"

### Option 2: Drag & Drop Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag the `.next` folder onto the deploy area
   - Add your `ANTHROPIC_API_KEY` in Site settings → Environment variables

## Customization

### Update Dating Slang (Monthly)

Edit `lib/prompts/dating-context.ts` to keep the content fresh:
- Add new TikTok trends
- Update current slang
- Remove outdated terms

### Modify Personalities

Edit `lib/prompts/personalities.ts` to adjust the tone of each roast mode.

### Change Styling

All styles use Tailwind CSS. Modify classes in the component files or update `tailwind.config.ts` for theme changes.

## API Usage

The app uses Claude Sonnet 4 (`claude-sonnet-4-20250514`). Current costs:
- Input: $3 per million tokens
- Output: $15 per million tokens

A typical profile analysis uses ~2,000-3,000 tokens (images + text), costing $0.03-$0.05 per roast.

## Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Images not uploading
- Check file size (max 10MB)
- Ensure images are JPG/PNG format

### API errors
- Verify your API key in `.env.local`
- Check you have API credits at console.anthropic.com

### Build fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Monthly Maintenance

1. **Update dating-context.ts** with fresh slang (takes 15 min)
2. **Check examples.ts** to ensure roasts feel current
3. **Monitor API costs** at console.anthropic.com

## License

MIT License - feel free to use this for your own projects!

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Anthropic API docs: [docs.anthropic.com](https://docs.anthropic.com)
3. Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Built with 🔥 by [Your Name]**
