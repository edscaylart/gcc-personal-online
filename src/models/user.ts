import { BaseType } from "./geral";

/* eslint-disable camelcase */
export interface User extends BaseType {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  CPF?: string;
  birthDate?: string | number;
  create_at?: Date;
  update_at?: Date;
  permissions?: string[];
  agent_code?: number;
  agent_email?: string;
  agent_name?: string;
  code?: any;
  department_code?: number;
  enabled?: boolean;
  enrollment?: number;
  force_change_password?: boolean;
  machine_name?: null;
  password_change_time?: number;
  role?: string;
  user_group_code?: number;
  windows_domain?: string;
  windows_user?: string;
}
