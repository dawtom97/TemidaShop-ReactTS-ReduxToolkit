export type ProductFiltersProps = {
    categories: string[],
    onChange: (category:string) => void,
    onReset: () => void
}