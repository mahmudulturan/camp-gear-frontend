import { FC, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../../../components/ui/dialog';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { useAppDispatch } from '../../../../redux/hook';
import { removeFromCart } from '../../../../redux/features/cart/cartSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DeleteCartModal: FC<{ id: string }> = ({ id }) => {
    const [confirmPrompt, setConfirmPrompt] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleDeleteFromCart = () => {
        dispatch(removeFromCart({ _id: id }));
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button  variant={"outline"} size={"icon"}> <RiDeleteBin6Line className='size-4' />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this product from your cart?</DialogTitle>
                    <DialogDescription>
                        Type <span className='bg-slate-200 px-1 py-0.5 rounded-md'>DELETE</span> to confirm.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pb-4">
                    <Input
                        id="confirm-prompt"
                        placeholder="Type DELETE to confirm"
                        name="confirm-prompt"
                        onChange={e => setConfirmPrompt(e.target.value)}
                    />
                    <div className='text-right'>
                        <Button disabled={confirmPrompt !== "DELETE"} onClick={handleDeleteFromCart}>Delete</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteCartModal;