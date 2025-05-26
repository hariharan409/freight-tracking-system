import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Header<T> {
  header: string;
  accessor?: keyof T | string;
  renderCell?: (row: T, rowIndex: number, control: any) => React.ReactNode;
}

interface DataTableProps<T> {
  headerList: ReadonlyArray<Header<T>>;
  dataList: T[];
  control?: any;
  className?: string;
  pageSize?: number;
  onPageChange?: (page: number) => void;
}

const EpicDataTable = <T,>({
  headerList,
  dataList,
  control,
  className,
  pageSize = 2,
  onPageChange,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dataList.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange?.(page); // notify parent if needed
  };

  const paginatedData = dataList.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className={className}>
      <Table>
        <TableHeader>
          <TableRow>
            {headerList.map((col) => (
              <TableHead key={String(col.accessor)}>{col.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headerList.map((col) => (
                <TableCell key={String(col.accessor)}>
                  {col.renderCell
                    ? col.renderCell(row, rowIndex, control)
                    : String(row[col.accessor as keyof T])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination UI */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-2 mt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            type="button"
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default EpicDataTable;
