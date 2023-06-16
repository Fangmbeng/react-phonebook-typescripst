import React from 'react';
import Input from './Input';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useDispatch, useStore } from 'react-redux';
import { chooseEmail, chooseAddress, chooseName, choosePhoneNumber } from '../redux/slices/RootSlice';
import { server_calls } from '../api/server';

interface ContactFormProps{
    id?: string[],
}

export const ContactForm = (props: ContactFormProps) => {
    const { register, handleSubmit } = useForm({});
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(props.id);
        console.log(`ID ${typeof props.id}`)
        console.log(data)
        if (props.id && props.id.length>0) {
            server_calls.update(props.id[0], data);
            console.log(data);
            console.log(`Updated: ${data} ${props.id}`);
            //setTimeout(() => { window.location.reload(); }, 1000);
            //event.target.reset();
        } else {
            //use dispatch to update our state in our store
            dispatch(chooseAddress(data.address));
            dispatch(chooseName(data.name));
            dispatch(choosePhoneNumber(data.phone_number));
            dispatch(chooseEmail(data.email));

            server_calls.create(store.getState());

            //setTimeout(() => { window.location.reload(); }, 1000);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Contact name</label>
                    <Input {...register("name")} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input {...register("email")} name="email" placeholder='Email' />
                </div>
                <div>
                    <label htmlFor="phone_number"> Phone number</label>
                    <Input {...register("phone_number")} name="phone_number" placeholder='Phone Number' />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <Input {...register("address")} name="address" placeholder='Address' />
                </div>
                <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>Submit</Button>
            </form>
        </div>
    );
}