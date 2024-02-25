type PaginationProps = {
    currentPage: number;
    skip: number;
    limit: number;
    total: number,
    paginate: (pageNumber: number) => void
};

export default function Pagination({ currentPage, skip, limit, total, paginate }: PaginationProps) {
    let totalPage = [];

    const perPage: number = Math.ceil(total / limit);

    for (let i = 1; i <= perPage; i++) {
        totalPage.push(i);
    }

    return (
        <div className="flex items-center gap-2 h-8 text-sm">
            {totalPage.map(index => (
                <div onClick={() => paginate(index)} key={index} className={`flex items-center justify-center p-4 text-primary rounded cursor-pointer ${currentPage === index ? 'bg-blue-200' : 'border'}`}
                >{index}</div>
            ))}
        </div>
    )
}