import EpicDataTable from "@/components/epic/EpicDataTable";
import useNewTransactionTable from "@/hooks/useNewTransactionTable";

const NewTransactionTable = () => {
  const {headerList,dataList} = useNewTransactionTable();

    return(
        <div>
            <EpicDataTable headerList={headerList} dataList={dataList} />
        </div>
    )
}

export default NewTransactionTable;