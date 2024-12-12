import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';
import SavedCandidates from './SavedCandidates';

const CandidateSearch = () => {
  //const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [, setSavedCandidates] = useState<Candidate[]>([]);
  const [candidateData, setCandidateData] = useState<Candidate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // const getGithubData = async () => {
  //   const data = await searchGithub();
  //   setCandidateData(data);
  // };
  
  const getGithubData = async () => {
    setLoading(true);
    try {
      const data = await searchGithub();
      setCandidateData(data);
    } catch (error) {
      setError('There was an error fetching the data');
    } finally {
      setLoading(false);
    }
  };
   console.log(candidateData);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(savedCandidates);
    getGithubData();
  },  []);
  if (loading)
    return <p>Loading...</p>;
  if (error)
    return <p>{error}</p>;


  return (
    <div>
    <h1>CandidateSearch</h1>;
    {candidateData && <pre>{JSON.stringify(candidateData, null, 2)}</pre>}
    </div>
  );
};
console.log(SavedCandidates)

export default CandidateSearch;
