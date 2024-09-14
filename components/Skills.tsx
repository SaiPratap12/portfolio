import React from "react";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaNodeJs,
	FaPython,
	FaJava,
	FaFigma,
} from "react-icons/fa";
import {
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiMysql,
	SiFirebase
} from "react-icons/si";

interface Skill {
	name: string;
	icon: React.ReactNode;
}

const Skills: React.FC = () => {
	const skills: Skill[] = [
		{ name: "HTML", icon: <FaHtml5 /> },
		{ name: "CSS", icon: <FaCss3 /> },
		{ name: "JavaScript", icon: <FaJs /> },
		{ name: "TypeScript", icon: <SiTypescript /> },
		{ name: "React", icon: <FaReact /> },
		{ name: "Next.js", icon: <SiNextdotjs /> },
		{ name: "Java", icon: <FaJava /> },
		{ name: "Node.js", icon: <FaNodeJs /> },
		{ name: "MySQL", icon: <SiMysql /> },
		{ name: "Tailwind CSS", icon: <SiTailwindcss /> },
		{ name: "Python", icon: <FaPython /> },
		{ name: "Figma", icon: <FaFigma /> },
		{ name: "Firebase", icon: <SiFirebase /> },
	];

	return (
		<section className="bg-slate-950 w-full py-12 px-4">
			<div className="container mx-auto">
				<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
					Tech Skills
				</h2>
				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center">
					{skills.map((skill, index) => (
						<SkillIcon
							key={index}
							name={skill.name}
							icon={skill.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const SkillIcon: React.FC<Skill> = ({ name, icon }) => {
	return (
		<div className="flex flex-col items-center group">
			<div className="text-white text-2xl sm:text-3xl lg:text-4xl mb-2 group-hover:text-purple-500 transition-all duration-300 ease-in-out group-hover:scale-110">
				{icon}
			</div>
			<span className="text-white text-xs sm:text-sm text-center group-hover:text-purple-500 transition-colors duration-300">
				{name}
			</span>
		</div>
	);
};

export default Skills;