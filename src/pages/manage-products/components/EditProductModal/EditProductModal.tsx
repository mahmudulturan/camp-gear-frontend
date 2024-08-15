import { FC } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../components/ui/dialog';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { MdEdit } from 'react-icons/md';

const EditProductModal: FC = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"icon"}><MdEdit className='size-6' /></Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Edit Product</DialogTitle>
                    <DialogDescription>
                        Edit a product in your store
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form className='grid grid-cols-2 gap-3'>
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                id="title"
                                placeholder='Product Title'
                                className=""
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category" className="text-right">
                                Category
                            </Label>
                            <Input
                                id="category"
                                placeholder='Product Category'
                                className=""
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="price" className="text-right">
                                Price
                            </Label>
                            <Input
                                id="price"
                                placeholder='Product Price'
                                className=""
                                min={0}
                                type='number'
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stock_quantity" className="text-right">
                                Stock Quantity
                            </Label>
                            <Input
                                id="stock_quantity"
                                placeholder='Product Stock Quantity'
                                className=""
                                min={0}
                                type='number'
                            />
                        </div>
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                id="description"
                                placeholder='Product description'
                                className="col-span-2"
                                type='text'
                            />
                        </div>
                    </form>
                </div>
                <DialogFooter>
                    <Button type="submit">Update Product</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditProductModal;