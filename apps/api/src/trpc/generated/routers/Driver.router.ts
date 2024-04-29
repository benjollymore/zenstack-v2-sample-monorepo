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

        aggregate: procedure.input($Schema.DriverInputSchema.aggregate).query(({ ctx, input }) => checkRead(db(ctx).driver.aggregate(input as any))),

        createMany: procedure.input($Schema.DriverInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.createMany(input as any))),

        create: procedure.input($Schema.DriverInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.create(input as any))),

        deleteMany: procedure.input($Schema.DriverInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.deleteMany(input as any))),

        delete: procedure.input($Schema.DriverInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.delete(input as any))),

        findFirst: procedure.input($Schema.DriverInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).driver.findFirst(input as any))),

        findFirstOrThrow: procedure.input($Schema.DriverInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).driver.findFirstOrThrow(input as any))),

        findMany: procedure.input($Schema.DriverInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).driver.findMany(input as any))),

        findUnique: procedure.input($Schema.DriverInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).driver.findUnique(input as any))),

        findUniqueOrThrow: procedure.input($Schema.DriverInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).driver.findUniqueOrThrow(input as any))),

        groupBy: procedure.input($Schema.DriverInputSchema.groupBy).query(({ ctx, input }) => checkRead(db(ctx).driver.groupBy(input as any))),

        updateMany: procedure.input($Schema.DriverInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.updateMany(input as any))),

        update: procedure.input($Schema.DriverInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.update(input as any))),

        upsert: procedure.input($Schema.DriverInputSchema.upsert).mutation(async ({ ctx, input }) => checkMutate(db(ctx).driver.upsert(input as any))),

        count: procedure.input($Schema.DriverInputSchema.count).query(({ ctx, input }) => checkRead(db(ctx).driver.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.DriverAggregateArgs, TData = Prisma.GetDriverAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.DriverAggregateArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.GetDriverAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DriverAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.DriverAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.GetDriverAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetDriverAggregateType<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    createMany: {

        useMutation: <T extends Prisma.DriverCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DriverCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DriverGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DriverGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DriverGetPayload<T>, Context>) => Promise<Prisma.DriverGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DriverDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DriverDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DriverGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DriverGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DriverGetPayload<T>, Context>) => Promise<Prisma.DriverGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DriverFindFirstArgs, TData = Prisma.DriverGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DriverFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DriverGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DriverFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DriverFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DriverGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DriverGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.DriverFindFirstOrThrowArgs, TData = Prisma.DriverGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DriverFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DriverGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DriverFindFirstOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DriverFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DriverGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DriverGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DriverFindManyArgs, TData = Array<Prisma.DriverGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.DriverFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DriverGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DriverFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DriverFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DriverGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DriverGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DriverFindUniqueArgs, TData = Prisma.DriverGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DriverFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DriverGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DriverFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DriverFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DriverGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DriverGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.DriverFindUniqueOrThrowArgs, TData = Prisma.DriverGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DriverFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DriverGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DriverFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DriverFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DriverGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DriverGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    groupBy: {

        useQuery: <T extends Prisma.DriverGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.DriverGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.DriverGroupByArgs['orderBy'] },
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
            , TData = {} extends InputErrors ? Prisma.GetDriverGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.DriverGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<string, T, {} extends InputErrors ? Prisma.GetDriverGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DriverGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.DriverGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.DriverGroupByArgs['orderBy'] },
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
            input: Omit<Prisma.SubsetIntersection<T, Prisma.DriverGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, {} extends InputErrors ? Prisma.GetDriverGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetDriverGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DriverUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DriverUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DriverGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DriverGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DriverGetPayload<T>, Context>) => Promise<Prisma.DriverGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.DriverUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DriverUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DriverGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DriverGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DriverUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DriverUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DriverGetPayload<T>, Context>) => Promise<Prisma.DriverGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.DriverCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DriverCountAggregateOutputType>
            : number>(
                input: Prisma.Subset<T, Prisma.DriverCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.DriverCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DriverCountArgs>(
            input: Omit<Prisma.Subset<T, Prisma.DriverCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.DriverCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DriverCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
