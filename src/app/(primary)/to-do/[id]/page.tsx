"use client"

import withAuth from "@/components/withAuth";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from '@/redux/store';
import { getOneToDoListResources, updateToDoListResources } from "@/redux/todolist";
import { usePathname } from 'next/navigation';
import getStatus from "@/utils/status";

const ToDoList = () => {
    const dispatch = useDispatch();
    const pathName = usePathname();

    const id = pathName?.split("/").pop();
    const { todoTask } = useSelector((state) => state.todolists);

    useEffect(() => {
        dispatch(getOneToDoListResources(parseInt(id!)));
    }, []);

    const handleUpdateStatus = (val: boolean) => {
        dispatch(updateToDoListResources(parseInt(id!), !val))
    }

    return (
    <div className="max-w-screen-xl mx-auto my-10">
        <div className="mx-auto w-6/12 p-4 gap-2 border text-center rounded">
            <p>{todoTask.todo}</p>
            <button onClick={() => handleUpdateStatus(todoTask?.completed)} className={getStatus(todoTask?.completed).color}>{getStatus(todoTask?.completed).text}</button>
        </div>
    </div>)
}

export default withAuth(ToDoList)