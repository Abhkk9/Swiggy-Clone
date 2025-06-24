import { createContext, useState } from "react";

const addresses = [
  { lat: 28.570317, lng: 77.3218196, location: "Noida" },
  { lat: 28.4951598, lng: 77.0892137, location: "DLF Cyber City, DLF Phase 2" },
];

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
  return (
    <AddressContext.Provider value={{ addresses, selectedAddress, setSelectedAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressContext;