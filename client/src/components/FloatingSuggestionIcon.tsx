import { FaCommentDots } from "react-icons/fa";

const FloatingSuggestionIcon = () => {
  const handleOpenChat = () => {
    if (typeof window === "undefined") return;

    const openChatWidget = (window as Window & { openLiveChatWidget?: () => void }).openLiveChatWidget;
    if (typeof openChatWidget === "function") {
      openChatWidget();
      return;
    }

    window.open(
      "https://swahilipot.jengasol.co.ke/im_livechat/loader/1",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <button
      type="button"
      aria-label="Open live chat"
      title="Live chat"
      onClick={handleOpenChat}
      className="fixed bottom-6 right-6 z-[999] inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#0f4ccc] px-4 py-3 text-white shadow-[0_12px_24px_rgba(15,76,204,0.35)] transition hover:bg-[#0d3ebd] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0f4ccc]/35"
    >
      <FaCommentDots className="h-5 w-5" />
      <span className="text-sm font-semibold leading-none">Live Chat</span>
    </button>
  );
};

export default FloatingSuggestionIcon;
