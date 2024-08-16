import { FC, FormEvent, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../../../../components/ui/dialog';
import { Button } from '../../../../components/ui/button';
import { Input } from '../../../../components/ui/input';
import { Label } from '../../../../components/ui/label';
import { IProduct, usePostAProductMutation } from '../../../../redux/features/productsApi';
import toast from 'react-hot-toast';

const AddProductModal: FC = () => {
    const [open, setOpen] = useState(false);

    const [addProduct] = usePostAProductMutation();

    const handleAddProduct = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const title = (form.title as unknown as HTMLInputElement).value;
        const category = (form.category as unknown as HTMLInputElement).value;
        const price = parseInt((form.price as unknown as HTMLInputElement).value);
        const stock_quantity = parseInt((form.stock_quantity as unknown as HTMLInputElement).value);
        const image = (form.image as unknown as HTMLInputElement).value;
        const description = (form.description as unknown as HTMLInputElement).value;

        const productData: Partial<IProduct> = {
            title,
            category,
            price: {
                amount: price,
                discount: 0
            },
            rating: {
                rate: Math.random() * 5,
                count: Math.floor(Math.random() * 1000)
            },
            inventory: {
                quantity: stock_quantity,
                inStock: true
            },
            image,
            description
        }
        addProduct(productData).unwrap().then(() => {
            setOpen(false);
            toast.success("Product added successfully")
        });
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant="outline" className='h-10 px-4'>Add New Product</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                        Add a new product to your store
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form onSubmit={handleAddProduct} className='grid grid-cols-2 gap-3'>
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input
                                required
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
                                required
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
                                required
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
                                required
                                id="stock_quantity"
                                placeholder='Product Stock Quantity'
                                className=""
                                min={0}
                                type='number'
                            />
                        </div>
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="image" className="text-right">
                                Image URL
                            </Label>
                            <Input
                                required
                                id="image"
                                placeholder='Product Image URL'
                                className="col-span-2"
                                type='text'
                            />
                        </div>
                        <div className="space-y-2 col-span-2">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                required
                                id="description"
                                placeholder='Product description'
                                className="col-span-2"
                                type='text'
                            />
                        </div>
                        <Button type="submit" className='col-span-2 mt-3'>Add Product</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AddProductModal;