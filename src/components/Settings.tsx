import { IoIosClose, IoMdMusicalNote } from "react-icons/io";
import { IKeyNoteMapProps, useSettingStore } from "../utils/store";
import { useForm } from "react-hook-form";
import { MdMusicOff } from "react-icons/md";

export default function Settings() {
  const { keyNoteMap, setIsTab, updateKeyNote } = useSettingStore((state) => ({
    keyNoteMap: state.keyNoteMap,
    setIsTab: state.setIsTab,
    updateKeyNote: state.updateKeyNote,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: keyNoteMap,
  });

  const onValid = (data: IKeyNoteMapProps) => {
    console.log(data);
    updateKeyNote(data);
    setIsTab();
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="bg-black px-4 py-4 rounded-lg z-50">
        <div className="text-white flex flex-col justify-center items-end">
          <IoIosClose onClick={setIsTab} className="hover:cursor-pointer" />
        </div>
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-col gap-2 justify-center items-center"
        >
          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>DO</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("do", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.do && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* DO */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>DO#</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("do_s", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.do_s && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* DO# */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>LE</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("le", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.le && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* LE */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>LE#</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("le_s", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.le_s && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* LE# */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>MI</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("mi", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.mi && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* MI */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>PA</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("pa", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.pa && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* PA */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>PA#</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("pa_s", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.pa_s && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* PA# */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>SOL</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("sol", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.sol && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* SOL */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>SOL#</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("sol_s", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.sol_s && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* SOL# */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>LA</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("la", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.la && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* LA */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>LA#</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("la_s", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.la_s && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* LA# */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>SI</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("si", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.si && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* SI */}

          <div className="flex justify-between items-center relative text-white">
            <div className="w-1/4 flex flex-row justify-between items-center">
              <h2>DO^</h2>
              <IoMdMusicalNote />
            </div>
            <input
              className="w-1/3 bg-transparent border-b text-center focus:outline-none"
              {...register("do_h", {
                pattern: /^[a-zA-Z]+$/,
                required: "값을 입력하세요.",
              })}
              maxLength={1}
            />
            {errors?.do_h && (
              <div className="absolute text-red-500 right-1 top-1">
                <MdMusicOff />
              </div>
            )}
          </div>
          {/* DO^ */}

          <button className="bg-white w-full px-8 py-2 mt-4 rounded-lg font-bold hover:cursor-pointer">
            O K
          </button>
        </form>
      </div>
    </div>
  );
}
