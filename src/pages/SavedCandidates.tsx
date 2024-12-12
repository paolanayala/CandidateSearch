import Candidate from '../interfaces/Candidate.interface';
import { useEffect, useState } from 'react';

const SavedCandidates = () => {
  const [prospectiveCandidates, setProspectiveCandidates] = useState<Candidate[]>([]);

  //add data to table from local storage
  const getStoredCandidates = async () => {
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      setProspectiveCandidates(JSON.parse(storedCandidates));
    }
    return prospectiveCandidates;
  };
    useEffect(() => {
      getStoredCandidates();
    }   , []);


  return (
    <>
      <h1>Prospective Candidates</h1>
      <table className="table">
        <thead>
          <tr className="tr">
            <th>Avatar</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Location</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Hireable</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {prospectiveCandidates.map((candidate, index) => (
          <tr className="tr" key={index}>
            <td>{candidate.avatar_url}</td>
            <td>{candidate.name}</td>
            <td>{candidate.username}</td>
            <td>{candidate.email}</td>
            <td>{candidate.location}</td>
            <td>{candidate.company}</td>
            <td>{candidate.bio}</td>
            <td>{candidate.hireable}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SavedCandidates;
