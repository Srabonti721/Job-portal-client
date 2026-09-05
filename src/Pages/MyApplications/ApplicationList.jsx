import { use } from "react";
import TableRow from "./TableRow";

const ApplicationList = ({ myApplicationsPromice }) => {
    const applications = use(myApplicationsPromice);
    console.log(applications);

    return (
        <div>
            <h2 className="text-3xl font-bold">
                Application so far : {applications.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>#</label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((application, index) => (
                            <TableRow
                                index={index}
                                key={application._id}
                                application={application}
                            ></TableRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplicationList;
