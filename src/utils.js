// Parse markdown-like links in the description
export const parseMarkdownLinksFromString = (txt) => {
  if (!txt) {
    console.error("Input is undefined or null");
    return "";
  }

  if (typeof txt !== "string") {
    console.error("Input is not a string");
    return "";
  }

  return txt.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, // Match [text](url)
    '<a href="$2" target="_blank" class="underline">$1</a>'
  );
};
