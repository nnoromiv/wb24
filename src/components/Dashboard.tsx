"use client"

import React, { useEffect, useState } from 'react'
import FormInput from './FormInput'
import data from '../data.json'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/table'
import { EmptyTable } from '@/components'


const Dashboard = () => {

    const [bigData, setBigData] = useState<{ WE4AID: string; ImprovementAreas: string; Recommendations: string; }[]>([])
    const [foundData, setFoundData] = useState<{ WE4AID: string; ImprovementAreas: string; Recommendations: string }[]>([])
    const [searchId, setSearchId] = useState('')
    const [isDataFound, setIsDataFound] = useState(false)

    useEffect(() => {
        setBigData(data)
    }, [])

    const handleSearch = (e: string) => {

        if (!e) {
            return
        }

        if (e.toUpperCase().startsWith('WE4AID-') && e.length <= 6) {
            return
        }

        const filteredResult = bigData.find((item) => (
            item.WE4AID === e
        ));

        if (!filteredResult) {
            setFoundData([])
            setIsDataFound(false)
            return
        }

        setSearchId(e)
        setFoundData([filteredResult])
        setIsDataFound(true)
    }

    const renderTable = () => {
        const hasData = foundData.length < 1

        return (
            <div>
                {
                    hasData
                        ? <EmptyTable emptyText='SEARCH BY WEA4 ID' />
                        : <Table isStriped removeWrapper className='mt-3' aria-labelledby='outlet'>

                            <TableHeader>
                                <TableColumn>WE4AID</TableColumn>
                                <TableColumn>ImprovementAreas</TableColumn>
                                <TableColumn>Recommendations</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {
                                    foundData.slice(0, 50).map((item, index) => (
                                        <TableRow key={index} className="hover:cursor-pointer dark:text-white text-black" >
                                            <TableCell className={`py-4 text-[12px]`}>{!isDataFound ? 'WE4AID-UNKNOWN' : searchId}</TableCell>
                                            <TableCell className="py-4 text-[12px]">{item.ImprovementAreas}</TableCell>
                                            <TableCell className="py-4 text-[12px]">{item.Recommendations}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                }
            </div>
        )
    }

    return (
        <div className="m-4">
            <FormInput
                label='*Search by WEA4 ID'
                endContentIcon={"mingcute:search-2-line"}
                type='text'
                onChange={(e) => handleSearch(e)}
            />

            {renderTable()}

        </div>
    )
}

export default Dashboard