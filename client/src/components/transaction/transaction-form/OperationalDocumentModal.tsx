import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import EpicFileUpload from "@/components/epic/EpicFileUpload";
import EpicButton from "@/components/epic/EpicButton";
import EpicDropdown from "@/components/epic/epic-dropdown/EpicDropdown";
import EpicMultiSelect from "@/components/epic/EpicMultiSelect";
import useTransactionForm from "@/hooks/useTransactionForm";
import { useEffect, useRef } from "react";


interface OperationalDocumentModalProps {
    transactionWatch: (...args: any[]) => any;
    transactionSetValue: (...args: any[]) => void;
    document?: any;
    documentIndex: number;
    trigger: React.ReactNode;
}

const OperationalDocumentModal = ({transactionWatch, transactionSetValue,document,documentIndex,trigger }: OperationalDocumentModalProps) => {
    const closeRef = useRef<HTMLButtonElement>(null);
    const { contractList, documentAccessUserList } = useTransactionForm();
    const {control: popupControl,handleSubmit: handlePopupSubmit,reset: resetPopupForm} = useForm({
            defaultValues: {
                document_category: "operational",
                document_type_id: '',
                document_file_url: undefined,
                document_access_id: [],
            },
        });

    // Populate form when document changes
    useEffect(() => {
        if (document) {
        resetPopupForm(document);
        } else {
        resetPopupForm(); // Reset to default
        }
    }, [document, resetPopupForm]);

    return(
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="min-w-[90%] max-h-[90%] overflow-auto">
                <DialogHeader>
                    <DialogTitle className="capitalize">upload operational documents</DialogTitle>
                    <DialogDescription>
                        Please upload the relevant file and enter the corresponding document details below.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-start gap-3">
                    <EpicDropdown name="document_type_id" label="Document Type" control={popupControl} options={contractList} optionKey="id" optionValue="name" placeholder="Select Document Type" required />
                    <EpicFileUpload name="document_file_url" label="Upload File" control={popupControl} required accept=".pdf,.docx" multiple={false} />
                    <EpicMultiSelect name="document_access_id" label="Document Access" control={popupControl} options={documentAccessUserList} required variant="inverted" animation={2} maxCount={1} placeholder="Select User Access" className="w-[410px]" />
                </div>
                <DialogFooter>
                    <EpicButton label="save" type="button" className="w-[100px] uppercase" onClick={handlePopupSubmit((data) => {
                        const currentDocs = transactionWatch("upload_operational_documents") || [];
                        if(documentIndex !== -1) {
                            // Update existing document
                            const updatedDocs = [...currentDocs];
                            updatedDocs[documentIndex] = data;
                            transactionSetValue("upload_operational_documents", updatedDocs);
                        } else {
                            // Add new document
                            transactionSetValue("upload_operational_documents", [...currentDocs, data]);
                        }
                        resetPopupForm();
                        closeRef.current?.click(); // ✅ Close the modal
                    })} />
                </DialogFooter>
                {/* Hidden DialogClose button to trigger modal close */}
                <DialogClose asChild>
                    <button ref={closeRef} style={{ display: 'none' }} />
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default OperationalDocumentModal;