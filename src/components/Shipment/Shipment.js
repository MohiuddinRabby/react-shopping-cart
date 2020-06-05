import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from '../Login/user-auth';
import  './Shipment.css';
const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const auth = useAuth();
  return (
    <form className="shipment-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={auth.user.name}  ref={register({ required: true })} placeholder="Name" />
      {errors.name && <span className="error">Name is required</span>}
      <input name="Email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email" />
      {errors.Email && <span className="error">Email is required</span>}
      <input name="address" ref={register({ required: true })} placeholder="Address" />
      {errors.address && <span className="error">address is required</span>}
      <input name="phone" ref={register({ required: true })} placeholder="Phone" />
      {errors.phone && <span className="error">phone is required</span>}
      <input name="city" ref={register({ required: true })} placeholder="City" />
      {errors.city && <span className="error">city is required</span>}
      <input name="country" ref={register({ required: true })} placeholder="Country" />
      {errors.country && <span className="error">country is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Shipment;