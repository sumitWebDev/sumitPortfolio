'use client';
import Link from 'next/link';

import { motion } from 'framer-motion';

const projects = [
	{
		title: 'Google Photo Sharing App',
		description: 'A modern dashboard with dark mode, real-time charts, and responsive design',
		image: '/laptop.jpg',
		tags: ['React', 'TypeScript', 'Tailwind CSS', 'Websocket'],
	},
	// {
	// 	title: 'Social Media App',
	// 	description: 'Full-featured social platform with real-time messaging and notifications',
	// 	image: '/code.jpg',
	// 	tags: ['Next.js', 'Socket.io', 'Prisma', 'TailwindCSS'],
	// },
];

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					Featured Projects
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="group relative bg-gray-900/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800"
						>
							<div className="aspect-video relative overflow-hidden">
							<Link href="https://google-photo-sharing-kt6iq6ucw-sumits-projects-b57d5c17.vercel.app/">
								<img src="https://raw.githubusercontent.com/sumitWebDev/google-photo-sharing-app/refs/heads/master/public/153786414-1a56cdd8-da98-4057-a698-906917db9233.png" alt={project.title} className="object-cover transition-transform duration-300 group-hover:scale-105" />
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-transform duration-300 group-hover:scale-105" />
							</Link>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold mb-2">{project.title}</h3>
								<p className="text-gray-400 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, i) => (
										<span key={i} className="text-sm px-3 py-1 bg-gray-800 rounded-full">
											{tag}
											
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
