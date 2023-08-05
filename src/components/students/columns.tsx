'use client'

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUp, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export type Student = {
    id: string;
    name: string;
    surname: string;
    results: 'pending' | 'yes' | 'no';
    email: string;
    phone_no: string;
}

export const columns: ColumnDef<Student>[] = [
    {
        id: 'select',
        header: (({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'

            />
        )),

        cell: ({ row }) => (

            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select all'
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: (({ column }) => {
            return (
                <Button variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>Name
                    <ArrowUp className='ml-2 h-4 w-4' />
                </Button>
            )
        })
    },
    {
        accessorKey: "surname",
        header: (({ column }) => {
            return (
                <Button variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>Surname
                    <ArrowUp className='ml-2 h-4 w-4' />
                </Button>
            )
        })
    },
    {
        accessorKey: "results",
        header: "Has Results"
    },
    {
        accessorKey: "email",
        header: "Email"
    },
    {
        accessorKey: "phone_no",
        header: "Phone No."
    },
]