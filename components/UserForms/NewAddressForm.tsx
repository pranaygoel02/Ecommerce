"use client";
import UserProfileLogic from "@/logic/UserProfile.logic";
import Form from "../Form";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function NewAddressForm() {
  const { loading, formFields } = UserProfileLogic();

  const searchParams = useSearchParams();
  const addressInfo = searchParams.get("address_info");
  const addr = addressInfo && JSON.parse(addressInfo);
  console.log(addr);  


  return formFields
    .filter((field) => field.legend.includes("Address"))
    .map((formField, index) => {

      return (
        <section className="px-2 lg:px-4">
          <div className="flex justify-between items-center">
            <p className="py-4 text-xl">{formField.legend}</p>
            {addr && <Link href="/account/address" className="btn btn-outline-primary">Cancel Edit</Link>}
          </div>
          <Form
            key={index}
            loading={loading}
            submitBtnText={addr ? 'Update address' : formField.submitBtnText}
            formSubmitFnc={formField.action}
            inputs={formField.inputs}
            defaultValues={addr}
          />
        </section>
      );
    });
}
