/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as $Schema from '@zenstackhq/runtime/zod/input';
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '.zenstack/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input($Schema.TenantUserRelationInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.aggregate(input as any))),

        createMany: procedure.input($Schema.TenantUserRelationInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.createMany(input as any))),

        create: procedure.input($Schema.TenantUserRelationInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.create(input as any))),

        deleteMany: procedure.input($Schema.TenantUserRelationInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.deleteMany(input as any))),

        delete: procedure.input($Schema.TenantUserRelationInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.delete(input as any))),

        findFirst: procedure.input($Schema.TenantUserRelationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.TenantUserRelationInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.TenantUserRelationInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.findMany(input as any))),

        findUnique: procedure.input($Schema.TenantUserRelationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.TenantUserRelationInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.TenantUserRelationInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.groupBy(input as any))),

        updateMany: procedure.input($Schema.TenantUserRelationInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.updateMany(input as any))),

        update: procedure.input($Schema.TenantUserRelationInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.update(input as any))),

        upsert: procedure.input($Schema.TenantUserRelationInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenantUserRelation.upsert(input as any))),

        count: procedure.input($Schema.TenantUserRelationInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).tenantUserRelation.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.TenantUserRelationAggregateArgs, TData = Prisma.GetTenantUserRelationAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.TenantUserRelationAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetTenantUserRelationAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TenantUserRelationAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetTenantUserRelationAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetTenantUserRelationAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.TenantUserRelationCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TenantUserRelationCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantUserRelationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantUserRelationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantUserRelationGetPayload<T>, Context>) => Promise<Prisma.TenantUserRelationGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TenantUserRelationDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TenantUserRelationDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantUserRelationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantUserRelationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantUserRelationGetPayload<T>, Context>) => Promise<Prisma.TenantUserRelationGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TenantUserRelationFindFirstArgs, TData = Prisma.TenantUserRelationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantUserRelationFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantUserRelationFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantUserRelationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.TenantUserRelationFindFirstOrThrowArgs, TData = Prisma.TenantUserRelationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantUserRelationFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantUserRelationFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantUserRelationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TenantUserRelationFindManyArgs, TData = Array<Prisma.TenantUserRelationGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TenantUserRelationFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TenantUserRelationGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantUserRelationFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TenantUserRelationGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TenantUserRelationGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TenantUserRelationFindUniqueArgs, TData = Prisma.TenantUserRelationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantUserRelationFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantUserRelationFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantUserRelationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.TenantUserRelationFindUniqueOrThrowArgs, TData = Prisma.TenantUserRelationGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantUserRelationFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantUserRelationFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantUserRelationGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantUserRelationGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.TenantUserRelationGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.TenantUserRelationGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.TenantUserRelationGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetTenantUserRelationGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.TenantUserRelationGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetTenantUserRelationGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.TenantUserRelationGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.TenantUserRelationGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.TenantUserRelationGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetTenantUserRelationGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetTenantUserRelationGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TenantUserRelationUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TenantUserRelationUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantUserRelationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantUserRelationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantUserRelationGetPayload<T>, Context>) => Promise<Prisma.TenantUserRelationGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.TenantUserRelationUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUserRelationUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantUserRelationGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantUserRelationGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUserRelationUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUserRelationUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantUserRelationGetPayload<T>, Context>) => Promise<Prisma.TenantUserRelationGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TenantUserRelationCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TenantUserRelationCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.TenantUserRelationCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TenantUserRelationCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TenantUserRelationCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TenantUserRelationCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TenantUserRelationCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TenantUserRelationCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
