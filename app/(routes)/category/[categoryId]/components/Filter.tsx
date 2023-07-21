"use client";

import { useSearchParams } from "next/navigation";
import qs from "query-string";

import { Color, Size } from "@/types";
import { useRouter } from "next/router";

interface FilterProps {
    data: (Size | Color)[];
    name: string;
    valueKey: string;
}

const Filter:React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const selectedValue = searchParams.get(valueKey);
    const onClick = (id: string) => {
        const current = qs.parse(searchParams.toString());
        const query = {
            ...current, 
            [valueKey]: id
        }
        if (current[valueKey] === id) {
            query[valueKey] = null;
        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true });
        router.push(url);
    }
  return (
    <div>Filter</div>
  )
}

export default Filter