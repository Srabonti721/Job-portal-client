import { motion } from "motion/react";
import team1 from "../../assets/developer/team1.jpg";
import team2 from "../../assets/developer/team2.jpg";
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        animate={{ y: [20, 80, 20] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm border-blue-600 border-l-8 border-b-8 rounded-r-[40px]  rounded-tl-[40px] shadow-2xl"
                        alt="team1"
                    />
                    <motion.img
                        animate={{ x: [100, 150, 100] }}
                        transition={{
                            duration: 10,
                            delay: 5,
                            repeat: Infinity,
                        }}
                        src={team2}
                        className="max-w-sm border-blue-600 border-l-8 border-b-8 rounded-r-[40px]  rounded-tl-[40px] shadow-2xl"
                        alt="team2"
                    />
                </div>
                <div className="flex-1">
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
