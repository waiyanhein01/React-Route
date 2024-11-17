import useContactStore from "../../store/useContactStore";

const VerificationComponent = () => {
  const { contactType, contactValue } = useContactStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
        <p className="text-lg">
          {contactType === 'phone'
            ? `Your phone number: ${contactValue}`
            : `Your email: ${contactValue}`}
        </p>
      </div>
    </div>
  );
};

export default VerificationComponent;
