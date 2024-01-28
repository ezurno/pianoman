import { useRecordStore } from "../utils/store";

export default function Record() {
  const { isList } = useRecordStore((state) => ({
    isList: state.isList,
    setIsList: state.setIsList,
  }));

  return (
    <div className="w-full h-16 flex flex-row  justify-center bg-black text-white overflow-hidden">
      <div className="font-bold text-lg sm:w-1/2 w-full flex flex-row justify-center items-center gap-8 overflow-hidden">
        {isList.map((value, index) => (
          <p key={index}>
            {value.replace("_s", "#").replace("_h", "^").toUpperCase()}
          </p>
        ))}
      </div>
    </div>
  );
}
