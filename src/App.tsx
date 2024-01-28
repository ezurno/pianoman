import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosSettings, IoMdInformationCircle } from "react-icons/io";
import {
  useInfoStore,
  useRecordStore,
  useSettingStore,
  useVolumeStore,
} from "./utils/store";
import Settings from "./components/Settings";
import Info from "./components/Info";
import { findValue } from "./utils/findValue";
import Volume from "./components/Volume";
import Record from "./components/Record";

export interface IPianoProps {
  do: boolean;
  do_s: boolean;
  le: boolean;
  le_s: boolean;
  mi: boolean;
  pa: boolean;
  pa_s: boolean;
  sol: boolean;
  sol_s: boolean;
  la: boolean;
  la_s: boolean;
  si: boolean;
  do_h: boolean;
}

export default function App() {
  const [isPress, setIsPress] = useState<IPianoProps>({
    do: false,
    do_s: false,
    le: false,
    le_s: false,
    mi: false,
    pa: false,
    pa_s: false,
    sol: false,
    sol_s: false,
    la: false,
    la_s: false,
    si: false,
    do_h: false,
  });
  const { keyNoteMap, isTab, setIsTab } = useSettingStore((state) => ({
    keyNoteMap: state.keyNoteMap,
    isTab: state.isTab,
    setIsTab: state.setIsTab,
    updateKeyNote: state.updateKeyNote,
  }));

  const { isInfoTab, setIsInfoTab } = useInfoStore((state) => ({
    isInfoTab: state.isInfoTab,
    setIsInfoTab: state.setIsInfoTab,
  }));

  const { isVolume } = useVolumeStore((state) => ({
    isVolume: state.isVolume,
  }));

  const { isList, setIsList } = useRecordStore((state) => ({
    isList: state.isList,
    setIsList: state.setIsList,
  }));

  const onClickNote = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio =
      import.meta.env.MODE === "production"
        ? new Audio(`/pianoman/piano/FX_piano_${event.currentTarget.id}.mp3`)
        : new Audio(`public/piano/FX_piano_${event.currentTarget.id}.mp3`);
    audio.volume = isVolume / 100;
    audio.play();
  };

  const onPressNote = (id: string) => {
    setIsPress((prevState) => ({
      ...prevState,
      [id]: true,
    }));
    const audio =
      import.meta.env.MODE === "production"
        ? new Audio(`/pianoman/piano/FX_piano_${id}.mp3`)
        : new Audio(`public/piano/FX_piano_${id}.mp3`);
    audio.volume = isVolume / 100;
    audio.play();
  };

  const onUnPressNote = (id: string) => {
    setIsPress((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const note = findValue(keyNoteMap, event.key.toLowerCase());
    if (note) {
      onUnPressNote(note);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const note = findValue(keyNoteMap, event.key.toLowerCase());
    if (note) {
      onPressNote(note);
      setIsList(note);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isTab, isVolume]);

  return (
    <div className="font-shadows h-lvh flex flex-col justify-around items-center z-10 relative min-h-[36rem]">
      {isTab && <Settings />}
      {isInfoTab && <Info />}

      <h1 className="font-bold text-5xl">PIANO MAN</h1>
      <img src="/pianoman/image-pianoman.png" className="h-16" />
      <Record />

      <div className="h-72 bg-black rounded-3xl py-8 sm:w-3/5 w-full flex flex-row justify-center relative">
        <Volume />

        <div className="absolute flex flex-row gap-4 -bottom-10 right-8 text-2xl">
          <IoMdInformationCircle
            onClick={setIsInfoTab}
            className="hover:cursor-pointer"
          />
          <IoIosSettings
            onClick={setIsTab}
            className="hover:cursor-pointer hover:animate-spin"
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="do"
            onClick={onClickNote}
            className={`${
              isPress?.do ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
          <div
            id="do_s"
            onClick={onClickNote}
            className={`${
              isPress?.do_s && "bg-slate-800"
            } absolute top-0 h-1/2 bg-black border-black border-2 w-2/3 -right-1/3 z-30 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="le"
            onClick={onClickNote}
            className={`${
              isPress?.le ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
          <div
            id="le_s"
            onClick={onClickNote}
            className={`${
              isPress?.le_s && "bg-slate-800"
            } absolute top-0 h-1/2 bg-black border-black border-2 w-2/3 -right-1/3 z-30 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="mi"
            onClick={onClickNote}
            className={`${
              isPress?.mi ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="pa"
            onClick={onClickNote}
            className={`${
              isPress?.pa ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
          <div
            id="pa_s"
            onClick={onClickNote}
            className={`${
              isPress?.pa_s && "bg-slate-800"
            } absolute top-0 h-1/2 bg-black border-black border-2 w-2/3 -right-1/3 z-30 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="sol"
            onClick={onClickNote}
            className={`${
              isPress?.sol ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
          <div
            id="sol_s"
            onClick={onClickNote}
            className={`${
              isPress?.sol_s && "bg-slate-800"
            } absolute top-0 h-1/2 bg-black border-black border-2 w-2/3 -right-1/3 z-30 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="la"
            onClick={onClickNote}
            className={`${
              isPress?.la ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
          <div
            id="la_s"
            onClick={onClickNote}
            className={`${
              isPress?.la_s && "bg-slate-800"
            } absolute top-0 h-1/2 bg-black border-black border-2 w-2/3 -right-1/3 z-30 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="si"
            onClick={onClickNote}
            className={`${
              isPress?.si ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
        </div>
        <div className="relative w-1/12 h-full">
          <div
            id="do_h"
            onClick={onClickNote}
            className={`${
              isPress?.do_h ? "bg-slate-300" : "bg-slate-50"
            } h-full border-black border-2 rounded-b-xl`}
          />
        </div>
      </div>
      <div className="text-slate-700 flex flex-col justify-center items-center gap-4">
        <p>2024 create by @ezurno v1.1.0</p>
        <a href="https://github.com/ezurno/pianoman">
          <FaGithub className="hover:text-slate-400 cursor-pointer duration-300" />
        </a>
      </div>
    </div>
  );
}
