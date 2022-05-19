import React, { useState } from "react";
import BooksListItem from "./BooksListItem";
import CreateBookModal from "./CreateBookModal";
import roomStore from "../stores/booksStore";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
function ChatRoomsList() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const roomsList = roomStore.rooms.map((room) => {
    return <BooksListItem room={room} key={room._id} />;
  });
  return (
    <div className="main__chatlist">
      <button className="btn">
        <i className="fa fa-plus"></i>
        <span onClick={openModal}>New Book</span>
        <CreateBookModal isOpen={isOpen} closeModal={closeModal} />
      </button>
      <Link to={`/BookList`}>BookList</Link>
      <center>
        <div className="chatlist__heading">
          <h2>Books List</h2>
        </div>
      </center>

      <div className="chatlist__items">{roomsList}</div>
    </div>
  );
}
export default observer(ChatRoomsList);
