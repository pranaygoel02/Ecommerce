'use client'

import Title from '@/components/Title'
import React from 'react'
import AddCategoryLogic from '@/logic/AddCategory.logic'
import Form from '@/components/Form'

function page() {

    const {inputs, loading, addCategory} = AddCategoryLogic()

  return (
    <div>
        <Title title="Add Category" />
        <Form inputs={inputs} loading={loading} formSubmitFnc={addCategory} submitBtnText='Add Category' />
    </div>
  )
}

export default page