import { getPlaiceholder } from "plaiceholder";
import { Photo, ImagesResults } from "@/models/Images";

async function getBase64(imageURL: string) {
  try {
    const res = await fetch(imageURL)

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    }

    const buffer = await res.arrayBuffer()

    const { base64 } = await getPlaiceholder(Buffer.from(buffer))
    
    return base64
  } catch (e) {
    if (e instanceof Error) console.log(e.stack)
  }
}

export default async function addBlurredDataUrls(images: ImagesResults): Promise<Photo[]> {
  const base64Promises = images.photos.map((photo) => getBase64(photo.src.large))

  const base64Results = await Promise.all(base64Promises)

  const photosWithBlur: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Results[i]
    return photo
  })
  
  return photosWithBlur
}