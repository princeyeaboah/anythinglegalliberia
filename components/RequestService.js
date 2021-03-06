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
  Tooltip,
  Heading,
  useColorMode,
  Icon,
  useToast
} from '@chakra-ui/react'
import {
  WarningIcon,
  InfoOutlineIcon
} from '@chakra-ui/icons'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Field, Form } from 'formik'
import { graphqlSync } from 'graphql'

const RequestService = () => {
  const toast = useToast();
  const [formValues, setFormValues] = useState(null)

  const servicesOption = [
    { key: 'Select a Service', value: '' },
    { key: 'Drafting Legal Memorandium', value: 'Drafting Legal Memorandium' },
    { key: 'Legal Advice', value: 'Legal Advice' },
    { key: 'Legal Research', value: 'Legal Research' },
    { key: 'Social Science Research', value: 'Social Science Research' },
    { key: 'Writing of Pleadings', value: 'Writing of Pleadings' },
    { key: 'Corporate Law', value: 'Corporate Law' },
    { key: 'Family Law', value: 'Family Law' },
    { key: 'Civil Procedure', value: 'Civil Procedure' },
    { key: 'Others', value: 'others' },
  ]
  const initialValues = {
    requestSenderService: '',
    requestSenderName: '',
    requestSenderEmail: '',
  }

  const validationSchema = Yup.object({
    requestSenderService: Yup.string().required('Please select a service'),
    requestSenderName: Yup.string().required('Please enter a name'),
    requestSenderEmail: Yup.string().email('Please enter a valid email').required('Please enter an email address')
  })

  const onSubmit = (values, onSubmitProps) => {
    setFormValues(values)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()

    toast({
      title: "Successful!",
      description: `Your request was successfully sent to us, we will get back to you in a giffy.`,
      status: "success",
      position: "top",
      isClosable: true,
    })
  }

  return (
    <Box
      color='primary'
      pr={{ base: '0', md: '7em' }}
      pl={{ base: '0', md: '2em' }}

    >
      <Box
        fontFamily='body'
        fontSize='2xl'
        fontWeight='thin'
        p={5}
        my={5}
        bg='primary'
        color='white'
        borderLeft='10px solid red'
        borderRightRadius={10}
        py={5}>
        <Text>
          Fill out the form to signup for our newsletter.
        </Text>
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
                  name='requestSenderName'
                >
                  {
                    ({ field, form }) => {
                      return (
                        <FormControl
                        //isInvalid={form.errors['requestSenderName'] && form.touched['requestSenderName']}
                        >
                          {/* <FormLabel
                            fontFamily='heading'
                            fontSize='lg'
                            letterSpacing='wide'
                            htmlFor='requestSenderName'
                          >Fullname
                          </FormLabel> */}
                          <Input
                            borderWidth='2px'
                            borderColor='primary'
                            color='primary'
                            placeholder='Fullname'
                            _placeholder={{
                              color: 'primary',
                              letterSpacing: 'widest'
                            }}
                            _hover={{
                              borderColor: 'hoverone',
                              transition: 'all .8s ease'
                            }}
                            id='requestSenderName'
                            {...field}
                          />
                          <FormErrorMessage>{form.errors['requestSenderName']}</FormErrorMessage>
                        </FormControl>
                      )
                    }
                  }
                </Field>

                <Spacer py={2} />

                <Field
                  name='requestSenderEmail'
                >
                  {
                    ({ field, form }) => {
                      return (
                        <FormControl
                        //isInvalid={form.errors['requestSenderEmail'] && form.touched['requestSenderEmail']}
                        >
                          {/* <FormLabel
                            fontFamily='heading'
                            fontSize='lg'
                            letterSpacing='wide'
                            htmlFor='requestSenderEmail'
                          >Email
                          </FormLabel> */}
                          <Input
                            borderWidth='2px'
                            borderColor='primary'
                            color='primary'
                            placeholder='Enter your email address'
                            _placeholder={{
                              color: 'primary',
                              letterSpacing: 'widest'
                            }}
                            _hover={{
                              borderColor: 'hoverone',
                              transition: 'all .8s ease'
                            }}
                            id='requestSenderEmail'
                            {...field}
                          />
                          <FormErrorMessage>{form.errors['requestSenderEmail']}</FormErrorMessage>
                        </FormControl>
                      )
                    }
                  }
                </Field>
                <Spacer py={2} />
                <Button
                  _hover={{
                    bg: 'hoverone',
                    color: 'white'
                  }}
                  _disabled={{
                    bg: 'gray.300',
                    color: 'gray.600',
                    _hover: {
                      bg: 'gray.300',
                      color: 'gray.600',
                      cursor: 'not-allowed'
                    }
                  }}
                  w='100%'
                  border='none'
                  bg='primary'
                  color='white'
                  letterSpacing={'wider'}
                  transition={'all .5s ease'}
                  type='submit'
                  disabled={!(formik.isValid && formik.dirty)}>Submit Request</Button>
              </Form>
            )
          }
        }
      </Formik>
    </Box>
  )
}

export default RequestService
