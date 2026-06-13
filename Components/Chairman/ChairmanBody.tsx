import { chairmanPage } from "./chairmanContent";

export default function ChairmanBody() {
  const { chairman, pullQuote, paragraphs, closingNote } = chairmanPage;

  return (
    <section className="chairman-body">
      <div className="chairman-body__inner">
        {/* Pull quote */}
        <blockquote className="chairman-body__quote">
          <p className="chairman-body__quote-text">{pullQuote}</p>
          <span className="chairman-body__quote-line" aria-hidden="true" />
        </blockquote>

        {/* Remaining paragraphs — two-column editorial */}
        <div className="chairman-body__text">
          {paragraphs.slice(2).map((para, index) => (
            <p key={index} className="chairman-body__paragraph">
              {para}
            </p>
          ))}
        </div>

        {/* Signature */}
        <div className="chairman-body__closing">
          <p className="chairman-body__closing-note">{closingNote}</p>
          <p className="chairman-body__signature-name">{chairman.name}</p>
          <p className="chairman-body__signature-title">
            {chairman.title}, {chairman.organization}
          </p>
        </div>
      </div>
    </section>
  );
}
