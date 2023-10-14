
const url = 'https://exercisedb.p.rapidapi.com/exercises'

export const options = {
    method: 'GET',
    params: { limit: '10' },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const requests = {
    requestExercises: `${url}`,
    requestBodyPartList: `${url}/bodyPartList`,
    requestExerciseID: (id) => `${url}/exercise/${id}`,
    requestExerciseName: (name) => `${url}/name/${name}`,
    requestBodyPartName: (name) => `${url}/bodyPart/${name}`,
    requestTargetName: (name) => `${url}/target/${name}`,
    requestEquimentName: (name) => `${url}/equiment/${name}`,
}