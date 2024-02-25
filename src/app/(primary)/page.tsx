"use client"

import React, { useState, useEffect } from 'react';
import Pagination from "../../components/elements/Pagination";
import { getResources } from "@/redux/todolist";
import { useSelector, useDispatch } from '@/redux/store';
import getStatus from "@/utils/status";
import { useRouter } from "next/navigation";
// import { useSearchParams } from 'next/navigation';

export default function MainPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(true);

    const { data } = useSelector((state) => state.todolists);

    const limit = data?.limit
    const total = data?.total

    const paginate = (pageNumber: number) => {
        const newSkip = (pageNumber - 1) * limit;
        setSkip(newSkip);
        setCurrentPage(pageNumber);
        dispatch(getResources({ limit, skip: newSkip })).then(() => {
            setLoading(false);
        });
        const url = `?limit=${limit}&skip=${skip}`;
        router.push(url);
        // const newParams = new URLSearchParams();
        // newParams.set('limit', limit.toString());
        // newParams.set('skip', newSkip.toString());
        // setParams(newParams);
    };

    useEffect(() => {
        paginate(currentPage);
    }, [skip]);

    const handleToDoDetail = (id: number) => {
        router.push(`/to-do/${id}`)
    }

    function Loading() {
        return <div>loading...</div>;
    }

    return (
        <div className='max-w-screen-xl mx-auto p-4 flex flex-col items-center min-h-screen'>
            {loading ? <Loading /> :
                <>
                    <div className='my-8 text-xl'>Your Tasks</div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-10">
                        {data?.todos?.map((item, index) => (
                            <div onClick={(() => handleToDoDetail(item.id))} className={getStatus(item.completed).textColor} key={index}>{item.todo}</div>
                        ))}
                    </div>
                    <Pagination currentPage={currentPage} skip={skip} limit={limit} total={total} paginate={paginate} />
                </>
            }
        </div>
    )
}
