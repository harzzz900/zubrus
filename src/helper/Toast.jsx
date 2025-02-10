import { toast } from "sonner";

export const commonToast = (message, type = "success") => {
  const toastOptions = {
    className: "rounded-full text-white bg-[#3CCD7C]",
    // bodyClassName: "text-sm font-semibold",
  };
  if (type === "success") {
    toast.success(message, {
      ...toastOptions,
      className: "rounded-full !bg-[#3CCD7C] !text-white",
    });
  } else if (type === "error") {
    toast.error(message, {
      ...toastOptions,
      className: "rounded-full !bg-[#FF5A5A] !text-white",
    });
  }
};
