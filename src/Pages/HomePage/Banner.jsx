import { motion } from "motion/react";
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={team1} alt="" /> */}
                <div>
                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl font-bold"
                    >
                        <motion.span
                            animate={{
                                color: ["#F59F27", "#27F568", "#F52757"],
                                transition: { duration: 4, repeat: Infinity },
                            }}
                        >
                            Remote jobs
                        </motion.span>{" "}
                        for you!
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
