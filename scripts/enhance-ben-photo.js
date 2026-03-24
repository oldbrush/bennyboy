import * as fal from "@fal-ai/serverless-client";
import * as fs from "fs";
import * as path from "path";

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
});

async function enhancePhoto() {
  const imagePath = path.join(process.cwd(), "public/images/ben-harris.jpeg");
  
  // Read the image and convert to base64
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/jpeg;base64,${imageBuffer.toString("base64")}`;
  
  console.log("Uploading and enhancing image with fal AI...");
  
  try {
    // Use fal's image upscaler to enhance quality
    const result = await fal.subscribe("fal-ai/creative-upscaler", {
      input: {
        image_url: base64Image,
        scale: 2,
        creativity: 0.2, // Low creativity to preserve original look
        detail: 1.0,
        shape_preservation: 0.9, // High to keep facial features accurate
      },
    });
    
    if (result.image?.url) {
      // Download the enhanced image
      const response = await fetch(result.image.url);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Save enhanced image
      const enhancedPath = path.join(process.cwd(), "public/images/ben-harris-enhanced.jpeg");
      fs.writeFileSync(enhancedPath, buffer);
      
      console.log("Enhanced image saved to:", enhancedPath);
      console.log("Update AgentSection.tsx to use: /images/ben-harris-enhanced.jpeg");
    } else {
      console.error("No image URL in result:", result);
    }
  } catch (error) {
    console.error("Error enhancing image:", error);
  }
}

enhancePhoto();
