import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name','email','username','activeTenantId']);

export const TenantScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','name']);

export const AdminScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','userId','tenantId']);

export const DriverScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','userId','tenantId']);

export const TenantUserRelationScalarFieldEnumSchema = z.enum(['id','createdAt','updatedAt','deletedAt','tenantId','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

/**
 * @@allow('all', auth() == this)
 * @@allow('all', activeTenantId == auth().activeTenantId)
 */
export const UserSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  /**
   * @omit
   */
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  activeTenantId: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// TENANT SCHEMA
/////////////////////////////////////////

export const TenantSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  /**
   * @omit
   */
  deletedAt: z.coerce.date().nullable(),
  name: z.string(),
})

export type Tenant = z.infer<typeof TenantSchema>

/////////////////////////////////////////
// ADMIN SCHEMA
/////////////////////////////////////////

/**
 * @@allow('all', tenantId == auth().activeTenantId)
 */
export const AdminSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  /**
   * @omit
   */
  deletedAt: z.coerce.date().nullable(),
  userId: z.string(),
  tenantId: z.string(),
})

export type Admin = z.infer<typeof AdminSchema>

/////////////////////////////////////////
// DRIVER SCHEMA
/////////////////////////////////////////

/**
 * @@allow('all', tenantId == auth().activeTenantId)
 */
export const DriverSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  /**
   * @omit
   */
  deletedAt: z.coerce.date().nullable(),
  userId: z.string(),
  tenantId: z.string(),
})

export type Driver = z.infer<typeof DriverSchema>

/////////////////////////////////////////
// TENANT USER RELATION SCHEMA
/////////////////////////////////////////

export const TenantUserRelationSchema = z.object({
  id: z.string().uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  /**
   * @omit
   */
  deletedAt: z.coerce.date().nullable(),
  tenantId: z.string(),
  userId: z.string(),
})

export type TenantUserRelation = z.infer<typeof TenantUserRelationSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  driver: z.union([z.boolean(),z.lazy(() => DriverArgsSchema)]).optional(),
  admin: z.union([z.boolean(),z.lazy(() => AdminArgsSchema)]).optional(),
  activeTenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
  tenantConnections: z.union([z.boolean(),z.lazy(() => TenantUserRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  tenantConnections: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  username: z.boolean().optional(),
  activeTenantId: z.boolean().optional(),
  driver: z.union([z.boolean(),z.lazy(() => DriverArgsSchema)]).optional(),
  admin: z.union([z.boolean(),z.lazy(() => AdminArgsSchema)]).optional(),
  activeTenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
  tenantConnections: z.union([z.boolean(),z.lazy(() => TenantUserRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TENANT
//------------------------------------------------------

export const TenantIncludeSchema: z.ZodType<Prisma.TenantInclude> = z.object({
  activeUsers: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  adminProfiles: z.union([z.boolean(),z.lazy(() => AdminFindManyArgsSchema)]).optional(),
  driverProfiles: z.union([z.boolean(),z.lazy(() => DriverFindManyArgsSchema)]).optional(),
  userConnections: z.union([z.boolean(),z.lazy(() => TenantUserRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TenantCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TenantArgsSchema: z.ZodType<Prisma.TenantDefaultArgs> = z.object({
  select: z.lazy(() => TenantSelectSchema).optional(),
  include: z.lazy(() => TenantIncludeSchema).optional(),
}).strict();

export const TenantCountOutputTypeArgsSchema: z.ZodType<Prisma.TenantCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TenantCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TenantCountOutputTypeSelectSchema: z.ZodType<Prisma.TenantCountOutputTypeSelect> = z.object({
  activeUsers: z.boolean().optional(),
  adminProfiles: z.boolean().optional(),
  driverProfiles: z.boolean().optional(),
  userConnections: z.boolean().optional(),
}).strict();

export const TenantSelectSchema: z.ZodType<Prisma.TenantSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  name: z.boolean().optional(),
  activeUsers: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  adminProfiles: z.union([z.boolean(),z.lazy(() => AdminFindManyArgsSchema)]).optional(),
  driverProfiles: z.union([z.boolean(),z.lazy(() => DriverFindManyArgsSchema)]).optional(),
  userConnections: z.union([z.boolean(),z.lazy(() => TenantUserRelationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TenantCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ADMIN
//------------------------------------------------------

export const AdminIncludeSchema: z.ZodType<Prisma.AdminInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
}).strict()

export const AdminArgsSchema: z.ZodType<Prisma.AdminDefaultArgs> = z.object({
  select: z.lazy(() => AdminSelectSchema).optional(),
  include: z.lazy(() => AdminIncludeSchema).optional(),
}).strict();

export const AdminSelectSchema: z.ZodType<Prisma.AdminSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
}).strict()

// DRIVER
//------------------------------------------------------

export const DriverIncludeSchema: z.ZodType<Prisma.DriverInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
}).strict()

export const DriverArgsSchema: z.ZodType<Prisma.DriverDefaultArgs> = z.object({
  select: z.lazy(() => DriverSelectSchema).optional(),
  include: z.lazy(() => DriverIncludeSchema).optional(),
}).strict();

export const DriverSelectSchema: z.ZodType<Prisma.DriverSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  tenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
}).strict()

// TENANT USER RELATION
//------------------------------------------------------

export const TenantUserRelationIncludeSchema: z.ZodType<Prisma.TenantUserRelationInclude> = z.object({
  tenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TenantUserRelationArgsSchema: z.ZodType<Prisma.TenantUserRelationDefaultArgs> = z.object({
  select: z.lazy(() => TenantUserRelationSelectSchema).optional(),
  include: z.lazy(() => TenantUserRelationIncludeSchema).optional(),
}).strict();

export const TenantUserRelationSelectSchema: z.ZodType<Prisma.TenantUserRelationSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  userId: z.boolean().optional(),
  tenant: z.union([z.boolean(),z.lazy(() => TenantArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeTenantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  driver: z.union([ z.lazy(() => DriverNullableRelationFilterSchema),z.lazy(() => DriverWhereInputSchema) ]).optional().nullable(),
  admin: z.union([ z.lazy(() => AdminNullableRelationFilterSchema),z.lazy(() => AdminWhereInputSchema) ]).optional().nullable(),
  activeTenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
  tenantConnections: z.lazy(() => TenantUserRelationListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  activeTenantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  driver: z.lazy(() => DriverOrderByWithRelationInputSchema).optional(),
  admin: z.lazy(() => AdminOrderByWithRelationInputSchema).optional(),
  activeTenant: z.lazy(() => TenantOrderByWithRelationInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    email: z.string(),
    username: z.string()
  }),
  z.object({
    id: z.string().uuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
    username: z.string(),
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    email: z.string(),
    username: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  email: z.string().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeTenantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  driver: z.union([ z.lazy(() => DriverNullableRelationFilterSchema),z.lazy(() => DriverWhereInputSchema) ]).optional().nullable(),
  admin: z.union([ z.lazy(() => AdminNullableRelationFilterSchema),z.lazy(() => AdminWhereInputSchema) ]).optional().nullable(),
  activeTenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
  tenantConnections: z.lazy(() => TenantUserRelationListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  activeTenantId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  activeTenantId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TenantWhereInputSchema: z.ZodType<Prisma.TenantWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TenantWhereInputSchema),z.lazy(() => TenantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantWhereInputSchema),z.lazy(() => TenantWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeUsers: z.lazy(() => UserListRelationFilterSchema).optional(),
  adminProfiles: z.lazy(() => AdminListRelationFilterSchema).optional(),
  driverProfiles: z.lazy(() => DriverListRelationFilterSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationListRelationFilterSchema).optional()
}).strict();

export const TenantOrderByWithRelationInputSchema: z.ZodType<Prisma.TenantOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  activeUsers: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminOrderByRelationAggregateInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverOrderByRelationAggregateInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TenantWhereUniqueInputSchema: z.ZodType<Prisma.TenantWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => TenantWhereInputSchema),z.lazy(() => TenantWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantWhereInputSchema),z.lazy(() => TenantWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeUsers: z.lazy(() => UserListRelationFilterSchema).optional(),
  adminProfiles: z.lazy(() => AdminListRelationFilterSchema).optional(),
  driverProfiles: z.lazy(() => DriverListRelationFilterSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationListRelationFilterSchema).optional()
}).strict());

export const TenantOrderByWithAggregationInputSchema: z.ZodType<Prisma.TenantOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TenantCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TenantMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TenantMinOrderByAggregateInputSchema).optional()
}).strict();

export const TenantScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TenantScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TenantScalarWhereWithAggregatesInputSchema),z.lazy(() => TenantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantScalarWhereWithAggregatesInputSchema),z.lazy(() => TenantScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AdminWhereInputSchema: z.ZodType<Prisma.AdminWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdminWhereInputSchema),z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminWhereInputSchema),z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AdminOrderByWithRelationInputSchema: z.ZodType<Prisma.AdminOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputSchema).optional()
}).strict();

export const AdminWhereUniqueInputSchema: z.ZodType<Prisma.AdminWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    userId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => AdminWhereInputSchema),z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminWhereInputSchema),z.lazy(() => AdminWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AdminOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdminOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AdminCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdminMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdminMinOrderByAggregateInputSchema).optional()
}).strict();

