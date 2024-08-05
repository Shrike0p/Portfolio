import React from 'react';

const SkillsCard = ({ title, skills, imageUrl }) => {
  return (
    <div className="relative border-white rounded-md border-2 p-4 mb-4 cursor-pointer group">
      <div className="flex items-center mb-2">
        <img src={imageUrl} alt={title} className="w-8 h-8 mr-2" />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="p-2">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;

