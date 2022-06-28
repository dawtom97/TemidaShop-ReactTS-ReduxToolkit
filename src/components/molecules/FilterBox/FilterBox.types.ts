export type FilterProps = {
    title: string,
    options: string[],
    isGraphical?: boolean,
    onClick: (option:string) => void,
    currentValue: string,

}

