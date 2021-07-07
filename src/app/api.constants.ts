// const CORS = 'https://cors-anywhere.herokuapp.com/';

// export const baseUrl = `https://khrs-api.sdex.online`;
export const baseUrl = `http://sdexegypt-001-site22.itempurl.com`; // test url
export const imagesBaseUrl = 'https://khrs-admin.sdex.online';

//Account
export const loginAPI = `${baseUrl}/api/Account/Login`;
export const registerAPI = `${baseUrl}/api/Account/Register`;
export const recommendedBy = `${baseUrl}/api/RecommendedBy/GetRecommendedBy`;
export const userChangePassword = `${baseUrl}/api/Account/changePasswod`;
export const updatedUserInfo = `${baseUrl}/api/Account/UpdateUser`;

// get language
export const getLanguage = `${baseUrl}/api/Language/GetLanguage`

//Courses
export const getAllCoursesAPI = `${baseUrl}/api/Course/GetCourses`;
export const getUsersCoursesAPI = `${baseUrl}/api/UserCourse/GetAll`;
export const getCourseDetails = `${baseUrl}/api/Course/Details`;
export const createApplyCourse = `${baseUrl}/api/UserCourse/Create`;
export const getUserCourseDetails = `${baseUrl}/api/UserCourse/Details`;
export const courseMaterials = `${baseUrl}/api/Course/CourseMaterial`;

// exercise
export const getExercise = `${baseUrl}/api/Exercise/Get`;
export const checkAnswerSingleChoise = `${baseUrl}/api/Exercise/SingleChoice/Answer`;
export const getMultiChoiceAnswer = `${baseUrl}/api/MultiChoiceAnswer/GetAll`;
export const checkAnswerMultipleChoice = `${baseUrl}/api/Exercise/MultiChoice/Answer`;
export const checkAnswerPuzzleText = `${baseUrl}/api/Exercise/PuzzleWithText/Answer`;
export const checkAnswerPuzzleImage = `${baseUrl}/api/Exercise/PuzzleWithImage/Answer`;

// test
export const getTextType = `${baseUrl}/api/Test/Get`;
export const getUserActiveTest = `${baseUrl}/api/Test/GetUserActiveTest`;
export const sendAnswerTest = `${baseUrl}/api/Test/Answer`;
export const finishedTest = `${baseUrl}/api/Test/Finished`




