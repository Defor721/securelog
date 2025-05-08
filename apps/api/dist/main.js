"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma/prisma.service");
const logging_middleware_1 = require("./logs/logging.middleware");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prisma = app.get(prisma_service_1.PrismaService);
    const logger = new logging_middleware_1.LoggingMiddleware(prisma);
    app.use(logger.use.bind(logger));
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map