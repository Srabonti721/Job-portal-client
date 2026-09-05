const AddJob = () => {
    return (
        <div>
            <h2>Please add a job</h2>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>

                    <label className="label">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input"
                        placeholder="Job title"
                    />

                    <label className="label">Company</label>
                    <input
                        type="text"
                        name="company"
                        className="input"
                        placeholder="company name"
                    />

                    <label className="label">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input"
                        placeholder="location Name"
                    />
                    <label className="label">Company Logo</label>
                    <input
                        type="url"
                        name="companyLogo"
                        className="input"
                        placeholder="company url"
                    />
                </fieldset>
                {/* job type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input
                            className="btn filter-reset"
                            type="radio"
                            name="metaframeworks"
                            aria-label="All"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="metaframeworks"
                            aria-label="On-Site"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="metaframeworks"
                            aria-label="Remote"
                        />
                        <input
                            className="btn"
                            type="radio"
                            name="metaframeworks"
                            aria-label="Hybrid"
                        />
                    </div>
                </fieldset>
                {/* job category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select
                        defaultValue="Job Category"
                        name="category"
                        className="select"
                    >
                        <option disabled={true}>Job category</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Finence</option>
                    </select>
                </fieldset>
                {/*  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Basic Info</legend>
                </fieldset>
            </form>
            {/*  */}
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Basic Info</legend>
            </fieldset>
        </div>
    );
};

export default AddJob;
