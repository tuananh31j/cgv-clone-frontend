import Wrapper from '../../Components/Wrapper';

const Payment = () => {
    return (
        <>
            <Wrapper title='Thanh toan'>
                <div className='flex justify-between'>
                    <div className='flex w-[50vw] items-center justify-center gap-3 text-center font-extralight italic'>
                        <p>Đang cập nhật!</p>
                    </div>
                    <div className=' w-[400px] bg-slate-500 '>
                        <div className=' p-3'>
                            <p>
                                2 vé: <span>2000000vnd</span>
                            </p>
                            <p>
                                Bắp nước: <span>2000000vnd</span>
                            </p>
                        </div>
                        <div className='bg-red-800 p-3'>
                            <p>
                                Tổng tiền: <span>4000000vnd</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    );
};

export default Payment;
