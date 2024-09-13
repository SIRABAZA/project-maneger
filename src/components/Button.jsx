export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-stone-700 text-stone-400 rounded-md hover:bg-stone-600 hover:text-stone-100 md:text-base"
      {...props}
    >
      {children}
    </button>
  );
}
