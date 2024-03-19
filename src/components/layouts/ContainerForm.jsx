import Button from "./Button";
import Inputs from "./Inputs";
import Text from "./Text";
import Title from "./Title";

function ContainerForm() {
  return (
    <div className="container-form">
      <div className="title">
        <Title />
      </div>
      <div className="container-box">
        <div className="box">
          <Inputs />
          <Button />
          <div className="text">
            <Text />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerForm;
