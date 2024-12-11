import React from 'react'
import styled from 'styled-components'
import { education, skills } from '../../data/data'
import animation from '../../styled/animation'
import { technicalSkills } from '../../data/data'

const Skills = () => {
  animation()
  return (
    <Skillset>
        <div className="skill-01">
      
                    {skills.map((data)=>(
                      <>
                    
                         <Box className="box-01" data-aos="flip-up">
                           <Skill>
                             <h1>{data.name}</h1>
                             <SkillLabel>{data.prof1}</SkillLabel>
                             <ProgressBar>
                               <Progress
                                 data-aos="fade-right"
                                 style={{ width: `${data.prof1Progress}%` }}
                               />
                             </ProgressBar>
                           </Skill>
                           <Skill>
                             <SkillLabel>{data.prof2}</SkillLabel>
                             <ProgressBar>
                               <Progress
                                 data-aos="fade-right"
                                 style={{ width: `${data.prof2Progress}%` }}
                               />
                             </ProgressBar>
                           </Skill>
                           <Skill>
                             <SkillLabel>{data.prof3}</SkillLabel>
                             <ProgressBar>
                               <Progress
                                 style={{ width: `${data.prof3Progress}%` }}
                               />
                             </ProgressBar>
                           </Skill>
                           <Skill>
                             <SkillLabel>{data.prof4}</SkillLabel>
                             <ProgressBar>
                               <Progress
                                 style={{ width: `${data.prof4Progress}%` }}
                               />
                             </ProgressBar>
                           </Skill>
                         </Box>
                        </>
                    ))}
                  
                    <Box className="box-02"  data-aos="flip-up">
                        <h1>Technical Skills</h1>
                        <RadialSkills>
  {technicalSkills.map((skill) => (
    <RadialSkill key={skill.name}>
      <Circle>
        <ProgressCircle progress={skill.progress}>
          <InnerCircle />
          <SkillPercentage>{skill.progress}%</SkillPercentage>
        </ProgressCircle>
      </Circle>
      <SkillLabel>{skill.name}</SkillLabel>
    </RadialSkill>
  ))}
</RadialSkills>
                        </Box>

                     
                        <Box className="box-03" data-aos="flip-up">
                        <h1>Education</h1>
                        <Education>
  {education.map((edu) => (
    <Educations key={edu.name}>
    <div>
      <h4>{edu.name}</h4>
      <p>{edu.desc}</p>
    </div>
    </Educations>
  ))}
</Education>
                        
                        </Box>
            </div>
       
    </Skillset>
  )
}
export default Skills
const Skillset = styled.div`
   background-image:url("./images/bg-02.png");
  background-size:cover;
  background-position:center;
 padding:120px 7px;
  display:flex;
 align-items:center;
  justify-content:center;
  
    h1{
      color:#fff;
    }
    h4{
      color:#E0A80D;
      font-size:20px;
      font-weight:600;
      text-align:left
    }
    p{
      text-align:left;
      color:#fff;
    }
    .skill-01 {
    display: flex;
    gap:40px;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
}
.box-01,.box-02,.box-03{
  background: #212222;
    width:33.33%;
    border-radius:20px;
    padding:40px;
}
@media only screen and (max-width: 768px){
    .skill-01{
      flex-direction:column;
      align-items:center
    }
    .box-01,.box-02,.box-03{
      width:100%;
    }
  }
`;
const Skill = styled.div`
  margin-bottom: 20px;
`;

const SkillLabel = styled.p`
  margin: 0 0 5px 0;
  font-weight: bold;
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  border-radius: 5px;
  height: 10px;
  width: 100%;
 position:relative;
 overflow:hidden
`;

const Progress = styled.div`
  background: #E0A80D;
  height: 100%;
  width:0;
  transition: width 1s ease-in-out;
  
`;
//Technical Skills:
const RadialSkills = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const RadialSkill = styled.div`
  text-align: center;
  margin: 20px;
`;

const Circle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;

const ProgressCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #e0a80d ${({ progress }) => progress}%,
    #e0e0e0 ${({ progress }) => progress}%
  );
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.div`
  width: 80%;
  height: 80%;
  background: #212222; /* Matches the card background to create the ring effect */
  border-radius: 50%;
  position: absolute;
`;

const SkillPercentage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  z-index: 1; /* Ensure it is above the inner circle */
`;
//Education
const Box = styled.div`
  background: #212222;
  padding: 5%;
  border-radius: 20px;
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effect */

  &.box-01, &.box-02, &.box-03 {
    &:hover {
      transform: scale(1.05); /* Slight zoom on hover */
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3); /* Shadow effect */
      border: 2px solid #e0a80d; /* Golden border on hover */
    }
  }
`;
  const Education =styled.div`
  
  `;
  const Educations =styled.div``