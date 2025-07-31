exports.default = {
    type: "monitoring",
    details: {
        title: "License Manager",
        label: "License Manager",
        id: "licenseManager",
        url: "/licenseManager",
    },
    sections: [
        {
            details: {
                title: "License Manager Status",
                label: "License Manager Status",
                position: "1",
                id: "lmStatus",
                url: "/lmStatus",
            },
            content: "LicenseStatus.jsx",
        },
    ],
};
