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
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-sm text-neutral-500'>{subheader} <Link replace={true} className='text-primary' href={link}>{linkText}</Link> </p>
    </div>
  )
}

export default AuthHeader