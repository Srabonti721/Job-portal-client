import { Suspense } from "react";
import { myApplicationsPromice } from "../../api/ApplicationAPi";
import useAuth from "../../Hooks/useAuth";
import ApplicationList from "./ApplicationList";
import ApplicationStat from "./ApplicationStat";

const MyApplications = () => {
    const { user } = useAuth();
    return (
        <div>
            <ApplicationStat />
            <Suspense fallback={"loading for listed data"}>
                <ApplicationList
                    myApplicationsPromice={myApplicationsPromice(user.email)}
                />
            </Suspense>
        </div>
    );
};

export default MyApplications;
