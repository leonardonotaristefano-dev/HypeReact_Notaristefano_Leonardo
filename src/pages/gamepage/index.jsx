import { useParams } from "react-router";
import RingLoader from "react-spinners/RingLoader";
import useFetchSolution from "../../hooks/useFetch";
import ToggleFavorite from "../../components/ToggleFavorite";
import Chatbox from "../../components/Chatbox";
import { useContext } from "react";
import SessionContext from "../../context/SessionContext";

export default function GamePage() {
  const { session } = useContext(SessionContext);
  const user = session?.user;
  const { id } = useParams();
  const initialUrl = `https://api.rawg.io/api/games/${id}?key=719af48b5cd0447b8d070f5916055454`;
  const { data, loading, error } = useFetchSolution(initialUrl);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#FBBF24" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-error">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${data.background_image})`,
          }}
        >
          {/* Overlay sfumato*/}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-middle/80 to-primary backdrop-blur-sm"></div>

          {/* Contenuto centrale */}
          <div className="relative z-1 max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12">
            {/* Blocco info */}
            <div className=" text-text rounded-2xl p-8 relative">
              {/* Toggle preferiti */}
              {user && (
                <div className="absolute top-4 right-4">
                  <ToggleFavorite data={data} />
                </div>
              )}

              <div className="space-y-3">
                <p className="text-sm text-smooth italic">
                  Pubblicazione: {data.released}
                </p>
                <h1 className="md:text-4xl text-2xl font-bold">{data.name}</h1>
                <p className="text-accent text-sm font-semibold">
                  ⭐ Rating: {data.rating}
                </p>
                {data.rating_top_critic && (
                  <p className="text-sm">
                    🎯 Metacritic: {data.rating_top_critic}
                  </p>
                )}
                {data.metacritic && (
                  <p className="text-sm">🎯 Metacritic: {data.metacritic}</p>
                )}
                <p className="text-sm">
                  🎮 Piattaforme:{" "}
                  {data.platforms.map((p) => p.platform.name).join(", ")}
                </p>
                <p className="text-sm">
                  👨‍💻 Sviluppatori:{" "}
                  {data.developers.map((d) => d.name).join(", ")}
                </p>
                <p className="text-sm">
                  🏷️ Generi: {data.genres.map((g) => g.name).join(", ")}
                </p>

                <div>
                  <p className="text-lg font-semibold mt-4 mb-1">About:</p>
                  <p className="text-smooth leading-relaxed text-sm">
                    {data.description_raw}
                  </p>
                </div>
              </div>
            </div>

            {/* Chatbox */}
            <div className="bg-primary/50 text-text rounded-2xl m-6">
              <Chatbox data={data} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
