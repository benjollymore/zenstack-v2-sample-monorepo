/* eslint-disable */
import { unsetMarker, type AnyRouter, type AnyRootConfig, type CreateRouterInner, type Procedure, type ProcedureBuilder, type ProcedureParams, type ProcedureRouterRecord, type ProcedureType } from "@trpc/server";
import { type PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createTenantRouter from "./Tenant.router";
import createAdminRouter from "./Admin.router";
import createDriverRouter from "./Driver.router";
import createTenantUserRelationRouter from "./TenantUserRelation.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as TenantClientType } from "./Tenant.router";
import { ClientType as AdminClientType } from "./Admin.router";
import { ClientType as DriverClientType } from "./Driver.router";
import { ClientType as TenantUserRelationClientType } from "./TenantUserRelation.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        tenant: createTenantRouter(router, procedure),
        admin: createAdminRouter(router, procedure),
        driver: createDriverRouter(router, procedure),
        tenantUserRelation: createTenantUserRelationRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    tenant: TenantClientType<AppRouter>;
    admin: AdminClientType<AppRouter>;
    driver: DriverClientType<AppRouter>;
    tenantUserRelation: TenantUserRelationClientType<AppRouter>;
}