export const AdminScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdminScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AdminScalarWhereWithAggregatesInputSchema),z.lazy(() => AdminScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminScalarWhereWithAggregatesInputSchema),z.lazy(() => AdminScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tenantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const DriverWhereInputSchema: z.ZodType<Prisma.DriverWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DriverWhereInputSchema),z.lazy(() => DriverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DriverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DriverWhereInputSchema),z.lazy(() => DriverWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
}).strict();

export const DriverOrderByWithRelationInputSchema: z.ZodType<Prisma.DriverOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputSchema).optional()
}).strict();

export const DriverWhereUniqueInputSchema: z.ZodType<Prisma.DriverWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    userId: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => DriverWhereInputSchema),z.lazy(() => DriverWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DriverWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DriverWhereInputSchema),z.lazy(() => DriverWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  tenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
}).strict());

export const DriverOrderByWithAggregationInputSchema: z.ZodType<Prisma.DriverOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DriverCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DriverMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DriverMinOrderByAggregateInputSchema).optional()
}).strict();

export const DriverScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DriverScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DriverScalarWhereWithAggregatesInputSchema),z.lazy(() => DriverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DriverScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DriverScalarWhereWithAggregatesInputSchema),z.lazy(() => DriverScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tenantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TenantUserRelationWhereInputSchema: z.ZodType<Prisma.TenantUserRelationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TenantUserRelationWhereInputSchema),z.lazy(() => TenantUserRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantUserRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantUserRelationWhereInputSchema),z.lazy(() => TenantUserRelationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TenantUserRelationOrderByWithRelationInputSchema: z.ZodType<Prisma.TenantUserRelationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenant: z.lazy(() => TenantOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const TenantUserRelationWhereUniqueInputSchema: z.ZodType<Prisma.TenantUserRelationWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => TenantUserRelationWhereInputSchema),z.lazy(() => TenantUserRelationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantUserRelationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantUserRelationWhereInputSchema),z.lazy(() => TenantUserRelationWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tenant: z.union([ z.lazy(() => TenantNullableRelationFilterSchema),z.lazy(() => TenantWhereInputSchema) ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export const TenantUserRelationOrderByWithAggregationInputSchema: z.ZodType<Prisma.TenantUserRelationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TenantUserRelationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TenantUserRelationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TenantUserRelationMinOrderByAggregateInputSchema).optional()
}).strict();

export const TenantUserRelationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TenantUserRelationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TenantUserRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => TenantUserRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantUserRelationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantUserRelationScalarWhereWithAggregatesInputSchema),z.lazy(() => TenantUserRelationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  tenantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  driver: z.lazy(() => DriverCreateNestedOneWithoutUserInputSchema).optional(),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserInputSchema).optional(),
  activeTenant: z.lazy(() => TenantCreateNestedOneWithoutActiveUsersInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  activeTenantId: z.string().optional().nullable(),
  driver: z.lazy(() => DriverUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  admin: z.lazy(() => AdminUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  driver: z.lazy(() => DriverUpdateOneWithoutUserNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUpdateOneWithoutUserNestedInputSchema).optional(),
  activeTenant: z.lazy(() => TenantUpdateOneWithoutActiveUsersNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeTenantId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driver: z.lazy(() => DriverUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  activeTenantId: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeTenantId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TenantCreateInputSchema: z.ZodType<Prisma.TenantCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminCreateNestedManyWithoutTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantUncheckedCreateInputSchema: z.ZodType<Prisma.TenantUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserUncheckedCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantUpdateInputSchema: z.ZodType<Prisma.TenantUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUpdateManyWithoutTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantUncheckedUpdateInputSchema: z.ZodType<Prisma.TenantUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUncheckedUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantCreateManyInputSchema: z.ZodType<Prisma.TenantCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string()
}).strict();

export const TenantUpdateManyMutationInputSchema: z.ZodType<Prisma.TenantUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TenantUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminCreateInputSchema: z.ZodType<Prisma.AdminCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAdminInputSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutAdminProfilesInputSchema).optional()
}).strict();

export const AdminUncheckedCreateInputSchema: z.ZodType<Prisma.AdminUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string()
}).strict();

export const AdminUpdateInputSchema: z.ZodType<Prisma.AdminUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAdminNestedInputSchema).optional(),
  tenant: z.lazy(() => TenantUpdateOneWithoutAdminProfilesNestedInputSchema).optional()
}).strict();

export const AdminUncheckedUpdateInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminCreateManyInputSchema: z.ZodType<Prisma.AdminCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string()
}).strict();

export const AdminUpdateManyMutationInputSchema: z.ZodType<Prisma.AdminUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AdminUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DriverCreateInputSchema: z.ZodType<Prisma.DriverCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutDriverInputSchema),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutDriverProfilesInputSchema).optional()
}).strict();

export const DriverUncheckedCreateInputSchema: z.ZodType<Prisma.DriverUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string()
}).strict();

export const DriverUpdateInputSchema: z.ZodType<Prisma.DriverUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutDriverNestedInputSchema).optional(),
  tenant: z.lazy(() => TenantUpdateOneWithoutDriverProfilesNestedInputSchema).optional()
}).strict();

export const DriverUncheckedUpdateInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DriverCreateManyInputSchema: z.ZodType<Prisma.DriverCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string(),
  tenantId: z.string()
}).strict();

export const DriverUpdateManyMutationInputSchema: z.ZodType<Prisma.DriverUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const DriverUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationCreateInputSchema: z.ZodType<Prisma.TenantUserRelationCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutUserConnectionsInputSchema).optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantConnectionsInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedCreateInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  userId: z.string()
}).strict();

export const TenantUserRelationUpdateInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenant: z.lazy(() => TenantUpdateOneWithoutUserConnectionsNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneWithoutTenantConnectionsNestedInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedUpdateInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationCreateManyInputSchema: z.ZodType<Prisma.TenantUserRelationCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string(),
  userId: z.string()
}).strict();

export const TenantUserRelationUpdateManyMutationInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TenantUserRelationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DriverNullableRelationFilterSchema: z.ZodType<Prisma.DriverNullableRelationFilter> = z.object({
  is: z.lazy(() => DriverWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DriverWhereInputSchema).optional().nullable()
}).strict();

export const AdminNullableRelationFilterSchema: z.ZodType<Prisma.AdminNullableRelationFilter> = z.object({
  is: z.lazy(() => AdminWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AdminWhereInputSchema).optional().nullable()
}).strict();

export const TenantNullableRelationFilterSchema: z.ZodType<Prisma.TenantNullableRelationFilter> = z.object({
  is: z.lazy(() => TenantWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TenantWhereInputSchema).optional().nullable()
}).strict();

