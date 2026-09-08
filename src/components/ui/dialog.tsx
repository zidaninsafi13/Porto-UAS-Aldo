import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "@/components/ui/icons"
import { cn } from "@/lib/utils"


const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "dialog-overlay fixed inset-0 z-50 bg-[#07171D]/85 backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

type DialogContentProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  /** Render the built-in top-right close button (default: true). */
  showClose?: boolean;
  /** Accessible title for screen readers (renders visually hidden). */
  srTitle?: string;
};

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps
>(({ className, children, showClose = true, srTitle, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "dialog-content fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border border-[rgba(219,238,241,0.16)] bg-[#07171D] p-6 shadow-2xl",
        className
      )}
      {...props}
    >
      {srTitle ? (
        <DialogPrimitive.Title className="sr-only">
          {srTitle}
        </DialogPrimitive.Title>
      ) : null}
      {children}
      {showClose ? (
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#36BBD3] disabled:pointer-events-none text-[#EEF4F2]">
          <X className="h-5 w-5" />
          <span className="sr-only">Tutup</span>
        </DialogPrimitive.Close>
      ) : null}
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-[#EEF4F2]",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[#83969D]", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
}
