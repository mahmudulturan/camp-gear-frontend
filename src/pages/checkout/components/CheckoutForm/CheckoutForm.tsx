import { FC, useEffect, useState } from 'react';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Button } from '../../../../components/ui/button';
import { ICartState, removeAllCartItems } from '../../../../redux/features/cart/cartSlice';
import { useCreateBookingMutation } from '../../../../redux/features/booking/bookingApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hook';

const CheckoutForm: FC<Partial<ICartState>> = ({ totalItems, totalPrice, items }) => {
    const [products, setProducts] = useState<{ product: string, quantity: number }[]>([]);

    const [createBooking] = useCreateBookingMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const formatedProducts = items?.map(item => {
            return {
                product: item._id,
                quantity: item.quantity
            }
        })
        if (formatedProducts) {
            setProducts(formatedProducts);
        }
    }, [items])

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.name as unknown as HTMLInputElement).value;
        const email = (form.email as unknown as HTMLInputElement).value;
        const phone = (form.phone as unknown as HTMLInputElement).value;
        const address = (form.address as unknown as HTMLInputElement).value;
        const city = (form.city as unknown as HTMLInputElement).value;
        const state = (form.state as unknown as HTMLInputElement).value;
        const zip = (form.zip as unknown as HTMLInputElement).value;

        const bookingData = {
            user: {
                name,
                email,
                phone,
            },
            deliveryAddress: {
                address,
                city,
                state,
                zip
            },
            total: totalPrice,
            product: products,
            quantity: totalItems
        }
        createBooking(bookingData).unwrap().then(() => {
            toast.success('Booking created successfully!');
            dispatch(removeAllCartItems());
            navigate('/products');
        });
        console.log(bookingData);
    }
    return (
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 my-6'>
            <div className="space-y-2 col-span-2">
                <Label htmlFor="name" className="text-right font-semibold text-gray-600">
                    Name
                </Label>
                <Input
                    required
                    id="name"
                    placeholder='Enter your name'
                    className=""
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" className="text-right font-semibold text-gray-600">
                    Email
                </Label>
                <Input
                    required
                    id="email"
                    type='email'
                    placeholder='Enter your email'
                    className=""
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone" className="text-right font-semibold text-gray-600">
                    Phone
                </Label>
                <Input
                    required
                    id="phone"
                    type='number'
                    placeholder='Enter your phone number'
                    className=""
                />
            </div>
            <div className="space-y-2 col-span-2">
                <Label htmlFor="address" className="text-right font-semibold text-gray-600">
                    Address
                </Label>
                <Input
                    required
                    id="address"
                    placeholder='Enter your address'
                    className=""
                />
            </div>
            <div className="space-y-2 col-span-2">
                <Label htmlFor="city" className="text-right font-semibold text-gray-600">
                    City
                </Label>
                <Input
                    required
                    id="city"
                    placeholder='Enter your city'
                    className=""
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="state" className="text-right font-semibold text-gray-600">
                    State
                </Label>
                <Input
                    required
                    id="state"
                    placeholder='Enter your state'
                    className=""
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="zip" className="text-right font-semibold text-gray-600">
                    Zip
                </Label>
                <Input
                    required
                    id="zip"
                    placeholder='Enter your zip code'
                    className=""
                />
            </div>
            <div className='col-span-2'>
                <Label htmlFor="payment_method" className="text-right font-semibold text-gray-600">
                    Payment Method
                </Label>
                <div className='flex gap-2 items-center'>
                    <input
                        required type="checkbox" id='cash_on_delivery' />
                    <label htmlFor="cash_on_delivery">Cash on Delivery</label>
                </div>
            </div>
            <Button type='submit' className='w-full col-span-2 mt-3'>Place Order</Button>
        </form>
    );
};

export default CheckoutForm;