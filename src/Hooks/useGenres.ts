import useData from "./useData";


export interface Genre{
    id: number;
    name: string;
}
// interface Props{
//     count: number;
//     results: Genre[]
// }
const useGenres = () => useData<Genre>('/genres');
    //     const [genre, setGenre] = useState<Genre[]>([]);
    //     const [error, setError] = useState("");
    //     const [isLoading, setLoading] = useState(false);
    
    //     useEffect(() => {
    //         const controller = new AbortController();
    //         setLoading(true);
    //     apiClient
    //         .get<Props>("/genres", {signal: controller.signal})
    //         .then((res) => {
    //             setGenre(res.data.results)
    //             setLoading(false)})
    //         .catch((err) => {
    //             if(err instanceof CanceledError)
    //             setError(err.message)
    //             setLoading(false)});



    //     return () => controller.abort();
    // },[]);

    // return {genre, error, isLoading};}


export default useGenres;   