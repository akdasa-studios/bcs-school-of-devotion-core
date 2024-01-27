import { Aggregate, UuidIdentity } from '@akd-studios/framework/domain'
import type { RoleIdentity } from './Role'

export type UserIdentity = UuidIdentity<'User'>


export class User
  extends Aggregate<UserIdentity>
{
  constructor(
    identity: UserIdentity,
    public name: string,
    public roleIds: RoleIdentity[] = []
  ) {
    super(identity)
  }
}
