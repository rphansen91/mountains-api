import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  ObjectId: any;
};









export type Pagination = {
  perPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};

export type Sort = {
  field?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};



export type IntFilter = {
  EQ?: Maybe<Scalars['Int']>;
  GT?: Maybe<Scalars['Int']>;
  GTE?: Maybe<Scalars['Int']>;
  IN?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Int']>>>;
  LT?: Maybe<Scalars['Int']>;
  LTE?: Maybe<Scalars['Int']>;
  NE?: Maybe<Scalars['Int']>;
  NIN?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FloatFilter = {
  EQ?: Maybe<Scalars['Float']>;
  GT?: Maybe<Scalars['Float']>;
  GTE?: Maybe<Scalars['Float']>;
  IN?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Float']>>>;
  LT?: Maybe<Scalars['Float']>;
  LTE?: Maybe<Scalars['Float']>;
  NE?: Maybe<Scalars['Float']>;
  NIN?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type StringFilter = {
  EQ?: Maybe<Scalars['String']>;
  GT?: Maybe<Scalars['String']>;
  GTE?: Maybe<Scalars['String']>;
  IN?: Maybe<Array<Maybe<Scalars['String']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['String']>>>;
  LT?: Maybe<Scalars['String']>;
  LTE?: Maybe<Scalars['String']>;
  NE?: Maybe<Scalars['String']>;
  NIN?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DateFilter = {
  EQ?: Maybe<Scalars['Date']>;
  GT?: Maybe<Scalars['Date']>;
  GTE?: Maybe<Scalars['Date']>;
  IN?: Maybe<Array<Maybe<Scalars['Date']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['Date']>>>;
  LT?: Maybe<Scalars['Date']>;
  LTE?: Maybe<Scalars['Date']>;
  NE?: Maybe<Scalars['Date']>;
  NIN?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type ObjectIdFilter = {
  EQ?: Maybe<Scalars['ObjectId']>;
  GT?: Maybe<Scalars['ObjectId']>;
  GTE?: Maybe<Scalars['ObjectId']>;
  IN?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  ALL?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  LT?: Maybe<Scalars['ObjectId']>;
  LTE?: Maybe<Scalars['ObjectId']>;
  NE?: Maybe<Scalars['ObjectId']>;
  NIN?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type Mountain = {
  __typename?: 'Mountain';
  id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  meters?: Maybe<Scalars['Float']>;
  feet?: Maybe<Scalars['Float']>;
  location?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  empty?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  empty?: Maybe<Scalars['String']>;
};




export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Pagination: Pagination;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Sort: Sort;
  String: ResolverTypeWrapper<Scalars['String']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  ObjectId: ResolverTypeWrapper<Scalars['ObjectId']>;
  IntFilter: IntFilter;
  FloatFilter: FloatFilter;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  StringFilter: StringFilter;
  DateFilter: DateFilter;
  ObjectIdFilter: ObjectIdFilter;
  Mountain: ResolverTypeWrapper<Mountain>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Pagination: Pagination;
  Int: Scalars['Int'];
  Sort: Sort;
  String: Scalars['String'];
  Date: Scalars['Date'];
  ObjectId: Scalars['ObjectId'];
  IntFilter: IntFilter;
  FloatFilter: FloatFilter;
  Float: Scalars['Float'];
  StringFilter: StringFilter;
  DateFilter: DateFilter;
  ObjectIdFilter: ObjectIdFilter;
  Mountain: Mountain;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export type CollectionDirectiveArgs = {   name: Scalars['String'];
  crud?: Maybe<Scalars['Boolean']>; };

export type CollectionDirectiveResolver<Result, Parent, ContextType = any, Args = CollectionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FilterDirectiveArgs = {  };

export type FilterDirectiveResolver<Result, Parent, ContextType = any, Args = FilterDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type InsertDirectiveArgs = {  };

export type InsertDirectiveResolver<Result, Parent, ContextType = any, Args = InsertDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UpdateDirectiveArgs = {  };

export type UpdateDirectiveResolver<Result, Parent, ContextType = any, Args = UpdateDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UnsetDirectiveArgs = {  };

export type UnsetDirectiveResolver<Result, Parent, ContextType = any, Args = UnsetDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SetDirectiveArgs = {  };

export type SetDirectiveResolver<Result, Parent, ContextType = any, Args = SetDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IncDirectiveArgs = {  };

export type IncDirectiveResolver<Result, Parent, ContextType = any, Args = IncDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type DecDirectiveArgs = {  };

export type DecDirectiveResolver<Result, Parent, ContextType = any, Args = DecDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectId'], any> {
  name: 'ObjectId';
}

export type MountainResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mountain'] = ResolversParentTypes['Mountain']> = {
  id?: Resolver<Maybe<ResolversTypes['ObjectId']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  meters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  feet?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  ObjectId?: GraphQLScalarType;
  Mountain?: MountainResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  collection?: CollectionDirectiveResolver<any, any, ContextType>;
  filter?: FilterDirectiveResolver<any, any, ContextType>;
  insert?: InsertDirectiveResolver<any, any, ContextType>;
  update?: UpdateDirectiveResolver<any, any, ContextType>;
  unset?: UnsetDirectiveResolver<any, any, ContextType>;
  set?: SetDirectiveResolver<any, any, ContextType>;
  inc?: IncDirectiveResolver<any, any, ContextType>;
  dec?: DecDirectiveResolver<any, any, ContextType>;
};


/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;
import { Db, Collection, ObjectID } from 'mongodb'
import { mapFilterToMongo, mapUpdateToMongo, paginateCursor } from 'ts-mongo-codegen'
import values from 'lodash/values'
import keyBy from 'lodash/keyBy'

export const fromMongoId = (obj: any) => {
  if (obj && obj._id) return obj._id.toHexString()
  if (obj && obj.id) return obj.id.toHexString()
  return ''
}

export type IMountainsCollection = Collection<Mountain>

export type IMountainContext = { mountains: IMountainsCollection }

export const getMountainsCollection = (db: Db) => db.collection<Mountain>('mountains')

export const mountainResolvers: MountainResolvers<IMountainContext> = { id: fromMongoId }

export type IMountainFilterArgs = { name?: { EQ?: string; GT?: string; GTE?: string; IN?: string[]; ALL?: string[]; LT?: string; LTE?: string; NE?: string; NIN?: string[]; }, meters?: { EQ?: number; GT?: number; GTE?: number; IN?: number[]; ALL?: number[]; LT?: number; LTE?: number; NE?: number; NIN?: number[]; }, feet?: { EQ?: number; GT?: number; GTE?: number; IN?: number[]; ALL?: number[]; LT?: number; LTE?: number; NE?: number; NIN?: number[]; }, location?: { EQ?: string; GT?: string; GTE?: string; IN?: string[]; ALL?: string[]; LT?: string; LTE?: string; NE?: string; NIN?: string[]; } }

export type IMountainFindArgs = { filter: IMountainFilterArgs, pagination: Pagination, sort: Sort }

export type IMountainFindByIdArgs = { id: ObjectID }

export type IMountainsFindByIdsArgs = { ids: ObjectID[] }

export const mountainQueryResolvers = {
  async findMountains(_: any, { filter, pagination, sort }: IMountainFindArgs, context: IMountainContext) {
    const query = mapFilterToMongo(filter || {})
    const total = () => context.mountains.find(query).count()
    const data = () => paginateCursor(
      context.mountains.find(query),
      { pagination, sort }
    ).toArray()
    return {
      total, 
      data
    }
  },
  async findMountainById(_: any, { id }: IMountainFindByIdArgs, context: IMountainContext) {
    return context.mountains.findOne({ _id: id })
  },
  async findMountainsByIds(_: any, { ids }: IMountainsFindByIdsArgs, context: IMountainContext) {
    const mountains = await context.mountains.find({ _id: { $in: ids } }).toArray()
    const mountainsById = keyBy(mountains, fromMongoId)
    return ids.map(id => id.toHexString()).map(id => mountainsById[id])
  },
}

export type IMountainInsert = { name?: string, meters?: number, feet?: number, location?: string }

export type IMountainInsertArgs = { mountain: IMountainInsert }

export type IMountainsInsertManyArgs = { mountains: IMountainInsert[] }

export type IMountainSetArgs = { name?: string, meters?: number, feet?: number, location?: string }

export type IMountainUnsetArgs = {  }

export type IMountainDecArgs = {  }

export type IMountainIncArgs = {  }

export type IMountainUpdateArgs = { id: ObjectID, mountainSet: IMountainSetArgs }

export type IMountainsUpdateManyArgs = { ids: ObjectID[], mountainSet: IMountainSetArgs }

export type IMountainRemoveArgs = { id: ObjectID }

export type IMountainsRemoveManyArgs = { ids: ObjectID[] }

export const mountainMutationResolvers = {
  async insertMountain(_: any, { mountain }: IMountainInsertArgs, context: IMountainContext) {
    const response = await context.mountains.insertOne(mountain)
    return response.ops[0]
  },
  async insertManyMountains(_: any, { mountains }: IMountainsInsertManyArgs, context: IMountainContext) {
    const response = await context.mountains.insertMany(mountains)
    const cursor = await context.mountains.find({
      _id: {
        $in: values(response.insertedIds)
      }
    })
    return cursor.toArray()
  },
  async updateMountain(_: any, { id, mountainSet }: IMountainUpdateArgs, context: IMountainContext) {
      const { value } = await context.mountains.findOneAndUpdate({ 
        _id: id 
      }, {
        $set: mountainSet
      }, {
        returnOriginal: false
      })
      return value || null
  },
  async updateManyMountains(_: any, { ids, mountainSet }: IMountainsUpdateManyArgs, context: IMountainContext) {
    await context.mountains.updateMany(
      { _id: { $in: ids } },
      {
        $set: mountainSet
      }
    )
    const mountains = await context.mountains.find({ _id: { $in: ids } }).toArray()
    const mountainsById = keyBy(mountains, fromMongoId)
    return ids.map(id => id.toHexString()).map(id => mountainsById[id])
  },
  async removeMountain(_: any, { id }: IMountainRemoveArgs, context: IMountainContext) {
    const { value } = await context.mountains.findOneAndDelete({ _id: id })
    return value || null
  },
  async removeManyMountains(_: any, { ids }: IMountainsRemoveManyArgs, context: IMountainContext) {
    const mountains = await context.mountains.find({ _id: { $in: ids } }).toArray()
    const mountainsById = keyBy(mountains, fromMongoId)
    await context.mountains.deleteMany({ _id: { $in: ids } })
    return ids.map(id => id.toHexString()).map(id => mountainsById[id])
  },
}

export function mongoCollectionFactory (db: Db) {
  const mountains = getMountainsCollection(db)

  return {
    mountains
  }
}