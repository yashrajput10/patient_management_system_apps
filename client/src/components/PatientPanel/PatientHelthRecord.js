import React from "react";
import Navbar from "../Dashboard/Navbar";
import PatientSidebar from "./PatientSidebar";
import { Edit2Icon } from "lucide-react"; // Use Edit2Icon from lucide-react

const PatientHealthRecord = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <PatientSidebar />
            <div className="flex-grow overflow-auto bg-gray-100">
                <div className="sticky top-0 z-10">
                    <Navbar />
                </div>
                <div className="flex flex-col h-full p-6 bg-gray-100">
                    <div className="min-h-screen ">
                        <div className="p-6 rounded-lg ">
                            <div className="p-6 bg-white rounded-md shadow-md">
                                <div className="flex items-center justify-between pb-2 mb-4">
                                    <h1 className="text-xl font-semibold">Patient Details</h1>
                                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                                        <i className="fas fa-edit"></i> Edit Profile
                                    </button>
                                </div>

                                <div className="flex flex-col sm:flex-row">
                                    <div className="flex justify-center mb-4 sm:w-1/4 sm:mb-0 sm:justify-start">
                                        <img
                                            src="https://placehold.co/100x100"
                                            alt="Profile picture of the patient"
                                            className="w-24 h-24 rounded-full"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 text-sm sm:w-7/7 sm:grid-cols-2 lg:grid-cols-7">
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Name</p>
                                            <p className="font-semibold">Marcus Philips</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Number</p>
                                            <p className="font-semibold">99130 44537</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Email</p>
                                            <p className="font-semibold">John@gmail.com</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Gender</p>
                                            <p className="font-semibold">Male</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">DOB</p>
                                            <p className="font-semibold">2 Jan, 2002</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Age</p>
                                            <p className="font-semibold">20 Years</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Blood Group</p>
                                            <p className="font-semibold">B+</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Height (cm)</p>
                                            <p className="font-semibold">160</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Weight (Kg)</p>
                                            <p className="font-semibold">50</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Country</p>
                                            <p className="font-semibold">India</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">State</p>
                                            <p className="font-semibold">Gujarat</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">City</p>
                                            <p className="font-semibold">Ahmedabad</p>
                                        </div>
                                        <div className="font-lota text-[16px] md:text-[16px]">
                                            <p className="text-grey">Address</p>
                                            <p className="font-semibold whitespace-nowrap">
                                                B-408 Swastik society, mota varacha rajkot.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg ">
                            <div className="flex flex-col justify-between gap-4 p-6 mb-6 bg-white rounded-md shadow-md lg:flex-row">
                                <div className="flex flex-col w-full lg:w-2/3">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold">Medical History</h2>
                                        <a href="#" className="text-blue-500">
                                            View All History
                                        </a>
                                    </div>
                                    {/* Responsive Grid */}
                                    <div className="grid flex-grow grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        <div className="p-4 bg-white rounded-lg shadow">
                                            <h3 className="font-semibold">Dulce Schleifer</h3>
                                            <p className="text-sm text-gray-500">2 Jan, 2022</p>
                                            <h4 className="mt-2 font-semibold">Patient Issue</h4>
                                            <p className="text-sm text-gray-600">
                                                the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since the 1500s, when
                                                an unknown printer took.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-white rounded-lg shadow">
                                            <h3 className="font-semibold">Dulce Workman</h3>
                                            <p className="text-sm text-gray-500">2 Jan, 2022</p>
                                            <h4 className="mt-2 font-semibold">Patient Issue</h4>
                                            <p className="text-sm text-gray-600">
                                                the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since the 1500s, when
                                                an unknown printer took.
                                            </p>
                                        </div>
                                        <div className="p-4 bg-white rounded-lg shadow">
                                            <h3 className="font-semibold">Miracle Septimus</h3>
                                            <p className="text-sm text-gray-500">2 Jan, 2022</p>
                                            <h4 className="mt-2 font-semibold">Patient Issue</h4>
                                            <p className="text-sm text-gray-600">
                                                the printing and typesetting industry. Lorem Ipsum has been
                                                the industry's standard dummy text ever since the 1500s, when
                                                an unknown printer took.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Prescriptions Section */}
                                <div className="flex flex-col w-full lg:w-1/3">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold">Prescriptions</h2>
                                        <a href="#" className="text-blue-500">
                                            View All Prescription
                                        </a>
                                    </div>
                                    <div className="flex-grow p-4 bg-white rounded-lg shadow">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="text-left text-gray-500">
                                                    <th className="pb-2">Hospital Name</th>
                                                    <th className="pb-2">Date</th>
                                                    <th className="pb-2">Disease Name</th>
                                                    <th className="pb-2">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-t">
                                                    <td className="py-2">Apollo Hospitals</td>
                                                    <td className="py-2">2 Jan, 2022</td>
                                                    <td className="py-2">Colds and Flu</td>
                                                    <td className="py-2">
                                                        <i className="text-blue-500 fas fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr className="border-t">
                                                    <td className="py-2">Medanta The Medicity</td>
                                                    <td className="py-2">2 Jan, 2022</td>
                                                    <td className="py-2">Allergies</td>
                                                    <td className="py-2">
                                                        <i className="text-blue-500 fas fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr className="border-t">
                                                    <td className="py-2">Manipal Hospitals</td>
                                                    <td className="py-2">2 Jan, 2022</td>
                                                    <td className="py-2">Diarrhea</td>
                                                    <td className="py-2">
                                                        <i className="text-blue-500 fas fa-eye"></i>
                                                    </td>
                                                </tr>
                                                <tr className="border-t">
                                                    <td className="py-2">Narayana Health</td>
                                                    <td className="py-2">2 Jan, 2022</td>
                                                    <td className="py-2">Colds and Flu</td>
                                                    <td className="py-2">
                                                        <i className="text-blue-500 fas fa-eye"></i>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="min-h-screen p-4 bg-gray-100 md:p-6">
                            <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
                                <div className="w-full p-4 bg-white rounded-lg shadow-md lg:w-2/3 md:p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-lg font-bold md:text-xl">Test Reports</h2>
                                        <a href="#" className="text-sm text-blue-600 md:text-base">
                                            View All Reports
                                        </a>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                name: "Dr. Marcus Philips",
                                                date: "2 Jan, 2022",
                                                disease: "Viral Infection",
                                                test: "Pathology Test",
                                            },
                                            {
                                                name: "Dr. Ryan Carder",
                                                date: "2 Jan, 2022",
                                                disease: "Allergies",
                                                test: "Pathology Test",
                                            },
                                            {
                                                name: "Dr. Zaire Saris",
                                                date: "2 Jan, 2022",
                                                disease: "Viral Infection",
                                                test: "Pathology Test",
                                            },
                                            {
                                                name: "Dr. Jaxson Herwitz",
                                                date: "2 Jan, 2022",
                                                disease: "Allergies",
                                                test: "Pathology Test",
                                            },
                                        ].map((report, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-gray-50"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <img
                                                        src="https://placehold.co/50x50"
                                                        alt="Doctor's profile picture"
                                                        className="w-12 h-12 rounded-full"
                                                    />
                                                    <div>
                                                        <h3 className="text-sm font-medium md:text-base">
                                                            {report.name}
                                                        </h3>
                                                        <p className="text-xs text-gray-500 md:text-sm">
                                                            {report.date}
                                                        </p>
                                                        <p className="text-xs text-gray-700 md:text-sm">
                                                            Dieses:{" "}
                                                            <span className="text-blue-600">{report.disease}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <span className="text-xs text-green-500 md:text-sm">
                                                        {report.test}
                                                    </span>
                                                    <i className="text-gray-400 fas fa-ellipsis-v"></i>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full p-4 bg-white rounded-lg shadow-md lg:w-1/3 md:p-6">
                                    <h2 className="mb-4 text-lg font-bold md:text-xl">
                                        Patient Status
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <i className="text-lg text-blue-500 fas fa-hospital md:text-xl"></i>
                                            <span className="text-sm md:text-base">Shambula Hospital</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <i className="text-lg text-green-500 fas fa-user-md md:text-xl"></i>
                                            <span className="text-sm md:text-base">Dr. Mathew Best</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <i className="text-lg text-purple-500 fas fa-calendar-alt md:text-xl"></i>
                                            <span className="text-sm md:text-base">2 Jan, 2022</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <i className="text-lg text-pink-500 fas fa-disease md:text-xl"></i>
                                            <span className="text-sm md:text-base">Chance Carder</span>
                                        </div>
                                        <p className="text-xs text-gray-700 md:text-sm">
                                            It is a long established fact that a reader will be distracted
                                            by the readable content of a page when looking at its layout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientHealthRecord;