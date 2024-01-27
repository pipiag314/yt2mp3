const SearchedMusic = ({ data }) => {
  return (
    <div className="flex flex-col items-center mt-5 pb-5">
      <div>
        <iframe
          width="300"
          height="200"
          src={`https://www.youtube.com/embed/${data?.id}`}></iframe>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center text-white">
        <h1>{data?.data?.title}</h1>
        <a className="downloadBtn w-100" href={data?.data?.link} target="_blank">
          Download
        </a>
      </div>
    </div>
  );
};
export default SearchedMusic;
