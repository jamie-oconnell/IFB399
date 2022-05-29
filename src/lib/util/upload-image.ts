export function getBase64(img) {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onload = (e) => {
			resolve(e.target.result);
		};
	});
}

export async function uploadImage(title: string, imgBase64) {
	const imgData = imgBase64.split(',');
	const data = {
		title,
		image: imgData[1]
	};
	const res = await fetch(`/api/local-art`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(data)
	});
	return res;
}

export async function uploadCompetition(
	title: string,
	imgBase64,
	description: string,
	firstName: string,
	lastName: string,
	phone: string,
	email: string
) {
	const imgData = imgBase64.split(',');
	const data = {
		title,
		image: imgData[1],
		description,
		firstName,
		lastName,
		phone,
		email
	};
	const res = await fetch(`/api/competition`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(data)
	});
	return res;
}
