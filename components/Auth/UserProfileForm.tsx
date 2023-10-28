'use client'
import UserProfileLogic from "@/logic/UserProfile.logic";
import Form from "../Form";
import Title from "../Title";

export default function UserProfileForm() {

    const {inputs, loading, updateUserData} = UserProfileLogic();

    return (
        <>
        <Title title="Profile" />
        <Form inputs={inputs} loading={loading} submitBtnText="Update profile" formSubmitFnc={updateUserData}/>
        </>
    )
}