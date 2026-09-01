import customer from "../../assets/icons/customer.png";
import finance from "../../assets/icons/finance.png";
import human from "../../assets/icons/human.png";
import marketing from "../../assets/icons/marketing.png";
import softwer from "../../assets/icons/softwer.png";

const Category = () => {
    return (
        <div>
            <div className="text-center my-5">
                <h2 className="text-3xl font-bold">Browse by Category</h2>
                <p>
                    fins the job that perfect for you . about 800+ new job about
                    you
                </p>
            </div>
            <div className="flex justify-around my-4">
                <div className="flex items-center gap-2 border-2 p-4 rounded-2xl border-gray-200">
                    <div>
                        <img className="w-[40px]" src={marketing} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">
                            Marketing & sale
                        </h3>
                        <p>1520 jobs Available</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-2 p-4 rounded-2xl border-gray-200">
                    <div>
                        <img className="w-[40px]" src={customer} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Customer help</h3>
                        <p>420 jobs Available</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-2 p-4 rounded-2xl border-gray-200">
                    <div>
                        <img className="w-[40px]" src={finance} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Finance</h3>
                        <p>168 jobs Available</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-2 p-4 rounded-2xl border-gray-200">
                    <div>
                        <img className="w-[40px]" src={softwer} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Softwer</h3>
                        <p>1520 jobs Available</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border-2 p-4 rounded-2xl border-gray-200">
                    <div>
                        <img className="w-[40px]" src={human} alt="" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">
                            Human Resource
                        </h3>
                        <p>1520 jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
