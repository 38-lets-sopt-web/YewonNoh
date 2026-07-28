const StatBox = ({ children }) => {
  return (
    <div className="bg-amber-100 rounded-xl p-8 flex flex-col justify-center items-center text-center flex-1">
      {children}
    </div>
  );
};

export default StatBox;
