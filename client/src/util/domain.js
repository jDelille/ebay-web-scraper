const newLocal = 'development';
const newLocal_1 = 'production';
export default process.env.NODE_ENV === newLocal
	? 'http://localhost:8000'
	: process.env.NODE_ENV === newLocal_1 && '';
