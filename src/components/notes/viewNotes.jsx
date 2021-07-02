import { Link } from "react-router-dom";
import { getFirst50words,toTitleCase } from "../../store/utils/utils";
import userIcon from "../../images/user-icon.png";
import '../styles/notes.css'

const ViewNote =({notes,url,edit, handleEdit})=>{
    return(
        <div>
          {!notes.length && (
            <p className="text-info lead">
              Notes will be available soon!!! You can also add
              lessons you have learnt <Link to="/add/note" className="add-note">here.</Link>
            </p>
          )}
          { notes.map((note) => {
            return (
              <div className="container note my-3 py-3 px-4" key={note._id}>
                <h2 className="title">{`${toTitleCase(note.title)}`}</h2>
                <p className="lead">{`${getFirst50words(note.note, 30)}...`}</p>
                <div className="media">
                  <img
                    className="mr-3 note-avatar"
                    src={userIcon}
                    alt="Note owner"
                  />
                  <div className="media-body">
                   {note.hasOwnProperty("useremail") && (
                  <h6 className="mt-0 font-weight-bold">
                    <em>{note.hasOwnProperty("useremail")?note.useremail:""}</em>
                  </h6>
                )}
                <small className="mt-0">
                  {new Date(note.createdAt).toLocaleString()}
                </small>
              </div>
            </div>
{/* 
            <div className="mb-5 pb-2">
            <ViewNote
              notes={userNotes}
              url="/notes"
              edit={true}
              handleEdit={handleEdit}
            />
          </div> */}
            <Link
              className="btn btn-lg my-4 see-more"
              to={`${url}/${note._id}`}
              role="button"
            >
              See more
            </Link>{" "}
            &nbsp;
                {edit && (
                    <span
                    className="btn btn-lg my-4"
                    role="button"
                    onClick ={() => {
                      if (edit) handleEdit(note);
                    }}
                  >
                    Edit Note
                  </span>
                )}
                <hr className="my-4" />
                </div>
            );
          })}
        </div>
    );
}

export default ViewNote;