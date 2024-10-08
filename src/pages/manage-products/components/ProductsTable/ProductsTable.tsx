import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../../components/ui/table';
import { IProduct } from '../../../../redux/features/productsApi';
import EditProductModal from '../EditProductModal/EditProductModal';
import DeleteModal from '../DeleteModal/DeleteModal';

const ProductsTable: FC<{ products: IProduct[] | undefined, page: number }> = ({ products, page }) => {

    return (
        <div className='mb-10 mt-4'>
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
                            <TableCell>{index + 1 + (page - 1) * 8}</TableCell>
                            <TableCell className="font-medium"><div className='flex items-center gap-3'>
                                <img className='size-10 rounded-xl' src={product.image} alt="" />
                                <h6>{product.title}</h6>
                            </div></TableCell>
                            <TableCell className='w-[300px]'>{product.category}</TableCell>
                            <TableCell className='w-[200px] text-center'>{product.price?.amount}</TableCell>
                            <TableCell className='w-[200px] text-center'>{product.inventory?.quantity}</TableCell>
                            <TableCell className="text-right">
                                <div className='flex items-center gap-3 justify-end'>
                                    <EditProductModal product={product} />
                                    <DeleteModal id={product._id}/>
                                    {/* <Button onClick={() => handleDeleteProduct(product._id)} size={"icon"}><MdDelete className='size-6' /></Button> */}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ProductsTable;