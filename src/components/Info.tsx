import { IoIosClose } from "react-icons/io";
import { useInfoStore } from "../utils/store";

export default function Info() {
  const { setIsInfoTab } = useInfoStore((state) => ({
    isInfoTab: state.isInfoTab,
    setIsInfoTab: state.setIsInfoTab,
  }));
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="bg-black px-4 py-4 rounded-lg z-50">
        <div className="text-white flex flex-col justify-center items-end">
          <IoIosClose onClick={setIsInfoTab} className="hover:cursor-pointer" />
        </div>
        <div className="text-white flex flex-col gap-2">
          <h2>HOW TO USE ?</h2>
          <div className="p-4">
            <p>1. setting your piano note.</p>
            <p>2. and touch & press keyboard.</p>
            <p>3. profit !!!</p>
          </div>
          <div>
            <h2>WHY CREATE THIS ?</h2>
            <div className="p-4">
              <p>I wanted to learn piano.</p>
              <p>However</p>
              <p>it was burdensome to buy a piano</p>
              <p>and there was no space to place it.</p>
              <p>=P</p>
            </div>
          </div>

          <div className="text-right px-4">
            <h2>Create by @ezurno</h2>
            <div>
              <p>v1.1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
