import type { NextAuthOptions } from "next-auth";

import GithubProvider from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.clientId!,
			clientSecret: process.env.clientSecret!,
		}),
	],
	pages: {
		signIn: "/auth/signIn",
	},
};

// CredentialsProvider({
// 	name: "Credentials",
// 	credentials: {
// 		username: {
// 			label: "Username:",
// 			type: "text",
// 			placeholder: "Your Username",
// 		},
// 		password: {
// 			label: "Password",
// 			type: "password",
// 			placeholder: "Your Password",
// 		},
// 	},
// 	async authorize(credentials) {
// 		const user = { id: "100", name: "Foo", password: "Bar" };
// 		if (
// 			credentials?.username === user.name &&
// 			credentials.password === user.password
// 		)
// 			return user;
// 		return null;
// 	},
// }),
