import clsx from 'clsx';
import { useState } from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';

import TextArea from '@/components/input/TextAreaComp';

export default function Pertanyaan() {
  const [skala, setSkala] = useState('1');
  const skalaSpan: JSX.Element[] = [];
  for (let i = 1; i <= 10; i++) {
    skalaSpan.push(
      <span
        className={clsx(
          'mt-4 flex h-3 w-3 scale-125 items-center justify-center  rounded-full sm:h-[18px] sm:w-[18px] md:h-6 md:w-6 lg:scale-[1.35]',
          skala == i.toString()
            ? 'bg-sky-300 text-white'
            : 'bg-gray-200 text-black'
        )}
      >
        <p className='text-sm'>{i}</p>
      </span>
    );
  }
  return (
    <>
      <div className='mt-8'>
        <h2 className='text-2xl font-bold '>Pertanyaan :</h2>
      </div>
      <TextArea
        id='pemahaman_ilits'
        label='Apa yang kamu ketahui tentang Ini Lho ITS! ?'
        validate={{ require: true }}
        placeholder='Masukan jawabanmu'
      />
      <TextArea
        id='semangat_perguruan_tinggi'
        label='Bagaimana pandangan kamu mengenai semangat perguruan tinggi'
        validate={{ require: true }}
        placeholder='Masukan jawabanmu'
      />
      <TextArea
        id='motivasi'
        label='Apa motivasi kamu mendaftarkan kepantiaan Ini Lho ITS! ?'
        validate={{ require: true }}
        placeholder='Masukan jawabanmu'
      />
      <div className='my-4'>
        <h2 className='text-2xl font-bold '>Komitmen :</h2>
        <div className='my-4 flex w-full items-center justify-center gap-x-4 rounded-lg bg-[#F3A3A6] p-3 sm:p-4 md:p-5 lg:my-5 lg:p-6'>
          <RiErrorWarningLine size={40} />
          <p className='text-base font-bold'>
            Kegiatan Ini Lho ITS! akan sibuk dan memotong waktu libur kuliah
          </p>
        </div>
      </div>
      <TextArea
        id='kesibukan'
        label='Kesibukan Selama 7-8 Bulan Kedepan'
        validate={{ require: true }}
        placeholder='Masukan jawabanmu'
      />

      <div className='relative w-full'>
        <label className='block pb-4 text-[9px] font-bold text-gray-900 sm:py-2 sm:text-base md:py-5 md:text-lg'>
          Skala Prioritas (1-10)
        </label>
        <input
          className='relative h-1 w-full cursor-pointer rounded-md'
          type='range'
          min='1'
          max='10'
          defaultValue={1}
          onChange={(e) => setSkala(e.target.value)}
        ></input>
        <div className='flex justify-between py-2 font-secondary text-[9px] sm:text-[13px] md:py-3 md:text-lg lg:py-5 '>
          {skalaSpan.map((Dat: JSX.Element, index: number) => {
            return <div key={index}>{Dat}</div>;
          })}
        </div>
      </div>
    </>
  );
}
