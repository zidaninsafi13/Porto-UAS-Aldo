import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption: string;
  title: string;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ isOpen, onClose, imageUrl, caption, title }) => {
  const safeImageUrl = imageUrl || "assets/aladona/activities-paper-texture.webp";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent srTitle={`Pratinjau visual — ${title}`} className="w-[92vw] max-w-[1000px] overflow-hidden rounded-lg border border-[#D8D1C6] bg-[#F7F3EC] p-0 shadow-2xl">
        <div className="relative flex flex-col">
          <div className="flex max-h-[75vh] items-center justify-center overflow-hidden bg-[#1C252C] p-2 sm:p-4">
            <img src={safeImageUrl} alt={title} loading="lazy" decoding="async" className="max-h-[70vh] w-auto max-w-full object-contain" />
          </div>
          <div className="border-t border-[#D8D1C6] bg-[#F7F3EC] p-5">
            <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-[#B55E3B]">Catatan visual · {title}</span>
            <p className="text-xs leading-relaxed text-[#6F746B] sm:text-sm">{caption}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
