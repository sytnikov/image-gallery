import { z } from "zod"; 

const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  next_page: z.string().optional(),
  prev_page: z.string().optional(),
})

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  src: z.object({
    large: z.string()
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
})

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema)
})

export type Photo = z.infer<typeof PhotoSchema>

export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>