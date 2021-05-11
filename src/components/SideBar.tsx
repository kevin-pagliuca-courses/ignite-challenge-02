import { Button } from "./Button";

import "../styles/sidebar.scss";
interface Genre {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface GenreProps {
  genres: Genre[];
  selected: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, selected, handleClickButton }: GenreProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
