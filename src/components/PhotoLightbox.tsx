import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption: string;
  title: string;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  caption,
  title
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        srTitle={`Dokumentasi foto — ${title}`}
        className="max-w-[1000px] w-[92vw] p-0 bg-[#07171D] border border-[rgba(219,238,241,0.2)] rounded-lg overflow-hidden shadow-2xl"
      >
        <div className="relative flex flex-col">
          <div className="bg-[#050E12] flex items-center justify-center p-2 sm:p-4 max-h-[75vh] overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded"
            />
          </div>
          <div className="p-5 bg-[#10232B] border-t border-[rgba(219,238,241,0.12)]">
            <span className="text-[10px] font-mono tracking-widest text-[#36BBD3] uppercase block mb-1">
              DOKUMENTASI OTENTIK · {title}
            </span>
            <p className="text-xs sm:text-sm text-[#EEF4F2] leading-relaxed">
              {caption}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
