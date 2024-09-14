import React from "react";

const projects = [
	{
		title: "Illiquidlabs",
		stack: "Next JS | Tailwind CSS",
		description:
			"Welcome to Illiquidlabs, where Web3 magic meets gaming mastery! Embrace the future of play-to-earn adventures. 🚀🎮",
		githubLink: "https://github.com/SaiPratap414",
		vercelLink: "https://www.illiquidlabs.com/",
	},
	{
		title: "Chakra.world",
		stack: "Next JS | Tailwind CSS",
		description:
			"Website made for pioneers of Web3 gaming. Unleash Chakra-powered adventures, where every play is a step into a blockchain-infused realm of endless possibilities. 🌐🚀.",
		githubLink: "https://github.com/SaiPratap414",
		vercelLink: "https://www.chakra.world/",
	},
	{
		title: "Buildabotai.app",
		stack: "Solidity | Chainlink | Next JS | Tailwind CSS",
		description:
			"Transform online communities effortlessly with BuildABotAI—your gateway to smart, no-code AI bots. Revolutionize engagement, streamline interactions, and elevate user experiences in just a few clicks. 🤖✨!",
		githubLink: "https://github.com/SaiPratap414",
		vercelLink: "https://buildbotv1.vercel.app/",
	},
	{
		title: "VChat App",
		stack: "React | Vite | Express | Socket.io | AWS S3 | CloudFront | AWS EC2 | Nginx | Drizzle | Postgres",
		description:
			"A real-time chat application built to demonstrate modern web development practices. This app features real-time communication, user authentication, and media storage, providing a seamless chatting experience.",
		githubLink: "https://github.com/SaiPratap414/VChat.git",
		vercelLink: "",
	},
	{
		title: "Attendance Tracker for Slack",
		stack: "Slack Bolt Framework | MongoDB | Node.js | Express",
		description:
			"An attendance tracker integrated with Slack to manage and track user attendance, generate reports, and export data.",
		githubLink: "https://github.com/SaiPratap414/Attendencetracker",
		vercelLink: "",
	},
	{
		title: "RealMarv.vip",
		stack: "React | TSX | Module CSS",
		description:
			"A crypto meme coin website designed with a 2M dollar market cap. The entire page was designed in Figma.",
		githubLink: "https://github.com/SaiPratap414/marv",
		vercelLink: "https://www.realmarv.vip/",
	},
	{
		title: "AI-powered-weather-chatbot",
		stack: "Node.js | OpenAI GPT-3.5 Turbo | WeatherStack API",
		description:
			"A weather chatbot using OpenAI's GPT-3.5 Turbo model with dynamic function calling for real-time weather data retrieval.",
		githubLink: "https://github.com/SaiPratap414/AI-Weather.git",
		vercelLink: "",
	},
];

const Project: React.FC = () => {
	return (
		<section className="w-full bg-slate-950 py-12 px-4">
			<div className="container mx-auto">
				<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
					Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							{...project}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

interface ProjectCardProps {
	title: string;
	stack: string;
	description: string;
	githubLink: string;
	vercelLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, stack, description, githubLink, vercelLink }) => {
	return (
		<div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
			<div>
				<h3 className="text-white text-2xl font-bold mb-2">
					{title}
				</h3>
				<p className="text-purple-400 text-sm font-semibold mb-4 uppercase">
					{stack}
				</p>
				<p className="text-gray-300 mb-6">
					{description}
				</p>
			</div>
			<div className="flex flex-wrap gap-4">
				<a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="bg-purple-700 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-600 text-sm font-medium">
					GitHub
				</a>
				{vercelLink && (
					<a
						href={vercelLink}
						target="_blank"
						rel="noopener noreferrer"
						className="border-purple-700 border-2 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-purple-700 text-sm font-medium">
						Website
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;