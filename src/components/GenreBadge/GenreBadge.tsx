import "./GenreBadge.css";
import { FC } from "react";

type GenreBadgeProps = {
    genre: string;
}

const GenreBadge : FC<GenreBadgeProps> = ({genre}) => {
    return (
        <div className="genre-badge">{genre}</div>
    );
};

export default GenreBadge;
