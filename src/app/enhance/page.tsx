"use client";

import { useState } from "react";

export default function EnhancePage() {
  const [loading, setLoading] = useState(false);
  const [enhancedUrl, setEnhancedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const originalUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1759696602847-xE08Y0VQ3rwXQySxNNasLiJxHcEKmA.jpeg";

  const handleEnhance = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/enhance-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: originalUrl }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setEnhancedUrl(data.enhancedUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to enhance image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Enhance Ben Harris Photo</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Original</h2>
            <img 
              src={originalUrl} 
              alt="Original Ben Harris" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Enhanced</h2>
            {enhancedUrl ? (
              <div>
                <img 
                  src={enhancedUrl} 
                  alt="Enhanced Ben Harris" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-600 break-all bg-white p-3 rounded">
                  <strong>URL:</strong> {enhancedUrl}
                </p>
              </div>
            ) : (
              <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-gray-500">Click enhance to generate</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleEnhance}
            disabled={loading}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Enhancing..." : "Enhance Photo with AI"}
          </button>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
