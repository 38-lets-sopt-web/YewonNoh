const Button = ({ children, onClick, variant = 'default', active = false }) => {
  const base = 'px-3 py-1 rounded-full text-sm transition font-medium';

  const variants = {
    default: 'bg-white text-stone-700',

    tabActive: 'bg-amber-800 text-white',

    tabInactive: 'bg-amber-100 text-amber-800 border border-amber-800',

    primary: active ? 'bg-amber-400 text-white' : 'bg-amber-200 text-white/80',

    secondary: active
      ? 'bg-stone-400 text-white'
      : 'bg-stone-200 text-white/80',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
