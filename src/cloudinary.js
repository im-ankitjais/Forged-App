export default async data => {
	const { secure_url } = await fetch(
		"https://api.cloudinary.com/v1_1/dhqp2dd6b/image/upload",
		{
			method: "POST",
			body: data,
		}
	).then(res => res.json());

	console.log(secure_url);

	return secure_url;
};
