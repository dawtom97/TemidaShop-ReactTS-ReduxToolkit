import { Dispatch, SetStateAction } from 'react';

export type FilterProps = {
    title: string,
    options: string[],
    isGraphical?: boolean,
    onClick?: Dispatch<SetStateAction<string>> | any,
    currentValue: string,

}

