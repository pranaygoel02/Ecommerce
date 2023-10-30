"use client";
import UserProfileLogic from "@/logic/UserProfile.logic";
import Form from "../Form";
import Link from "next/link";

export default function NewAddressForm() {
  const { loading, formFields, addr, updateAddress } = UserProfileLogic();




  return formFields
    .filter((field) => field.legend.includes("Address"))
    .map((formField, index) => {

      return (
        <section className="px-2 lg:px-4" id="address-form">
          <div className="flex justify-between items-center">
            <p className="py-4 text-xl">{formField.legend}</p>
            {addr && <Link href="/account/address" className="btn btn-outline-primary">Cancel Edit</Link>}
          </div>
          <Form
            key={index}
            loading={loading}
            submitBtnText={addr ? 'Update address' : formField.submitBtnText}
            formSubmitFnc={addr ? updateAddress : formField.action}
            inputs={formField.inputs}
            defaultValues={addr}
          />
        </section>
      );
    });
}
