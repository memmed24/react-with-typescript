import * as React from "react";
import { connect } from "react-redux";
import { Grid, Button, Transition, List, Divider } from "semantic-ui-react";
import { fetchUsers, deleteUser } from "../actions";
import LoaderComponent from "./shared/LoaderComponent";
import { IUser } from "../models/User";

interface IStateProps {
  /**
   * users
   */
  users: Array<IUser>;

  /**
   * users fetch status
   */
  isLoading: boolean;

  /**
   * @return void
   * fetchs all users
   */
  fetchUsers(): void;

  /**
   * @param id
   * @return void
   * removes user
   */
  deleteUser(id: number): void;
}

interface IProps extends IStateProps {}
interface IState {
  isLoading: boolean;
}

class Users extends React.Component<IProps, IState> {
  private componentName: string = "Users";

  state: IState = {
    isLoading: true
  };

  constructor(props: IProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  componentWillReceiveProps(newProps: IProps) {
    const { isLoading } = newProps;
    this.setState({ isLoading });
  }

  onUsersFetch = (): void => {
    this.setState({ isLoading: true });
    this.props.fetchUsers();
  };

  onUserDelete = (id: number): void => {
    this.props.deleteUser(id);
  };

  renderContent(): JSX.Element {
    const animationType: any =
      this.props.users.length % 2 !== 0 ? "slide left" : "slide right";
    return this.state.isLoading ? (
      <LoaderComponent />
    ) : (
      <Transition.Group
        as={List}
        animation={animationType}
        duration={300}
        size={"huge"}
        verticalAlign="middle"
      >
        {this.props.users.map(({ id, name, email, address }) => (
          <List.Item key={id}>
            <List.Content floated={"right"}>
              <Button color="red" onClick={e => this.onUserDelete(id)}>
                Delete
              </Button>
            </List.Content>
            <List.Content>
              {name} {email} {address.street}
            </List.Content>
          </List.Item>
        ))}
      </Transition.Group>
    );
  }

  render(): JSX.Element {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <h1>{this.componentName}</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        {this.renderContent()}
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Button color="facebook" onClick={e => this.onUsersFetch()}>
                Upload again
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToParams = (state: any) => ({
  users: state.userReducer.users,
  isLoading: state.userReducer.isLoading
});

export default connect(
  mapStateToParams,
  { fetchUsers, deleteUser }
)(Users);
