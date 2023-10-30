"use client";

import { deleteAddress } from "@/actions/user";
import { RiDeleteBinLine } from "react-icons/ri";

function AddressDeleteForm({ addr_id, parent_id} : { addr_id: string, parent_id: string }) {
  return (
    <form action={deleteAddress}>
      <input type="hidden" name="addr_id" value={addr_id.toString()} />
      <input type="hidden" name="parent_id" value={parent_id.toString()} />
      <button type="submit" className="btn btn-outline-primary">
        <RiDeleteBinLine />
      </button>
    </form>
  );
}

export default AddressDeleteForm;
