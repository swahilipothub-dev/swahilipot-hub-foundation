import { FaCommentDots } from "react-icons/fa";

const FloatingSuggestionIcon = () => {
  return (
    <button
      type="button"
      aria-label="Suggestion box"
      title="Suggestion box (coming soon)"
      className="fixed bottom-6 right-6 z-[999] inline-flex cursor-default items-center gap-2 rounded-full bg-[#0097a7] px-4 py-3 text-white shadow-[0_12px_24px_rgba(0,151,167,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0097a7]/35"
    >
      <FaCommentDots className="h-5 w-5" />
      <span className="text-sm font-semibold leading-none">Suggestion Box</span>
    </button>
  );
};

export default FloatingSuggestionIcon;