export const TenantUserRelationListRelationFilterSchema: z.ZodType<Prisma.TenantUserRelationListRelationFilter> = z.object({
  every: z.lazy(() => TenantUserRelationWhereInputSchema).optional(),
  some: z.lazy(() => TenantUserRelationWhereInputSchema).optional(),
  none: z.lazy(() => TenantUserRelationWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const TenantUserRelationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TenantUserRelationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  activeTenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  activeTenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  activeTenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const AdminListRelationFilterSchema: z.ZodType<Prisma.AdminListRelationFilter> = z.object({
  every: z.lazy(() => AdminWhereInputSchema).optional(),
  some: z.lazy(() => AdminWhereInputSchema).optional(),
  none: z.lazy(() => AdminWhereInputSchema).optional()
}).strict();

export const DriverListRelationFilterSchema: z.ZodType<Prisma.DriverListRelationFilter> = z.object({
  every: z.lazy(() => DriverWhereInputSchema).optional(),
  some: z.lazy(() => DriverWhereInputSchema).optional(),
  none: z.lazy(() => DriverWhereInputSchema).optional()
}).strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AdminOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DriverOrderByRelationAggregateInputSchema: z.ZodType<Prisma.DriverOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TenantCountOrderByAggregateInputSchema: z.ZodType<Prisma.TenantCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TenantMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TenantMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TenantMinOrderByAggregateInputSchema: z.ZodType<Prisma.TenantMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const AdminCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdminCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdminMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdminMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DriverCountOrderByAggregateInputSchema: z.ZodType<Prisma.DriverCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DriverMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DriverMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DriverMinOrderByAggregateInputSchema: z.ZodType<Prisma.DriverMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const TenantUserRelationCountOrderByAggregateInputSchema: z.ZodType<Prisma.TenantUserRelationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TenantUserRelationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TenantUserRelationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TenantUserRelationMinOrderByAggregateInputSchema: z.ZodType<Prisma.TenantUserRelationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.lazy(() => SortOrderSchema).optional(),
  tenantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DriverCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.DriverCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutUserInputSchema),z.lazy(() => DriverUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DriverCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => DriverWhereUniqueInputSchema).optional()
}).strict();

export const AdminCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AdminCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutUserInputSchema),z.lazy(() => AdminUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputSchema).optional()
}).strict();

export const TenantCreateNestedOneWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutActiveUsersInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedCreateWithoutActiveUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActiveUsersInputSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional()
}).strict();

export const TenantUserRelationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DriverUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.DriverUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutUserInputSchema),z.lazy(() => DriverUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DriverCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => DriverWhereUniqueInputSchema).optional()
}).strict();

export const AdminUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AdminUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutUserInputSchema),z.lazy(() => AdminUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const DriverUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.DriverUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutUserInputSchema),z.lazy(() => DriverUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DriverCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => DriverUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DriverWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DriverWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DriverWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DriverUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => DriverUpdateWithoutUserInputSchema),z.lazy(() => DriverUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const AdminUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AdminUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutUserInputSchema),z.lazy(() => AdminUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AdminUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AdminWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AdminWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AdminUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AdminUpdateWithoutUserInputSchema),z.lazy(() => AdminUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const TenantUpdateOneWithoutActiveUsersNestedInputSchema: z.ZodType<Prisma.TenantUpdateOneWithoutActiveUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedCreateWithoutActiveUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutActiveUsersInputSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutActiveUsersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TenantUpdateToOneWithWhereWithoutActiveUsersInputSchema),z.lazy(() => TenantUpdateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutActiveUsersInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TenantUserRelationScalarWhereInputSchema),z.lazy(() => TenantUserRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const DriverUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutUserInputSchema),z.lazy(() => DriverUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DriverCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => DriverUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DriverWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DriverWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DriverWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DriverUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => DriverUpdateWithoutUserInputSchema),z.lazy(() => DriverUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const AdminUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutUserInputSchema),z.lazy(() => AdminUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AdminCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AdminUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AdminWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AdminWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AdminWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AdminUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => AdminUpdateWithoutUserInputSchema),z.lazy(() => AdminUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TenantUserRelationScalarWhereInputSchema),z.lazy(() => TenantUserRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedManyWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutActiveTenantInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutActiveTenantInputSchema),z.lazy(() => UserCreateWithoutActiveTenantInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema),z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyActiveTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AdminCreateNestedManyWithoutTenantInputSchema: z.ZodType<Prisma.AdminCreateNestedManyWithoutTenantInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutTenantInputSchema),z.lazy(() => AdminCreateWithoutTenantInputSchema).array(),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema),z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminCreateManyTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DriverCreateNestedManyWithoutTenantInputSchema: z.ZodType<Prisma.DriverCreateNestedManyWithoutTenantInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutTenantInputSchema),z.lazy(() => DriverCreateWithoutTenantInputSchema).array(),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema),z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DriverCreateManyTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TenantUserRelationCreateNestedManyWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationCreateNestedManyWithoutTenantInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedCreateNestedManyWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutActiveTenantInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutActiveTenantInputSchema),z.lazy(() => UserCreateWithoutActiveTenantInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema),z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyActiveTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AdminUncheckedCreateNestedManyWithoutTenantInputSchema: z.ZodType<Prisma.AdminUncheckedCreateNestedManyWithoutTenantInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutTenantInputSchema),z.lazy(() => AdminCreateWithoutTenantInputSchema).array(),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema),z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminCreateManyTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DriverUncheckedCreateNestedManyWithoutTenantInputSchema: z.ZodType<Prisma.DriverUncheckedCreateNestedManyWithoutTenantInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutTenantInputSchema),z.lazy(() => DriverCreateWithoutTenantInputSchema).array(),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema),z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DriverCreateManyTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TenantUserRelationUncheckedCreateNestedManyWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedCreateNestedManyWithoutTenantInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyTenantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateManyWithoutActiveTenantNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutActiveTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutActiveTenantInputSchema),z.lazy(() => UserCreateWithoutActiveTenantInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema),z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutActiveTenantInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutActiveTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyActiveTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutActiveTenantInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutActiveTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutActiveTenantInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutActiveTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AdminUpdateManyWithoutTenantNestedInputSchema: z.ZodType<Prisma.AdminUpdateManyWithoutTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutTenantInputSchema),z.lazy(() => AdminCreateWithoutTenantInputSchema).array(),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema),z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AdminUpsertWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => AdminUpsertWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminCreateManyTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AdminUpdateWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => AdminUpdateWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AdminUpdateManyWithWhereWithoutTenantInputSchema),z.lazy(() => AdminUpdateManyWithWhereWithoutTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AdminScalarWhereInputSchema),z.lazy(() => AdminScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DriverUpdateManyWithoutTenantNestedInputSchema: z.ZodType<Prisma.DriverUpdateManyWithoutTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutTenantInputSchema),z.lazy(() => DriverCreateWithoutTenantInputSchema).array(),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema),z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DriverUpsertWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => DriverUpsertWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DriverCreateManyTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DriverUpdateWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => DriverUpdateWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DriverUpdateManyWithWhereWithoutTenantInputSchema),z.lazy(() => DriverUpdateManyWithWhereWithoutTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DriverScalarWhereInputSchema),z.lazy(() => DriverScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TenantUserRelationUpdateManyWithoutTenantNestedInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateManyWithoutTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TenantUserRelationScalarWhereInputSchema),z.lazy(() => TenantUserRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedUpdateManyWithoutActiveTenantNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutActiveTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutActiveTenantInputSchema),z.lazy(() => UserCreateWithoutActiveTenantInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema),z.lazy(() => UserCreateOrConnectWithoutActiveTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutActiveTenantInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutActiveTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyActiveTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutActiveTenantInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutActiveTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutActiveTenantInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutActiveTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AdminUncheckedUpdateManyWithoutTenantNestedInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateManyWithoutTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => AdminCreateWithoutTenantInputSchema),z.lazy(() => AdminCreateWithoutTenantInputSchema).array(),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema),z.lazy(() => AdminCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AdminUpsertWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => AdminUpsertWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AdminCreateManyTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AdminWhereUniqueInputSchema),z.lazy(() => AdminWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AdminUpdateWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => AdminUpdateWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AdminUpdateManyWithWhereWithoutTenantInputSchema),z.lazy(() => AdminUpdateManyWithWhereWithoutTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AdminScalarWhereInputSchema),z.lazy(() => AdminScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DriverUncheckedUpdateManyWithoutTenantNestedInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateManyWithoutTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => DriverCreateWithoutTenantInputSchema),z.lazy(() => DriverCreateWithoutTenantInputSchema).array(),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema),z.lazy(() => DriverCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DriverUpsertWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => DriverUpsertWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DriverCreateManyTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DriverWhereUniqueInputSchema),z.lazy(() => DriverWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DriverUpdateWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => DriverUpdateWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DriverUpdateManyWithWhereWithoutTenantInputSchema),z.lazy(() => DriverUpdateManyWithWhereWithoutTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DriverScalarWhereInputSchema),z.lazy(() => DriverScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TenantUserRelationUncheckedUpdateManyWithoutTenantNestedInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateManyWithoutTenantNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema).array(),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema),z.lazy(() => TenantUserRelationCreateOrConnectWithoutTenantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUpsertWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TenantUserRelationCreateManyTenantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TenantUserRelationWhereUniqueInputSchema),z.lazy(() => TenantUserRelationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUpdateWithWhereUniqueWithoutTenantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUpdateManyWithWhereWithoutTenantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TenantUserRelationScalarWhereInputSchema),z.lazy(() => TenantUserRelationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAdminInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAdminInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAdminInputSchema),z.lazy(() => UserUncheckedCreateWithoutAdminInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAdminInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TenantCreateNestedOneWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutAdminProfilesInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutAdminProfilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutAdminProfilesInputSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutAdminNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAdminNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAdminInputSchema),z.lazy(() => UserUncheckedCreateWithoutAdminInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAdminInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAdminInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAdminInputSchema),z.lazy(() => UserUpdateWithoutAdminInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAdminInputSchema) ]).optional(),
}).strict();

