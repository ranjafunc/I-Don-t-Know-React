import React from "react";
import { Link } from "react-router-dom";
import { BookOutlined, EditOutlined, HomeOutlined } from "@ant-design/icons";
import { BookType } from "../types";
import moment from "moment";
import { Button, Tooltip } from "antd";

interface BookProps extends BookType {}

const Book: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createdAt,
  url,
}) => {
  return (
    <div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined /> {title}
        </Link>
      </div>
      <div>
        <Link to={`/book/${bookId}`}>{author}</Link>
      </div>
      <div>{moment(createdAt).format("MM-DD-YYYY hh:mm a")}</div>
      <div>
        <Tooltip title={url}>
          <a href={url} target='_BLANK'>
            <Button
              size='small'
              type='primary'
              shape='circle'
              icon={<HomeOutlined />}
            />
          </a>
        </Tooltip>
        <Tooltip title='Edit'>
          <Button
            size='small'
            type='primary'
            shape='circle'
            icon={<EditOutlined />}
          />
        </Tooltip>
        <Tooltip title='DELETE'>
          <Button
            size='small'
            type='primary'
            shape='circle'
            icon={<EditOutlined />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
