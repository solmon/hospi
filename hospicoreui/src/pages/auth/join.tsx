import GithubButton from '../../components/interfaces/Auth/GithubButton';
import GoogleButton from '../../components/interfaces/Auth/GoogleButton';
import Join from '../../components/interfaces/Auth/Join';
import JoinWithInvitation from '../../components/interfaces/Auth/JoinWithInvitation';
import { AuthLayout } from '../../components/layouts';
import { getParsedCookie } from '../../lib/cookie';
import { inferSSRProps } from '../../lib/inferSSRProps';
import { GetServerSidePropsContext } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from '../../types';
import { Box } from '@chakra-ui/react';
import SignUp from '@/views/Pages/SignUp.js';

const Signup: NextPageWithLayout<inferSSRProps<typeof getServerSideProps>> = ({
  inviteToken,
  next,
}) => {
  const { status } = useSession();
  const router = useRouter();
  const { t } = useTranslation('common');

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <>
      <Box className="rounded-md bg-white p-6 shadow-sm">
        {inviteToken ? (
          <JoinWithInvitation inviteToken={inviteToken} next={next} />
        ) : (
          <SignUp />          
        )}
        <Box className="divider">or</Box>
        <Box className="space-y-3">
          <GithubButton />
          <GoogleButton />
        </Box>
      </Box>

      <p className="text-center text-sm text-gray-600">
        {t('already-have-an-account')}
        <Link href="/auth/login">
            &nbsp;{t('sign-in')}          
        </Link>
      </p>
    </>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout
      heading="Create an account"
      description="Start your 30-day free trial"
    >
      {page}
    </AuthLayout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req, res, locale }: GetServerSidePropsContext = context;

  const cookieParsed = getParsedCookie(req, res);

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
      inviteToken: cookieParsed.token,
      next: cookieParsed.url ?? '/auth/login',
    },
  };
};

export default Signup;
