import NextAuth, { NextAuthOptions,User } from 'next-auth'
import Providers from 'next-auth/providers'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

const providers = [
    GitHubProvider({
        clientId: String(process.env.GITHUB_CLIENT_ID),
        clientSecret: String(process.env.GITHUB_CLIENT_SECRET)
    }),
    GoogleProvider({
        clientId: String(process.env.GOOGLE_CLIENT_ID),
        clientSecret: String(process.env.GOOGLE_CLIENT_SECRET),
     })
]

const callbacks:any = {}

callbacks.signIn = async function signIn(user, account, metadata) {
    if (account.provider === 'github') {    
        const githubUser = {
            id: metadata.id,
            login: metadata.login,
            name: metadata.name,
            avatar: user.image
        }    
        //user.accessToken = await getTokenFromYourAPIServer('github', githubUser)
        return true
    }

    return false;
}

callbacks.jwt = async function jwt(token, user) {
    if (user) {
        token = { accessToken: user.accessToken }
    }

    return token
}

callbacks.session = async function session(session, token) {
    session.accessToken = token.accessToken
    return session
}

export const options = {
    providers,
    callbacks
}

const handler=NextAuth(options)

export {handler as GET , handler as POST}