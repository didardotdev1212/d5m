import { create } from "zustand";

type FilmType = {
  id: string;
  name: string;
  description: string;
};

type Store = {
  films: FilmType[];
  AddFilm: (film: FilmType) => void;
  DeleteFilm: (id: string) => void;
};

const useStore = create<Store>((set) => ({
  films: [],
  AddFilm: (film) =>
    set((state) => ({
      films: [...state.films, film],
    })),
  DeleteFilm: (id) =>
    set((state) => ({
      films: state.films.filter((film) => film.id !== id),
    })),
}));

export default useStore;