export const TenantUpdateOneWithoutAdminProfilesNestedInputSchema: z.ZodType<Prisma.TenantUpdateOneWithoutAdminProfilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutAdminProfilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutAdminProfilesInputSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutAdminProfilesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TenantUpdateToOneWithWhereWithoutAdminProfilesInputSchema),z.lazy(() => TenantUpdateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutAdminProfilesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutDriverInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDriverInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDriverInputSchema),z.lazy(() => UserUncheckedCreateWithoutDriverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDriverInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TenantCreateNestedOneWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutDriverProfilesInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutDriverProfilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutDriverProfilesInputSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutDriverNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDriverNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutDriverInputSchema),z.lazy(() => UserUncheckedCreateWithoutDriverInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDriverInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDriverInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutDriverInputSchema),z.lazy(() => UserUpdateWithoutDriverInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDriverInputSchema) ]).optional(),
}).strict();

export const TenantUpdateOneWithoutDriverProfilesNestedInputSchema: z.ZodType<Prisma.TenantUpdateOneWithoutDriverProfilesNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutDriverProfilesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutDriverProfilesInputSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutDriverProfilesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TenantUpdateToOneWithWhereWithoutDriverProfilesInputSchema),z.lazy(() => TenantUpdateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutDriverProfilesInputSchema) ]).optional(),
}).strict();

export const TenantCreateNestedOneWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutUserConnectionsInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedCreateWithoutUserConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutUserConnectionsInputSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTenantConnectionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTenantConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTenantConnectionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const TenantUpdateOneWithoutUserConnectionsNestedInputSchema: z.ZodType<Prisma.TenantUpdateOneWithoutUserConnectionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TenantCreateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedCreateWithoutUserConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutUserConnectionsInputSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutUserConnectionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TenantWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TenantUpdateToOneWithWhereWithoutUserConnectionsInputSchema),z.lazy(() => TenantUpdateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutUserConnectionsInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneWithoutTenantConnectionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutTenantConnectionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTenantConnectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTenantConnectionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTenantConnectionsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTenantConnectionsInputSchema),z.lazy(() => UserUpdateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTenantConnectionsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DriverCreateWithoutUserInputSchema: z.ZodType<Prisma.DriverCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutDriverProfilesInputSchema).optional()
}).strict();

export const DriverUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.DriverUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string()
}).strict();

export const DriverCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.DriverCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => DriverWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DriverCreateWithoutUserInputSchema),z.lazy(() => DriverUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AdminCreateWithoutUserInputSchema: z.ZodType<Prisma.AdminCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutAdminProfilesInputSchema).optional()
}).strict();

export const AdminUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AdminUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string()
}).strict();

export const AdminCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AdminWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdminCreateWithoutUserInputSchema),z.lazy(() => AdminUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TenantCreateWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantCreateWithoutActiveUsersInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  adminProfiles: z.lazy(() => AdminCreateNestedManyWithoutTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantUncheckedCreateWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutActiveUsersInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  adminProfiles: z.lazy(() => AdminUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantCreateOrConnectWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutActiveUsersInput> = z.object({
  where: z.lazy(() => TenantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TenantCreateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedCreateWithoutActiveUsersInputSchema) ]),
}).strict();

export const TenantUserRelationCreateWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutUserConnectionsInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string()
}).strict();

export const TenantUserRelationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TenantUserRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TenantUserRelationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TenantUserRelationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TenantUserRelationCreateManyUserInputSchema),z.lazy(() => TenantUserRelationCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DriverUpsertWithoutUserInputSchema: z.ZodType<Prisma.DriverUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => DriverUpdateWithoutUserInputSchema),z.lazy(() => DriverUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => DriverCreateWithoutUserInputSchema),z.lazy(() => DriverUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => DriverWhereInputSchema).optional()
}).strict();

export const DriverUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.DriverUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => DriverWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DriverUpdateWithoutUserInputSchema),z.lazy(() => DriverUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const DriverUpdateWithoutUserInputSchema: z.ZodType<Prisma.DriverUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenant: z.lazy(() => TenantUpdateOneWithoutDriverProfilesNestedInputSchema).optional()
}).strict();

export const DriverUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminUpsertWithoutUserInputSchema: z.ZodType<Prisma.AdminUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => AdminUpdateWithoutUserInputSchema),z.lazy(() => AdminUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AdminCreateWithoutUserInputSchema),z.lazy(() => AdminUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => AdminWhereInputSchema).optional()
}).strict();

export const AdminUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AdminUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AdminWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AdminUpdateWithoutUserInputSchema),z.lazy(() => AdminUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AdminUpdateWithoutUserInputSchema: z.ZodType<Prisma.AdminUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenant: z.lazy(() => TenantUpdateOneWithoutAdminProfilesNestedInputSchema).optional()
}).strict();

export const AdminUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUpsertWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantUpsertWithoutActiveUsersInput> = z.object({
  update: z.union([ z.lazy(() => TenantUpdateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutActiveUsersInputSchema) ]),
  create: z.union([ z.lazy(() => TenantCreateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedCreateWithoutActiveUsersInputSchema) ]),
  where: z.lazy(() => TenantWhereInputSchema).optional()
}).strict();

export const TenantUpdateToOneWithWhereWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutActiveUsersInput> = z.object({
  where: z.lazy(() => TenantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TenantUpdateWithoutActiveUsersInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutActiveUsersInputSchema) ]),
}).strict();

export const TenantUpdateWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantUpdateWithoutActiveUsersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  adminProfiles: z.lazy(() => AdminUpdateManyWithoutTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantUncheckedUpdateWithoutActiveUsersInputSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutActiveUsersInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantUserRelationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TenantUserRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TenantUserRelationUpdateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TenantUserRelationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TenantUserRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TenantUserRelationUpdateWithoutUserInputSchema),z.lazy(() => TenantUserRelationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const TenantUserRelationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TenantUserRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TenantUserRelationUpdateManyMutationInputSchema),z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const TenantUserRelationScalarWhereInputSchema: z.ZodType<Prisma.TenantUserRelationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TenantUserRelationScalarWhereInputSchema),z.lazy(() => TenantUserRelationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TenantUserRelationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TenantUserRelationScalarWhereInputSchema),z.lazy(() => TenantUserRelationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserCreateWithoutActiveTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  driver: z.lazy(() => DriverCreateNestedOneWithoutUserInputSchema).optional(),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutActiveTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  driver: z.lazy(() => DriverUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  admin: z.lazy(() => AdminUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutActiveTenantInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema) ]),
}).strict();

