import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface IPianoProps {
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

const keyNoteMap: { [key: string]: string } = {
  a: "do",
  w: "do_s",
  s: "le",
  e: "le_s",
  d: "mi",
  f: "pa",
  t: "pa_s",
  g: "sol",
  y: "sol_s",
  h: "la",
  u: "la_s",
  j: "si",
  k: "do_h",
};

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

  const onClickNote = (event: React.MouseEvent<HTMLDivElement>) => {
    const audio = new Audio(
      `src/assets/piano/FX_piano_${event.currentTarget.id}.mp3`
    );
    audio.play();
  };

  const onPressNote = (id: string) => {
    setIsPress((prevState) => ({
      ...prevState,
      [id]: true,
    }));
    const audio = new Audio(`src/assets/piano/FX_piano_${id}.mp3`);
    audio.play();
  };

  const onUnPressNote = (id: string) => {
    setIsPress((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    const note = keyNoteMap[event.key.toLowerCase()];
    if (note) {
      onUnPressNote(note);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const note = keyNoteMap[event.key.toLowerCase()];
    if (note) {
      onPressNote(note);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="font-shadows h-lvh flex flex-col justify-around items-center">
      <h1 className="font-bold text-5xl">PIANO MAN</h1>
      <div className="h-72 bg-black rounded-3xl py-8 w-3/5 flex flex-row justify-center">
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
        <p>create by @ezurno</p>
        <FaGithub className="hover:text-slate-400 cursor-pointer duration-300" />
      </div>
    </div>
  );
}
