"use client";

import { useState, useEffect } from "react";

export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 컴포넌트가 클라이언트에서만 렌더링되도록 설정
    setIsClient(true);
  }, []);

  return {
    isClient,
  };
}
