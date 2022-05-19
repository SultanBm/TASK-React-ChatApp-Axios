import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import roomStore from "../stores/booksStore";
import UpdateRoomModal from "./UpdateRoomModal";

export default function ChatRoomitem(props) {
  const room = props.room;

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleDelete = (event) => {
    event.preventDefault();
    roomStore.deleteRoom(room._id);
  };
  return (
    <div className="group">
      <Link to={`/borrow/`}>
        <div style={{ animationDelay: "0.1" }} className="chatlist__item">
          <div className="avatar">
            <div className="avatar-img">
              <img src={room.image} alt="#" />
            </div>
          </div>
          <div className="userMeta">
            <p>{room.author}</p>
            <span className="activeTime">{room.title}</span>
            <span className="activeTime">{room.genres}</span>
          </div>
        </div>
      </Link>

      <Button className="delete" onClick={handleDelete}>
        Delete
      </Button>
      <Button className="delete" onClick={openModal}>
        Update
      </Button>
      <UpdateRoomModal isOpen={isOpen} closeModal={closeModal} room={room} />
    </div>
  );
}
