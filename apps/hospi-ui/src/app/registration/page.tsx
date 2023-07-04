"use client"
import {
  Box, Container, Stack, HStack, Text
} from '@chakra-ui/react'
import {
  Form,
  FormLayout,
  Field, SubmitButton, FormProps
} from '@hp-ui/react'

import { NextPage } from 'next'

const RegistrationPage: NextPage = () => {

  const onSubmit1 = () => {

  }
  const props: FormProps = {
    onSubmit: () => {

    }
  }

  return (
    <Box as="main" flex="1" py="2" px="4" overflowY="auto">
      <Form
        defaultValues={{
          title: '',
          description: '',
        }}
        {...props}
        onSubmit={onSubmit1}
      >
        <FormLayout columns={[2, null, 4]}>
          <Field
            name="title"
            label="Title"
            rules={{ required: 'Title is required' }}
          />
          <Field
            name="description"
            label="Description"
            rules={{ required: 'Description is required' }}
          />

          <SubmitButton />
        </FormLayout>
      </Form>
    </Box>
  )
}

export default RegistrationPage