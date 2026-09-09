export const myPostedJobsPromice = (email, accessToken) => {
    return fetch(`http://localhost:5000/jobs/?email=${email}`, {
        credentials:"include",
              headers:{
            authorization:`Bearer ${accessToken}`
        }
        })
        .then((res) => res.json());
};
