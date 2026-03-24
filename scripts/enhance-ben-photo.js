import * as fal from "@fal-ai/serverless-client";

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
});

async function enhancePhoto() {
  // Use the original uploaded image URL directly
  const imageUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1759696602847-xE08Y0VQ3rwXQySxNNasLiJxHcEKmA.jpeg";
  
  console.log("Enhancing image with fal AI...");
  
  try {
    // Use fal's image upscaler to enhance quality
    const result = await fal.subscribe("fal-ai/creative-upscaler", {
      input: {
        image_url: imageUrl,
        scale: 2,
        creativity: 0.2, // Low creativity to preserve original look
        detail: 1.0,
        shape_preservation: 0.9, // High to keep facial features accurate
      },
    });
    
    if (result.image?.url) {
      console.log("Enhanced image URL:", result.image.url);
      console.log("\nCopy this URL and use it in the AgentSection component.");
    } else {
      console.error("No image URL in result:", result);
    }
  } catch (error) {
    console.error("Error enhancing image:", error);
  }
}

enhancePhoto();
