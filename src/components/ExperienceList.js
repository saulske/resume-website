import React, {Fragment} from 'react';

import Experience from './Experience';
import {Link} from './Reference';

const ExperienceList = ({list}) => {
  return (
    <Fragment>
      {list.map((exp, i) => <Experience key={i} data={exp} hidden={i > 2} />)}
      <span>
        <i>
          <Link href="https://www.linkedin.com/in/sauliusskeirys" target="_blank">
            Previous...
          </Link>
        </i>
      </span>
    </Fragment>
  )
}

export default ExperienceList;
