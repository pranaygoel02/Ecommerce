import Link  from 'next/link'

interface AuthHeaderProps {
    title: string,
    subheader: string,
    link: string,
    linkText: string
}

const AuthHeader : React.FC<AuthHeaderProps> = ({title, subheader, link, linkText}) => {
  return (
    <div className='space-y-2 mb-4 text-center w-full'>
        <h2 className='font-kumbh font-[600] text-2xl md:text-3xl'>{title}</h2>
        <p className='font-oxygen md:text-[1.05rem] font-[400]'>{subheader} <Link replace={true} className='text-primary' href={link}>{linkText}</Link> </p>
    </div>
  )
}

export default AuthHeader