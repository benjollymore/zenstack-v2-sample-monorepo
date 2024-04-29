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

        aggregate: procedure.input($Schema.AdminInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).admin.aggregate(input as any))),

        createMany: procedure.input($Schema.AdminInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.createMany(input as any))),

        create: procedure.input($Schema.AdminInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.create(input as any))),

        deleteMany: procedure.input($Schema.AdminInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.deleteMany(input as any))),

        delete: procedure.input($Schema.AdminInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.delete(input as any))),

        findFirst: procedure.input($Schema.AdminInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).admin.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.AdminInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).admin.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.AdminInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).admin.findMany(input as any))),

        findUnique: procedure.input($Schema.AdminInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).admin.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.AdminInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).admin.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.AdminInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).admin.groupBy(input as any))),

        updateMany: procedure.input($Schema.AdminInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.updateMany(input as any))),

        update: procedure.input($Schema.AdminInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.update(input as any))),

        upsert: procedure.input($Schema.AdminInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).admin.upsert(input as any))),

        count: procedure.input($Schema.AdminInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).admin.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.AdminAggregateArgs, TData = Prisma.GetAdminAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.AdminAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetAdminAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AdminAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.AdminAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetAdminAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetAdminAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.AdminCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AdminCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AdminGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AdminGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AdminGetPayload<T>, Context>) => Promise<Prisma.AdminGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AdminDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AdminDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AdminGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AdminGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AdminGetPayload<T>, Context>) => Promise<Prisma.AdminGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AdminFindFirstArgs, TData = Prisma.AdminGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AdminFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AdminGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AdminFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AdminFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AdminGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AdminGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.AdminFindFirstOrThrowArgs, TData = Prisma.AdminGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AdminFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AdminGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AdminFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AdminFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AdminGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AdminGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AdminFindManyArgs, TData = Array<Prisma.AdminGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.AdminFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AdminGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AdminFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AdminFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AdminGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AdminGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AdminFindUniqueArgs, TData = Prisma.AdminGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AdminFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AdminGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AdminFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AdminFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AdminGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AdminGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.AdminFindUniqueOrThrowArgs, TData = Prisma.AdminGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AdminFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AdminGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AdminFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AdminFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AdminGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AdminGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.AdminGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.AdminGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.AdminGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetAdminGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.AdminGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetAdminGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AdminGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.AdminGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.AdminGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.AdminGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetAdminGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetAdminGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AdminUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AdminUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AdminGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AdminGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AdminGetPayload<T>, Context>) => Promise<Prisma.AdminGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.AdminUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AdminUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AdminGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AdminGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AdminUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AdminUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AdminGetPayload<T>, Context>) => Promise<Prisma.AdminGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AdminCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AdminCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.AdminCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AdminCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AdminCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.AdminCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AdminCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AdminCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
