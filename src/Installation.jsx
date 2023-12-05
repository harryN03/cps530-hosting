import React from 'react';

const Installation = () => {
  return (
    <div>
      <h2>Installation</h2>
      <p>Install React based own <a href="https://kinsta.com/knowledgebase/install-react/" target="_blank">this instruction</a></p>
      <p>After that, to set up this project, I used the following commands:</p>
      <code>
        {`npx create-react-app my-webpage`}
      </code> <br></br>
      <code>{`cd my-webpage`}</code><br></br>
      <code>{`npm start`}</code>
    </div>
  );
};

export default Installation;