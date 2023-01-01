import { getPostController } from '@/controllers/post.controller';
import { getUserFromContext } from '@/utils/jwt';
import { GraphQLError, GraphQLInt } from 'graphql';
import { GraphQLDefaultFieldConfig } from '../typedefs/graphql.typedef';
import { GraphQLPostType } from '../typedefs/post.typedef';

export const GetPostQuery: GraphQLDefaultFieldConfig = {
  type: GraphQLPostType,
  args: {
    postId: { type: GraphQLInt },
  },
  resolve(_, requestArgs, context) {
    if (!requestArgs?.postId) {
      throw new GraphQLError('Post ID is not provided');
    }

    let user: any = { id: null };
    if (
      context.req.headers.authorization &&
      context.req.headers.authorization.length > 6
    ) {
      user = getUserFromContext(context);
    }

    return getPostController(requestArgs.postId, user?.id);
  },
};
