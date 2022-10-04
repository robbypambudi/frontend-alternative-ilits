import toast from 'react-hot-toast';
import useSWR from 'swr';

import InputComponts from '@/components/input/InputComp';
import SelectInput, {
  SelectInputDept,
  SelectInputFak,
} from '@/components/input/SelectComp';

export default function Biodata() {
  const { data: Fakultas, error: errorFakultas } = useSWR('/its/fakultas');
  const { data: departemen, error: errorDepartemen } =
    useSWR('/its/departemen');

  if (errorFakultas || errorDepartemen) {
    return toast.error('Terjadi Kesalahan Mendapatkan Data');
  }
  return (
    <>
      <InputComponts
        id='namaLengkap'
        label='Nama Lengkap'
        validate={{ require: true }}
        placeholder='Masukan nama lengkap anda'
      />
      <InputComponts
        id='namaPanggilan'
        label='Nama Pangilan'
        validate={{ require: true }}
        placeholder='Masukan nama pangilan anda'
      />
      <InputComponts
        id='nrp'
        label='NRP'
        validate={{}}
        placeholder='Masukan NRP anda'
      />
      <SelectInput
        data={[
          {
            id: '2021',
            nama: '2021',
          },
          {
            id: '2022',
            nama: '2022',
          },
        ]}
        id='angkatan'
        label='Angkatan'
        validate={{
          require: true,
        }}
      />
      <SelectInputDept
        data={departemen}
        id='departemen'
        label='Departemen'
        validate={{
          require: true,
        }}
      />
      <SelectInputFak
        data={Fakultas}
        id='fakultas'
        label='Fakultas'
        validate={{
          require: true,
        }}
      />
    </>
  );
}
