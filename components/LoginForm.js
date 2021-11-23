import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Spacer,
  Heading,
  Textarea,
  Text,
  Icon,
  Container,
  useToast
} from '@chakra-ui/react'
import {
  WarningIcon,
  InfoOutlineIcon
} from '@chakra-ui/icons'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'

const LoginForm = () => {
  const toast = useToast();

  const initialValues = {
    loginEmail: '',
    loginPassword: '',
  }

  const validationSchema = Yup.object({
    loginEmail: Yup.string().email('Please enter a valid email').required('Please enter an email'),
    loginPassword: Yup.string().required('Please enter a password'),
  })

  const onSubmit = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()

  }

  return (
    <Container
      my='20vh'
      p={10}
      bg='white'
      fontFamily='open sans'
      color='blackAlpha.800'
    >
      <Heading
        marginBottom={5}
        as='h2'
        fontFamily='sans-serif'
        fontSize='2xl'
        textAlign='center'
      >
        <Text>
          Login to enter Admin Dashbord
        </Text>
      </Heading>
      <Box
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {
            formik => {
              return (
                <Form>
                  <Field
                    name='loginEmail'
                  >
                    {
                      ({ field, form }) => {
                        return (
                          <FormControl
                            isInvalid={form.errors['loginEmail'] && form.touched['loginEmail']}
                          >
                            <FormLabel
                              fontSize='lg'
                              htmlFor='loginEmail'
                            >Email
                            </FormLabel>
                            <Input
                              _hover={{ borderColor: 'primary' }}
                              borderWidth='1px'
                              borderColor='gray.800'
                              id='loginEmail'
                              {...field}
                            />
                            <FormErrorMessage>{form.errors['loginEmail']}</FormErrorMessage>
                          </FormControl>
                        )
                      }
                    }
                  </Field>

                  <Spacer py={2} />
                  <Field
                    name='loginPassword'
                  >
                    {
                      ({ field, form }) => {
                        return (
                          <FormControl
                            isInvalid={form.errors['loginPassword'] && form.touched['loginPassword']}
                          >
                            <FormLabel
                              fontSize='lg'
                              htmlFor='loginPassword'
                            >Password
                            </FormLabel>
                            <Input
                              _hover={{ borderColor: 'primary' }}
                              borderWidth='1px'
                              borderColor='gray.800'
                              id='loginPassword'
                              {...field}
                              type='password'
                            />
                            <FormErrorMessage>{form.errors['loginPassword']}</FormErrorMessage>
                          </FormControl>
                        )
                      }
                    }
                  </Field>

                  <Spacer py={2} />

                  <Button
                    color='white'
                    _hover={{
                      bg: 'blue',
                    }}
                    _disabled={{
                      bg: 'blue.100',
                      color: 'grey',
                      _hover: {
                        bg: 'blue.100',
                        color: 'grey',
                        cursor: 'not-allowed'
                      }
                    }}
                    w='100%'
                    border='none'
                    bg='blue'
                    type='submit'
                    disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
                </Form>
              )
            }
          }
        </Formik>
      </Box>
    </Container >
  )
}

export default LoginForm
