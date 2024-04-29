# Logistics Express AP

### Prerequisites

Ensure you have `pnpm` installed on your machine. Install dependecies with `pnpm install`

## Generating Types, Routers, and Prisma Models

To generate the necessary types, routers, and Prisma models, use the following command:

`pnpm run zs:generate`

This must be done any time a `.zmodel` file is updated

To add a new model, create an `<entity>.model.zmodel` anywhere in the src directory
All models must be registed in `schema.zmodel`, simply by importing it

Models should extend the base model Base, found in `src/abstract/base.model.zmodel`

In order for a model to have soft delete behaviour, it must be registered by name in `src/database/client/extensions/soft-delete.ts`
