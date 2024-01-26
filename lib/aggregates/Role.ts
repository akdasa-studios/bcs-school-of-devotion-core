import { Aggregate, UuidIdentity } from '@akd-studios/framework/domain'
import { Permission } from './permissions'

export type RoleIdentity = UuidIdentity<'Role'>


export class Role
  extends Aggregate<RoleIdentity>
{
  constructor(
    identity: RoleIdentity,
    public name: string,
    public description: string,
    public permissions: Permission[]
  ) {
    super(identity)
  }

  hasPermission(
    permission: Permission
  ): boolean {
    return this.permissions.includes(permission)
  }
}
