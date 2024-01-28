import { FaVolumeDown, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useVolumeStore } from "../utils/store";

export default function Volume() {
  const { isVolume, setIsVolume } = useVolumeStore((state) => ({
    isVolume: state.isVolume,
    setIsVolume: state.setIsVolume,
  }));
  const onVolumeChange = (event: any) => {
    const newVolume = event.target.value;
    setIsVolume(newVolume);
  };

  const onMutToggle = () => {
    setIsVolume(0);
  };

  return (
    <div className="flex flex-row justify-between items-center w-32 absolute -bottom-9 left-4">
      {50 <= isVolume ? (
        <FaVolumeUp onClick={onMutToggle} className="hover:cursor-pointer" />
      ) : isVolume !== 0 && isVolume < 50 ? (
        <FaVolumeDown onClick={onMutToggle} className="hover:cursor-pointer" />
      ) : (
        isVolume === 0 && <FaVolumeMute onClick={onMutToggle} />
      )}
      <input
        type="range"
        min="0"
        max="100"
        onChange={onVolumeChange}
        className="h-1 w-3/4 bg-black text-black accent-black cursor-pointer focus:outline-none"
        value={isVolume}
      />
    </div>
  );
}
