import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Location } from "./types";

const locationsDir = path.join(process.cwd(), "content/locations");

export function getAllLocations(): Location[] {
  const files = fs.readdirSync(locationsDir).filter((f) => f.endsWith(".md"));

  const locations = files.map((filename) => {
    const raw = fs.readFileSync(path.join(locationsDir, filename), "utf-8");
    const { data, content } = matter(raw);
    return { ...data, content: content.trim() } as Location;
  });

  return locations.sort((a, b) => a.order - b.order);
}

export function getLocation(slug: string): Location | undefined {
  const filePath = path.join(locationsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { ...data, content: content.trim() } as Location;
}
