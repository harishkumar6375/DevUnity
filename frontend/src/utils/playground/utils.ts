export const handleCopy = async () => {
  window.location.pathname;
  const pathname = window.location.pathname;
  const id = pathname.split("/")[2];
  try {
    await navigator.clipboard.writeText(id);
    alert("text copied to clipboard!");
    // return "Text copied to clipboard!";
  } catch (err) {
    alert("Failed to copy text.");
    return "Failed to copy text.";
  }
};
export const runCode = () => {
  // TODO: complete this later
  alert("code is running...");
};