import { AiOutlineLoading } from "react-icons/ai"

function loading() {
  return (
    <div className="h-[90vh] w-full flex items-center justify-center">
      <AiOutlineLoading className="text-primary animate-spin text-6xl" />
    </div>
  )
}

export default loading