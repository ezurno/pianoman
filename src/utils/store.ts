// store.js
import { create } from "zustand";

interface ISettingProps {
  isTab: boolean;
  keyNoteMap: IKeyNoteMapProps;
  setIsTab: () => void;
  updateKeyNote: (newKeyNoteMap: IKeyNoteMapProps) => void;
}

export interface IKeyNoteMapProps {
  [key: string]: string;
}

interface IInfoProps {
  isInfoTab: boolean;
  setIsInfoTab: () => void;
}

export const useSettingStore = create<ISettingProps>((set) => ({
  isTab: false,
  keyNoteMap: {
    do: "a",
    do_s: "w",
    le: "s",
    le_s: "e",
    mi: "d",
    pa: "f",
    pa_s: "t",
    sol: "g",
    sol_s: "y",
    la: "h",
    la_s: "u",
    si: "j",
    do_h: "k",
  },
  setIsTab: () => {
    set((state) => ({ isTab: !state.isTab }));
  },
  updateKeyNote: (newKeyNoteMap: IKeyNoteMapProps) =>
    set((_) => ({
      keyNoteMap: newKeyNoteMap,
    })),
}));

export const useInfoStore = create<IInfoProps>((set) => ({
  isInfoTab: false,
  setIsInfoTab: () => {
    set((state) => ({ isInfoTab: !state.isInfoTab }));
  },
}));

interface IVolumeProps {
  isVolume: number;
  setIsVolume: (volume: number) => void;
}

export const useVolumeStore = create<IVolumeProps>((set) => ({
  isVolume: 70,
  setIsVolume: (volume) => {
    set((_) => ({ isVolume: volume }));
  },
}));

interface IRecordProps {
  isList: string[];
  setIsList: (value: string) => void;
}

export const useRecordStore = create<IRecordProps>((set) => ({
  isList: [],
  setIsList: (value: string) => {
    set((state) => {
      let updatedList = [...state.isList, value];
      if (8 < updatedList.length) {
        // 최대 10개 항목만 유지
        updatedList = updatedList.slice(-8);
      }
      return { isList: updatedList };
    });
  },
}));
