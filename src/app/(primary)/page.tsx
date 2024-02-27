"use client"

import React, { useState, useEffect } from 'react';
import Pagination from "../../components/elements/Pagination";
import { getResources } from "@/redux/todolist";
import { useSelector, useDispatch } from '@/redux/store';
import getStatus from "@/utils/status";
import { useRouter, useSearchParams } from 'next/navigation';

export default function MainPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(true);

    const { data } = useSelector((state) => state.todolists);

    const search = parseInt(searchParams?.get('skip') as string) || 0;
    const [currentPage, setCurrentPage] = useState(Math.ceil((search) / data?.limit) + 1);

    useEffect(() => {
        dispatch(getResources({ limit: data?.limit, skip: (currentPage - 1) * data?.limit })).then(() => {
            setLoading(false);
        });
    }, [currentPage]);


    const paginate = (pageNumber: number) => {
        const newSkip = (pageNumber - 1) * data?.limit;
        setSkip(newSkip);
        setCurrentPage(pageNumber);

        const params = new URLSearchParams(searchParams?.toString())
        params.set('skip', newSkip.toString())
        window.history.pushState(null, '', `?limit=${data?.limit}&skip=${newSkip.toString()}`);
    };


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
                    <Pagination currentPage={currentPage} skip={skip} limit={data?.limit} total={data?.total} paginate={paginate} />
                </>
            }
        </div>
    )
}
