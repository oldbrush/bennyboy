import * as fal from '@fal-ai/serverless-client'
import * as fs from 'fs'
import * as path from 'path'

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
})

async function enhancePhoto() {
  const imagePath = path.join(process.cwd(), 'public/images/ben-harris.jpeg')
  const imageBuffer = fs.readFileSync(imagePath)
  const base64Image = imageBuffer.toString('base64')
  const dataUrl = `data:image/jpeg;base64,${base64Image}`

  console.log('Uploading image to fal...')
  
  // Upload the image first
  const imageUrl = await fal.storage.upload(new Blob([imageBuffer], { type: 'image/jpeg' }))
  console.log('Image uploaded:', imageUrl)

  // Use fal's image upscaler/enhancer with outpainting to extend the image upward
  console.log('Enhancing and extending image with AI...')
  
  const result = await fal.subscribe('fal-ai/creative-upscaler', {
    input: {
      image_url: imageUrl,
      scale: 2,
      creativity: 0.3,
      detail: 1,
      shape_preservation: 0.5,
      prompt: "professional headshot photo of a friendly real estate agent man with short brown hair and beard, wearing striped button-up shirt, arms crossed, modern home with landscaping in background, natural lighting, high quality professional photography"
    },
  }) as { image: { url: string } }

  console.log('Enhancement complete!')
  
  if (result.image?.url) {
    // Download the enhanced image
    const response = await fetch(result.image.url)
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
    // Save as new file
    const outputPath = path.join(process.cwd(), 'public/images/ben-harris-enhanced.jpeg')
    fs.writeFileSync(outputPath, buffer)
    console.log('Enhanced image saved to:', outputPath)
  }
}

enhancePhoto().catch(console.error)
