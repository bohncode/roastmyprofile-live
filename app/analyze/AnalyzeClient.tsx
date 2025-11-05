'use client';

import { useState } from 'react';
import { analyzeProfile } from '../actions/analyze';
import { PersonalityMode } from '@/lib/prompts/personalities';

const PERSONALITY_OPTIONS: { value: PersonalityMode; label: string; emoji: string; description: string }[] = [
  { value: 'savage', label: 'Savage', emoji: '🔥', description: 'Maximum brainrot roast energy' },
  { value: 'helpful', label: 'Helpful', emoji: '💙', description: 'Supportive and constructive' },
  { value: 'gordon-ramsay', label: 'Gordon Ramsay', emoji: '👨‍🍳', description: 'Kitchen Nightmares for dating' },
  { value: 'gen-z', label: 'Gen Z', emoji: '💀', description: 'Chronically online brainrot' },
  { value: 'therapist', label: 'Therapist', emoji: '🧘', description: 'Psychological analysis' }
];

export default function AnalyzeClient() {
  const [selectedMode, setSelectedMode] = useState<PersonalityMode>('savage');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Limit to 6 images
    const selectedFiles = files.slice(0, 6);
    setImages(selectedFiles);

    // Create preview URLs
    const previews = selectedFiles.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
    
    // Clear previous results
    setAnalysis(null);
    setError(null);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
    // Revoke the URL to free memory
    URL.revokeObjectURL(imagePreviews[index]);
    
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleAnalyze = async () => {
    if (images.length === 0) {
      setError('Please upload at least one image');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setAnalysis(null);

    try {
      // Convert images to base64 with their MIME types
      const base64Images = await Promise.all(
        images.map(async (file) => {
          return new Promise<{ data: string; type: string }>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              const result = reader.result as string;
              const base64 = result.split(',')[1]; // Remove data:image prefix
              const mimeType = result.split(',')[0].split(':')[1].split(';')[0]; // Extract MIME type
              resolve({ data: base64, type: mimeType });
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      // Call server action with images and their types
      const result = await analyzeProfile(
        selectedMode, 
        base64Images.map(img => img.data),
        base64Images.map(img => img.type)
      );

      if (result.success && result.analysis) {
        setAnalysis(result.analysis);
      } else {
        setError(result.error || 'Analysis failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">
          Get Your Profile Roasted
        </h1>
        <p className="text-lg text-gray-600">
          Upload screenshots of your dating profile and choose your feedback style
        </p>
      </div>

      {/* Personality Selection */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Roast Style</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {PERSONALITY_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedMode(option.value)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedMode === option.value
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-3xl mb-2">{option.emoji}</div>
              <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
              <div className="text-xs text-gray-600">{option.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* File Upload */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Profile Screenshots</h2>
        <p className="text-sm text-gray-600 mb-4">
          Upload 1-6 images from your dating profile (photos, bio, prompts)
        </p>
        
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
        >
          <div className="text-center">
            <div className="text-4xl mb-2">📸</div>
            <div className="text-sm text-gray-600">
              <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
            </div>
            <div className="text-xs text-gray-500 mt-1">PNG, JPG up to 10MB each</div>
          </div>
        </label>

        {/* Image Previews */}
        {imagePreviews.length > 0 && (
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative group">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg border border-gray-200"
                />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={isAnalyzing || images.length === 0}
        className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {isAnalyzing ? 'Analyzing...' : 'Roast My Profile 🔥'}
      </button>

      {/* Error Message */}
      {error && (
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800">{error}</p>
        </div>
      )}

      {/* Analysis Result */}
      {analysis && (
        <div className="mt-8 bg-white border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Analysis</h2>
          <div className="prose max-w-none">
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
              {analysis}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => {
                setAnalysis(null);
                setImages([]);
                setImagePreviews([]);
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Analyze Another Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
