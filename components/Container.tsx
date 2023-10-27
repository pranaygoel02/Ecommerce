export default function Container({children, className} : {children: React.ReactNode, className?: string}) {
  return <div className={`bg-white p-4 rounded-lg ${className}`}>{children}</div>;
}
