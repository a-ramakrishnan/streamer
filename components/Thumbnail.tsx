import Image from "next/image";
import { DocumentData } from "firebase/firestore";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  movie: Movie | DocumentData;
}

function Thumbnail({ movie }: Props) {
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  const [showModal, setShowModal] = useRecoilState(modalState);

  return (
    <div className="flex flex-col ">
      <div
        className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
        onClick={() => {
          setCurrentMovie(movie);
          setShowModal(true);
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          objectFit="cover"
          alt="Movie Banner"
        />
      </div>
      <h1 className="text-xs font-semibold md:text-sm lg:text-xl truncate whitespace-nowrap overflow-hidden">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
    </div>
  );
}

export default Thumbnail;
