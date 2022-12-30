import { GraphQLObjectType } from 'graphql';
import {
  LoginMutation,
  RegisterMutation,
  UpdateMutation,
} from './user.mutation';
import {
  CreateNgoMutation,
  DeleteNgoMutation,
  DismissNgoAdminMutation,
  JoinNgoMutation,
  LeaveNgoMutation,
  MakeNgoAdminMutation,
  RemoveMemberMutation,
  UpdateNgoMutation,
} from './ngo.mutation';
import { CreatePostMutation } from './post.mutation';

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    login: LoginMutation,
    register: RegisterMutation,
    updateUser: UpdateMutation,
    // ngo operations
    createNgo: CreateNgoMutation,
    updateNgo: UpdateNgoMutation,
    deleteNgo: DeleteNgoMutation,
    // ngo user operations
    joinNgo: JoinNgoMutation,
    makeNgoAdmin: MakeNgoAdminMutation,
    dismissNgoAdmin: DismissNgoAdminMutation,
    removeMember: RemoveMemberMutation,
    leaveNgo: LeaveNgoMutation,
    // post operations
    createPost: CreatePostMutation,
  }),
});
