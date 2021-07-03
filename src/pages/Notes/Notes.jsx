// import notes from "./../assets/data/notes.json";
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import useContextGetter from '../../hooks/useContextGetter';
// import { Link } from 'react-router-dom';

import ViewNote from '../../components/notes/viewNotes';
import Note from '../../components/notes/note';
// import SearchNote from '../../components/notes/searchNote';

function Notes() {
	const {
		state: { userData, notes },
	} = useContextGetter();
	let match = useRouteMatch();

	return (
		<main className="mt-3">
			<div className="container mt-3">
				<h2 className="font-weight-bold">
					Welcome {userData.email}
				</h2>
			</div>
			<Switch>
				<Route path={`${match.path}/:noteId`}>
					<Note />
				</Route>
				<Route path={match.path}>
					{/* <div>
						<Link
							className="btn btn-lg my-4 mx-2"
							to="/user/notes"
							role="button"
						>
							Add Notes
						</Link>
						<Link
							className="btn btn-lg my-4 mx-2"
							to="/notes"
							role="button"
						>
							View Notes
						</Link>
					</div> */}
					{/* <div>
						<SearchNote url={match.url} />
					</div> */}

					<div className="my-2"></div>
					<ViewNote notes={notes} url={match.url} loggedUser={userData}/>
				</Route>
			</Switch>
		</main>
	);
}

export default Notes;
