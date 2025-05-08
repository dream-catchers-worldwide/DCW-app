export default function SquarePics({
  src,
  alt,
  caption,
  url,
  moreUrl,
  moreText,
}) {
  return (
    <div className="text-center">
      <img src={src} alt={alt} className="w-60 h-60 object-cover rounded-2xl" />
      <div className="mt-8 text-md text-gray-700 font-[Convergence] flex flex-col gap-2">
        {url ? (
          <a
            href={url}
            className=" hover:scale-110 transform transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {caption}
          </a>
        ) : (
          <p>{caption}</p>
        )}
        {moreUrl && moreText && (
          <a
            href={moreUrl}
            className=" text-[#ac7ba5] hover:scale-110 transform transition-all text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {moreText}
          </a>
        )}
      </div>
    </div>
  )
}
