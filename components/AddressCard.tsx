import React from "react";
import Container from "./Container";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteAddress } from "@/actions/user";
import AddressDeleteForm from "./UserForms/AddressDeleteForm";
import Link from "next/link";

interface AddressProps {
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  _id: string;
}

function AddressCard({
  addr,
  parent_id,
}: {
  addr: AddressProps;
  parent_id: string;
}) {
  addr._id = addr._id.toString();
  parent_id = parent_id.toString();

  return (
    <Container className="shadow-sm text-sm outline-primary outline-2 hover:outline transition-all flex flex-wrap gap-2 items-start">
      <div>
        <p className="font-medium">{addr.address}</p>
        <p>
          {addr.city}, {addr.state}, {addr.country}
        </p>
        <p>Pin Code: {addr.pincode}</p>
      </div>
      <div className="flex gap-2 justify-end w-full">
        <Link href={`?address_info=${JSON.stringify(addr)}`} className="btn btn-primary">
          <FaEdit />
        </Link>
        <AddressDeleteForm addr_id={addr._id.toString()} parent_id={parent_id} />
      </div>
    </Container>
  );
}

export default AddressCard;
