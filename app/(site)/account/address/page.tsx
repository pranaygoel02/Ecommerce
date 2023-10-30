import UserAddress from "@/components/UserAddress";
import NewAddressForm from "@/components/UserForms/NewAddressForm";
import { Suspense } from "react";

function page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <UserAddress />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewAddressForm/>
      </Suspense>
    </>
  );
}

export default page;
