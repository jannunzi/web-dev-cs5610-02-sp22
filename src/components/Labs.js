import {useProfile} from "../contexts/profile-context";

const Labs = () => {
  const {profile} = useProfile()
  return(
    <div>
      {profile && profile.email}
      <h1>Labs</h1>
      <h2>Lab 1</h2>
      <h2>Lab 2</h2>
      <h2>Lab 3</h2>
      <h2>Lab 4</h2>
      <h2>Lab 5</h2>
    </div>
  );
};
export default Labs;