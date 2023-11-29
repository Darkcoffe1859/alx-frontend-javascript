import { uploadPhoto, createUser } from './utils';

export default function handleprofileSignup() {
	return Promise.all([uploadPhoto(), createUser()])
	.then((value) => {
		console.log(`$value[0].body} ${value[1].firstname} ${value[1].lastName}`);
	})
	
	.catch(() => console.log('Signup system offline'));
