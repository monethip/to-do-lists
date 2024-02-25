"use client"

import React, { useState, useEffect } from 'react';
import Pagination from "../../components/elements/Pagination";
import { getResources } from "@/redux/todolist";
import { useSelector, useDispatch } from '@/redux/store';
import getStatus from "@/utils/status";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';

export default function MainPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [skip, setSkip] = useState(0)
    const [params, setParams] = useState(new URLSearchParams());

    const { data } = useSelector((state) => state.todolists);
    const searchParams = useSearchParams();

    const limit = data?.limit
    const total = data?.total

    function updateSorting(sortOrder: string) {
        const params = new URLSearchParams(searchParams?.toString())
        params.set('skip', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
      }

    const paginate = (pageNumber: number) => {
        const newSkip = (pageNumber - 1) * limit;
        setSkip(newSkip);
        setCurrentPage(pageNumber);
        dispatch(getResources({ limit, skip: skip }));
        const newParams = new URLSearchParams();
        newParams.set('limit', limit.toString());
        newParams.set('skip', newSkip.toString());
        setParams(newParams);
    };

    useEffect(() => {
        paginate(currentPage);
        localStorage.setItem('skip', skip.toString());
    }, [skip]);

    // useEffect(() => {
    //     const url = `?${params.toString()}`;
    //     window.history.pushState(null, '', url);
    // }, [params]);

    const handleToDoDetail = (id: number) => {
        router.push(`/to-do/${id}`)
    }

    if (!data) {
        return 'Loading...';
    }

    return (
        <div className='max-w-screen-xl mx-auto p-4 flex flex-col justify-center items-center min-h-screen my-16'>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-10">
                {data?.todos?.map((item, index) => (
                    <div onClick={(() => handleToDoDetail(item.id))} className={getStatus(item.completed).textColor} key={index}>{item.todo}</div>
                ))}
            </div>

            <Pagination currentPage={currentPage} skip={skip} limit={limit} total={total} paginate={paginate} />
        </div>
    )
}
