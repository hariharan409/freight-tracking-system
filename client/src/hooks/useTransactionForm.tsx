import { Control, useForm } from "react-hook-form";
import {DateTime} from "luxon";
import { useEffect } from "react";
import { MinusCircleIcon,PencilIcon } from '@heroicons/react/24/solid';
import ReferenceDocumentModal from "@/components/transaction/transaction-form/ReferenceDocumentModal";

const useTransactionForm = () => {

    interface ReferenceDocument {
        document_category: string;
        document_type_id?: string;
        document_file_url?: File;
        document_access_id: string
      }
      
      interface FormValues {
        // SAP Fields
        sap_shipment_po_number: string;
        sap_freight_forwarder_id: string;
        sap_mws: number;
        sap_project_name: string;
        sap_project_number: string;
        sap_material_po_incoterm: string;
        sap_ts_description: string;
        sap_total_cargo_value: number;
        sap_quotation_reference: string;
        sap_shipment_pr: string;
        sap_shipment_item_description: string;
        sap_shipment_mode: string;
        sap_shipment_inco_term: string;
        shipment_log_number: string;
      
        // Additional Details
        expeditor_pr: string;
        contract_id?: string;
        material_certificate_id: string;
        insurance_type_id: string;
        insurance_broker_id: string;
        permit_agent_id?: string;
        vendor_ids: string[];
        special_delivery_instruction: string;
      
        // Shipment Tracking Details
        planned_etd_date?: Date;
        planned_eta_date?: Date;
        planned_total_transit_days: number;
      
        // Actual Tracking Details
        marine_port_of_auth: boolean;
        actual_etd_date?: Date;
        actual_eta_date?: Date;
        total_delay: number;
      
        // Documents
        upload_reference_documents: ReferenceDocument[];
        upload_operational_documents: ReferenceDocument[]
      
        // Status
        status_id: number;
      }

    const {control, handleSubmit,watch,setValue, formState: {errors}} = useForm<FormValues>({
        defaultValues: {
            /* sap Data – read-only Fields */
            sap_shipment_po_number: "PO1",
            sap_freight_forwarder_id: "Kuehne + Nagel",
            sap_mws: 10000,
            sap_project_name: "Solar Plant Expansion Project",
            sap_project_number: "PRJ-EXP-2025-0001",
            sap_material_po_incoterm: "FOB (Shanghai Port)",
            sap_ts_description: "Ocean Freight - FCL 20",
            sap_total_cargo_value: 25000,
            sap_quotation_reference: "QTN-FF-2025-04567",
            sap_shipment_pr: "PR-2025-87654", 
            sap_shipment_item_description:"Steel Pipes - ASTM A106",
            sap_shipment_mode: "Ocean - FCL",
            sap_shipment_inco_term: "FOB",
            shipment_log_number: "PRJ-EXP-2025-0001-PR-2025-87654-PO1-SLA", // combination of sap_project_number - sap_shipment_pr - sap_shipment_po_number - sap_shipment_mode
            /* Fields for additional details section */
            expeditor_pr: "",
            contract_id: undefined,
            material_certificate_id: "",
            insurance_type_id: "",
            insurance_broker_id: "", 
            permit_agent_id: undefined,
            vendor_ids: [],
            special_delivery_instruction: "",
            /* Fields for shipment tracking details section */
            planned_etd_date : undefined,
            planned_eta_date: undefined,
            planned_total_transit_days: 0,
            /* Fields for actual tracking details section */
            marine_port_of_auth: false,
            actual_etd_date: undefined,
            actual_eta_date: undefined,
            total_delay: 0,
            
            upload_reference_documents: [],
            upload_operational_documents: [],
            // The status_id field references the mst_status table id and is used to track the current status of the transaction.
            status_id: 1
        }
    });

    // Watch the ETD and ETA dates
    const plannedEtdDate = watch("planned_etd_date");
    const plannedEtaDate = watch("planned_eta_date");

    // Calculate and update transit days whenever ETD or ETA changes
    useEffect(() => {
        if (plannedEtdDate && plannedEtaDate) {
            const etd = DateTime.fromJSDate(plannedEtdDate);
            const eta = DateTime.fromJSDate(plannedEtaDate);
            const transitDays = eta.diff(etd, "days").days;
            
            // Only update if the value is valid and positive
            setValue("planned_total_transit_days", transitDays >= 0 ? transitDays : 0);
        }
    }, [plannedEtdDate, plannedEtaDate, setValue]);

    // Watch the ETD and ETA dates
    const actualEtaDate = watch("actual_eta_date");

    // Calculate and update transit days whenever ETD or ETA changes
    useEffect(() => {
        if (actualEtaDate && plannedEtaDate) {
            const aEta = DateTime.fromJSDate(actualEtaDate);
            const pEta = DateTime.fromJSDate(plannedEtaDate);
            const totalDelay = aEta.diff(pEta, "days").days;
            
            // Only update if the value is valid and positive
            setValue("total_delay",totalDelay);
        }
    }, [actualEtaDate, plannedEtaDate, setValue]);

    const onFormSubmit = (data: Object) => {
        try {
            console.log(data)
        } catch (error) {
            
        }
    }

    const vendorList = [
        { value: "1", label: "Alpha Industrial Supplies" },
        { value: "2", label: "GreenTech Environmental Solutions" },
        { value: "3", label: "BuildRight Construction Services" },
        { value: "4", label: "SafeZone Equipment Co." },
        { value: "5", label: "AccessPro Facility Services" },
        { value: "6", label: "PermitPro Consultants" },
        { value: "7", label: "MainTech Maintenance Solutions" },
        { value: "8", label: "HazardGuard Safety Services" },
        { value: "9", label: "UtilityLink Infrastructure Ltd." },
        { value: "10", label: "ConfineSafe Operations Ltd." },
    ];

    const permitAgentList = [
        { id: 1, name: "Safety Compliance Officer" },
        { id: 2, name: "Environmental Permit Agent" },
        { id: 3, name: "Construction Permit Coordinator" },
        { id: 4, name: "Worksite Safety Inspector" },
        { id: 5, name: "Facility Access Controller" },
        { id: 6, name: "Operations Permit Reviewer" },
        { id: 7, name: "Maintenance Work Authorizer" },
        { id: 8, name: "Hazard Assessment Officer" },
        { id: 9, name: "Utility Permit Specialist" },
        { id: 10, name: "Confined Space Entry Supervisor" },
    ];

    const contractList = [
        {id: 1, name: "cn-1"},
        {id: 2, name: "cn-2"},
        {id: 3, name: "cn-3"}
    ];

    const materialCertificateList = [
        {id: 1,name: "mc1"},
        {id: 2,name: "mc2"},
        {id: 3,name: "mc3"},
    ];

    const insuranceTypeList = [
        {id: 1,name: "ic1"},
        {id: 2,name: "ic2"},
        {id: 3,name: "ic3"},
    ];

    const insuranceBrokerList = [
        {id: 1,name: "ib1"},
        {id: 2,name: "ib2"},
        {id: 3,name: "ib3"},
    ];

    const documentAccessUserList = [
        {value: "freight-forwarder",label: "freight-forwarder"},
        {value: "permit-agent",label: "permit-agent"},
        {value: "internal",label: "internal"},
    ];

    const marinePortList = [
      {id: 1,name: "yes"},
      {id: 2,name: "no"}
    ]

    const referenceDocumentheaderList = [
        {
          header: "Document Type",
          accessor: "document_type_id",
        },
        {
          header: "Uploaded Documents",
          accessor: "document_file_url",
          renderCell: (_: any, index: any, control: Control<{ upload_reference_documents: any; } & { upload_reference_documents: any; }>) => {
            const document = watch("upload_reference_documents")[index];
            const fileUrl = document?.document_file_url;
            // If it's a previously saved file object (e.g. from backend)
            if (typeof fileUrl === "object" && fileUrl.name) {
              return (
                <a href={URL.createObjectURL(fileUrl)} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                  {fileUrl.name}
                </a>
              );
            }
          },
        },
        {
          header: "Document Access",
          accessor: "document_access_id",
        },
        {
            header: "Action",
            accessor: "action",
            renderCell: (_: any, index: number, control: Control<{ upload_reference_documents: any; } & { upload_reference_documents: any; }>) => (
                <div className="flex gap-2 items-center">
                  <ReferenceDocumentModal transactionWatch={watch} transactionSetValue={setValue} document={watch("upload_reference_documents")[index]} documentIndex={index} trigger={<PencilIcon className="w-6 h-6 cursor-pointer"  />}/>
                  <MinusCircleIcon className="w-8 h-8 text-red-500 cursor-pointer" onClick={() => removeNewReferenceDocument(index)} />
                </div>
            ),
        }
      ] as const;

    const removeNewReferenceDocument = (indexToRemove: number) => {
        const currentDocs = watch("upload_reference_documents") || [];
        const updatedDocs = currentDocs.filter((_, index) => index !== indexToRemove);
        setValue("upload_reference_documents", updatedDocs);
    }

    const removeNewOperationalDocument = (indexToRemove: number) => {
        const currentDocs = watch("upload_operational_documents") || [];
        const updatedDocs = currentDocs.filter((_, index) => index !== indexToRemove);
        setValue("upload_operational_documents", updatedDocs);
    }

    const operationalDocumentheaderList = [
        {
          header: "Document Type",
          accessor: "document_type_id",
        },
        {
          header: "Uploaded Documents",
          accessor: "document_file_url",
          renderCell: (_: any, index: any, control: Control<{ upload_operational_documents: any; } & { upload_operational_documents: any; }>) => {
            const document = watch("upload_operational_documents")[index];
            const fileUrl = document?.document_file_url;
            // If it's a previously saved file object (e.g. from backend)
            if (typeof fileUrl === "object" && fileUrl.name) {
              return (
                <a href={URL.createObjectURL(fileUrl)} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                  {fileUrl.name}
                </a>
              );
            }
          },
        },
        {
          header: "Document Access",
          accessor: "document_access_id",
        },
        {
            header: "Action",
            accessor: "action",
            renderCell: (_: any, index: number, control: Control<{ upload_operational_documents: any; } & { upload_operational_documents: any; }>) => (
                <div className="flex gap-1 items-center">
                  <ReferenceDocumentModal transactionWatch={watch} transactionSetValue={setValue} document={watch("upload_operational_documents")[index]} documentIndex={index} trigger={<PencilIcon className="w-5 h-5 cursor-pointer"  />}/>
                  <MinusCircleIcon className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => removeNewOperationalDocument(index)} />
                </div>
            ),
        }
      ] as const;

    return {
        control,errors,handleSubmit,onFormSubmit,watch,
        //for testing
        vendorList,permitAgentList,contractList,materialCertificateList,insuranceTypeList,insuranceBrokerList,referenceDocumentheaderList,operationalDocumentheaderList,marinePortList,documentAccessUserList,setValue
    }
}

export default useTransactionForm;