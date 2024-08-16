"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
export default function page() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="flex flex-col gap-4 justify-center border rounded w-1/3 p-4">
				<div className="w-full h-full items-start justify-center flex">
					<Image
						src="/authWelcomeImage.webp"
						alt="Welcome"
						width={250}
						height={250}
						className="w-full"
					/>
				</div>
				<h1 className="text-3xl">Nofy</h1>
				<p className="text-md">SignIn to continue</p>
				<button
					onClick={() => signIn("github")}
					className="p-2 rounded dark:bg-blue-950 dark:text-white flex gap-2 items-center justify-center text-sm"
				>
					<FaGithub size={20} />
					Sign In
				</button>
			</div>
		</div>
	);
}
