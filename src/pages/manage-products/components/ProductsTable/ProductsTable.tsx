import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../../components/ui/table';
import { IProduct } from '../../../../redux/features/productsApi';
import image from '../../../../assets/mock-item-images/product12_5ad78891-a8aa-4fbf-868e-91c6a471d073.webp';

const ProductsTable: FC<{ products: IProduct[] | undefined }> = ({ products }) => {
    console.log(products);
    return (
        <div className='my-10'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-10'>#</TableHead>
                        <TableHead className='w-[400px]'>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className='text-center'>Price</TableHead>
                        <TableHead className='text-center'>Stock Quantity</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {products?.map((product, index) => (
                        <TableRow key={product._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="font-medium"><div className='flex items-center gap-3'>
                                <img className='size-10 rounded-xl' src={image} alt="" />
                                <h6>{product.title}</h6>
                            </div></TableCell>
                            <TableCell className='w-[300px]'>{product.category}</TableCell>
                            <TableCell className='w-[200px] text-center'>{product.price?.amount}</TableCell>
                            <TableCell className='w-[200px] text-center'>{product.inventory?.quantity}</TableCell>
                            <TableCell className="text-right">{product.rating?.rate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductsTable;