import useTransactionForm from "@/hooks/useTransactionForm";
import EpicTextField from "@/components/epic/epic-textfield/EpicTextField";
import EpicTextarea from "@/components/epic/epic-textarea/EpicTextarea";
import EpicMultiSelect from "@/components/epic/EpicMultiSelect";
import EpicDropdown from "@/components/epic/epic-dropdown/EpicDropdown";
import EpicButton from "@/components/epic/EpicButton";
import EpicDatePicker from "@/components/epic/EpicDatePicker";
import EpicDataTable from "@/components/epic/EpicDataTable";
import EpicCheckbox from "@/components/epic/EpicCheckbox";
import ReferenceDocumentModal from "@/components/transaction/transaction-form/ReferenceDocumentModal";
import OperationalDocumentModal from "./OperationalDocumentModal";

const TransactionForm = () => {
    const {control,handleSubmit,onFormSubmit,vendorList,permitAgentList,contractList,materialCertificateList,insuranceTypeList,insuranceBrokerList,referenceDocumentheaderList,watch,operationalDocumentheaderList,setValue} = useTransactionForm();

    return(
        <>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <h3 className="text-center">sap data</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-start gap-3 mt-5">
                    {/* SAP Data – Read-Only Fields */}
                    <EpicTextField name="sap_shipment_po_number" control={control} label="Shipment PO #" required={true} placeholder="PO Number" readOnly={true} />
                    <EpicTextField name="sap_freight_forwarder_id" control={control} label="Freight Forwarder / Vendor" required={true} placeholder="Freight Forwarder / Vendor" readOnly={true}  />
                    <EpicTextField name="sap_mws" control={control} label="MWS" required={true} placeholder="MWS" readOnly={true}  />
                    <EpicTextField name="sap_project_name" control={control} label="Project Name" required={true} placeholder="Project Name" readOnly={true}  />
                    <EpicTextField name="sap_project_number" control={control} label="Project" required={true} placeholder="Project" readOnly={true}  />
                    <EpicTextField name="sap_material_po_incoterm" control={control} label="Material Po IncoTerm" required={true} placeholder="Material Po IncoTerm" readOnly={true}  />
                    <EpicTextField name="sap_ts_description" control={control} label="TS Description" required={true} placeholder="TS Description" readOnly={true}  />
                    <EpicTextField name="sap_total_cargo_value" control={control} label="Total Cargo Value" required={true} placeholder="Total Cargo Value" readOnly={true}  />
                    <EpicTextField name="sap_quotation_reference" control={control} label="Quotation Reference" required={true} placeholder="Quotation Reference" readOnly={true}  />
                    <EpicTextField name="sap_shipment_pr" control={control} label="Shipment PR" required={true} placeholder="Shipment PR" readOnly={true}  />
                    <EpicTextField name="sap_shipment_item_description" control={control} label="Shipment Item Description" required={true} placeholder="Shipment Item Description" readOnly={true}  />
                    <EpicTextField name="sap_shipment_mode" control={control} label="Shipment Mode" required={true} placeholder="Shipment Mode" readOnly={true}  />
                    <EpicTextField name="sap_shipment_inco_term" control={control} label="Shipment Inco Term" required={true} placeholder="Shipment Inco Term" readOnly={true}  />
                    <EpicTextField name="shipment_log_number" control={control} label="Shipment Log Number" required={true} placeholder="Shipment Log Number" readOnly={true}  />
                    {/* Fields for user input */}
                </div>
                <h3 className="text-center">additional details</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-start gap-3 mt-5">
                    <EpicTextField name="expeditor_pr" control={control} label="Expeditor PR" placeholder="Enter the Expeditor PR"  />
                    <EpicDropdown name="contract_id" label="Contract Number" control={control} options={contractList} optionKey="id" optionValue="name" placeholder="Select Contract Number" />
                    <EpicDropdown name="material_certificate_id" label="Type of Material Certificate" control={control} options={materialCertificateList} optionKey="id" optionValue="name" placeholder="Select Material Certificate" />
                    <EpicDropdown name="insurance_type_id" label="Insurance Type" control={control} options={insuranceTypeList} optionKey="id" optionValue="name" placeholder="Enter the Insurance Type" />
                    <EpicDropdown name="insurance_broker_id" label="Insurance Broker" control={control} options={insuranceBrokerList} optionKey="id" optionValue="name" placeholder="Enter the Insurance Broker" />
                    <EpicDropdown name="permit_agent_id" label="Permit Agent" control={control} options={permitAgentList} optionKey="id" optionValue="name" required={true} placeholder="Select Permit Agent" />
                    <EpicMultiSelect name="vendor_ids" label="Vendor List" control={control} options={vendorList} required variant="inverted" animation={2} maxCount={1} />
                    {/* <EpicDropdown name="marine_port_of_auth" label="Marine Port of Auth" control={control} options={marinePortList} optionKey="id" optionValue="name" placeholder="Select MPA" /> */}
                    <EpicCheckbox name="marine_port_of_auth" label="Is Marine Port of Auth" control={control} options={[ { label: 'Yes', value: true },{ label: 'No', value: false },]}/>
                    <EpicTextarea name="special_delivery_instruction" control={control} label="Special Delivery Instruction" placeholder="Enter the Special Delivery Instruction"  />
                </div>
                <h3 className="text-center">shipment tracking details</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-start gap-3 mt-5">
                    <EpicDatePicker name="planned_etd_date" control={control} label="Planned ETD Date" />
                    <EpicDatePicker name="planned_eta_date" control={control} label="Planned ETA Date" />
                    <EpicTextField name="planned_total_transit_days" control={control} label="Total Transit Days" placeholder="Total Transit Days" readOnly={true} showInfo  tooltipText="Total Transit Days = Planned ETA Date - Planned ETD Date (in days)"/>
                </div>
                <h3 className="text-center">actual tracking details</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-start gap-3 mt-5">
                    <EpicDatePicker name="actual_etd_date" control={control} label="Actual ETD Date" />
                    <EpicDatePicker name="actual_eta_date" control={control} label="Actual ETA Date" />
                    <EpicTextField name="total_delay" control={control} label="Total Delay" placeholder="Total Delay" readOnly={true} showInfo  tooltipText="Total Delay = Actual ETA Date - Planned ETA Date (in days)"/>
                </div>
                <div className="mt-5">
                    <div className="flex justify-between items-center gap-5">
                        <div />
                        <h3>upload reference documents</h3>
                        <ReferenceDocumentModal transactionWatch={watch} transactionSetValue={setValue} documentIndex={-1} trigger={<EpicButton label="+ add" type="button" className="w-[100px] uppercase" />}/>
                    </div>
                    <EpicDataTable headerList={referenceDocumentheaderList} dataList={watch("upload_reference_documents")} control={control} className="mt-6" />
                </div>
                <div className="mt-5">
                    <div className="flex justify-between items-center gap-5">
                        <div />
                        <h3>upload operational documents</h3>
                        <OperationalDocumentModal transactionWatch={watch} transactionSetValue={setValue} documentIndex={-1} trigger={<EpicButton label="+ add" type="button" className="w-[100px] uppercase" />} />
                    </div>
                    <EpicDataTable headerList={operationalDocumentheaderList} dataList={watch("upload_operational_documents")} control={control} className="mt-6" />
                </div>

                <div className="text-center"><EpicButton label="submit" type="submit" className="w-[200px] uppercase mt-5 mb-10" /></div>
            </form>
        </>
    )
}

export default TransactionForm;