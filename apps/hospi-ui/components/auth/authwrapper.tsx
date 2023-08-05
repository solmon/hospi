"use client"
import { Stack,Container } from '@chakra-ui/react'
import { AvailableProviders, Auth } from '@hp-ui/auth'
import { Text } from '@chakra-ui/react'
import { Field } from '@hp-ui/forms'
import { FaGoogle, FaGithub } from 'react-icons/fa'

const availableProviders: AvailableProviders = {
    google: {
        icon: FaGoogle,
        name: 'Google',
    },
    github: {
        icon: FaGithub,
        name: 'Github',
    },
}

export const SignUpWrapper = () => {
    return (
        <Container mt="40px" width="md">
            <Stack width="md">
                <Auth providers={availableProviders} type="password" view="signup">
                    <Field name="company" label="Company" rules={{ required: true }} />
                    <Text fontSize="md" color="muted">
                        By signing up your agree to our terms and conditions.
                    </Text>
                </Auth>
            </Stack>
        </Container>
    )
}

export const LoginWrapper = () => {
    return (
        <Container mt="40px" width="md">
            <Stack width="md">
                <Auth providers={availableProviders} type="password" view="login">
                    <Field name="company" label="Company" rules={{ required: true }} />
                </Auth>
            </Stack>
        </Container>
    )
}
