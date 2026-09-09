import { Suspense } from "react";
import { myApplicationsPromice } from "../../api/ApplicationAPi";
import useAuth from "../../Hooks/useAuth";
import ApplicationList from "./ApplicationList";
import ApplicationStat from "./ApplicationStat";

const MyApplications = () => {
    const { user } = useAuth();
    console.log(user.accessToken)
    return (
        <div>
            <ApplicationStat />
            <Suspense fallback={"loading for listed data"}>
                <ApplicationList
                    myApplicationsPromice={myApplicationsPromice(user.email,user.accessToken)}
                />
            </Suspense>
        </div>
    );
};

export default MyApplications;
