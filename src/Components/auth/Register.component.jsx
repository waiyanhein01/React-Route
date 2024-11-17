import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useContactStore from '../../store/useContactStore';

const RegisterComponent = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const setContact = useContactStore((state) => state.setContact);
  const navigate = useNavigate();

  const contactType = watch('contactType', 'phone'); // Default to 'phone'

  const onSubmit = (data) => {
    console.log(data)
    setContact(data.contactType, data.contactValue); // Save to Zustand
    navigate('/verification'); // Navigate to next route
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="phone"
                {...register('contactType')}
                className="mr-2"
                defaultChecked
              />
              <span>Phone</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="email"
                {...register('contactType')}
                className="mr-2"
              />
              <span>Email</span>
            </label>
          </div>

          <div>
            <input
              type={contactType === 'phone' ? 'tel' : 'email'}
              {...register('contactValue', {
                required: `Please enter your ${contactType}.`,
                pattern: contactType === 'email'
                  ? {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address.',
                    }
                  : {
                      value: /^[0-9]+$/,
                      message: 'Invalid phone number.',
                    },
              })}
              placeholder={
                contactType === 'phone' ? 'Enter your phone number' : 'Enter your email'
              }
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.contactValue && (
              <p className="text-red-500 text-sm mt-1">{errors.contactValue.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
