import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';
export default function InputComponts({
  id,
  label,
  validate,
  placeholder,
}: {
  id: string;
  label: string;
  validate?: object;
  placeholder: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className='mt-3 flex flex-col font-secondary'>
        <label className='text-base font-bold'>{label}</label>
        <input
          id={id}
          placeholder={placeholder}
          {...register(label, validate)}
          className='mt-2 rounded-xl border-2 border-gray-200 px-4 py-2 text-gray-500'
        ></input>
        {errors[id] && (
          <div className='mt-1 flex flex-row'>
            <HiExclamationCircle className='text-xl text-red-500' />
            <span className='text-sm text-red-500'>
              <>{errors.id?.message}</>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
