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

        aggregate: procedure.input($Schema.TenantInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).tenant.aggregate(input as any))),

        createMany: procedure.input($Schema.TenantInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.createMany(input as any))),

        create: procedure.input($Schema.TenantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.create(input as any))),

        deleteMany: procedure.input($Schema.TenantInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.deleteMany(input as any))),

        delete: procedure.input($Schema.TenantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.delete(input as any))),

        findFirst: procedure.input($Schema.TenantInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).tenant.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.TenantInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).tenant.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.TenantInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).tenant.findMany(input as any))),

        findUnique: procedure.input($Schema.TenantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tenant.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.TenantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).tenant.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.TenantInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).tenant.groupBy(input as any))),

        updateMany: procedure.input($Schema.TenantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.updateMany(input as any))),

        update: procedure.input($Schema.TenantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.update(input as any))),

        upsert: procedure.input($Schema.TenantInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).tenant.upsert(input as any))),

        count: procedure.input($Schema.TenantInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).tenant.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.TenantAggregateArgs, TData = Prisma.GetTenantAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.TenantAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetTenantAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TenantAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetTenantAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetTenantAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.TenantCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.TenantCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantGetPayload<T>, Context>) => Promise<Prisma.TenantGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.TenantDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.TenantDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantGetPayload<T>, Context>) => Promise<Prisma.TenantGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.TenantFindFirstArgs, TData = Prisma.TenantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.TenantFindFirstOrThrowArgs, TData = Prisma.TenantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.TenantFindManyArgs, TData = Array<Prisma.TenantGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.TenantFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.TenantGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.TenantGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.TenantGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.TenantFindUniqueArgs, TData = Prisma.TenantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.TenantFindUniqueOrThrowArgs, TData = Prisma.TenantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.TenantFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.TenantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.TenantFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.TenantFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.TenantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.TenantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.TenantGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.TenantGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.TenantGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetTenantGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.TenantGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetTenantGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TenantGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.TenantGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.TenantGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.TenantGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetTenantGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetTenantGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.TenantUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.TenantUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantGetPayload<T>, Context>) => Promise<Prisma.TenantGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.TenantUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.TenantUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.TenantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.TenantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.TenantUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.TenantUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.TenantGetPayload<T>, Context>) => Promise<Prisma.TenantGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.TenantCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TenantCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.TenantCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.TenantCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.TenantCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.TenantCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.TenantCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.TenantCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
