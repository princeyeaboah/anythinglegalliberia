import React from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  Spacer,
  Select,
  Textarea,
  Text,
  useToast,
  useColorMode,
  Container,
} from '@chakra-ui/react'
import {
  WarningIcon,
  InfoOutlineIcon
} from '@chakra-ui/icons'
import { FiFile } from "react-icons/fa";
import Header from '@/components/Header'

const ContactUs = () => {

  const toast = useToast()

  const initialValues = {
    fullName: '',
    email: '',
    message: ''
  }

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Enter your full name'),
    email: Yup.string().email().required('Enter a valid email address'),
    message: Yup.string().required('Enter a message'),
  })

  const onSubmit = (values, onSubmitProps) => {

    console.log('Form Values:', values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
  }

  return (
    <>
      <Header/>
      <Box
      bg='white'
      py='2em'
      color='primary'
      >
        
        <Container
          px={8}
        >
        <Box
        py={5}
        >
          <Text
          textAlign='justify'
          fontSize='lg'
          marginBottom={5}
          color='black'
          >Send us a direct message by filling the form below with the required information and clicking submit.</Text>
        <Box
        p={2}
        bg="gray.300"
        >
          <Text
            color='gray.600'
            fontFamily='arial'
          >This form is secured and spam free.</Text>
        </Box>
        </Box>
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
                      name='fullName'
                    >
                      {
                        ({ field, form }) => {
                          return (
                            <FormControl
                              isInvalid={form.errors['fullName'] && form.touched['fullName']}
                            >
                              <FormLabel
                                fontSize='md'
                                htmlFor='reportTitle'
                              >Full Name
                              </FormLabel>
                              <Input
                                _hover={{ borderColor: 'primary' }}
                                borderWidth='1px'
                                borderColor='black'
                                id='fullName'
                                {...field}
                              />
                              <FormErrorMessage>{form.errors['fullName']}</FormErrorMessage>
                            </FormControl>
                          )
                        }
                      }
                    </Field>

                    <Spacer py={2} />

                    <Field
                      name='email'
                    >
                      {
                        ({ field, form }) => {
                          return (
                            <FormControl
                              isInvalid={form.errors['email'] && form.touched['email']}
                            >
                              <FormLabel
                                fontSize='md'
                                htmlFor='reportTitle'
                              >Email Address
                              </FormLabel>
                              <Input
                                _hover={{ borderColor: 'primary' }}
                                borderWidth='1px'
                                borderColor='black'
                                id='email'
                                {...field}
                              />
                              <FormErrorMessage>{form.errors['email']}</FormErrorMessage>
                            </FormControl>
                          )
                        }
                      }
                    </Field>

                    <Spacer py={3} />

                    <Field
                      name='message'
                    >
                      {
                        ({ field, form }) => {
                          return (
                            <FormControl
                              isInvalid={form.errors['message'] && form.touched['message']}
                            >
                              <FormLabel
                                fontSize='md'
                                htmlFor='message'
                              >Message
                              </FormLabel>
                              <Textarea
                                _hover={{ borderColor: 'primary' }}
                                borderWidth='1px'
                                borderColor='black'
                                id='message'
                                {...field}
                              />
                              <FormErrorMessage>{form.errors['message']}</FormErrorMessage>
                            </FormControl>
                          )
                        }
                      }
                    </Field>

                    <Spacer py={3} />

                    <Button
                      _hover={{
                        bg: 'primary',
                      }}
                      _disabled={{
                        bg: 'blue.200',
                        color: 'grey',
                        _hover: {
                          bg: 'blue.200',
                          color: 'grey',
                          cursor: 'not-allowed'
                        }
                      }}
                      w='100%'
                      color='white'
                      border='none'
                      bg='primary'
                      type='submit'

                      onClick={() =>
                        toast({
                          title: "Successful!",
                          description: "Your message was sent successfully.",
                          status: "success",
                          isClosable: true,
                        })}
                      disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
                  </Form>
                )
              }
            }
          </Formik>
        </Container>
      </Box>
    </>
  )
}

export default ContactUs