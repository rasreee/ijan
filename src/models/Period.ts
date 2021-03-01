import firebase from 'firebase';

export type Timestamp = firebase.firestore.Timestamp;

export default interface Period {
	start: Timestamp;
	end: Timestamp;
}
