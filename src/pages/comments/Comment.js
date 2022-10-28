import React, { useState } from "react";

import { Media } from "react-bootstrap";
import { MoreDropdown } from "../../components/MoreDropdown";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext"
import { axiosRes } from "../../api/axiosDefaults";

import CommentEditForm from "./CommentEditFrom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";




const Comment = (props) => {
  const { 
    profile_id, 
    profile_image, 
    id, 
    setPost, 
    setComments, 
    owner, updated_at, 
    content 
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;



  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({	
        results: [	
          {	
            ...prevPost.results[0],
          comments_count: prevPost.results[0].comments_count - 1,
        },
      ],
      }));


      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <>
    <hr />
      <Media>
      <Link to={`/profiles/${profile_id}`}> 
        <Avatar src={profile_image} />
      </Link>

      <Media.Body className="align-self-center ml-2">
        <span className={styles.owner}>{owner}</span>
        <span className={styles.Date}>{updated_at}</span>
      {showEditForm ? (
         <CommentEditForm
         id={id}
         profile_id={profile_id}
         content={content}
         profileImage={profile_image}
         setComments={setComments}
         setShowEditForm={setShowEditForm}
       />
      ) : (
        <p>{content}</p>
      )}
      </Media.Body>
      {is_owner && (
        <MoreDropdown 
        handleEdit={() => setShowEditForm(true)}
        handleDelete={handleDelete} 
        />
      )}
      </Media>
      </>
  );
};

export default Comment;