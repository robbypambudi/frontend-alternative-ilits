import clsx from 'clsx';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Biodata from '@/pages/form-pendaftaran/biodata.page';
import Pertanyaan from '@/pages/form-pendaftaran/pertanyaan.page';

export default function HomePage() {
  const methods = useForm();

  const onSubmit = (data: object) => {
    return data;
  };

  const { handleSubmit } = methods;
  const [page, setPage] = React.useState(1);

  const IncrementPage = () => {
    if (page !== 4) {
      setPage(page + 1);
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {/* Pendaftaran */}
      <div className='my-10 w-max rounded border bg-white p-10 shadow-md'>
        <h1 className='text-center text-2xl'>
          Pendaftaran Staff Divisi/Subdivisi Ini Lho ITS! 2023
        </h1>
        <hr className='w-full sm:mt-2 lg:my-4'></hr>
        <br></br>

        <div className='flex w-full items-center justify-center '>
          <div className='relative flex h-[2px] w-[80%] items-center justify-between rounded bg-blue-500'>
            {/* Button */}
            <div
              className={clsx(
                'flex h-10 w-10  items-center justify-center rounded-full',
                page >= 1 ? 'cs-bg-button text-white ' : 'bg-gray-400'
              )}
            >
              <p className={clsx('text-lg font-bold')}>1</p>
            </div>
            <div
              className={clsx(
                'flex h-10 w-10 items-center justify-center rounded-full',
                page >= 2 ? 'cs-bg-button text-white' : 'bg-gray-400'
              )}
            >
              <p className={clsx('text-lg font-bold')}>2</p>
            </div>
            <div
              className={clsx(
                'flex h-10 w-10  items-center justify-center rounded-full',
                page >= 3 ? 'cs-bg-button text-white' : 'bg-gray-400'
              )}
            >
              <p className={clsx('text-lg font-bold')}>3</p>
            </div>
            <div
              className={clsx(
                'flex h-10 w-10  items-center justify-center rounded-full',
                page >= 4 ? 'cs-bg-button text-white' : 'bg-gray-400'
              )}
            >
              <p className={clsx('text-lg font-bold')}>4</p>
            </div>
          </div>
        </div>
        <br></br>
        <div className=''>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {page === 1 ? <Biodata /> : page === 2 ? <Pertanyaan /> : 'null'}
              <div className='mt-10 flex w-full items-center justify-center'>
                <button
                  className='cs-bg-button rounded px-8 py-2 font-secondary text-white shadow'
                  onClick={() => IncrementPage()}
                >
                  Berikutnya
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Layout>
  );
}
