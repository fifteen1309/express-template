import Queue from "bull";
import { REDIS_PORT, REDIS_HOST } from "./config/constant.js";

const primaryQueue = new Queue("primary queue", {
  redis: {
    port: REDIS_PORT,
    host: REDIS_HOST,
  },
});

primaryQueue.process((job) => {
  console.log(job.data?.message);
});

primaryQueue.add({ message: "hello" }, { repeat: { cron: "* * * * * *" } });
