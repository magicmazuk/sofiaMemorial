export default function Footer({ footer }) {
  return (
    <footer className="siteFooter" aria-label="Footer">
      <div className="footerInner">
        <p className="footerNote">{footer?.note ?? "Made with love."}</p>
        {footer?.privacy ? <p className="footerPrivacy">{footer.privacy}</p> : null}
      </div>
    </footer>
  );
}