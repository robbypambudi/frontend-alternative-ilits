import { useFormContext } from 'react-hook-form';
import { HiExclamationCircle } from 'react-icons/hi';

type typemap = {
  id: string;
  nama: string;
};
type typemapFakultas = {
  id: string;
  nama: string;
  singkatan: string;
};
type Props = {
  id: string;
  label: string;
  validate: object;
  data: Array<typemap>;
};

export default function SelectInput({ id, label, validate, data }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className='mt-3 flex flex-col font-secondary'>
        <label className='text-base font-bold'>{label}</label>
        <select
          id={id}
          {...register(id, validate)}
          className='mt-2 rounded-xl border-2 border-gray-200 px-4 py-2 text-gray-500'
        >
          {data?.map(({ id, nama }, index) => {
            return (
              <option value={id} key={index}>
                {nama}
              </option>
            );
          })}
        </select>
        {errors[id] && (
          <div className='mt-1 flex flex-row'>
            <HiExclamationCircle className='text-xl text-red-500' />
            <span className='text-sm text-red-500'>
              <>{errors[id]?.message}</>
            </span>
          </div>
        )}
      </div>
    </>
  );
}
export function SelectInputFak({
  id,
  label,
  validate,
  data,
}: {
  id: string;
  label: string;
  validate: object;
  data: Array<typemapFakultas>;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className='mt-3 flex flex-col font-secondary'>
        <label className='text-base font-bold'>{label}</label>
        <select
          id={id}
          {...register(label, validate)}
          className='mt-2 rounded-xl border-2 border-gray-200 px-4 py-2 text-gray-500'
        >
          {data?.map(({ id, nama, singkatan }, index: number) => {
            return (
              <option value={id} key={index}>{`${nama} ${singkatan}`}</option>
            );
          })}
        </select>
        {errors[id] && (
          <div className='mt-1 flex flex-row'>
            <HiExclamationCircle className='text-xl text-red-500' />
            <span className='text-sm text-red-500'>
              <>{errors[id]?.message}</>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export function SelectInputDept({
  id,
  label,
  validate,
  data,
}: {
  id: string;
  label: string;
  validate: object;
  data: Array<typemap>;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className='mt-3 flex flex-col font-secondary'>
        <label className='text-base font-bold'>{label}</label>
        <select
          id={id}
          {...register(label, validate)}
          className='mt-2 rounded-xl border-2 border-gray-200 px-4 py-2 text-gray-500'
        >
          {data?.map(({ id, nama }, index: number) => {
            return <option value={id} key={index}>{`${nama}`}</option>;
          })}
        </select>
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
