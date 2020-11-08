import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../services/api";
import apiUrls from "../services/apiUrls";

const User = () => {
  let { username } = useParams();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const searchInfo = async () => {
      const response = await api.get(`${apiUrls.user}/${username}`);
      setUserInfo(response.data);
    };

    searchInfo();
  }, [username]);

  if (Object.keys(userInfo).length === 0) {
    return <div></div>;
  }

  return (
    <Row>
      <Col xs={4}>
        <Card>
          <Card.Img variant="top" src={userInfo.person.pictureThumbnail} />
          <Card.Body>
            <Card.Title>{userInfo.person.name}</Card.Title>
            <Card.Text>
              {userInfo.person.professionalHeadline}
              <br />
              {userInfo.person.location.name}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default User;
