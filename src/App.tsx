import { useNowPlaying } from "./presentation/hooks/movies/useNowPlaying"


function App() {
  const { queryNowPlaying } = useNowPlaying()
  // console.log(queryNowPlaying.data[0]);
  return (
    <>
      <code>
        <pre>
          {!queryNowPlaying.isLoading && JSON.stringify(queryNowPlaying.data, null, 2)}
        </pre>
      </code>
    </>
  );
}

export default App
