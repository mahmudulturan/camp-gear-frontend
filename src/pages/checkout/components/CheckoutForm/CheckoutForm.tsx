import { FC } from 'react';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { Button } from '../../../../components/ui/button';

const CheckoutForm: FC = () => {
    return (
        <form className='grid grid-cols-2 gap-3 my-6'>
            <div className="space-y-2 col-span-2">
                <Label htmlFor="name" className="text-right font-semibold text-gray-600">
                    Name
                </Label>
                <Input
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
                    <input type="checkbox" id='cash_on_delivery' />
                    <label htmlFor="cash_on_delivery">Cash on Delivery</label>
                </div>
            </div>
            <Button type='submit' className='w-full col-span-2 mt-3'>Place Order</Button>
        </form>
    );
};

export default CheckoutForm;