export const UserCreateManyActiveTenantInputEnvelopeSchema: z.ZodType<Prisma.UserCreateManyActiveTenantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserCreateManyActiveTenantInputSchema),z.lazy(() => UserCreateManyActiveTenantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AdminCreateWithoutTenantInputSchema: z.ZodType<Prisma.AdminCreateWithoutTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAdminInputSchema)
}).strict();

export const AdminUncheckedCreateWithoutTenantInputSchema: z.ZodType<Prisma.AdminUncheckedCreateWithoutTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string()
}).strict();

export const AdminCreateOrConnectWithoutTenantInputSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutTenantInput> = z.object({
  where: z.lazy(() => AdminWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AdminCreateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema) ]),
}).strict();

export const AdminCreateManyTenantInputEnvelopeSchema: z.ZodType<Prisma.AdminCreateManyTenantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AdminCreateManyTenantInputSchema),z.lazy(() => AdminCreateManyTenantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const DriverCreateWithoutTenantInputSchema: z.ZodType<Prisma.DriverCreateWithoutTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutDriverInputSchema)
}).strict();

export const DriverUncheckedCreateWithoutTenantInputSchema: z.ZodType<Prisma.DriverUncheckedCreateWithoutTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string()
}).strict();

export const DriverCreateOrConnectWithoutTenantInputSchema: z.ZodType<Prisma.DriverCreateOrConnectWithoutTenantInput> = z.object({
  where: z.lazy(() => DriverWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DriverCreateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema) ]),
}).strict();

export const DriverCreateManyTenantInputEnvelopeSchema: z.ZodType<Prisma.DriverCreateManyTenantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DriverCreateManyTenantInputSchema),z.lazy(() => DriverCreateManyTenantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TenantUserRelationCreateWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationCreateWithoutTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutTenantConnectionsInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedCreateWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedCreateWithoutTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string()
}).strict();

export const TenantUserRelationCreateOrConnectWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationCreateOrConnectWithoutTenantInput> = z.object({
  where: z.lazy(() => TenantUserRelationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema) ]),
}).strict();

export const TenantUserRelationCreateManyTenantInputEnvelopeSchema: z.ZodType<Prisma.TenantUserRelationCreateManyTenantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TenantUserRelationCreateManyTenantInputSchema),z.lazy(() => TenantUserRelationCreateManyTenantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithWhereUniqueWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutActiveTenantInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedUpdateWithoutActiveTenantInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedCreateWithoutActiveTenantInputSchema) ]),
}).strict();

export const UserUpdateWithWhereUniqueWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutActiveTenantInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutActiveTenantInputSchema),z.lazy(() => UserUncheckedUpdateWithoutActiveTenantInputSchema) ]),
}).strict();

export const UserUpdateManyWithWhereWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutActiveTenantInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutActiveTenantInputSchema) ]),
}).strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  activeTenantId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AdminUpsertWithWhereUniqueWithoutTenantInputSchema: z.ZodType<Prisma.AdminUpsertWithWhereUniqueWithoutTenantInput> = z.object({
  where: z.lazy(() => AdminWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AdminUpdateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedUpdateWithoutTenantInputSchema) ]),
  create: z.union([ z.lazy(() => AdminCreateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedCreateWithoutTenantInputSchema) ]),
}).strict();

export const AdminUpdateWithWhereUniqueWithoutTenantInputSchema: z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutTenantInput> = z.object({
  where: z.lazy(() => AdminWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AdminUpdateWithoutTenantInputSchema),z.lazy(() => AdminUncheckedUpdateWithoutTenantInputSchema) ]),
}).strict();

export const AdminUpdateManyWithWhereWithoutTenantInputSchema: z.ZodType<Prisma.AdminUpdateManyWithWhereWithoutTenantInput> = z.object({
  where: z.lazy(() => AdminScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AdminUpdateManyMutationInputSchema),z.lazy(() => AdminUncheckedUpdateManyWithoutTenantInputSchema) ]),
}).strict();

export const AdminScalarWhereInputSchema: z.ZodType<Prisma.AdminScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdminScalarWhereInputSchema),z.lazy(() => AdminScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminScalarWhereInputSchema),z.lazy(() => AdminScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const DriverUpsertWithWhereUniqueWithoutTenantInputSchema: z.ZodType<Prisma.DriverUpsertWithWhereUniqueWithoutTenantInput> = z.object({
  where: z.lazy(() => DriverWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DriverUpdateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedUpdateWithoutTenantInputSchema) ]),
  create: z.union([ z.lazy(() => DriverCreateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedCreateWithoutTenantInputSchema) ]),
}).strict();

export const DriverUpdateWithWhereUniqueWithoutTenantInputSchema: z.ZodType<Prisma.DriverUpdateWithWhereUniqueWithoutTenantInput> = z.object({
  where: z.lazy(() => DriverWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DriverUpdateWithoutTenantInputSchema),z.lazy(() => DriverUncheckedUpdateWithoutTenantInputSchema) ]),
}).strict();

export const DriverUpdateManyWithWhereWithoutTenantInputSchema: z.ZodType<Prisma.DriverUpdateManyWithWhereWithoutTenantInput> = z.object({
  where: z.lazy(() => DriverScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DriverUpdateManyMutationInputSchema),z.lazy(() => DriverUncheckedUpdateManyWithoutTenantInputSchema) ]),
}).strict();

export const DriverScalarWhereInputSchema: z.ZodType<Prisma.DriverScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DriverScalarWhereInputSchema),z.lazy(() => DriverScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DriverScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DriverScalarWhereInputSchema),z.lazy(() => DriverScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tenantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const TenantUserRelationUpsertWithWhereUniqueWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUpsertWithWhereUniqueWithoutTenantInput> = z.object({
  where: z.lazy(() => TenantUserRelationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TenantUserRelationUpdateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedUpdateWithoutTenantInputSchema) ]),
  create: z.union([ z.lazy(() => TenantUserRelationCreateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedCreateWithoutTenantInputSchema) ]),
}).strict();

export const TenantUserRelationUpdateWithWhereUniqueWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateWithWhereUniqueWithoutTenantInput> = z.object({
  where: z.lazy(() => TenantUserRelationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TenantUserRelationUpdateWithoutTenantInputSchema),z.lazy(() => TenantUserRelationUncheckedUpdateWithoutTenantInputSchema) ]),
}).strict();

export const TenantUserRelationUpdateManyWithWhereWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateManyWithWhereWithoutTenantInput> = z.object({
  where: z.lazy(() => TenantUserRelationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TenantUserRelationUpdateManyMutationInputSchema),z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutTenantInputSchema) ]),
}).strict();

export const UserCreateWithoutAdminInputSchema: z.ZodType<Prisma.UserCreateWithoutAdminInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  driver: z.lazy(() => DriverCreateNestedOneWithoutUserInputSchema).optional(),
  activeTenant: z.lazy(() => TenantCreateNestedOneWithoutActiveUsersInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAdminInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAdminInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  activeTenantId: z.string().optional().nullable(),
  driver: z.lazy(() => DriverUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAdminInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAdminInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAdminInputSchema),z.lazy(() => UserUncheckedCreateWithoutAdminInputSchema) ]),
}).strict();

export const TenantCreateWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantCreateWithoutAdminProfilesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantUncheckedCreateWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutAdminProfilesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserUncheckedCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantCreateOrConnectWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutAdminProfilesInput> = z.object({
  where: z.lazy(() => TenantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TenantCreateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutAdminProfilesInputSchema) ]),
}).strict();

