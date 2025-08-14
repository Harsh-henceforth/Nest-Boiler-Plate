// libs
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@/utils/constants/routes.constant";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.HOME);
  }, [router]);

  return null;
}
