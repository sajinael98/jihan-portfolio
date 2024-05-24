import { useRef, useState } from 'react'
import { Box, Button, Flex, Modal, Stack, Text, TextInput, Textarea } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import PrimaryButton from '../../../../components/PrimaryButton'
import SpacedText from '../../../../components/SpacedText'
import Title from '../../../../components/Title'

import emailjs from '@emailjs/browser'
import { Controller, useForm } from 'react-hook-form'

const defaultValues = {
  name: '',
  email: '',
  message: ''
}

const Contact = () => {
  const [opened, { close, open }] = useDisclosure(false)
  const [status, setStatus] = useState<"Success" | "Error" | "IDLE" | "LOADING">()
  const form = useRef();
  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues
  })

  function submitHandler(_values: any) {
    setStatus('LOADING')
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      form.current as unknown as HTMLFormElement,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then(() => {
      reset(defaultValues)
      setStatus('Success')
    }).catch((e) => {
      setStatus('Error')
    })
  }
  function closeHandler() {
    close()
    reset(defaultValues)
  }
  return (
    <>
      <Modal opened={opened} onClose={closeHandler} title="Contact Me" centered>
        <Stack ref={form as any} component={'form'} gap='md'>
          <Controller name='name' control={control} rules={{ required: true }} render={({ field }) => <TextInput styles={{ label: { marginBottom: 5 } }} label='Your Name' {...field} />} />
          <Controller name='email' control={control} rules={{
            required: true, pattern: {
              value: /^[\w\.-]+@[\w\.-]+\.\w+$/,
              message: 'Invalid email address',
            },
          }} render={({ field, fieldState }) => <TextInput error={fieldState.error?.message} styles={{ label: { marginBottom: 5 } }} label='Your Email' {...field} />} />
          <Controller name='message' control={control} rules={{
            required: true
          }} render={({ field }) => <Textarea styles={{ label: { marginBottom: 5 }, input: { minHeight: 250 } }} label='Your Message' {...field} />} />
          <Button loading={status === 'LOADING'} disabled={status === 'LOADING' || !formState.isDirty} size='lg' onClick={handleSubmit(submitHandler)} tt={'uppercase'}>send</Button>
          {status === "Success" && <Text c='green'>
            Thank you for reaching out! Your email has been sent successfully.
            I appreciate your inquiry and I&apos;ll be in touch with you soon.
          </Text>}
          {status === "Error" && <Text c='red'>
            Email Send Failure
          </Text>}
        </Stack>
      </Modal>
      <Flex

        pos='relative'
        bg='#F8E3BA'
        direction={{ base: 'column-reverse', lg: 'row' }}
        justify='space-between'
        px={{ base: 'md', lg: 'calc(var(--mantine-spacing-md) * 4)' }}
        py='calc(var(--mantine-spacing-md) * 2)'
      >
        <Flex align='center' justify='center' w={140} h={70} bg='white' pos='absolute' top={-45} >
          <Image src='/dots.svg' alt="contact" width={100} height={50} priority />
        </Flex>
        <Stack gap={0} justify='center'>
          <SpacedText>
            How I do it ?
          </SpacedText>
          <Title
            w={{ base: 250, lg: 420 }}>
            Get In Touch
          </Title>
          <Text fw={400}>Lorem ipsum dolor sit amet, consectetur </Text>
          <PrimaryButton onClick={open} w={200} mt={'md'}>
            Send me an email
          </PrimaryButton>
        </Stack>
        <Box pos='relative' w={300} h={250} mx={{ base: 'auto', lg: 0 }}>
          <Image src='/block2.png' alt="contact" fill priority />
        </Box>
      </Flex>
    </>
  )
}

export default Contact