import { auth } from "@clerk/nextjs/server";
import EmployeesTable from "./EmployeesTable";
import CreateAnOrg from "./CreateAnOrg";

export default async function HaveAnOrg() {
  const { orgId, orgRole } = await auth();
  return (
    <div>
      {orgId ? (
        <EmployeesTable orgRole={orgRole} orgId={orgId} />
      ) : (
        <CreateAnOrg />
      )}
    </div>
  );
}
