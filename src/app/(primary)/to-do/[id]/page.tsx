"use client"

import withAuth from "@/components/withAuth";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '@/redux/store';
import { getOneToDoListResources, updateToDoListResources } from "@/redux/todolist";
import { usePathname, useRouter } from 'next/navigation';
import getStatus from "@/utils/status";

const ToDoList = () => {
    const dispatch = useDispatch();
    const pathName = usePathname();
    const router = useRouter();

    const id = pathName?.split("/").pop();

    const [loading, setLoading] = useState(true);
    const { todoTask } = useSelector((state) => state.todolists);

    useEffect(() => {
        dispatch(getOneToDoListResources(parseInt(id!))).then(() => {
            setLoading(false);
        });
    }, []);

    const handleUpdateStatus = (val: boolean) => {
        dispatch(updateToDoListResources(parseInt(id!), !val))
    }

    function Loading() {
        return <div className="text-center">loading...</div>;
    }

    return (
        <div className="max-w-screen-xl mx-auto p-4 ">
            <div className="flex gap-2 cursor-pointer mt-4 mb-10" onClick={() => router.back()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M9.308 17.308L4 12l5.308-5.308l.707.708l-4.1 4.1H20v1H5.915l4.1 4.1z" /></svg>Back</div>
            {loading ? <Loading /> :
                <div className="mx-auto w-6/12 p-16 gap-2 border text-center rounded">
                    <p>{todoTask.todo}</p>
                    <button onClick={() => handleUpdateStatus(todoTask?.completed)} className={getStatus(todoTask?.completed).color}>{getStatus(todoTask?.completed).text}</button>
                </div>
            }
        </div>)
}

export default ToDoList