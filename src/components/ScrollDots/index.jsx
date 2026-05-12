const sections = ["hero", "projects", "skills", "recommendations", "contact"];

const ScrollDots = () => {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="block w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-500 transition"
        />
      ))}
    </div>
  );
};
export default ScrollDots;