export const UserUpsertWithoutAdminInputSchema: z.ZodType<Prisma.UserUpsertWithoutAdminInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAdminInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAdminInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAdminInputSchema),z.lazy(() => UserUncheckedCreateWithoutAdminInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAdminInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAdminInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAdminInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAdminInputSchema) ]),
}).strict();

export const UserUpdateWithoutAdminInputSchema: z.ZodType<Prisma.UserUpdateWithoutAdminInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  driver: z.lazy(() => DriverUpdateOneWithoutUserNestedInputSchema).optional(),
  activeTenant: z.lazy(() => TenantUpdateOneWithoutActiveUsersNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAdminInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAdminInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeTenantId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driver: z.lazy(() => DriverUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TenantUpsertWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantUpsertWithoutAdminProfilesInput> = z.object({
  update: z.union([ z.lazy(() => TenantUpdateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutAdminProfilesInputSchema) ]),
  create: z.union([ z.lazy(() => TenantCreateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutAdminProfilesInputSchema) ]),
  where: z.lazy(() => TenantWhereInputSchema).optional()
}).strict();

export const TenantUpdateToOneWithWhereWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutAdminProfilesInput> = z.object({
  where: z.lazy(() => TenantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TenantUpdateWithoutAdminProfilesInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutAdminProfilesInputSchema) ]),
}).strict();

export const TenantUpdateWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantUpdateWithoutAdminProfilesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantUncheckedUpdateWithoutAdminProfilesInputSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutAdminProfilesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUncheckedUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutDriverInputSchema: z.ZodType<Prisma.UserCreateWithoutDriverInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserInputSchema).optional(),
  activeTenant: z.lazy(() => TenantCreateNestedOneWithoutActiveUsersInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutDriverInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutDriverInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  activeTenantId: z.string().optional().nullable(),
  admin: z.lazy(() => AdminUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutDriverInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDriverInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutDriverInputSchema),z.lazy(() => UserUncheckedCreateWithoutDriverInputSchema) ]),
}).strict();

export const TenantCreateWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantCreateWithoutDriverProfilesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantUncheckedCreateWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutDriverProfilesInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserUncheckedCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantCreateOrConnectWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutDriverProfilesInput> = z.object({
  where: z.lazy(() => TenantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TenantCreateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutDriverProfilesInputSchema) ]),
}).strict();

export const UserUpsertWithoutDriverInputSchema: z.ZodType<Prisma.UserUpsertWithoutDriverInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutDriverInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDriverInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutDriverInputSchema),z.lazy(() => UserUncheckedCreateWithoutDriverInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutDriverInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDriverInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutDriverInputSchema),z.lazy(() => UserUncheckedUpdateWithoutDriverInputSchema) ]),
}).strict();

export const UserUpdateWithoutDriverInputSchema: z.ZodType<Prisma.UserUpdateWithoutDriverInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  admin: z.lazy(() => AdminUpdateOneWithoutUserNestedInputSchema).optional(),
  activeTenant: z.lazy(() => TenantUpdateOneWithoutActiveUsersNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutDriverInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutDriverInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeTenantId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admin: z.lazy(() => AdminUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const TenantUpsertWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantUpsertWithoutDriverProfilesInput> = z.object({
  update: z.union([ z.lazy(() => TenantUpdateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutDriverProfilesInputSchema) ]),
  create: z.union([ z.lazy(() => TenantCreateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedCreateWithoutDriverProfilesInputSchema) ]),
  where: z.lazy(() => TenantWhereInputSchema).optional()
}).strict();

export const TenantUpdateToOneWithWhereWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutDriverProfilesInput> = z.object({
  where: z.lazy(() => TenantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TenantUpdateWithoutDriverProfilesInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutDriverProfilesInputSchema) ]),
}).strict();

export const TenantUpdateWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantUpdateWithoutDriverProfilesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantUncheckedUpdateWithoutDriverProfilesInputSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutDriverProfilesInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUncheckedUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  userConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantCreateWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantCreateWithoutUserConnectionsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminCreateNestedManyWithoutTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantUncheckedCreateWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantUncheckedCreateWithoutUserConnectionsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  activeUsers: z.lazy(() => UserUncheckedCreateNestedManyWithoutActiveTenantInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedCreateNestedManyWithoutTenantInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedCreateNestedManyWithoutTenantInputSchema).optional()
}).strict();

export const TenantCreateOrConnectWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutUserConnectionsInput> = z.object({
  where: z.lazy(() => TenantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TenantCreateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedCreateWithoutUserConnectionsInputSchema) ]),
}).strict();

export const UserCreateWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserCreateWithoutTenantConnectionsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  driver: z.lazy(() => DriverCreateNestedOneWithoutUserInputSchema).optional(),
  admin: z.lazy(() => AdminCreateNestedOneWithoutUserInputSchema).optional(),
  activeTenant: z.lazy(() => TenantCreateNestedOneWithoutActiveUsersInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTenantConnectionsInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string(),
  activeTenantId: z.string().optional().nullable(),
  driver: z.lazy(() => DriverUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  admin: z.lazy(() => AdminUncheckedCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTenantConnectionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTenantConnectionsInputSchema) ]),
}).strict();

export const TenantUpsertWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantUpsertWithoutUserConnectionsInput> = z.object({
  update: z.union([ z.lazy(() => TenantUpdateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutUserConnectionsInputSchema) ]),
  create: z.union([ z.lazy(() => TenantCreateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedCreateWithoutUserConnectionsInputSchema) ]),
  where: z.lazy(() => TenantWhereInputSchema).optional()
}).strict();

export const TenantUpdateToOneWithWhereWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutUserConnectionsInput> = z.object({
  where: z.lazy(() => TenantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TenantUpdateWithoutUserConnectionsInputSchema),z.lazy(() => TenantUncheckedUpdateWithoutUserConnectionsInputSchema) ]),
}).strict();

export const TenantUpdateWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantUpdateWithoutUserConnectionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUpdateManyWithoutTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const TenantUncheckedUpdateWithoutUserConnectionsInputSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutUserConnectionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeUsers: z.lazy(() => UserUncheckedUpdateManyWithoutActiveTenantNestedInputSchema).optional(),
  adminProfiles: z.lazy(() => AdminUncheckedUpdateManyWithoutTenantNestedInputSchema).optional(),
  driverProfiles: z.lazy(() => DriverUncheckedUpdateManyWithoutTenantNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutTenantConnectionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTenantConnectionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutTenantConnectionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTenantConnectionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTenantConnectionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTenantConnectionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutTenantConnectionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  driver: z.lazy(() => DriverUpdateOneWithoutUserNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUpdateOneWithoutUserNestedInputSchema).optional(),
  activeTenant: z.lazy(() => TenantUpdateOneWithoutActiveUsersNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTenantConnectionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTenantConnectionsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  activeTenantId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  driver: z.lazy(() => DriverUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUncheckedUpdateOneWithoutUserNestedInputSchema).optional()
}).strict();

export const TenantUserRelationCreateManyUserInputSchema: z.ZodType<Prisma.TenantUserRelationCreateManyUserInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tenantId: z.string()
}).strict();

export const TenantUserRelationUpdateWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenant: z.lazy(() => TenantUpdateOneWithoutUserConnectionsNestedInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tenantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateManyActiveTenantInputSchema: z.ZodType<Prisma.UserCreateManyActiveTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  email: z.string(),
  username: z.string()
}).strict();

export const AdminCreateManyTenantInputSchema: z.ZodType<Prisma.AdminCreateManyTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string()
}).strict();

export const DriverCreateManyTenantInputSchema: z.ZodType<Prisma.DriverCreateManyTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string()
}).strict();

export const TenantUserRelationCreateManyTenantInputSchema: z.ZodType<Prisma.TenantUserRelationCreateManyTenantInput> = z.object({
  id: z.string().uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  userId: z.string()
}).strict();

