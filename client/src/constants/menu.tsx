import { PlusCircleIcon,TruckIcon,DocumentTextIcon,ClipboardDocumentCheckIcon,UserIcon,HomeIcon } from '@heroicons/react/24/solid';

export const MENU_ITEMS = [
    {
        label: 'dashboard',
        icon: () => <HomeIcon />,
        navLink: "/dashboard",
        param: {}
    },
    {
        label: 'transaction',
        icon: () => <PlusCircleIcon />,
        navLink: "/transaction",
        children: [
            { icon: () => <PlusCircleIcon />, label: 'new transaction', navLink: "/new-transaction", params: {}},
            { icon: () => <PlusCircleIcon />, label: 'inprogress transaction', navLink: "/inprogress-transaction" },
            { icon: () => <PlusCircleIcon />, label: 'completed transaction', navLink: "/completed-transaction" },
            { icon: () => <PlusCircleIcon />, label: 'pending transaction', navLink: "/pending-transaction" },
        ]
    },
    {
        label: 'update transaction details',
        icon: () => <TruckIcon />,
        navLink: "/update-transaction-details"
    },
    {
        label: 'NOA request',
        icon: () => <DocumentTextIcon />,
        navLink: "/noa-request"
    },
    {
        label: 'issue permit',
        icon: () => <ClipboardDocumentCheckIcon />,
        navLink: "/issue-import-permit"
    },
    {
        label: 'update driver details',
        icon: () => <UserIcon />,
        navLink: "/update-driver-details"
    }
];

export type MenuItem = (typeof MENU_ITEMS)[number];