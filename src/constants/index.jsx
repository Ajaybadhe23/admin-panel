export const initialData = [
    {
        id: 12345,
        date: "2023-12-11T18:30:00.000Z",
        to: "2023-12-20T18:30:00.000Z",
        branch: 'Thane',
        type: 'Full',
        amount: 547890,
        bank: 'CMV HDFC 1223323323',
        requestBy: 'test',
        status: 'Pending',
        userId: "3434343",
    },
    {
        id: 383483,
        date: "2023-12-13T18:30:00.000Z",
        to: "2023-12-18T18:30:00.000Z",
        branch: 'Mumbai',
        type: 'Short',
        amount: 647890,
        bank: 'BMV HDFC 1223323323',
        requestBy: 'Ajay',
        status: 'Approved',
        userId: "3434232"
    }, {
        id: 9483483,
        date: "2023-12-13T18:30:00.000Z",
        to: "2023-12-18T18:30:00.000Z",
        branch: 'Navi Mumbai',
        type: 'Full',
        amount: 647890,
        bank: 'EMV HDFC 1223323323',
        requestBy: 'vijay',
        status: 'Rejected',
        userId: "3434422"
    },
    {
        id: 6483483,
        date: "2023-12-13T18:30:00.000Z",
        to: "2023-12-18T18:30:00.000Z",
        branch: 'Mumbai',
        type: 'Full',
        amount: 649890,
        bank: 'BMV HDFC 1223323323',
        requestBy: 'vijay',
        status: 'Rejected',
        userId: "3434922"
    }, {
        id: 7883483,
        date: "2023-12-13T18:30:00.000Z",
        to: "2023-12-18T18:30:00.000Z",
        branch: 'Kurla',
        type: 'Full',
        amount: 6897890,
        bank: 'BMV HDFC 1223323323',
        requestBy: 'vijay',
        status: 'Rejected',
        userId: "78434922"
    },
    {
        id: 8883483,
        date: "2023-12-13T18:30:00.000Z",
        to: "2023-12-18T18:30:00.000Z",
        branch: 'Vile Parle',
        type: 'Full',
        amount: 5697890,
        bank: 'BMV HDFC 1223323323',
        requestBy: 'Akshay',
        status: 'Approved',
        userId: "78434922"
    },
    {
        id: 67883483,
        date: "2023-12-13T18:30:00.000Z",
        to: "2023-12-18T18:30:00.000Z",
        branch: 'Lower Parel',
        type: 'Full',
        amount: 5697890,
        bank: 'BMV HDFC 1223323323',
        requestBy: 'Akshay',
        status: 'Approved',
        userId: "776334922"
    }

]

export const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'Id',
    },

    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'From Date',
    },
    {
        id: 'to',
        numeric: false,
        disablePadding: false,
        label: 'To Date',
    },
    {
        id: 'branch',
        numeric: false,
        disablePadding: false,
        label: 'Branch',
    },
    {
        id: 'type',
        numeric: false,
        disablePadding: false,
        label: 'Type',
    },
    {
        id: 'amount',
        numeric: true,
        disablePadding: false,
        label: 'Amount',
    },
    {
        id: 'bank',
        numeric: true,
        disablePadding: false,
        label: 'Bank',
    },
    {
        id: 'requestBy',
        numeric: true,
        disablePadding: false,
        label: 'Request By',
    },

];