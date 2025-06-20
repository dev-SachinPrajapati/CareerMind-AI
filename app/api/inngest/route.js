import { serve } from "inngest/next";

import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/function";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});

// 🔧 Disable bodyParser so Inngest can handle the raw request body correctly
export const config = {
  api: {
    bodyParser: false,
  },
};