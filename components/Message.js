export default function Message({ message, error = false }) {
  const boxClassName = error ? 'box error' : 'box';
  const titleClassName = message.comment && message.comment.length ? 'title has-comment' : 'title';

  return (
    <div className={boxClassName}>
      <h2
        className={titleClassName}
        dangerouslySetInnerHTML={{ __html: message.header }}
      />
      { message.comment && <p className="comment" dangerouslySetInnerHTML={{ __html: message.comment }} /> }
    </div>
  )
}
