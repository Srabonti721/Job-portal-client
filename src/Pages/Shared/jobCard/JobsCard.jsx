import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router";

const JobsCard = ({ job }) => {
    const {
        title,
        _id,
        salaryRange,
        company,
        company_logo,
        location,
        description,
        requirements,
    } = job;
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="flex items-center gap-2">
                <figure>
                    <img src={company_logo} className="w-20" alt="Shoes" />
                </figure>
                <div>
                    <h2 className="font-bold text-xl">{company}</h2>
                    <p className="flex items-center gap-2">
                        {" "}
                        <SlLocationPin />
                        {location}
                    </p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h2 className="text-sm">
                    Salary: {salaryRange.min} - {salaryRange.max}{" "}
                    {salaryRange.currency}
                </h2>
                <p>{description}</p>
                <div className="card-actions">
                    {requirements.map((skill, index) => (
                        <div key={index} className="badge badge-outline">
                            {skill}
                        </div>
                    ))}
                </div>
                <div className="card-actions justify-end">
                    
                    <Link to={`jobs/${_id}`} className="btn btn-primary">Apply Now</Link>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;
