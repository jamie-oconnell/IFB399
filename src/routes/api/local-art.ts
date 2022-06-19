import { writeFileSync } from 'fs';
import prisma from '$lib/prisma';

export async function get() {
	try {
		const data = await prisma.localArt.findMany({});

		return {
			body: data,
			status: 200
		};
	} catch (error) {
		console.log(error);
	}
}
// allocating the information saved from the art submission
export async function post({ request }) {
	let body = {};
	let status = 500;
	try {
		const data = JSON.parse((await request.body.read()).toString());

		const file = data['image'];
		const title = data['title'];
// allocating the save location for images uploaded
		writeFileSync(`static/local_art_uploads/${title}.png`, file, 'base64');

		body = await prisma.localArt.create({
			data: {
				title: title,
				path: `/local_art_uploads/${title}.png`,
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
