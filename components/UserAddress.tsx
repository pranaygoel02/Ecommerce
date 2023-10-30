import { getAddress } from "@/actions/user";
import { getServerSession } from "next-auth";
import AddressCard from "./AddressCard";

async function UserAddress() {
  const session = await getServerSession();

  const data = await getAddress(session?.user?.email);
  
  if(!data) return null;

  const address = data?.address;
  const parent_id = data?._id;

  return(

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
    {address.map((addr: any) => (
      <AddressCard addr={addr} key={addr._id} parent_id={parent_id}/>
      ))}
  </section>
      )
}

export default UserAddress;
