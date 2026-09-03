import { Suspense } from "react";
import Banner from "./HomePage/Banner";
import Category from "./HomePage/Category";
import HotJobs from "./HotJobs/HotJobs";

const jobsPromice = fetch("http://localhost:5000/jobs").then((res) =>
    res.json(),
);
const Home = () => {
    return (
        <div>
            <Banner />
            <Suspense
                fallback={
                    <span className="loading loading-spinner loading-xl"></span>
                }
            >
                <HotJobs jobsPromice={jobsPromice} />
            </Suspense>
            <Category />
        </div>
    );
};

export default Home;
