interface BaseUserShape {
  Username: string;
}

class BaseUser implements BaseUserShape {
  constructor(props: BaseUserShape) {
    this.Username = props.Username;
  }
  Username: string;
}

interface UserShape extends BaseUser {
  AuthToken: string;
}

class User implements UserShape {
  constructor(props: UserShape) {
    this.AuthToken = props.AuthToken;
    this.Username = props.Username;
  }
  AuthToken: string;
  Username: string;
}

export { BaseUser, User };
