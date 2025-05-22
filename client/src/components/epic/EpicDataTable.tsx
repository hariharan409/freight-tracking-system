import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow} from "@/components/ui/table";

interface Header<T> {
  header: string;
  accessor?: keyof T | string; // allow virtual column like "action"
  renderCell?: (row: T, rowIndex: number, control: any) => React.ReactNode;
}
interface DataTableProps<T> {
  headerList: ReadonlyArray<Header<T>>;  // <-- fix here
  dataList: T[];
  control?: any; // or `Control<FieldValues>` from react-hook-form
  className?: string
}

const EpicDataTable = <T,>({ headerList,dataList,control,className }: DataTableProps<T>) => {
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
          {dataList.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headerList.map((col) => (
                <TableCell key={String(col.accessor)}>
                  {col.renderCell ? col.renderCell(row,rowIndex,control) : String(row[col.accessor as keyof T])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EpicDataTable;
