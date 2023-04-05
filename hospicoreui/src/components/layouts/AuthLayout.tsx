import { Box, Flex, Stack,Heading,Text,useColorModeValue, useStyleConfig } from '@chakra-ui/react'
type Props = {
  children: React.ReactNode;
  heading?: string;
  description?: string;
};

export default function AuthLayout({ children, heading, description }: Props) {
  // const { variant, children, ...rest } = props;
  const styles = useStyleConfig("AuthLayout", {});
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>{heading}</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {description}
          </Text>
        </Stack>
        {children}
      </Stack>
    </Flex>
  );
}
