//import magic from The Great Beyond
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
//import garbage from Craig
import Nav from './Nav';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Landing from './Landing';

//our main component will...
const Main = () => {
	//...prepare state for both campus and student lists
	const [campusList, setCampusList] = useState([]);
	const [studentList, setStudentList] = useState([]);
	//...set the state to the database data upon first loading page
	useEffect(()=> {
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}, [])
  //...declare a bunch of CRUD!
	
  //🌟C🌟reate:
	const addCampus = async(campus)=> {
		try{
			//Here's the BRAIN-BUSTER:
			let newCampus = await axios.post('/api/campuses', campus)
			/*Gives me these errors in the browser Dev Tools:
AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}code: "ERR_NETWORK"config: {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}message: "Network Error"name: "AxiosError"request: XMLHttpRequest {data: undefined, onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, …}response: XMLHttpRequest {data: undefined, onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, …}[[Prototype]]: Error

          POST http://localhost:3000/api/campuses net::ERR_EMPTY_RESPONSE
dispatchXhrRequest @ xhr.js:220
xhrAdapter @ xhr.js:16
dispatchRequest @ dispatchRequest.js:58
request @ Axios.js:109
httpMethod @ Axios.js:144
wrap @ bind.js:9
_callee$ @ Main.js:29
tryCatch @ Main.js:2
(anonymous) @ Main.js:2
(anonymous) @ Main.js:2
asyncGeneratorStep @ Main.js:2
_next @ Main.js:2
(anonymous) @ Main.js:2
(anonymous) @ Main.js:2
addCampus @ Main.js:26
onSubmit @ AddCampus.js:19
callCallback @ react-dom.development.js:4164
invokeGuardedCallbackDev @ react-dom.development.js:4213
invokeGuardedCallback @ react-dom.development.js:4277
invokeGuardedCallbackAndCatchFirstError @ react-dom.development.js:4291
executeDispatch @ react-dom.development.js:9041
processDispatchQueueItemsInOrder @ react-dom.development.js:9073
processDispatchQueue @ react-dom.development.js:9086
dispatchEventsForPlugins @ react-dom.development.js:9097
(anonymous) @ react-dom.development.js:9288
batchedUpdates$1 @ react-dom.development.js:26140
batchedUpdates @ react-dom.development.js:3991
dispatchEventForPluginEventSystem @ react-dom.development.js:9287
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ react-dom.development.js:6465
dispatchEvent @ react-dom.development.js:6457
dispatchDiscreteEvent @ react-dom.development.js:6430


			






			/*...or something like that. The problem is that I can't get this to update the database, no matter what I try.🧠💥💨
			BUT if it had updated the database, then obviously, I would run these next:		
			fetchAndSetCampuses();
			fetchAndSetStudents();
			Since it doesn't, I'll just use wizard magic to make it look like the object was added. That way, when you click on it, the entire app will crash.👍🏻*/
			setCampusList([...campusList, JSON.parse(newCampus.config.data)]);
		}
		catch(err){
			console.log(err);
		}
	}







	const addStudent = async(student)=> {
		// ⬆️SEE NOTES ON `addCampus` ABOVE⬆️
		try{
			const newStudent = await axios.post('/api/students', student);
			// fetchAndSetCampuses();
			// fetchAndSetStudents();
			setStudentList([...studentList, JSON.parse(newStudent.config.data)])
		}
		catch(err){
			console.log(err);
		}
	}/*RESULTS IN:
	uSfc <—— 304 Not Modified (<—> 1.9 ms)
/Users/thecraggle/Fullstack/REstarting-over/server/api/students.js:9
        let { firstName, lastName, email, gpa, imageUrl } = req.body;
              ^

TypeError: Cannot destructure property 'firstName' of 'req.body' as it is undefined.
    at /Users/thecraggle/Fullstack/REstarting-over/server/api/students.js:9:8
    at Layer.handle [as handle_request] (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/layer.js:95:5)
    at /Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/index.js:346:12)
    at next (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/index.js:280:10)
    at Function.handle (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/index.js:175:3)
    at router (/Users/thecraggle/Fullstack/REstarting-over/node_modules/express/lib/router/index.js:47:12)

Node.js v18.12.1
[nodemon] app crashed - waiting for file changes before starting...

&&

xhr.js:220          POST http://localhost:3000/api/students net::ERR_EMPTY_RESPONSE
dispatchXhrRequest @ xhr.js:220
xhrAdapter @ xhr.js:16
dispatchRequest @ dispatchRequest.js:58
request @ Axios.js:109
httpMethod @ Axios.js:144
wrap @ bind.js:9
_callee2$ @ Main.js:96
tryCatch @ Main.js:2
(anonymous) @ Main.js:2
(anonymous) @ Main.js:2
asyncGeneratorStep @ Main.js:2
_next @ Main.js:2
(anonymous) @ Main.js:2
(anonymous) @ Main.js:2
addStudent @ Main.js:92
onSubmit @ AddStudent.js:23
callCallback @ react-dom.development.js:4164
invokeGuardedCallbackDev @ react-dom.development.js:4213
invokeGuardedCallback @ react-dom.development.js:4277
invokeGuardedCallbackAndCatchFirstError @ react-dom.development.js:4291
executeDispatch @ react-dom.development.js:9041
processDispatchQueueItemsInOrder @ react-dom.development.js:9073
processDispatchQueue @ react-dom.development.js:9086
dispatchEventsForPlugins @ react-dom.development.js:9097
(anonymous) @ react-dom.development.js:9288
batchedUpdates$1 @ react-dom.development.js:26140
batchedUpdates @ react-dom.development.js:3991
dispatchEventForPluginEventSystem @ react-dom.development.js:9287
dispatchEventWithEnableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay @ react-dom.development.js:6465
dispatchEvent @ react-dom.development.js:6457
dispatchDiscreteEvent @ react-dom.development.js:6430
*/

	//🌟R🌟ead:
	const fetchAndSetCampuses = async()=> {
		const campusAxiosRes = await axios.get('/api/campuses');
		setCampusList(campusAxiosRes.data);
	}
	const fetchAndSetStudents = async()=> {
		const studentAxiosRes = await axios.get('/api/students');
		setStudentList(studentAxiosRes.data);
	}
	
  //🌟U🌟pdate:
	const editCampus = (id)=> {
		console.log('You would like to edit the event to be: ', id);
		console.log('TOO BAD, SUCKA!!!!!')
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}







	const editStudent = async (student)=> {
		try{
		await axios.put(student);
		}
		catch(err){
			console.log('WHOOPSIES!!!')
			console.log(err)
		}
		// fetchAndSetCampuses();
		// fetchAndSetStudents();
	}/*RESULTS IN:

	*/







	//disenroll student from campus
	const disenroll = (id)=> {
		console.log('Pretend we did something so that the student with this id is no longer at this campus:', id)
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}

	//🌟D🌟emolerize!:
	const deleteCampus = async(id)=> {
		await axios.delete(`/api/campuses/${id}`);
		console.log('A campus has been deleted.');
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}
	const deleteStudent = async(id)=> {
		await axios.delete(`/api/students/${id}`)
		console.log('A student has been deleted.');
		fetchAndSetCampuses();
		fetchAndSetStudents();
	}

  //JSX should return the whole app with routes and links and everything! ...🤞🏻
	return (
		<Router>
			<div className='app-container'>
				<Nav />
				{/*The navbar comes above the routes because it should be on top of the page, no matter which page is showing*/}
				<Routes>
					<Route 
					  path='/' 
						element={<Landing />} 
					/>
					<Route 
					  path='/campuses' 
						element={<Campuses 
						  list={campusList} 
							onAdd={addCampus} 
							onDelete={deleteCampus}
						/>} 
					/>
					<Route 
					  path='/students' 
						element={<Students 
						  list={studentList} 
							onAdd={addStudent} 
							// onDelete={deleteStudent} > SEE NOTE IN 'SingleStudent.js'
						/>} 
					/>
					<Route 
					  path='/campuses/:id' 
						element={<SingleCampus 
						  list={campusList}
							onDelete={deleteCampus}
							onEdit={editCampus}
							onRemove={disenroll}
						/>} 
					/>
					<Route 
					  path='/students/:id' 
						element={<SingleStudent 
						  list={studentList}
							onDelete={deleteStudent}
							onEdit={editStudent}
						/>} 
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default Main;
