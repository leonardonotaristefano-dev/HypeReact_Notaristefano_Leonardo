import { useSearchParams } from "react-router";
import CardGame from "../../components/CardGame";
import RingLoader from "react-spinners/RingLoader";
import useFetchSolution from "../../hooks/useFetch";
import Pagination from "../../components/Pagination";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const game = searchParams.get("query");
  const page = parseInt(searchParams.get("page") || "1");

  const searchUrl = `https://api.rawg.io/api/games?key=719af48b5cd0447b8d070f5916055454&search=${game}&page=${page}`;
  const { data, loading, error } = useFetchSolution(searchUrl);

  const handlePageChange = (newPage) => {
    setSearchParams({ query: game, page: newPage });
  };

  return (
    <div className="mx-10 lg:px-60">
      <h1 className="text-3xl font-bold text-text my-10">
        Risultati per: {game}
      </h1>

      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <RingLoader color="#FBBF24" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {error && <article className="bg-error text-text p-3">{error}</article>}
        {data &&
          data.results.map((game) => <CardGame key={game.id} game={game} />)}
      </div>

      {/* Paginazione */}
      {data && (
        <Pagination
          currentPage={page}
          hasNext={!!data.next}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
