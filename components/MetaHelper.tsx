import Head from 'next/head'

export const MetaHelper = ({ title }: { title: string }): JSX.Element => {
  const content = `NG-SOS provides a full-service emergency assistance platform by alerting the closest private security, and medical response provider in your immediate vicinity, anywhere in Nigeria.`
  return (
    <Head>
      <title>{title} - NIGSOS</title>
      <meta name='description' content={content} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
