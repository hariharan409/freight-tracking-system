import useAppRouter from "./useAppRouter";


const useNewTransactionTable = () => {
  const {navigate} = useAppRouter();

    const dataList = [
            { 
              sap_shipment_po_number: "PO1", 
              sap_freight_forwarder_id: "Kuehne + Nagel", 
              sap_total_cargo_value: "25000", 
              shipment_log_number: "PO1-PRJ-EXP-2025-0001-20250515",
              sap_project_number: "PRJ-EXP-2025-0001", 
              sap_shipment_pr: "PR-2025-87654" 
            },
            { 
              sap_shipment_po_number: "PO2", 
              sap_freight_forwarder_id: "Kuehne + Nagel", 
              sap_total_cargo_value: "25000", 
              shipment_log_number: "PO1-PRJ-EXP-2025-0001-20250515",
              sap_project_number: "PRJ-EXP-2025-0001", 
              sap_shipment_pr: "PR-2025-87654" 
            },
            { 
              sap_shipment_po_number: "PO3", 
              sap_freight_forwarder_id: "Kuehne + Nagel", 
              sap_total_cargo_value: "25000", 
              shipment_log_number: "PO1-PRJ-EXP-2025-0001-20250515",
              sap_project_number: "PRJ-EXP-2025-0001", 
              sap_shipment_pr: "PR-2025-87654" 
            },
        ];
        
        const headerList = [
            { header: "Shipment PO", accessor: "sap_shipment_po_number",renderCell: (row: typeof dataList[number]) => (
                  <span onClick={() => navigate("/transaction-form")} className="text-blue-500 underline cursor-pointer hover:text-blue-700">
                        {row.sap_shipment_po_number}
                  </span>
              ), 
            },
            { header: "Freight Forwarder", accessor: "sap_freight_forwarder_id" },
            { header: "Total Cargo Value", accessor: "sap_total_cargo_value" },
            { header: "Shipment Log Number", accessor: "shipment_log_number" },
            { header: "Project", accessor: "sap_project_number" },
            { header: "Shipment PR", accessor: "sap_shipment_pr" },
        ] as const;

        return {
            headerList,dataList
        }
}

export default useNewTransactionTable;