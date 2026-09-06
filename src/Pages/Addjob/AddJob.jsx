import useAuth from "../../Hooks/useAuth";

const AddJob = () => {
    const {user} = useAuth();
    const handleAddAJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
// Salary range
        const {min, max, currency, ...newJob} = data;
        newJob.SalaryRange = {min, max, currency};
        // requirement
        const requirementString = newJob.requirements;
        const requirementsDirty = requirementString.split(",");
        const requirementsClean = requirementsDirty.map(req=>req.trim());
        newJob.requirements = requirementsClean
// responsibilities
newJob.responsibilities = newJob.responsibilities.split(",").map(req=>req.trim())
        console.log(newJob);
    };
    return (
        <div className="w-5xl mx-auto">
            <h2 className="text-center text-3xl my-4">Please add a job</h2>
            <form onSubmit={handleAddAJob}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input w-full"
                        placeholder="Job title"
                    />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        name="company"
                        className="input w-full"
                        placeholder="company name"
                    />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input w-full"
                        placeholder="location Name"
                    />
                    <label className="label">Company Logo</label>
                    <input
                        type="url"
                        name="companyLogo"
                        className="input w-full"
                        placeholder="company url"
                    />
                </fieldset>
                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="jobType"
                            aria-label="All"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="On-Site"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Remote"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="jobType"
                            aria-label="Hybrid"
                        />
                    </div>
                </fieldset>
                {/* job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select
                        defaultValue="Job Category"
                        name="category"
                        className="select w-full"
                    >
                        <option disabled={true}>Job category</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Finence</option>
                    </select>
                </fieldset>
                {/* Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Deadline</legend>
                    <input type="date" className="input w-full" />
                </fieldset>
                {/* salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                        <div>
                            <label className="label">Minimum Salary</label>
                            <input
                                name="min"
                                type="text"
                                className="input"
                                placeholder="minimum salary"
                            />
                        </div>
                        <div>
                            <label className="label">Maxmum Salary</label>
                            <input
                                name="max"
                                type="text"
                                className="input"
                                placeholder="Maxmum Salary"
                            />
                        </div>

                        <div>
                            <label className="label">Currency</label>
                            <select
                                defaultValue="Select a currency"
                                name="currency"
                                className="select"
                            >
                                <option disabled={true}>
                                    Select a currency
                                </option>
                                <option>BDT</option>
                                <option>EU</option>
                                <option>USD</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">
                        {" "}
                        Job Description{" "}
                    </legend>
                    <textarea
                        name="description"
                        className="textarea w-full"
                        placeholder=" Job Description "
                    ></textarea>
                </fieldset>
                {/* Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Requirements</legend>
                    <textarea
                        name="requirements"
                        className="textarea w-full"
                        placeholder="job requirements (separate by comms)"
                    ></textarea>
                </fieldset>
                {/* Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">
                        Responsibilities
                    </legend>
                    <textarea
                        name="responsibilities"
                        className="textarea w-full"
                        placeholder="job Responsibilities (separate by comms)"
                    ></textarea>
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR Related Info</legend>

                    <label className="label">HR Name</label>
                    <input
                        name="hr_name"
                        type="text"
                        className="input w-full"
                        placeholder="HR Name"
                    />

                    <label className="label">HR Email</label>
                    <input
                        name="hr_email"
                        defaultValue={user.email}
                        type="email"
                        className="input w-full"
                        placeholder="HR email"
                    />
                </fieldset>
                <input
                    className="btn w-full my-4"
                    type="submit"
                    value="Add Job"
                />
            </form>
        </div>
    );
};

export default AddJob;
