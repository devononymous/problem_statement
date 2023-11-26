import React, { useState } from 'react'
import StatementRules from '../components/StatementRules'
import TypographyTest from '../components/TypographyTest'
import ReusableDescription from '../components/ReusableDescription'
import FieldLimit from '../components/FieldLimit'
import RulesStatement from '../components/RulesStatement'
import Statements from '../components/Statements'
import NewStatement from '../components/NewStatement'
import FieldsInput from '../components/FieldInput'
import Description from '../components/Description'

const Home = () => {
const fieldLabels = ['Problem Statement1', 'ProblemStatement2', 'ProblemStatement3']
const placeholder = ['A concerning number of startups and scale-ups crash, not due to lack of innovation but GTM inadequacies - more specifically 85% (CBI Insights, 2022) of inadequacies can be attributed to a poor go-to-market approach. The top-tier GTM expertise, pivotal for unlocking potential, remains exclusive to tech giants and elite consultancies.',
 'As maturating companies grow, they often squander resources on unproductive tasks, misallocate time and money, and grapple with ineffective GTM strategies, leading to nearly 72% (SalesForce, 2022) of sales professionals missing their annual quotas. Such inefficiencies directly hamper accelerated, high-margin growth',
 'Companies leveraging digital innovation in their go-to-market approach outpace peers with 30% (McKinsey, 2022) higher acquisition speed. Meanwhile, large entities slow in adopting advanced GTM tech risk reduced growth, margins, and employee morale. Agile competitors capitalise on these gaps, chipping away at their market dominance'
]
  const [fieldLimitValue, setFieldLimitValue] = useState('');
    const [fieldValues, setFieldValues] = useState({});

  // const handleCustomChange = (value: string) => {
  //   setFieldLimitValue(value);
  // };

const handleFieldChange = (fieldLabel: any, value: any) => {
  setFieldValues((prevValues) => ({
    ...prevValues,
    [fieldLabel]: value,
  }));
};

const handleAreaFieldChange = (fieldLabel: any, value: any) => {
  setFieldValues((prevValues) => ({
    ...prevValues,
    [fieldLabel]: value,
  }));
};

  // const jsonString = JSON.stringify(fieldValues);
 // {...fieldValues}
    return (
    <div>
          <RulesStatement 
          title={'Problem Statement(s)'} 
          limit={2} 
          TitleLength={30} 
          DescriptionLength={350}
          />
           {/* <FieldsInput placeholders={placeholder} fieldLabels={fieldLabels} onChange={handleFieldChange}/> */}
              {/* <p>{JSON.stringify(fieldValues)}</p> */}
              <Description range={350}  maxRows={4} minRows={4} fieldLabels={fieldLabels} placeholders={placeholder} onChange={handleAreaFieldChange}/>
    </div>
  )
}

export default Home