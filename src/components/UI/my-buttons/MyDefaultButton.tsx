type MyDefaultButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: string;
}

function MyDefaultButton({ children, className, type }: MyDefaultButtonProps) {
  return (
    <button
      className={'py-1 px-4 bg-red-500 rounded-lg duration-150 text-white hover:bg-red-600 ' + className}
      type={type ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}

export default MyDefaultButton;
