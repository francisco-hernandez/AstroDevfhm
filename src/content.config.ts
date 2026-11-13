import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['identity', 'strategy', 'uiux', 'productivity', 'design', 'tech']),
      pubDate: z.coerce.date(),
      image: image(),
      featured: z.boolean().default(false),
      lang: z.enum(['es', 'en']),
      translationSlug: z.string().optional(),
    }),
});

export const collections = { blog };
