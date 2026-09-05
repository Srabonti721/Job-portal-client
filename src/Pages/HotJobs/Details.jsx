import { Link, useLoaderData } from "react-router";

const Details = () => {
    const { _id, title, company } = useLoaderData();
    return (
        <div>
            <h2>Details for : {title}</h2>
            <p>{company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className="btn btn-primary">Apply Now</button>
            </Link>
        </div>
    );
};

export default Details;
