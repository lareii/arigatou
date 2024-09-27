export default function Input({
  className,
  maxLength
}: Readonly<{ className?: string; maxLength?: number }>) {
  return (
    <input
      type='text'
      maxLength={maxLength}
      className={`border border-[#BBBBBB] outline-none focus:border-blue-400 ${className}`}
    />
  );
}
