import { type NextRequest, NextResponse } from 'next/server'
import * as fal from '@fal-ai/serverless-client'

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json()

    if (!imageUrl) {
      return NextResponse.json({ error: 'Image URL is required' }, { status: 400 })
    }

    // Use fal's creative upscaler to enhance quality
    const result = await fal.subscribe('fal-ai/creative-upscaler', {
      input: {
        image_url: imageUrl,
        scale: 2,
        creativity: 0.2, // Low creativity to preserve original look
        detail: 1.0,
        shape_preservation: 0.9, // High to keep facial features accurate
      },
    })

    // Extract the image URL from the result
    const enhancedUrl = (result as { image?: { url?: string } }).image?.url

    if (!enhancedUrl) {
      throw new Error('No enhanced image generated')
    }

    return NextResponse.json({ enhancedUrl })
  } catch (error) {
    console.error('Error enhancing image:', error)
    return NextResponse.json(
      { error: 'Failed to enhance image' },
      { status: 500 },
    )
  }
}
