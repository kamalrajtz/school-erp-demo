import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const UserDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen((prev) => !prev);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center gap-x-1 text-sm cursor-pointer"
            >
                <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="User"
                />
                <ChevronDown className="text-[#667085]" />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 divide-y divide-gray-100 z-50">
                    <div className="py-3 px-4">
                        <span className="block text-sm font-semibold text-gray-900">
                            Neil Sims
                        </span>
                        <span className="block text-sm text-gray-500 truncate">
                            name@flowbite.com
                        </span>
                    </div>
                    <ul className="py-1 text-gray-700">
                        <li>
                            <button
                                className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer"
                                onClick={() => alert("Sign out clicked")}
                            >
                                Sign out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
