// src/lib/episodeLinks.ts
export type EpisodeData = {
  spotify?: string;
  apple?: string;
  amazon?: string;
  audible?: string;
  youtube?: string;
};

export type LinkItem = {
  id: "spotify" | "apple" | "amazon" | "audible" | "youtube";
  label: string;
  href: string;
};

const DEFAULT_LINKS: LinkItem[] = [
  { id: "spotify", label: "Spotify", href: "https://t.co/u24wLdImfj" },
  { id: "apple", label: "Apple Podcasts", href: "https://tinyurl.com/FiveMinutesonApple" },
  { id: "amazon", label: "Amazon Music", href: "https://tinyurl.com/5MinutesInTheGarden" },
  { id: "audible", label: "Audible", href: "https://audible.com/pd/B0F2JBFZZ2" },
  { id: "youtube", label: "YouTube", href: "https://tinyurl.com/5-min-on-YouTube" },
];

export function getEpisodeLinks(ep: EpisodeData): LinkItem[] {
  // If an episode has a platform link, use it; otherwise fall back to defaults.
  return DEFAULT_LINKS.map((d) => ({
    ...d,
    href:
      (d.id === "spotify" && ep.spotify) ||
      (d.id === "apple" && ep.apple) ||
      (d.id === "amazon" && ep.amazon) ||
      (d.id === "audible" && ep.audible) ||
      (d.id === "youtube" && ep.youtube) ||
      d.href,
  }));
}

export function getPrimaryListenLink(
  ep: EpisodeData
): { href: string; label: string } | null {
  if (ep.spotify) return { href: ep.spotify, label: "Listen on Spotify" };
  if (ep.apple) return { href: ep.apple, label: "Listen on Apple Podcasts" };
  if (ep.amazon) return { href: ep.amazon, label: "Listen on Amazon Music" };
  if (ep.audible) return { href: ep.audible, label: "Listen on Audible" };
  if (ep.youtube) return { href: ep.youtube, label: "Watch on YouTube" };
  return null;
}