export const UserUpdateWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUpdateWithoutActiveTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  driver: z.lazy(() => DriverUpdateOneWithoutUserNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUpdateOneWithoutUserNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutActiveTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  driver: z.lazy(() => DriverUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  admin: z.lazy(() => AdminUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  tenantConnections: z.lazy(() => TenantUserRelationUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateManyWithoutActiveTenantInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutActiveTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminUpdateWithoutTenantInputSchema: z.ZodType<Prisma.AdminUpdateWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAdminNestedInputSchema).optional()
}).strict();

export const AdminUncheckedUpdateWithoutTenantInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminUncheckedUpdateManyWithoutTenantInputSchema: z.ZodType<Prisma.AdminUncheckedUpdateManyWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DriverUpdateWithoutTenantInputSchema: z.ZodType<Prisma.DriverUpdateWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutDriverNestedInputSchema).optional()
}).strict();

export const DriverUncheckedUpdateWithoutTenantInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DriverUncheckedUpdateManyWithoutTenantInputSchema: z.ZodType<Prisma.DriverUncheckedUpdateManyWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationUpdateWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUpdateWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneWithoutTenantConnectionsNestedInputSchema).optional()
}).strict();

export const TenantUserRelationUncheckedUpdateWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TenantUserRelationUncheckedUpdateManyWithoutTenantInputSchema: z.ZodType<Prisma.TenantUserRelationUncheckedUpdateManyWithoutTenantInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const TenantFindFirstArgsSchema: z.ZodType<Prisma.TenantFindFirstArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereInputSchema.optional(),
  orderBy: z.union([ TenantOrderByWithRelationInputSchema.array(),TenantOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TenantScalarFieldEnumSchema,TenantScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TenantFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TenantFindFirstOrThrowArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereInputSchema.optional(),
  orderBy: z.union([ TenantOrderByWithRelationInputSchema.array(),TenantOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TenantScalarFieldEnumSchema,TenantScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TenantFindManyArgsSchema: z.ZodType<Prisma.TenantFindManyArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereInputSchema.optional(),
  orderBy: z.union([ TenantOrderByWithRelationInputSchema.array(),TenantOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TenantScalarFieldEnumSchema,TenantScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TenantAggregateArgsSchema: z.ZodType<Prisma.TenantAggregateArgs> = z.object({
  where: TenantWhereInputSchema.optional(),
  orderBy: z.union([ TenantOrderByWithRelationInputSchema.array(),TenantOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TenantGroupByArgsSchema: z.ZodType<Prisma.TenantGroupByArgs> = z.object({
  where: TenantWhereInputSchema.optional(),
  orderBy: z.union([ TenantOrderByWithAggregationInputSchema.array(),TenantOrderByWithAggregationInputSchema ]).optional(),
  by: TenantScalarFieldEnumSchema.array(),
  having: TenantScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TenantFindUniqueArgsSchema: z.ZodType<Prisma.TenantFindUniqueArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereUniqueInputSchema,
}).strict() ;

export const TenantFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TenantFindUniqueOrThrowArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereUniqueInputSchema,
}).strict() ;

export const AdminFindFirstArgsSchema: z.ZodType<Prisma.AdminFindFirstArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereInputSchema.optional(),
  orderBy: z.union([ AdminOrderByWithRelationInputSchema.array(),AdminOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminScalarFieldEnumSchema,AdminScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdminFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdminFindFirstOrThrowArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereInputSchema.optional(),
  orderBy: z.union([ AdminOrderByWithRelationInputSchema.array(),AdminOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminScalarFieldEnumSchema,AdminScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdminFindManyArgsSchema: z.ZodType<Prisma.AdminFindManyArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereInputSchema.optional(),
  orderBy: z.union([ AdminOrderByWithRelationInputSchema.array(),AdminOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminScalarFieldEnumSchema,AdminScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdminAggregateArgsSchema: z.ZodType<Prisma.AdminAggregateArgs> = z.object({
  where: AdminWhereInputSchema.optional(),
  orderBy: z.union([ AdminOrderByWithRelationInputSchema.array(),AdminOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdminGroupByArgsSchema: z.ZodType<Prisma.AdminGroupByArgs> = z.object({
  where: AdminWhereInputSchema.optional(),
  orderBy: z.union([ AdminOrderByWithAggregationInputSchema.array(),AdminOrderByWithAggregationInputSchema ]).optional(),
  by: AdminScalarFieldEnumSchema.array(),
  having: AdminScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdminFindUniqueArgsSchema: z.ZodType<Prisma.AdminFindUniqueArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereUniqueInputSchema,
}).strict() ;

export const AdminFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdminFindUniqueOrThrowArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereUniqueInputSchema,
}).strict() ;

export const DriverFindFirstArgsSchema: z.ZodType<Prisma.DriverFindFirstArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereInputSchema.optional(),
  orderBy: z.union([ DriverOrderByWithRelationInputSchema.array(),DriverOrderByWithRelationInputSchema ]).optional(),
  cursor: DriverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DriverScalarFieldEnumSchema,DriverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DriverFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DriverFindFirstOrThrowArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereInputSchema.optional(),
  orderBy: z.union([ DriverOrderByWithRelationInputSchema.array(),DriverOrderByWithRelationInputSchema ]).optional(),
  cursor: DriverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DriverScalarFieldEnumSchema,DriverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DriverFindManyArgsSchema: z.ZodType<Prisma.DriverFindManyArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereInputSchema.optional(),
  orderBy: z.union([ DriverOrderByWithRelationInputSchema.array(),DriverOrderByWithRelationInputSchema ]).optional(),
  cursor: DriverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DriverScalarFieldEnumSchema,DriverScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DriverAggregateArgsSchema: z.ZodType<Prisma.DriverAggregateArgs> = z.object({
  where: DriverWhereInputSchema.optional(),
  orderBy: z.union([ DriverOrderByWithRelationInputSchema.array(),DriverOrderByWithRelationInputSchema ]).optional(),
  cursor: DriverWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DriverGroupByArgsSchema: z.ZodType<Prisma.DriverGroupByArgs> = z.object({
  where: DriverWhereInputSchema.optional(),
  orderBy: z.union([ DriverOrderByWithAggregationInputSchema.array(),DriverOrderByWithAggregationInputSchema ]).optional(),
  by: DriverScalarFieldEnumSchema.array(),
  having: DriverScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DriverFindUniqueArgsSchema: z.ZodType<Prisma.DriverFindUniqueArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereUniqueInputSchema,
}).strict() ;

export const DriverFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DriverFindUniqueOrThrowArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereUniqueInputSchema,
}).strict() ;

export const TenantUserRelationFindFirstArgsSchema: z.ZodType<Prisma.TenantUserRelationFindFirstArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereInputSchema.optional(),
  orderBy: z.union([ TenantUserRelationOrderByWithRelationInputSchema.array(),TenantUserRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantUserRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TenantUserRelationScalarFieldEnumSchema,TenantUserRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TenantUserRelationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TenantUserRelationFindFirstOrThrowArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereInputSchema.optional(),
  orderBy: z.union([ TenantUserRelationOrderByWithRelationInputSchema.array(),TenantUserRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantUserRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TenantUserRelationScalarFieldEnumSchema,TenantUserRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TenantUserRelationFindManyArgsSchema: z.ZodType<Prisma.TenantUserRelationFindManyArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereInputSchema.optional(),
  orderBy: z.union([ TenantUserRelationOrderByWithRelationInputSchema.array(),TenantUserRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantUserRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TenantUserRelationScalarFieldEnumSchema,TenantUserRelationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TenantUserRelationAggregateArgsSchema: z.ZodType<Prisma.TenantUserRelationAggregateArgs> = z.object({
  where: TenantUserRelationWhereInputSchema.optional(),
  orderBy: z.union([ TenantUserRelationOrderByWithRelationInputSchema.array(),TenantUserRelationOrderByWithRelationInputSchema ]).optional(),
  cursor: TenantUserRelationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TenantUserRelationGroupByArgsSchema: z.ZodType<Prisma.TenantUserRelationGroupByArgs> = z.object({
  where: TenantUserRelationWhereInputSchema.optional(),
  orderBy: z.union([ TenantUserRelationOrderByWithAggregationInputSchema.array(),TenantUserRelationOrderByWithAggregationInputSchema ]).optional(),
  by: TenantUserRelationScalarFieldEnumSchema.array(),
  having: TenantUserRelationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TenantUserRelationFindUniqueArgsSchema: z.ZodType<Prisma.TenantUserRelationFindUniqueArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereUniqueInputSchema,
}).strict() ;

export const TenantUserRelationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TenantUserRelationFindUniqueOrThrowArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const TenantCreateArgsSchema: z.ZodType<Prisma.TenantCreateArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  data: z.union([ TenantCreateInputSchema,TenantUncheckedCreateInputSchema ]),
}).strict() ;

export const TenantUpsertArgsSchema: z.ZodType<Prisma.TenantUpsertArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereUniqueInputSchema,
  create: z.union([ TenantCreateInputSchema,TenantUncheckedCreateInputSchema ]),
  update: z.union([ TenantUpdateInputSchema,TenantUncheckedUpdateInputSchema ]),
}).strict() ;

export const TenantCreateManyArgsSchema: z.ZodType<Prisma.TenantCreateManyArgs> = z.object({
  data: z.union([ TenantCreateManyInputSchema,TenantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TenantDeleteArgsSchema: z.ZodType<Prisma.TenantDeleteArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  where: TenantWhereUniqueInputSchema,
}).strict() ;

export const TenantUpdateArgsSchema: z.ZodType<Prisma.TenantUpdateArgs> = z.object({
  select: TenantSelectSchema.optional(),
  include: TenantIncludeSchema.optional(),
  data: z.union([ TenantUpdateInputSchema,TenantUncheckedUpdateInputSchema ]),
  where: TenantWhereUniqueInputSchema,
}).strict() ;

export const TenantUpdateManyArgsSchema: z.ZodType<Prisma.TenantUpdateManyArgs> = z.object({
  data: z.union([ TenantUpdateManyMutationInputSchema,TenantUncheckedUpdateManyInputSchema ]),
  where: TenantWhereInputSchema.optional(),
}).strict() ;

export const TenantDeleteManyArgsSchema: z.ZodType<Prisma.TenantDeleteManyArgs> = z.object({
  where: TenantWhereInputSchema.optional(),
}).strict() ;

export const AdminCreateArgsSchema: z.ZodType<Prisma.AdminCreateArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  data: z.union([ AdminCreateInputSchema,AdminUncheckedCreateInputSchema ]),
}).strict() ;

export const AdminUpsertArgsSchema: z.ZodType<Prisma.AdminUpsertArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereUniqueInputSchema,
  create: z.union([ AdminCreateInputSchema,AdminUncheckedCreateInputSchema ]),
  update: z.union([ AdminUpdateInputSchema,AdminUncheckedUpdateInputSchema ]),
}).strict() ;

export const AdminCreateManyArgsSchema: z.ZodType<Prisma.AdminCreateManyArgs> = z.object({
  data: z.union([ AdminCreateManyInputSchema,AdminCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AdminDeleteArgsSchema: z.ZodType<Prisma.AdminDeleteArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  where: AdminWhereUniqueInputSchema,
}).strict() ;

export const AdminUpdateArgsSchema: z.ZodType<Prisma.AdminUpdateArgs> = z.object({
  select: AdminSelectSchema.optional(),
  include: AdminIncludeSchema.optional(),
  data: z.union([ AdminUpdateInputSchema,AdminUncheckedUpdateInputSchema ]),
  where: AdminWhereUniqueInputSchema,
}).strict() ;

export const AdminUpdateManyArgsSchema: z.ZodType<Prisma.AdminUpdateManyArgs> = z.object({
  data: z.union([ AdminUpdateManyMutationInputSchema,AdminUncheckedUpdateManyInputSchema ]),
  where: AdminWhereInputSchema.optional(),
}).strict() ;

export const AdminDeleteManyArgsSchema: z.ZodType<Prisma.AdminDeleteManyArgs> = z.object({
  where: AdminWhereInputSchema.optional(),
}).strict() ;

export const DriverCreateArgsSchema: z.ZodType<Prisma.DriverCreateArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  data: z.union([ DriverCreateInputSchema,DriverUncheckedCreateInputSchema ]),
}).strict() ;

export const DriverUpsertArgsSchema: z.ZodType<Prisma.DriverUpsertArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereUniqueInputSchema,
  create: z.union([ DriverCreateInputSchema,DriverUncheckedCreateInputSchema ]),
  update: z.union([ DriverUpdateInputSchema,DriverUncheckedUpdateInputSchema ]),
}).strict() ;

export const DriverCreateManyArgsSchema: z.ZodType<Prisma.DriverCreateManyArgs> = z.object({
  data: z.union([ DriverCreateManyInputSchema,DriverCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const DriverDeleteArgsSchema: z.ZodType<Prisma.DriverDeleteArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  where: DriverWhereUniqueInputSchema,
}).strict() ;

export const DriverUpdateArgsSchema: z.ZodType<Prisma.DriverUpdateArgs> = z.object({
  select: DriverSelectSchema.optional(),
  include: DriverIncludeSchema.optional(),
  data: z.union([ DriverUpdateInputSchema,DriverUncheckedUpdateInputSchema ]),
  where: DriverWhereUniqueInputSchema,
}).strict() ;

export const DriverUpdateManyArgsSchema: z.ZodType<Prisma.DriverUpdateManyArgs> = z.object({
  data: z.union([ DriverUpdateManyMutationInputSchema,DriverUncheckedUpdateManyInputSchema ]),
  where: DriverWhereInputSchema.optional(),
}).strict() ;

export const DriverDeleteManyArgsSchema: z.ZodType<Prisma.DriverDeleteManyArgs> = z.object({
  where: DriverWhereInputSchema.optional(),
}).strict() ;

export const TenantUserRelationCreateArgsSchema: z.ZodType<Prisma.TenantUserRelationCreateArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  data: z.union([ TenantUserRelationCreateInputSchema,TenantUserRelationUncheckedCreateInputSchema ]),
}).strict() ;

export const TenantUserRelationUpsertArgsSchema: z.ZodType<Prisma.TenantUserRelationUpsertArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereUniqueInputSchema,
  create: z.union([ TenantUserRelationCreateInputSchema,TenantUserRelationUncheckedCreateInputSchema ]),
  update: z.union([ TenantUserRelationUpdateInputSchema,TenantUserRelationUncheckedUpdateInputSchema ]),
}).strict() ;

export const TenantUserRelationCreateManyArgsSchema: z.ZodType<Prisma.TenantUserRelationCreateManyArgs> = z.object({
  data: z.union([ TenantUserRelationCreateManyInputSchema,TenantUserRelationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TenantUserRelationDeleteArgsSchema: z.ZodType<Prisma.TenantUserRelationDeleteArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  where: TenantUserRelationWhereUniqueInputSchema,
}).strict() ;

export const TenantUserRelationUpdateArgsSchema: z.ZodType<Prisma.TenantUserRelationUpdateArgs> = z.object({
  select: TenantUserRelationSelectSchema.optional(),
  include: TenantUserRelationIncludeSchema.optional(),
  data: z.union([ TenantUserRelationUpdateInputSchema,TenantUserRelationUncheckedUpdateInputSchema ]),
  where: TenantUserRelationWhereUniqueInputSchema,
}).strict() ;

export const TenantUserRelationUpdateManyArgsSchema: z.ZodType<Prisma.TenantUserRelationUpdateManyArgs> = z.object({
  data: z.union([ TenantUserRelationUpdateManyMutationInputSchema,TenantUserRelationUncheckedUpdateManyInputSchema ]),
  where: TenantUserRelationWhereInputSchema.optional(),
}).strict() ;

export const TenantUserRelationDeleteManyArgsSchema: z.ZodType<Prisma.TenantUserRelationDeleteManyArgs> = z.object({
  where: TenantUserRelationWhereInputSchema.optional(),
}).strict() ;