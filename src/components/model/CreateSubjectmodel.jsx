import { useState } from "react";
import ChooseSubject from "./ChooseSubject";
import SubjectDetail from "./SubjectDetail";

export default function CreateSubjectmodel({ isCreatemodel, setIsCreatemodel, addTask }) {
  const [isDetail, setIsDetail] = useState(false);
  return (
    <div>
      <ChooseSubject
        isCreatemodel={isCreatemodel}
        setIsCreatemodel={setIsCreatemodel}
        isDetail={isDetail}
        setIsDetail={setIsDetail}
      />
      {isDetail && (
        <SubjectDetail
          isDetail={isDetail}
          setIsDetail={setIsDetail}
          isCreatemodel={isCreatemodel}
          setIsCreatemodel={setIsCreatemodel}
          addTask={addTask}
        />
      )}
    </div>
  );
}
