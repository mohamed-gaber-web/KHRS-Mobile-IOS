export const baseUrl = 'https://khrs-api.sdex.online';
export const imagesBaseUrl = 'https://khrs-admin.sdex.online';

//Account
export const loginAPI = `${baseUrl}/api/Account/Login`;
export const registerAPI = `${baseUrl}/api/Account/Register`;
export const recommendedBy = `${baseUrl}/api/RecommendedBy/GetRecommendedBy`;
export const userChangePassword = `${baseUrl}/api/Account/changePasswod`

// get language
export const getLanguage = `${baseUrl}/api/Language/GetLanguage`

//Courses
export const getAllCoursesAPI = `${baseUrl}/api/Course/GetCourses`;
export const getUsersCoursesAPI = `${baseUrl}/api/UserCourse/GetAll`;