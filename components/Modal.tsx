import Image from 'next/image';
import Input from '@/components/Input';

export default function Modal({
  isHidden,
  setIsHidden
}: Readonly<{
  isHidden: boolean;
  setIsHidden: (value: boolean) => void;
}>) {
  if (isHidden) return null;

  return (
    <>
      <div className='z-10 absolute top-0 h-full w-full flex items-center justify-center'>
        <div className='font-serif text-zinc-900 bg-[#F0F0F0] flex'>
          <Image src='/anime_girl.png' alt='image' width={175} height={300} />
          <div className='grow flex flex-col justify-between p-5'>
            <div className='text-2xl leading-6'>
              Kredi kartı bilgilerini
              <br />
              g-görmeme izin v-verir misin?
            </div>
            <div className='flex flex-col gap-3'>
              <div>
                <div>kredi kartındaki numarayı yazar mısın :3</div>
                <Input maxLength={16} className='w-60' />
              </div>
              <div>
                <div>Süresi ne zaman bitiyor owo</div>
                <Input maxLength={4} className='w-16 mr-1' />
                <span className='text-xs'>MM / YY</span>
              </div>
              <div>
                <div className='leading-5 mb-1 mt-3'>
                  arkadaki numaralar... ne
                  <br />
                  yazıyo ? okuyamıyorum :&#40;
                </div>
                <Input maxLength={3} className='w-16' />
              </div>
            </div>
            <button
              onClick={() => setIsHidden(true)}
              className='bg-[#E1E1E1] border border border-[#BBBBBB] py-3 text-xl hover:border-blue-400'
            >
              arigatou senpai!
            </button>
          </div>
        </div>
      </div>
      <audio src='/audio.mp3' autoPlay loop className='hidden'></audio>
    </>
  );
}
