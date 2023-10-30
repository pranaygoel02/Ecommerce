import React from "react";
import Container from "./Container";
import { FaEdit } from "react-icons/fa";
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
}: {
  addr: AddressProps;
}) {
  addr._id = addr._id.toString();

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
        <Link href={`?address_info=${JSON.stringify(addr)}#address-card`} className="btn btn-primary">
          <FaEdit />
        </Link>
        <AddressDeleteForm addr_id={addr._id.toString()} />
      </div>
    </Container>
  );
}

export default AddressCard;
