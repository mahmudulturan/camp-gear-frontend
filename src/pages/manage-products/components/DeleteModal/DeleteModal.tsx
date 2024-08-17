import { FC, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../../../components/ui/dialog';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { MdDelete } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useDeleteAProductMutation } from '../../../../redux/features/productsApi';

const DeleteModal: FC<{ id: string }> = ({ id }) => {
    const [confirmPrompt, setConfirmPrompt] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [deleteAProduct] = useDeleteAProductMutation();
    const handleDeleteProduct = () => {
        if (confirmPrompt !== "DELETE") return;
        deleteAProduct(id).unwrap().then(() => {
            setIsOpen(false);
            toast.success("Product deleted successfully");
        });
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button size={"icon"}><MdDelete className='size-6' /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Are you sure you want to delete this product?</DialogTitle>
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
                        <Button disabled={confirmPrompt !== "DELETE"} onClick={handleDeleteProduct}>Delete</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteModal;