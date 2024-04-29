import { Prisma } from "@prisma/client";
import {
  createSoftDeleteExtension,
  ModelConfig,
} from "prisma-extension-soft-delete";

const softDeleteModels: Prisma.ModelName[] = [
  "Admin",
  "Driver",
  "User",
  "HaulingCompany",
];

export const softDeleteExtension = createSoftDeleteExtension({
  models: softDeleteModels.reduce<Record<Prisma.ModelName, ModelConfig>>(
    (acc, model) => {
      acc[model] = {
        allowToOneUpdates: true,
        field: "deletedAt",
        createValue: (deleted) => {
          if (deleted) return new Date();
          return null;
        },
      };
      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/prefer-reduce-type-parameter -- compliler complains about this despite it being correct
    {} as Record<Prisma.ModelName, ModelConfig>,
  ),
  defaultConfig: {
    allowToOneUpdates: true,
    field: "deletedAt",
    createValue: (deleted) => {
      if (deleted) return new Date();
      return null;
    },
  },
});
