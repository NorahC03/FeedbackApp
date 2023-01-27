import Card from '../components/Shared/Card';
import { Link } from 'react-router-dom';
function About() {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>
          This is a feedback page made with react with a goal of learning it
        </p>
        <p>Things learned while making this project</p>
        <ul>
          <li>Global State and local state(Component)</li>
          <li>Props and Prop Drilling</li>
          <li>Hooks(useState)</li>
          <li>Shared Components</li>
          <li>Deployment</li>
        </ul>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </Card>
  );
}
export default About;
