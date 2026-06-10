export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

export function extractToc(content: string): TocItem[] {
  const lines = content.split("\n");
  const items: TocItem[] = [];

  for (const line of lines) {
    const h2 = line.match(/^## (.+)$/);
    const h3 = line.match(/^### (.+)$/);
    const match = h2 ?? h3;
    if (!match) continue;

    const text = match[1].replace(/\*\*/g, "").replace(/`/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    items.push({ id, text, level: h2 ? 2 : 3 });
  }

  return items;
}
