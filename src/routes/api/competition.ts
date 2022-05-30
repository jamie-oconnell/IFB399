import { writeFileSync } from 'fs';
import prisma from '$lib/prisma';

export async function get() {
	try {
		const data = await prisma.compEntry.findMany({});

		return {
			body: data,
			status: 200
		};
	} catch (error) {
		console.log(error);
	}
}

export async function post({ request }) {
	let body = {};
	let status = 500;
	try {
		const data = JSON.parse((await request.body.read()).toString());

		const file = data['image'];
		const title = data['title'];
		const description = data['description'];
		const firstName = data['firstName'];
		const lastName = data['lastName'];
		const phone = data['phone'];
		const email = data['email'];

		writeFileSync(`static/compuploads/${title}.png`, file, 'base64');

		body = await prisma.compEntry.create({
			data: {
				title: title,
				path: `/compuploads/${title}.png`,
				description: description,
				firstName: firstName,
				lastName: lastName,
				phone: phone,
				email: email,
				created_at: new Date()
			}
		});
		status = 200;
		return {
			status,
			body
		};
	} catch (error) {
		console.log(error);
	}
}
