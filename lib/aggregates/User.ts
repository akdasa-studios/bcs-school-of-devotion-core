import { Aggregate, UuidIdentity } from '@akd-studios/framework/domain'
import type { RoleIdentity } from './Role'

export type UserIdentity = UuidIdentity<'User'>

export enum UserStatus {
  Invited = 'invited',
  Active = 'active',
  Inactive = 'inactive',
}

export class User
  extends Aggregate<UserIdentity>
{
  constructor(
    identity: UserIdentity,
    public name: string,
    public email: string,
    public roleIds: RoleIdentity[] = [],
    public status: UserStatus = UserStatus.Active,
    public title: string = '',
    public department: string = '',
    public avatarUrl: string = ''
  ) {
    super(identity)
  }
}
