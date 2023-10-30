"use client";

import { deleteAddress } from "@/actions/user";
import { RiDeleteBinLine } from "react-icons/ri";
import { useSession } from "next-auth/react";

function AddressDeleteForm({ addr_id} : { addr_id: string }) {

    const { data: session } = useSession();

  return (
    <form action={deleteAddress}>
      <input type="hidden" name="addr_id" value={addr_id.toString()} />
      <input type="hidden" name="email" value={session?.user.email} />
      <button type="submit" className="btn btn-outline-primary">
        <RiDeleteBinLine />
      </button>
    </form>
  );
}

export default AddressDeleteForm;
