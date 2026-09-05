import axios from "axios";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const JobApply = () => {
    const { id: jobID } = useParams();
    const { user } = useAuth();
    console.log(jobID, user);

    const handleApplyFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkedIn, github, resume);

        const application = {
            jobID,
            applicant: user.email,
            linkedIn,
            github,
            resume,
        };
        axios
            .post("http://localhost:5000/applications", application)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Applications has been submitted",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h2>
                Apply job for :<Link to={`/jobs/${jobID}`}>Details</Link>{" "}
            </h2>
            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkedIn Link</label>
                    <input
                        name="linkedIn"
                        type="url"
                        className="input"
                        placeholder="LinkedIn Link"
                    />
                    <label className="label">GitHub Link</label>
                    <input
                        name="github"
                        type="url"
                        className="input"
                        placeholder="GitHub Link"
                    />
                    <label className="label">Resume Link</label>
                    <input
                        name="resume"
                        type="url"
                        className="input"
                        placeholder="resume Link"
                    />
                    <input type="submit" className="btn" value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;
