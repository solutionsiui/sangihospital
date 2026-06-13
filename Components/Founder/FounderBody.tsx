import { founderPage } from "./founderContent";

export default function FounderBody() {
  const { founder, pullQuote, paragraphs, closingNote } = founderPage;

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
          <p className="chairman-body__signature-name">{founder.name}</p>
          <p className="chairman-body__signature-title">
            {founder.title}, {founder.organization}
          </p>
        </div>
      </div>
    </section>
  );
}
