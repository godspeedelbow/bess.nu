export default function getPreview(article) {
  const { paragraphs } = article;
  const [paragraph] = paragraphs;
  const teaser = paragraph.substring(0, 200);

  return teaser;
}
