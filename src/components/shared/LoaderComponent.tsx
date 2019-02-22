import * as React from "react";
import { Segment, Loader, Image, Dimmer } from "semantic-ui-react";

interface IProps {
  title: string;
}

class LoaderComponent extends React.Component<IProps> {
  static defaultProps = {
    title: "Loading..."
  };

  constructor(props: IProps) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <Segment>
        <Dimmer active>
          <Loader>{this.props.title}</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    );
  }
}

export default LoaderComponent;
