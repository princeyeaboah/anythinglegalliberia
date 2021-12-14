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
import Head from 'next/head'

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
      <Head>
        <title>IWL | Contact us</title>
        <meta name="description" content="Integrity Watch Liberia, IWL, NGO in Liberia, CSO in Liberia, Anti-corruption Team" />
      </Head>
      <Header />
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
              fontSize='2xl'
              marginBottom={5}
              color='black'
            >Send us a message!</Text>
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
                            >
                              <Input
                                //_hover={{ borderColor: 'primary' }}
                                borderWidth='2px'
                                borderColor='black'
                                id='fullName'
                                {...field}
                                placeholder='Fullname'
                                _placeholder={{
                                  color: 'gray.600',
                                  letterSpacing: 'widest'
                                }}
                                _hover={{
                                  borderColor: 'hoverone',
                                  transition: 'all .8s ease'
                                }}
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

                            >

                              <Input
                                //_hover={{ borderColor: 'primary' }}
                                borderWidth='2px'
                                borderColor='black'
                                id='email'
                                placeholder='Email Address'
                                _placeholder={{
                                  color: 'gray.600',
                                  letterSpacing: 'widest'
                                }}
                                _hover={{
                                  borderColor: 'hoverone',
                                  transition: 'all .8s ease'
                                }}
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
                            >
                              <Textarea
                                //_hover={{ borderColor: 'primary' }}
                                borderWidth='2px'
                                borderColor='black'
                                id='message'
                                placeholder='Message'
                                _placeholder={{
                                  color: 'gray.600',
                                  letterSpacing: 'widest'
                                }}
                                _hover={{
                                  borderColor: 'hoverone',
                                  transition: 'all .8s ease'
                                }}
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
                      disabled={!(formik.isValid && formik.dirty)}>Send</Button>
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