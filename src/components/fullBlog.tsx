interface blogProps {
  title: String,
  DOP: String,
  content: String
}

export default function FullBlog({title, DOP, content}: blogProps) {
  return (
    <div>
      <h1 className='text-xl text-yellow-600'>{title}</h1>
        <p>{DOP}</p>
        <p>{content}</p>
    </div>
  );
}