'use client'
import UserProfileLogic from "@/logic/UserProfile.logic";
import Form from "../Form";

export default function UserProfileForm() {

    const {loading, formFields} = UserProfileLogic();

    return (
            formFields.filter(field => field.legend.includes("Personal")).map((formField, index) => {
                return (
                    <section className="px-2 lg:px-4">
                    <p className="py-4 text-xl">{formField.legend}</p>
                    <Form key={index} loading={loading} submitBtnText={formField.submitBtnText} formSubmitFnc={formField.action} inputs={formField.inputs}/>
                    </section>
                )
            })
    )
}