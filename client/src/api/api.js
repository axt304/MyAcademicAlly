import axios from 'axios';

const fetchProjects = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/projects');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching projects', error);
  }
};

