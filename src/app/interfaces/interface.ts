export interface Users_Get {
    id_user:               number;
    document:              string;
    firstname:             string;
    lastname:              string;
    username:              string;
    password:              string;
    email:                 string;
    phone:                 string;
    creation_date:         Date;
    usersRole:             string;
    enabled:               boolean;
    accountNonExpired:     boolean;
    credentialsNonExpired: boolean;
    authorities:           Authority[];
    accountNonLocked:      boolean;
}

export interface Authority {
    authority: string;
}

export interface Users {
    document:  string;
    firstname: string;
    lastname:  string;
    email:     string;
    phone:     string;
    username:  string;
    password:  string;
    role:      number;
}

export interface MenuOpts {
    icon: string;
    name: string;
    redirectTo: string;
}
