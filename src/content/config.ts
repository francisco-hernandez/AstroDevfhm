import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		image: z.string().optional(),
		category: z.string(),
		author: z.string().default('El Perezoso'),
	}),
});

export const collections = { blog };
