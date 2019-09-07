import React from 'react';
import { Skeleton, Card, Avatar } from "antd";

import './index.scss';

const { Meta } = Card;

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-card">
        <Card >
          <Skeleton loading={} avatar active>
            <Meta
              avatar={
                <Avatar/>
              }
            />
          </Skeleton>
        </Card>
      </div>
    )
  }
}

export default PostCard;