export default function (boolean) {
	return new Promise((resolve, reject) => {
		const object = {
			status: 200,
			body: 'Success',
		};

		if (boolean === true) {
			resolve(object);
		} else {
			reject(Error('The fake Api is not working currently'));
		}
	});
}
